const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map'
}
