"use client"
import Header from "../Main/Header"
import Footer from "../Main/Footer"
import Section from "./Components/Section"
import GridsCompanyCards from "./Components/CompanyCards"
import Selection from "./Components/selection"
import Button from "../investors/UI/Button"

export default function Market() {          

    return ( 
        <>      
            <Header/>
            <Section>   
                <GridsCompanyCards  Selections = {<Selection/>}/> 
            </Section>    
            <Footer/>     
        </>
    )
}