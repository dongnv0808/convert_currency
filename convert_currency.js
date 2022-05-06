// let convert = document.getElementById("convert");
// convert = document.addEventListener("click",convert_currency);
function convert_currency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let convert = amount/fromCurrency*toCurrency;
    document.write(+convert);
        // if ( fromCurrency == "VND" && toCurrency == "USD")  {
        //     convert = amount/23000;
        //     document.write( + convert);
        // }
        // else if ( fromCurrency == "USD" && toCurrency == "VND") {
        //     convert = amount*23000;
        //     console.log( + convert);
        //     document.write( + convert);
        // }
        // else if (toCurrency == "VND" && fromCurrency == "VND"){
        //     document.write( + amount);
        // }
        
        // else if (toCurrency == "USD" && fromCurrency == "USD"){
        //     document.write( + amount);
        // }

    }
