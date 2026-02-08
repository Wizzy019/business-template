import React, { useState } from "react";
import ProductCard from "./ProductCard";


import Img from '../../assets/images/sample_image.jfif'

// Sample product data
const products = [{
  id: 1,
  name: "Product 1",
  price: "N12.99",
  brand: "Samsung",
  category: "Laptop",
  image_url: Img,
},
  {
  id: 2,
  name: "Non Sample Product",
  brand: "Apple",
  price: "N18.99",
  category: "Phone",
  image_url: Img,
},
 {
  id: 3,
  name: "Sample Product",
  brand: "Microsoft",
  price: "N19.99",
  category: "Laptop",
  image_url: Img,
  },
   {
  id: 4,
  name: "Sample Product",
  brand: "Samsung",
  price: "N20.99",
  category: "Phone",
  image_url: Img,
  }
]


function ProductFilter() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("all");
  const [category, setCategory] = useState("all");

  // Filtering logic
  const filteredProducts = products?.filter((product) => {
    const matchesKeyword = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesBrand = brand === "all" || product.brand === brand;
    const matchesCategory = category === "all" || product.category === category;

    return matchesKeyword && matchesBrand && matchesCategory;
  });

  return (
    <div className="p-4">
      {/* Filters */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      <select value={brand} onChange={(e) => setBrand(e.target.value)} className="border p-2 mr-2">
        <option value="all">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Microsoft">Microsoft</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2">
        <option value="all">All Categories</option>
        <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
      </select>

      {/* Results */}
      <div className='min-h-screen w-full p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 
    place-items-center place-content-center'>
        {filteredProducts?.length === 0 ? (
          <p>No item matches search keyword</p>
        ) : (
          filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} actionLabel = "Buy Now"/>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductFilter;