import React from "react";

const IndicationNav = () => {
  return (
    <div id="indicatorContainer">
      <nav className="nav nav--indicators">
        <button className="nav__item btnStart nav__item--current">
          <span className="nav__item-title">Start</span>
        </button>
        <button className="nav__item btnLorem">
          <span className="nav__item-title">Lorem</span>
        </button>
        <button className="nav__item btnIpsum">
          <span className="nav__item-title">Ipsum</span>
        </button>
        <button className="nav__item">
          <span className="nav__item-title">Menu-4</span>
        </button>
        <button className="nav__item">
          <span className="nav__item-title">Menu-5</span>
        </button>
      </nav>
    </div>
  );
};

export default IndicationNav;
