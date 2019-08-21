$("#submitButton").on("click", function () {
    $("#matchName").text("");
    $("#matchPicture").attr("src", "");
    console.log("clicked")
    if ($("#aboutName").val() === "" || $("#aboutImage").val() === "") {
        $("#matchName").text("Name or Picture field cannot be left blank!")
        return;
    } else if ($("#question1").val() === "" || $("#question2").val() === "" || $("#question3")
    .val() === "" || $("#question4").val() === "" || $("#question5").val() === "" ||
    $("#question6").val() === "" || $("#question7").val() === "" || $("#question8").val() ===
    "" || $("#question9").val() === "" || $("#question10").val() === "") {
        $("#matchName").text("Please select a value for ALL questions!")
        return;
    }

    var userResponse = {
        name: $("#aboutName").val().trim(),
        photo: $("#aboutImage").val().trim(),
        scores: [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()
        ]
    }

    var URL = window.location.origin
    console.log(URL)
    console.log("here1")
    $.post(URL + '/api/friends', userResponse, function(data) {
        console.log("here2")
        console.log(userResponse)
        $("#matchName").text(data.matchN);
        $("#matchPicture").attr("src", data.matchI);
        console.log(data)
        console.log(data.matchN)
        console.log(data.matchI)
    })
    $("#aboutName").val("")
    $("#aboutImage").val("")
    $(".question").val("");
})