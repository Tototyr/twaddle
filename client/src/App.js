import React, {Component} from 'react';
import io from 'socket.io-client';

class App extends Component {
    state = {
        message: ""
    };

    handleChange = (event) => {
        this.setState({message: event.target.value});
    };

    sendMessage = () => {
        const message = this.state.message;
        const socket = io();

        socket.connect('http://localhost:3000');
        socket.on('chat', function (data) {
            console.log(data);
            socket.emit('my other event', { my: message });
        });
    };

    render() {
        const message = this.state.message;

        return (
            <div>
                <input type="text" value={message} onChange={this.handleChange}/>
                <button onClick={this.sendMessage}>Send message</button>
            </div>
        )
    }
}

export default App;
