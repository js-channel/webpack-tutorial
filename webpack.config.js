const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/ts/app.ts'),
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [path.resolve(__dirname, 'src/ts')],
                loader: 'ts-loader'
            }
        ]
    }
}
