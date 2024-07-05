import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function post({ request }) {
  const data = await request.json();
  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && user.password === password) {
    return {
      status: 200,
      body: user,
    };
  } else {
    return {
      status: 401,
      body: { error: 'Invalid credentials' },
    };
  }
}
