import { Check } from "lucide-react";
import aboutimg from "@/assets/aboutus2.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const Services = () => {

    const services = [
        {
            "title": "আমাদের বিষয়ে",
            img: aboutimg,
            "items": [
                " ভিশন ও মিশন",
                "সাংগঠনিক কাঠামো",
                "কর্মকর্তাবৃন্দ",
                "কর্মবন্টন",
            ]
        },
        {
            "title": "বির্তী/প্রজ্ঞাপন/পরিপত্র",
            "img":'https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/a881f106_c85e_4f90_a170_a2bc614b78b4/notice%20(1).png',
            "items": [
                "   বিজ্ঞপ্তি/আদেশ/পরিপত্র",
                "     বিদেশ ভ্রমণের জি.ও",
                "    পাসপোর্ট অনাপত্তি পত্র",
                "   টেন্ডার / কোটেশন",
                "         অফিস আদেশ / প্রজ্ঞাপন/ পরিপত্র"
            ]
        },
        {
            "title": "নীতি মালা ও প্রকাশনা",
            "img":'https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/e765e320_a545_4b61_9cc7_3bd338997771/POLICY_PUBLICATION-New.png',
            "items": [
                "  আইন ও বিধিমালা",
                "      নীতিমালা",
                "   গাইডলাইন/নির্দেশিকা",
                "   অন্যান্য ",
            ]
        },
        {
            "title": "নাগরিক ই-সেবা",
            "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/91425597_7b48_4f43_a851_1cbce2218ad6/Eservice.png",
            "items": [
                "   নাগরিক ই-সেবাসমূহ",
                "          বন্যা পূর্বাভাস ও সতর্কীকরণ কেন্দ্র",
                "          নদী দূষণ তথ্য ব্যবস্থাপনা",
                "নলেজ রিপোজিটরি সিস্টেম",
                "    অন্যান্য"

            ]
        },
        {
            "title": "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন চার্টার)",
            "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/374f3ccf_ce44_4c6c_b876_532313bbf537/Untitled%20(1).png",
            "items": [
                " সেবা প্রদান প্রতিশ্রুতি",
                "    ফোকাল পয়েন্ট কর্মকর্তা, বিকল্প কর্মকর্তা ও পরিবীক্ষণ কমিটি",
                " ত্রৈমাসিক/বার্ষিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
                "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন",
            ]
        },
        {
            "title": "অভিযোগ প্রতিকার ব্যবস্থাপনা",
            "items": [
                "অনিক ও আপিল কর্মকর্তাগণ",
                "কর্মপরিকল্পনা/পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
                "অভিযোগ দাখিল (অনলাইন)",
                "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/ প্রজ্ঞাপন",
            ]
        },
        {
            "title": "জাতীয় শুদ্ধাচার কৌশল",
                "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/ce6e0436_668b_45b1_a257_86c321f782ee/nis_logo3.jpg",
            "items": [
                "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক",
                "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট কর্মকর্তা",
                "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
                "আইন / বিধি / নীতিমালা / পরিপত্র / প্রজ্ঞাপন",
            ]
        },
        {
            "title": "বার্ষিক কর্মসম্পাদন চুক্তি",
                "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/a9a992ea_75ac_41dd_8d46_ad994a2efbb4/apa_cab.png",
            "items": [
                "বার্ষিক কর্মসম্পাদন চুক্তি",
                "নির্দেশিকা/পরিপত্র/এপিএ টিম/ফোকাল পয়েন্ট",
                "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল",
                "পরিবীক্ষণ ও মূল্যায়ন/ প্রতিবেদন",
                "এপিএএমএস সফটওয়্যার লিংক",
            ]
        },
        {
            "title": "তথ্য অধিকার",
            "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/6140d933_3e93_4c45_b6a7_7f269537b0d4/infocom.png",
            
            "items": [
                "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ",
                "আবেদন ও আপীল ফরম",
                "স্বপ্রণোদিত তথ্য প্রকাশ/ত্রৈমাসিক প্রতিবেদন",
                "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন",
            ]
        },
        {
            "title": "উদ্ভাবনী কার্যক্রম",
            "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/4f63ed18_6832_492d_9371_fc083b9d9505/INNOVATION%20(1).png",
            "items": [
                "উদ্ভাবনী কার্যক্রম",
                "কর্মপরিকল্পনা /নির্দেশিকা/প্রকল্পসমূহ",
                "ইনোভেশন টিম",
                "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/সংকলন",
                "মুল্যায়ন প্রতিবেদন সফটওয়্যার লিংক",
            ]
        },
        {
            "title": "সেবা সহজিকরণ",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/0a76aaa4_bf5a_4d8d_9e73_94d77eb597ea/SPS-3%20(1).png",
            "items": [
              "  সেবা সহজিকরণ ম্যানুয়াল",
             "   প্রজ্ঞাপন/পরিপত্র/নীতিমালা/অফিস আদেশ/সংকলন",
               " সেবা সহজিকরণ তালিকা",
               " সেবা সহজিকরণের দৃষ্টান্ত",
            ]
        },
        {
            "title": "বাজেট ও প্রকল্প",
            "img":"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/44ee74ed_acc1_4076_b162_9c68ba2853d2/budget2.png",
            "items": [
                "বাজেট ও প্রকল্প",
                "বার্ষিক ক্রয় পরিকল্পনা",
                "বাজেট ও এমটিবিএফ বাজেট",
                "বাজেট প্রতিবেদন/অফিস আদেশ",
                "গুরুত্বপূর্ণ সমাপ্ত প্রকল্পসমূহ",
            ]
        },
        {
            "title": "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/094e0648_0f16_450d_81df_dc9f1632c290/FinalLogoSDG.png",
            "items": [
                "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
            "    মন্ত্রণালয়ের এসডিজি",
               " এসডিজি ফোকাল / বিকল্প ফোকাল পয়েন্ট",
                "এসডিজি জাতীয় ডকুমেন্ট",
                "পঞ্চবার্ষিকী পরিকল্পনা ও প্রতিবেদন",
            ]
        },
        {
            "title": "ফরমসমূহ",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/862f0762_5b4f_49a5_9b71_38fa458f76dc/forms%20logo.png",
            "items": [
               " ফরমসমূহ",
               " বাংলাদেশ সরকারের ফরম",
              "  গাড়ী রিকুইজিশন ফরম",
                "উন্নয়ন প্রকল্প ও অফিস পরিদর্শন/সভা, সেমিনারে অংশগ্রহণের প্রেক্ষিত প্রতিবেদন ছক",
         "       অন্যান্য ফরম",
            ]
        },
        {
            "title": "ভ্রমণসূচী",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/57c38ef5_43c9_42bf_92d4_df87e0950cfc/%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0.png",
            "items": [
                "সচিবের ভ্রমণ/সফরসূচি",
                "অন্যান্য কর্মকর্তাগণ",
            ]
        },
        {
            "title": "মানব সম্পদ উন্নয়ন",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/d81f3716_9d2e_418d_ae58_4ac5131dad23/-%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%A6%20(1).png",
            "items": [
              "  নিয়োগ সংক্রান্ত সকল তথ্য",
                "অনলাইনে আবেদন",
               " প্রবেশপত্র ডাউনলোড",
                "নিয়োগ বিজ্ঞপ্তি",
            ]
        },
        {
            "title": "ব-দ্বীপ পরিকল্পনা, ব্লু ইকোনমি ও ইস্তাম্বুল কর্মপরিকল্পনা",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/ddcd27a7_5406_4720_8188_7f48c43c90ad/delta.jpg",
            "items": [
               " ব-দ্বীপ পরিকল্পনা, ব্লু ইকোনমি ও ইস্তাম্বুল কর্মপরিকল্পনা",
               " কর্মপরিকল্পনা",
             "   বাস্তবায়ন অগ্রগতি",
              "  ইস্তাম্বুল কর্মপরিকল্পনা",
               " ব-দ্বীপ পরিকল্পনা"
            ]
        },
        {
            "title": "তথ্য ও সেবা",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/12e4eaf7_211f_4ad3_a773_03c3317ff6fe/Untitled.png",
            "items": [
              "  তথ্য ও সেবা ",
             "   এডিপি/আএডিপি ম্যানেজ. সিস্টেম",
                "সরকারি সেবা হেল্পলাইন ৩৩৩",
              "  বন্যা পূর্বাভাস জানতে কল ১০৯০",
                "জরুরি সেবা পেতে কল ৯৯৯",
            ]
        },
        {
            "title": "বিবিধ",
            img:"https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/8b4e0568_b8e3_46d1_8d7d_c84aecffe277/Miscellaneous%20Logo.png",
            "items": [
             "   বিশ্ব পানি দিবস",
                "চলমান প্রকল্পসমূহ",
               " বার্ষিক প্রতিবেদন",
            ]
        },
        

    ]

    const sixservices = services.slice(0, 6);
    const restservices = services.slice(6, services.length);

    return (
        <div className=" lg:my-20 mt-10 lg:px-10 px-5 relative    ">
            <h2 className="lg:text-4xl text-xl font-bold text-gray-800 mb-4  text-center ">সেবাসমূহ</h2>
            <hr className="bg-green-400 h-1 "/>

            <div className="lg:mt-20 mt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  gap-4 gap-y-10 l">
                {
                    sixservices.map((service, index) => (

                        <div key={index} className=" h-[250px] bg-white  shadow-lg rounded-lg relative cursor-pointer hover:scale-90 smoothAnimation ">
                            <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-gray-200 p-3 rounded-full ">
                                <img src={service.img} alt="Brand" className="w-8 h-8" />
                            </div>
                            <h1 className="text-[16px] font-bold mt-8 text-center">
                                {service.title}
                            </h1>
                            <ul className="  flex flex-col justify-between px-5 pt-2 ">
                                {
                                      service.items.map((item, index) => (
                                        <li key={index} className="
                                        text-gray-700 text-sm mt-1 flex items-center gap-2 hover:text-green-700">< Check className="text-green-400" />  {item}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    ))
                }

            </div>
            <Carousel className="lg:w-full w-[90%] mx-auto  p  ">
            <h2 className="lg:text-4xl text-xl font-bold text-gray-800 mb-4  text-center mt-20  "> আরো সেবাসমূহ</h2>
            <hr className="bg-green-400 h-1 "/>
                    <CarouselContent className="-ml-1 lg:py-20 l py-10 ">
                        
                        {restservices.map((service, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                               <div className=" h-[260px] bg-white  shadow-lg rounded-lg relative cursor-pointer hover:scale-90 smoothAnimation   ">
                            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-gray-200 p-3 rounded-full ">
                                <img src={service.img} alt="Brand" className="w-8 h-8" />
                            </div>
                            <div className=" relative top-[16%]">
                            <h1 className="text-[16px] font-bold  text-center ">
                                {service.title}
                            </h1>
                            <ul className="  flex flex-col justify-between px-5 pt-2 ">
                                {
                                    service.items.map((item, index) => (
                                        <li key={index} className="
                                        text-gray-700 text-sm mt-1 flex items-center gap-2 hover:text-green-700">< Check className="text-green-400" />  {item}</li>
                                    ))
                                }
                            </ul>
                            </div>
                        </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-3" />
                    <CarouselNext  className="mr-3"/>
                </Carousel>

        </div>
    );
};

export default Services;



// <div className="circle absolute h-10 w-[200px] bottom-[2.5em] right-[2.5em] rounded-full bg-lime-400 group-hover:bg-lime-300 group-hover:scale-[8] duration-500 group-hover:z-10 z-[-1]"></div>