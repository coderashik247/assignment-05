function getInputDonationAmount(id){
    const donationAmount = parseFloat(document.getElementById(id).value);
    return donationAmount;
}

function getTextDonationAmount(id){
    const balance = parseFloat(document.getElementById(id).innerText);
    return balance;
}

function getTitle(id){
    return document.getElementById(id).innerText;
}


// donate-balance-noa 
//donate-noakhali 
// id="donate-now-1"