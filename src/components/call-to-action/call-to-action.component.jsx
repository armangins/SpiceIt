import React from "react";
import './call-to-action.styles.scss';
import CtaIcon from '../../icons/ctaimage.png';
import Button from '../button/button.component';

const CallToAction = () => {

    return (
        <div className="container">
        
            <div className="title-box">
                <h3 className="white-title">
                רכשו היום קבלו היום משולחים מהירים לכל רחבי הארץ
                מבחר תבלינים חליתות וצמחי מרפא
                </h3>
                <Button class="secondary-button" text="לחנות שלנו" ></Button>

            </div>
        </div>
    )
}

export default CallToAction;