module.exports = {
  servers: {
    one: {
      host: 'ec2-18-220-192-114.us-east-2.compute.amazonaws.com',
      username: 'ubuntu',
      pem: "../.ssh/moldavite.pem"
    }
  },

  meteor: {
    name: 'eLiberate',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
    },
    env: {
      ROOT_URL: 'http://18.220.195.181',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'abernix/meteord:node-8.4.0-base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  },
};
