import React, { useEffect } from 'react';
import Moment from 'moment';
import { getSubscribers } from '../../redux/slices/subscriberSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../compoents/Loading';
const DashSubscribers = () => {
	let { subscribers, loading } = useSelector((state) => state.subscribers);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSubscribers());
	}, [dispatch]);
	return loading ? (
		<Loading />
	) : (
		<div className='px-8 py-8 flex-col '>
			<h2 className='text-2xl text-teal-800 font-bold'> Your Subscribers</h2>
			<div className=' '>
				<table className='w-full'>
					<thead className='bg-gray-100 border-b-2 border-gray-200  text-left '>
						<tr>
							<th>id</th>
							<th>email</th>
							<th>Subscription Date</th>
						</tr>
					</thead>
					<tbody>
						{subscribers &&
							subscribers.map((subscriber) => (
								<tr className='p-3 text-sm text-gray-800 bg-orange-50  border-b-2 border-gray-200' key={subscriber._id}>
									<td>{subscriber._id}</td>
									<td>{subscriber.email}</td>
									<td>{Moment(subscriber.createdAt).format('DD-MM-YYYY')}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashSubscribers;
