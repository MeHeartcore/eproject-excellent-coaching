import BLOG1 from "../child/blog/Blog1.jsx";
import BLOG2 from "../child/blog/Blog2.jsx";
import Header from "../child/header/Header.jsx";
import Footer from "../child/footer/Footer.jsx";

const Blog = () => {
  return (
    <div className="blog">
			<Header />
      <BLOG1 />
      <BLOG2 />
			<Footer />
    </div>
  );
};

export default Blog;
