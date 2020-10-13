import React from 'react' ;
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import IndexPage from "./pages";
import AllTodos from "./pages/AllTodos";
import CompletedTodos from "./pages/CompletedTodos";
import InProgressTodos from "./pages/InProgressTodos";

const App = ()=>{
  return (
    <React.Fragment>
      <Header/>
       <Switch>
         <Route path='/' component={IndexPage} exact/>
         <Route path='/all' component={AllTodos} />
         <Route path='/completed' component={CompletedTodos} />
         <Route path='/in-progress' component={InProgressTodos} />
       </Switch>
    </React.Fragment>
  )
}
export default App ;
