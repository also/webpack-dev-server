'use strict';

module.exports = Promise.resolve({
  entry: __filename,
  output: {
    filename: '[name].js'
  },

  plugins: [
    {
      apply() {
        throw new Error('expected error in plugin');
      }
    }
  ]
});
