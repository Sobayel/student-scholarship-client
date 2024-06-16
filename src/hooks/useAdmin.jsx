import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      if (!user?.email) {
        return false;
      }
      const res = await axios.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
    enabled: !!user?.email,
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
