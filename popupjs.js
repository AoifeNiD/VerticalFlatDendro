
//Function To Display Popup
function div_show() {
    $("#abc").css("display", "block")
}
//Function to Hide Popup
function div_hide(){
    document.getElementById('abc').style.display = "none";
}

//Function to use the <a> class "show" to open the popup
$(document.body).on("click", ".show", function(){
    div_show()
});
