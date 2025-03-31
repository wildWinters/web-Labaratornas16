import { create } from "zustand";


interface CompanyAnalysis {
    img: string;
    name: string;         
    sector: string;              
    capital: string;                 
    address: string;              
    financialIndicators: string;     
    foundedYear: number;             
    ceo: string;                   
    employeesCount: number;        
    marketShare: number;           
    trends: string[];                  
    developmentOpportunities: string;  
  }
  

interface CompanyCardsInfo {
    companyCardsInMarketGrid: CompanyAnalysis[],
    isModalCompanyDetailCardExists?: boolean;
    updateCompanyCardsInMarketGrid: (dataCompanies?: any) => void;
    setModalCompanyDetailCardExistsTrue?: () => void;
    setModalCompanyDetailCardExistsFalse?: () => void;
  }

const useCompanyCardsStore = create<CompanyCardsInfo>(set => ({
    companyCardsInMarketGrid: [],
    isModalCompanyDetailCardExists: false,
    updateCompanyCardsInMarketGrid: dataCompanies => set({companyCardsInMarketGrid: dataCompanies}),    
    setModalCompanyDetailCardExistsTrue: () => set({isModalCompanyDetailCardExists: true}),
    setModalCompanyDetailCardExistsFalse: () => set({isModalCompanyDetailCardExists: false}),   
}));
export default useCompanyCardsStore;
