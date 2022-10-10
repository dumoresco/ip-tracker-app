import React, { useState } from "react";
import Input from "../input";

interface HeaderProps {
  handleSearchIp(value: string): void;
}

const Header: React.FC<HeaderProps> = ({ handleSearchIp }) => {
  const [ipHeader, setIpHeader] = useState("");

  return (
    <div className="bg-[url('./assets/pattern-bg.png')] bg-auto	bg-no-repeat bg-cover	h-64 flex items-center	justify-center flex-col	">
      <h1 className="sm:text-3xl font-semibold text-white	">
        IP Address Tracker
      </h1>
      <Input setIpHeader={setIpHeader} handleSearchIp={handleSearchIp} />
    </div>
  );
};

export default Header;
