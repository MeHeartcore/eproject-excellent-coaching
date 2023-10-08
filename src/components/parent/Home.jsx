import Header from "../child/header/Header.jsx"
import First from "../child/landing/First.jsx"
import Second from "../child/landing/Second.jsx"
import Footer from "../child/footer/Footer.jsx"

function Home() {
	return (
		<div className="home-container">
			<Header/>
			<Second/>
			<First/>
			<Footer/>
		</div>
	)
}

export default Home