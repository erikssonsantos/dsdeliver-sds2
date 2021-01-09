import axios from "axios";

// const API_URL = "https://eriksson-sds2.herokuapp.com";
const API_URL = "https://eriksson-sds2.herokuapp.com";
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

// const mapboxToken = "pk.eyJ1IjoiYXJxdWljZXUiLCJhIjoiY2tqcTQ2cXVpM2s1djJ5cGdmZ2VkMTd1aiJ9.rNJlWd4GnmRy96OSJj4iOA";

export function fetchProducts() {
    return axios(`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}