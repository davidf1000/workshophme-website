/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Tool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "updatedAt";
