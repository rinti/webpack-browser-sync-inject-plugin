# Webpack Browser Sync Inject Plugin

There's already the excellent, more mature [browser-sync-webpack-plugin](https://github.com/Va1/browser-sync-webpack-plugin).
That plugin does however default to always reloading the browser - and that's
suboptimal when working with stylesheets. There's a pending PR to fix this.
In the meantime this plugin might save your day!

At the moment this plugin is pretty specialized for my use case, if you
want to make it more generalized, PR:s are welcome!

## Install
```bash
npm install --save-dev webpack-browser-sync-inject-plugin
```

## Example usage

First argument to the plugin is reserved for this plugins options,
Second argument is options to pass to browser sync.

```js
  new BrowserSyncInjectPlugin({
    watchForInjection: ['style'] // style is a defined in your webpack config
  }, {
    host: 'localhost',
    port: 3000,
    proxy: 'http://mysite.dev:8085/'
  })
```
