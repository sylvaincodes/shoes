import React, { useState} from "react";
import { multilanguage } from "redux-multilanguage";
import { useToasts } from "react-toast-notifications";

function Newsletter({ strings }) {

  const { addToast } = useToasts();
  const [email, setEmail] = useState("");

  const handleForm = (e) =>{
    e.preventDefault();
    addToast(strings["thanks_for_subscribe"], { appearance: "info" });
  }

  return (
    <div className="newsletter" data-reveal>
      <div className="container">


        <div className="wrapper">

        <h5 className="title" >
          {strings['subscribe_newsletter']}
        </h5>

        <p className="text-content">
        {strings['subscribe_newsletter_content']}
        </p>

        <div className="form-container">
          <form action="" method="POST" onSubmit={ (e) => handleForm(e) } >
            <input
              type="text"
              placeholder={strings['enter_email']}
              required
              className="input"
              onChange={(e) => setEmail(e.target.value) }
            />
            <button type="submit" className="btn-black">
            {strings['signup']}
            </button>
          </form>
        </div>

        <button className="privacy-terms">
        {strings['see_terms_policy']}
        </button>

        </div>
        
      </div>
    </div>
  );
}

export default multilanguage(Newsletter);
