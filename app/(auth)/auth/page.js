"use client";
import useInput from "@/hooks/useInput";
import bg from "@/images/bg.jpeg";
import logo from "@/images/logo.png";
import { authActions } from "@/store/reduxStore";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();

  // \\\\\\\\\\\\\ UPDATE INFO \\\\\\\\\\\\
  const {
    blurHandler: nameBlur,
    setHandler: setName,
    changeHandler: nameChange,
    isValid: nameValid,
    hasError: nameError,
    value: name,
    reset: resetName,
  } = useInput((v) => true);

  // \\\\\\\\\\\\\ UPDATE INFO \\\\\\\\\\\\
  const {
    blurHandler: passwordBlur,
    changeHandler: passwordChange,
    isValid: passwordValid,
    hasError: passwordError,
    value: password,
    reset: resetPassword,
  } = useInput((v) => true);

  function signIn(e) {
    e.preventDefault();
    if (name !== "tupac" || password !== "Delacruz@00") return;
    dispatch(authActions.login({ user: "Tupac", token: new Date().getTime() }));
  }

  return (
    <>
      <Image
        src={bg}
        alt=""
        className="h-screen w-screen object-cover fixed saturate-50 z-0 "
      />
      <div className="fixed flex min-h-full min-w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-10  backdrop-blur-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-40 md:h-44 w-auto"
            src={logo}
            alt="Your Company"
          />
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm pb-12">
          <p className="text-white md:-mx-40 pb-10">
            A versatile investment firm specializing in Construction,
            Outsourcing, IT, Healthcare, Food & Beverage, and Real Estate. Our
            experienced team excels in identifying high-growth opportunities,
            taking a hands-on approach to maximize potential, and delivering
            long-term value with integrity and excellence.
          </p>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium leading-6 text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="off"
                  value={name}
                  onChange={nameChange}
                  className="block w-full bg-[rgb(255,255,255,0.4)]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-base font-medium leading-6 text-white"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  value={password}
                  onChange={passwordChange}
                  className="block w-full bg-[rgb(255,255,255,0.4)]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e) => signIn(e)}
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-base"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
