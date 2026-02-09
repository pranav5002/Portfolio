import { Navbar } from "@/layout/Navbar";
import{Hero} from "@/sections/Hero";
import{About} from "@/sections/About";
import{Projects} from "@/sections/Projects"
import{Experience} from "@/sections/Experience"
import{Contact} from "@/sections/Conatct"
import { Footer } from "./layout/Footer";
import { Certificate } from "./sections/Certificates";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Certificate/>
        {/* <Experience/> */}
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App