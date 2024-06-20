import Navbar from "../components/Navbar";
import banner from "../assets/banner.jpg";
import bab1 from "../assets/bab1.jpg";
import bab2 from "../assets/bab2.jpg";
import bab3 from "../assets/bab3.jpg";
import bab4 from "../assets/bab4.jpg";
import bab5 from "../assets/bab5.jpg";
import bab6 from "../assets/bab6.jpg";

const Bab = () => {
    return (
        <div>
            <Navbar />
            {/* Add your other components and content here */}
            <div className="divide-y-8 px-10 m-10 divide-yellow-400">
                <div className="pb-8">
                    <h1 className="text-2xl font-bold">
                        Bachelor of Arts in Broadcasting
                    </h1>
                    <br />
                    <div className="justify-center flex flex-col space-y-4 p-2">
                        <img
                            className="mx-auto flex rounded-sm banner-size hover:shadow-lg object-contain"
                            src={banner}
                            alt="Descriptive text"
                        />
                    </div>
                </div>
                {/* Course End */}

                {/* Events Start */}
                <div>
                    <div>
                        <div className="flex justify-center pt-10 text-2xl font-bold font-color">
                            Events
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-center flex-row flex-wrap gap-10">
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={bab1}
                                        alt="program"
                                        className="object-fit w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={bab2}
                                        alt="program"
                                        className="object-cover w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={bab3}
                                        alt="program"
                                        className="object-cover w-96 h-40"
                                    />
                                </div>
                            </div>
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={bab4}
                                        alt="program"
                                        className="object-cover w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={bab5}
                                        alt="program"
                                        className="object-fit w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={bab6}
                                        alt="program"
                                        className="object-cover w-96 h-40"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /* Events End */
    );
};

export default Bab;
