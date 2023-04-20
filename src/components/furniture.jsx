import React from 'react'
import './styles.css'

const productType = {
    DVD: ['SIZE (MB)'],
    Furniture: ['HEIGHT (CM)','WIDTH (CM)', 'LENGTH (CM)'],
    Book:['WEIGHT (KG)']
}


const Furniture = ({property}) => {
    // debugger;
  return (
    
        <div>
            
                <>
                    <label>
                        <p className=''>HEIGHT</p>
                    </label>
                            
                        
                    <input type='text' style={{width:'400px'}} />

                    <label>
                        <p className=''>wIDTH</p>
                    </label>
                            
                    <input type='text' style={{width:'400px'}} />
                    
                    <label>
                        <p className=''>LENGTH</p>
                    </label>
                            
                    <input type='text' style={{width:'400px'}} />
                </>
            
        </div>
    
  )
}

export default Furniture