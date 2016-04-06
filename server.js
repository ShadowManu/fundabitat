const Hapi = require('hapi');
const inert = require('inert');

'use strict';

const server = new Hapi.Server();

// Environment constants
const devel_env = (!process.env.NODE_ENV) || process.env.NODE_ENV === 'development';

// SERVER CONFIG

server.connection({
  port: process.env.PORT || 3000
});

server.register(inert, (err) => {
  if (err) throw err;
});

// SERVER ROUTES

// Development Only
if (devel_env) {
  server.route([
    // JSPM Packages
    {
      method: 'GET',
      path: '/jspm_packages/{param*}',
      handler: {
        directory: {
          path: 'jspm_packages'
        }
      }
    },
    // SystemJS config
    {
      method: 'GET',
      path: '/config.js',
      handler: {
        file: 'config.js'
      }
    },
    // Source files
    {
      method: 'GET',
      path: '/src/{param*}',
      handler: {
        directory: {
          path: 'src'
        }
      }
    }
  ]);
}

// Static Client Files
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'dist',
      listing: 'true',
      index: 'true'
    }
  }
});

// SERVER STARTUP

server.start(() => {
  console.log('SERVER STARTED');
});