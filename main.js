
// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const url = require('url');


let win;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
   
  })

win.loadFile("index.html");

};
//calling the function
app.whenReady().then(()=>{
    createWindow();
});















