import Header from "./Header";
import bannerimg from "../../assets/Banner-2023.jpg";
import banner2 from "../../assets/Bogura-Khal-2023.jpg";
import banner3 from "../../assets/teesta-2023.jpg";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button";


const HeroSection = () => {
    const [current, setCurrent] = useState(bannerimg);
    useEffect(() => {
        const interval = setInterval(() => {
            if (current === bannerimg) {
                setCurrent(banner2);
            } else if (current === banner2) {
                setCurrent(banner3);
            } else {
                setCurrent(bannerimg);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div>
            <Header />
            <div className="relative ">
                <img src={current} alt="Banner" className="w-full h-96 object-cover
         brightness-50 " />
                <div className="absolute lg:top-[45%] top-[30%] lg:left-0 left-[5%] lg:transform lg:translate-x-1/2
                 lg:-translate-y-1/2 text-center">
                    <h1 className="lg:text-6xl text-4xl text-colors-sand-beige font-bold">
                        পানি সম্পদ মন্ত্রণালয়</h1>
                    <p className="text-white mt-2">
                        গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>

                    <div className="mt-5 flex lg:w-[60%] w-[70%]  mx-auto ">
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="অফিসের ধরণ" />
                            </SelectTrigger>
                            <SelectContent className="h-[">
                                <SelectItem value="light">মন্ত্রণালয়/বিভাগ</SelectItem>
                                <SelectItem value="dark"> অধিদপ্তর বাতায়ন</SelectItem>
                                <SelectItem value="system"> বিভাগীয় বাতায়ন</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className=" ml-2 buttonColors rounded hover:bg-green-500  ">Go</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HeroSection;