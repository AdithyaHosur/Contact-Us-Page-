function validatePhoneNumber(){
    var phoneNumber = document.getElementById("phone-number").value;
    var cleanedPhoneNumber = phoneNumber.replace(/\D/g,'');

    if(cleanedPhoneNumber.length !== 10){
        var label = document.getElementById("forPhoneNumber");
        var no = document.getElementById("phone-number");
        no.style.borderColor = "red";
        label.innerHTML = 'Invalid Format: Enter Ten Digits';
        label.style.color = "red";
        //alert('Please enter a 10-digit number')
        return false;
    }

    if(cleanedPhoneNumber.charAt(0) === '0' || cleanedPhoneNumber.charAt(0) === '1'){
        var label = document.getElementById("forPhoneNumber");
        label.innerHTML = 'Invalid Format: 0 or 1 starting digit invalid';
        label.style.color = "red";
        //alert('Please enter a valid phone number');
        return false;
    }

    if(!/^\d+$/.test(cleanedPhoneNumber)){
        var label = document.getElementById("forPhoneNumber");
        label.innerHTML = 'Invalid Format: Enter phone number';
        label.style.color = "red";
        //alert('Please enter numerals only');
        return false;
    }
}


function validate(){
    let errors = 0;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let exp = document.getElementById("floatingSelect").value;
    let gender = document.querySelector('input[name="options-outlined"]:checked');
    let query = document.getElementById('exampleFormControlTextarea2').value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(exp);
    if(gender != null){
        console.log(gender.value);
    }else{
        document.getElementById("gender-head").style.color = "red;";
        errors++;
    }
    console.log(query);

    //Name Validation
    if(firstName.length < 2 || lastName.length < 2){
        document.getElementById("name-error").innerHTML = "Enter a valid name";
        document.getElementById("first-name").style.borderColor = "red";
        document.getElementById("last-name").style.borderColor = "red";
        errors++;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        document.getElementById("email-error").innerHTML = "Please Enter a Valid Email";
        document.getElementById("email").style.borderColor = "red";
        errors++;
    }
    if(exp === 'Years'){
        document.getElementById('exp-error').innerHTML = "Please Enter your years of experience"
        document.getElementById("floatingSelect").style.borderColor = "red";
        document.getElementById("exp-label").remove();
        errors++;
    }
    if(validatePhoneNumber() === 'false'){
        errors++;

    }
    if(query.length < 10){
        document.getElementById('query-error').innerHTML = "Please Enter a valid query";
        document.getElementById('exampleFormControlTextarea2').style.borderColor = "red";
    }

    console.log(errors);
    if(errors == 0){
        alert('Query submitted successfully');
    }
}