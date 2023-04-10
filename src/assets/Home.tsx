import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useGetPostsQuery } from "../store/index.service";

const Home = () => {
  const { data, isFetching, isLoading } = useGetPostsQuery();
  console.log("data", data);
  return (
    <>
      <Header data={data?.body?.data[0]} />
      <Skills data={data?.body?.data[0]} />
      <Projects data={data?.body?.data[0]} />
      <Contact data={data?.body?.data[0]} />
      <Footer data={data?.body?.data[0]} />
    </>
  );
};

export default Home;
