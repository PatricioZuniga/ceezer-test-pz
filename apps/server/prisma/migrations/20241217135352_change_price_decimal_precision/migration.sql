/*
  Warnings:

  - You are about to alter the column `price_per_ton` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,2)`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "price_per_ton" SET DATA TYPE DECIMAL(9,2);
