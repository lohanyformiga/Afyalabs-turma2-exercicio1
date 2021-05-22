import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.chucknorris.io/jokes/"
});

export const postform = axios.create({
    baseURL: "https://webhook.site/693f6bd0-56bb-4cc0-b20e-3d5476b00123"
});