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
}

export const LoginUser = async (data) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/login`,
        data: data,
    }).then(function (response) {
        return response.data;
    }).catch(function (response) {
        //handle error
        console.log(response);
    });

}


export const Vertify_token = async (token) => {
    return axios.get(`${BaseUrl}/me`, {
        headers: {
            'authorization': `bearer ${token}`
        }
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        console.error(error)
    })
}

export const UpdateDetail_user = async (user, id, token) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/editDetails/${id}`,
        data: user,
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

export const User_is_Accept = async (id, token) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/is_Accept/${id}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

export const Getjob_user = async (limit, token) => {
    // console.log(token);
    return axios({
        method: "get",
        url: `${BaseUrl}/getWork/${limit}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (e) {
        console.log(e);
    });

}

export const Getpostion_injob = async (id, token) => {

    return axios({
        method: "get",
        url: `${BaseUrl}/getListJob_position/${id}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            console.log(response.data);
            return response.data;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
export const GetFileposition_injob = async (id, token) => {
    return axios({
        method: "get",
        url: `${BaseUrl}/getfileJob/${id}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
export const GetDetailposition_injob = async (id, token) => {
    return axios({
        method: "get",
        url: `${BaseUrl}/getDetailJob/${id}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

export const ShowDetailDataUser_Last = async () => {
    let res = await axios.get(`${BaseUrl}/ShowDetailDataUserLast`);
    console.log(res);
    return res.data
}
export const Show_DetailPositions = async () => {
    let res = await axios.get(`${BaseUrl}/ShowDetailPositions`);
    return res.data;
}

