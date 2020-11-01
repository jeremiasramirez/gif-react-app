import React from 'react'
import Home from '../pages/home/home.page'
import SearchPage from '../pages/search/search.page'
import App from '../App'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Menu from '../components/menu/menu.component'


const RoutingApp = ()=>{

    return <Router>
   
            <div>
               <Menu />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/search' component={SearchPage}/>
                    <Route path='/' component={App}/>
                </Switch>
                </div>

            </Router>
 
}
export default RoutingApp
 