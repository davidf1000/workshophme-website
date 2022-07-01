/*
  Warnings:

  - The `returnDate` column on the `Rent` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Rent" DROP COLUMN "returnDate",
ADD COLUMN     "returnDate" TIMESTAMP(3);
