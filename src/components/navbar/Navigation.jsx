import { nav } from "@/data/nav"
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-primary font-body text-[14px]">
        {nav.map((el) => {
          return <li key={el.id}> <Link to={`${el.url}`}>{el.name}</Link></li>;
        })}
      </ul>
       
    </nav>
  )
}

export default Navigation
