import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const ComponentsNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-[#1F306A] sm/h-[130px] font-fontTH ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap  h-[100%] justify-between ">
       
      <a href="./" className="flex">
        {/* <div className="flex-shrink-0"> */}
          {/* Your logo or brand */}
          <img
            className="h-[70px] mr-3"
            src="/img/Logo_panomwan.png"
            alt="Logo"
          /> 
        {/* </div> */}
        <div className="text-white sm/text-lg">
            <p className="text-lg ">
              วิทยาลัยเทคโนโลยีพนมวันท์
            </p>
            <div className=" bg-white h-[2px] sm/w-[300px]" />
            <p>
              Phanomwan College of Technology
            </p>
        </div>
      </a>

         {/*------------------------ mobile -----------------*/}
        <button
            onClick={toggleDropdown}
            data-collapse-toggle="mobile-menu-3"
            type="button"
            // className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            className="md:hidden text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex justify-between items-center "
            aria-controls="mobile-menu-3"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        <div
          className={`md:flex justify-between items-center w-full md:w-auto md:order-1 ${
            isOpen ? "" : "hidden"
          }`}
          id="mobile-menu-3"
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-lg  md:font-medium  ">
            <a
              href="./"
              className=" text-white hover:bg-[#FFFAFA] hover:text-black px-3 py-2 rounded-md font-medium"
            >
              หน้าแรก
            </a>

            <a
              href="/about"
              className="text-white  hover:bg-[#FFFAFA] hover:text-black px-3 py-2 rounded-md  font-medium"
            >
              รู้จัก &quot;พนมวันท์&quot;
            </a>

            <a
              href="/faculty"
              className="text-white  hover:bg-[#FFFAFA] hover:text-black px-3 py-2 rounded-md  font-medium"
            >
              คณะ/หลักสูตร
            </a>

            <a
              href="/welfare"
              className="text-white  hover:bg-[#FFFAFA] hover:text-black px-3 py-2 rounded-md  font-medium"
            >
              สวัสดิการ
            </a>
            <a>
              <Menu as="div" className="relative inline-block z-50 ">
                <div>
                  <Menu.Button className="inline-flex w-full gap-x-1.5 text-20  text-white text-lg hover:bg-[#FFFAFA] hover:text-black px-3 py-2 rounded-md  font-medium  shadow-sm ">
                    สนใจสมัครเรียน
                    <ChevronDownIcon className="mr-1h-6 w-6 item-center mt-[] text-white "
                    aria-hidden="true"/>
                    {/* <ChevronDownIcon
                      className=" mr-1 h-5 w-5 text-gray-400 "
                      aria-hidden="true"
                    /> */}
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className=" text-center absolute left-0 z-10 mt-2 w-[170px] origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/register"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 hover:bg-[#BEBEBE] hover:text-black "
                                : "text-gray-700 ",
                              "block px-4 py-2 text-lg"
                            )}
                          >
                            วิธีการสมัคร
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/advisor"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 hover:bg-[#BEBEBE] hover:text-black"
                                : "text-gray-700",
                              "block px-4 py-2 text-lg"
                            )}
                          >
                            ทีมที่ปรึกษา
                          </a>
                        )}
                      </Menu.Item>

                      <form method="POST" action="#"></form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </a>
          </ul>
        </div>

       
      </div>
    </nav>
  );
};
export default ComponentsNavbar;