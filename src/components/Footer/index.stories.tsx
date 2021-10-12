import React from "react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  conmponent: Footer,
  argTypes: {}
};

export const Default: React.FC = () => {
  return <Footer></Footer>;
};


export const Dark: React.FC = () => {
  return <Footer ></Footer>;
};
