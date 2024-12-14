import "./Blog.css"
import main_img from "../../assets/images/main_img.png"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import rasm from "../../assets/images/cards_img1.png"
import rasm2 from "../../assets/images/card_img2.png"
import rasm3 from "../../assets/images/card_img3.png"
import rasm4 from "../../assets/images/card_img4.png"
import card_img1 from "../../assets/images/1-icon.png"
import card_img2 from "../../assets/images/2-icon.png"
import card_img3 from "../../assets/images/3-icon.png"
import card_img4 from "../../assets/images/4-icon.png"
import rasm5 from "../../assets/images/cards_img1.png"


const Blog = () => {
  return (
    <div className="container">
      <div className="blog_bg">
        <main className="main_blog">
          <div className="main_title">
            <p className="main_texta">Featured Post</p>
            <p className="main_texta2">Step-by-step guide to choosing great font pairs</p>
            <p className="main_texta3">By John Doe   l   May 23, 2022 </p>
            <p className="main_texta4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button className="main_btn">Read More <IoIosArrowForward /></button>
          </div>
          <img src={main_img} alt="" className="main_imgg" />
        </main>
      </div>
      <section className="post">
        <p className="post_text">All posts</p>
        <hr />
        <div className="section_text_group">
          <img src={rasm} alt="" className="rasm" />
          <div className="text_group">
            <p className="pech">Startup</p>
            <p className="pech2">Design tips for designers that cover everything you need</p>
            <p className="pech3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className="section_text_group">
          <img src={rasm2} alt="" className="rasm" />
          <div className="text_group">
            <p className="pech">BUSINESS</p>
            <p className="pech2">How to build rapport with your web design clients</p>
            <p className="pech3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className="section_text_group">
          <img src={rasm3} alt="" className="rasm" />
          <div className="text_group">
            <p className="pech">Startup</p>
            <p className="pech2">Logo design trends to avoid in 2022</p>
            <p className="pech3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className="section_text_group">
          <img src={rasm4} alt="" className="rasm" />
          <div className="text_group">
            <p className="pech">TECHNOLOGY</p>
            <p className="pech2">8 Figma design systems you can download for free today</p>
            <p className="pech3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>
        <div className="section_text_group">
          <img src={rasm5} alt="" className="rasm" />
          <div className="text_group">
            <p className="pech">ECONOMY</p>
            <p className="pech2">Font sizes in UI design: The complete guide to follow</p>
            <p className="pech3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          </div>
        </div>

        <div className="guruh">
          <div className="arrow">

            <p className="arrow_text"> < IoIosArrowBack /> Prev </p>
          </div>
          <div className="arrow">
            <p className="arrow_text2">Next  <IoIosArrowForward /></p>

          </div>

        </div>

        <p className="pech4">All Categories</p>
        <div className="s_cards">
          <div className="s_card">
            <img src={card_img1} alt="" className="card_img" />
            <div className="section_card_text">Business</div>
            <p className="section_card_text2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="s_card">
            <img src={card_img2} alt="" className="card_img" />
            <div className="section_card_text">Startup</div>
            <p className="section_card_text2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="s_card">
            <img src={card_img3} alt="" className="card_img" />
            <div className="section_card_text">Economy</div>
            <p className="section_card_text2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="s_card">
            <img src={card_img4} alt="" className="card_img" />
            <div className="section_card_text">Technology</div>
            <p className="section_card_text2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
      </section>
      <section className="sed">
        <p className="out8">Join our team to be a part of our story</p>
        <p className="out9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button className="sec_btn">Join Now</button>
      </section>
    </div>
  )
}

export default Blog