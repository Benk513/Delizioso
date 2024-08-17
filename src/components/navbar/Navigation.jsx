import { nav } from "@/data/nav"

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-primary font-body text-lg">
        {nav.map((el) => {
          return <li key={el.id}> {el.name} </li>;
        })}
      </ul>
       
    </nav>
  )
}

export default Navigation
