import Button from "../../common/button/button";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import BlogService from "../../service/blogService";

export type Inputs = {
  comment: string;
};

const Comment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    BlogService.postComment(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex items-center justify-center"}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          placeholder="댓글을 입력해주세요"
          {...register("comment")}
        />
        <Button type="submit" />
      </form>
    </>
  );
};

// export async function getStaticProps() {
//   const res = axios.get("https://geolocation-db.com/json/").then((res) => {
//     console.log("data : ", res);
//   });
//   return {
//     props: {
//       res,
//     }, // will be passed to the page component as props
//   };
// }

export default Comment;
