
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useModerator from "../hooks/useModerator";


const ModeratorRoute = ({children}) => {
    const [isModerator, isModeratorLoading] = useModerator();
    const {user, loading} = useAuth();
    const location = useLocation();
    
    if (loading || isModeratorLoading) {
        return <span className="loading flex mx-auto justify-center items-center loading-bars loading-lg"></span>
    }

    if(user && isModerator){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default ModeratorRoute;