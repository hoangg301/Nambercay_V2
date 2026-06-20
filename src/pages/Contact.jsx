import { CONTACT, socialLinks } from "../data/contact";
import { FaFacebook, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "../styles/Contact.css";


function Contact() {
  const icons = {
    facebook: <FaFacebook className="fb-icon" />,
    instagram: <FaInstagram className="ig-icon" />,
    tiktok: <SiTiktok className="tt-icon" />,
    odaybanbexinh: <SiTiktok className="tt-icon" />
  };

  return (
    <main className="contact">
      <section className="contact-header">
        <h1 className="contact-title">
          Liên Hệ Nambercay  
        </h1>
        <p className="contact-subtitle">
          Ngoài những tác phẩm được giới thiệu trên website, Nambercay vẫn thường xuyên cập nhật nhiều mẫu Terrarium mới trên các nền tảng mạng xã hội dưới đây.
        </p>
      </section>    

      <section className="messenger">
        <div className="messenger-card">
          <div className="messenger-icon">
            <FaFacebookMessenger />
          </div>
          <h2>
            Messenger
          </h2>
          <p>
            Kênh liên hệ chính để tư vấn và đặt hàng.
          </p>
          <a
            href={CONTACT.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="messenger-btn"
          >
            Liên Hệ Ngay
          </a>
        </div>  
      </section> 

      <section className="social">
        <h2 className="social-title">
          Khám phá thêm
        </h2>
        <div className="social-grid">
          {socialLinks.map((social) => ( 
            <div 
              key={social.id}
              className="social-card"
            >
              <div className="social-card-header">
                <div className="social-card-title">
                  <div className="social-icon">
                    {icons[social.id]}
                  </div>
                  <h3 className="social-name">
                    {social.name}
                  </h3>
                </div>

                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Truy cập →
                </a>
              </div>
              <p className="social-description">
                {social.description}
              </p>   
            </div>      
          ))}
        </div>
      </section> 
    </main>
  );
}

export default Contact;
