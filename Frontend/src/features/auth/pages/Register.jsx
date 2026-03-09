import React from "react";
import { Link } from "react-router";
const Register = () => {
  function handleRegister(e) {
    e.preventDefault();
  }
  return (
    <main className="mx-auto my-4 px-4 py-4">
      <div
        className="form-container mx-auto my-4 flex flex-col items-center justify-center max-w-[400px]  p-8 rounded-md"
        style={{ backgroundColor: "#232b2b" }}
      >
        <h1 className="text-center mb-5 font-bold text-3xl tracking-wide">
          Register
        </h1>
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            className="border border-amber-50 rounded-md px-2 py-1"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="border border-amber-50 rounded-md px-2 py-1"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border border-amber-50 rounded-md    px-2 py-1"
          />
          <button className="my-1 mb-2 cursor-pointer px-4 py-2 rounded-sm bg-pink-700 font-semibold text-md tracking-wide">
            Submit
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-pink-700" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
