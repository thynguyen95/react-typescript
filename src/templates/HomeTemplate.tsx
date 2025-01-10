import React from "react";
import HeaderHome from "../components/HeaderHome";
import { Outlet } from "react-router-dom";

type Props = {};

const HomeTemplate = (props: Props) => {
    return (
        <div>
            <HeaderHome />

            <div className="min-h-screen">
                <Outlet />
            </div>

            <footer>Footer</footer>
        </div>
    );
};

export default HomeTemplate;
