import BroadcastItem from "../components/BroadcastItem";
import AuthNav from "../components/AuthNavbar";
import thumb1 from "../assets/thumbnail/thumbnail1.jpg";
import thumb2 from "../assets/thumbnail/thumbnail2.jpg";
import thumb3 from "../assets/thumbnail/thumbnail3.jpg";
function PastArchives() {
    return (
        <div>
            <AuthNav />
            <div className="p-20">
                <div className="flex flex-1 justify-center">
                    <h2 className="font-bold mb-8 text-3xl">
                        LV.tv Past Archives
                    </h2>
                </div>
                <div className="flex flex-1 justify-center pt-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-1/2 p-4 text-lg border-3 border-black-500 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button className="text-xl rounded-lg bg-yellow-400 font-color px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
                        Search
                    </button>
                </div>
                <div
                    className="mx-auto p-4"
                    style={{
                        maxWidth: "800px",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "25rem",
                    }}
                >
                    <div className="flex-1">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <a
                                    href="https://drive.google.com/file/d/1G4DDN_cr2l6Ka97BFVlPiJTumZByjVbP/view?usp=drive_link"
                                    target="_blank"
                                >
                                    <BroadcastItem
                                        imageUrl={thumb3}
                                        date="12/11/2023"
                                        title="[Broadcast Title] The Art of Connection"
                                    />
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="https://drive.google.com/file/d/1aKSEcRpBfsyE_UNAn9MbI_QcIdjo2zQj/view?usp=sharing"
                                    target="_blank"
                                >
                                    <BroadcastItem
                                        imageUrl={thumb2}
                                        date="11/27/2023"
                                        title="Beyond the Obstacle"
                                    />
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    href="https://drive.google.com/file/d/1alFPpGLq08ekPDdoTXMNOPA11YSUuERV/view?usp=sharing"
                                    target="_blank"
                                >
                                    <BroadcastItem
                                        imageUrl={thumb1}
                                        date="10/06/2023"
                                        title="Growth Unlocked"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h2 className="font-bold mb-8">Categories</h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/173olEHPJT-RLKNJE0g5ECyhlX0X-KtHX?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    Uncategorized
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1FpN623HP5TYMRyJ6EoFnT4GNmNNx3P4Q?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    Music
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1tvU-dy-sIS5hkXepiVNJXyoWn_cT42mj?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    Podcasts
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1-TXDKpxwdcD5l-g1mdjMimCRx7LimDmU?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    Radio Segment
                                </a>
                            </li>
                        </ul>
                        <h2 className="font-bold mt-8 mb-4">Archive</h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/16Ui0la6VkUb4UoyBK_ZrN2fjAgcklRLY?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    December 2023
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1fUAS3jkTrW91rVZ17OHjcCnxotLF-jKN?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    November 2023
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/1jCpkC6d116MrUmVdtXQgayUerpDKSmf1?usp=drive_link"
                                    className="text-blue-600 hover:underline"
                                    target="_blank"
                                >
                                    October 2023
                                </a>
                            </li>
                        </ul>
                        <h2 className="font-bold mt-8 mb-4">Social</h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Tumblr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastArchives;
