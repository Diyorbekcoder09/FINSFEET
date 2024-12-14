import "./About.css"
import rang from "../../assets/images/rang.png"
import rang2 from "../../assets/images/aylana.png"
import qollar from "../../assets/images/qo'llar.png"
import bollar from "../../assets/images/bollar.png"
import person1 from "../../assets/images/1-person.png"
import person2 from "../../assets/images/2-person.png"
import person3 from "../../assets/images/3-person.png"
import person4 from "../../assets/images/4-person.png"
import person5 from "../../assets/images/dumoloq_rasm1.png"
import person6 from "../../assets/images/dumoloq_rasm2.png"
import person7 from "../../assets/images/dumoloq_rasm3.png"
import person8 from "../../assets/images/dumoloq_ras,m4.png"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";


const About = () => {
  return (
    <div className='container_about'>
      <main className="main_about">
        <div className="about">
          <div className="about_shadov">
            <p className="main_a_text">ABOUT US</p>
            <p className="main_a_text2">We are a team of content writers who share their learnings</p>
          </div>
          <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="main_about_img">
          <div className="kak">
            <div className="kak_guruh">
              <div className="kak_title">
                <p className="kak_text">12+</p>
                <p className="kak_text2">Blogs Published</p>
              </div>
              <div className="kak_title">
                <p className="kak_text">18K+</p>
                <p className="kak_text2">Views on Finsweet</p>
              </div>
              <div className="kak_title">
                <p className="kak_text">30K+</p>
                <p className="kak_text2">Total active Users</p>
              </div>
            </div>
          </div>
          <div className="liner"></div>
        </div>
      </main>
      <section className="about_section">
        <div className="guruh3">
          <p className="dad">Our mision</p>
          <p className="dad1">Creating valuable content for creatives all around the world</p>
          <p className="dad2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
        </div>
        <div className="guruh3">
          <p className="dad">Our Vision</p>
          <p className="dad1">A platform that empowers individuals to improve</p>
          <p className="dad2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
        </div>
      </section>
      <section className="guruh4">
        <div className="yozuv">
          <p className="dad3">Our team of creatives</p>
          <p className="dad4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <p className="dad5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <img src={rang} alt="" className="rang" />
        <img src={qollar} alt="" className="yozuv_img" />
      </section>
      <section className="guruh4">
        <img src={bollar} alt="" className="yozuv_img" />
        <img src={rang2} alt="" className="aylana_rang" />
        <div className="yozuv">
          <p className="dad3">Why we started this Blog</p>
          <p className="dad4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <p className="dad5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
      </section>
      <section>
        <p className="out">List of Authors</p>
        <div className="s_cards10">
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
          <div className="person_card">
            <img src={person5} alt="" className="person_img" />
            <p className="person_text">Guy Hawkins</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className="person_card">
            <img src={person6} alt="" className="person_img" />
            <p className="person_text">Eleanor Pena</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className="person_card">
            <img src={person7} alt="" className="person_img" />
            <p className="person_text">Robert Fox</p>
            <p className="person_text2">Content Writer @Company</p>
            <div className="person_linklar">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
          </div> <div className="person_card">
            <img src={person8} alt="" className="person_img" />
            <p className="person_text">Jacob Jones</p>
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
      <section className="sed">
        <p className="out8">Join our team to be a part of our story</p>
        <p className="out9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <button className="sec_btn">Join Now</button>
      </section>
    </div>
  )
}

export default About