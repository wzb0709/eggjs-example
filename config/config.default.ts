import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569207027789_3499';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  config.sequelize = {
    dialect: 'mysql',
    host: '106.52.132.243',
    port: 3306,
    password: 'Lysb#123',
    database: 'book',
    timezone: '+08:00',
  };
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
