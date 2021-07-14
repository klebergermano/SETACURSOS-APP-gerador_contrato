const { app, BrowserWindow, Menu, ipcMain, globalShortcut, Tray, dialog,} = require("electron");
const pdf = require("html-pdf");
const fs = require("fs");
const path = require("path");
const TemplateContrato = require("./TemplateContrato");

const downloadPath = app.getPath("downloads");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  const appIcon = new Tray(__dirname + "/assets/img/icon.png");

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "SETA CURSOS: Gerador de Contrato",
    icon: __dirname + "/assets/img/icon.png",
    width: 1200,
    height: 800,
    show: false,
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  mainWindow.maximize()

  })

  // Open the DevTools.
 mainWindow.webContents.openDevTools();

  //Shortcuts
  globalShortcut.register("CommandOrControl+Q", () => {
    app.quit();
  });

  // Create menu template
  const mainMenuTemplate = [
    {
      label: "Opções",
      submenu: [
        {
          label: "Sair",
          click() {
            app.quit();
          },
        },
      ],
    },
  ];

  globalShortcut.register("CommandOrControl+I", () => {
    mainWindow.webContents.toggleDevTools();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert menu
  // Menu.setApplicationMenu(mainMenu);

  //Remove Mmenu
  mainWindow.removeMenu();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//create PDF
function createPDF(data) {
  const templateContrato = TemplateContrato(data); // create template from the form inputs
  return new Promise((resolve, reject) => {
    pdf
      .create(templateContrato)
      .toFile(path.join(__dirname, "result.pdf"), (err, res) => {
        if (err) reject();
        else resolve(res);
      });
  });
}

ipcMain.handle("submit", async (event, data_info) => {
  const novoPDF = createPDF(data_info); // call the createPDF function
  console.log(data_info);
  return novoPDF
    .then((pdf) => {
      // Read the file
      let filename = `${data_info.resp_nome}-${data_info.curso_nome}-CONTRATO.pdf`;
      filename = filename.toUpperCase();
      let oldpath = `${__dirname}/result.pdf`;
      let newpath = `${downloadPath}/${filename}`;

      fs.readFile(oldpath, function (err, data) {
        if (err) throw err;
        console.log("File read!");

        // Write the file
        fs.writeFile(newpath, data, function (err) {
          if (err) throw err;
          console.log("File written!");
          dialog.showMessageBoxSync({
            type: "info",
            title: "SETA CURSOS - Contrato",
            message: `Contrato gerado com sucesso em: ${downloadPath}`,
          });
        });
        // Delete the file
        fs.unlink(oldpath, function (err) {
          if (err) throw err;
          console.log("File deleted!");
        });
      });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

