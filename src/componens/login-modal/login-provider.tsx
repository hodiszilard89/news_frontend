import { FC, useEffect, useState } from "react";
import LoginModal from "./login-modal";
import { GetTokenQueryParams } from "../../store/news-api";


export const LoginProvider: FC = () => {

  
  const onSubmit = async (param: GetTokenQueryParams) => {};
  return (
    <div>
      <LoginModal  />
    </div>
  );
};
