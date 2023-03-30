import axios from "axios";
var BaseUrl = 'http://localhost:9500';
export const GetpreName = () => {
    return axios
        .get(`${BaseUrl}/api/GetpreName`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
};
export const GetBloodType = () => {
    return axios
        .get(`${BaseUrl}/api/GetBloodType`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
};
export const GetStatus_relationship = () => {
    return axios
        .get(`${BaseUrl}/api/GetStatus_relationship`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
export const GetTbl_country = () => {
    return axios
        .get(`${BaseUrl}/api/GetTbl_country`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetTbl_district = () => {
    return axios
        .get(`${BaseUrl}/api/GetTbl_district`)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetTbl_subdistrict = () => {
    return axios.get(`${BaseUrl}/api/GetTbl_subdistrict`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}
export const GetTbl_religion = () => {
    return axios.get(`${BaseUrl}/api/GetTbl_religion`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            // console.log(err);
        });
}
export const CreateMember = () => {
    return axios.post(`${BaseUrl}/api/CreateMember`)
        .then((res) => {
            // console.log("Insert Data Success");
        })
        .catch((err) => {
            console.log(err);
        });
}

export const GetMemberAll = async () => {
    return await axios
        .get("http://localhost:9500/api/selectMemberAll")
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
}
export const GetAllApply = async () => {
    return await axios.get(`${BaseUrl}/api/GetApplyAll`)
        .then((res) => {
            // console.log(res.data);
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}
export const DeleteMember = async (id) => {
    axios.post(`${BaseUrl}/api/DeleteMember`, {
        id: id,
    }).then((res) => {
        // console.log(res);
    }).catch((err) => {
        // console.log(err);
    });
}
export const Apply_Applycheck = (id) => {
    return axios.post(`${BaseUrl}/api/Apply_Applycheck`, {
        id: id,
    }).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    });
}


// cal_date

export const ConvertTypeDate = (date) => {
    var monthNames = [
        "ม.ค",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
    ];
    const split = date.split('-');
    const day = split[2]?.slice(0, 2)
    const month = split[1];
    const year_th = Number(split[0]) + 543;
    var month_th = ''
    for (let index = 0; index < monthNames.length; index++) {
        if (index == month) {
            month_th = monthNames[index];
        }
    }
    return `${day + ' ' + month_th + ' ' + year_th}`
}
export const ConvertDatetimeToDate = (date) => {
    var monthNames = [
        "ม.ค",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
    ];
    const Datasplit = date.split('-');
    const month = Number(Datasplit[1]);
    // console.log(month);
    var month_th = '';
    const year_th = Number(Datasplit[0]) + 543;
    const day = Datasplit[2]?.slice(0, 2)
    for (let index = 0; index < monthNames.length; index++) {
        if (index == month) {
            month_th = monthNames[index - 1];
        }
    }
    console.log(Number(day));

    return date
}



// Position
export function GetAllPosition() {
    let response = axios.get(`${BaseUrl}/api/GetAllPosition`);
    // console.log(response);
    return response;
}
export function Add_edit_position(file_Data) {
    axios({
        method: "post",
        url: "http://localhost:9500/api/Edit_Add_Position",
        data: file_Data,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
export function Delete_position(id) {
    axios.post(`${BaseUrl}/api/Delete_position`, {
        id: id
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

// end position


// user
export function GetAll_user() {
    let response = axios.get(`${BaseUrl}/api/GetUser`);
    return response;
}
export function Get_permission() {
    let response = axios.get(`${BaseUrl}/api/GetUser_permission`);
    return response;
}

export function Insert_Edit_U(formData) {
    // console.log('qwe');
    let response = axios({
        method: "post",
        url: `${BaseUrl}/api/Insert_Edit_User`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    return response;
}
export async function FindByIdUser(id = '') {
    console.log(id);
    let response = await axios.get(`${BaseUrl}/api/FindUserByID/${id}`);
    // console.log(response);
    return response.data;
}


