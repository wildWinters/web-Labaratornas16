"use client"
import Header from "./(Main_Page)/_Main/Header";
import Slider from "./(Main_Page)/_Main/Slider";
import Footer from "./(Main_Page)/_Main/Footer";
import Section from "./(Main_Page)/_Main/Sections";
import Main from "./(Main_Page)/_Main/Main";
import StartupForm from "./(Main_Page)/_UI/Form";
import { useForm } from "./(Main_Page)/_Store/sections";
import InvestorsBlog from "./investors/_Components/InvetorsBlog";
export default function Home() {

  const isForm = useForm(state=>state.isForm);
  return (
    <>
      <Header />
      <Main>
        <Slider />
        <Section />
      </Main>
      <InvestorsBlog/>
      <Footer />
      {isForm && <StartupForm/>}   
    </>
  );
}


