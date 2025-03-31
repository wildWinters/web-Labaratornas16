interface Investor {
    name: string;
    sector: string;
    portfolioValue: string;
    imageUrl: string;
    companies: string;
    country: string;
    experience: string;
    flags:string;
}

const investors: Investor[] = [
    {
        name: "Investor 1",
        sector: "Technology",
        portfolioValue: "500 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "TechCorp, InnovateLtd",
        country: "Ukraine",
        experience: "15 years",
        flags:"/Flags/Flag_of_Ukraine.svg.png"
    },
    {
        name: "Investor 2",
        sector: "Healthcare",
        portfolioValue: "300 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "MedCare, HealthPlus",
        country: "USA",
        experience: "10 years",
        flags:"/Flags/Flag_of_the_United_States.svg.png"
    },
    {
        name: "Investor 3",
        sector: "Energy",
        portfolioValue: "1 billion USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "EnergyNet, PowerGrid",
        country: "Germany",
        experience: "20 years",
        flags:"/Flags/Flag_of_Germany.svg.png"
    },
    {
        name: "Investor 4",
        sector: "Financial Services",
        portfolioValue: "700 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "FinServe, BankPro",
        country: "UK",
        experience: "12 years",
        flags:"/Flags/Flag_of_the_United_Kingdom_(1-2).svg"
    },
    {
        name: "Investor 5",
        sector: "Tourism",
        portfolioValue: "150 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "TourWorld, ExploreMore",
        country: "Spain",
        experience: "8 years",
        flags:"/Flags/Flag_of_Spain.svg.png"
    },
    {
        name: "Investor 6",
        sector: "Education",
        portfolioValue: "400 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "EduTech, LearnNow",
        country: "France",
        experience: "18 years",
        flags:"/Flags/Flag_of_France.svg.webp"
    },
    {
        name: "Investor 7",
        sector: "Infrastructure",
        portfolioValue: "900 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "InfraBuild, CityScape",
        country: "Japan",
        experience: "25 years",
        flags:"/Flags/images.png"
    },
    {
        name: "Investor 8",
        sector: "Consumer Goods",
        portfolioValue: "600 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "ConsumerGoodsInc, DailyProducts",
        country: "Canada",
        experience: "10 years",
        flags:"/Flags/Flag_of_Canada.svg.png"
    },
    {
        name: "Investor 9",
        sector: "IT",
        portfolioValue: "2 billion USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "TechWorld, SoftWareInc",
        country: "Singapore",
        experience: "30 years",
        flags:"/Flags/Flag_of_Singapore.svg.png"
    },
    {
        name: "Investor 10",
        sector: "Automotive Industry",
        portfolioValue: "800 million USD",
        imageUrl: "/People/corey-collins-jKv4_6zXUBw-unsplash (1).jpg",
        companies: "AutoTech, CarMakers",
        country: "Germany",
        experience: "22 years",
        flags:"/Flags/Flag_of_Germany.svg.png"
    }
];

export default investors;
