
import React from 'react'
import './styles.css'

 const CustomForm=({property=[''],current,update,height,length,setDimension})=>{ 
    return(
        <>
            {
                // property.map(prop => (
                    <>
                        <label>
                            <p className=''>{property[0]}</p>
                        </label>
                    
                        <input type='text' style={{width:'400px'}} id='weight' value={current} onChange={(e)=>update(e.target.value)} />
                     {property[0] =='HEIGHT (CM)' &&<div>
                                <label>
                                        <p className=''>{property[1]}</p>
                                    </label>
                                
                                    <input type='text' style={{width:'400px'}} value={height} id='height' onChange={(e)=>setDimension(  {length, height:e.target.value })} />
                                
                                    <label>
                                        <p className=''>{property[2]}</p>
                                    </label>
                                
                                    <input type='text' style={{width:'400px'}} value={length } id='lenght' onChange={(e)=>setDimension({height,length:e.target.value})} />
                            </div>
                     } 
                    </>
                // ))
            }
        </>
    )       
 }
 export default CustomForm
