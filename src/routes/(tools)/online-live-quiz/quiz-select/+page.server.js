import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function get() {
  const quizzes = await prisma.quiz.findMany();
  return {
    status: 200,
    body: quizzes,
  };
}

