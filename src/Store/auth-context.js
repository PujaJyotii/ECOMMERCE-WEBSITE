import axios from "axios";
import { useState } from "react"
import React from "react";

import { useEffect } from "react";

const AuthContext = React.createContext({
    item:[],
    token:'',
    isLoggedIn:false,
    login:(token) => {},
    logout: () => {},
    email: "",
    addItems: (item) => {},
    removeItems: () => {},
    
})

export const AuthContextProvider = (props) => {
function getItemsFromLocalStorage() {
    let item = localStorage.getItem("item");
    if (!item) {
      return { token: "", email: "" }; ;
    }
    return JSON.parse(item); 
}
   const getToken = () => {
        const item = getItemsFromLocalStorage();
        if (item === "") return;
        return item.token;
      }
      const getEmail = () => {
        const item = getItemsFromLocalStorage();
        if (item === "") return;
        return item.email;
      }

      const [token,setToken] =useState(getToken);
  const [email, setemail] = useState(getEmail);
  const [items, setItems] = useState([]);

const userIsLoggedin = !!token;

const loginHandler = (token,email) => {
    let item = {
        token: token,
        email: email,
      };
      item = JSON.stringify(item);
      localStorage.setItem("item", item);
      setToken(token);
      setemail(email);
    
}

const logoutHandler = () => {
    setToken(null)
    setemail(null)
    localStorage.removeItem('item')
}

async function addItemsHandler(item) {
    let createnewEmail = email;
    createnewEmail = email.replace(/[@.]/g, "");
    const IndexofItem = items.findIndex((ind) => {
      return ind.title === item.title;
    });
    if (IndexofItem === -1) {
      try {
        let response = await axios.post(
          `https://crudcrud.com/api/e56a9edb777e4ce18bbb2f87a6b1cd3e/cart${createnewEmail}`,
          item,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        response = await response;
        response = response.data;
        setItems((prev) => {
          return [...prev, response];
        });
      } catch (err) {
        console.log("the error is", err);
      }
    } else {
      const copyItems = [...items];
      copyItems[IndexofItem].quantity += 1;
      setItems(copyItems);
      try {
        let response = await axios.put(
          `https://crudcrud.com/api/e56a9edb777e4ce18bbb2f87a6b1cd3e/cart${createnewEmail}/${copyItems[IndexofItem]._id}`,
          {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity + 1,
            imageUrl: item.imageUrl,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(`the error is ${err}`);
      }
    }
  }

  useEffect(() => {
    async function getItemList(createnewEmail) {
      try {
        let response = await axios.get(
          `https://crudcrud.com/api/e56a9edb777e4ce18bbb2f87a6b1cd3e/cart${createnewEmail}`
        );
        response = await response;
        setItems(response.data);
      } catch (err) {
        console.log(`the error is ${err}`);
      }
    }

    if (email != null) {
      let createnewEmail = email;
      createnewEmail = email.replace(/[@.]/g, "");
      getItemList(createnewEmail);
    } else {
      setItems([]);
    }
  }, [email]);

  async function removeItemsHandler(id) {
    const ItemIndex = items.findIndex((item) => {
      return item.id === id;
    });
    const copyArr = [...items];
    let createnewEmail = email;
    createnewEmail = email.replace(/[@.]/g, "");
    if (items[ItemIndex].quantity > 1) {
      copyArr[ItemIndex].quantity -= 1;
      setItems(copyArr);
      try {
        let response = await axios.put(
          `https://crudcrud.com/api/e56a9edb777e4ce18bbb2f87a6b1cd3e/cart${createnewEmail}/${copyArr[ItemIndex]._id}`,
          {
            id: copyArr[ItemIndex].id,
            title: copyArr[ItemIndex].title,
            price: copyArr[ItemIndex].price,
            quantity: copyArr[ItemIndex].quantity - 1,
            imageUrl: copyArr[ItemIndex].imageUrl,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    } else {
      const Itemafterdeletetion = copyArr.filter((item) => {
        return item.id !== id;
      });
      setItems(Itemafterdeletetion);
      try {
        await axios.delete(
          `https://crudcrud.com/api/e56a9edb777e4ce18bbb2f87a6b1cd3e/cart${createnewEmail}/${copyArr[ItemIndex]._id}`
        );
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    }
  }


const contextValue = {
    item:items,
    token:token,
    isLoggedIn:userIsLoggedin,
    login:loginHandler,
    logout:logoutHandler,
    email:email,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
}

    return (<AuthContext.Provider  value={contextValue}>{props.children}</AuthContext.Provider>)
}

export default AuthContext