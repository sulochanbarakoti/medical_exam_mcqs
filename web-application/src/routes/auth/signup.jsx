import { useState } from "react";
import InputField from "../components/inputField";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(form);
    console.log("hi");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an account.
        </h2>
        <p className="text-gray-600 text-center mb-6">Fill the form</p>
        <div>
          <div className="mb-4">
            <InputField
              title="Username"
              placeholder="jane doe"
              onChangeText={(e) => setForm({ ...form, username: e })}
            />
          </div>
          <div className="mb-4">
            <InputField
              title="Email"
              placeholder="jane.doe@email.com"
              onChangeText={(e) => setForm({ ...form, email: e })}
            />
          </div>
          <div className="mb-4 relative">
            <InputField
              title="Password"
              placeholder="*************"
              onChangeText={(e) => setForm({ ...form, password: e })}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white font-semibold p-3 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
