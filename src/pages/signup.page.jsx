import Input from "../components/input/input.component";
import DropdownList from "../components/dropdownList/dropdownList.component";
import useSignup from "../hooks/useSignup.hook";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "male",
  });

  const { signup, errorMessage, isLoading } = useSignup();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signupInfo);
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
              type: "email",
              name: "email",
              value: signupInfo.email,
              onChange: handleChange,
            }}
            labelName="Email"
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
            onChangeHandler={handleChange}
          ></DropdownList>
          {errorMessage ? (
            <h2 className="text-red-600">{errorMessage}</h2>
          ) : null}
          <Link to="/">Have an account already? To login page</Link>
          <div>
            <button
              disabled={isLoading ? true : false}
              className="bg-white text-black px-4 py-1 rounded-lg w-full"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
