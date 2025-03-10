import { create } from 'zustand';

interface Slider {
    sliderIndexImg1: number;
    sliderIndexImg2: number;
    changePicture1: (img1: React.RefObject<HTMLImageElement>, img2: React.RefObject<HTMLImageElement>) => void;
}

const useSlider = create<Slider>((set, get) => ({
    sliderIndexImg1: 0,
    sliderIndexImg2: 1,

    changePicture1: (img1, img2) => {
        if (!img1.current || !img2.current) return;

        const { sliderIndexImg1 } = get();
        const nextIndex = sliderIndexImg1 < 5 ? sliderIndexImg1 + 1 : 0;

        set({ sliderIndexImg1: nextIndex, sliderIndexImg2: nextIndex + 1 });

        img1.current.style.transition = "all 1.8s ease-in-out";
        img2.current.style.transition = "all 1.8s ease-in-out";

        switch (nextIndex % 3) {
            case 0:
                img1.current.style.left = "0%";
                img2.current.style.left = "100%";
                break;
            case 1:
                img1.current.style.left = "-100%";
                img2.current.style.left = "0%";
                break;
            case 2:
                img1.current.style.left = "100%";
                img2.current.style.left = "-100%";
                break;
        }
    }
}));

export default useSlider;

