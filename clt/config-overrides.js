const {override, addWebpackAlias}= require ('customize-cra')
const {resolve} = require('path')
module.export = override(
    addWebpackAlias({
        '@':resolve('src')
    })
)