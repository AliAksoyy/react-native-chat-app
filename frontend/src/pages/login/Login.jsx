import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-lg bg-clip-padding backdrop-filter  bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-gray-900  text-gray-300"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-900  text-gray-300"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-300 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
