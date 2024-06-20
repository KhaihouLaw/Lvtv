import BroadcastItem from "../components/BroadcastItem";
import AuthNav from '../components/AuthNavbar';
function PastArchives() {
    return (
        <div>
            <AuthNav />
            <div className="p-20">
                <div className="flex flex-1 justify-center">
                    <h2 className="font-bold mb-8 text-3xl">LV.tv Past Archives</h2>
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
                <div className="mx-auto p-4" style={{ maxWidth: '800px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25rem' }}>
                    <div className="flex-1">
                        <ul className="space-y-4">
                        <li className="flex items-center">
                            <BroadcastItem
                                imageUrl="https://placehold.co/50x50"
                                date="12/11/2023"
                                title="[Broadcast Title] The Art of Connection"
                            />
                        </li>
                        <li className="flex items-center">
                            <BroadcastItem
                                imageUrl="https://placehold.co/50x50"
                                date="11/27/2023"
                                title="Beyond the Obstacle"
                            />
                        </li>
                        <li className="flex items-center">
                            <BroadcastItem
                                imageUrl="https://placehold.co/50x50"
                                date="10/06/2023"
                                title="Growth Unlocked"
                            />
                        </li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h2 className="font-bold mb-8">Categories</h2>
                        <ul className="space-y-2">
                        <li><a href="#" className="text-blue-600 hover:underline">Uncategorized</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">Music</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">Podcasts</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">Radio Segment</a></li>
                        </ul>
                        <h2 className="font-bold mt-8 mb-4">Archive</h2>
                        <ul className="space-y-2">
                        <li><a href="#" className="text-blue-600 hover:underline">December 2023</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">November 2023</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">October 2023</a></li>
                        </ul>
                        <h2 className="font-bold mt-8 mb-4">Social</h2>
                        <ul className="space-y-2">
                        <li><a href="#" className="text-blue-600 hover:underline">Instagram</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">Tumblr</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PastArchives;
