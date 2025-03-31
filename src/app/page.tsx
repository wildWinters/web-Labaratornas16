"use client"
import Header from "./Main/Header";
import Slider from "./Main/Slider";
import Footer from "./Main/Footer";
import Section from "./Main/Sections";
import Main from "./Main/Main";
import StartupForm from "./UI/Form";
import { useForm } from "./Store/sections";
import InvestorsBlog from "./investors/Components/InvetorsBlog";
import AuthModal from "./Modals/AuthModal";
import useAuth from "./Store/useRegistration";

export default function Home() {
  
  const isAuthModal = useAuth(state => state.isAuthModal);
  const isForm = useForm(state => state.isForm);

  return (
    <>
      <Header />
      <Main>
        <Slider />
        <Section />
      </Main>
      {/* <InvestorsBlog/> */}
      <Footer />
      {isForm && <StartupForm/>}   
      {isAuthModal && <AuthModal /> }
    </>
  );
}


