import React from "react";
import { multilanguage } from "redux-multilanguage";

function Newsletter({ strings }) {
  return (
    <div className="newsletter">
      <div className="container">


        <div className="wrapper">

        <h5 className="title" >
          {strings['subscribe_newsletter']}
        </h5>

        <p className="text-content">
        {strings['subscribe_newsletter_content']}
        </p>

        <div className="form-container">
          <form action="" method="POST">
            <input
              type="text"
              placeholder={strings['enter_email']}
              required
              className="input"
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
