import React from "react";
import Createform from "./create-form";

const CreateBlog = async () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <Createform />
    </div>
  );
};

export default CreateBlog;
