



function ProductCard({item}){

return(
  <div className="shadow mx-4 my-4 text-center lg:w-1/4 md:w-1/2 p-4 w-full">
  <a className="block relative h-48 rounded overflow-hidden">
    <img
      alt="ecommerce"
      className=" sec1 "
      src={item.image}
    />
  </a>
  <div className="mt-4">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
      CATEGORY
    </h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">
      {item.category}
    </h2>
    <p className="mt-1">${item.price}</p>
  </div>
</div>
)
    
}

export default ProductCard