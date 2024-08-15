import { useState } from "react";
import logo from '@/assets/logo.png';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";




const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const list = ['About us', 'Organizations', 'Project', 'Contact', 'Gallery', 'Meeting related', 'Download', 'Helplines']



    return (
        <header className=" 
        bg-[#F7F7F7]
        fixed top-0 left-0 z-50 w-full  shadow-lg 
        smoothingAnimation">
            <div className=" container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <  >
                    <img src={logo} alt=""
                        className="w-10 h-10"
                    />
                </>

                <nav className="hidden lg:flex items-center gap-4">
                    {
                        list.map((item) => (
                            <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                                {item}
                            </a>
                        ))
                    }


                </nav>
         
                <div className="  hidden lg:grid grid-cols-3 lg:gap-4">
                        <input type="text" placeholder="Search" className= "col-span-2 bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        <Button size="sm" 
                            className="bg-green-400
                            buttonColors hover:text-white
                            "
                        >
                            
                            Search
                        </Button>
                    </div>
                <div className="flex items-center gap-4 lg:mr-16">

                    <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon className="w-6 h-6" />
                        <span className="sr-only">Toggle navigation</span>
                    </Button>

                </div>
                
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent side="right" className="bg-background p-4">
                <div className="  lg:hidden grid grid-cols-3 mt-10 gap-2">
                        <input type="text" placeholder="Search" className= "col-span-2 bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        <Button size="sm"
                            className="bg-green-400"
                        >
                            Search
                        </Button>
                    </div>
                    <div className="grid gap-4 mt-5">
                        {
                            list.map((item) => (
                                <a key={item} href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                                    {item}
                                </a>
                            ))
                        }

                    </div>
                   
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Header;
