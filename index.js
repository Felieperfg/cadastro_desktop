//O appmódulo, que controla o ciclo de vida do evento do seu aplicativo.
//O BrowserWindowmódulo, que cria e gerencia janelas de aplicativos.
const { app, BrowserWindow } = require('electron')

//Função que carrega index.htmlem uma nova BrowserWindow instância.
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 700,
      minWidth: 800,
      minHeight:700,
      //autoHideMenuBar: true, //remoção do menu dev
    })
    win.loadFile('index.html')
}

//Função para abrir sua janela.
app.whenReady().then(() => {
    createWindow()
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


