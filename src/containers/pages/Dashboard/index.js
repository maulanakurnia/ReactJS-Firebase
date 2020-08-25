import React, { Component } from 'react';
import './Dashboard.scss'
class Dashboard extends Component {
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="input-form">
                        <input placeholder="title" className="input-title"/>
                        <textarea placeholder="content" className="input-content"/>
                        <button className="btn-save">Save</button>
                    </div>
                    <div className="dash"/>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                    <div className="card-content">
                        <p className="title">Title</p>
                        <p className="date">21 september 2020</p>
                        <p className="content">Content Notes</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;