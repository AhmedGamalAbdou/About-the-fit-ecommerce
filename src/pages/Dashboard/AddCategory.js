import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../compoents/Loading';
import { createCategory } from '../../redux/slices/categorySlice';

const AddCategory = () => {
	let { loading } = useSelector((state) => state.categories);

	const [category, setCategory] = useState({
		name: '',
		code: '',
		description: '',
	});

	const handleInput = (e) => {
		e.preventDefault();
		setCategory({ ...category, [e.target.name]: e.target.value });
	};

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createCategory(category));
		setCategory({ name: '', code: '', description: '' });
	};

	return loading ? (
		<Loading />
	) : (
		<div>
			<section className='  flex '>
				<div className=' flex'>
					<div className='w-full '>
						<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
							<div>
								<label className='block text-sm  '>Category Name</label>
								<input className='p-2 rounded-xl border' type='text' name='name' value={category.name} required onChange={handleInput} />
							</div>
							<div>
								<label className='block text-sm  '>Category Code</label>
								<input className='p-2 rounded-xl border' type='number' name='code' value={category.code} required onChange={handleInput} />
							</div>
							<div>
								<label className='block text-sm  '>Category Description</label>
								<input
									className='p-2 rounded-xl border'
									type='text'
									name='description'
									value={category.description}
									required
									onChange={handleInput}
								/>
							</div>
							<button type='submit' className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300'>
								Add Category
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AddCategory;
