/*
  Warnings:

  - You are about to drop the `_RentToTool` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `expectedReturnDate` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fine` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromDate` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupName` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupNim` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentLineId` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentName` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentNim` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentPhone` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnDate` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnName` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnNim` to the `Rent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Rent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_RentToTool" DROP CONSTRAINT "_RentToTool_A_fkey";

-- DropForeignKey
ALTER TABLE "_RentToTool" DROP CONSTRAINT "_RentToTool_B_fkey";

-- AlterTable
ALTER TABLE "Rent" ADD COLUMN     "Tools" INTEGER[],
ADD COLUMN     "expectedReturnDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fine" INTEGER NOT NULL,
ADD COLUMN     "fromDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pickupName" TEXT NOT NULL,
ADD COLUMN     "pickupNim" TEXT NOT NULL,
ADD COLUMN     "rentLineId" TEXT NOT NULL,
ADD COLUMN     "rentName" TEXT NOT NULL,
ADD COLUMN     "rentNim" TEXT NOT NULL,
ADD COLUMN     "rentPhone" TEXT NOT NULL,
ADD COLUMN     "returnDate" TEXT NOT NULL,
ADD COLUMN     "returnName" TEXT NOT NULL,
ADD COLUMN     "returnNim" TEXT NOT NULL,
ADD COLUMN     "totalPrice" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "activated" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "_RentToTool";
