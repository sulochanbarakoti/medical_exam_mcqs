import { useState } from "react";
import InputField from "../components/inputField";
import { createUser } from "../../lib/appwrite";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [emptyForm, setEmptyForm] = useState(true);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    if (form.email && form.password && form.username) {
      try {
        const response = await createUser(
          form.email,
          form.password,
          form.username
        );
        console.log("User created", response);
        navigate("/home");
      } catch (error) {
        throw new Error(error);
      }
    }
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
              changeText={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <InputField
              title="Email"
              placeholder="jane.doe@email.com"
              changeText={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="mb-4 relative">
            <InputField
              title="Password"
              placeholder="*************"
              changeText={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          {/* <div className="my-2 bg-red-500 rounded-md p-2 text-white" hidden>
            Please complete the form.
          </div> */}
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
