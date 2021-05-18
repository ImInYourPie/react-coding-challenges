import apiConfig from "../config";

import axios from "axios";
import qs from "qs";

export const getToken = async () => {
  const clientId = apiConfig.api.clientId;
  const clientSecret = apiConfig.api.clientSecret;

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    auth: {
      username: clientId,
      password: clientSecret
    }
  };

  const data = {
    grant_type: "client_credentials"
  };

  try {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );

    return res.data.access_token;
  } catch (err) {
    console.log(err);
  }
};
