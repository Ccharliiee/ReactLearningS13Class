// import { useState, useEffect } from "react";
import { Component } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";

import Users from "./Users";
import UsersErrorBoundary from "./UsersErrorBoundary";
/* const API_DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
]; */

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      usersTable: [],
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    //console.log(this.context.users);
    this.setState({
      usersTable: this.context.users,
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.context.users);
    if (prevState.searchTerm !== this.state.searchTerm) {
      //console.log("this.state.usersTable: ", this.state.usersTable);
      this.setState({
        filteredUsers: this.state.usersTable.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <UsersErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </UsersErrorBoundary>
      </>
    );
  }
}

/* const UserFinder1 = () => {
  const [filteredUsers, setFilteredUsers] = useState(API_DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      API_DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>

      <Users users={filteredUsers} />
    </>
  );
}; */

export default UserFinder;
