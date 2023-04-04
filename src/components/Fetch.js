import axios from "axios";

const Fetch = async () => {
    //Fetching the list particularly
    const response = await axios.get("https://api.mfapi.in/mf")
    // console.log(response.data);
    return response.data;
}

export { Fetch };