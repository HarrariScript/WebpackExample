var path = require('path');
module.exports = {
    entry: './app/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/dist"
    }
}