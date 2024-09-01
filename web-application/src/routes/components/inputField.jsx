import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ title, changeText, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={!showPassword ? title : "text"}
        name={title}
        onChange={changeText}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        required
      />
      {title === "Password" && (
        <div className="absolute right-3 top-11">
          <button onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      )}
    </div>
  );
};

export default InputField;
