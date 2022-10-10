import React, { useState } from "react";
import arrow from "../../assets/arrow.png";
export interface InputProps {
  setIpHeader(value: string): void;
  handleSearchIp(value: string): void;
}
const Input: React.FC<InputProps> = ({ setIpHeader, handleSearchIp }) => {
  const [ip, setIp] = useState("");

  const handleSubmitIp = () => {
    setIpHeader(ip);
    handleSearchIp(ip);
    setIp("");
  };
  return (
    <div className="max-w-lg flex items-center justify-between pl-3 rounded-md w-5/6  bg-white mt-5 ">
      <input
        type="text"
        placeholder="Ex: 0.0.0.0"
        className=" outline-none text-lg flex-1	font-normal	text-darkGray placeholder:text-sm placeholder:text=gray"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button
        className="bg-[#18181b]  w-12 h-12 flex items-center  justify-center rounded-r-md hover:opacity-90 hover:transition-opacity duration-500 "
        onClick={handleSubmitIp}
      >
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Input;
