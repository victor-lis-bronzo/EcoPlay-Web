/*
  Warnings:

  - You are about to drop the `BottleCap` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BottleCap" DROP CONSTRAINT "BottleCap_controller_id_fkey";

-- DropTable
DROP TABLE "BottleCap";

-- CreateTable
CREATE TABLE "bottle_cap" (
    "bottle_cap_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "controller_id" INTEGER NOT NULL,

    CONSTRAINT "bottle_cap_pkey" PRIMARY KEY ("bottle_cap_id")
);

-- AddForeignKey
ALTER TABLE "bottle_cap" ADD CONSTRAINT "bottle_cap_controller_id_fkey" FOREIGN KEY ("controller_id") REFERENCES "controller"("controller_id") ON DELETE RESTRICT ON UPDATE CASCADE;
