import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import LocaleIcon from "../../img/locale.png";
import EmailIcon from "../../img/email.png";
import PhoneIcon from "../../img/phone.png";

const Footer = ({ text }) => {
  const icons = [
    {
      imagem: LocaleIcon,
      texto: "Av. Vitória, - Vitória - Cep 29000-000",
    },
    {
      imagem: EmailIcon,
      texto: "E-mail: exemplo@loremipsum.com.br",
    },
    {
      imagem: PhoneIcon,
      texto: "Tel (27) 99999-9999",
    },
  ];

  return (
    <>
      <footer className="layout__footer">{text}</footer>
      <footer className="layout__footer-bottom">
        <ul>
          {icons.map((icon) => (
            <li>
              <Link>
                <div>
                  <img src={icon.imagem} alt="" />
                </div>
                <p>{icon.texto}</p>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
