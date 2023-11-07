import React from "react";

function Cart({ dataProducts, setDataProducts, counts }) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
      });
  const totalPrice = dataProducts.reduce((total, prouct, index) => {
    return total + prouct.price * counts[index];
  }, 0);

  const dataProduct = dataProducts.filter(
    (prouct, index) => counts[index] != 0
  );

  const handleReset = () => {
    const newProducts = dataProducts.map((product) => {
      return {
        ...product,
        count: 0,
      };
    });
    setDataProducts(newProducts);
  };

  return (
    <div className="container">
      <div>
        <h3>Giỏ hàng của bạn:</h3>
        <div>
          {dataProduct.map((item) => {
            let index = dataProducts.findIndex(
              (product) => product.id == item.id
            );
            return (
              <div className="nameProduct">
                <span>Tên sản phẩm: {item.title}:</span>
                <span> Số Lượng : {counts[index]}</span>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <b>Tổng tiền: {formatter.format(totalPrice)}</b>
          </div>
          <div>
            <button onClick={handleReset} className="btn_resset">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
