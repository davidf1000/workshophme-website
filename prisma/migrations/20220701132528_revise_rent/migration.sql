/*
  Warnings:

  - The `tools` column on the `Rent` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `totalPrice` on table `Rent` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Rent" ALTER COLUMN "status" SET DEFAULT E'waiting_pickup',
ALTER COLUMN "totalPrice" SET NOT NULL,
ALTER COLUMN "totalPrice" SET DEFAULT 0,
DROP COLUMN "tools",
ADD COLUMN     "tools" JSONB[];
