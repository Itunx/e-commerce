import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import axios from 'axios';

const  Home = () => {
  const [allProduct,setAllProduct]=useState([]);
  const [deleted,setDeleted]=useState(false);
  const [ids, setIds]=useState([]);

  useEffect(()=>{
    getUsers();
  },[deleted]);

  function getUsers(){
    axios.get('http://localhost/api/').then(function(response){
      setAllProduct(response.data);
    });
  }

  function passData(id){
    ids.push(id);
  }

  return (
    <>
      <Header ids={ids} setDeleteStatus={setDeleted}/>
      {allProduct.length ? <ProductList products={allProduct} passData={passData} />:<p>error no data passed</p>}
    </>
  )
}

export default Home