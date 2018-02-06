'use strict';

module.exports = Promise.resolve({
  entry: __filename,
  output: {
    filename: '[name].js'
  },
  devServer: {
    port: 8080
  },
  plugins: [
    {
      apply() {
        throw new Error('expected error in plugin');
      }
    }
  ]
});
