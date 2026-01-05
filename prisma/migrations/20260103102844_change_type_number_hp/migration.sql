/*
  Warnings:

  - You are about to alter the column `number_phone` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "number_phone" SET DATA TYPE VARCHAR(15);
