import prisma from '../../../../lib/prisma';

export const load = async ({ params }) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        questions: true,
      },
    });
    return {
      status: 200,
      body: quizzes,
    };
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    return {
      status: 500,
      body: { success: false, message: 'Error fetching quizzes' },
    };
  }
};
