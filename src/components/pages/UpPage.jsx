import React from "react";
import "./page.scss";
import Form from "../form/Forms";
import Footer from "../footer/Footer";
import Car from "../../img/car.png";
import Up from "../../img/up.png";

const UpPage = () => {
  const { footer__two } = {
    footer__two:
      "Imagens ilustrativas. Novo Up Move com bônus de R$ 3.000,00 e financiamento com taxa 0% valido para entrada de 60% e saldo em 24 meses. Válido até 31/10/2018.",
  };

  return (
    <article>
      <div className="main-total">
        <article className="main-car">
          <section className="main-car__info">
            <div className="main-car__title">
              <p>
                <span>UP!</span> MOVE
              </p>
            </div>
            <div className="main-car__bonus">
              <p>
                BÔNUS DE <span>R$ 3.000,00</span> + TAXA <span>0%</span>
              </p>
            </div>
          </section>
          <section className="main-car__image">
            <p className="main-car__text">SALDO EM 24x</p>
            <img className="main-car__car" src={Car} alt="" />
            <img className="main-car__up" src={Up} alt="" />
          </section>
        </article>
        <Form />
      </div>
      <Footer text={footer__two} />
    </article>
  );
};

export default UpPage;
