"use client";

import React, { useActionState, useRef, useState, useTransition } from "react";
import { type PutBlobResult } from "@vercel/blob";
import { Button } from "../ui/button";
import { BarLoader } from "react-spinners";
import Image from "next/image";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { savePost } from "@/lib/action";
// import slugify from "slugify";

const CreateForm = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  // const [title, setTitle] = useState("");
  // const [slug, setSlug] = useState("");

  // useEffect(() => {
  //   const newSlug = slugify(title, { lower: true, strict: true });
  //   setSlug(newSlug);
  // }, [title]);

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);
    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status !== 200) {
          setMessage(data.message);
        }
        const img = data as PutBlobResult;
        setImage(img.url);
        console.log(img);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, isPending] = useActionState(
    savePost.bind(null, image),
    null
  );

  return (
    <form
      className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      action={formAction}>
      <div className="lg:col-span-8 space-y-6">
        {/* Title */}
        <div>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-500 mt-2">
              {state?.error?.title}
            </span>
          </div>
        </div>

        {/* Description */}
        <div>
          <textarea
            name="content"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 bg-white"
            rows={8}
            placeholder="Description"
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-500 mt-2">
              {state?.error?.content}
            </span>
          </div>
        </div>
      </div>
      {/* file upload */}
      <div className="lg:col-span-4 space-y-6">
        {/* file */}
        <label
          htmlFor="input-file"
          className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-200 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 relative">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 z-10 text-gray-500">
            {pending ? <BarLoader /> : null}

            {image ? (
              <Button
                type="button"
                onClick={() => deleteImage(image)}
                className="flex justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                <IoTrashOutline className="size-4" />
              </Button>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <IoCloudUploadOutline className="size-8" />
                <p className="mb-1 text-sm font-bold">select image</p>
                {message ? (
                  <p className="text-xs text-red-500">{message}</p>
                ) : (
                  <p className="text-xs">SVG, PNG, JPG or GIF (Max: 4MB)</p>
                )}
              </div>
            )}
          </div>
          {!image ? (
            <input
              type="file"
              ref={inputFileRef}
              className="hidden"
              id="input-file"
              onChange={handleUpload}
            />
          ) : (
            <Image
              src={image}
              alt="image"
              width={640}
              height={360}
              className="object-cover rounded-md aspect-video absolute brightness-75"
            />
          )}
        </label>

        {/* general messages */}
        {state?.message ? (
          <div className="mb-4 bg-red-200 p-2">
            <span className="text-sm text-gray-700 mt-2">{state?.message}</span>
          </div>
        ) : null}
        {/* Submit */}
        <Button
          className="w-full text-white rounded-md py-2 transition"
          type="submit"
          disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
