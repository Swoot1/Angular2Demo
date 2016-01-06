module.exports = {
    entry: './app/boot',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js']  
    },
    module: {
        loaders: [
          {
            test: /\.ts$/,
            loader: 'ts-loader'
          }
        ]
    }
};