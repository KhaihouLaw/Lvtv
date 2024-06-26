import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import LogIn from "./Login";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import profilepic from "../assets/profile-pic.jpg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const [isDropdown1Open, setIsDropdown1Open] = useState(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsDropdown1Open(false);
        setIsDropdown2Open(false);
        setIsProfileDropdownOpen(false);
    }, [location]);

    // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    // const handleLoginButtonClick = () => {
    //   setIsLoginModalOpen((prevState) => !prevState); // Toggles the modal state
    // };

    // const handleCloseLoginModal = () => {
    //   setIsLoginModalOpen(false);
    // };

    // const handleSignOut = () => {
    //   window.google.accounts.id.disableAutoSelect();
    //   window.google.accounts.id.prompt();
    //   window.location.href = "https://accounts.google.com/logout";
    //   window.google.accounts.id.revoke(() => {
    //     console.log("User signed out.");
    //   });
    // };

    return (
        <header className="bg-header">
            <nav className="flex justify-between items-center 2-[92%] mx-auto">
                <div className="space-y-4 p-2 pl-4">
                    <img src={logo} alt="Logo" className="h-20 spacing" />
                </div>
                {/* WatchLive */}
                <div className="flex items-center">
                    <button className="text-xl rounded-lg bg-yellow-400 text-gray-900 px-5 py-2 mr-4 hover:text-white hover:bg-blue-300"
                    onClick={() => window.location.href = 'http://128.199.166.235:8080/'}>
                        Watch Live
                    </button>
                    <div className="relative inline-block text-left pr-4">
                        <div>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-2 rounded-md text-gray-600 hover:bg-gray-600 hover:text-gray-800 transition-all duration-300 p-2"
                                id="profile-menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                onClick={() => {
                                    setIsProfileDropdownOpen(
                                        !isProfileDropdownOpen
                                    );
                                    setIsDropdown1Open(false);
                                    setIsDropdown2Open(false);
                                }}
                            >
                                <FaUserCircle
                                    size={42}
                                    className="text-white"
                                />
                            </button>
                        </div>

                        {isProfileDropdownOpen && (
                            <div
                                className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="profile-menu-button"
                                tabIndex={-1}
                            >
                                <div className="py-1" role="none">
                                    <a
                                        href="#"
                                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="profile-menu-item-0"
                                        onClick={openModal}
                                    >
                                        Profile
                                    </a>
                                    {isOpen && (
                                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                                            <div className="relative top-20 mx-auto p-5 border w-2/5 shadow-lg rounded-md bg-white">
                                                <div className="mt-3 text-center">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                        Profile
                                                    </h3>
                                                    <div className="flex flex-row mt-2 px-7 py-3">
                                                        <div>
                                                            <img
                                                                src={profilepic}
                                                                className="h-70 w-70"
                                                            />
                                                        </div>
                                                        <div className="p-10">
                                                            <p className="text-2xl text-gray-500 m-5">
                                                                First Name
                                                            </p>
                                                            <p className="text-2xl text-gray-500 m-5">
                                                                Last Name
                                                            </p>
                                                            <p className="text-2xl text-gray-500 m-5">
                                                                Email
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="items-center px-4 py-3">
                                                        <button
                                                            onClick={closeModal}
                                                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-1/4 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="py-1" role="none">
                                    <a
                                        href="#"
                                        // onClick={handleSignOut}
                                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                                        role="menuitem"
                                        tabIndex={-1}
                                        id="profile-menu-item-1"
                                    >
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* End WatchLive */}
            </nav>
            <div className="w-full bg-yellow-400 font-color px-10">
                <div className="flex justify-center">
                    <ul className="flex text-center gap-[4vw] my-2">
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/Home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/TeleRadio"
                            >
                                TeleRadio
                            </NavLink>
                        </li>
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex gap-x-1.5 rounded-md  text-xl shadow-sm ring-inset ring-gray-300 hover:text-white"
                                    id="menu-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                    onClick={() => {
                                        setIsDropdown1Open(!isDropdown1Open);
                                        setIsDropdown2Open(false);
                                    }}
                                >
                                    Courses
                                    <svg
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {isDropdown1Open && (
                                <div
                                    className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex={-1}
                                >
                                    <div className="py-1" role="none">
                                        <NavLink to="/Bab">
                                            <a
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-0"
                                            >
                                                BAB
                                            </a>
                                        </NavLink>
                                    </div>
                                    <div className="py-1" role="none">
                                        <NavLink to="/BsisAct">
                                            <a
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-1"
                                            >
                                                BSIS/ACT
                                            </a>
                                        </NavLink>
                                    </div>
                                    {/* <div className="py-1" role="none">
                                        <NavLink to="courses/BsaBsais">
                                            <a
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-2"
                                            >
                                                BSA/BSAIS
                                            </a>
                                        </NavLink>
                                    </div>
                                    <div className="py-1" role="none">
                                        <NavLink to="courses/Bssw">
                                            <a
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-3"
                                            >
                                                BSSW
                                            </a>
                                        </NavLink>
                                    </div> */}
                                </div>
                            )}
                        </div>
                        <li>
                            <NavLink
                                className="text-xl hover:text-white"
                                to="/OurStory"
                            >
                                Our Story
                            </NavLink>
                        </li>
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex gap-x-1.5 rounded-md  text-xl shadow-sm ring-inset ring-gray-300 hover:text-white"
                                    id="menu-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                    onClick={() => {
                                        setIsDropdown2Open(!isDropdown2Open);
                                        setIsDropdown1Open(false);
                                    }}
                                >
                                    Archives
                                    <svg
                                        className="-mr-1 h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {isDropdown2Open && (
                                <div
                                    className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex={-1}
                                >
                                    <div className="py-1" role="none">
                                        <NavLink to="/Archives">
                                            <a
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-0"
                                            >
                                                Archives
                                            </a>
                                        </NavLink>
                                    </div>
                                    <div className="py-1" role="none">
                                        <NavLink to="/PastArchives">
                                            <a
                                                href="#"
                                                className="text-gray-700 block px-4 py-2 text-sm"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-1"
                                            >
                                                Past Archives
                                            </a>
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
