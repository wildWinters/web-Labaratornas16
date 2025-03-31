"use client";

import useAuth from "../Store/useRegistration";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function AuthModal() {
  const inputsFields = ["FullName", "Email", "Password", "Phone"];
  const isLoginOrLogOut = useAuth((state) => state.isLogInorLogOut);
  const closeAuthModal = useAuth((state) => state.closeAuthModal);
  const { isAuthModal } = useAuth();

  const setLogInOrLogoutFields = (FormMode = isLoginOrLogOut, index: number) =>
    FormMode === "Log in" ? index >= 1 && index < 3 : true;

  return isAuthModal
    ? createPortal(
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-gray-900 relative text-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-5 border border-gray-800">
            <Image
              className="w-[40px] h-[40px] z-[200] absolute top-4 right-4 cursor-pointer"
              width={40}
              height={40}
              src="/reject (1).png"
              alt="exit"
              onClick={closeAuthModal}
            />

            <h2 className="text-2xl font-bold text-center">{isLoginOrLogOut}</h2>
            {inputsFields
              .filter((_, idx) => setLogInOrLogoutFields(isLoginOrLogOut, idx))
              .map((value) => (
                <input
                  key={value}
                  type={value === "Password" ? "password" : "text"}
                  placeholder={value}
                  className="w-full px-4 py-3 border border-gray-700 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all shadow-inner shadow-black"
                />
              ))}
            <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 transition rounded-md text-white font-semibold shadow-lg shadow-black hover:shadow-purple-500/50">
              {isLoginOrLogOut}
            </button>
            <p className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <span className="text-purple-400 cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>
          </div>
        </section>,
        document.body
      )
    : null;
}
