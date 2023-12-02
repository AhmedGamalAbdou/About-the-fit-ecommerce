import React from 'react';
import SideBarFilter from '../compoents/SideBarFilter';
import ProductsList from '../compoents/ProductsList';
const Shop = () => {
	return (
		<>
			<h2 className=' text-center text-6xl pt-5 text-teal-800 pading border-b-2 pb-5	'>All</h2>
			<div className=' flex flex-row'>
				<SideBarFilter />
				<ProductsList />
			</div>
		</>
	);
};

export default Shop;
