import dynamic from "next/dynamic";
import { useForm, SubmitHandler } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const EditorComponent = dynamic(() => import("../../elements/ReactQuill"), {
  ssr: false,
});

// import EditorComponent from "../../elements/ReactQuill";
import React, { useCallback, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Button from "../../common/button/button";
import { useRouter } from "next/router";
import BlogService from "service/blogService";
// import { type } from "../../data/blogData";

export type FormInputs = {
  title: string;
  contents: string;
  description: string;
  imageUrl: string;
  tags: string;
};

const Post = () => {
  const { register, handleSubmit, control } = useForm<FormInputs>();

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [contents, setContents] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const onBlurTittle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }, []);
  // const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  const onSubmit = () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    const postData = {
      title,
      contents,
      description,
      imageUrl,
      tags,
    };
    BlogService.post(postData);
    router.back();
    console.log(postData);
  };

  return (
    <form className="space-y-3">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor="title"
      >
        {"title"}
      </label>
      {/* <input
        name="title"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="email"
        type="text"
        placeholder="title"
        onBlur={(e) => {
          onBlurTittle(e);
        }}
      /> */}
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        id="email"
        type="text"
        placeholder="title"
        onBlur={onBlurTittle}
      />
      {/* <Tag /> */}
      <TagsInput
        classNames={{ input: "bg-white" }}
        value={tags}
        onChange={setTags}
        name="fruits"
        placeHolder="enter fruits"
      />
      {/* <ReactQuill modules={modules} theme="snow" value={content} onChange={setContent} /> */}
      <EditorComponent
        setImageUrl={setImageUrl}
        setContents={setContents}
        contents={contents}
      />
      <Button onClick={onSubmit}>{"submit"}</Button>
    </form>
  );
};

export default Post;
