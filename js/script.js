getQuote.addEventListener("click",toQuotePage)

function toQuotePage(){
    if (document.getElementById('ftl_index').checked) {
        window.location.href="ftl_quotes.html#ftl_quote_info";
    } else if (document.getElementById('ltl_index').checked) {
        window.location.href="ltl_quotes.html";
    } else {
        alert("Please select FTL or LTL");
    }
}