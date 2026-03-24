import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="w-screen">
      <div className="flex flex-col items-center justify-center mt-20 gap-10">
        <h1 className="text-center font-semibold my-4 text-5xl text-white">
          Welcome to instaclone App
        </h1>
        <div className="buttons flex items-center gap-5">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-lg cursor-pointer px-5 py-2 bg-blue-700 rounded-md font-semibold"
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="text-lg cursor-pointer px-5 py-2 bg-pink-700 rounded-md font-semibold"
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
