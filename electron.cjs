/* eslint-disable no-undef */
const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    title: "Exam Cell",
    autoHideMenuBar: true,
  });
  mainWindow.maximize();
  mainWindow.loadURL("http://localhost:5173");
});
