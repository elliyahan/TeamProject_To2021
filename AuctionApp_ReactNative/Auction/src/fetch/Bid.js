export function fetchBidAuction(discription,bidprice) {
    const uri = 'http://192.168.35.182:3000/auctionbid';

    return fetch(uri, {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            DISCRIPTION:discription,
            BIDPRICE: bidprice
          
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



export default { fetchBidAuction };