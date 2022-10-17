import { useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";

import Users from "./Users";
const API_DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      usersTable: [],
      filteredUsers: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    this.setState({ usersTable: API_DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
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

        <Users users={this.state.filteredUsers} />
      </>
    );
  }
}

const UserFinder1 = () => {
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
};

export default UserFinder;
