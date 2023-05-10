import axios from "axios";
import { API_URL } from "../constants/constant";

//pcihe se humre searchedQuery aa rhi h props k trh pass kro
//api ka use krna hein ya fetch kran hein to axios ka use krenge

//forkify-api.herokuapp.com/api/search?q=onio
export const getRecipies = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
    return response.data;
  } catch (error) {
    alert("data is not present ");
    console.log("Error while calling the api", error.message);
    return error.response;
  }
};

// export const getRecipess=async()=>{
//   try{

//     let response=await axios.get(`${API-URI}/search=?q=${searchedQuery}`
//     )
//     return response.data;
//   }
//   catch{

//   }

// }
//axios ka jo response aata hein wo humesa data field mein reheta hein to hume response ko response .data
export const getRecipie = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
    return response.data;
  } catch (error) {
    console.log("Error while calling the api", error.message);
    return error.response;
  }
};
