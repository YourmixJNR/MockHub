import React from "react";
import CreateAcct from "../Components/CreateAcct/CreateAcct";
import Header from "../Components/Layouts/Header/Header";
import CompSignUp from "../Components/CompSignUp";
import Footer from "../Components/Layouts/Footer/Footer";

const SignUp = () => {
  return (
    <>
      <Header />
      <CreateAcct />
      <CompSignUp />
      <Footer />
    </>
  );
};

export default SignUp;
