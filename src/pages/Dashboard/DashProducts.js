import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { deleteProduct } from '../../redux/slices/productSlice';
import { Loading } from '../../compoents/Loading';

const DashProducts = () => {
	const { products, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return isLoading ? (
		<Loading />
	) : (
		<div className=' mx-auto'>
			<div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
				{/* {products &&
					products.map((product) => (
						<section className='mx-auto w-fit p-12' key={product._id}>
							<div className='w-72 h-fit group'>
								<div className='relative overflow-hidden'>
									<Link to={`edit/${product._id}`}>
										<img
											className='h-96 w-full object-cover'
											src={
												product.images && product.images.length >= 1
													? product.images[0]
													: 'https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
											}
											alt='a'
										/>
									</Link>
								</div>
								<div className='flex flex-row justify-between'>
									<button className='bg-teal-700 text-white py-2 px-5' onClick={() => dispatch(addToCart(product))}>
										edit
									</button>
									<button className='bg-red-700 text-white py-2 px-5' onClick={() => dispatch(deleteProduct({ id: product._id }))}>
										delete
									</button>
								</div>
							</div>
						</section>
					))} */}
				{products &&
					products.map((product) => (
						<div className='w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
							<LazyLoadImage
								className='p-8 rounded-t-md'
								alt={product.name}
								src={product.images[0]} // use normal <img> attributes as props
							/>
							<div className='px-8 pb-8'>
								<h4 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{product.name}</h4>
								<h4 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{product.code}</h4>
								<h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{product.description}</h5>
								<span className='text-3xl font-bold text-gray-900 dark:text-white'>{product.price}</span>
							</div>
							<div className='px-8 pb-8'>
								{' '}
								<div className='flex items-center justify-between'>
									{/* <button className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
										Edit
									</button> */}
									<button
										href='#'
										className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
										onClick={() => dispatch(deleteProduct({ id: product._id }))}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default DashProducts;
