function passwordPrompt() {
    let CorrectPassword = "pabsyyy1218";
    let OwnerPassword;

    do {
        OwnerPassword = prompt("Enter your Password: ");

        if (OwnerPassword !== CorrectPassword) {
            alert ("Incorrect Password, Please try again. ");
        }
    } while (OwnerPassword !== CorrectPassword);
    alert("Access Granted."); 
}