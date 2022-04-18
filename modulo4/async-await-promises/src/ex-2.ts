import axios from "axios";

const getAllSubscribersArrow = async(): Promise<any[]> => {
    const response = await axios.get(`https://labenews.herokuapp.com/subscribers`)
    console.log(response.data)
    return response.data
};

export default getAllSubscribersArrow;