import { deletePost } from "@/lib/action";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Button asChild size="sm" variant="outline">
      <Link href={`/admin/edit/${id}`}>
        <Pencil className="size-4 mr-1" />
        Edit
      </Link>
    </Button>
  );
};

export const DeleteButton = async ({
  id,
  image,
}: {
  id: string;
  image: string;
}) => {
  const handleDelete = deletePost.bind(null, id, image);
  return (
    <form action={handleDelete}>
      <Button size="sm" variant="destructive" type="submit">
        <Trash className="size-4 mr-1" />
        Delete
      </Button>
    </form>
  );
};
