import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Home(){

    const [data, setData] = useState([]);
    const [search,setSearch] = useState("");
    const [currentPage, setCurrentPage]= useState(1)
    const recordsPerPage = 5;

    useEffect(()=>{
        axios
        .get('http://localhost:2000/students')
        .then((res)=>{setData(res.data)})
        .catch((err)=>console.log(err))
    },[])

    const filteredData = data.filter(item=>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.toString().includes(search)
    )

    // Pagination Logic
    const lastIndex = recordsPerPage * currentPage;
    const firstIndex = lastIndex - recordsPerPage;
    const currentRecords = filteredData.slice(firstIndex, lastIndex);
    const totalPages = Math.max(1,Math.ceil(filteredData.length / recordsPerPage));

    return(
        <>
            <center className='m-5'>
            <h2>Student Details</h2>
            <Link to="/insert"><button className='btn btn-success'>Add New Record +</button></Link>
            <br />
            <input
            className='m-4'
            type="text"
            placeholder='Search...'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
             />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentRecords.map((d,i)=>(
                            <tr key={d.id}>
                                <td>{i+1}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button disabled={currentPage === 1} className='btn btn-dark' onClick={()=>setCurrentPage(currentPage-1)}>Previous</button>
            <span className='m-2'>{currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} className='btn btn-dark' onClick={()=>setCurrentPage(currentPage+1)}> Next</button>

            </center>
        </>
    )
}

export default Home;