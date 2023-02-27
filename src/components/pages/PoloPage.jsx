import React from "react";
import "./page.scss";
import Car from "../../img/car.png";
import Polo from "../../img/polo.png";
import Footer from "../footer/Footer";
import Form from "../form/Forms";

const PoloPage = () => {
  const { footer__one } = {
    footer__one:
      "Imagens ilustrativas. Novo Polo 1.0 MPI a partir de R$ 49.990,00 e financiamento com taxa 0% valido para entrada de 60% e saldo em 24 meses. Válido até 31/10/2018.",
  };

  return (
    <article>
      <div className="main-total">
        <article className="main-car">
          <section className="main-car__info">
            <div className="main-car__title">
              <p>
                <span>POLO</span> 1.0 MPI
              </p>
            </div>
            <div className="main-car__bonus">
              <p>
                A PARTIR DE <span>R$ 49.990,00</span> + TAXA <span>0%</span>
              </p>
            </div>
          </section>
          <section className="main-car__image">
            <p className="main-car__text">TODA LINHA</p>
            <img className="main-car__car" src={Car} alt="" />
            <img className="main-car__polo" src={Polo} alt="" />
          </section>
        </article>
        <Form />
      </div>
      <Footer text={footer__one} />
    </article>
  );
};

export default PoloPage;
