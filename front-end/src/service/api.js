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

// Position
export function GetAllPosition() {
    let response = axios.get(`${BaseUrl}/api/GetAllPosition`);
    // console.log(response);
    return response;
}
export function Add_edit_position(p_name, p_id = '', p_type, p_active, file = '') {
    axios.post(`${BaseUrl}/api/Edit_Add_Position`, {
        p_id: p_id,
        p_name: p_name,
        p_type: p_type,
        p_active: p_active
    })
}

