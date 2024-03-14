import React, { ReactElement } from "react";
import Layout from "./components/Layout/Layout";
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
const packages = [
  {
    id: 1,
    name: "Gói cước 4G mobifone nổi bật",
    namedt: "ED90",
    price: "90.0000đ",
    data: "30GB",
    date: "30 ngày",
  },
  {
    id: 2,
    name: "Gói cước 4G MobiFone ưu đãi",
    namedt: "D30",
    price: "30.000đ",
    data: "60GB + Gọi",
    date: "30 ngày",
  },
  {
    id: 3,
    name: "Gói cước 4G MobiFone giới trẻ",
    namedt: "MT190",
    price: "190.000đ",
    data: " 7GB/ Ngày",
    date: "30 ngày",
  },
  {
    id: 4,
    name: "Gói cước 4G MobiFone tiện ích",
    namedt: "TK135",
    price: "135.000đ",
    data: "30GB",
    date: "30 ngày",
  },
];

const news = [
  {
    id: 1,
    img: "https://dichvumobifone.vn/wp-content/uploads/2023/11/90300.png",
    title: "Gói cước 3G/4G mobi",
  },
  {
    id: 2,
    img: "https://dichvumobifone.vn/wp-content/uploads/2023/10/dichvumobifone.vn_-767x300.jpg",
    title: "Địa chỉ cửa hàng MobiFone",
  },
  {
    id: 3,
    img: "https://dichvumobifone.vn/wp-content/uploads/2023/12/z4954060748053_24426d61196a8edbe312c472c549d8ca-767x384.jpg",
    title: "5 Lợi ích khi đăng ký gói cước 4G MobiFone",
  },
];

const vouchers = [
  {
    id: 1,
    img: "https://dichvumobifone.vn/wp-content/uploads/2023/09/1604121612_mobi.jpg",
    title:
      "MobifoneGo: Lướt mạng xã hội thả ga – Quà về túi bao la (24/11/2023 – 21/02/2024)",
  },
  {
    id: 2,
    img: "https://dichvumobifone.vn/wp-content/uploads/2023/09/1604121612_mobi.jpg",
    title:
      "CTKM cho TB sử dụng DV thoại quốc tế chiều đi TOP 30 quốc gia nhân dịp chào Xuân Giáp Thìn 2024",
  },
  {
    id: 3,
    img: "https://dichvumobifone.vn/wp-content/uploads/2023/11/91728.jpg",
    title: "Săn vé The Mask Singer cùng MyMobiFone (1/12 – 6/12/2023)",
  },
];

