import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBookmarksFill } from "react-icons/bs";
import { useBookmarkContext } from "../../../context/bookMarkContext";
import Cookies from "js-cookie";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "School", href: "/school", current: false },
  { name: "Colleges", href: "/college", current: false },
  { name: "Investors", href: "/investor", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {

  const [filteredColleges] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userDetails, setUserDetails] = useState({});
  const [setBookMarkCollege] = useState([]);
  // const [bookMarkLength, setbookMarkLength] = useState(0);
  const host = "http://localhost:4080";
  const { bookMarkLength, setBookMarkLength } = useBookmarkContext();

  useEffect(() => {
    setBookMarkLength(filteredColleges.length);
  }, [filteredColleges]);

  useEffect(() => {
    const fetchBookmarkedColleges = async () => {
      try {
        const token = Cookies.get("token");
        const response = await fetch("http://localhost:4080/api/collegecart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        });

        if (response.ok) {
          const data = await response.json();

          setBookMarkCollege(data.savedColleges);
        } else {
          console.error("Error fetching bookmarked colleges");
          // Handle the case where the API call was not successful
        }
      } catch (error) {
        console.error("Error fetching bookmarked colleges:", error);
      }
    };

    fetchBookmarkedColleges();
  }, []);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = Cookies.get("token");
        console.log(token);
        if (!token) {
          console.log("No token found");
          return;
        }
        const response = await fetch(`${host}/api/users/getUserDetails`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("data", data);
          setUserDetails(data.data);
        } else {
          console.log("Error fetching user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (!userDetails || !userDetails.name) {
      fetchUserDetails();
    }
  }, []);

  let Navigate = useNavigate();
  const handleSignOut = () => {
    Cookies.remove("token");
    setUserDetails({});
    Navigate("/login");
  };
  const avatarURL = userDetails?.avatar;
  // console.log(avatarURL);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const handleSignOut = () => {
  //   // Your sign out logic here
  // };

  return (
    <Disclosure as="nav" style={{ backgroundColor: "#0F0C2D" }}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 sm: md:justify-between items-center justify-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                    {" "}
                    <h1 style={{ color: "#FFF", fontSize: "1.5rem" }}>
                      Campus-Finder
                    </h1>
                  </Link>
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div
                    style={{ fontFamily: "SFProDispaly" }}
                    className=" font-value flex space-x-4 "
                  >
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 lg:text-xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div style={{ color: "white", marginRight: "0.5rem" }}>
                    ({bookMarkLength})
                  </div>
                  <Link to="/bookmarks">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      <BsFillBookmarksFill className="h-6 w-6 p-1" />
                    </button>
                  </Link>
                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={avatarURL}
                          alt="avater"
                        />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleSignOut}
                              className={classNames(
                                "w-full text-left px-4 py-2 text-sm text-gray-700",
                                active ? "bg-gray-100" : ""
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                   <div className="relative ml-3">
      <div>
        <Menu>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img className="h-8 w-8 rounded-full" src={avatarURL} alt="avatar" />
          </Menu.Button>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
              <div className="absolute z-10 w-80 bg-white p-4 rounded-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">user1</h2>
                <p className="text-gray-700 mb-4">useremail</p>
                <img className="h-40 w-40 rounded-full mx-auto" src={avatarURL} alt="avatar" />
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-sm text-white bg-red-500 rounded"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          )}
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={openModal}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                  )}
                >
                  Your Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                  )}
                >
                  Settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={classNames(
                    "block px-4 py-2 text-sm text-gray-700 w-full text-left",
                    active ? "bg-gray-100" : ""
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
