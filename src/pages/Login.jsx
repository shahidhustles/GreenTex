import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa"; // Added import for back arrow icon
import { login } from "../assets/images";
import { Form, Link, redirect, useActionData, useNavigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useData } from "../store/store";

const Login = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  async function handleSignInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      useData.setState((state) => ({
        ...state,
        isLoggedIn: true,
        user: auth.currentUser,
      }));
      navigate("/");
    } catch (e) {
      return {
        auth: e,
      };
    }
  }

  // Function to handle back button click
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full justify-center items-center p-4">
      <div className="w-full md:w-1/2 max-w-xl">
        <div>
          {/* Back button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft /> Back
          </button>

          <h1 className="font-montserrat font-semibold text-3xl md:text-4xl">
            Welcome Back !!
          </h1>
          <p className="font-montserrat text-slate-500 text-sm md:text-base sm:max-w-sm mt-2">
            Today is a new day. It&apos;s your day. You shape it. Sign in to
            start bookmarking your favorite textile.
          </p>
          <Form method="post" className="mt-6 md:mt-8 flex-col flex">
            <label htmlFor="email" className="font-lato mt-2">
              Email
            </label>
            <input
              className={`border w-full md:w-96 bg-slate-grey rounded-lg p-1.5 my-2 ${
                errors?.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
            {errors?.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <label htmlFor="password" className="font-lato mt-2">
              Password
            </label>
            <input
              className={`border w-full md:w-96 bg-slate-grey rounded-lg p-1.5 my-2 ${
                errors?.password ? "border-red-500" : ""
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="At least 8 characters"
            />
            {errors?.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            {errors?.auth && (
              <p className="text-red-500 text-sm mt-2">{errors.auth}</p>
            )}

            <button className="border w-full md:w-96 bg-grey text-white font-montserrat p-2 rounded-lg mt-6 md:mt-8">
              Sign in
            </button>
          </Form>
          <div className="w-full md:w-96 flex items-center gap-2 my-4">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <p className="text-sm text-gray-500">OR</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <div className="flex flex-col justify-self-start mt-4 md:mt-6">
            <button
              onClick={handleSignInWithGoogle}
              className="border w-full md:w-96 bg-white text-black font-montserrat p-2 rounded-lg mb-4 flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl" />
              Sign In with Google
            </button>
          </div>
          <p className="font-lato mt-6 text-center ">
            Don&apos;t have an Account?{" "}
            <Link to="/signup" className="underline text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center m-4">
        <img
          src={login}
          alt=""
          className="rounded-xl max-w-[400px] w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  // Validate email
  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    //The test() method in JavaScript is used to test for a match in a string.
    // If it finds a match, it returns true, otherwise it returns false
    errors.email = "Please enter a valid email";
  }

  // Validate password
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    useData.setState((state) => ({
      ...state,
      isLoggedIn: true,
      user: auth.currentUser,
    }));
    return redirect("/");
  } catch (e) {
    return {
      auth: "Invalid email or password",
    };
  }
}
