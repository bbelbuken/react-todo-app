import React from "react";

const ApiRequest = async ( url = "", method = null, errMsg = null ) => {
  try {
    const response = await fetch(url, method);
    if (!response.ok) throw Error("Please re-load the app");
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;

  }
};



export default ApiRequest;
