const populate = async (value, currency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_Y1tJQmNQAiWNwrflK55r8046xj6auow6QdJGVfTF&base_currency=" + currency
    let response = await fetch(url)
    let rJason = await response.json()

    for (let key of Object.keys(rJason["data"])) {
        myStr += ` <tr>
                    <td>${key}</td>
                    <td>${rJason["data"][key]["code"]}</td>
                    <td>${rJason["data"][key]["value"] * value}</td>
                    </tr>   
                  `
    }


    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency)
}) 
