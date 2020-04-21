import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Giới thiệu",
        to: "/about",
        exact: false
    },
    {
        name: "Liên hệ",
        to: "/contact",
        exact: false
    },
    {
        name: "Sản phẩm",
        to: "/products",
        exact: false
    },
    {
        name: "Đăng nhập",
        to: "/login",
        exact: false
    }
];

    const MenuLink = ({ label, to, actionOnlyWhenExact }) => {
    return (
        <Route
        path={to}
        exact={actionOnlyWhenExact}
        children={({ match }) => {
            var active = match ? "active abc" : "";
            return (
            <li className={`my-li ${active}`}>
                <Link to={to} className="my-link">
                {label}
                </Link>
            </li>
            );
        }}
        />
    );
};

class Menu extends Component {
    render() {
        return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
        </nav>
        );
    }

    showMenus = menus => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    actionOnlyWhenExact={menu.exact}
                />
                )
            });
        }
        return result;
    };
}

export default Menu;
