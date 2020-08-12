import { createContext } from "react";

// const url = "http://34.87.27.86";

//const url="http://34.87.27.86";
const url="http://localhost:3005"


const socketUrl = "http://codeo-backend-user.herokuapp.com/";

export const urlContext = createContext(url);

export const urlSocketContext = createContext(socketUrl);

export const adminContext = createContext({});

export const userManagement=createContext({});
