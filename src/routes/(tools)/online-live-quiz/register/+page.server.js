import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function post({ request }) {
  const data = await request.json();
  const { email, password } = data;
  const user = await prisma.user.create({
    data: { email, password },
  });

  return {
    status: 201,
    body: user,
  };
}
