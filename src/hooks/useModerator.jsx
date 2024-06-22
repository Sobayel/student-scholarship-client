
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const useModerator = () => {
    const { user} = useAuth()
    const axios = useAxiosSecure()
   
    const { data: isModerator, isPending: isModeratorLoading } = useQuery({
        queryKey: [user?.email, 'isModerator'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`/users/moderator/${user?.email}`)
            console.log(res.data)
            return res.data?.moderator
        }
    })
    return [isModerator, isModeratorLoading]
};


export default useModerator;