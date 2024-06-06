import { Link } from "react-router-dom";
import error from "../../assets/home/error.jpg"

const Error = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={error} alt="" />
            <Link to={"/"}> <button className="btn border-t-neutral-500 text-xl font-semibold mt-4">Go to Home</button></Link>
        </div>
    );
};

export default Error;