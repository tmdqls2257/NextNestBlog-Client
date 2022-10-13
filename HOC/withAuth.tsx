import { useRouter } from "next/router";
import React, { useEffect } from "react";

import UserService from "service/userService";

type WithChildrenTestComponentProps<T = any> = {
  InComponent: (props: T) => JSX.Element;
};

const WithAuth = ({ InComponent }: WithChildrenTestComponentProps) => {
  const OutComponent = () => {
    const router = useRouter();
    useEffect(() => {
      async function IsAdmin() {
        await UserService.getUserData().then(res => {
          if (res.isAdmin) {
            console.log(1);

            router.back();
          }
        });
      }
      IsAdmin();
    }, []);
    return <InComponent></InComponent>;
  };

  return OutComponent;
};

export default WithAuth;
