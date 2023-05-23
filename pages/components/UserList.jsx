


const UserList = ({data})=>{
    
    return(
       <>
       {data.length &&
       <div style={{padding:"5px 20px",border:"6px solid black",borderRadius:"10px",margin:"10px auto",maxWidth:"400px"}}>
        {data.map((item,i)=>(
            <div key={i} style={{margin:"5px auto"}}>
            <h6><span>Name:</span>{item.name}</h6>
            <h6><span>UserName:</span>{item.username}</h6>
            <h6><span>street:</span>{item.address.street}</h6>
            </div>
        ))}
       </div>
       }
       </>
    )
}

export default UserList