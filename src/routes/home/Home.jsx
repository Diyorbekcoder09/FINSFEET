import "./Home.css"
import section_img from "../../assets/images/white-concrete-building-1838640.png"
import { IoIosArrowForward } from "react-icons/io";
import card_img1 from "../../assets/images/1-icon.png"
import card_img2 from "../../assets/images/2-icon.png"
import card_img3 from "../../assets/images/3-icon.png"
import card_img4 from "../../assets/images/4-icon.png"
import sec_imgs from "../../assets/images/close-up-photography-of-man-wearing-sunglasses-1212984.png"
import person1 from "../../assets/images/1-person.png"
import person2 from "../../assets/images/2-person.png"
import person3 from "../../assets/images/3-person.png"
import person4 from "../../assets/images/4-person.png"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import firma1 from "../../assets/images/logo_000.png"
import firma2 from "../../assets/images/Logo 1.png"
import firma3 from "../../assets/images/Logo 2.png"
import firma4 from "../../assets/images/Logo 3.png"
import firma5 from "../../assets/images/Logo 4.png"
import firma6 from "../../assets/images/Logo 5.png"
import d_person from "../../assets/images/person55.png"


const Home = () => {
  return (
    <div className="container2">
      <div className="main_bg">
        <p className="main_text">Posted on startup</p>
        <p className="main_text2">Step-by-step guide to choosing great font pairs</p>
        <p className="main_text3">By <span>James West</span>  |  May 23, 2022 </p>
        <p className="main_text4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

        <button className="main_btn">Read More  <IoIosArrowForward /></button>


      </div>
      <div className="main_texts">
        <p className="main_text5">Featured Post</p>
        <div className="p">
          <p className="main_text5">All Posts</p>
          <p className="main_text6">View All</p>
        </div>
      </div>

      <section className="section">
        <div className="section_card">
          <img src={section_img} alt="" className="section_img" />
          <p className="s_card_text">By John Doe   l   May 23, 2022</p>
          <p className="s_card_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <p className="s_card_text3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button className="section_card_btn">Read More <IoIosArrowForward /> </button>
        </div>
        <div className="section_title">
          <div className="section_title_group">
            <p className="s_card_text4">By John Deo   l   Aug 23, 2021 </p>
            <p className="section_title_text">8 Figma design systems that you can download for free today.</p>
          </div>
          <div className="section_title_group">
            <p className="s_card_text4">By John Deo   l   Aug 23, 2021 </p>
            <p className="section_title_text">8 Figma design systems that you can download for free today.</p>
          </div>
          <div className="section_title_group">
            <p className="s_card_text4">By John Deo   l   Aug 23, 2021 </p>
            <p className="section_title_text">8 Figma design systems that you can download for free today.</p>
          </div>
          <div className="section_title_group">
            <p className="s_card_text4">By John Deo   l   Aug 23, 2021 </p>
            <p className="section_title_text">8 Figma design systems that you can download for free today.</p>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section_color"></div>
        <div className="section_title_bg">
          <div className="section_title2">
            <p className="bg_text">ABOUT US</p>
            <p className="bg_text2">We are a community of content writers who share their learnings</p>
            <p className="bg_text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="bg_text4">Read More <IoIosArrowForward /> </p>
          </div>
          <div className="section_title2">
            <p className="bg_text">Our mision</p>
            <p className="bg_text5">Creating valuable content for creatives all around the world</p>
            <p className="bg_text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
      <section className="section3">
        <p className="out">Choose A Catagory</p>
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
      <section>
        <div className="section_imgs">
          <img src={sec_imgs} alt="" className="sec_img" />
          <div className="section_shadov">
            <p className="shadov_text">Why we started </p>
            <p className="shadov_text2">It started out as a simple idea and evolved into our passion</p>
            <p className="shadov_text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className="section_card_btn">Discover our story <IoIosArrowForward /></button>
          </div>
        </div>
      </section>
      <section>
        <p className="out">List of Authors</p>
        <div className="s_cards">
          <div className="person_card">
            <img src={person1} alt="" className="person_img" />
            <p className="person_text">Floyd Miles</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className="person_card">
            <img src={person2} alt="" className="person_img" />
            <p className="person_text">Dianne Russell</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className="person_card">
            <img src={person3} alt="" className="person_img" />
            <p className="person_text">Jenny Wilson</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className="person_card">
            <img src={person4} alt="" className="person_img" />
            <p className="person_text">Leslie Alexander</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
        </div>
      </section>
      <section>
        <p className="p2">We are</p>
        <div className="firmalar">
          <img src={firma1} alt="" className="firma" />
          <img src={firma2} alt="" className="firma" />
          <img src={firma3} alt="" className="firma" />
          <img src={firma4} alt="" className="firma" />
          <img src={firma5} alt="" className="firma" />
          <img src={firma6} alt="" className="firma" />
        </div>
      </section>
      <section className="section_bg2">
        <div className="section_bg2_title">
          <p className="out2">TESTIMONIALs</p>
          <p className="out3">What people say about our blog</p>
          <p className="out4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="chiziq"></div>
        <div className="section_bg2_title">
          <p className="out5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="per">
            <img src={d_person} alt="" className="d_person" />
            <div className="pt">
              <p className="out6">Jonathan Vallem</p>
              <p className="out7">New york, USA</p>
            </div>
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

export default Home