import React from 'react';
import Moment from 'moment';

const Modal = ({ setModalOn, setModalOff, order }) => {
	console.log(order);
	return (
		order && (
			<div className='   bg-zinc-200  fixed inset-0 z-50   '>
				<div className='flex h-screen justify-center items-center '>
					<div className='flex-col justify-center  bg-white w-[500px] h-[600px] border-4 border-sky-500 rounded-xl '>
						<div className='flex  text-lg  text-zinc-600   mb-10 justify-end'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-6 h-6 cursor-pointer'
									onClick={setModalOff}
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
								</svg>
							</div>
						</div>

						<div className='flex flex-col justify-between mx-6'>
							<p> {Moment(order.createdAt).format('DD-MM-YYYY')} </p>
							<div className='flex flex-col'>
								<h2 className='text-2xl font-bold text-black'> client details</h2>
								<p> Name :{order.user.name ? order.user.name : 'No Name'}</p>
								<p> Email: {order.user.email ? order.user.email : 'No Email'}</p>
								<p> PhoneNumber: {order.user.phoneNumber}</p>
							</div>
							<div>
								<h2 className='text-2xl font-bold text-black'>product details</h2>
								<p>Name: {order.orderItems.map((orderItem) => orderItem.name)}</p>
								<p> Price: {order.orderItems.map((orderItem) => orderItem.price)} </p>
								<p> Image: {order.orderItems.map((orderItem) => orderItem.image)}</p>
								<p> Quantity: {order.orderItems.map((orderItem) => orderItem.qty)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default Modal;
