import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    const DUMMY_USERS = [
      { id: "u1", name: "Max" },
      { id: "u2", name: "Manuel" },
      { id: "u3", name: "Julie" },
    ];
    this.state = {
      showUsers: true,
      curUser: DUMMY_USERS,
    };
  }
  toggleUsersHandler() {
    this.setState(() => {
      return { showUsers: !this.state.showUsers };
    });
  }
  render() {
    const usersList = (
      <ul>
        {this.state.curUser.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

const Users1 = () => {
  const [showUsers, setShowUsers] = useState(true);
  const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
