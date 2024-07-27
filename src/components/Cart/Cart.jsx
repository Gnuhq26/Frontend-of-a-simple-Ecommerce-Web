import { useState } from 'react';
import Img1 from '../../assets/Products/pro4.jpg';
import Img2 from '../../assets/Products/pro2.jpg';
import Img3 from '../../assets/Products/pro3.jpg';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { 
        id: 1,
        image: Img1,
        title: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket',
        price: 82, 
        quantity: 2 
    },
    { 
        id: 2,
        image: Img2, 
        title: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 
        price: 72, 
        quantity: 1 
    },
    { 
        id: 3, 
        image: Img3, 
        title: 'Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 
        price: 65, 
        quantity: 1 
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6 mt-8 sm:px-8 md:px-16 lg:px-24 xl:px-32 ">
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b ">
            <th className="text-left pb-4">Products</th>
            <th className="text-left pb-4">Title</th>
            <th className="text-left pb-4">Price</th>
            <th className="text-left pb-4">Quantity</th>
            <th className="text-left pb-4">Total</th>
            <th className="text-left pb-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} className="border-b">
              <td className="py-4">
                <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-20 h-20 object-cover" />
              </td>
              <td className="py-4">{item.title}</td>
              <td className="py-4">${item.price}</td>
              <td className="py-4">
                <input 
                  type="number" 
                  value={item.quantity} 
                  className="w-16 border rounded p-1" 
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </td>
              <td className="py-4">${item.price * item.quantity}</td>
              <td className="py-4">
                <button onClick={() => removeItem(item.id)} 
                  className=" bg-red-500 w-20 h-8 text-white font-semibold rounded-full shadow-black">
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-start">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div className="border-b py-2 flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="border-b py-2 flex justify-between">
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <div className="py-2 flex justify-between font-bold">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
        </div>

        <div className="w-1/3">
          <p className="mb-2">If you have a promo code, Enter it here</p>
          <div className="flex">
            <input 
              type="text" 
              className="border p-2 flex-grow"
              placeholder="promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button className="bg-black text-white px-4 py-2 ml-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;