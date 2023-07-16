/*
  Warnings:

  - Added the required column `userId` to the `Publication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Publication" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
