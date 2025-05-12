/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT DEFAULT 'N/A',
ADD COLUMN     "birthDate" TIMESTAMP(3) DEFAULT '1990-01-01 00:00:00 +00:00',
ADD COLUMN     "country" TEXT DEFAULT 'N/A',
ADD COLUMN     "state" TEXT DEFAULT 'N/A',
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "zipCode" TEXT DEFAULT '00000-000',
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "phone" SET DEFAULT '+999 (99) 9 9999-9999',
ALTER COLUMN "city" SET DEFAULT 'N/A';
