import { useState } from "react";
import {
    GoogleOAuthProvider,
    GoogleLogin,
    CredentialResponse,
} from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSuccess = async (credentialResponse: CredentialResponse) => {
        const { credential } = credentialResponse;
        try {
            const res = await axios.post(
                `http://localhost:8000/api/auth/google/callback`,
                { token: credential }
            );
            localStorage.setItem("token", res.data.token);
            navigate("/home"); // Redirect to home page
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const handleFailure = (error: any) => {
        console.error("Google login failed", error);
        setErrorMessage("Failed to login with Google. Please try again.");
    };

    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
            <div className="flex items-center justify-center bg-gray-100">
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() =>
                        handleFailure(new Error("Google Login Failed"))
                    }
                    useOneTap
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
