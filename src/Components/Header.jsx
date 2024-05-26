import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { useStateContext } from "../assets/Context";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForContact, setIsOpenForContact] = useState(false);

  const { setPlace } = useStateContext();
  const [city, setCity] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsOpenForContact(!isOpenForContact);
  };

  const handleMailClick = () => {
    const subject = encodeURIComponent("Regarding job opportunity");
    window.open(`mailto:?subject=${subject}`);
  };

  const handlePhoneClick = () => {
    window.open("tel:+918109297598");
  };

  const handleAboutMeClick = () => {
    window.open(
      "https://my-personal-portfolio-website-beta.vercel.app/",
      "_blank"
    );
  };

  const handleLogoutClick = () => {
    //console.log(isForLogout);
    localStorage.clear();
    window.location.href = "/";
  };

  const submitCity = (city) => {
    setPlace(city);
    setCity("");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4 px-10">
        <div>
          <h3 className="font-bold text-xl">
            <a href="https://hiringhood.com/">Hiring Hood</a>
          </h3>
        </div>

        <input
          className="text-[#212121] bg-transparent border border-black text-xl p-4 w-[40%] rounded-full shadow-xl"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity(city);
            }
          }}
          placeholder="Enter city name and hit enter 😃"
        />

        <div className="hidden sm:flex">
          <ul className="flex flex-col sm:flex-row md:gap-2 sm:gap-1 lg:gap-4 items-center font-bold text-md">
            <li className="hover:scale-105 transition-all duration-200">
              <button className="border-none">
                <a href="/">Home</a>
              </button>
            </li>
            <li className="hover:scale-105 transition-all duration-200">
              <button className="border-none" onClick={handleAboutMeClick}>
                About me 😄
              </button>
            </li>
            <li onClick={toggleDropdown}>
              <button
                className="hover:scale-105 transition-all duration-200"
                onClick={toggleDropdown}
              >
                Contact me ☎️
              </button>
            </li>
            {isOpenForContact && (
              <ul className="absolute z-10 top-16 right-20 text-black shadow-md rounded-md">
                <li className="text-left">
                  <button className="bg-blue-500 px-2 rounded-md">
                    <a onClick={handleMailClick}>Via Mail</a>
                  </button>
                </li>
                <li className="py-5 text-left">
                  <button
                    className="bg-blue-500 px-2 rounded-md"
                    onClick={handlePhoneClick}
                  >
                    Via Phone
                  </button>
                </li>
              </ul>
            )}
          </ul>
        </div>

        {/* For mobile screens */}
        <div className="sm:hidden">
          <button onClick={toggle}>
            {isOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiMenu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "w-full flex justify-center items-center" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center font-bold text-md w-full">
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl">
            <a href="/">Home</a>
          </li>
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl">
            <button className="border-none" onClick={handleAboutMeClick}>
              About me 😄
            </button>
          </li>
          <li className="w-full text-center hover:scale-105 transition-all duration-200 bg-orange-200 py-2 rounded-xl mb-4">
            <button className="cursor-pointer" onClick={toggleDropdown}>
              Contact me ☎️
            </button>
          </li>
          {isOpenForContact && (
            <ul className="absolute top-12 right-16 bg-slate-300 text-black shadow-md rounded-md p-6">
              <li className="py-5 text-left">
                <button>
                  <a onClick={handleMailClick}>Via Mail</a>
                </button>
              </li>
              <li className="py-5 text-left">
                <button onClick={handlePhoneClick}>Via Phone</button>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
