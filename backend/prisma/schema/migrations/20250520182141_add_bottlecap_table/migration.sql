/*
  Warnings:

  - The primary key for the `controller` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `controllerId` on the `controller` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `controller` table. All the data in the column will be lost.
  - You are about to drop the column `institutionId` on the `controller` table. All the data in the column will be lost.
  - The primary key for the `institutions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `institutions` table. All the data in the column will be lost.
  - You are about to drop the column `institutionId` on the `institutions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `institutions` table. All the data in the column will be lost.
  - The primary key for the `operator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `operator` table. All the data in the column will be lost.
  - You are about to drop the column `institutionId` on the `operator` table. All the data in the column will be lost.
  - You are about to drop the column `operatorId` on the `operator` table. All the data in the column will be lost.
  - You are about to drop the column `sessionVersion` on the `operator` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `operator` table. All the data in the column will be lost.
  - Added the required column `institution_id` to the `controller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `institutions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `operator` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "controller" DROP CONSTRAINT "controller_institutionId_fkey";

-- DropForeignKey
ALTER TABLE "operator" DROP CONSTRAINT "operator_institutionId_fkey";

-- AlterTable
ALTER TABLE "controller" DROP CONSTRAINT "controller_pkey",
DROP COLUMN "controllerId",
DROP COLUMN "createdAt",
DROP COLUMN "institutionId",
ADD COLUMN     "controller_id" SERIAL NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution_id" INTEGER NOT NULL,
ADD CONSTRAINT "controller_pkey" PRIMARY KEY ("controller_id");

-- AlterTable
ALTER TABLE "institutions" DROP CONSTRAINT "institutions_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "institutionId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution_id" SERIAL NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "institutions_pkey" PRIMARY KEY ("institution_id");

-- AlterTable
ALTER TABLE "operator" DROP CONSTRAINT "operator_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "institutionId",
DROP COLUMN "operatorId",
DROP COLUMN "sessionVersion",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution_id" INTEGER,
ADD COLUMN     "operator_id" SERIAL NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT true,
ADD CONSTRAINT "operator_pkey" PRIMARY KEY ("operator_id");

-- CreateTable
CREATE TABLE "BottleCap" (
    "bottle_cap_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "controller_id" INTEGER NOT NULL,

    CONSTRAINT "BottleCap_pkey" PRIMARY KEY ("bottle_cap_id")
);

-- AddForeignKey
ALTER TABLE "BottleCap" ADD CONSTRAINT "BottleCap_controller_id_fkey" FOREIGN KEY ("controller_id") REFERENCES "controller"("controller_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "controller" ADD CONSTRAINT "controller_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("institution_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operator" ADD CONSTRAINT "operator_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institutions"("institution_id") ON DELETE SET NULL ON UPDATE CASCADE;
