import { chromium } from "playwright";
import { awaitingReplyService } from "./awaitingReply.js";

export async function sendMsg(contacts, message) {
  let numerosInvalidos = 0;
  let numerosValidos = 0;

  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto(`https://web.whatsapp.com`);

  console.log("por favor, faça login");

  await page.waitForTimeout(50000);

  console.log("tempo de login encerrado, indo aos links de conversa");

  for (let i = 0; i < contacts.length; i++) {
    for (let f = 0; f < 3; f++) {
      await page.goto(
        `https://web.whatsapp.com/send/?phone=${contacts[i]}&text=${message}&type=phone_number&app_absent=0`
      );

      let carregandoPrimeiro = true;
      let carregandoSegundo = true;

      console.log("carregando...");

      for (j = 0; j < 10; j++) {
        carregandoPrimeiro = await page.evaluate(() =>
          document.body.innerText.includes(
            "Protegida com a criptografia de ponta a ponta"
          )
        );

        carregandoSegundo = await page.evaluate(() =>
          document.body.innerText.includes("Iniciando conversa")
        );

        if (!carregandoPrimeiro && carregandoSegundo) {
          console.log("número processado");

          sucesso = true;

          break;
        }

        await page.waitForTimeout(3000);
      }
      if (sucesso) {
        console.log("página carregou");

        break;
      } else {
        console.log(
          "página não carregou, vou tentar denovo, tentativa número:" + j
        );
      }
    }

    console.log("carregou... gerando resultados");

    let numeroInvalido = await page.evaluate(() =>
      document.body.innerText.includes(
        "O número de telefone compartilhado por url é inválido."
      )
    );

    if (numeroInvalido) {
      console.log("número é inválido");

      numerosInvalidos++;
    } else {
      console.log("número é válido, conversa iniciada");

      await page.keyboard.press("Enter");

      await page.waitForTimeout(5000);

      markLeadAsContacted(contacts[i]);

      numerosValidos++;
    }
  }

  console.log(
    `números inválidos: ${numerosInvalidos}. Conversas iniciadas: ${numerosValidos}`
  );

  console.log("nenhuma outra ação a ser executada, fechando browser");

  await browser.close();
}

function markLeadAsContacted(number) {
  const jid = `${number}@s.whatsapp.net`;

  awaitingReplyService.add(jid);
}
