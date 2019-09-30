// from data.js
var tableData = data;


// YOUR CODE HERE!

// using javascript library d3 to create visual representation of data using html
//d3.select('h1').style('color', 'red')
var tbody = d3.select("tbody")
var btn = d3.select("#filter-btn")
var user_input = d3.select("#datetime")


function create_table(arr){
	tbody.html("")
	arr.forEach(function(row_obj){
		var row = tbody.append("tr")
		for (var key in row_obj) {
			row.append("td").text(row_obj[key]);
}

});
};

create_table(tableData);

// .on takes 2 arguments; event type and second a call back function
btn.on("click", function(){
	var result = user_input.property("value")
	var filter_table = tableData.filter(row_obj=>row_obj["datetime"]== result)
	create_table( filter_table);
});



