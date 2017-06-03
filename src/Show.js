import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Show = () =>(
<Router>
   <div>
    <h1><Link to="/home">Harish</Link></h1>
   <Route path="/home" component={Home}/>
   </div>

</Router>
)
const Home = () =>(

    <div>
        <h1>Home</h1>
    </div>

)

//class Show extends React.Component{
//    render(){
//    return(
//        <div>
//            <h1>Harish</h1>
//        </div>
//    )
//    }
//}
export default Show;