import React, { useEffect, useState } from "react";
import Image from "next/image";
// import logo from "./Teogu.png";
import { classNameJoiner } from "../../utils/className";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import Button, { LinkButton } from "../../common/button/button";
import { userStores } from "../../store/Context";
import { observer } from "mobx-react";
import Link from "next/link";
import UserService from "service/userService";

type HeaderProps = {
  onClick?: () => void;
};

const Header = observer(({ onClick }: HeaderProps) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { userStore } = userStores();

  const onLogOut = async () => {
    userStore.logOut();
    await UserService.logOut();
  };

  useEffect(() => {
    userStore.currentUser !== "" ? setIsLogIn(true) : setIsLogIn(false);
  }, [userStore.currentUser]);

  useEffect(() => {
    userStore.isAdmin ? setIsAdmin(true) : setIsAdmin(false);
  }, [userStore.isAdmin]);

  return (
    <header
      className={classNameJoiner(
        "w-full bg-white flex items-center justify-between"
      )}
    >
      <div className="flex items-center ">
        <IconBox onClick={onClick} iconName={IconType.menu} />
        <Link href={"/"}>
          <a>
            <Image
              className={"cursor-pointer"}
              src={"/Teogu.webp"}
              alt="logo"
              width={80}
              height={80}
            />
          </a>
        </Link>
      </div>

      <div className="space-x-3 pr-5">
        {isLogIn ? (
          <Button onClick={onLogOut}>{"LogOut"}</Button>
        ) : (
          <LinkButton href={`blogs/login`}>{"LogIn"}</LinkButton>
        )}

        {isAdmin && <LinkButton href={`blogs/post`}>{"글쓰기"}</LinkButton>}
      </div>
    </header>
  );
});
export default Header;
