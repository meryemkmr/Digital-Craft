import React, {Component} from 'react';
import Virus from './components/Virus';
import './App.css';
import data from "./data/virus"

class App extends Component { 
    render(){
      let newDataSet = data.map(()=>{
        return <Virus num={cdc.numViruses} country ={cdc.country}/>
      })
      return(
        <div>
          {/* <Virus num="0" country ="Greenland"/> */}
          {newDataSet}

          </div>
      )
    }

}
export default App;
// function App(props) {

//   let newDataSet = data.map((cdcData)=>{

//     return <Virus num = {cdcData.numVirus} country = {cdcData.country}/>

//   })

//   return (
//     <div >
      
//     {newDataSet}
      
//     </div>
//   );
// }

// export default App;
