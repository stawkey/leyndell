import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from "./api";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                await api.get("/auth/is-authenticated", {
                    withCredentials: true,
                });
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
