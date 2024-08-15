import { Facebook, } from "lucide-react";
import logo from '@/assets/logo.png';
function Footer() {
    return (
        <footer className="bg-[#dad7d7] text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Footer Logo and Description */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">

                        <img src={logo} alt="" />
                        <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                                <Facebook className="w-6 h-6" />
                            </a>
                          
                        </div>
                    </div>
                    </div>

                    {/* Footer Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className=" hover:text-green-400">
                                    দুদক হটলাইন ১০৬
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-green-400">

                                    সাইট ম্যাপ
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-green-400">
                                    গোপনীয়তার নীতিমালা
                                </a>
                            </li>

                        </ul>
                    </div>

                   <div className="lg:flex lg:flex-col justify-between"> 

                   <h3 className="text-xl font-semibold mb-4">

                   পরিকল্পনা ও বাস্তবায়নে
                   </h3>
                    <img src="
                    https://mowr.gov.bd/themes/responsive_npf/img/np-logo-set.png" alt="" />
                   </div>
                 
                </div>

                <div className="text-center text-black mt-8">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
