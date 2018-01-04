var root = 'https://jsonplaceholder.typicode.com';

$(document).ready(function () {

	$("button").each(function() {
		this.style.height = '30px';
		this.style.fontSize = '18px';
	})

	$("table").addClass("posts-table");

	$('.btn-get').click(function() {
		getPosts();
	});

	$('.btn-create').click(function() {
		var dataObj = {
			userId: $('.id-field').val(),
			title: $('.title-field').val(),
			body: $('.body-field').val(),
		}
		createPost(dataObj);
	});

	function getPosts() {
		$.ajax({
			type:"GET",
			url: root + '/posts',
			success: function(data) {
				drawTable(data);
			},
			
		});
	}

	function createPost(data) {
		$.ajax({
			type: "POST",
			url: root + '/posts',
			data: {
				userId: data.userId,
				title: data.title,
				body: data.body
			},
			success: function(data) {
				drawTable([data]);
			},
			dataType: 'json',
		});
	}

	function drawTable(rowData) {
		for(var i=0; i<rowData.length; i++) {
			var row = $("<tr />");
			$(".posts-table").append(row);
			row.append($("<td>" + rowData[i].id + "</td>"));
			row.append($("<td>" + rowData[i].title + "</td>"));
			row.append($("<td>" + rowData[i].body + "</td>"));
		}
	}


})