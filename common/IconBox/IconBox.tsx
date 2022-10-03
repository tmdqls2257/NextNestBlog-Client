import React, { MouseEventHandler } from "react";
import { classNameJoiner } from "../../utils/className";

type IconBoxProps = {
  id?: string;
  style?: string;
  iconName: IconType | FillIconType;
  // onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export enum IconType {
  newspaper = "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  bookmark = "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
  annotation = "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
  phone = "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  menu = "M4 6h16M4 12h16M4 18h16",
  search = "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  right_arrow = "M9 5l7 7-7 7",
  down_arrow = "M19 9l-7 7-7-7",
  update = "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
  trash = "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
}

export enum FillIconType {
  github = "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
}

const IconBox = ({
  iconName,
  id,
  onClick,
  style = "h-16 w-16 p-5",
}: IconBoxProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNameJoiner(
        style,
        " flex cursor-pointer items-center justify-center "
      )}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      id={id}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconName} />
    </svg>
  );
};

export const FillIconBox = ({
  iconName,
  onClick,
  style = "h-16 w-16 p-5",
}: IconBoxProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNameJoiner(
        style,
        " flex cursor-pointer items-center justify-center "
      )}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={iconName} />
    </svg>
  );
};

export default React.memo(IconBox);
