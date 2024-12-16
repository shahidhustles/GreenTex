import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { login } from "../assets/images";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full justify-center items-center p-4">
      <div className="w-full md:w-1/2 max-w-xl">
        <div>
          <h1 className="font-montserrat font-semibold text-3xl md:text-4xl">
            Welcome Back !!
          </h1>
          <p className="font-montserrat text-slate-500 text-sm md:text-base sm:max-w-sm mt-2">
            Today is a new day. It&apos;s your day. You shape it. Sign in to
            start bookmarking your favorite textile.
          </p>
          <div className="mt-6 md:mt-8 flex-col flex">
            <label htmlFor="email" className="font-lato mt-2">Email</label>
            <input
              className="border w-full md:w-96 bg-slate-grey rounded-lg p-1.5 my-2"
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
            <label htmlFor="password" className="font-lato mt-2">Password</label>
            <input
              className="border w-full md:w-96 bg-slate-grey rounded-lg p-1.5 my-2"
              type="password" 
              name="password"
              id="password"
              placeholder="At least 8 characters"
            />
            <button className="border w-full md:w-96 bg-grey text-white font-montserrat p-2 rounded-lg mt-6 md:mt-8">Sign in</button>
          </div>
          <span className="text-xl md:text-2xl w-full md:w-96 mt-4 justify-center items-center flex">
            <p>OR</p>
          </span>
          <div className="flex flex-col justify-self-start mt-4 md:mt-6">
            <button className="border w-full md:w-96 bg-white text-black font-montserrat p-2 rounded-lg mb-4 flex items-center justify-center gap-2">
              <FcGoogle className="text-xl" />
              Sign In with Google
            </button>
            <button className="border w-full md:w-96 bg-black text-white font-montserrat p-2 rounded-lg flex items-center justify-center gap-2">
              <BsApple className="text-xl" />
              Sign in with Apple
            </button>
          </div>
          <p className="font-lato mt-6 text-center ">
            Don&apos;t have an Account? <a href="/signup" className="underline text-primary">Sign Up</a>
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center m-4">
        <img src={login} alt="" className="rounded-xl max-w-[400px] w-full h-auto"/>
      </div>
    </div>
  );
};

export default Login;
