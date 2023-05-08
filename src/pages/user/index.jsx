import React, { useEffect, useState } from "react";
import { user } from "../../api/user";

function User() {
  const [userPage, setUsersPage] = useState(null);

  useEffect(() => {
    user(setUsersPage);
  }, []);

  return (
    
      <div className="table-responsive">

      <table className="table table-dark table-striped rounded-bottom">
        <thead>
          <tr>
            <th class=".d-sm-none .d-md-block" scope="col">Id</th>
            <th scope="col">Email</th>
            <th class=".d-sm-none .d-md-block" scope="col">Password</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody class="form-body">
          {userPage != null
            ? userPage.map((user) => (
                <tr>
                  <th class=".d-sm-none .d-md-block" scope="row">{user._id}</th>
                  <td>{user.userName}</td>
                  <td class=".d-sm-none .d-md-block">{user.password}</td>
                  <td>{user.status}</td>
                </tr>
              ))
            : "Do not user"}
        </tbody>
      </table>
      </div>

  );
}

export default User;
