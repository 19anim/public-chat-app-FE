import Input from "../components/input/input.component";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../utils/apiEnum";
import UseLogin from "../hooks/useLogin.hook";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const { login, isLoading } = UseLogin();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(loginInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border rounded-lg px-5 py-3 flex flex-col items-center gap-3">
        <h3 className=" text-[30px]">
          Chat App <span className=" text-blue-500">JAGERTHEJAGER</span>
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[350px] sm:w-[600px] gap-4"
        >
          <Input
            inputOption={{
              type: "text",
              name: "username",
              value: loginInfo.username,
              onChange: handleChange,
            }}
            labelName="Username"
          />
          <Input
            inputOption={{
              type: "password",
              name: "password",
              value: loginInfo.password,
              onChange: handleChange,
            }}
            labelName="Password"
          />
          <div className="flex justify-between">
            <Link to="signup">Don't have an account?</Link>
            <Link to="/">Forgot password?</Link>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white text-black px-4 py-1 rounded-lg w-full"
            >
              {isLoading ? "Trying to login ..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
