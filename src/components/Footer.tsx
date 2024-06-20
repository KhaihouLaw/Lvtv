import bluelogo from "../assets/bluelogo.png";
import PrivacyPolicy from "./PrivacyPolicy";
import FAQs from "../pages/FAQs";
import { useState } from "react";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <footer>
            <div className="p-10 bg-yellow-400 text-black flex justify-evenly">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                        <div className="mb-5 flex flex-col items-start ">
                            <h4 className="font-bold text-2xl md:text-4xl py-3">
                                LVTV
                            </h4>
                            <div className="flex justify-start">
                                <img
                                    src={bluelogo}
                                    className="w-full object-contain h-[100px]"
                                    alt="logoo"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4 className="font-bold text-lg md:text-xl pb-4">
                                Useful Links
                            </h4>
                            <ul>
                                <li className="pb-1">
                                    <a
                                        href="/Home"
                                        className="hover:text-gray-400"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="pb-1">
                                    <a
                                        href="/Teleradio"
                                        className="hover:text-gray-400"
                                    >
                                        Teleradio
                                    </a>
                                </li>
                                <li className="pb-1">
                                    <a href="#" className="hover:text-gray-400">
                                        News
                                    </a>
                                </li>
                                <li className="pb-1">
                                    <a
                                        href="/OurStory"
                                        className="hover:text-gray-400"
                                    >
                                        Our Story
                                    </a>
                                </li>
                                <li className="pb-1">
                                    <a
                                        href="/Archives"
                                        className="hover:text-gray-400"
                                    >
                                        Archives
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="font-bold text-lg md:text-xl pb-4">
                                Contact Information
                            </h4>
                            <strong>Phone:</strong> 09123456789 <br />
                            <strong>Email:</strong> lvcc@lvcc.edu.ph <br />
                            McArthur Highway <br />
                            Sampaloc, Apalit <br />
                            Pampanga 2016
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-header text-white px-10">
                <div className="text-center">
                    <div>
                        <ul className="flex flex-row justify-center">
                            <li className="pb-3 mx-5">
                                <a
                                    href=""
                                    className="underline hover:text-gray-400"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li className="pb-3">
                                <a
                                    className="hover:text-gray-400"
                                    onClick={openModal}
                                >
                                    Privacy Policy
                                </a>
                                {isOpen && (
                                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                                        <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white">
                                            <div className="mt-3 text-center">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                                    Privacy Policy
                                                </h3>
                                                <div className="mt-2 px-7 py-3">
                                                    <p className="text-sm text-gray-500">
                                                        In compliance with data
                                                        privacy laws such as,
                                                        but not limited to,
                                                        Republic Act No. 10173
                                                        <br /> (Philippine Data
                                                        Privacy Act of 2012) and
                                                        its implementing rules
                                                        and regulations, we
                                                        within
                                                        <br /> the Organization
                                                        of La Verdad Christian
                                                        College (LVCC), collect
                                                        and process your
                                                        personal
                                                        <br /> information in
                                                        this Survey (LVTV: A
                                                        Live Streaming Platform
                                                        for Bachelor of Arts
                                                        <br /> Broadcasting
                                                        Program of La Verdad
                                                        Christian College -
                                                        Apalit) for Capstone
                                                        Project
                                                        <br /> purposes only,
                                                        keeping them securely
                                                        and with confidentiality
                                                        using our
                                                        organizational,
                                                        <br /> technical, and
                                                        physical security
                                                        measures, and retain
                                                        them in accordance with
                                                        our retention
                                                        <br /> policy. We don’t
                                                        share them to any
                                                        external group without
                                                        your consent, unless
                                                        otherwise
                                                        <br /> stated in our
                                                        privacy notice. You have
                                                        the right to be
                                                        informed, to object, to
                                                        access,
                                                        <br /> to rectify, to
                                                        erase or to block the
                                                        processing of your
                                                        personal information, as
                                                        well as your
                                                        <br /> right to data
                                                        portability, to file a
                                                        complaint and be
                                                        entitled to damages for
                                                        violation of your
                                                        <br /> rights under this
                                                        data privacy.
                                                        <br />
                                                        <br />
                                                        For your data privacy
                                                        inquiries, you may reach
                                                        our Data Protection
                                                        Officer through:
                                                        <br />
                                                        Email:
                                                        dpo@laverdad.edu.ph
                                                    </p>
                                                </div>
                                                <div className="items-center px-4 py-3">
                                                    <button
                                                        onClick={closeModal}
                                                        className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className="pb-3 mx-5">
                                <a
                                    href="/FAQs"
                                    className="underline hover:text-gray-400"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>

                        <div>
                            Designed by{" "}
                            <a
                                href="https://tailwindcss.com/"
                                target="_blank"
                                className="text-yellow-400"
                            >
                                TailwindCss
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
