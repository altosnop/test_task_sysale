import React, { useEffect, useState } from "react";
import "./Card.css";
import icon from "../../assets/icon.png";
import onClickBtn from "../../functions/onClickBtm";

function Card(props) {
  const { title, content, img } = props;
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
          <div className="dropdown">
            <span className="dropbtn">Цвет</span>
            <div className="dropdown-content">
              <a href="#">Желтый</a>
              <a href="#">Красный</a>
              <a href="#">Зеленый</a>
            </div>
          </div>
          <span className="second_block-price">{productAmount * 200} грн</span>
        </div>
        <form action="#" className="third_block-radio">
          <div className="radio">
            <input
              className="custom-radio"
              type="checkbox"
              id="color-1"
              value="indigo"
              defaultChecked
            />
            <label htmlFor="color-1">100 мл</label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="checkbox"
              id="color-2"
              value="red"
            />
            <label htmlFor="color-2">200 мл</label>
          </div>

          <div className="radio">
            <input
              className="custom-radio"
              type="checkbox"
              id="color-3"
              value="brown"
            />
            <label htmlFor="color-3">300 мл</label>
          </div>
        </form>
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
        <div className="compare" onClick={onClickBtn}>
          <img className="compare-img" src={icon}></img>
        </div>
      </div>
    </>
  );
}

export default Card;
