import axios from "axios";
var BaseUrl = 'http://localhost:9500/api/user';


export const Get_person_NoSuccess = async () => {
    let response = await axios.get(`${BaseUrl}/person_noSuccess`);
    return response.data;
}


export const Get_person_All = async () => {
    let response = await axios.get(`${BaseUrl}/person_all`);
    return response.data;
}
export const Get_person_NoPayment = async () => {
    let response = await axios.get(`${BaseUrl}/person_noPayment`);
    return response.data;
}

export const RegisterNewUser = async (data) => {
    console.log(data);
    return axios.post(`${BaseUrl}/register`, {
        data
    }).then(response => {
        console.log(response);
        return response.data;
    })
    return response.data;
}