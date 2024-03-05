import React from "react";

const UserContext = React.createContext('Hello Context')
// Here Hello context is default value if we don't use UserContext.

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext