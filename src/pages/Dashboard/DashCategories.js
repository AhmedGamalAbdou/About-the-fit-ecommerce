import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../compoents/Loading';
import { getCategories, deleteCategory } from '../../redux/slices/categorySlice';
const DashCategories = () => {
	let { categories, loading } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	return loading ? (
		<Loading />
	) : (
		<div className='px-8 py-8 flex-col '>
			<h2 className='text-2xl text-teal-800 font-bold'> Categories </h2>
			<div className=' '>
				<table className='w-full'>
					<thead className='bg-gray-100 border-b-2 border-gray-200  text-left '>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Code</th>
						</tr>
					</thead>
					<tbody>
						{categories &&
							categories.map((category) => (
								<tr className='p-3 text-sm text-gray-800 bg-orange-50  border-b-2 border-gray-200' key={category._id}>
									<td>{category._id}</td>
									<td>{category.name}</td>
									<td>{category.code}</td>
									<td>
										<button onClick={() => dispatch(deleteCategory(category._id))}>remove</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashCategories;
