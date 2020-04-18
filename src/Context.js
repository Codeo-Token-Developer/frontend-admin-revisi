import { createContext } from "react";

const url = "https://codeo-admin.herokuapp.com";

const socketUrl = "http://codeo-backend-user.herokuapp.com/"

export const urlContext = createContext(url);

export const urlSocketContext = createContext(socketUrl);

export const adminContext = createContext({});
