import React, { useEffect, useState } from "react";
import { user } from "../../api/user";

function User() {
  const [userPage, setUsersPage] = useState(null);

  useEffect(() => {
    user(setUsersPage);
  }, []);

  return (
    <>
      <table className="container table table-dark table-striped rounded-bottom">
        <div className="table-box">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody class="form-body">
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
        </div>
      </table>
    </>
  );
}

export default User;
