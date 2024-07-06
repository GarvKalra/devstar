import prisma from "../../../../lib/prisma";


export async function get() {
  const quizzes = await prisma.quiz.findMany();
  return {
    status: 200,
    body: quizzes,
  };
}

