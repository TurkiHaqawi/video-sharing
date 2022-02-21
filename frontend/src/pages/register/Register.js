import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Regiser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleClick = async () => {
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      navigation("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-100">
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="space-y-3 my-5">
          <h1 className="text-3xl font-extrabold">Sing up to new Account</h1>
        </div>
        <div className="max-w-md w-full mx-auto bg-white rounded-lg p-7 space-y-7 ">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm">
              User Name
            </label>
            <input
              className="border round-md px-3 py-2"
              type="text"
              name="username"
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm" htmlFor="email">
              {" "}
              Email Address{" "}
            </label>
            <input
              className="border rounded-md px-3 py-2"
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className="w-full rounded-md bg-indigo-600 text-white py-2"
              onClick={handleClick}
            >
              Sing up{" "}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Regiser;
