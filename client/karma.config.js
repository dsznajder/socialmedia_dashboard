const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['tests/**/*.js'],

    preprocessors: {
      'tests/**/*Spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },

    webpack: {
      devtool: 'eval-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
          react: path.resolve('./node_modules/react'),
          'react-dom': path.resolve('./node_modules/react-dom')
        },
        modulesDirectories: [
          'assets', 'node_modules', 'app/bundles'
        ],
        root: path.resolve('.app/bundles')
      },

      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.(jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'latest', 'stage-0']
            }
          }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'latest', 'stage-0']
            }
          }, {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'react/addons': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-jquery',
      'karma-chrome-launcher',
      'karma-babel-preprocessor',
      'babel-core'
    ],

    babelPreprocessor: {
      options: {
        presets: ['react', 'es2015', 'latest']
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
