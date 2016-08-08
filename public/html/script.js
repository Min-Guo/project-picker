$( document ).ready(function() {
    console.log( "ready!" );

$("#myButton").click(function() {
    main();  
});

function main() {
    $.get('/query', function( data ) {
        console.log(JSON.stringify(data));
        drawTable(data[0].result);
    });
}
function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    // var row = $("<tr />")
    $("#myTable").append('<tr><td>'+ rowData.hashTag +'</td></tr>');
    $("#myTable").append('<tr><td>'+ rowData.count +'</td></tr>');
    $("#myTable").append('<tr><td>'+ rowData.score +'</td></tr>');
    // console.log(rowData);
    // $("#myTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    // row.append($("<td>" + rowData.hashTag + "</td>"));
    // row.append($("<td>" + rowData.count + "</td>"));
    // row.append($("<td>" + rowData.score + "</td>"));
}
});

