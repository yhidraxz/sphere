import { chromium } from "playwright";
import { createObjectCsvWriter } from "csv-writer";

const csvWriter = createObjectCsvWriter({
  path: "c:/sfirout/server/csvData/barbearias.csv",
  header: [
    { id: "nome", title: "NAME" },
    { id: "nota", title: "NOTA" },
    { id: "numero", title: "NUMERO" },
  ],
});

export async function scrapeMaps(queries) {
  console.log("iniciando browser");
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  let fullBusinessList = [];

  for (let query of queries) {
    await page.goto(query);

    const scrollable = await page.$(
      "xpath=/html/body/div[2]/div[3]/div[8]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div[1]"
    );

    console.log(`im at page ${query}`);

    let endOfList = false;

    while (!endOfList) {
      await scrollable.evaluate((node) => node.scrollBy(0, 50000));
      await page.waitForTimeout(5000);

      // Click buttons to prevent locking load
      const buttons = await page.$$(".hfpxzc");

      const randomIndex = Math.floor(Math.random() * buttons.length);

      const button = buttons[randomIndex];
      await button.click();

      console.log("clicked");

      endOfList = await page.evaluate(() =>
        document.body.innerText.includes("Você chegou ao final da lista.")
      );

      console.log("end of list? " + endOfList);
    }

    const urls = await page.$$eval(".hfpxzc", (elements) =>
      elements.map((element) => element.href)
    );

    let listaEmpresas = [];

    for (let i = 0; i < urls.length; i++) {
      //extract info
      await page.goto(urls[i]);

      let numero = "";

      let objInvalido = await page.evaluate(() =>
        document.body.innerText.includes("Temporarily closed")
      );

      if (objInvalido) {
        break;
      }

      let empresa = {};
      empresa.nome = await page.locator("h1.DUwDvf.lfPIob").textContent();
      empresa.nota = await page.locator(".F7nice").textContent();

      const tamanhoBloco = await page.$$eval(".rogA2c", (elements) =>
        elements.map((element) => element.textContent)
      );

      for (let i = 0; i < tamanhoBloco.length; i++) {
        const bloco = tamanhoBloco[i];

        if (
          bloco.includes("(") &&
          !bloco.includes("+") &&
          !bloco.includes(".") &&
          !bloco.includes(",")
        ) {
          numero = bloco;
          break;
        }
      }

      empresa.numero = numero;
      listaEmpresas.push(empresa);
    }

    fullBusinessList.push(...listaEmpresas);
  }
  await browser.close();

  console.log(fullBusinessList);

  csvWriter
    .writeRecords(fullBusinessList) // returns a promise
    .then(() => {
      console.log("file written succesfully");
    });

  return fullBusinessList;
}
