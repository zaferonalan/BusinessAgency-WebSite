import About from "./components/About"
import Hero from "./components/Hero"
import NavigationBar from "./components/NavigationBar"

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App