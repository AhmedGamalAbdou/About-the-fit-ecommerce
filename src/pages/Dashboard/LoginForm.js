import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const phonenumber = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate;
  function handlelogin(e) {
    e.preventDefault();
    const data = {
      phonenumber: phonenumber.current.value,
      password: password.current.value,
    };
    dispatch(registerUser(data));
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
                onClick={navigate("/dashboard")}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
