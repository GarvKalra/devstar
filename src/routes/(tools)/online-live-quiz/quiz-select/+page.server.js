import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

app.get('/online-live-quiz/quizes', async (req, res) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      include: {
        questions: true,
      },
    });
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ success: false, message: 'Error fetching quizzes' });
  }
});


