import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { iCartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  const cart = useSelector<IState, iCartItem[]>(state => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{(item.product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;