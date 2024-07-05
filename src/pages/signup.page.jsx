import Input from "../components/input/input.component";
import DropdownList from "../components/dropdownList/dropdownList.component";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border rounded-lg px-5 py-3 flex flex-col items-center gap-3">
        <h3 className=" text-[30px]">
          Chat App <span className=" text-blue-500">JAGERTHEJAGER</span>
        </h3>
        <form className="flex flex-col w-[350px] sm:w-[600px] gap-4">
          <Input
            inputOption={{
              type: "text",
              name: "fullName",
              value: signupInfo.fullName,
              onChange: handleChange,
            }}
            labelName="Full name"
          />
          <Input
            inputOption={{
              type: "text",
              name: "username",
              value: signupInfo.username,
              onChange: handleChange,
            }}
            labelName="Username"
          />
          <Input
            inputOption={{
              type: "password",
              name: "password",
              value: signupInfo.password,
              onChange: handleChange,
            }}
            labelName="Password"
          />
          <Input
            inputOption={{
              type: "password",
              name: "confirmPassword",
              value: signupInfo.confirmPassword,
              onChange: handleChange,
            }}
            labelName="Confirm password"
          />
          <DropdownList
            label={"Gender"}
            options={["Male", "Female"]}
          ></DropdownList>
          <Link to="/">Have an account already? To login page</Link>
          <div>
            <button className="bg-white text-black px-4 py-1 rounded-lg w-full">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
