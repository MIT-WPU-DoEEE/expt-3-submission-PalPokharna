console.log("ajax.js is loaded");

function submitForm() {
    console.log("Submitting form..."); // Debugging Log

    $.ajax({
        url: "http://localhost/Form-val/submit.php",  // ✅ Corrected path
        type: "POST",
        data: $("#myForm").serialize(),
        dataType: "json",
        success: function (response) {
            console.log("Response received: ", response);
            if (response.status === "success") {
                alert(response.message);
                $("#myForm")[0].reset();
            } else {
                alert("Error: " + response.message);
            }
        },
        error: function (xhr, status, error) {
            console.log("AJAX Error: ", status, error);
            alert("An error occurred while submitting the form.");
        }
    });
}
