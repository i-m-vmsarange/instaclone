import { Link } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.context";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await handleLogin(username, password);
    console.log(response);
    navigate("/");
  }

  return (
    <main className="mx-auto my-4 px-4 py-4">
      <div
        className="form-container mx-auto my-4 flex flex-col items-center justify-center max-w-100  p-8 rounded-md"
        style={{ backgroundColor: "#232b2b" }}
      >
        <h1 className="text-center mb-5 font-bold text-3xl tracking-wide">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            className="border border-amber-50 rounded-md px-2 py-1"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border border-amber-50 rounded-md    px-2 py-1"
          />
          <button className="my-1 mb-2 cursor-pointer px-4 py-2 rounded-sm bg-blue-700 font-semibold text-md tracking-wide">
            Submit
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="text-blue-700" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
