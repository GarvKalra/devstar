import prisma from "../../../../lib/prisma";


export async function get({ params }) {
  const questions = await prisma.question.findMany({
    where: { quizId: parseInt(params.id) },
  });

  return {
    status: 200,
    body: questions,
  };
}
