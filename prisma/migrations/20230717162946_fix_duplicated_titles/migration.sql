/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `Publication` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Publication_userId_title_key" ON "Publication"("userId", "title");
