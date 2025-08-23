document.getElementById('addMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault()

    const select = document.getElementById('select').value;
    const bankNmbr = document.getElementById('bankNmbr').value;
    const pin = document.getElementById('pin').value;

    const addMoney = parseInt(document.getElementById('addMoney').value);
    const balance = parseInt(document.getElementById('balance').innerText);
    
    const newAmount = addMoney + balance;
    document.getElementById('balance').innerText = newAmount;



})


