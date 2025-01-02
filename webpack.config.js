const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx', // Asegúrate de que el archivo de entrada sea un archivo .tsx
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Usamos 'static' en lugar de 'contentBase'
    },
    hot: true,
    open: true,
    port: 3000, // Puedes cambiar el puerto si es necesario
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Asegura que Webpack resuelva archivos .ts y .tsx
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Procesar archivos .ts y .tsx
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Usa ts-loader para compilar TypeScript
        },
      },
      {
        test: /\.js|jsx$/, // Procesar archivos JS y JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: ['react-refresh/babel'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // Habilitar Fast Refresh
  ],
};
