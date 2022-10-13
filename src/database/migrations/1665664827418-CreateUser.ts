import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1665664827418 implements MigrationInterface {
  name = 'CreateUser1665664827418';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users"
                             (
                                 "id"   integer PRIMARY KEY AUTOINCREMENT NOT NULL,
                                 "name" varchar NOT NULL
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
