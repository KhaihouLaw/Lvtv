import Navbar from "../components/Navbar";
import Aimbanner from "../assets/Aimbanner.png";
import ict1 from "../assets/ict1.jpg";
import ict2 from "../assets/ict2.jpg";
import ict3 from "../assets/ict3.jpg";
import ict4 from "../assets/ict4.jpg";
import ict5 from "../assets/ict5.jpg";
import ict6 from "../assets/ict6.jpg";

const BsisAct = () => {
    return (
        <div>
            <Navbar />
            {/* Add your other components and content here */}
            <div className="divide-y-8 px-10 m-10 divide-yellow-400">
                <div className="pb-8">
                    <h1 className="text-2xl font-bold">BSIS & ACT</h1>
                    <br />
                    <div className="justify-center flex flex-col space-y-4 p-2">
                        <img
                            className="mx-auto flex rounded-sm banner-size hover:shadow-lg object-contain"
                            src={Aimbanner}
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
                                        src={ict1}
                                        alt="program"
                                        className="object-contain w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg">
                                    <img
                                        src={ict2}
                                        alt="program"
                                        className="object-contain w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40  m-10 bg-white shadow hover:shadow-lg">
                                    {" "}
                                    <img
                                        src={ict3}
                                        alt="program"
                                        className="object-fit w-96 h-40"
                                    />
                                </div>
                            </div>
                            <div className="m-5">
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg">
                                    {" "}
                                    <img
                                        src={ict4}
                                        alt="program"
                                        className="object-cover w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg">
                                    {" "}
                                    <img
                                        src={ict5}
                                        alt="program"
                                        className="object-cover w-96 h-40"
                                    />
                                </div>
                                <div className="mx-10 flex rounded-sm w-96 h-40 px-10 m-10 bg-white shadow hover:shadow-lg">
                                    {" "}
                                    <img
                                        src={ict6}
                                        alt="program"
                                        className="object-fill w-96 h-40"
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
export default BsisAct;
