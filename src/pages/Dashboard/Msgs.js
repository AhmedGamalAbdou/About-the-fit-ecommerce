import React, { useEffect } from 'react';
import Moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../redux/slices/messageSlice';
import { Loading } from '../../compoents/Loading';

const Msgs = () => {
	let { messages, loading } = useSelector((state) => state.messages);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMessages());
	}, [dispatch]);
	return loading ? (
		<Loading />
	) : (
		<div className='px-8 py-8 flex-col '>
			<h2 className='text-2xl text-teal-800 font-bold'> Your Messages</h2>
			<div className=' '>
				<table className='w-full'>
					<thead className='bg-gray-100 border-b-2 border-gray-200  text-left '>
						<tr>
							<th>Name </th>
							<th>Email</th>
							<th>Message</th>
							<th>Phone</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{messages &&
							messages.map((message) => (
								<tr className='p-3 text-sm text-gray-800 bg-orange-50  border-b-2 border-gray-200' key={message._id}>
									<td>{message.name ? message.name : 'No Name'}</td>
									<td>{message.email ? message.email : 'No Email'}</td>
									<td>{message.message}</td>
									<td>{message.phoneNumber}</td>
									<td>{Moment(message.createdAt).format('DD-MM-YYYY')}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Msgs;
