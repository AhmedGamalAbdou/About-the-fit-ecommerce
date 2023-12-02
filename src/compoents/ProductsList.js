import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';
const ProductsList = () => {
	const { products, isLoading } = useSelector((state) => state.products);
	const { categoryid } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(categoryid));
	}, [dispatch, categoryid]);

	return isLoading ? (
		<Loading />
	) : (
		<div className='ml-5 mt-7'>
			<div className=' grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-5 gap-y-12  '>
				{products &&
					products.map((product) => (
						<div className=' w-[250px] h-[500px]' key={product.id}>
							<div className='max-w-sm overflow-hidden shadow-lg text-teal-800  '>
								<img
									className='w-[250px] h-[400px]  '
									alt='Sunset in the mountains'
									src='https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_22ss/img/products/contentsArea_itemimg_16.jpg'
								/>
								<div className='px-6 py-4'>
									<div className='font-bold text-lg mb-2 text-center'>{product.category}</div>
									<p className='text=xs text-center'>{product.price} egp </p>
								</div>
								<div className='px-6 flex justify-center  '>
									<button
										onClick={() => dispatch(addToCart({ ...product, qty: 1 }))}
										type='button'
										className='text-white bg-gradient-to-r from-teal-800 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
									>
										Add product
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ProductsList;
