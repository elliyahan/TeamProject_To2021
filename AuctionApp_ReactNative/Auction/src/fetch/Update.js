
export function fetchListproduct(_id, imagewonsanji, certimage, maintext, subtext1, subtext2, subtext3, subtext4, utong) {
    const uri = 'http://192.168.35.182:3000/productupdate';

    return fetch(uri, {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            _ID: _id,
            IMAGEWONSANJI: imagewonsanji,
            MAINTEXT: maintext,
            SUBTEXT1: subtext1,
            SUBTEXT2: subtext2,
            SUBTEXT3: subtext3,
            SUBTEXT4: subtext4,
            UTONG: utong,
            CERTIMAGE: certimage
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



export default { fetchUpdateproduct };