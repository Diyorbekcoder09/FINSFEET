import "./Contact.css"

const Contact = () => {
  return (
    <div className='container_c'>

      <p className="contact_text">Contact us</p>
      <p className="contact_text1">Let’s Start a Conversation</p>
      <p className="contact_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      <div className="contact_card">
        <div className="contact_card_title">
          <p className="contact_card_text">Working hours</p>
          <br />
          <hr />
          <p className="contact_card_text1">Monday To Friday
            <br />
            9:00 AM to 8:00 PM
          </p>
          <p className="contact_card_text2">Our Support Team is available 24/7</p>
        </div>
        <div className="contact_card_title">
          <p className="contact_card_text">Contact Us</p>
          <br />
          <hr />
          <p className="contact_card_text1">020 7993 2905</p>
          <p className="contact_card_text2">hello@finsweet.com</p>
        </div>
      </div>
      <form className="contact_form">
        <input type="text" className="contact_input" required placeholder="Full Name" />
        <input type="text" className="contact_input2" required placeholder="Your Email" />
        <select className="contact_select">
          <option value="Query Related  ">Query Related  </option>
          <option value="contact_rolc">contact_rolc</option>
          <option value="" Full Name>Full Name</option>
        </select>
        <textarea name="" id="" rows="8" cols="112" className="textarea">Message</textarea>
        <button className="contact_btn">Send Message</button>
      </form>
    </div>
  )
}

export default Contact