import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const phonenumber = useRef(null);
  const password = useRef(null);
  function handlelogin(e) {
    e.preventDefault();
    const data = {
      phonenumber: phonenumber.current.value,
      password: password.current.value,
    };

    dispatch(registerUser(data));

    if (data.password !== 12345678) {
      toast.error("You have entered an invalid phone number or password ");
    } else {
      navigate("/dashboard");
    }
  }
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="w-full px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>

            <form
              onSubmit={handlelogin}
              action=""
              className="flex flex-col gap-4"
            >
              <input
                ref={phonenumber}
                className="p-2 mt-8 rounded-xl border"
                type="number"
                placeholder="Phone number"
              />
              <div className="relative">
                <input
                  ref={password}
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>
            <div>
              <p> phoneNumber : 1234567891 </p>
              <p> password : 12345678 </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
