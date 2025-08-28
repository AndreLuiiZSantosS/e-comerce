import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(Prev=> Prev.filter(items => items !== e.target.value))
    }
    else{
      setCategory(Prev => [...Prev, e.target.value]);
    }

  }

const toggleSubCategory = (e) => {

  if(SubCategory.includes(e.target.value)){
    setSubCategory(Prev=> Prev.filter(items => items !== e.target.value))
  }
  else{
    setSubCategory(Prev => [...Prev, e.target.value]);
  }
}

const applyFilters = () => {

  let productsCopy = products.slice(); 

  if(showSearch && search){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }

  if(category.length > 0){
    productsCopy = productsCopy.filter(item => category.includes(item.category));
  }

  if(SubCategory.length > 0){
    productsCopy = productsCopy.filter(item => SubCategory.includes(item.subCategory));
  }

  setFilterProducts(productsCopy);

}

const sortProducts = () => {

  let fpCopy = filterProducts.slice();

  switch(sortType){
    case 'low-to-high':
      setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
      break;

    case 'high-to-low':
      setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
      break;

    default:
      applyFilters();
      break;
  }

}

useEffect(()=>{
  applyFilters();
}, [category, SubCategory, search, showSearch]);

useEffect(()=>{
  sortProducts();
}, [sortType]);

return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filters */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by Relevance</option>
            <option value="low-to-high">Sort Price: Low to High</option>
            <option value="high-to-low"> Sort Price: High to Low</option>
          </select>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((items,index) => (
            <ProductItem key={index} name={items.name} id={items._id} price={items.price} image={items.image} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Collection
