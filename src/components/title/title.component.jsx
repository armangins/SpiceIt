import React from "react";
import "./title.styles.scss";
import Decorations from "../../assets/decorations.png";

const Title = (props) => {
  const { text, align,showDecoration } = props;

  const styleSettings = {
    textAlign: align,
  };

  return (
    <div className="title-container">
         {showDecoration ? (
        <div style={styleSettings} className="section-title-2">
           <div style={styleSettings} className="section-title">
        <img src={Decorations} alt="" />
      </div>
        </div>
      ) : null}
      <h2 style={styleSettings} className="section-title">
       
        {text}
      </h2>
      {showDecoration ? (
        <div style={styleSettings} className="section-title-2">
           <div style={styleSettings} className="section-title">
        <img src={Decorations} alt="" />
      </div>
        </div>
      ) : null}
    
    </div>
  );
};

export default Title;
