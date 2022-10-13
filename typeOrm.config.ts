import { DataSource } from 'typeorm';
import { User } from './src/users/entities/user.entity';
import { CreateUser1665664827418 } from './src/database/migrations/1665664827418-CreateUser';

// 本来は環境変数から取得することを推奨します
export default new DataSource({
  type: 'sqlite',
  database: 'data/dev.sqlite',
  entities: [User],
  migrations: [CreateUser1665664827418],
  logging: true,
});
