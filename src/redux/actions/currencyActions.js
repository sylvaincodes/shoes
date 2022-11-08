
// var d = new Date(date);
// const date = [
//   d.getFullYear(),
//   ('0' + (d.getMonth() + 1)).slice(-2),
//   ('0' + d.getDate()).slice(-2)
// ].join('-');


export const SET_CURRENCY = "SET_CURRENCY";

export const setCurrency = currencyName => {
    return dispatch => {
        var myHeaders = new Headers();
        myHeaders.append("apikey", "84uarW3YLNwJhvL4XMtJUPsAE3ewybNS");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch("https://api.apilayer.com/currency_data/change?start_date=2022-11-07&end_date=2022-11-07",requestOptions)
            .then(response => {
                let currencyRate = 0;

                dispatch({
                    type: SET_CURRENCY,
                    payload: { currencyName, currencyRate }
                  });
            })
    }
}