import React from "react";
import Navbar from "./Navbar";
import "../styles.css";

const Header = (props: any) => {
  const { data } = props;
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(src/assets/images/bg.jpg)` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar data={data} />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                Welcome to my Portfolio
              </button>
            </div>
            <h1 className="text-white text-5xl font-bold">
              Hi! I'm {data?.fullName}
            </h1>
            <p className="text-white py-4 max-w-lg ">{data?.description}</p>
            {/* <button className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button> */}
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img
              className="w-96 ast-img"
              src="src/assets/images/astronout1.png"
              alt=""
            />
          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
            <img
              className="w-96 ast-img"
              src="src/assets/images/astronout.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
