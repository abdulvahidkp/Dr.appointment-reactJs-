import React from "react";
import Google from "../assets/Google.png";
import { Link } from "react-router-dom";

function SignupComponent() {

  return (
    <section>
      <div className="pb-0 sm:pb-32">
        <div className="w-screen sm:container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center">
              <div className="py-10 sm:pt-28">
                <div className="rounded-lg sm:shadow-xl w-96 h-auto">
                  <div className="px-10 sm:px-4">
                    <h1 className="text-4xl select-none font-semibold font-roboto ">
                      Sign up
                    </h1>
                    <p className="text-md py-2 font-sans">
                      Book your fav. without q
                    </p>
                    <form id="signupForm">
                      <div>
                        <div className="relative">
                          <input
                            type="text"
                            id="signupName"
                            autoComplete="off"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            id="signupMobile"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring"
                            placeholder="Mobile"
                            autoComplete="off"
                          />
                        
                        </div>
                        <div>
                          <input
                            type="password"
                            id="pwd"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring"
                            placeholder="Set Password"
                          />
                        </div>
                        <div>
                          <input
                            type="password"
                            id="matchPwd"
                            className="border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring"
                            placeholder="Retype Password"
                            required
                          />
                        </div>
                        <div id="recaptcha-container" />
                        <input
                          type="number"
                          id="first_name"
                          className="hidden border my-3 border-gray-300 text-gray-900 text-md rounded-md  w-full p-3 ring-green-300 ring-offset-1 focus:ring"
                          placeholder="OTP"
                          required
                        />
                        <button
                          className="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                    <div className="flex items-center my-4">
                      <hr className="w-1/2 " />
                      <p className="mx-3">or</p>
                      <hr className="w-1/2" />
                    </div>
                    <div>
                      <button className="border-2 select-none bg-white border-slate-300 text-slate-500 hover:bg-[#edf3f2]  rounded-full pl-12 w-full text-xl font-roboto font-semibold  p-3">
                        Sign in with Google
                      </button>
                      <img
                        src={Google}
                        className="h-6 ml-10 sm:ml-16  -mt-10 select-none pointer-events-none"
                        alt=""
                        s
                      />
                    </div>
                  </div>
                  <div className="place-content-center">
                    <p className="px-16 py-10">
                      already have an account?
                      <Link to="/login">
                        <span className="text-green-800 hover:text-green-900 hover:underline cursor-pointer">
                          Signin
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupComponent;
