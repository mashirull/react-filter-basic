import React from 'react'
import { useOrderContext } from '../context/OrderContext'

const Oreder = () => {
    const {allOrder ,isChecked ,checkedHandler ,isLoading} = useOrderContext()
    
  return (
    <section id="order_container">
        <h1 className="heading">Orders</h1>
        <div className="order_Wrapper">
            <div className="filter">
                <h3>Filter</h3>
                <p>count: <span id="count">{allOrder.length}</span></p>
                <div className="checkbox">
                    <input type="checkbox" name="New" id="new" checked = {isChecked[0]} onChange={(e)=>checkedHandler(0 ,e)}/>
                    <label htmlFor="new">New</label>
                </div>

                <div className="checkbox">
                    <input type="checkbox" name="Packed" id="packed" checked = {isChecked[1]} onChange={(e)=>checkedHandler(1 ,e)}/>
                    <label htmlFor="packed">Packed</label>

                </div>

                <div className="checkbox">
                    <input type="checkbox" name="InTransit" id="t" checked = {isChecked[2]} onChange={(e)=>checkedHandler(2 ,e)}/>
                    <label htmlfor="t">InTransit</label>

                </div>

                <div className="checkbox">
                    <input type="checkbox" name="Delivered" id="deliver" checked = {isChecked[3]} onChange={(e)=>checkedHandler(3 ,e)}/>
                    <label htmlFor="deliver">Delivered</label>

                </div>
            </div>

            <div className="order_list">
                <table>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {isLoading ? <h3 style={{textAlign : 'center' ,marginTop : '80px'}}>Lodding...</h3> :  allOrder.map((curElem)=>{
                            return (
                                <tr className='tbody_row' key={curElem.id}>
                                    <td>{curElem.id}</td>
                                    <td>{curElem.customerName}</td>
                                    <td>{curElem.orderDate} <p>{curElem.orderTime}</p></td>
                                    <td>{curElem.amount}</td>
                                    <td>{curElem.orderStatus}</td>
                                </tr>
                            )
                        })}
                       
                    </tbody>
                </table>
            </div>

        </div>

    </section>
  )
}

export default Oreder