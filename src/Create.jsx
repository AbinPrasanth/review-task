import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Create () {
    const [name,setName] = useState('')
    const [batch,setBatch] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

        const dataForm = {name,batch};

        const storedData=JSON.parse(localStorage.getItem("NameBatch")) || [];
        storedData.push(dataForm)
        localStorage.setItem("NameBatch",JSON.stringify(storedData))


         navigate("/")
         setName('')
         setBatch('')

    }
        return (
            <div>
              <h1>Create</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name </label>

                <input
                  type="text"
                  value={name}
                  id="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}/>
                
                <br/>
                <label htmlFor="batch">Batch</label>
                <input
                  type="text"
                  value={batch}
                  id="batch"
                  placeholder="Batch"
                  onChange={(e) => setBatch(e.target.value)}/>
                
                <br/>
                
                <button type="submit">Done</button>
              </form>
            </div>
          );
}
export default Create