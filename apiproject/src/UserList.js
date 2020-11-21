import React,{useState , useEffect} from 'react'
import axios from 'axios'

function UserList() {
    const [users , setUsers] = useState([])
    useEffect (()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then (res => {
              console.log(res)
              setUsers(res.data)
          })
          .catch (err => {
              console.log(err)
          })
    } , [])
    return (
        <div className ="Users" >
               {
                   users.map((el,i) => 
                      <div className="oneUser" key= {i}>
                           <h4>Name : {el.name}</h4>   
                           <h4>UserName : {el.username}</h4> 
                           <h4>Email : {el.email}</h4> 
                      </div> 
                   )}    
        </div>
    )
}

export default UserList
