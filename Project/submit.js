
    function postContactToGoogle() {
        var email = $('#Email').val();
        var name = $('#Name').val();
        var message = $('#Message').val();

            $.ajax({
                url: "https://docs.google.com/forms/d/1I8PzRAqaQ3P1ZRwsu-JLgY55v24c0JfLCElQyLQndSI/formResponse",
                data: { "entry_92543468": name,
                "entry_1874720748": email, "entry_8365240":
                message },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        window.location.replace("ThankYou.html");
                    },
                    200: function () {
                        window.location.replace("ThankYou.html");
                    }
                }

            });
            $('#ButtonSubmit').click(postContactToGoogle);
    };