import React from "react";
import { useState } from "react";
import "./form.scss";
import JoiaIcon from "../../img/joia.png";

const Forms = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [change, setChange] = useState(true);

  const mudanca = () => {
    if (email.length == 0 || phone.length == 0) {
      setError(true);
    } else {
      setChange(false);
    }
    console.log(change);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setError(false);
    setChange(true);
  };

  const mudancaReturn = () => {
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
  };

  return (
    <div>
      <section className="formulario">
        {change ? (
          <>
            <h1>Saia na frente e garanta o seu</h1>
            <p>
              Escolha o modelo que você deseja e receba ofertas imperdíveis em
              primeira mão.
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              {error && email.length <= 0 ? (
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              ) : (
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              )}
              {error && phone.length <= 0 ? (
                <label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>
              ) : (
                <label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
              )}
              <label>
                <textarea
                  type="text"
                  name="mensagem"
                  placeholder="Mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <label>
                <input type="date" name="date" />
              </label>
              <button type="submit" onClick={mudanca} className="btn">
                Garanta Agora
              </button>
            </form>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <section className="formulario__second">
              <h1>Tudo Certo</h1>
              <div>
                <p className="formulario__p">Dados enviados com sucesso!</p>
                <p>Entraremos em contato para confirmar seu test drive!</p>
              </div>

              <div>
                <img src={JoiaIcon} alt="" />
              </div>
            </section>
            <button type="submit" onClick={mudancaReturn} className="btn-sub">
              Retornar
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default Forms;
