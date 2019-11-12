import React from 'react';
import { Router, Route } from 'react-router-dom'
import StreamEdit from '../Streams/StreamEdit'; 
import StreamCreate from '../Streams/StreamCreate'; 
import StreamDelete from '../Streams/StreamDelete'; 
import StreamList from '../Streams/StreamList'; 
import StreamShow from '../Streams/StreamShow'; 
import Header from '../Header';
import history from '../../history';
import './app.css';

const App = () => {
    return(
        <div className="container-fluid">
            
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}
export default App;