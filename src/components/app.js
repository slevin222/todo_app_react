import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import axios from 'axios';
import ToDoList from './todo_list';
import AddForm from './add_form';
import todoData from '../assets/data';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=shawn1234';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
            console.log("server response ", resp);

            this.setState({
                list: resp.data.todos
            });
        });
    }

    addItem(item) {
        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then(resp => {
            console.log('item resp', resp)
            this.getData();
        });
    }

    deleteItem(id) {
        console.log('delete id:', id);

        axios.delete(`${BASE_URL}/todos/${id + API_KEY}`).then(resp => {
            console.log('delete resp : ', resp);
            this.getData();

        });

    }

    toggleComplete(id) {
        axios.put(`${BASE_URL}/todos/${id + API_KEY}`).then(resp => {
            console.log("toggle ", resp);
        })
        ///if you click on link should call function and show complete =true
        // different colers if complete
        //
    }

    render() {
        return (
            <div className="container">
                <h1 className="center-align">To Do App</h1>
                <AddForm add={this.addItem} />
                <ToDoList list={this.state.list} delete={this.deleteItem} toggle={this.toggleComplete} />
            </div>
        )
    }
}

export default App;
