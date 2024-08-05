// UserProvider.js
import React from "react";

const UserProvider = ({ user, children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { user });
  });
};

export default UserProvider;
