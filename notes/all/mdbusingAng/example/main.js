$(document).ready(function () {
	$('#add-book').on('submit', function(e){
		e.preventDefault();
		var title = $('#title').val();
		var samp = $('#samp').val();

		$.ajax({
		url: "https://api.mlab.com/api/1/databases/srimandb/collections/sam?apiKey=511i2fMnEj2hNOlymaLpCLtDk-1G-NMx",
		data: JSON.stringify({
		    "title": title,
            "samp":samp
		}),
		type: "POST",
		contentType: "application/json",
		success: function(data){
			window.location.href="index.html"
		},
		error: function(xhr, status, err){
			console.log(err);
		}

		});
	});
});

function getBooks(){
	$.ajax({
		url: "https://api.mlab.com/api/1/databases/srimandb/collections/sam?apiKey=511i2fMnEj2hNOlymaLpCLtDk-1G-NMx"
		}).done(function(data){
		    var output = '<div>';

            /*
		    $.each(data, function (key, data) {
		        output += '<div class"well">';
		        output += '<table>';
		        output += '<thead>';
		        output += '<tr>';
		        output += '<th> Data_1 </th>';
		        output += '<th> Data_2 </th>';
		        output += '<tr>';
		        output += '</thead>';
		        output += '<tbody>';
		        output += '<tr>';
		        output += '<td>' + data.title + '</td>';
		        output += '<td>' + data.samp + '</td>';
		        output += '</tr>';
		        output += '</tbody>';
		        output += '</table>';
		        output += '</div>';
		    });
            */

		    output += '<div class"well">';
		    output += '<table>';
		    output += '<thead>';
		    output += '<tr>';
		    output += '<th> Book Title </th>';
		    output += '<th> Book Sample </th>';
		    output += '<tr>';
		    output += '</thead>';
		    output += '<tbody>';
		    output += '<tr>';
		    $.each(data, function (key, data) {
		        output += '<tr>';
		        output += '<td>' + data.title + '</td>';
		        output += '<td>' + data.samp + '</td>';
		        output += '</tr>';
		    });
		    output += '</tr>';
		    output += '</tbody>';
		    output += '</table>';
		    output += '</div>';


			$('#books').html(output);
            
		});

	console.log(angular.toJson(output));
}


