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
          <label style={{maxWidth: "50ch", textAlign: "center"}}>
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
            <div className="newsletter-grid">
                <div className="newsletter-grid">
                    <p>Wir informieren Sie über Neuigkeiten, Ausstellungen und Publikationen zu Leo Leonhard.</p>
                    <p>Einfach hier anmelden:</p>
                </div>
              <form
                  name="subscribeForm"
                  method="POST"
                  id="subscribe-form"
                  className="newsletter-grid"
                  /* className="subscribe-form" */
                /*   style={formStyle} */
                  onSubmit={this.handleSubmit}
              >
                 <div className="message" dangerouslySetInnerHTML={{__html: this.state.message}} />

                
            {/* 
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
            */}

                        <div class="input-group mb-3">
                            
                            <input 
                                type="email" 
                                name="email" 
                                class="form-control"  
                                style={{border: "2px solid #589AAD"}} 
                                placeholder="Email" 
                                aria-label="Email" 
                                aria-describedby="button-addon" 
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            
                            <button 
                                class="btn btn-outline-secondary btn-newsletter " 
                                type="submit" 
                                id="button-newsletter" 
                                >
                                    <FontAwesomeIcon 
                                        icon={faPlay}  
                                        className="icon-newsletter"
                                    />
                            </button>
                        </div>
            
                  <Checkbox/>
              
              </form>
            
              </div>
                
        );
    }
}
