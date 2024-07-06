import prisma from "../../../../lib/prisma";

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