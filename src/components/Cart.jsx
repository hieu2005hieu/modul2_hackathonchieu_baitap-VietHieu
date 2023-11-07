import React from "react";

function Cart({ data, setData }) {
  const totalPrice = data.reduce((total, prouct) => {
    return total + prouct.price * prouct.count;
  }, 0);

  const data1 = data.filter((prouct) => prouct.count != 0);

    
    
    
    
    
    
    
  const handleReset = () => {
    const newProducts = data.map((product) => {
      return {
        ...product,
        count: 0,
      };
    });
    setData(newProducts);
    };
    



  return (
    <div>
      <div>
        <h3>Giỏ hàng của bạn:</h3>
        <div>
          {data1.map((item) => (
            <div>
              <span>{item.title}:</span>
              <span>{item.count}</span>
            </div>
          ))}
        </div>
        <div>
          <div>
            <b>Tổng tiền: ${totalPrice}</b>
          </div>
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
