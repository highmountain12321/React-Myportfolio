import React, { Component } from "react";
import Contactform from "./form/Contactform";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Auxillary from "../../../hoc/Auxillary";
import { Spring } from "react-spring/renderprops";
import axios from "../../../axiosinstance";
import Classes from "./Contact.module.css";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      error: {},
      valid: true,
      focus: {
        namefocus: "",
        emailfocus: "",
        phonefocus: "",
      },
      data: [],
    };
  }
  handleChange = (e) => {
    //console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
    const { name, value } = e.target;
    const focus = this.state.focus;
    switch (name) {
      case "name":
        focus.namefocus =
          value.length < 4 ? "Full name must be 4 character long." : true;
        break;
      case "email":
        focus.emailfocus =
          value.indexOf("@") === -1 || value.indexOf(".") === -1
            ? "Email should be @gmail.com form."
            : true;
        break;
      case "phone":
        if (value.length !== 10) {
          focus.phonefocus = "Number should be equal to 10.";
        } else if (Math.sign(value) === -1) {
          focus.phonefocus = "Number cannot have - sigh.";
        } else {
          focus.phonefocus = true;
        }
        break;
      default:
        break;
    }
    this.setState({ focus, [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, valid } = this.state;

    if (name === "") {
      return this.setState({
        error: { nameerror: "Please enter the name, " },
        valid: false,
      });
    } else if (email === "") {
      return this.setState({
        error: { emailerror: "Please enter the valid email address" },
        valid: false,
      });
    } else if (phone === "") {
      return this.setState({
        error: { phoneerror: "Please enter the valid phone number, " },
        valid: false,
      });
    } else if (phone.length !== 10) {
      return this.setState({
        error: { phoneerror: "Please enter the valid phone number, " },
        valid: false,
      });
    } else {
      this.setState({ valid: true });
    }
    if (valid === true) {
      let data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      };
      axios
        .post("/contact.json", data)
        .then((res) => {
          toast.success("Thank You for Contacting");
        })
        .catch((error) => {
          console.log(error);
        });
      // this.setState({ data: [data] });
      this.setState({ error: {}, name: "", email: "", phone: "" });
      this.setState({ focus: { name: "", email: "", phone: "" } });
    }
  };
  render() {
    const { namefocus, emailfocus, phonefocus } = this.state.focus;
    let buttondisabled = (
      <button type="submit" disabled className="btn btn-primary">
        Submit
      </button>
    );
    if (namefocus === true && emailfocus === true && phonefocus === true) {
      buttondisabled = (
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      );
    }
    return (
      <Auxillary>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 500 }}
        >
          {(props) => (
            <div style={props} className={Classes.container}>
              <div className={Classes.content}>
                <div className={Classes.contact}>
                  <h2>Get In touch</h2>
                  <span>contact Me</span>
                </div>
                <div className={Classes.contact_form}>
                  <Contactform
                    error={this.state.error}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    name={this.state.name}
                    email={this.state.email}
                    phone={this.state.phone}
                    focus={this.state.focus}
                    buttondisabled={buttondisabled}
                  />
                </div>
              </div>
            </div>
          )}
        </Spring>

        <ToastContainer />
      </Auxillary>
    );
  }
}

export default Contact;
