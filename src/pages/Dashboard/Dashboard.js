import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getorders } from '../../redux/slices/ordersSlice';
import { Loading } from '../../compoents/Loading';

import Modal from '../../compoents/Modal';
const Dashboard = () => {
	const [modalOn, setModalOn] = useState(false);
	const handelModal = () => {
		setModalOn(true);
	};

	const closehandelModal = () => {
		setModalOn(false);
	};
	let { orders, loading, orderDetails } = useSelector((state) => state.orders);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log(orderDetails);
		dispatch(getorders(orderDetails));
	}, [dispatch, orderDetails]);
	return loading ? (
		<Loading />
	) : (
		<div className='px-8 py-8 flex-col '>
			<h2 className='text-2xl text-teal-800 font-bold mb-2'> Clients Orders</h2>
			<div className=' '>
				<table className='w-full'>
					<thead className='bg-gray-100 border-b-2 border-gray-200  text-left '>
						<tr>
							<th>Name </th>
							<th>Email</th>
							<th>Phone</th>
							<th>Date</th>
							<th>Order details</th>
						</tr>
					</thead>
					<tbody>
						{orders &&
							orders.map((order) => (
								<tr className='p-3 text-sm text-gray-800 bg-orange-50  border-b-2 border-gray-200' key={order._id}>
									<td>{order.user.name ? order.user.name : 'No Name'}</td>
									<td>{order.user.email ? order.user.email : 'No Email'}</td>
									<td>{order.user.phoneNumber}</td>
									<td>{Moment(order.createdAt).format('DD-MM-YYYY')}</td>
									{/* <td>{order.orderItems.map((orderItem) => orderItem.qty)}</td> */}
									<td>
										<button onClick={handelModal}> Details</button>
									</td>
									{modalOn && <Modal setModalOn={setModalOn} setModalOff={closehandelModal} order={order} />}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Dashboard;
