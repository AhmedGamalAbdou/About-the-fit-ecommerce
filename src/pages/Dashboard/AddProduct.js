import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FileUploader } from 'react-drag-drop-files';

import Select from 'react-select';
import { addProduct } from '../../redux/slices/productSlice';
import { getCategories } from '../../redux/slices/categorySlice';
import { Loading } from '../../compoents/Loading';
import { uploadImages } from '../../redux/slices/utilsSlice';

const AddProduct = () => {
	const dispatch = useDispatch();
	const [imagesFiles, setImages] = useState([]);
	const fileTypes = ['JPEG', 'PNG', 'JPG'];
	const [imageNames, setImageNames] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedSizes, setSelectedSizes] = useState([]);
	const [productInput, setProduct] = useState({
		product_name: '',
		product_code: '',
		product_price: '',
		product_color: '',
		product_description: '',
		catalog: '',
		sizes: '',
	});

	const sizes = [
		{ value: 'S', label: 'S' },
		{ value: 'M', label: 'M' },
		{ value: 'L', label: 'L' },
		{ value: 'XL', label: 'XL' },
		{ value: 'XXL', label: 'XXL' },
	];

	const { categories, loading } = useSelector((state) => state.categories);
	const { loading: imagesLoading, images } = useSelector((state) => state.utils);
	const { isLoading: addProductLoading } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const handleInput = (e) => {
		e.preventDefault();
		setProduct({ ...productInput, [e.target.name]: e.target.value });
	};

	const handleChange = (imagesFiles) => {
		let files = Object.values(imagesFiles);
		let names = files.map((element) => {
			return element.name;
		});
		setImageNames(
			names.reduce((total, name) => {
				return total + ` ${name}`;
			})
		);

		files.map((file) => dispatch(uploadImages(file)));
	};

	const categoryOnSelect = (value) => {
		setSelectedCategory(value);
		setProduct({ ...productInput, catalog: value.id });
	};

	const sizesOnSelect = (value) => {
		setSelectedSizes(value);
		setProduct({
			...productInput,
			sizes: value.map((value) => {
				return value.value;
			}),
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addProduct({
				name: productInput.product_name,
				code: productInput.product_code,
				price: productInput.product_price,
				description: productInput.product_description,
				color: productInput.product_color,
				catalog: productInput.catalog,
				sizes: productInput.sizes,
				images: images,
			})
		);
		setImages([]);
		setImageNames('');
		setSelectedCategory('');
		setProduct({});
		setSelectedSizes([]);
	};

	return loading || imagesLoading || addProductLoading ? (
		<Loading />
	) : (
		<div>
			<section className='flex'>
				<div className='flex'>
					<div className='w-full'>
						<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
							<div>
								<label className='block text-sm  '>Product Name</label>
								<input
									className='p-2 rounded-xl border'
									type='text'
									name='product_name'
									value={productInput.product_name}
									required
									onChange={handleInput}
								/>
							</div>
							<div>
								<label className='block text-sm  '>Product Code</label>
								<input
									className='p-2 rounded-xl border'
									type='text'
									name='product_code'
									value={productInput.product_code}
									required
									onChange={handleInput}
								/>
							</div>
							<div>
								<label className='block text-sm  '>Product Price</label>
								<input
									className='p-2 rounded-xl border'
									type='number'
									name='product_price'
									value={productInput.product_price}
									required
									onChange={handleInput}
								/>
							</div>
							<div>
								<label className='block text-sm  '>Product Color</label>
								<input
									className='p-2 rounded-xl border'
									type='text'
									name='product_color'
									value={productInput.product_color}
									required
									onChange={handleInput}
								/>
							</div>
							<div>
								<label className='block text-sm  '>Product Description</label>
								<input
									className='p-2 rounded-xl border'
									type='text'
									name='product_description'
									value={productInput.product_description}
									required
									onChange={handleInput}
								/>
							</div>
							{categories && (
								<div>
									<Select
										placeholder='Select a Category'
										defaultValue={selectedCategory}
										options={categories.map((category) => ({
											value: category.name,
											id: category._id,
											label: category.name,
										}))}
										onChange={categoryOnSelect}
									/>
								</div>
							)}

							<div>
								<Select placeholder='Select Sizes' isMulti options={sizes} defaultValue={selectedSizes} onChange={sizesOnSelect} />
							</div>
							<div className='App'>
								<FileUploader multiple={true} handleChange={handleChange} name='imagesFiles' types={fileTypes} maxSize='5' />
								<p>{imagesFiles ? `File name: ${imageNames}` : 'No Images Uploaded Yet'}</p>
							</div>

							<button type='submit' className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300'>
								Create Product
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AddProduct;
