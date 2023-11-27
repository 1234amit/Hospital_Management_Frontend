import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(true); // New loading state
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/user/user-auth");
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                console.error("Authentication error:", error);
                setOk(false);
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    if (loading) {
        return <Spinner />;
    }

    return ok ? <Outlet /> : null; // Render nothing if not authenticated
}
