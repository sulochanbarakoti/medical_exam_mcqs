import { useState } from "react";
import InputField from "../components/inputField";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email and password to continue
        </p>
        <form>
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
          {/* <div className="mb-4">
            <div className="flex justify-center">
              Replace this div with your ReCaptcha component
              <div className="bg-gray-200 w-full p-3 rounded-lg text-center">
                <p>Verify you are human</p>
              </div>
            </div>
          </div> */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold p-3 rounded-lg disabled:opacity-50"
            disabled={!form.email || !form.password}
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            I don't have an account
          </a>
        </div>
        {/* <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Activate my account
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
