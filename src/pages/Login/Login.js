import { useForm } from "react-hook-form";
import { userLogin } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submitForm = async (data) => {
    dispatch(userLogin(data));
    navigate("/");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-fit lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login to your account
          </h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-group">
              <input
                id="phoneNumber"
                type="tel"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("phoneNumber")}
                required
                placeholder="phonenumber"
              />
            </div>
            <div className="form-group">
              <input
                id="password"
                type="password"
                className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("password")}
                required
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              className=" mt-5 w-full flex items-center justify-center text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
