module.exports = {
  nodeClasses: {
    TeleFlow: require('./dist/nodes/TeleFlow/TeleFlow.node.js'),
  },
  credentialClasses: {
    TeleFlowApi: require('./dist/credentials/TeleFlowApi.credentials.js'),
  },
};
