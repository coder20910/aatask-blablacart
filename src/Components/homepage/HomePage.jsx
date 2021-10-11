import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import "./HomePage.css"

function HomePage(props) {
  let {products, categories} = props;
  const [currentCategory, setCurrentCategory]  = useState("All");  
  const [productsToDispay, setProducts] = useState([]);

  const handleCategory = (category) => {
    setCurrentCategory(category)
    if (category==="All"){
      setProducts(products)
      return ;
    } 
    let filteredProducts = products.filter((obj)=>{
      return obj.category === category;
    })
    setProducts(filteredProducts);
  }
  useEffect(() => {
    setProducts(products);
  },[]);
  return (
    <div className="main">
        <div className="category-all">
          <div className="category">Categories</div>
          {
            categories.map((category)=>{
              return <div className="category" onClick={()=>handleCategory(category)}>{category}</div>
            })
          }
        </div>
        <div className="content">
            <div className="category-type">
              <span>Products under <strong>{currentCategory} category</strong></span> 
            </div>
            <div className="products">

              {productsToDispay.map((productObj) => {
                return (
                  <div
                  className="product"
                  key={productObj.id}>

                    <img className="productImage" src={productObj.image} alt={productObj.title} />
                    <span className="productName">{productObj.title}</span>
                    <button className="addToCart" onClick={() => props.addItemToCart(productObj)}>Add to cart</button>
                  </div>
                );
              })}
            </div>
      </div>
    </div>
    
  );
}

const mapStateToProps = (store) => {
  return store;
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch({type: "AddToCart", payload: item})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
