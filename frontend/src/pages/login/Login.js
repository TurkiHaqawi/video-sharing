import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const passwordRaf = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const navigation = useNavigate();
  const handleSumbmit = async () => {
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRaf.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigation("/");
      // console.log(res.data);
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="bg-gray-100">
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="space-y-3 my-5">
          <h1 className="text-3xl font-extrabold ">Sing in to your Account</h1>
          <p className="text-center">
            or
            <Link
              to="/register"
              className="text-indigo-600 border-b border-indigo-600"
            >
              {" "}
              reqister your account{" "}
            </Link>
          </p>
        </div>
        <div className="max-w-md w-full mx-auto bg-white rounded-lg p-7 space-y-7 ">
          <div className="flex flex-col">
            <label className="mb-1 text-sm" htmlFor="text">
              {" "}
              User Name{" "}
            </label>
            <input
              className="border rounded-md px-3 py-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email Address"
              ref={userRef}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm">
              Password
            </label>
            <input
              className="border round-md px-3 py-2"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              ref={passwordRaf}
            />
          </div>

          <div>
            <button
              className="w-full rounded-md bg-indigo-600 text-white py-2  "
              onClick={handleSumbmit}
              disabled={isFetching}
            >
              Log in{" "}
            </button>
          </div>
          <div className="relative pb-2 text-center">
            <div className="absolute top-0 left-0 w-full border"></div>
            <div className="absolute -top-3 left-0 w-full text-center"></div>
            <span className="bg-white px-3 text-gray-600">
              or continue Via{" "}
            </span>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3 text-center text-2xl">
              <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-700">
                <i className="fab fa-facebook-square"></i>
              </div>

              <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-700">
                <i className="fab fa-twitter-square"></i>
              </div>

              <div className="border-2 rounded-md p-3 cursor-pointer hover:border-gray-700">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
