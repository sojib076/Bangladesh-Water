
import bgimage from '@/assets/bg_notice_board.png'
import { Button } from '../ui/button';
const NoticeBoard = () => {

    const notices = [
        "অফিস আদেশ (সচিব মহোদয়ের রূটিন দায়িত্ব পালন)",
        "ই-নথি থেকে ডিজিটাল নথি/ডি-নথিতে মাইগ্রেশন প্রসঙ্গে।",
        "অফিস আদেশ (সচিব মহোদয়ের রূটিন দায়িত্ব পালন)",
             "নিয়োগ পরবর্তী পানি সম্পদ মন্ত্রণালয়ের কম্পিউটার অপারেটর, সাঁট মুদ্রাক্ষরিক কাম কম্পিউটা...",
        "অফিস আদেশ (সচিব মহোদয়ের রূটিন দায়িত্ব পালন)",
   
        
      ];
    return (
        <div className="lg:my-20 my-10 lg:px-10 px-5 relative    ">
                <img src={bgimage} alt="" className='absolute left-[-1%] lg:bottom-[95%] bottom-[93%]
                    md:bottom-[85%]
                    
                    md:w-[100px]
                lg:w-fit w-[20%]' />
                <h2 className="lg:text-4xl text-xl font-bold text-gray-800 mb-4 text-center">নোটিশ বোর্ড</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
                    {notices.map((notice, index) => (
                        <div key={index} className="bg-gray-200 p-3 rounded-lg hover:scale-90 smoothAnimation cursor-pointer ">
                            <p className="text-gray-800">{notice}</p>
                        </div>
                    ))}
                    <Button className="buttonColors h-full hover:text-white">সব দেখুন</Button>
                    </div>

        </div>

    );
};

export default NoticeBoard;