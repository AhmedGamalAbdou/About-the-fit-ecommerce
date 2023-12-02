import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getProducts } from '../../redux/slices/productSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { Loading } from '../../compoents/Loading';
const Shop = () => {
	const { categoryid } = useParams();
	const { products, isLoading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
	
		dispatch(getProducts(categoryid));
	}, [dispatch, categoryid]);

	return isLoading ? (
		<Loading />
	) : (
		<div className=' mx-auto'>
			
			<div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
				{products &&
					products.map((product) => (
						<section key={product._id}>
							<div className='w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
								<Link to={`/ProductView/${product._id}`}>
									<LazyLoadImage className=' rounded-t-md ' alt={product.name} src={product.images[0]} delayTime='500' />
								</Link>

								<div className='px-4 py-3 w-72'>
									<p className='text-lg font-bold text-black truncate block capitalize'>{product.name}</p>
									<div className='flex items-center'>
										<p className='text-lg font-semibold text-black cursor-auto my-3'> {product.price} EGP</p>
										<del>
											<p className='text-sm text-gray-600 cursor-auto ml-2'> {product.price + 100} EGP</p>
										</del>
										<div className='ml-auto'>
											<svg
												onClick={() => dispatch(addToCart({ ...product, qty: 1 }))}
												xmlns='http://www.w3.org/2000/svg'
												width='20'
												height='20'
												fill='currentColor'
												className='cursor-pointer'
												viewBox='0 0 16 16'
											>
												<path
													fill-rule='evenodd'
													d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
												/>
												<path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z' />
											</svg>
										</div>
									</div>
								</div>
							</div>
						</section>
					))}
			</div>
		</div>
	);
};

export default Shop;
