import React from "react";
import { Navbar } from "flowbite-react";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

const HeaderHome = (props: Props) => {
    const location = useLocation();

    // Kiểm tra URL hiện tại là "/" hoặc "/home"
    const isHomeActive: boolean =
        location.pathname === "/" || location.pathname === "/home";

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar>
                    <NavLink
                        to="/home"
                        className={
                            isHomeActive
                                ? "text-blue-500 font-bold"
                                : "text-gray-500"
                        }
                    >
                        Home
                    </NavLink>
                </Navbar>
                <Navbar>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "text-gray-500"
                        }
                    >
                        Login
                    </NavLink>
                </Navbar>
                <Navbar>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "text-gray-500"
                        }
                    >
                        Register
                    </NavLink>
                </Navbar>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderHome;
