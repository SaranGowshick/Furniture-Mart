import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
 

const api_base="http://localhost:3001";


function Cart(){
    const[furniture,setFurniture]=useState([]);
    const [newimage, setImage] = useState(null)
    // async function furniture() {
    //     try{
    //         await axios.get(api_base+'/cart').then(res => res.json()).then(data => console.log(data)).catch(err=>console.log(err))
    //     }catch(err){
    //         console.log("error")
    //     }

    // }
    // useEffect(() => {
    //     (async () => {
    //       const response = await fetch(
    //         api_base+'/cart',
    //         {
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           credentials: "include",
    //         }
    //       );
    //       const content = await response.json();
    //       setUserList(content);
    //     })();
    //   }, []);
    
    console.log("Furniture data:", furniture);
    useEffect(()=>{
        GetFurniture()
    },[])
    const  GetFurniture= () => {
		fetch(api_base + '/cart')
			.then(res => res.json())
			.then(data => setFurniture(data))
           
     	}
   
   // const imageUrl = "/images/image_1690921339854.jpg";
    return(
        <div className="todos">
            {furniture.length > 0 ? <h1>true</h1> : <h1>false</h1>}
            {furniture.map((item) => (
                <div key={item._id}>
                <h1>Material: {item.material}</h1>
                <h1>Amount: {item.amount}</h1>
                {item.image && item.image.contentType.startsWith("image") && (
                <img
                    src={`${api_base}/images/${item.image.fileName}`}
                    alt={item.material}
                    width="100"
                    height="100"
                />
                )}
                </div>
            ))}
                        
        </div>
    )
}

export default Cart;