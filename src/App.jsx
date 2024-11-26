import About from "./components/About"
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
    </div>
  )
}

export default App