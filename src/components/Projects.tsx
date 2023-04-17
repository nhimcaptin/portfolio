import React, { useState } from "react";

import "../styles.css";
import ProjectCard from "./ProjectCard";

const Projects = (props: any) => {
  const { data } = props;
  const [durum, setDurum] = useState(1);
  const [title, setTitle] = useState("Projects");

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">{title}</h1>
        {/* <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => {
              setDurum(1), setTitle("Projects");
            }}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setDurum(2), setTitle("Contact");
            }}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            Contact
          </button>
        </div> */}
        {durum === 1 ? (
          <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
            {data?.project.map((item, i) => (
              <ProjectCard key={i} item={item} />
            ))}
          </div>
        ) : null}
        {/* {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-white py-16 mx-auto lg:p-5 "
            style={{ maxWidth: '20rem'}}
          >
            <div>
              <p>Họ và tên: {data?.contact.name}</p>
              <p>Email: {data?.contact.email}</p>
              <p>SĐT: {data?.contact.sdt}</p>
              <p>Skype: {data?.contact.skype}</p>
            </div>
          </div>
        ) : null} */}
      </div>
    </>
  );
};

export default Projects;
