import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'woong',
  password: '335533',
  database: `cat-nest`,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
