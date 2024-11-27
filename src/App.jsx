import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App