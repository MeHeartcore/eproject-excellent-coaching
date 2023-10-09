import BLOG1 from "../child/blog/Blog1.jsx";
import BLOG2 from "../child/blog/Blog2.jsx";
import NavigationBar from "../child/navigation_bar/Navigation_Bar.jsx"
import Footer from "../child/footer/Footer.jsx";

const Blog = () => {
  return (
    <div className="blog">
			<NavigationBar />
      <BLOG1 />
      <BLOG2 />
			<Footer />
    </div>
  );
};

export default Blog;
