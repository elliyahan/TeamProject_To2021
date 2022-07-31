export function fetchGetProduct() {
    const uri = "http://192.168.35.182.73:3000/productget";

    return fetch(uri, {
        method: "GET"
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

