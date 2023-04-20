import React from 'react'
import './styles.css'
import CustomForm from './customform'
import Furniture from './furniture'


const productType = {
    DVD: ['SIZE (MB)'],
    Furniture:  ['HEIGHT (CM)','WIDTH (CM)', 'LENGTH (CM)'],
    Book:['WEIGHT (KG)']
}


const Forms = ({product,current,update,...args}) => {
    // debugger
  return (
    <div className='pikin'>
        <div>
            {  (
             <CustomForm property={productType[product]} current={current} update={update}  {...args}/>
            )}
            {/* {product == 'Book' &&  (
             <CustomForm property={productType[product]}  current={current} update={update}/>
             
            )}
            {product == 'Furniture' &&  (

             <CustomForm property={productType[product]}  current={current} update={update}/>
             
            )} */}
        </div>
    </div>
  )
}

export default Forms