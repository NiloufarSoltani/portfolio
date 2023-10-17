import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

import ContactItem from "./ContactItem";
import Row from "./UI/Row";
import classes from "./Contact.module.css";
import Title from "./UI/Title";

const Contact = () => {
  return (
    <div className={classes.contact} id="contact">
      <Row className={classes['contact-row']}>
        <Title firstTitle='Contact' secondTitle='Convertation' thirdTitle='Start' />
          <div className={classes.links}>
            <ContactItem
              title="Phone Number"
              icon={<FaPhoneAlt />}
              detail="(+1) 416 882 8435"
            />
            <ContactItem
              title="Email"
              icon={<MdEmail />}
              detail="niloufarsoltani1993@gmail.com"
            />
            <ContactItem
              title="Github"
              icon={<FaGithub />}
              detail={
                <a href="https://github.com/NiloufarSoltani">
                  www.github.com/NiloufarSoltani
                </a>
              }
            />
            <ContactItem
              title="Linkedin"
              icon={<FaLinkedin />}
              detail={
                <a href="https://www.linkedin.com/in/niloufarsoltani1993">
                  www.linkedin.com/in/niloufarsoltani1993
                </a>
              }
            />
            <ContactItem
              title="Address"
              icon={<MdLocationOn />}
              detail="395 Bloor Street E, Toronto, Canada"
            />
          </div>
      </Row>
    </div>
  );
};

export default Contact;
