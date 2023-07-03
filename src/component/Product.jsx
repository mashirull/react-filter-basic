import React from 'react'
import { useProductContaxt } from '../context/productContext'

const Product = () => {
    const {product,is_product ,isChecked1 , checkHandler1}  = useProductContaxt()

  return (
    <section id="order_container">
        <h1 className="heading">Products</h1>
        <div className="order_Wrapper">
            <div className="filter">
                <h3>Filter</h3>
                <p>count: <span id="count">{product.length}</span></p>
                <div className="checkbox">
                    <input type="checkbox" name="new" id="expire" checked = {isChecked1[0]} onChange={()=>checkHandler1(0)}/>
                    <label htmlFor="expire">Expire</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="packed" id="low_stock" checked ={isChecked1[1]} onChange={()=>checkHandler1(1)}/>
                    <label htmlFor="low_stock">Low Stock</label>

                </div>

                
            </div>

            <div className="order_list">
                <table>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>product Name</th>
                            <th>Product Brand</th>
                            <th>Expiry Date</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {is_product ? <h4 style={{textAlign : 'center' , marginTop : '80px'}}>Lodding...</h4>  : product.map((curElem) => {
                            return  <tr class="tbody_row" key={curElem.id}>
                            <td>{curElem.id}</td>
                            <td>{curElem.medicineName}</td>
                            <td>{curElem.medicineBrand}</td>
                            <td>{curElem.expiryDate}</td>
                            <td> {curElem.unitPrice}</td>
                            <td>{curElem.stock}</td>
                        </tr> 
                        })}
                        {/* <tr class="tbody_row">
                            <td>65465</td>
                            <td>mashirul</td>
                            <td>1-21-2025 <p>11:25pm</p></td>
                            <td>25000</td>
                            <td>failed</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

        </div>

    </section>
  )
}

export default Product