const Index = () => {
  return (
    <div className="flex ">
      <div className="mt-[120px]">
        <section>
          <img
            src="https://dichvumobifone.vn/wp-content/uploads/2023/09/banner-1.jpg"
            alt=""
          />
        </section>
        {packages.map((item, index) => (
          <section
            key={index}
            className={`w-full mx-auto mt-[60px] pt-[10px] pb-[60px] ${
              index % 2 === 0 ? "bg-white" : "bg-blue-50"
            }`}
          >
            <div className={`w-[1340px] mx-auto mt-[60px]`}>
              <div className="flex items-center space-x-2 text-2xl font-medium hover:cursor-pointer hover:text-blue-500 mb-[20px]">
                <IoMdAddCircle />
                <h2>{item.name}</h2>
              </div>
              <div className="flex items-center justify-center space-x-[60px] ">
                <div className="flex justify-center w-[23.5%] border border-[#e5e5e5] rounded-[40px] box-shadow relative bg-white">
                  <div className="flex flex-col items-center space-y-[10px] pb-[32px] pt-[16px]  w-full">
                    <p className="text-blue-500 text-2xl font-medium">
                      {item.namedt}
                    </p>
                    <span className="text-black font-bold text-xl">
                      {item.price}
                    </span>
                    <div className="flex justify-center items-center space-x-4">
                      <BiSolidCoinStack />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        DATA:{item.data}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <div className="flex justify-center items-center space-x-4">
                      <FaRegClock />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        Date:{item.date}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <label>
                      Soạn :{" "}
                      <span className="text-black font-medium ">KD 6 7DE</span>{" "}
                      Gửi <span className="text-black font-medium ">9048</span>
                    </label>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <button className="w-[120px] h-[40px] bg-btn rounded-[20px] hover:bg-[#224560] text-white font-medium">
                      Soạn tin
                    </button>
                    <button className="w-[92px] h-[30px] border border-[#e80f8a] text-[#e80f8a] rounded-[20px] font-medium">
                      Chi tiết
                    </button>
                  </div>
                  <div className="absolute top-[-20px] right-0">
                    <img
                      className=" h-[60px] w-[40px]"
                      src="https://dichvumobifone.vn/wp-content/uploads/2023/09/goi-cuoc-hot.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center w-[23.5%] border border-[#e5e5e5] rounded-[40px] box-shadow relative bg-white">
                  <div className="flex flex-col items-center space-y-[10px] pb-[32px] pt-[16px] w-full">
                    <p className="text-blue-500 text-2xl font-medium">
                      {item.namedt}
                    </p>
                    <span className="text-black font-bold text-xl">
                      {item.price}
                    </span>
                    <div className="flex justify-center items-center space-x-4">
                      <BiSolidCoinStack />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        DATA:{item.data}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <div className="flex justify-center items-center space-x-4">
                      <FaRegClock />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        Date:{item.date}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <label>
                      Soạn :{" "}
                      <span className="text-black font-medium ">KD 6 7DE</span>{" "}
                      Gửi <span className="text-black font-medium ">9048</span>
                    </label>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <button className="w-[120px] h-[40px] bg-btn rounded-[20px] hover:bg-[#224560] text-white font-medium">
                      Soạn tin
                    </button>
                    <button className="w-[92px] h-[30px] border border-[#e80f8a] text-[#e80f8a] rounded-[20px] font-medium">
                      Chi tiết
                    </button>
                  </div>
                  <div className="absolute top-[-20px] right-0">
                    <img
                      className=" h-[60px] w-[40px]"
                      src="https://dichvumobifone.vn/wp-content/uploads/2023/09/goi-cuoc-hot.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center w-[23.5%] border border-[#e5e5e5] rounded-[40px] box-shadow relative bg-white">
                  <div className="flex flex-col items-center space-y-[10px] pb-[32px] pt-[16px]  w-full">
                    <p className="text-blue-500 text-2xl font-medium">
                      {item.namedt}
                    </p>
                    <span className="text-black font-bold text-xl">
                      {item.price}
                    </span>
                    <div className="flex justify-center items-center space-x-4">
                      <BiSolidCoinStack />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        DATA:{item.data}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <div className="flex justify-center items-center space-x-4">
                      <FaRegClock />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        Date:{item.date}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <label>
                      Soạn :{" "}
                      <span className="text-black font-medium ">KD 6 7DE</span>{" "}
                      Gửi <span className="text-black font-medium ">9048</span>
                    </label>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <button className="w-[120px] h-[40px] bg-btn rounded-[20px] hover:bg-[#224560] text-white font-medium">
                      Soạn tin
                    </button>
                    <button className="w-[92px] h-[30px] border border-[#e80f8a] text-[#e80f8a] rounded-[20px] font-medium">
                      Chi tiết
                    </button>
                  </div>
                  <div className="absolute top-[-20px] right-0">
                    <img
                      className=" h-[60px] w-[40px]"
                      src="https://dichvumobifone.vn/wp-content/uploads/2023/09/goi-cuoc-hot.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center w-[23.5%] border border-[#e5e5e5] rounded-[40px] box-shadow relative bg-white">
                  <div className="flex flex-col items-center space-y-[10px] pb-[32px] pt-[16px] w-full">
                    <p className="text-blue-500 text-2xl font-medium">
                      {item.namedt}
                    </p>
                    <span className="text-black font-bold text-xl">
                      {item.price}
                    </span>
                    <div className="flex justify-center items-center space-x-4">
                      <BiSolidCoinStack />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        DATA:{item.data}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <div className="flex justify-center items-center space-x-4">
                      <FaRegClock />
                      <span className="text-black font-medium text-lg">
                        {" "}
                        Date:{item.date}
                      </span>
                    </div>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <label>
                      Soạn :{" "}
                      <span className="text-black font-medium ">KD 6 7DE</span>{" "}
                      Gửi <span className="text-black font-medium ">9048</span>
                    </label>
                    <hr className="w-full border border-[#d8d7d7]" />
                    <button className="w-[120px] h-[40px] bg-btn rounded-[20px] hover:bg-[#224560] text-white font-medium">
                      Soạn tin
                    </button>
                    <button className="w-[92px] h-[30px] border border-[#e80f8a] text-[#e80f8a] rounded-[20px] font-medium">
                      Chi tiết
                    </button>
                  </div>
                  <div className="absolute top-[-20px] right-0">
                    <img
                      className=" h-[60px] w-[40px]"
                      src="https://dichvumobifone.vn/wp-content/uploads/2023/09/goi-cuoc-hot.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        <section className="flex w-full items-center justify-center">
          <div className="flex w-[1340px] items-center justify-center px-[10px] py-[20px]">
            <div className="w-[50%] space-y-10">
              <h1 className="text-2xl text-black font-bold">Tin tức</h1>
              {news.map((item, index) => (
                <div className="flex items-center space-x-3 cursor-pointer group">
                  <img className="w-[30%]" src={item.img} alt="" />
                  <div className="space-y-3">
                    <span className="text-black text-xl font-medium">
                      {item.title}
                    </span>
                    <div className="border h-[2px] border-blue-500 w-[30%] group-hover:w-[60%] group-hover:h-[2px] group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[50%] space-y-10">
              <h1 className="text-2xl text-black font-bold">Khuyến mãi</h1>
              {vouchers.map((item, index) => (
                <div className="flex items-center space-x-3 cursor-pointer group">
                  <img className="w-[30%]" src={item.img} alt="" />
                  <div className="space-y-3">
                    <span className="text-black text-xl font-medium">
                      {item.title}
                    </span>
                    <div className="border h-[2px] border-blue-500 w-[30%] group-hover:w-[60%] group-hover:h-[2px] group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Index;
