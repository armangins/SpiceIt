import React from "react";
import './call-to-action.styles.scss';
import CtaIcon from '../../icons/ctaimage.png';
import Button from '../button/button.component';

const CallToAction = () => {

    return (
        <div className="container">
            <div className="icon-box">
                <img className="cta-icon" src={CtaIcon} alt="" />
            </div>
            <div className="title-box">
                <h3 className="white-title">
                רכשו היום קבלו היום משולחים מהירים לכל רחבי הארץ
                </h3>
            </div>
            <Button class="primary-button" text="לחנות שלנו" ></Button>
        </div>
    )
}

export default CallToAction;