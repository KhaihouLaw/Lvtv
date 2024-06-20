import AuthNav from "../components/AuthNavbar";
function FAQs() {
    return (
        <div>
            <AuthNav />
            <div className="p-20">
                <p className="font-color text-3xl font-bold flex justify-center">
                    Frequently Asked Questions
                </p>
                <div className="p-10">
                    <p className="font-color text-2xl font-bold">
                        What is LV.TV?
                    </p>
                    <p className="font-color text-2xl">
                        LV.TV is a livestreaming website for La Verdad Christian
                        College to improve academic excellence.
                    </p>
                </div>
                <div className="p-10">
                    <p className="font-color text-2xl font-bold">
                        What devices can I use to watch?
                    </p>
                    <p className="font-color text-2xl">
                        You can watch on smartphones, tablets, laptops, and
                        desktop computers.
                    </p>
                </div>
                <div className="p-10">
                    <p className="font-color text-2xl font-bold">
                        The video is buffering or not playing smoothly. How can
                        I fix this?
                    </p>
                    <p className="font-color text-2xl">
                        Check your internet connection, close other apps or
                        tabs, clear your browser cache, update your browser or
                        app, and restart your device.
                    </p>
                </div>
                <div className="p-10">
                    <p className="font-color text-2xl font-bold">
                        I can’t log in. What should I do?
                    </p>
                    <p className="font-color text-2xl">
                        If you’re having trouble logging in, click the "Refresh"
                        button and try logging in your La Verdad Email. If
                        issues persist, contact customer support.
                    </p>
                </div>
                <div className="p-10">
                    <p className="font-color text-2xl font-bold">
                        How can I find out about upcoming releases and new
                        content?
                    </p>
                    <p className="font-color text-2xl">
                        New content is added regularly. Check the "Home Page"
                        section and find the "Schedules & Programs"for the
                        latest updates.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQs;
