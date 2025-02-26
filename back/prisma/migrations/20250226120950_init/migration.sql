-- CreateTable
CREATE TABLE "Stats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "transmitted" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Stats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
