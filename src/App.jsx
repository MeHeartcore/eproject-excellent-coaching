import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { useLayoutEffect } from 'react'

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

import Article1 from "./components/child/article/Artical_1.jsx"
import Article2 from "./components/child/article/Artical_2.jsx"
import Article3 from "./components/child/article/Artical_3.jsx"
import Article4 from "./components/child/article/Artical_4.jsx"
import Article5 from "./components/child/article/Artical_5.jsx"
import Article6 from "./components/child/article/Artical_6.jsx"
import News1 from "./components/child/content_of_news/news1.jsx"
import News2 from "./components/child/content_of_news/news2.jsx"
import News3 from "./components/child/content_of_news/news3.jsx"
import News4 from "./components/child/content_of_news/news4.jsx"
import News5 from "./components/child/content_of_news/news5.jsx"
import News6 from "./components/child/content_of_news/news6.jsx"


import "./App.css"

import Anchor from "./components/child/anchor/Anchor.jsx"

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <div>
      <BrowserRouter>
			<Anchor/>
			<Wrapper/>
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
							<Route path="article1" element={<Article1/>}/>
							<Route path="article2" element={<Article2/>}/>
							<Route path="article3" element={<Article3/>}/>
							<Route path="article4" element={<Article4/>}/>
							<Route path="article5" element={<Article5/>}/>
							<Route path="article6" element={<Article6/>}/>
							<Route path="news1" element={<News1/>}/>
							<Route path="news2" element={<News2/>}/>
							<Route path="news3" element={<News3/>}/>
							<Route path="news4" element={<News4/>}/>
							<Route path="news5" element={<News5/>}/>
							<Route path="news6" element={<News6/>}/>


					<Route path="contact" element={<Contact/>}/>
					<Route path="tos" element={<Tos/>}/>
					<Route path="privacy" element={<Privacy/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  )
}

export default App
