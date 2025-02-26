/*
  Warnings:

  - Added the required column `history` to the `Stats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "transmitted" INTEGER NOT NULL,
    "history" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Stats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Stats" ("id", "transmitted", "userId") SELECT "id", "transmitted", "userId" FROM "Stats";
DROP TABLE "Stats";
ALTER TABLE "new_Stats" RENAME TO "Stats";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
