const { app, BrowserWindow, ipcMain } = require("electron");
const pdf = require("html-pdf");
const path = require("path");
const fs = require("fs");

const { promisify } = require("util");
const mv = promisify(fs.rename);
const downloadPath = app.getPath("downloads");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
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

//PDF Template
function createTemplatePDF(formData) {
  return `<!DOCTYPE>
  <html>
  <head></head>
  <body>
  <h1>PDF</h1>
    <div>
    <h1>${formData.name}</h1>
   
    </div>  
  </body>
  </html>
    `;
}

//create PDF
function createPDF(data) {
  const templatePDF = createTemplatePDF(data); // create template from the form inputs
  return new Promise((resolve, reject) => {
    pdf
      .create(templatePDF)
      .toFile(path.join(__dirname, "result.pdf"), (err, res) => {
        if (err) reject();
        else resolve(res);
      });
  });
}
//IPC Catch
ipcMain.on("item:submit2", (e, item) => {
  //item is the object with the infos of the form
  const novoPDF = createPDF(item); // call the createPDF function
  novoPDF
    .then(() => {
      console.log("PDF created!");
    })
    .catch((err) => {
      console.log(err);
    });
});

ipcMain.handle("submit", async (event, data_info) => {
  const novoPDF = createPDF(data_info); // call the createPDF function

  return novoPDF
    .then((pdf) => {

      // Read the file
      let oldpath = `${__dirname}/result.pdf`;
      let newpath = `${downloadPath}/teste.pdf`;

     fs.readFile(oldpath, function (err, data) {
          if (err) throw err;
          console.log("File read!");

          // Write the file
          fs.writeFile(newpath, data, function (err) {
            if (err) throw err;
            console.log("File written!");
          
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
