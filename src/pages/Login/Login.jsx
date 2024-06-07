import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useAuth()

    const handleSignIn = (data) => {
        const { email, password } = data;
        const from = location.state?.from?.pathname || "/";

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            Swal.fire({
              title: "User Login Successfully",
              showClass: {
                popup: `
                  animate__animated animate__fadeInUp animate__faster
                `
              },
              hideClass: {
                popup: ` animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });
            navigate(from, {replace: true });
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <>
            <div className="w-full max-w-sm p-6 m-auto mx-auto my-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex justify-center mx-auto">
                    <img className="w-16 h-12 rounded-xl" src={logo} alt="" />
                </div>
                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                <form onSubmit={handleSubmit(handleSignIn)} className="mt-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Email</label>
                        <input name="email" type="email" placeholder="Your Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-700">This field is required...</span>}
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <label className="block text-sm text-gray-800 dark:text-gray-200 font-semibold">Password</label>
                        </div>

                        <input type="password" name="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-700">This field is required...</span>}
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                        or login with Social Media
                    </a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
                </div>

                <div onClick={handleGoogleSignIn} className="flex items-center mt-6 -mx-2">
                    <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                        <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                            </path>
                        </svg>

                        <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                    </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-400"> Do not have an account? <Link to='/signup' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
            </div>
        </>
    );
};

export default Login;