import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart } from '../redux/slices/cartSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cart = () => {
	const dispatch = useDispatch();
	const { orderItems } = useSelector((state) => state.cart);
	const totalPrice = orderItems.reduce((acc, product) => {
		acc += product.price * product.qty;
		return acc;
	}, 0);

	return (
		<div className='container m-auto  h-full bg-gray-100 px-8 py-8 flex-col'>
			<h2 className='text-2xl text-teal-800 font-bold'> My Shopping Bag</h2>
			<table className='w-full border-separate border-spacing-2 border border-slate-500 mt-2'>
				<thead className='bg-gray-100 border-b-2 border-gray-200  text-left '>
					<tr>
						<th>product</th>
						<th> Product name</th>
						<th>QUANTITY</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{orderItems.map((product) => (
						<tr key={product.code} className='p-3 text-sm text-black border-b-2 border-gray-200   '>
							<td>
								<Link to={`/ProductView/${product._id}`}>
									<LazyLoadImage className=' rounded-t-md w-20 h-20 object-contain	 ' alt={product.name} src={product.images[0]} delayTime='500' />
								</Link>
							</td>
							<td>{product.name} </td>
							<td> {product.qty}</td>
							<td>
								<button onClick={() => dispatch(deleteFromCart(product.id))}>remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className=' flex justify-between mx-5'>
				<div className='mt-2'>
					<p>
						{' '}
						Your Total Price Is : <span className='text-green-800'> {totalPrice} EGP</span>{' '}
					</p>
				</div>
				<div>
					<Link to='/checkout'>
						<button className='py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8 mt-2'>Checkout</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Cart;
