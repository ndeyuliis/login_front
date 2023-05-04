import React, { useEffect, useState } from "react";
import { user } from "../../api/user";

function User() {
  const [userPage, setUsersPage] = useState(null);

  useEffect(() => {
    user(setUsersPage);
  }, []);

  return (
    <>
      <table className="container table table-dark table-striped w-75 position-absolute translate-middle top-50 start-50 rounded-bottom">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {userPage != null
            ? userPage.map((user) => (
                <tr>
                  <th scope="row">{user._id}</th>
                  <td>{user.userName}</td>
                  <td>{user.password}</td>
                  <td>{user.status}</td>
                </tr>
              ))
            : "Do not user"}
        </tbody>
      </table>
    </>
  );
}

export default User;
