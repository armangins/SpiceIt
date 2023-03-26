import React from "react";
import "./authentication.styles.scss";
import Button from "../../button/button.component";
import { signInWithGooglePopup,createUser } from "../../../utilities/firebase/firebase.utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const AuthenticationPage = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUser(user);
  };
  return (
    <div className="form_container">
      <div className="form_warpper">
        <div className="form_col">
          <form action="" className="signin">
            <label htmlFor="email"></label>
            <input placeholder="אימייל"  name="email" type="text" className="form_input" />
            <label htmlFor=""></label>
            <input
            placeholder="סיסמא"
              autoComplete="off"
              name="password"
              type="password"
              className="form_input"
            />
            <div className="button_group">
              <button onClick={logGoogleUser} type="button" className="signin_google">
                <FontAwesomeIcon icon={faGoogle} />
                -התחברו עם
              </button>
              <Button text="התחברות" class="primary-button"></Button>
            </div>
          </form>
        </div>
        <div className="form_col title_group">
          <h2 className="signin_title">
            התחברות לאיזור
            <br /> האישי
          </h2>
          <p>התחברו לאיזור האישי שלכם, הכל במקום אחד</p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
