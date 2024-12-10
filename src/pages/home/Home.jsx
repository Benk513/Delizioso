import Banner from "@/components/banner/Banner"
import Welcome from "@/components/welcome/Welcome"
import Menu from "@/components/menu/Menu"
import Team from "@/components/team/Team"
const Home = () => {
  return (   
    <main>
    {/* <div className="w-[1162px] mx-auto  "> */}
      <div>
      <Banner />
      <Welcome />
      <Menu />
            
      <Team />          
    </div>
    </main>
  
  )
}

export default Home
