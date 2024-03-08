import React, { useState } from "react";
import Image from "next/image";
import { PiComputerTowerFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
const fourGs = [
  {
    id: 1,
    name: "Cách đăng ký 4G Mobifone",
  },
  {
    id: 2,
    name: "Các gói cước 4G Mobifone",
  },
  {
    id: 3,
    name: "Mua thêm dung lượng Mobi",
  },
  {
    id: 4,
    name: "Cách kiểm tra dung lượng 4G Mobi",
  },
];

const Footer: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-10 w-[1340px] mx-auto">
        <section className="flex flex-col flex-1">
          <h1 className="text-[22px] font-medium text-blue-800 uppercase">
            Thông tin liên hệ
          </h1>
          <Image
            src="/img/mobifone-footer-logo.png"
            alt=""
            width={250}
            height={100}
          />
          <div className="flex items-center text-[14px]">
            <PiComputerTowerFill />
            <p>
              Đơn vị cung cấp : <span className="text-blue-500">Mobifone</span>
            </p>
          </div>
          <div className="flex items-center text-[14px]">
            <FaPhone />
            Tổng đài Mobifone: <span className="text-blue-500">
              9090
            </span> hoặc <span className="text-blue-500">18001090</span>
          </div>
          <a href="" className="text-blue-500 text-[16px]">
            Chính sách bảo mật
          </a>
        </section>
        <section className="flex-1 flex flex-col">
          <h1 className="text-[22px] font-medium text-blue-800 uppercase">
            Gói cước 4G mobifone
          </h1>
          <ul>
            {fourGs.map((item, index) => (
              <li
                key={index}
                className={`flex items-center text-blue-800 hover:text-black hover:cursor-pointer ${
                  hoveredItem === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <IoMdAddCircle />
                <a className=" font-medium">{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex-1 flex flex-col">
          <h1 className="text-[22px] font-medium text-blue-800 uppercase">
            Gói cước 4G mobifone
          </h1>
          <ul>
            {fourGs.map((item, index) => (
              <li
                key={index}
                className={`flex items-center text-blue-800 hover:text-black hover:cursor-pointer ${
                  hoveredItem === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <IoMdAddCircle />
                <a className="font-medium">{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex-1 flex flex-col">
          <h1 className="text-[22px] font-medium text-blue-800 uppercase">
            Gói cước 4G mobifone
          </h1>
          <ul>
            {fourGs.map((item, index) => (
              <li
                key={index}
                className={`flex items-center text-blue-800 hover:text-black hover:cursor-pointer ${
                  hoveredItem === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <IoMdAddCircle />
                <a className=" font-medium">{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
