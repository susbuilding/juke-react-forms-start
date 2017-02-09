import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class PlaylistContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount () {
    //     axios.post('/api/playlists', { /** req.body contents go here! */
    //         name: this.state.inputValue
    //     })
    //     .then(res => res.data)
    //     .then(result => {
    //         console.log(result) // response json from the server!
    //     });
    // }


    handleChange(evt) {
        const value = evt.target.value;
            this.setState({
                inputValue: value,
                touched: false
            })
    }

    handleSubmit(evt) {
       evt.preventDefault();
       this.setState({
           inputValue: '',
           touched: true
       })

       axios.post('/api/playlists', { /** req.body contents go here! */
            name: this.state.inputValue
        })
        .then(res => res.data)
        .then(result => {
            console.log(result) // response json from the server!
        });
    }

    render(){
        const inputValue = this.state.inputValue;

        return (
            <div>
                <NewPlaylist
                    handleChange= {this.handleChange}
                    handleSubmit={this.handleSubmit}
                    inputValue={this.state.inputValue}
                    touched={this.state.touched} />
            </div>
        )
    }
}
