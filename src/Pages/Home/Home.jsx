import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Home.scss";
const Home = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const [users, setusers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, status } = await axios.get("http://localhost:3000/users");
    if (status === 200) {
      setusers(data);
    }
  };

  console.log(users);

  return (
    <div>
      <div>
        <NavLink to={"/home/add"} className={"btn"}>
          add Employee +++
        </NavLink>
        <button onClick={logout}>Log Out</button>
      </div>

      <div className="top">
        <span>id</span>
        <span>First Name</span>
        <span>last name</span>
        <span>email</span>
        <span>salary</span>
        <span>gender</span>
      </div>
      <div>
        {users.map((user) => (
          <div className="user" key={user.id}>
            <span>{user.id}</span>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
            <span>{user.email}</span>
            <span>{user.salary}$</span>
            <span>{user.gender}</span>
            <NavLink to={`/home/user/${user.id}`} className={"btn"}>
              show
            </NavLink>
            <NavLink to={`/home/edit/${user.id}`} className={"btn"}>
              edit
            </NavLink>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
