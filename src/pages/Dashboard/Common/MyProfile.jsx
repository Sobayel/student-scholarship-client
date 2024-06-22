import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../../Shared/LoadingSpinner'
import useAuth from '../../../hooks/useAuth'
import useAxiosPublic from '../../../hooks/useAxiosPublic'


const MyProfile = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosPublic()
  const { data: users = [], } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await axiosSecure.get(`/users/${user.email}`);
          return res.data;
      }
  })

  if(loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className='flex justify-center items-center  h-screen'>
      <div className='bg-white shadow-lg rounded-2xl w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>
          <p className='text-md font-semibold text-center'>Role:{users?.role}</p>
          
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile