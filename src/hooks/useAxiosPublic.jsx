import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://student-scholarship-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;