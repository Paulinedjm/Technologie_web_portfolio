//db/schema.ts

import { timestamp } from 'drizzle-orm/cockroach-core'
import { boolean, pgTable, text, uuid, serial } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})


export const usersTable = pgTable('users', {
  id: uuid().defaultRandom().primaryKey(),
  login: text().notNull().unique(),
  password: text().notNull(),
})


export const postsTable = pgTable('posts', {
  id: serial().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
})