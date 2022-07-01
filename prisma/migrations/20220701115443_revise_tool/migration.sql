/*
  Warnings:

  - You are about to drop the column `adminId` on the `Rent` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Tool` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_adminId_fkey";

-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "adminId";

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "desc";
