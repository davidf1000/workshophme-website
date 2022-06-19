/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Admin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Rent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Rent` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tool` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `adminId` on the `Rent` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_RentToTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_RentToTool` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_adminId_fkey";

-- DropForeignKey
ALTER TABLE "_RentToTool" DROP CONSTRAINT "_RentToTool_A_fkey";

-- DropForeignKey
ALTER TABLE "_RentToTool" DROP CONSTRAINT "_RentToTool_B_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Rent" DROP CONSTRAINT "Rent_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "adminId",
ADD COLUMN     "adminId" INTEGER NOT NULL,
ADD CONSTRAINT "Rent_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tool" DROP CONSTRAINT "Tool_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tool_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_RentToTool" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_RentToTool_AB_unique" ON "_RentToTool"("A", "B");

-- CreateIndex
CREATE INDEX "_RentToTool_B_index" ON "_RentToTool"("B");

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RentToTool" ADD CONSTRAINT "_RentToTool_A_fkey" FOREIGN KEY ("A") REFERENCES "Rent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RentToTool" ADD CONSTRAINT "_RentToTool_B_fkey" FOREIGN KEY ("B") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
