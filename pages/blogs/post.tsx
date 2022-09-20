import dynamic from "next/dynamic";

const EditorComponent = dynamic(() => import("../../elements/ReactQuill"), {
  ssr: false,
});

// import EditorComponent from "../../elements/ReactQuill";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Button from "../../common/button/button";
import BlogService from "../../service/blogService";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contents, setContents] = useState("");

  const onBlurTittle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onBlurDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const onSubmit = () => {
    setTitle("");
    setDescription("");
    BlogService.post(title, contents, description);
    router.back();
  };

  return (
    <form className="space-y-3">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="title"
      >
        {"title"}
      </label>
      <input
        name="title"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="email"
        type="text"
        placeholder="title"
        onBlur={(e) => {
          onBlurTittle(e);
        }}
      />
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="description"
      >
        {"description"}
      </label>
      <input
        name="description"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="email"
        type="text"
        placeholder="description"
        onBlur={(e) => {
          onBlurDescription(e);
        }}
      />
      {/* <ReactQuill modules={modules} theme="snow" value={content} onChange={setContent} /> */}
      <EditorComponent setContents={setContents} contents={contents} />
      <Button onClick={onSubmit}>{"submit"}</Button>
    </form>
  );
};

export default Post;
