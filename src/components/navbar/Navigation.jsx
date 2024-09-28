import { nav } from "@/data/nav"
import {NavLink, useLocation } from "react-router-dom";
const Navigation = () => {
  const location =useLocation()
  return (
    <nav>
      <ul className="flex gap-6 text-primary font-body text-[14px]">
        {nav.map((el) => {
          return <li key={el.id}> <NavLink to={`${el.url}`} className={`${location.pathname ===el.url ? "text-accent":"" } hover:text-accent transition duration-300`}>{el.name}</NavLink></li>;
        })}
      </ul>
       
    </nav>
  )
}

export default Navigation
