import React from "react";
import { Link } from "gatsby";
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


const Checkbox  = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              required="required"
              style={{marginRight: "0.4em"}}
            />
            <span style={{fontSize: "0.8em"}}>Mit dem Absenden dieser Anmeldung, bestätigst Du, unsere <Link style={{textDecoration: "none", color: "#589AAD"}} to="impressum/#datenschutzerklaerung">Datenschutzhinweise</Link> gelesen zu haben.</span>
          </label>
        </div>
    );
};

export default class Newsletter extends React.Component {
    state = {
        email: '',
        message: '',
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email);
        this.setState({ message: result.msg });
    };

    render() {
        return (
            <div className="d-flex flex-column align-items-center" style={{margin: "1em auto"}}>
              <p style={{padding: "0", margin: "0"}}>Wir informieren Sie über Neuigkeiten, Ausstellungen und Publikationen zu Leo Leonhard.</p>
              <p >Einfach hier anmelden:</p>
		      <form
                name="subscribeForm"
                method="POST"
                id="subscribe-form"
                className="subscribe-form"
                onSubmit={this.handleSubmit}
                style={{margin: "0 0 0 30%"}}
              >
		        <div className="message" dangerouslySetInnerHTML={{__html: this.state.message}} />
                <div className="form-row mb-1">
                  <label>
		            <input
    	              className="subscribe-email"
	                  type="email"
	                  name="email"
                      style={{width: "99%", border: "2px solid #589AAD"}}
	                  placeholder="Email"
	                  value={this.state.email}
	                  onChange={this.handleInputChange}
		            />
                  </label>
		          <button type="submit" style={{background: "#589AAD", border: "2px solid #589AAD"}}>
                    <FontAwesomeIcon icon={faPlay}  style={{backgorund: "#589AAD", color: "#FBFBFD"}}/>
                  </button>
                </div>
                <Checkbox/>
		      </form>
            </div>
        );
    }
}
