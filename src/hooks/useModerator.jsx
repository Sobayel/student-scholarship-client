
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const useModerator = () => {
    const { user} = useAuth()
    const axios = useAxiosSecure()
   
    const { data: isCreator, isPending: isCreatorLoading } = useQuery({
        queryKey: [user?.email, 'isCreator'],
        queryFn: async () => {
            const res = await axios.get(`/users/creator/${user?.email}`)
            console.log(res.data)
            return res.data?.creator
        }
    })
    return [isCreator, isCreatorLoading]
};


export default useModerator;