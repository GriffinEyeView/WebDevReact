import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favouvkvrite Foods
    </h1>
    <div>
      <img className="food-img" src={img + "?grayscale"} alt="random img" />
      <img
        className="food-img"
        src="https://m.media-amazon.com/images/I/71lNrnbMXsL.jpg"
        alt="jamon"
      />
      <img
        className="food-img"
        src="https://runningonrealfood.com/wp-content/uploads/2022/04/vegan-spicy-miso-tahini-noodles-recipes.jpg"
        alt="noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);
