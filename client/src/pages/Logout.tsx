import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = ({ onLogout }: { onLogout: () => void }) => {
    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/login" replace />;
};

export default Logout;