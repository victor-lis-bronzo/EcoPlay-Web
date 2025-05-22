/*
  Warnings:

  - You are about to drop the column `controller_id` on the `bottle_cap` table. All the data in the column will be lost.
  - The primary key for the `controller` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[code]` on the table `controller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `controller_code` to the `bottle_cap` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bottle_cap" DROP CONSTRAINT "bottle_cap_controller_id_fkey";

-- AlterTable
ALTER TABLE "bottle_cap" DROP COLUMN "controller_id",
ADD COLUMN     "controller_code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "controller" DROP CONSTRAINT "controller_pkey",
ADD CONSTRAINT "controller_pkey" PRIMARY KEY ("code");

-- CreateIndex
CREATE UNIQUE INDEX "controller_code_key" ON "controller"("code");

-- AddForeignKey
ALTER TABLE "bottle_cap" ADD CONSTRAINT "bottle_cap_controller_code_fkey" FOREIGN KEY ("controller_code") REFERENCES "controller"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
