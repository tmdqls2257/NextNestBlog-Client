import dynamic from "next/dynamic";
// import { useForm, SubmitHandler } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

const EditorComponent = dynamic(() => import("../../elements/ReactQuill"), {
  ssr: false,
});

// import EditorComponent from "../../elements/ReactQuill";
import React, { useCallback, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Button from "../../common/button/button";
import { useRouter } from "next/router";
import BlogService from "../../service/blogService";
// import { type } from "../../data/blogData";

const Post = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [contents, setContents] = useState("");
  const [tagNames, setTagNames] = useState<string[]>([]);

  const onBlurTittle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }, []);
  // const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  const onSubmit = async () => {
    setTitle("");
    setDescription("");
    setImageUrl("");
    // const tags: Tag[] = [];

    // tagNames.map((tagName) => [
    //   tags.push({
    //     name: tagName,
    //   }),
    // ]);

    const postData = {
      title,
      contents,
      description,
      imageUrl,
    };
    const newBlog = await BlogService.postBlog(postData);
    await BlogService.postTags(tagNames);
    await BlogService.joinBlogTags(tagNames, newBlog);
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
        value={tagNames}
        onChange={setTagNames}
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
