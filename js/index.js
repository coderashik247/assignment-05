// Destination part
// row-1
document.getElementById('donate-now-1').addEventListener('click', function () {
    const donateAmount = getInputDonationAmount('donate-noakhali')
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert('Wrong Amount');
    }
    else {
        my_modal_5.showModal()
        const updateBalanceFlood = getInputDonationAmount('donate-noakhali') + getTextDonationAmount('donate-balance-noa');

        document.getElementById('donate-balance-noa').innerText = updateBalanceFlood;

        const updateTotalBalance = getTextDonationAmount('balance') - getInputDonationAmount('donate-noakhali');

        document.getElementById('balance').innerText = updateTotalBalance;

        document.getElementById('history-section')

        // const giveTitle = getTitle('noakhali-title');
        // // History Part
        // const historyItem = document.createElement('div');
        // historyItem.className = "bg-red-200 rounded-lg border border-black my-2 p-2";
        
        // historyItem.innerHTML = `
        //     <p>${donateAmount} Taka is Donated for ${giveTitle}</p>
        //     <p>${new Date().toLocaleDateString()}</p>
        // `;
        
        // const historyContainer = document.getElementById('history-section');
        // // Prepend the new item to the top of the container
        // historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
    }
})

// row-2
document.getElementById('donate-now-2').addEventListener('click', function () {
    const donateAmount = getInputDonationAmount('donate-feni')
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert('Wrong Amount');
    }
    else {
        my_modal_6.showModal();
        const updateBalanceFlood = getInputDonationAmount('donate-feni') + getTextDonationAmount('donate-balance-feni');

        document.getElementById('donate-balance-feni').innerText = updateBalanceFlood;

        const updateTotalBalance = getTextDonationAmount('balance') - getInputDonationAmount('donate-feni');

        document.getElementById('balance').innerText = updateTotalBalance;
    }
})

// row-3
document.getElementById('donate-now-3').addEventListener('click', function () {
    const donateAmount = getInputDonationAmount('donate-quota')
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert('Wrong Amount');
    }
    else {
        my_modal_7.showModal();
        const updateBalanceFlood = getInputDonationAmount('donate-quota') + getTextDonationAmount('donate-balance-quota');

        document.getElementById('donate-balance-quota').innerText = updateBalanceFlood;

        const updateTotalBalance = getTextDonationAmount('balance') - getInputDonationAmount('donate-quota');

        document.getElementById('balance').innerText = updateTotalBalance;
    }
})

// Toggle Part
// Get the buttons and sections
document.getElementById('history').addEventListener('click', function () {
    document.getElementById('history').classList.add('bg-primary');
    // document.getElementById('destination-tab').classList.add('hidden');
    document.getElementById('destination').classList.remove('bg-primary');

})

document.getElementById('destination').addEventListener('click', function () {
    document.getElementById('destination').classList.add('bg-primary');
    // document.getElementById('destination-tab').classList.remove('hidden');
    document.getElementById('history').classList.remove('bg-primary');

})

// Click blog button goes to home page
document.getElementById('btn-blog').addEventListener("click", function () {
    window.location.href = '/home.html';
});


