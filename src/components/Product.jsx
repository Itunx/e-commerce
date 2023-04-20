import React from 'react'
import Card from 'react-bootstrap/Card';

const Product = ({SKU, name, price, productSpecific,id,passData}) => {




  function handleClick(){
     passData(id);
    console.log(id);
  }
  return (
    <Card style={{ width: '25rem', }}>
      <Card.Body>
      <input type="checkbox" className='delete-checkbox' onClick={handleClick}/>
      <Card.Text>
          {SKU}
        </Card.Text>
        <Card.Text>
          {name}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Card.Text>
          {productSpecific}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product