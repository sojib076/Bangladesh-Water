
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <header className="bg-gray-200  p-4 text-gray-800 ">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
                <nav className="hidden md:flex space-x-4">
                    {['About us', 'Organizations', 'Project', 'Contact', 'Gallery', 'Meeting related', 'Download', 'Helplines'].map((item, index) => (
                        <a key={index} href="#" className={`hover:text-green-500 `}>
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
            {/* Search Bar */}
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 rounded bg-gray-700 text-white focus:outline-none"
                />
                <button className="buttonColors rounded p-2 ">Search</button>
            </div>
        </div>
    </header>
    );
};

export default Header;