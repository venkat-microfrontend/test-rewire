module.exports = {
    webpack: (config, env) => {
        //do stuff with the webpack config...
        config.entry = "./src/venkat-test-rewire.js";
        config.output = {
            ...config.output,
            filename: 'venkat-test-rewire.js',
            libraryTarget: 'system',
        }
        config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'HtmlWebpackPlugin' && plugin.constructor.name !== 'MiniCssExtractPlugin')
        delete config.optimization
        return config;
    },
    devServer: (configFunction) => {
        return function (proxy, allowedHost) {
          const config = configFunction(proxy, allowedHost);
          config.headers = config.headers || {};
          config.headers['Access-Control-Allow-Origin'] = '*';
          return config;
        }
    }
}