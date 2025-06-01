"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { PostSchema } from "@/lib/zod";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// save post
export const savePost = async (
  image: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "Image is required" };

  const rawData = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const validatedFields = PostSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { title, content } = validatedFields.data;
  const session = await auth();
  const userId = session?.user.id;
  if (!userId) {
    return { message: "User must be logged in" };
  }

  try {
    await prisma.post.create({
      data: {
        title,
        content,
        image,
        authorId: userId,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: "Failed to save post" };
  }

  redirect("/admin");
};

// delete post

export const deletePost = async (id: string, image: string) => {
  try {
    await del(image);
    await prisma.post.delete({ where: { id } });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/admin");
};

// update post

export const updatePost = async (
  postId: string,
  image: string,
  prevState: unknown,
  formData: FormData
) => {
  if (!image) return { message: "Image is required" };

  const rawData = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const validatedFields = PostSchema.safeParse(rawData);
  if (!validatedFields.success)
    return { error: validatedFields.error.flatten().fieldErrors };

  const { title, content } = validatedFields.data;
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return { message: "User must be logged in" };
  }

  try {
    await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        content,
        image,
        authorId: userId,
        // slug: slugify(title), // jika kamu ingin slug update otomatis
      },
    });
  } catch (error) {
    console.error(error);
    return { message: "Failed to update post" };
  }

  revalidatePath("/admin");
  redirect("/admin");
};
