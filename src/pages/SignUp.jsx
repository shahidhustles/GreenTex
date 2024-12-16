import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { login } from "../assets/images";
import { Link, Form, redirect, useActionData, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useData } from "../store/store";

const SignUp = () => {
  const actionData = useActionData();

  const navigate = useNavigate();

  async function handleSignUpWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
      useData.setState((state) => ({
        ...state,
        isLoggedIn: true,
      }));
      navigate("/");
    } catch (e) {
      return {
        auth: e,
      };
    }
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full justify-center items-center p-4">
      <div className="w-full md:w-1/2 max-w-xl">
        <div>
          {actionData?.error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {actionData.error}
            </div>
          )}
          <h1 className="font-montserrat font-semibold text-3xl md:text-4xl">
            Hello there !!
          </h1>
          <p className="font-montserrat text-slate-500 text-sm md:text-base sm:max-w-sm mt-2">
            Today is a new day. It&apos;s your day. You shape it. Sign up to
            start bookmarking your favorite textile.
          </p>
          <Form method="post" className="mt-6 md:mt-8 flex-col flex">
            <label htmlFor="email" className="font-lato mt-2">
              Email
            </label>
            <input
              className="border w-full md:w-96 bg-slate-grey rounded-lg p-1.5 my-2"
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
            <label htmlFor="password" className="font-lato mt-2">
              Password
            </label>
            <input
              className="border w-full md:w-96 bg-slate-grey rounded-lg p-1.5 my-2"
              type="password"
              name="password"
              id="password"
              placeholder="At least 8 characters"
            />

            <button className="border w-full md:w-96 bg-grey text-white font-montserrat p-2 rounded-lg mt-6 md:mt-8">
              Sign up
            </button>
          </Form>
          <div className="w-full md:w-96 flex items-center gap-2 my-4">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <p className="text-sm text-gray-500">OR</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <div className="flex flex-col justify-self-start mt-4 md:mt-6">
            <button onClick={handleSignUpWithGoogle} className="border w-full md:w-96 bg-white text-black font-montserrat p-2 rounded-lg mb-4 flex items-center justify-center gap-2">
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>
            
          </div>
          <p className="font-lato mt-6 text-center ">
            Already have an Account?{" "}
            <Link to="/login" className="underline text-primary">
              Log In
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

export default SignUp;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    useData.setState((state) => ({
      ...state,
      isLoggedIn: true,
    }));
    return redirect("/");
  } catch (error) {
    let errorMessage = "Failed to create account";

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "This email is already registered";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        break;
      case "auth/weak-password":
        errorMessage = "Password is too weak";
        break;
    }

    return { error: errorMessage };
  }
}
