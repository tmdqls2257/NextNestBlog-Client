import React, { useEffect, useState } from "react";
import { BlogModel } from "../../data/blogData";
import { useRouter } from "next/router";
import Card from "./Card";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import { userStores } from "../../store/Context";
import BlogService from "../../service/blogService";
import Image from "next/image";

type CardProps = {
  // children: React.ReactNode;
  blogData: BlogModel;
};

const BlogCard = ({ blogData }: CardProps) => {
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
    const replaceContent = splitContent.replace(
      /(\<\w*\>|\<\/\w\>|<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>])/g,
      ""
    );
    return replaceContent;
  };

  return (
    <Card
      onClick={(e) => {
        onClick(e);
      }}
    >
      <div className="flex flex-wrap no-underline hover:no-underline space-y-5">
        <Image
          src={`${blogData.imageUrl || "/default-image.webp"}`}
          className="h-full w-full rounded-t"
          width={382}
          height={286}
        />
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
          <ul className="flex gap-2">
            {blogData.tags &&
              blogData.tags?.map((tag, index) => (
                <li className="bg-grey px-3 rounded-md text-white" key={index}>
                  {tag.name}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex w-full items-center justify-between px-6 pb-5">
          <Image
            className="rounded-full avatar"
            data-tippy-content="Author Name"
            src="/dafault-avatar.webp"
            alt="Avatar of Author"
            width={"32"}
            height={"32"}
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
};
export default BlogCard;
