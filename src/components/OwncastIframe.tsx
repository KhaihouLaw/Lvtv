import React from "react";

const OwncastIframe: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <iframe
                src="http://128.199.166.235:8080/embed/video"
                width="800"
                height="450"
                frameBorder="0"
                allowFullScreen
                title="Owncast Stream"
            ></iframe>
        </div>
    );
};

export default OwncastIframe;
// http://128.199.166.235:8080
