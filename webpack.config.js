const path = require('path');

const resolvePath = (pathToResolve = '') => path.resolve(__dirname, pathToResolve)

module.exports = {
    entry: resolvePath('src/ts/app/app.ts'),
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                include: [resolvePath('src/ts')],
                loader: 'ts-loader'
            },
            {
                test: /\.s(a|c)ss$/,
                include: [resolvePath('src/styles')],
                loader: 'style!css!sass'
            }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.scss'],
        alias: {
            styles: resolvePath('src/styles'),
            helpers: resolvePath('src/ts/helpers')
        }
    }
}
