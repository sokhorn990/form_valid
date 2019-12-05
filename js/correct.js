$(document).ready(() => {
    var countError = [];
    $('#btn').on('click', () => {
        var name = $('#name').val();
        var age = $('#age').val();
        var nick = $('#nick').val();
        // console.log(name+age+nick)
        //name cannot empty and connot only number
        var isName = name != "" && isNaN(name);
        if (isName) {
            borderGreen('name');
            countError[0] = 0;
        } else {
            borderRed('name');
            countError[0] = 1;
        }
        //age must be interger 
        var isAge = age != "" && age > 0 && age != isNaN(age) && age == parseInt(age) && age.length <= 3;
        if (isAge) {
            borderGreen('age');
            countError[1] = 0
        } else {
            borderRed('age');
            countError[1] = 2;
        }
        //nickname must be contain one of uppercase and at least of 9 length
        var atLeast9Char = nick.length >= 9 && nick != "";
        var atleastOneUpperCase = false;
        for (let i = 0; i < nick.length; i++) {
            var char = nick.charAt(i);
            if (isNaN(char)) {
                var isUpper = char.toUpperCase() == char;
                atleastOneUpperCase = atleastOneUpperCase || isUpper;
            }
        }
        var isNickName = atLeast9Char && atleastOneUpperCase;
        if (isNickName) {
            borderGreen('nick');
            countError[2] = 0;
        } else {
            borderRed('nick');
            countError[2] = 3
        }
        //all information correct
        var allValid = isName && isAge && isNickName;
        if (allValid) {
            showMessageSuccess();
        } else {
            showMessageErro(countError);
        }
        //end message
        //alert
    });
});
var borderGreen = (elementId) => {
    $('#' + elementId).addClass('border-success').removeClass('border-danger');
}
var borderRed = (elementId) => {
    $('#' + elementId).addClass('border-danger').removeClass('border-success');
}
//show message success 
var showMessageSuccess = () => {
    var success = "";
    success += `
    <div class="alert alert-success">
        <strong>Success!!</strong>
    </div>
    `;
    $('#result').html(success);
}
//show error
var errorSMS = ["Name is empty", "Age must be bumber!", "Nickname shall contain 1 uppercase and 9 charactor"];

var showMessageErro = (errors) => { 
    var showError = "";
    if (errors[0] == 1) {
        showError += "- "+errorSMS[0]+"<br>";
    } else {
        showError += "";
    }
    //
    if (errors[1] == 2) {
        showError +="- "+ errorSMS[1]+"<br>";
    } else {
        showError += "";
    }
    //
    if (errors[2] == 3) {
        showError += "- "+errorSMS[2]+"<br>";
    } else {
        showError += "";
    }

    //
    if (errors[3] == 4) {
        showError +="- "+ errorSMS[3]+"<br>";
    } else {
        showError += "";
    }
    $('#result').html(
        `
        <div class="alert alert-danger">
        <strong>${showError}</strong>
    </div>
    `
    );

}