import BackButton from "../components/Common/BackButton"
import ProductFilter from "../components/Product/ProductFilter"

function Product() {
  return (
    <div className="">
        <BackButton />
        <h1 className="text-3xl font-bold text-center">Products</h1>
        <ProductFilter />
    </div>
  )
}

export default Product
