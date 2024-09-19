import axios from "axios";
import "./App.css";
import Category from "./Category";
import { useEffect, useState } from "react";


function App() {
  let [finalCategory, setFinalCategory]=useState([])
  let [finalProduct, setFinalProduct]=useState([])
  let [catName, setCatName] = useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setFinalCategory(finalRes)
    })
  }

  function ProductItems({pData}) {
    return (
      <div className='proItems shadow-lg text-center pb-4'>
          <img src={pData.thumbnail} alt="" />
          <h4>{pData.title}</h4>
          <b>${new Intl.NumberFormat().format(pData.price)}</b>
      </div>
    )
  }



  let getProducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
      setFinalProduct(finalRes.products)
    })
  }
  useEffect(()=>{
    getCategory()
    getProducts()
  },[])

  useEffect(()=>{
    if(catName!==''){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes)=>proRes.data)
      .then((finalRes)=>{
        setFinalProduct(finalRes.products)
      })
    }
  },[catName])

  let Pitems=finalProduct.map((products, index)=>{
    return(
      <ProductItems key={index} pData={products}/>
    )
  })

  return (
    <div className="main py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center font-bold text-[40px] mb-[30px]">Our Products</h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div >
              <Category finalCategory={finalCategory} setCatName={setCatName}/>
            </div>    
            <div className="grid grid-cols-3 gap-4">
              {finalProduct.length>=1?
              [Pitems]
              :
              'No products found'
              }
              </div>    
          </div>
        </div>
      </div>
  );
}

export default App;
