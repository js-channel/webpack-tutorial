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
            },
            {
                test: /\.s(a|c)ss$/,
                include: [path.resolve(__dirname, 'src/styles')],
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.scss']
    }
}
