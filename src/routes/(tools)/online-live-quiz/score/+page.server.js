import prisma from "../../../../lib/prisma";


export async function post({ request }) {
    const data = await request.json();
    const { score } = data;
  
    // Store score logic here
  
    return {
      status: 200,
      body: { score },
    };
  }
  