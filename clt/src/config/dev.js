'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  alias: {
    '@': path.resolve('src')
  },
};

export default Object.freeze(Object.assign({}, baseConfig, config));
