import prisma from '../../../../lib/prisma';

export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const email = data.get('email').trim();
      const password = data.get('password').trim();

      const user = await prisma.user.findUnique({
        where: { email },
      });

      console.log('User:', user);
      console.log('Form Password:', password);
      console.log('Stored Password:', user ? user.password : 'No user');

      if (user && user.password === password) {
        console.log("password is matching");
        return {
          status: 200,
          body: {
            type: 'success',
            status: 200,
            data: JSON.stringify([{ status: 1, body: 2 }, 500, { success: 1, error: 0 }, false, "Login successful"]),
          },
        };
      } else {
        console.log("here u are");
        return {
          status: 401,
          body: {
            type: 'error',
            status: 400,
            data: JSON.stringify([{ status: 0, body: 0 }, 400, { success: 0, error: 1 }, true, "Invalid credentials"]),
          },
        };
      }

    } catch (error) {
      console.error('Error during login:', error);

      return {
        status: 500,
        body: {
          type: 'error',
          status: 500,
          data: JSON.stringify([{ status: 0, body: 0 }, 500, { success: 0, error: 1 }, true, "An error occurred during login"]),
        },
      };
    }
  },
};

