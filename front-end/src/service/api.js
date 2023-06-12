import axios from "axios";
var BaseUrl = 'http://localhost:9500';

export const GetMenuAdmin = async (token) => {
    let response = await axios.get(`${BaseUrl}/api/GetMenu`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}

export const GetpreName = async (token) => {
    let response = await axios.get(`${BaseUrl}/api/GetpreName`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data
};
export const GetBloodType = async () => {
    let response = await axios.get(`${BaseUrl}/api/GetBloodType`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;

};
export const GetStatus_relationship = (token) => {
    return axios
        .get(`${BaseUrl}/api/GetStatus_relationship`, {
            headers: {
                "authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
export const GetTbl_country = (token) => {
    return axios
        .get(`${BaseUrl}/api/GetTbl_country`, {
            headers: {
                "authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetTbl_district = (token) => {
    return axios
        .get(`${BaseUrl}/api/GetTbl_district`, {
            headers: {
                "authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
};

export const GetTbl_subdistrict = (token) => {
    return axios.get(`${BaseUrl}/api/GetTbl_subdistrict`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}
export const GetTbl_religion = async (token) => {
    let response = await axios.get(`${BaseUrl}/api/GetTbl_religion`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    // console.log(response);
    return response.data;
}
export const CreateMember = (data, token) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/api/CreateMember`,
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `Bearer ${token}`
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (response) {
        console.log(response);
    });
}

export const GetMemberAll = async (token) => {
    return await axios
        .get("http://localhost:9500/api/selectMemberAll", {
            headers: {
                "authorization": `Bearer ${token}`
            },
        })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err);
        });
}
export const DeleteMember = async (id, token) => {
    return axios.post(`${BaseUrl}/api/DeleteMember/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    }).then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err);
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
export function GetAllPosition(token) {
    let response = axios.get(`${BaseUrl}/api/GetAllPosition`,
        {
            headers: {
                "authorization": `Bearer ${token}`
            },
        }
    );
    // console.log(response);
    return response;
}
export function Add_edit_position(file_Data, token) {
    // console.log(file_Data);
    axios({
        method: "post",
        url: `${BaseUrl}/api/Edit_Add_Position`,
        data: file_Data,
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
export function Delete_position(id, token) {
    axios.post(`${BaseUrl}/api/Delete_position/${id}`, {
        id: id
    }, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}
export async function getPositionINtype(id, token) {
    const res = await axios.get(`${BaseUrl}/api/GetpositionIntype/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    // console.log(res);
    return res.data
}
// end position


// user
export function GetAll_user(token) {
    let response = axios.get(`${BaseUrl}/api/GetUser`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response;
}
export function Get_permission(token) {
    let response = axios.get(`${BaseUrl}/api/GetUser_permission`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response;
}

export function Insert_Edit_User_Add(formData, token) {

    return axios({
        method: "post",
        url: `${BaseUrl}/api/Insert_Edit_User`,
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `Bearer ${token}`
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (response) {
        //handle error
        console.log(response);
    });
    // return response;
}
export async function FindByIdUser(id = '', token) {
    console.log(id);
    let response = await axios.get(`${BaseUrl}/api/FindUserByID/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    // console.log(response);
    return response.data;
}

export async function GetType_position(token) {
    let response = await axios.get(`${BaseUrl}/api/GetType_position`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}
export async function Insert_position(data, token) {
    // console.log(data);
    let response = await axios.post(`${BaseUrl}/api/Edit_type_position`, {
        data: data
    }, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}
export async function Delete_type_position(id, token) {
    let response = await axios.post(`${BaseUrl}/api/Delete_type_position/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}

export async function GetAllpermissions(token) {
    let response = await axios.get(`${BaseUrl}/api/permissionsAll`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}

export async function Delete_user(id, token) {
    let response = await axios.post(`${BaseUrl}/api/Delete_user/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}

export async function Get_memberby_id(id) {
    // console.log(id);
    let response = await axios.get(`${BaseUrl}/api/selectMember/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return response.data;
}

export async function InsertAndEditApply(data, C_apply) {
    return axios({
        method: "post",
        url: `${BaseUrl}/api/UpdateApply_Insert`,
        data: {
            data,
            C_apply
        },
        // headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
        console.log(response);
        // return response.data;
    }).catch(function (response) {
        //handle error
        console.log(response);
    });
}

export const GetdetailCard = async (token) => {
    let res = await axios.get(`${BaseUrl}/api/CardDashboard`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}

export const GetAllApply = async (token) => {
    let res = await axios.get(`${BaseUrl}/api/GetApply`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}
export const GetCheckAllPermissions = async (token) => {
    let res = await axios.get(`${BaseUrl}/api/CheckAllPermissions`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}

export const EditCheckAllPermissions = async (data, token) => {
    axios
        .post(`${BaseUrl}/api/UpdatePermissions`, {
            per_user: data[0],
            per_menu: data[1],
        }, {
            headers: {
                "authorization": `Bearer ${token}`
            },
        })
        .then((response) => {
            console.log(response);
        });
}
export const GetFilePositionsById = async (id, token) => {
    let res = await axios.get(`${BaseUrl}/api/GetFilePositions/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}

export const GetOrganizationAll = async (token) => {
    let res = await axios.get(`${BaseUrl}/api/GetOrganization`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}

export const AuthLoginAdmin = async (data) => {
    return await axios
        .post(`${BaseUrl}/api/LoginAdmin`, {
            user_username: data.user_username,
            user_password: data.user_password,
        })
        .then((response) => {
            return response.data;
        });
}
export const GetVertifyAdmin = async (token) => {
    return axios({
        method: "get",
        url: `${BaseUrl}/api/getMeAdmin`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            // console.log(response);
            return response.data;
        })
        .catch(function (response) {
            console.log(response);
        });
}

export const GetPayment = async (token) => {
    let res = await axios.get(`${BaseUrl}/api/GetAllPayment`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
    return res.data;
}



export const GetAllPaymentByID = async (id, token) => {
    let res = await axios.get(`${BaseUrl}/api/GetAllPaymentBy/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}
export const GetPositionPayment = async (id, token) => {
    let res = await axios.get(`${BaseUrl}/api/GetPositionToexport/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data;
}
export const InsertAndEditTree = async (DataTree, token) => {
    // console.log(DataTree);
    return axios({
        method: "post",
        url: `${BaseUrl}/api/InsertEditTree`,
        data: {
            org_id: DataTree.org_id,
            org_name: DataTree.org_name,
            org_parent: DataTree.org_parent,
            org_active: DataTree.org_active
        },
        headers: {
            "authorization": `Bearer ${token}`
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (response) {
        console.log(response);
    });

}
export const Delete_TreeOrg = async (id, token) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/api/DeleteTree/${id}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (response) {
        console.log(response);
    });
}

export const InsertAndEditApplyData = async (data, token) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/api/ManageInsertAndEdit`,
        data: data,
        headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

}
export const Delete_ApplyData = async (id, token) => {
    return axios({
        method: "post",
        url: `${BaseUrl}/api/DeleteApply/${id}`,
        headers: {
            "authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            return response.data
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}
export const GetApply_ByID = async (id, token) => {
    let res = await axios.get(`${BaseUrl}/api/GetApply/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        },
    });
    return res.data[0];
}



