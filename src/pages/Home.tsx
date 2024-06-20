// import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import React from "react";
import heroImage from "../assets/heroimage.jpg";
import foundationbanner from "../assets/foundation week banner.jpg";
import zoomustahan from "../assets/zoomustahan.png";
import img8 from "../assets/programs/program8.jpg";
import img6 from "../assets/programs/program6.jpg";
import img5 from "../assets/programs/program5.jpg";
import img3 from "../assets/programs/program3.jpg";
import img1 from "../assets/programs/program1.jpg";
import AuthNavbar from "../components/AuthNavbar";

function HomePage() {
    return (
        <div>
            <AuthNavbar />
            <div className="px-10">
                <div className="divide-y-8 divide-yellow-400 md:px-10 px-4 font-color">
                    <div className="flex justify-between items-center mx-auto md:p-20 p-4 md:flex-row flex-col gap-6">
                        <div className="mx-auto flex justify-center flex-col space-x-80">
                            <div>
                                <h1 className="text-4xl">LV.TV</h1>
                                <br />
                                <h2 className="text-2xl">
                                    Livestreaming Website <br />
                                    for La Verdad Christian College <br />
                                    to improve academic excellence
                                </h2>
                            </div>
                        </div>
                        <div className="relative md:w-[500px] flex justify-center items-center w-full">
                            <img
                                className="flex rounded-sm w-full bg-white shadow hover:shadow-lg object-cover"
                                src={heroImage}
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                    <div className="md:p-20 px-3 flex justify-center py-10">
                        <div>
                            <h1 className="text-2xl myFont">About LV.tv</h1>
                            <br />
                            <p className="indent-8 text-2xl">
                                creating a convenient streaming website that
                                provides Bachelor of Arts in Broadcasting (BAB){" "}
                                <br />
                                students in La Verdad Christian College with an
                                effective and accessible platform for streaming
                                <br />
                                projects among the students of LVCC providing
                                educational resources, engagement among
                                students,
                                <br />
                                participating in live streaming broadcasts, in
                                that way enhancing their learning endeavors and{" "}
                                <br />
                                providing academic excellence in the field of
                                broadcasting.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mx-auto md:flex-row flex-col gap-10">
                        <div className="flex justify-center items-center flex-col space-y-4 md:px-4 w-full">
                            <h1 className="text-2xl myFont py-6">
                                Schedules & Programs
                            </h1>
                            <br />
                            <div className="mx-10 flex rounded-sm w-96 h-40 m-10 bg-white shadow hover:shadow-lg">
                                <div className="w-40 h-40">
                                    <img
                                        src={img8}
                                        alt="program 8"
                                        className="object-contain max-w-full max-h-full"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">
                                        INTRAMURALS
                                    </h1>
                                    <article>
                                        Synergized La Verdarians:
                                        <br /> Embracing Excellence Through
                                        <br /> Sports and Good Works
                                    </article>
                                    <br />
                                    <p className="font-bold">December 8-10</p>
                                </div>
                            </div>
                            <div className="mx-10 flex rounded-sm w-96 h-40 m-10 bg-white shadow hover:shadow-lg">
                                <div className="w-40 h-40">
                                    <img
                                        src={img6}
                                        alt="program 6"
                                        className="object-contain max-w-full max-h-full"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">
                                        Mr & Ms Commweek
                                    </h1>
                                    <article>
                                        #PromotingFilipinoValues
                                        <br />
                                        AndCulture
                                    </article>
                                    <br />
                                    <p className="font-bold">January 12-14</p>
                                </div>
                            </div>
                            <div className="mx-10 flex rounded-sm w-96 h-40 m-10 bg-white shadow hover:shadow-lg">
                                <div className="w-40 h-40">
                                    <img
                                        src={img3}
                                        alt="program 3"
                                        className="object-contain max-w-full max-h-full"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold">
                                        FIESTANGHALIAN
                                    </h1>
                                    <article>
                                        Makisaya sa nagiisang
                                        <br /> Fiesta ng Sambayanan
                                    </article>
                                    <br />
                                    <p className="font-bold">January 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto flex justify-center flex-col space-y-4 w-full relative">
                            <h1 className="text-2xl">Recent Programs</h1>
                            <br />
                            <div className="mx-10 flex rounded-sm w-96 h-40 m-10 bg-white shadow hover:shadow-lg">
                                <img src={img5} alt="program 5" />
                            </div>
                            <div className="mx-10 flex rounded-sm w-96 h-40 m-10 bg-white shadow hover:shadow-lg">
                                <img
                                    src={img1}
                                    alt="program 1"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mx-auto flex-col mt-10 ">
                        <div className="mx-auto flex justify-center flex-col space-x-80">
                            <div>
                                <h1 className="text-4xl text-center mt-10">
                                    School News and Upcoming Events
                                </h1>
                                <br />
                            </div>
                        </div>
                        <div className="space-y-4 py-5">
                            <div className="mx-auto flex rounded-sm w-5/6 h-full bg-white shadow hover:shadow-lg">
                                <img
                                    className="flex rounded-sm w-full bg-white shadow hover:shadow-lg object-cover"
                                    src={foundationbanner}
                                />
                            </div>
                            <div className="mx-auto flex rounded-sm w-5/6 h-auto bg-white shadow hover:shadow-lg">
                                <img
                                    className="flex rounded-sm w-full bg-white shadow hover:shadow-lg object-cover"
                                    src={zoomustahan}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div className="p-20 flex justify-center flex-col">
        <div className="pb-8">
          <h1 className="text-2xl">We want to hear from you!</h1>
          <br />
          <p className="indent-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tortor nisl, dictum id pulvinar ut, fringilla bibendum elit. Morbi
            auctor lectus erat, a interdum magna lobortis vitae. Donec sapien
            purus, mattis id sollicitudin in, dapibus volutpat elit. Quisque
            sed dignissim urna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Suspendisse blandit pharetra sapien at
            fringilla.
          </p>
        </div>
        <div className="mx-auto flex rounded-sm w-5/6 h-12 bg-white shadow p-2 hover:shadow-lg">
          <h2>Search Archives</h2>
        </div>
      </div> */}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
