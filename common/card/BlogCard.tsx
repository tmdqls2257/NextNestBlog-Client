import React, { useEffect, useState } from "react";
import { BlogModel } from "../../data/blogData";
import { useRouter } from "next/router";
import Card from "./Card";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import { userStores } from "../../store/Context";
import BlogService from "../../service/blogService";

type CardProps = {
  // children: React.ReactNode;
  blogData: BlogModel;
};

export default function BlogCard({ blogData }: CardProps) {
  const { userStore } = userStores();

  const [isAdmin, setIsAdmin] = useState(false);
  const date = new Date(blogData.createdAt).toLocaleDateString().split(",");
  const router = useRouter();
  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    router.push(
      {
        pathname: `blogs/${blogData.id}`,
      },
      `blogs/${blogData.id}`
    );
  };

  const onRemove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();

    BlogService.deleteBlog(blogData.id);
  };

  useEffect(() => {
    userStore.isAdmin ? setIsAdmin(true) : setIsAdmin(false);
  }, [userStore.isAdmin]);

  const replaceContent = () => {
    const splitContent = blogData.contents.substring(0, 50);
    const replaceContent = splitContent.replace(/(\<\w*\>|\<\/\w\>)/g, "");
    return replaceContent;
  };

  return (
    <Card
      onClick={(e) => {
        onClick(e);
      }}
    >
      {/* <h5 className="py-3">{blogData.title}</h5>

      <p>{Date.parse(blogData.createdAt)}</p>
      <section className="flex items-center justify-between">
        <p className="flex flex-row-revers">{date[0]}</p>

        {isAdmin && (
          <div className="flex">
            <IconBox iconName={IconType.update} />
            <IconBox iconName={IconType.trash} onClick={onRemove} />
          </div>
        )}
      </section> */}

      <div className="flex flex-wrap no-underline hover:no-underline space-y-5">
        <img src="/default-image.webp" className="h-full w-full rounded-t" />
        <div className="w-full px-6">
          <p className="text-gray-600 text-xs md:text-sm ">
            {"GETTING STARTED"}
          </p>
          <div className="font-bold text-xl text-gray-900 ">
            {blogData.title}
          </div>
          <p className="text-gray-800 font-serif text-base">
            {replaceContent()}
          </p>
        </div>

        <div className="flex w-full items-center justify-between px-6 pb-5">
          <img
            className="w-8 h-8 rounded-full mr-4 avatar"
            data-tippy-content="Author Name"
            src="/dafault-avatar.webp"
            alt="Avatar of Author"
          />
          {isAdmin && (
            <div className="flex">
              <IconBox iconName={IconType.update} />
              <IconBox iconName={IconType.trash} onClick={onRemove} />
            </div>
          )}
          <p className="text-gray-600 text-xs md:text-sm">{date[0]}</p>
        </div>
      </div>
    </Card>
  );
}
