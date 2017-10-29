const browserSync = require('browser-sync')

const defaultPluginOptions = {
  watchForInjection: []
}

class BrowserSyncInject {
  constructor(pluginOptions=defaultPluginOptions, browserSyncOptions={}) {
    this.options = pluginOptions
    this.browserSyncOptions = browserSyncOptions
    this.browserSync = browserSync.create()
    this.apply = this.apply.bind(this)
  }

  apply(compiler) {
    compiler.plugin('done', (stats) => {
      if(!this.isRunning) {
        this.isRunning = true
        this.browserSync.init(this.browserSyncOptions)
        return
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

export default BrowserSyncInject
