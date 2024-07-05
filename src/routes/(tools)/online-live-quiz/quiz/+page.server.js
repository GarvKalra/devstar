import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function get({ params }) {
  const questions = await prisma.question.findMany({
    where: { quizId: parseInt(params.id) },
  });

  return {
    status: 200,
    body: questions,
  };
}
