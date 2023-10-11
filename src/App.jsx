import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/parent/Home.jsx"
import Intro from "./components/parent/Intro.jsx"
import Class from "./components/parent/Class.jsx"
import Yoga from "./components/parent/Yoga.jsx"
import Gym from "./components/parent/Gym.jsx"
import Zumba from "./components/parent/Zumba.jsx"
import Cycling from "./components/parent/Cycling.jsx"
import Hiit from "./components/parent/Hiit.jsx"
import AboutUs from "./components/parent/About_Us.jsx"
import Gallery from "./components/parent/Gallery.jsx"
import Blog from "./components/parent/Blog.jsx"
import Contact from "./components/parent/Contact.jsx"
import Tos from "./components/parent/tos/Tos.jsx"
import Privacy from "./components/parent/privacy/Privacy.jsx"
import Join from "./components/parent/Join.jsx"

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route index element={<Home/>}/>
						<Route path="join" element={<Join/>}/>
					<Route path="intro" element={<Intro/>}/>
					<Route path="class" element={<Class/>}/>
						<Route path="yoga" element={<Yoga/>}/>
						<Route path="gym" element={<Gym/>}/>
						<Route path="zumba" element={<Zumba/>}/>
						<Route path="cycling" element={<Cycling/>}/>
						<Route path="hiit" element={<Hiit/>}/>
					<Route path="about-us" element={<AboutUs/>}/>
						<Route path="gallery" element={<Gallery/>}/>
						<Route path="blog" element={<Blog/>}/>
					<Route path="contact" element={<Contact/>}/>
					<Route path="tos" element={<Tos/>}/>
					<Route path="privacy" element={<Privacy/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  )
}

export default App
