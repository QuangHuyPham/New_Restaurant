import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Home</h1>
                <button><Link to="/restaurants" style={{ textDecoration: 'none' }}>List Restaurants</Link></button>
            </div>
        );
    }
}

export default Home;