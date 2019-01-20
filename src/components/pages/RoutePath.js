import React, {Component} from 'react'
import { HashRouter as Router , Route , Switch} from 'react-router-dom';
import AddContacts from '../ui/AddContacts'
import Contacts from '../ui/Contacts'
import Home from '../ui/Home'
import MovieDet from '../ui/MovieDet';

class RoutePath extends Component{
    render(){
        return <React.Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/add_contact" component={AddContacts}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/movie_detail" component={MovieDet}/>
                        {/* <Route exact path="/home" component={Contacts}/> */}
                    </Switch>
                </Router>
            </React.Fragment>
    }
}


export default RoutePath


