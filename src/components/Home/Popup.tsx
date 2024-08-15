import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';


const Popup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Clear the local storage key on reload
        localStorage.removeItem('popupShown');

        const hasPopupBeenShown = localStorage.getItem('popupShown');

        if (!hasPopupBeenShown) {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.body.scrollHeight;
                const scrolledPercentage = ((scrollPosition + windowHeight) / documentHeight) * 100;

                if (scrolledPercentage >= 80) {
                    setShouldRender(true);
                    setIsVisible(true);
                    localStorage.setItem('popupShown', 'true');
                    window.removeEventListener('scroll', handleScroll); // Remove the event listener once the popup is shown
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!shouldRender) return null;


    

    return (
        <div className={`z-40
     fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 
     transition-opacity duration-500 ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
            <div className="bg-violet-100 p-6 rounded shadow-lg lg:w-[500px] w-[90%] lg:h-[300px] flex flex-col justify-between relative">

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800"
                >
                    <X size={24} />
                </button>

                <div className="pb-5 mt-10">
                <h2 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4 text-center">

                    আমার সোনার বাংলা
                </h2>
                    <audio controls className="w-full max-w-lg rounded-lg shadow-md "
                        controlsList="nodownload">
                        <source src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg' type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>

                    <img src="https://mowr.gov.bd/themes/responsive_npf/images/footer_top_bg.png"
                        className="mt-[20%]"
                    />
                </div>

            </div>
        </div>
    );
};

export default Popup;
