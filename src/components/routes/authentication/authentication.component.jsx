import React from "react";
import "./authentication.styles.scss";
import Button from "../../button/button.component";
import { signInWithGooglePopup } from "../../../utilities/firebase/firebase.utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const AuthenticationPage = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div className="form_container">
      <div className="form_col">
        <form action="" className="signin">
          <label htmlFor="email">מייל</label>
          <input name="email" type="text" className="form_input" />
          <label htmlFor="">סיסמא</label>
          <input
            autoComplete="off"
            name="password"
            type="password"
            className="form_input"
          />

          <div className="button_group">
            <button type="button" className="signin_google">
              <FontAwesomeIcon icon={faGoogle} />
              -התחברו עם
            </button>
            <Button text="התחבר" class="primary-button"></Button>
          </div>
        </form>
      </div>
      <div className="form_col">
        <h2 className="signin_title">
          התחברות לאיזור
          <br /> האישי
        </h2>
        <p>התחברו לאיזור האישי שלכם, הכל במקום אחד</p>
      </div>
    </div>
  );
};

export default AuthenticationPage;
