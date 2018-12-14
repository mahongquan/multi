import React from 'react';
import io from 'socket.io-client';
const HOST = 'http://localhost:8000';
var socket = io.connect(HOST);
class UsersList extends React.Component {
  render() {
    return (
      <div className="users">
        <h3> Online Users </h3>
        <ul>
          {this.props.users.map((user, i) => {
            return <li key={i}>{user}</li>;
          })}
        </ul>
      </div>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <strong>{this.props.user} :</strong>
        <span>{this.props.text}</span>
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <div className="messages">
        <h2> Conversation: </h2>
        {this.props.messages.map((message, i) => {
          return <Message key={i} user={message.user} text={message.text} />;
        })}
      </div>
    );
  }
}

class MessageForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { text: '' };
    this.changeHandler = this.changeHandler.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    var message = {
      user: this.props.user,
      text: this.state.text,
    };
    this.props.onMessageSubmit(message);
    this.setState({ text: '' });
  };

  changeHandler(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="message_form">
        <h3>Write New Message</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.changeHandler} value={this.state.text} />
        </form>
      </div>
    );
  }
}

class ChangeNameForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { newName: '' };
  }

  onKey = e => {
    this.setState({ newName: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    var newName = this.state.newName;
    this.props.onChangeName(newName);
    this.setState({ newName: '' });
  };

  render() {
    return (
      <div className="change_name_form">
        <h3> Change Name </h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onKey} value={this.state.newName} />
        </form>
      </div>
    );
  }
}

export default class ChatApp extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { users: [], messages: [], text: '' };
  }

  componentDidMount() {
    socket.on('init', this._initialize);
    socket.on('send:message', this._messageRecieve);
    socket.on('user:join', this._userJoined);
    socket.on('user:left', this._userLeft);
    socket.on('change:name', this._userChangedName);
  }

  _initialize = data => {
    console.log('init=====');
    console.log(data);
    var { users, name } = data;
    this.setState({ users, user: name });
  };

  _messageRecieve = message => {
    var { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
  };

  _userJoined = data => {
    var { users, messages } = this.state;
    var { name } = data;
    users.push(name);
    messages.push({
      user: 'APPLICATION BOT',
      text: name + ' Joined',
    });
    this.setState({ users, messages });
  };

  _userLeft = data => {
    var { users, messages } = this.state;
    var { name } = data;
    var index = users.indexOf(name);
    users.splice(index, 1);
    messages.push({
      user: 'APPLICATION BOT',
      text: name + ' Left',
    });
    this.setState({ users, messages });
  };

  _userChangedName = data => {
    var { oldName, newName } = data;
    var { users, messages } = this.state;
    var index = users.indexOf(oldName);
    users.splice(index, 1, newName);
    messages.push({
      user: 'APPLICATION BOT',
      text: 'Change Name : ' + oldName + ' ==> ' + newName,
    });
    this.setState({ users, messages });
  };

  handleMessageSubmit = message => {
    var { messages } = this.state;
    messages.push(message);
    this.setState({ messages });
    socket.emit('send:message', message);
  };

  handleChangeName = newName => {
    var oldName = this.state.user;
    socket.emit('change:name', { user: oldName, name: newName }, result => {
      if (!result) {
        return alert('There was an error changing your name');
      }
      var { users } = this.state;
      var index = users.indexOf(oldName);
      users.splice(index, 1, newName);
      this.setState({ users, user: newName });
    });
  };

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
        <MessageList messages={this.state.messages} />
        <MessageForm
          onMessageSubmit={this.handleMessageSubmit}
          user={this.state.user}
        />
        <ChangeNameForm onChangeName={this.handleChangeName} />
      </div>
    );
  }
}
