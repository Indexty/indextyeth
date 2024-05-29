"use client";

import { ConnectButton } from "thirdweb/react";
import { chain, client } from "../utils/constants";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center align-middle my-5">
      <ConnectButton client={client} chain={chain} />
    </div>
  );
};

export default Login;
