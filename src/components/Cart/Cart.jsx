import { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Sản phẩm 1', price: 100000, quantity: 2 },
    { id: 2, name: 'Sản phẩm 2', price: 200000, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">{item.price.toLocaleString('vi-VN')} đ</p>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  className="bg-gray-200 px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button 
                  className="ml-4 text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-bold">
              Tổng cộng: {total.toLocaleString('vi-VN')} đ
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Thanh toán
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;