import dynamic from "next/dynamic";
import { TagsInput } from "react-tag-input-component";
const EditorComponent = dynamic(() => import("../../elements/ReactQuill"), {
  ssr: false,
});

import React, { useCallback, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Button from "../../common/button/button";
import { useRouter } from "next/router";
import BlogService, { Tag } from "../../service/blogService";
import WithAuth from "HOC/withAuth";

export type Data = {
  title: string;
  contents: string;
  description: string;
  imageUrl: string;
  tags: Tag[];
};

const Post = () => {
  const router = useRouter();
  const [data, setData] = useState<Data>({
    title: "",
    contents: "",
    description: "",
    imageUrl: "",
    tags: [{ name: "" }],
  });
  const [tagNames, setTagNames] = useState<string[]>([]);

  const onBlurTittle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData(data => {
      return {
        ...data,
        title: e.currentTarget.value,
      };
    });
  }, []);
  const onSubmit = async () => {
    const tags: Tag[] = tagNames.map(tagName => {
      return { name: tagName };
    });
    setData(data => {
      return {
        ...data,
        tags,
      };
    });
    console.log("tags", tags);

    const newBlog = await BlogService.postBlog(data);
    await BlogService.postTags(tags).then(async () => {
      await BlogService.joinBlogTags(tagNames, newBlog);
    });
    router.back();
    setData({
      title: "",
      contents: "",
      description: "",
      imageUrl: "",
      tags: [{ name: "" }],
    });
    console.log("postData", data);
  };
  console.log(1);

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
      <EditorComponent setData={setData} data={data} />
      <Button onClick={onSubmit}>{"submit"}</Button>
    </form>
  );
};

const WithAuthPost = WithAuth({ InComponent: Post });

export default WithAuthPost;
