import data from "./Api/data.json"
import Card from "./Components/Card"



function App() {


  return (
    
      data.map( (data,index) => {
        return(
          <Card datos={data} id = {index} key ={index} />
        )
      })
   
   
  )
}

export default App
