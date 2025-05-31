import { object, string } from "zod";

export const PostSchema = object({
  title: string().min(3, "Title is required"),
  content: string().min(10, "Content is too short"),
});
