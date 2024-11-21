import { Migration } from '@mikro-orm/migrations';

export class Migration20241121152957 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "custom" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "custom_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "custom" cascade;');
  }

}
