// This file is the home page component
import { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS style reference
import './css/Home.css';
import './css/index.css';
// Login route
import './login';

// This line simplifies the class name and exporting of the class
export default class Home extends Component {
    render(){
        return (
            <div class="body">
                <div class="container">
                    <div class="items">
                        <h1>yoru</h1>
                        <p>A tool to help you find common breaks in you and your friends' schedules</p>
                        <Link to="/login">
                            <button>Try now</button>
                        </Link>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        );
    }
}

