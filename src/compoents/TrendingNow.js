import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const TrendingNow = () => {
	const { t } = useTranslation();

	return (
		<div className='container m-auto mt-5 '>
			<div className='grid md:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 place-content-center '>
				<div className='w-[640px] h-[600px] bg-zinc-50 flex flex-col  justify-center items-center '>
					<h2 className='text-2xl text-black font-bold text-center 		 '>{t('welcomemsg')}</h2>
					<p className='text-black'> {t('welcomemsgpara')}</p>
					<Link to='/shop'>
						<button className=' text-white bg-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>
							{t('carsoulbutton')}
						</button>
					</Link>
				</div>
				<div className='w-[640px] h-[600px]'>
					{' '}
					<img src='../1.jpg' alt='model' className='h-[600px]' />
				</div>
				<div className='w-[640px] h-[600px]'>
					<img src='../4.jpg' alt='model' />
				</div>
				<div className='w-[640px] h-[600px] bg-zinc-50 flex  '>
					<div className=' flex flex-col justify-center items-center'>
						<h2 className='text-sm text-black  text-center 		 '>
							{' '}
							"Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years. There's no how-to road map to
							style. It's about self expression and, above all, attitude."
						</h2>
						<p className='text-black font-bold'> _Iris Apfel</p>
						<Link to='/shop'>
							<button className=' text-white bg-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>
								{t('explore more')}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrendingNow;
