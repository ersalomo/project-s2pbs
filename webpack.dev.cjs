import { merge } from'webpack-merge';
import path from 'path';

import {common} from './webpack.common.js'; 
 
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 4001,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  }
});