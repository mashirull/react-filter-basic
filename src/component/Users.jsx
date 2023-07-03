import React from 'react';
import { useUserContext } from '../context/UserContext';

const Users = () => {

    const {users , isUserdata , searchHandler} = useUserContext()
    
  return (
    <section id="order_container">
        <div className='d-flex'>
            <h1 className="heading">Users</h1>
            <input type="text" className='search' placeholder='SEARCH USERS' onChange={searchHandler}/>
        </div>
        <div className="order_Wrapper">
            <div className="order_list">
                <table>
                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>User avatar</th>
                            <th>Full Name</th>
                            <th>DoB</th>
                            <th>Gender</th>
                            <th>CurrentLocation</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        {isUserdata ? <h4 style={{textAlign : 'center' , marginTop : '80px' }}>Loadding...</h4>
                         : users.map((curElem) => {
                            return (
                            <tr class="tbody_row" key={curElem.id}>
                            <td>{curElem.id}</td>
                            <td><img src={curElem.profilePic} alt={curElem.fullName} /> </td>
                            <td>{curElem.fullName}</td>
                            <td>{curElem.dob} </td>
                            <td>{curElem.gender}</td>
                            <td>{curElem.currentCountry} , <p>{curElem.currentCity}</p></td>
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

export default Users