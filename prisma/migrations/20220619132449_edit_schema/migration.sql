/*
  Warnings:

  - You are about to drop the column `Tools` on the `Rent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "Tools",
ADD COLUMN     "tools" INTEGER[];
