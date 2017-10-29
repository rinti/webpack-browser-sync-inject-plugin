const browserSync = require('browser-sync')
const path = require('path')

const defaultPluginOptions = {
  watchForInjection: []
}

class BrowserSyncInject {
  constructor(pluginOptions=defaultPluginOptions, browserSyncOptions={}) {
    console.log(pluginOptions, browserSyncOptions)
    this.options = pluginOptions
    this.browserSync = browserSync.init()
    this.browserSyncOptions = browserSyncOptions
    this.browserSync = browserSync.create()
    this.apply = this.apply.bind(this)
  }


  apply(compiler) {
    compiler.plugin('done', (stats) => {
      if(!this.isRunning) {
        this.isRunning = true;
        this.browserSync.init(this.browserSyncOptions)
        return;
      }
      const { name } = stats.compilation.options

      if(this.options.watchForInjection.includes(name)) {
        this.browserSync.reload('*.css')
      } else {
        this.browserSync.reload()
      }

    });
  }
}

export default BrowserSyncInject;