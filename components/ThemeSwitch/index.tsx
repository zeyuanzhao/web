"use client"

import Script from "next/script";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sun from "../../public/sun.svg";
import Moon from "../../public/moon.svg";
import Socials from "../Socials";


const ThemeSwitch = () => {
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme == null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  const html = document.getElementsByTagName("html");

  useEffect(() => {
    let startTheme = localStorage.getItem("theme");
    if (startTheme == null) {
      startTheme = "light";
    }
    html[0].classList.add(startTheme);
    document.documentElement.setAttribute("data-theme", startTheme);
 }, []);

  const handleThemeSwitch = () => {
    localStorage.setItem("theme", (localStorage.getItem("theme") === "dark" ? "light" : "dark"));
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "dark");
      html[0].classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      html[0].classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return <>
    <button className="align-middle" onClick={handleThemeSwitch}>
      <Socials logoLight={Sun} logoDark={Moon} logoAlt={"Switch Theme"} logoLink={""} newTab={false}></Socials>
    </button>
  </>
}

export default ThemeSwitch;