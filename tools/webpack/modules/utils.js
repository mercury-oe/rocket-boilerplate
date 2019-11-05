const path = require('path');

const cacheLoader = (directory) => ({
  loader: 'cache-loader',
  options: {
    cacheDirectory: path.resolve('node_modules/.cache', directory),
  },
});

const threadLoader = (name, workerParallelJobs = 50) => ({
  loader: 'thread-loader',
  options: {
    workerParallelJobs,
    poolRespawn: false,
    name,
  },
});

module.exports = {
  cacheLoader,
  threadLoader,
};
