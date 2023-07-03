import { useEffect, useState } from "react";


export default function useThemeSwitcher() {

  const preferDarkQuery = "(prefer-color-scheme: dark)"

  const [ mode, setMode ] = useState(window.localStorage.getItem("@theme"));

  useEffect(() => {

    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("@theme");

    function handleChange() {
      if(userPref){
        let check = userPref === "dark" ? "dark" : "light";
        setMode("check");

        if(mode === "dark"){
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
      }

      if(mode === "dark"){
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);

  }, [])

  useEffect(() => {

    if(mode === "dark"){
      window.localStorage.setItem("@theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("@theme", "light");
      document.documentElement.classList.remove("dark");
    }

  }, [mode])

 return [mode, setMode];
}