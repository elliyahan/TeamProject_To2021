export function fetchGetsAuction() {
    const uri = "http://192.168.35.182:3000/auctiongets";

    return fetch(uri, {
        method: "GET"
    }).then((response) => response.json())
    .then((responseJson) => {
        console.log("fetch")
        console.log(responseJson)
        return responseJson;
    }).catch((error) => {
        if (error.message == "Network request failed") {
            alert("네트워크 오류");
        }
        return { error: false };
    })
}
