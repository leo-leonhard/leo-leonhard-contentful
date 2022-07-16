import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default class Newsletter extends React.Component {
    state = {
        email: '',
        message: ''
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
		    <form
              name="subscribeForm"
              method="POST"
              id="subscribe-form"
              className="subscribe-form"
              onSubmit={this.handleSubmit}
            >
		      <div className="message" dangerouslySetInnerHTML={{__html: this.state.message}} />
              <div className="form-row" style={{display: "flex"}}>
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
		    </form>
        );
    }
}
