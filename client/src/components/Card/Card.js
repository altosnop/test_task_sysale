import React, { useEffect, useState } from "react";
import "./Card.css";

function Card(props) {
  const { title, content, img, price } = props;
  const [productAmount, setProductAmount] = useState(1);

  useEffect(() => {
    if (productAmount < 1) {
      setProductAmount(1);
    }
  }, [productAmount]);

  return (
    <>
      <div className="main_block">
        <img className="main_block-img" src={img}></img>
        <h4 className="main_block-title">{title}</h4>
        <p className="main_block-content">{content}</p>
        <div className="second_block">
          <div class="dropdown">
            <span class="dropbtn">Цвет</span>
            <div class="dropdown-content">
              <a href="#">Желтый</a>
              <a href="#">Красный</a>
              <a href="#">Зеленый</a>
            </div>
          </div>
          <span className="second_block-price">{productAmount * 200} грн</span>
        </div>
        <div className="third_block-radio">
          <label for="100">
            <input type="radio" id="100" name="color" value="100" checked />
            100 мл
          </label>
          <label for="200">
            <input type="radio" id="200" name="color" value="200" />
            200 мл
          </label>
          <label for="300">
            <input type="radio" id="300" name="color" value="300" />
            300 мл
          </label>
        </div>
        <div className="fourth_block">
          <div className="counter">
            <button onClick={() => setProductAmount(productAmount - 1)}>
              -
            </button>
            <span>{productAmount}</span>
            <button onClick={() => setProductAmount(productAmount + 1)}>
              +
            </button>
          </div>
          <button className="buy_button">Купить</button>
        </div>
        <div className="new">New</div>
        <div className="compare">0_0</div>
      </div>
    </>
  );
}

export default Card;
