import { clientBaseConfig, serverBaseConfig } from '../../configs/webpack.base.config';

module.exports = [serverBaseConfig(), clientBaseConfig()];
