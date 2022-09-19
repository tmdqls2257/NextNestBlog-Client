import Link from "next/link";
import React, { memo } from "react";
import { UrlObject } from "url";

type buttonProps = {
  children?: string;
  onClick?: () => void;
};

type linkButtonProps = {
  children?: string;
  href: string | UrlObject;
};

function Button({ children = "button", onClick }: buttonProps) {
  return (
    <button
      type="button"
      // className="text-violet hover:text-white border border-violet focus:border-magenta hover:bg-violet focus:hover:bg-magenta focus:ring-4 focus:outline-none focus:ring-magenta font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      className="bg-violet hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const LinkButton = memo(
  ({ children = "button", href }: linkButtonProps) => (
    <Link href={href}>
      <a
        // className="text-violet hover:text-white border border-violet focus:border-magenta hover:bg-violet focus:hover:bg-magenta focus:ring-4 focus:outline-none focus:ring-magenta font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        className="bg-violet hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </a>
    </Link>
  )
);

LinkButton.displayName = "LinkButton";

export default React.memo(Button);
