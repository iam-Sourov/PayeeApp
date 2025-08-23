
document.getElementById('addMoneyBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const validPin = 2612;
    const select = document.getElementById('select').value;
    const bankNmbr = document.getElementById('bankNmbr').value;
    const pin = parseInt(document.getElementById('pin').value);
    const addMoney = parseInt(document.getElementById('addMoney').value);
    const balance = parseInt(document.getElementById('balance').innerText);

    if (bankNmbr.length < 11) {
        alert('Please Enter Valid Bank Account Numvber')
        return;
    }
    if (pin != validPin) {
        alert('Please Enter Valid Pin')
        return;
    }
    const newAmount = addMoney + balance;
    document.getElementById('balance').innerText = newAmount;
})


// Functionality

// CashOut
document.getElementById('withdrawBtn').addEventListener('click', function (e) {
    e.preventDefault()
    const inputAmount = parseInt(document.getElementById('withdrawAmount').value);

    const OldBalance = document.getElementById('balance').innerText;
    const WithdrawedBalance = OldBalance - inputAmount;

    document.getElementById('balance').innerText = WithdrawedBalance
})



// Toggle section
document.getElementById('addMoneyBtnCard').addEventListener('click', function () {
    const addSection = document.getElementById('addSection')
    addSection.classList.toggle('hidden')

    const cashOutSection = document.getElementById('cashOutSection')
    cashOutSection.classList.add('hidden')
    const transferMoneySection = document.getElementById('transferMoneySection')
    transferMoneySection.classList.add('hidden')
    const getBonusSection = document.getElementById('getBonusSection')
    getBonusSection.classList.add('hidden')
    const payBillSection = document.getElementById('payBillSection')
    payBillSection.classList.add('hidden')
})
document.getElementById('cashOutBtnCard').addEventListener('click', function () {
    const cashOutSection = document.getElementById('cashOutSection')
    cashOutSection.classList.toggle('hidden')

    const addSection = document.getElementById('addSection')
    addSection.classList.add('hidden')
    const transferMoneySection = document.getElementById('transferMoneySection')
    transferMoneySection.classList.add('hidden')
    const getBonusSection = document.getElementById('getBonusSection')
    getBonusSection.classList.add('hidden')
    const payBillSection = document.getElementById('payBillSection')
    payBillSection.classList.add('hidden')
})
document.getElementById('transferMoneyBtnCard').addEventListener('click', function () {
    const transferMoneySection = document.getElementById('transferMoneySection')
    transferMoneySection.classList.toggle('hidden')

    const addSection = document.getElementById('addSection')
    addSection.classList.add('hidden')
    const cashOutSection = document.getElementById('cashOutSection')
    cashOutSection.classList.add('hidden')
    const getBonusSection = document.getElementById('getBonusSection')
    getBonusSection.classList.add('hidden')
    const payBillSection = document.getElementById('payBillSection')
    payBillSection.classList.add('hidden')
})
document.getElementById('getBonusBtnCard').addEventListener('click', function () {
    const getBonusSection = document.getElementById('getBonusSection')
    getBonusSection.classList.toggle('hidden')

    const addSection = document.getElementById('addSection')
    addSection.classList.add('hidden')
    const cashOutSection = document.getElementById('cashOutSection')
    cashOutSection.classList.add('hidden')
    const transferMoneySection = document.getElementById('transferMoneySection')
    transferMoneySection.classList.add('hidden')
    const payBillSection = document.getElementById('payBillSection')
    payBillSection.classList.add('hidden')
})
document.getElementById('payBillBtnCard').addEventListener('click', function () {
    const payBillSection = document.getElementById('payBillSection')
    payBillSection.classList.toggle('hidden')

    const getBonusSection = document.getElementById('getBonusSection')
    getBonusSection.classList.add('hidden')
    const addSection = document.getElementById('addSection')
    addSection.classList.add('hidden')
    const cashOutSection = document.getElementById('cashOutSection')
    cashOutSection.classList.add('hidden')
    const transferMoneySection = document.getElementById('transferMoneySection')
    transferMoneySection.classList.add('hidden')
})

