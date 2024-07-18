/*import prisma from "../../../../lib/prisma";

export async function post({ request }) {
  const data = await request.json();
  const { email, password } = data;
  const user = await prisma.User.create({
    data: { email, password },
  });

  return {
    status: 201,
    body: user,
  };
}*/

import prisma from '../../../../lib/prisma';
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const email = data.get('email');
      const password = data.get('password');


      const user = await prisma.user.create({
        data: { email, password },
      });
      
    } catch (error) {
      console.error('Error creating user:', error);

      return {
        status: 500,
        body: { error: 'An error occurred while creating the user' },
      };
    }
  },
};


