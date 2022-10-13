import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import UserService from "service/userService";

type WithChildrenTestComponentProps<T = any> = {
  InComponent: (props: T) => JSX.Element;
};

const WithAuth = ({ InComponent }: WithChildrenTestComponentProps) => {
  const OutComponent = () => {
    const [user, setUser] = useState();
    const router = useRouter();
    useEffect(() => {
      async function IsAdmin() {
        await UserService.getUserData().then(res => {
          if (!res.isAdmin) {
            router.back();
          }
          setUser(res);
        });
      }
      IsAdmin();
    }, []);
    return <InComponent user={user}></InComponent>;
  };

  return OutComponent;
};

export default WithAuth;
