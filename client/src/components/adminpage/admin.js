import { useEffect,useState } from "react";
import axios from "axios"

const api_base="http://localhost:3001";

function Admin(){
    const[material,setMaterial]=useState('');
    const[amount,setAmount]=useState('');
    const [image, setImage] = useState(null);

    async function submit(e) {
        e.preventDefault();
        const formData = new FormData(); // Create a new FormData object
    
        formData.append("material", material);
        formData.append("amount", amount);
        formData.append("image", image); // Append the image file to the FormData object
    
        try {
          await axios
            .post(api_base + "/admin", formData, {
              headers: {
                "Content-Type": "multipart/form-data", // Set the correct Content-Type header for FormData
              },
            })
            .then((res) => {
              if (res.data === "ok") {
                console.log("Success");
                alert("Stock is updated");
              } else {
                console.log("Not Success");
                alert("Stock is not updated");
              }
            })
            .catch((e) => {
              console.log("Not Success");
              alert("Stock is not updated");
            });
        } catch (error) {
          console.log("Stock is not updated");
        }
      }
    return(
        <div className="admin">
            <h1>Admin</h1>
            <form action="POST"enctype="multipart/form-data">
                <input type="text" placeholder="Material" name="material"onChange={(e) => {setMaterial(e.target.value)}}/>
                <input type="text" placeholder="Enter Density in kiloGrams" name="amount"onChange={(e) => {setAmount(e.target.value)}}/>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => {setImage(e.target.files[0])}}
                    placeholder="upload Image" 
                />
                <button onClick={submit}>Upload</button>
            </form>
        </div>
    )
}

export default Admin; 