import React from "react";
import "./section.styles.scss";
import Button from "../button/button.component";
import AboutImage from "../../assets/about.png";
import Title from "./../title/title.component";

const Section = () => {
  return (
    <div className="section_container">
      <div className="content">
        {/* <Title  align="right" text="מי אנחנו"></Title> */}
        <h4 className="about_title">הסיפור שלנו</h4>
        <p>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן
          - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר,
          בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי
          נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן מוסן מנת. להאמית קרהשק
          סכעיט דז מא, מנכם למטכין נשואי מנורך. קולהע צופעט למרקוח איבן איף,
          ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו,
          דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך
          רוגצה. לפמעט לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת
          אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,
          קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קוואזי במר
          מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי
          בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו
          בלוקריה שיצמה ברורק.
        </p>
        <Button class="primary-button" text="עוד עלינו"></Button>
      </div>
      <div className="image_container">
        <img className="about_image" src={AboutImage} alt="" />
      </div>
    </div>
  );
};

export default Section;
