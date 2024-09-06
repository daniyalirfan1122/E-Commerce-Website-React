import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import CategoryChip from "../Components/CategoryChip"



function Product(){

    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(true)
    const [category,setGategory] = useState([])



useEffect(()=>{
axios.get('https://fakestoreapi.com/products/categories')
.then((res)=>{
    console.log(res.data);
    setGategory(res.data)
    setLoading(false)
}).catch((error)=>{
console.log(error)
setLoading(false)

})
},[])




    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        console.log(res.data)
        setProduct(res.data)
        setLoading(false)
      }
      
      
      ).catch((error)=>{
        console.log(error)
        setLoading(false)
      }
      )
    },[])



    return(
  <div className="flex display-wrap ">

{
    loading ? (<h1>loading...</h1> ):

  <div className="  display-wrap ">

  <div>
 
  {category.map((category)=><CategoryChip category={category} key={category}/> ) 
}
  </div>


  <div  className="main shadow  flex flex-wrap -m-4">

      {  product.map((item)=><ProductCard  item={item} key={item.id}/> )}
    </div>
  </div>
}

  </div>
    )

}

export default Product