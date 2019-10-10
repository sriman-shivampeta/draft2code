$(document).ready(function () {
$('#add-data').on('submit', function(e){
    e.preventDefault();

    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var message = $('#message').val();

$.ajax({
    url: "https://api.mlab.com/api/1/databases/contact_info/collections/contact?apiKey=511i2fMnEj2hNOlymaLpCLtDk-1G-NMx",
data: JSON.stringify({
    "name": name,
    "phone": phone,
    "email": email,
    "message": message
}),
type: "POST",
contentType: "application/json",
success: function(data){
    window.location.href ="http://www.draft2code.com/"
},
error: function(xhr, status, err){
console.log(err);
}

});
});
});
