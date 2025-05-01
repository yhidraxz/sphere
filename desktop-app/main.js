import { app, BrowserWindow } from "electron";
import url from "url";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createMainWindow() {
  const win = new BrowserWindow({
    title: "sphereOUT desktop",

    width: 1000,

    height: 600,

    // webPreferences: {
    //   nodeIntegration: true,
    // },
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "./index.html"),
    protocol: "file",
    slashes: true,
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createMainWindow);
