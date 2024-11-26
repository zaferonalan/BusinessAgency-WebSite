import About from "./components/About"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default App