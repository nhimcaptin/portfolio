import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

const Skills = (props: any) => {
  const { data } = props;
  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(src/assets/images/banner-bg.png)` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              {data?.skill.map((x, index) => {
                return (
                  <SwiperSlide key={index} className="bg-[#171717]">
                    <div className=" bg-[#171717]">
                      <img src={x.url} alt="" className="circle" />
                      <h1 className="font-bold text-2xl my-2">{x.name}</h1>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
