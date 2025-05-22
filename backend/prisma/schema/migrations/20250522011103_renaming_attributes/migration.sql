/*
  Warnings:

  - You are about to drop the `institutions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "controller" DROP CONSTRAINT "controller_institution_id_fkey";

-- DropForeignKey
ALTER TABLE "operator" DROP CONSTRAINT "operator_institution_id_fkey";

-- DropTable
DROP TABLE "institutions";

-- CreateTable
CREATE TABLE "institution" (
    "institution_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "institution_pkey" PRIMARY KEY ("institution_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "institution_name_key" ON "institution"("name");

-- AddForeignKey
ALTER TABLE "controller" ADD CONSTRAINT "controller_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institution"("institution_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "operator" ADD CONSTRAINT "operator_institution_id_fkey" FOREIGN KEY ("institution_id") REFERENCES "institution"("institution_id") ON DELETE SET NULL ON UPDATE CASCADE;
