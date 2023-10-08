import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/parent/Home.jsx"
import Intro from "./components/parent/Intro.jsx"
import Class from "./components/parent/Class.jsx"
import Course from "./components/parent/Course.jsx"
import AboutUs from "./components/parent/About_Us.jsx"
import Gallery from "./components/parent/Gallery.jsx"
import Blog from "./components/parent/Blog.jsx"
import Contact from "./components/parent/Contact.jsx"
import Tos from "./components/parent/tos/Tos.jsx"
import Privacy from "./components/parent/privacy/Privacy.jsx"

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route index element={<Home/>}/>
					<Route path="intro" element={<Intro/>}/>
					<Route path="class" element={<Class/>}/>
						<Route path="course" element={<Course/>}/>
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
