import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useUser = () => {
    const { user } = useAuth()
    const axios = useAxiosPublic()
   
    const { data: isUser, isPending: isUserLoading } = useQuery({
        queryKey: [user?.email, 'account'],
        queryFn: async () => {
            const res = await axios.get(`/users/user/${user?.email}`)
            return res.data?.user
        }
    })
    return [isUser, isUserLoading]
};


export default useUser;
