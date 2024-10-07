import axios from "axios";
// import publicIp from "react-public-ip";

export const apiUrls = {
    register: "/lostandfound/v1/registration",
}

export async function docSubmit(end_url,formData,contentType = "multipart/form-data") {
    try {
        const headers = {
            "x-application-name": process.env.REACT_APP_NAME,
            "x-application-id": process.env.REACT_APP_ID,
            "Content-Type": contentType,
            // "x-access-token": Cookies.get("token"),
            // "x-application-auth-id": Cookies.get("authId"),
            // ip_address: await publicIp.v4(),
            // request_time: moment().unix(),
        };
        
        console.log("header", headers);
        const url = `${process.env.REACT_APP_BASE_URL}${end_url}`;
        console.log("url----------", url)
        const config = {
            headers: headers,
        };
        const response = await axios.post(url, formData, config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("API Error", error);
        return error.response.data;
    }
}

export const callPostApi = async (url, data) => {
    try {
        const response = await axios({
            url: `${process.env.REACT_APP_BASE_URL}${url}`,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-application-id": process.env.REACT_APP_ID,
                "x-application-name": process.env.REACT_APP_NAME,
                // "x-access-token": token,
            },
            data: data,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
};

export const callGetApi = async (url) => {
    try {
        const response = await axios({
            url: `${process.env.REACT_APP_BASE_URL}${url}`,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-application-id": process.env.REACT_APP_ID,
                "x-application-name": process.env.REACT_APP_NAME,
                // "x-access-token": token
            },
        });
        
        // console.log("response.data ===>", response.data)
        
        return response.data;
    } catch (error) {
        // console.log(`Error getting in api`, error);
        return error?.response?.data;
    }
};
