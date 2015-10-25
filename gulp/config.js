'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import path from 'path';

let root = './{{ project_name }}/static/';

let appPath = (glob) => {
  glob = glob || '';
  return path.join(root, 'src', 'app', glob);
};

let appComponentPath = (glob) => {
  glob = glob || ''
  return appPath(path.join('components', glob));
};

let config = {
  paths: {
    server: 'localhost:8000',
    css: {
      entry: appPath('../css/app.scss'),
      all: appPath('../css/**/*.scss'),
      dest: path.join(root, 'dist', 'css')
    },
    js: {
      entry: appPath('app.js'),
      vendor: path.join(root, 'vendor'),
      dest: path.join(root, 'dist', 'js'),
      all: appPath('css/**/*!(.spec.js).js')
    },
    html: {
      all: [appPath('**/*.html'), appPath('../templates/**/*.html')],
      templates: appPath('**/*.html')
    }
  },
  names: {
    css: 'app.css',
    js: {
      app: 'app.js',
      vendor: 'vendor.js'
    }
  },
  browserSync: browserSync.create(),
  appPath: appPath,
  appComponentPath: appComponentPath
};

export default config;