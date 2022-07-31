
export function fetchJoinuser(id, password, name, phonenumber, email) {
    const uri = 'http://192.168.35.182:3000/userjoin';

    return fetch(uri, {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ID: id,
            PASSWORD: password,
            NAME: name,
            PHONENUMBER: phonenumber,
            EMAIL: email
        })
    }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).catch((error) => {
            if (error.message == "Network request failed") {
                alert("네트워크 오류");
            }
            return { error: false };
        })
}



export default { fetchJoinuser };