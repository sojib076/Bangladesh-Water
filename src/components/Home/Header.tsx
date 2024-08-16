/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon, ChevronRightIcon } from 'lucide-react';
import logo from '@/assets/logo.png'
const Header = () => {
    const menuItems = [
        {
            title: 'মন্ত্রণালয় সম্পর্কিত',
            href: '#',
            subMenu: [
                {
                    title: 'মন্ত্রণালয়ের পরিচিত',
                    subMenu: [
                        { title: 'ইতিহাস ও কার্যাবলী', href: '#' },
                        { title: 'ভিশন ও মিশন', href: '#' },
                        { title: 'প্রাক্তন মন্ত্রী/প্রতিমন্ত্রী/উপমন্ত্রীগণের তালিকা', href: '#' },
                        { title: 'সচিব', href: '#' },
                        { title: 'প্রাক্তন সচিবগণের তালিকা', href: '#' },
                        { title: 'অর্গানোগ্রাম', href: '#' },
                        { title: 'এলোকেশন অব বিজনেস', href: '#' }
                    ]
                },
                {
                    title: 'জনবল',
                    subMenu: [
                        { title: 'কর্মকর্তাগণ', href: '#' },
                        { title: 'কর্মবন্টন', href: '#' },
                        { title: 'তথ্য প্রদানকারী কর্মকর্তা', href: '#' },
                        { title: 'অভিযোগ নিষ্পত্তি কর্মকর্তা', href: '#' },
                        { title: 'আপীল কর্মকর্তা', href: '#' },
                        { title: 'ফোকাল পয়েন্ট কর্মকর্তাগণ', href: '#' },
                        { title: 'সচিবের দপ্তর', href: '#' },
                        { title: '১০ গ্রেডভূক্ত কর্মকর্তাগণ', href: '#' },
                        { title: 'প্রশাসন অনুবিভাগ', href: '#' },
                        { title: 'উন্নয়ন অনুবিভাগ', href: '#' },
                        { title: 'বাজেট ও অডিট', href: '#' },
                        { title: 'পরিকল্পনা অনুবিভাগ', href: '#' },
                        { title: 'রিফর্ম ম্যানেজমেন্ট এন্ড পলিসি রিসার্চ ইউনিট', href: '#' }
                    ]
                },
                {
                    title: 'মন্ত্রণালয়ের সেবাসমূহ',
                    subMenu: [
                        { title: 'সিটিজেন চার্টার', href: '#' },
                        { title: 'নাগরিক ই-সেবাসমূহের তালিকা', href: '#' },
                        { title: 'অন্যান্য সেবার তালিকা', href: '#' }
                    ]
                },
                {
                    title: 'মন্ত্রণালয়ের কমিটিসমূহ',
                    subMenu: [
                        { title: 'মাননীয় প্রধানমন্ত্রী এবং মাননীয় মন্ত্রীর সভাপতিত্বে/ মন্ত্রণালয়/বিভাগ সম্পর্কিত কমিটিসমূহ', href: '#' },

                    ]
                },

            ]
        },
        {
            title: 'অধীনস্থ সংস্থাসমূহ',
            href: '#',
            subMenu: [
                {
                    title: 'সংস্থাসমূহ',
                    subMenu: [
                        { title: 'বাংলাদেশ পানি উন্নয়ন বোর্ড', href: '#' },
                        { title: 'নদী গবেষণা ইনস্টিটিউট', href: '#' },
                        { title: 'যৌথ নদী কমিশন', href: '#' },
                        { title: 'বাংলাদেশ হাওর ও জলাভূমি উন্নয়ন অধিদপ্তর', href: '#' },
                        { title: 'পানি সম্পদ পরিকল্পনা সংস্থা', href: '#' }
                    ]
                },
                {
                    title: 'ট্রাস্টি প্রতিষ্ঠান',
                    subMenu: [
                        { title: 'ইনষ্টিটিউট অব ওয়াটার মডেলিং', href: '#' },
                        { title: 'ইনষ্টিটিউট অব ওয়াটার মডেলিং', href: '#' },


                    ]
                },

            ]
        },

        {
            title: 'প্রকল্প',
            href: '#',
            subMenu: [
                {
                    title: 'চলমান প্রকল্পসমূহ',
                    subMenu: [
                        { title: 'চলমান প্রকল্পসমূহ', href: '#' },
                    ]
                },

                {
                    "title": "সভা সংক্রান্ত",
                    "subMenu": [
                        { "title": "সভার বিজ্ঞপ্তি", "href": "#" },
                        { "title": "সভার কার্যবিবরণী", "href": "#" },
                    ]
              },

            ]
        },
        {
            "title": "যোগাযোগ",
            "href": "#",
            subMenu: [
                {
                    title: 'যোগাযোগ',
                    "subMenu": [
                        { "title": "অফিসের ঠিকানা", "href": "#" },
                        { "title": "সকল ফোকাল পয়েন্ট", "href": "#" },
                        { "title": "ইনোভেশন টিম", "href": "#" },
                        { "title": "অভিযোগ গ্রহণকারী কর্মকর্তা", "href": "#" },
                        { "title": "তথ্য প্রদানকারী কর্মকর্তা", "href": "#" },
                        { "title": "শুদ্ধাচার কৌশল ফোকাল পয়েন্ট", "href": "#" },
                        { "title": "বার্ষিক কর্মসম্পাদন চুক্তি (এপিএ) এর ফোকাল পয়েন্ট", "href": "#" },
                        { "title": "কল্যাণ কর্মকর্তা", "href": "#" },
                        { "title": "কাউন্সিল অফিসার/কাউন্সিল সহকারী", "href": "#" },
                        { "title": "জরুরী কাজের জন্য জেলাভিত্তিক ফোকাল পয়েন্ট", "href": "#" },
                        { "title": "অভিযোগ দাখিল", "href": "#" },
                        { "title": "লোকেশন ম্যাপ", "href": "#" },
                        { "title": "পরিছন্ন গ্রাম ফোকাল পয়েন্ট কর্মকর্তা", "href": "#" },
                        { "title": "বিভিন্ন সংস্থা ও কার্যক্রম বিষয়ে ফোকাল পয়েন্ট কর্মকর্তা", "href": "#" },
                        { "title": "ডেল্টা প্ল্যান বিষয়ক ফোকাল পয়েন্ট", "href": "#" },
                        { "title": "এসডিজি বিষয়ক ফোকাল পয়েন্ট কর্মকর্তা", "href": "#" },
                        { "title": "ব্লু-ইকোনমি ফোকাল পয়েন্ট", "href": "#" },
                        { "title": "জেলাভিত্তিক ফোকাল পয়েন্ট কর্মকর্তা", "href": "#" },
                        { "title": "বিভিন্ন মন্ত্রণালয়ে সভা, সেমিনার যোগদানের জন্য প্রতিনিধি", "href": "#" }
                    ]

                }

            ]


        },

        {
            "title": "গ্যালারী",
            herf: "#",
        },
      
        {
            "title": "সভার বিজ্ঞপ্তি",
            "subMenu": [
              { "title": "সভার বিজ্ঞপ্তি", "href": "#" },
              { "title": "সভার কার্যবিবরণী", "href": "#" },
              
            ]
          },
          {
            "title": "ডাউনলোড ",
            "subMenu": [
              { "title": "স্মরণিকা (বিশ্ব পানি দিবস ২০২৩)", "href": "#" },
              { "title": "স্মরণিকা (বিশ্ব পানি দিবস ২০২৪)", "href": "#" },
              { "title": "প্রকাশনাসমূহ", "href": "#" }
            ]
          },
          {
            "title": "সাহায্য ",
            "subMenu": [
              { "title": "দুর্যোগ ব্যবস্থাপনা ও বন্যা সতর্কীকরণ", "number": "১০৯০" },
              { "title": "স্বাস্থসেবা", "number": "১৬২৬৩" },
              { "title": "মহিলা ও শিশু বিষয়ক", "number": "১০৯" },
              { "title": "কৃষি বিষয়ক তথ্য", "number": "১৬১২৩" }
            ]
          }
          
          


    ];

    const renderMenu = (items: any, level = 0) => (
        items.map((item: any, index: any) => (
            <div key={index}>
                {item.subMenu ? (
                    <Collapsible className={`grid gap-4 ${level > 0 ? 'pl-4' : ''}`}>
                        <CollapsibleTrigger className=" hover:scale-90 mt-2 smoothAnimation flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                            {item.title} <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="-mx-6 grid gap-6 bg-muted p-6">
                                {renderMenu(item.subMenu, level + 1)}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                ) : (
                    <a href={item.href} className={`flex w-full items-center py-2 ${level > 0 ? 'text-sm' : 'text-lg'} font-semibold`}>
                        {item.title}
                    </a>
                )}
            </div>
        ))
    );

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="h-[100%] overflow-auto">
                    
                    <div className="grid gap-2 py-6">
                        {renderMenu(menuItems)}
                    </div>
                </SheetContent>
            </Sheet>

            <div className="flex w-full justify-evenly">
                <img src={logo} alt="" />
                <NavigationMenu className="hidden lg:flex">
                    <div className="py-6">



                    </div>
                    <NavigationMenuList>
                        {menuItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                {item.subMenu ? (
                                    <>
                                        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid w-[500px] p-2">
                                                {renderMenu(item.subMenu, 1)}
                                            </div>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink asChild>
                                        <a
                                            href={item.href}
                                            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none ${item.subMenu ? 'text-sm' : 'text-base'}`}
                                        >
                                            {item.title}
                                        </a>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

export default Header;
