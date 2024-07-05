import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function get() {
  const leaderboard = await prisma.user.findMany({
    orderBy: {
      score: 'desc',
    },
  });

  return {
    status: 200,
    body: leaderboard,
  };
}