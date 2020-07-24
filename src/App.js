import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Stats from "./components/stats/Stats";
import Modal from "./components/modal/Modal";
import stylesMainForm from "./components/form/form.module.css";
import stylesModalForm from "./components/form/formModal.module.css";

class App extends Component {
  state = {
    showForm: false
  };

  showForm = event => {
    if (event.type === "mouseleave" && event.target.tagName !== "INPUT") {
      this.setState({ showForm: true });
    }
  };

  closeModal = () => {
    this.setState(state => ({ showForm: !state.showForm }));
  };

  closeModalMainForm = () => {
    this.setState({ showForm: false });
  };
  render() {
    return (
      <div onMouseLeave={this.showForm}>
        {this.state.showForm && (
          <Modal
            closeModal={this.closeModal}
            form={
              <Form styles={stylesModalForm} closeModal={this.closeModal} />
            }
          />
        )}
        <div className="container">
          <Header />
          <Player />
          <Form styles={stylesMainForm} closeModal={this.closeModalMainForm} />
        </div>
        <Footer />
        {window.innerWidth > 1279 && <Stats />}
      </div>
    );
  }
}

export default App;
