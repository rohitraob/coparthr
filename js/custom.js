

//accept the only number
$("#select-amount input").keypress(function (e) {
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
        //display error message
        $("#select-amount").prepend(
        '<span class="error">Please enter amount</span>'
        );
                return false;
    }
 });

$("#save_btn").on("click", function() {
    event.preventDefault();
    var code = $("#select-code option:selected").val();
    var name = $('#select-name input').val();
    var description = $("#select-description input").val();
    var amount = $("#select-amount input").val();

    //removing the error message if data is valid
    if(code != ''){
        $( "#select-code .error" ).remove(); 
    };

    if(name.length > 2){
        $( "#select-name .error" ).remove(); 
    };
    if(amount.length >= 1){
        $( "#select-amount .error" ).remove(); 
    };
    //checking user filled data
    if(code == ''){
        $("#select-code").prepend(
            '<span class="error">Please select code</span>'
        );
    } 
    if(name.length < 2){
        $("#select-name").prepend(
            '<span class="error">Please enter correct name</span>'
        );
    }
    console.log(typeof(amount));

    if(amount.length < 1){
        $("#select-amount").prepend(
            '<span class="error">Please enter valid amount </span>'
        );
    }

    /// displaying the data in alert 
    if(code != '' && name.length > 3 && amount.length >= 1){
        alert("Hi your details" + code + ' ' + name + ' ' + (description.length > 0 ? description : '') + ' ' + amount)
    }
});
