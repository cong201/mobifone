import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const fourGs = [
  {
    id: 1,
    name: "Gói cước 3G/4G mobi",
  },
  {
    id: 2,
    name: " 5 Lợi ích khi đăng ký gói cước 4G MobiFone",
  },
  {
    id: 3,
    name: "Đăng ký gói cước 4G mobi",
  },
  {
    id: 4,
    name: "Gói cước chuyển vùng Quốc tế",
  },
];

const threeGs = [
  {
    id: 1,
    name: "Đăng ký gói cước 3G mobi",
  },
];
const fiveGs = [
  {
    id: 1,
    name: "Đăng ký gói cước 5G mobi",
  },
  {
    id: 2,
    name: " Gói cước chuyển vùng Quốc tế Biên giới",
  },
];
const vouchers = [
  {
    id: 1,
    name: "Săn vé The Mask Singer cùng MyMobiFone (1/12 – 6/12/2023)",
  },
  {
    id: 2,
    name: "CTKM cho TB sử dụng DV thoại quốc tế chiều đi TOP 30 quốc gia nhân dịp chào Xuân Giáp Thìn 2024",
  },
];
const news = [
  {
    id: 1,
    name: "Hướng dẫn đăng ký gói cước ED90 Mobifone",
  },
  {
    id: 2,
    name: "Hướng dẫn đăng ký gói cước KC90 Mobifone",
  },
  {
    id: 3,
    name: "Hướng dẫn đăng ký gói cước D30 Mobifone",
  },
  {
    id: 4,
    name: "Hướng dẫn đăng ký gói cước MobiFone MT190",
  },
  {
    id: 5,
    name: "Hướng dẫn đăng ký gói cước NA90 Mobifone",
  },
  {
    id: 6,
    name: "Gói cước MXH120 Mobifone Free 100% data Tiktok, Facebook, Youtube",
  },
  {
    id: 7,
    name: "Đăng ký KC150 Mobifone nhận 2GB data/ngày",
  },
  {
    id: 8,
    name: "Hướng dẫn đăng ký gói cước MobiFone MFY200",
  },
];
const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setIsHovered(item);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex py-[15px] items-center w-[1340px] mx-auto space-x-10">
        <section className="flex flex-2 ">
          <a href="/">
            <Image
              src="/img/Logo-Mobifone.png"
              alt=""
              width={210}
              height={120}
            />
          </a>
        </section>
        <section className="flex uppercase font-medium text-blue-600 text-lg space-x-3 mt-[10px] text-[14px] flex-7">
          <ul className="flex items-center justify-center">
            <a className="hover:text-blue-800" href="/">
              Trang chủ
            </a>
          </ul>
          <ul
            className="flex items-center justify-center relative item-2"
            onMouseEnter={() => handleMouseEnter("item-2")}
            onMouseLeave={handleMouseLeave}
          >
            <a href="" className="hover:text-blue-800">
              Đăng kí 4G
            </a>
            <MdKeyboardArrowDown />
            {isHovered === "item-2" && (
              <div
                className="absolute p-0 m-0 top-full left-0 float-left w-[250px] list-none border border-solid border-blue-500 rounded-lg bg-blue-500 box-border"
                onMouseEnter={() => handleMouseEnter("item-2")}
                onMouseLeave={handleMouseLeave}
              >
                {fourGs.map((item, index) => (
                  <li className="p-[10px] pb-[10px] border-b border-solid border-gray-300">
                    <a
                      className="text-base font-semibold text-white hover:text-gray-200"
                      href=""
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </ul>
          <ul
            className="flex items-center justify-center relative item-3"
            onMouseEnter={() => handleMouseEnter("item-3")}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:text-blue-800" href="">
              Đăng ký 3G
            </a>{" "}
            <MdKeyboardArrowDown />
            {isHovered === "item-3" && (
              <div
                className="absolute p-0 m-0 top-full left-0 float-left w-[250px] list-none border border-solid border-blue-500 rounded-lg bg-blue-500 box-border"
                onMouseEnter={() => handleMouseEnter("item-3")}
                onMouseLeave={handleMouseLeave}
              >
                {threeGs.map((item, index) => (
                  <li className="p-[10px] pb-[10px] border-b border-solid border-gray-300">
                    <a
                      className="text-base font-semibold text-white hover:text-gray-200"
                      href=""
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </ul>
          <ul
            className="flex items-center justify-center relative item-4"
            onMouseEnter={() => handleMouseEnter("item-4")}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:text-blue-800" href="">
              Đăng ký 5G
            </a>{" "}
            <MdKeyboardArrowDown />
            {isHovered === "item-4" && (
              <div
                className="absolute p-0 m-0 top-full left-0 float-left w-[250px] list-none border border-solid border-blue-500 rounded-lg bg-blue-500 box-border"
                onMouseEnter={() => handleMouseEnter("item-4")}
                onMouseLeave={handleMouseLeave}
              >
                {fiveGs.map((item, index) => (
                  <li className="p-[10px] pb-[10px] border-b border-solid border-gray-300">
                    <a
                      className="text-base font-semibold text-white hover:text-gray-200"
                      href=""
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </ul>
          <ul
            className="flex items-center justify-center relative item-5"
            onMouseEnter={() => handleMouseEnter("item-5")}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:text-blue-800" href="">
              Khuyến mãi
            </a>{" "}
            <MdKeyboardArrowDown />
            {isHovered === "item-5" && (
              <div
                className="absolute p-0 m-0 top-full left-0 float-left w-[250px] list-none border border-solid border-blue-500 rounded-lg bg-blue-500 box-border"
                onMouseEnter={() => handleMouseEnter("item-5")}
                onMouseLeave={handleMouseLeave}
              >
                {vouchers.map((item, index) => (
                  <li className="p-[10px] pb-[10px] border-b border-solid border-gray-300">
                    <a
                      className="text-base font-semibold text-white hover:text-gray-200"
                      href=""
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </ul>
          <ul
            className="flex items-center justify-center relative item-6"
            onMouseEnter={() => handleMouseEnter("item-6")}
            onMouseLeave={handleMouseLeave}
          >
            <a className="hover:text-blue-800" href="">
              Tin tức
            </a>{" "}
            <MdKeyboardArrowDown />
            {isHovered === "item-6" && (
              <div
                className="absolute p-0 m-0 top-full left-0 float-left w-[250px] list-none border border-solid border-blue-500 rounded-lg bg-blue-500 box-border"
                onMouseEnter={() => handleMouseEnter("item-6")}
                onMouseLeave={handleMouseLeave}
              >
                {news.map((item, index) => (
                  <li className="p-[10px] pb-[10px] border-b border-solid border-gray-300">
                    <a
                      className="text-base font-semibold text-white hover:text-gray-200"
                      href=""
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </div>
            )}
          </ul>
          <ul className="flex items-center justify-center">
            <a className="hover:text-blue-800" href="">
              Liên hệ
            </a>
          </ul>
          <ul className="flex items-center justify-center">
            <a className="hover:text-blue-800" href="">
              Giới thiệu
            </a>
          </ul>
        </section>
        <section className="flex items-center justify-center border border-gray bg-gray-100 rounded-lg w-[80px] h-9 hover:bg-gray-300 cursor-pointer border-none flex-1">
          <CiSearch className="text-3xl flex items-center justify-center font-bold" />
        </section>
      </div>
    </div>
  );
};

export default Header;
