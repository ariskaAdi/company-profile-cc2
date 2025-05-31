import { prisma } from "./prisma";

export const getPosts = async () => {
  try {
    const result = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
