import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Intro />
      <About />
      <Contact />
    </div>
  );
}
