$(document).ready(function () {
    $("#studentForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        // Name Validation (Cannot be empty)
        let name = $("#name").val().trim();
        if (name === "") {
            $("#nameError").text("Name cannot be empty.");
            isValid = false;
        } else {
            $("#nameError").text("");
        }

        // Phone Number Validation (Must be 10 digits)
        let phone = $("#phone").val().trim();
        if (!/^\d{10}$/.test(phone)) {
            $("#phoneError").text("Phone number must be 10 digits.");
            isValid = false;
        } else {
            $("#phoneError").text("");
        }

        // Email Validation
        let email = $("#email").val().trim();
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            $("#emailError").text("Enter a valid email.");
            isValid = false;
        } else {
            $("#emailError").text("");
        }

        // Zip Code Validation (Must be 5 or 6 digits)
        let zip = $("#zip").val().trim();
        if (!/^\d{5,6}$/.test(zip)) {
            $("#zipError").text("Zip code must be 5 or 6 digits.");
            isValid = false;
        } else {
            $("#zipError").text("");
        }

        // Age Validation (Must be 2 digits)
        let age = $("#age").val().trim();
        if (!/^\d{2}$/.test(age)) {
            $("#ageError").text("Age must be exactly 2 digits.");
            isValid = false;
        } else {
            $("#ageError").text("");
        }

        // PRN Number Validation (Must be 10 digits)
        let prn = $("#prn").val().trim();
        if (!/^\d{10}$/.test(prn)) {
            $("#prnError").text("PRN No. must be exactly 10 digits.");
            isValid = false;
        } else {
            $("#prnError").text("");
        }

        // Branch Validation (Cannot be empty)
        let branch = $("#branch").val().trim();
        if (branch === "") {
            $("#branchError").text("Branch cannot be empty.");
            isValid = false;
        } else {
            $("#branchError").text("");
        }

        // Submit if valid
        if (isValid) {
            $.ajax({
                type: "POST",
                url: "submit.php",
                data: $("#studentForm").serialize(),
                success: function (response) {
                    alert("Form submitted successfully!");
                },
                error: function () {
                    alert("Error submitting form.");
                }
            });
        }
    });
});

