
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";



const Other = () => {

    AOS.init({ duration: 500 ,
        offset: 200,
        easing: 'ease-in-sine',
        once:false
    });
    const notices = [
        "  ওয়েবমেইল",
        "অভিযোগ প্রতিকার ব্যবস্থা",
        "Knowledge Repository",
        "e - Requisition",
        "Online Pay Bill",
        "মতামত / পরামর্শ",
    ]

    const blogs = [
        {
            "title": "সরকারি কর্মচারীদের বেতন বৃদ্ধি প্রস্তাব",
            "content": "সরকারি কর্মচারীদের বেতন বৃদ্ধি প্রস্তাব দেওয়া হয়েছে। এ ব্যাপারে সরকার একটি সিদ্ধান্ত নিতে যাচ্ছে।",
        },
        {
            "title": "সরকারি কর্মচারীদের বেতন বৃদ্ধি প্রস্তাব",
            "content": "সরকারি কর্মচারীদের বেতন বৃদ্ধি প্রস্তাব দেওয়া হয়েছে। এ ব্যাপারে সরকার একটি সিদ্ধান্ত নিতে যাচ্ছে।",
        },
        {
            "title": "সরকারি কর্মচারীদের বেতন বৃদ্ধি প্রস্তাব",
            "content": "সরকারি কর্মচারীদের বেতন বৃদ্ধি প্রস্তাব দেওয়া হয়েছে। এ ব্যাপারে সরকার একটি সিদ্ধান্ত নিতে যাচ্ছে।",
        }
    ]

    const otherwebsiteimg = [
        "https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/npfblock//e-directory.jpg",
        " https://mowr.gov.bd/sites/default/files/files/mod.portal.gov.bd/page/41732ef3_4108_4549_be07_77bf22484c68/National-portal_bn.gif",
        "  https://mowr.gov.bd/sites/default/files/files/mod.portal.gov.bd/page/41732ef3_4108_4549_be07_77bf22484c68/internal_eservice2.gif"
    ]
    return (
        <div className=" overflow-hidden  ">
            <h2 className="lg:text-4xl text-xl font-bold text-gray-800   text-center mb-  "> আমাদের গর্ব</h2>
            <hr className="bg-green-400 h-1 lg:w-[93.5%] w-[82%] mx-auto " />
            <div className="grid grid-cols-0 grid-rows-0 gap-4 p-4 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-5 lg:grid-rows-6 ">
                <div
              data-aos="fade-right"
                className=" text-black col-span-2 row-span-3    bg-white  shadow-lg rounded-lg  flex items-center justify-center">
                    <div className='flex lg:flex-row flex-col-reverse gap-2 lg:justify-center items-center lg:text-left  text-center'>
                        <div className='lg:ml-2'><h1 className='lg:text-sm text-[12px]  '>মাননীয় প্রধান উপদেষ্টা</h1>
                            <p className='lg:text-xl text-[15px] '>ড. মুহাম্মদ ইউনূস</p></div>
                        <img src="https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/office_head/0282161a_25ca_4114_aebb_3a7cf937700f/Dr.%20Muhammad%20Yunus.jpg.jpg" className='
                        lg:w-[62%] mt-[-12%] lg:mt-0 w-[98%] md:mt-[-1%] '  alt="" />
                    </div>
                </div>
                <div
                  data-aos="fade-left"
                className=" text-black col-span-2 row-span-3 col-start-3    bg-white  shadow-lg rounded-lg  flex items-center justify-center">
                    <div className='
                    h-[260px]
                    lg:h-auto
                    flex lg:flex-row flex-col-reverse  justify-evenly  lg:justify-center items-center ml-2 lg:text-left  text-center  '>
                        <div className='lg:ml-2'>
                            <h1 className='lg:text-sm text-[13px] '>সচিব</h1>
                            <p className='lg:text-xl text-[15px] '>নাজমুল আহসান</p>
                            <p className='lg:text-[10px] text-[10px]'>
                                ক্যারিয়ার সিভিল সার্ভেন্ট জনাব নাজমুল আহসান ১৫ ডিসেম্বর ২০...
                            </p>
                        </div>
                        <img 
                        
                        src="https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/office_head/cd5856a3_6f55_4e58_95c4_ee9b41441670/WhatsApp-Image-2022-12-26-a.jpg" className='lg:w-[61%]
                        
                        w-[90%] md:w-[60%]' alt="" />
                    </div>
                </div>

                <div data-aos="fade-up" className="col-span-4 row-span-3 col-start-1 row-start-4
                bg-white  shadow-lg rounded-lg   text-white 
                lg:p-10 p-5
                 ">
                    <div>
                        <h2 className="lg:text-2xl text-[16px] font-bold text-gray-800 lg:mb-4 text-center   ">অভ্যন্তরীণ ই-সেবাসমূহ</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-2 lg:gap-4 gap-2 mt-5 lg:mt-10">
                            {notices.map((notice, index) => (
                                <div key={index} className="  bg-gray-200 p-1 lg:p-3 rounded-lg hover:scale-105 smoothAnimation cursor-pointer ">
                                    <p className="text-gray-800 text-[13px] lg:text-sm hover:text-green-500">{notice}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div    className="row-span-6 col-start-5 row-start-1     bg-white  shadow-lg rounded-lg  lg:h-auto h-fit pb-2  lg:block hidden  " data-aos="fade-up" >
                    <img src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/files/a3cbb305_511d_4266_bf35_74cfcfd2be9d/hotline_v.2_bn.png"


                        alt="" />


                    <h2 className=" lg:mt-5 mt-10 lg:text-[16px] text-[8px] font-bold text-gray-800  text-center   ">ইনোভেশন কর্নার ই</h2>
                    <hr className="bg-green-400 h-1 lg:mb-2  " />
                    <div className=" bg-gray-200 p-1 lg:p-3 rounded-lg hover:scale-90 smoothAnimation cursor-pointer ">
                        <p className="text-gray-800 text-[5px] lg:text-sm text-center  ">ইনোভেশন কর্নার</p>
                    </div>
                </div>
            </div>

            <div className="lg:my-20 my-10  ">
                <h2 className="lg:text-4xl text-xl font-bold text-gray-800   text-center  "> সর্বশেষ খবর</h2>
                <hr className="bg-green-400 h-1 lg:w-[93.5%] w-[82%] mx-auto  " />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                    {
                        blogs.map((blog, index) => (
                            <Card key={index}>
                                <CardContent className="p2">
                                    <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                                    <p className="text-gray-600 pb-2">{blog.content}</p>
                                    <Button className="buttonColors h-full hover:text-white mt-2">সব দেখুন</Button>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
            <div className="lg:my-20 my-10 lg:px-20 px-5 grid lg:grid-cols-2 grid-cols-1 gap-10 ">
                <div>
                    <h2 className="lg:text-4xl text-xl font-bold text-gray-800   text-center  ">

                        অন্যান্য ওয়েবসাইট
                    </h2>
                    <hr className="bg-green-400 h-1 "/>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                        {
                            otherwebsiteimg.map((img, index) => (
                                <div key={index} className=" rounded-lg shadow-lg
                                    hover:scale-90 smoothAnimation
                                ">
                                    <img src={img} alt=""
                                        className="w-full h-full rounded-lg"
                                    />
                                </div>
                            ))
                        }
                        <div className="lg:hidden block w-[70%] mx-auto">
                            <img src="https://bangladesh.gov.bd/sites/default/files/files/bangladesh.gov.bd/files/a3cbb305_511d_4266_bf35_74cfcfd2be9d/hotline_v.2_bn.png"alt="" />

                            <h2 className=" lg:mt-5 mt-10 lg:text-[16px] text-[18px] font-bold text-gray-800  text-center   ">ইনোভেশন কর্নার ই</h2>
                        
                            <div className=" bg-gray-200 p-1 lg:p-3 rounded-lg hover:scale-90 smoothAnimation cursor-pointer ">
                                <p className="text-gray-800 text-[15px] lg:text-sm text-center  ">ইনোভেশন কর্নার</p>
                            </div>
                            
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
                <div >
                    <h2 className="lg:text-2xl text-xl font-bold text-gray-800   text-center  ">

                        সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)
                    </h2>
                    <p className="
                    text-gray-600 mt-5
                    border-b-2 border-green-400  p-2 w-fit  mx-auto
                    text-center
                    ">
                        সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Other;