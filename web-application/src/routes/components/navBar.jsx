import { FaUserDoctor } from "react-icons/fa6";
import { useGlobalContext } from "../../context/globalProvider";

const Navbar = () => {
  const { user } = useGlobalContext();
  return (
    <div className="p-4 bg-background">
      <nav>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl flex flex-row items-center space-x-2">
            <FaUserDoctor size={25} />
            <div className="text-xl">
              <a href="/home">MBBS MCQs</a>
            </div>
          </div>
          {!user ? (
            <div className="space-x-2">
              <button className="bg-white p-1 rounded-md text-black font-bold px-3">
                <a href="/signup">Sign Up </a>
              </button>
              <button className="bg-white p-1 rounded-md text-black font-bold px-3">
                <a href="/login">LogIn </a>
              </button>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center space-x-2">
              <div>
                <img
                  src={user?.avatar}
                  alt="profile"
                  className="h-6 w-6 rounded-full object-cover"
                />
              </div>
              <div className="text-md font-bold text-white">
                {user?.username}
              </div>
              <button className="bg-white p-1 rounded-md text-black font-bold px-3">
                <a href="/login">Log Out </a>
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
