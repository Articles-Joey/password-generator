"use client"

import siteName from "constants/siteName";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import AnimatedSVG from "./AnimatedLockImage";
import useStore from "./useStore";

const navLinks = [
    {
        text: "Password",
        link: "/products"
    },
    {
        text: "Bcrypt",
        link: "/about"
    },
    {
        text: "PGP",
        link: "/contact"
    },
]

export default function SiteHeader() {

    const pathname = usePathname()

    const [menuOpen, setMenuOpen] = useState(false);

    const page = useStore(state => state.page);
    const setPage = useStore(state => state.setPage);

    // useEffect(() => {
    //     setMenuOpen(false)
    // }, [pathname])

    useEffect(() => {
        setMenuOpen(false)
    }, [page])

    return (
        <header>

            <nav>

                <div className="navbar navbar-expand-lg px-3">

                    <div className="container">

                        <Link className="navbar-brand" href="/">
                            {/* {siteName} */}

                            {/* <img height={40} src="/img/sketch.webp" alt="" /> */}

                            {/* <img height={40} src="/img/logo.png" alt="" /> 
                            */}

                            <AnimatedSVG />

                            {siteName}
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => {
                                setMenuOpen(prev => !prev)
                            }}
                        >
                            <em className="fa fa-bars" style={{ color: "var(--primary)" }} aria-hidden="true"></em>
                        </button>

                        <div className="center-links d-none d-lg-block">
                            {navLinks.map(obj => {
                                return (
                                    <span
                                        key={obj.link}
                                        // href={obj.link}
                                        onClick={() => {
                                            console.log(obj.text)
                                            setPage(obj.text)
                                        }}
                                        className={`link ${page == obj.text && 'active'}`}
                                    >
                                        {obj.text}
                                    </span>
                                )
                            })}
                        </div>

                        <div className={`collapse navbar-collapse justify-content-end ${menuOpen && 'show'}`} id="navbarNav">

                            <ul className="navbar-nav">

                                <li className={`nav-item ${pathname == "/" && "active"}`}>

                                    <Link target="_blank" className="nav-link" href="https://github.com/Articles-Joey/password-generator">
                                        <i className="fab fa-github"></i>
                                    </Link>

                                </li>

                                {navLinks.map(obj => {
                                    return (
                                        <li
                                            key={obj.link}
                                            // href={obj.link}
                                            onClick={() => {
                                                console.log(obj.text)
                                                setPage(obj.text)
                                            }}
                                            className={`d-lg-none link ${page == obj.text && 'active'}`}
                                        >
                                            {obj.text}
                                        </li>
                                    )
                                })}

                            </ul>

                        </div>

                    </div>

                </div>

                {/* <div className="links-bar">
                    <div className="container">
                        <div className="links">
                            {navLinks.map(obj => {
                                return (
                                    <a
                                        key={obj.link}
                                        href={obj.link}
                                        className="link"
                                    >
                                        {obj.text}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div> */}

            </nav>

            <div className="fixed-nav-fix"></div>

        </header>
    )
}