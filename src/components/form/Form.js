import React, { Component } from "react";
//import PropTypes from "prop-types";
import logoOne from "../../assets/icons/main-footer-item-one.png";
import logoTwo from "../../assets/icons/main-footer-item-two.png";
import logoThree from "../../assets/icons/main-footer-item-three.png";
import logoFour from "../../assets/icons/main-footer-item-four.png";
import logoFive from "../../assets/icons/main-footer-item-five.png";
import services from "../../services/services";

class Form extends Component {
  state = {
    username: "",
    email: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, email } = this.state;
    if (username === "" || email === "") {
      return;
    }

    await services.sendNewUser({ name: username, email: email });

    this.clearForm();
    this.props.closeModal();
  };

  clearForm = () => {
    this.setState({ username: "", email: "" });
  };

  render() {
    const { styles } = this.props;

    return (
      <div className={styles.main_form}>
        <form
          className={styles.main_form_container}
          method="post"
          onSubmit={this.handleSubmit}
        >
          <div className={styles.main_form_inputs}>
            <div className={styles.name_input}>
              <i className={styles.name_input_icon}></i>
              <input
                type="text"
                name="username"
                placeholder="Ваше имя"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.email_input}>
              <i className={styles.email_input_icon}></i>
              <input
                type="email"
                name="email"
                placeholder="Ваш актуальный e-mail"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className={styles.main_form_button}>
            <button className={styles.button_yes} type="submit">
              Да, я готов стать на путь к успеху!
            </button>
            <div className={styles.oferta}>
              <input type="checkbox" name="oferta" checked />
              <span>
                Я согласен на обработку персональных данных и получение
                рекламных материалов, и я согласен с{" "}
                <a
                  href="https://obsachfebeadelo.ru/policy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  публичной офертой
                </a>
              </span>
            </div>
          </div>
        </form>
        <div className={styles.logos_wrapper}>
          <ul className={styles.logos_list}>
            <li>
              <img
                src={logoOne}
                alt="лого"
                style={{ width: 162 + "px", height: 32 + "px" }}
              />
            </li>
            <li>
              <img
                src={logoTwo}
                alt="лого"
                style={{ width: 96 + "px", height: 47 + "px" }}
              />
            </li>
            <li>
              <img
                src={logoThree}
                alt="лого"
                style={{ width: 100 + "px", height: 44 + "px" }}
              />
            </li>
            <li>
              <img
                src={logoFour}
                alt="лого"
                style={{ width: 157 + "px", height: 40 + "px" }}
              />
            </li>
            <li>
              <img
                src={logoFive}
                alt="лого"
                style={{ width: 62 + "px", height: 62 + "px" }}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

//Form.propTypes = {};

export default Form;
