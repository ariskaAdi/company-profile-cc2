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

export const getPostsById = async (postId: string) => {
  try {
    const result = await prisma.post.findUnique({
      where: { id: postId },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetailsById = async (postId: string) => {
  try {
    const result = await prisma.post.findUnique({
      where: { id: postId },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
