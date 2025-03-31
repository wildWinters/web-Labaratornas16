import { ReactNode } from "react";
import Button from "@/app/investors/UI/Button";

interface SectionInterface {
  children: ReactNode;
   Selections?: any;
}

export default function Section({ children, Selections = null }: SectionInterface) {
    const filePaths = [
        "/AI/1920x1080 resolution horizontal image depicting abstract geometric patterns and futuristic financial elements in a sleek modern style.  Dark color scheme accented with electric blue and green, featuring subtle gr.jpg",
        "/AI/1920x1080 resolution horizontal image for a tech dashboard.  Abstract geometric patterns, subtle gradients, and futuristic tech elements are depicted in a sleek modern style. Dark color scheme with electric blue .jpg",
        "/AI/1920x1080 resolution horizontal image, bold acrylic style, dark background with electric blue and green accents, abstract geometric patterns, futuristic financial elements, minimalistic, sleek, modern aesthetic f.jpg",
        "/AI/1920x1080 resolution horizontal image, precise architectural color photography, strong moody style, bright lens flare, low contrast, light streaks, vibrant colors, sharp lines, detailed structures, wide angles, m.jpg",
        "/AI/1920x1080 resolution horizontal image, tech dashboard background, Market and Competitor Analysis theme. Abstract geometric patterns, subtle gradients, futuristic tech elements. Dark color scheme, electric blu (1).jpg",
        "/AI/A 1920x1080 horizontal web dashboard background image. Style sleek, modern. Theme Market and Competitor Analysis. Medium architectural color photography. Aesthetic epic, amazing lens glow lighting. Color scheme d.jpg",
        "/AI/A 1920x1080 horizontal web dashboard background image. Style sleek, modern. Theme Market and Competitor Analysis. Medium digital art. Aesthetic bright lens flare, deep ultraviolet hues. Color scheme dark, accente.jpg",
        "/AI/A 1920x1080 resolution horizontal image, a sleek modern background for a tech dashboard themed Market and Competitor Analysis.  The background features abstract geometric patterns, subtle gradients, and futuristi.jpg",
        "/AI/A 1920x1080 resolution image depicting a sleek, modern background for a tech dashboard.  The theme is Market and Competitor Analysis, with abstract geometric patterns, subtle gradients, and futuristic tech elemen.jpg",
        "/AI/Overhead bird’s eye view. Isekai anime style.  1920x1080 resolution horizontal image. Expressive composition, dark background with abstract geometric patterns, futuristic elements, electric blue and green accents.jpg"
    ];
    console.log(filePaths);
    const imgSrc = filePaths[6]; // Шлях до зображення в public

    return (
      <section
        style={{
          backgroundImage: `url('${imgSrc}')`, 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="relative  w-full min-h-screen  flex justify-center items-center p-4">
        {children}
      </section>
    );
  }
  