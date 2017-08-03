var CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    plugins: [
      new CopyWebpackPlugin([{
        from: './node_modules/binary-module',
        to: './node_modules/binary-module',
      }])
    ]
};
