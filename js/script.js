// PREVENT MOVING TO QUOTE PAGE WITHOUT ENTERING FREIGHT TYPE
getQuote.addEventListener("click",toQuotePage)
function toQuotePage(){
    if (document.getElementById('ftl_index').checked) {
        window.location.href="ftl_quotes.html#ftl_quote_info";
    } else if (document.getElementById('ltl_index').checked) {
        window.location.href="ltl_quotes.html#ltl_quote_info";
    } else {
        alert("Please select FTL or LTL");
    }
}

// PREVENTS OVER 5 DIGIT ZIP ON INDEX PAGE QUOTE BOX 


$(function() {
    $("#loginButton").click(function () {
      $("#loginModal").modal('show');
    });
  });