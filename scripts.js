const nmbr = 01679714839;
const pin = 2612;
document.getElementById("loginbtn").addEventListener("click", function (e) {
    e.preventDefault()

    const nmbrValue = document.getElementById("nmbr").value;
    const pinValue = document.getElementById("pin").value;

    const parseNmbr = parseInt(nmbrValue);
    const parsePin = parseInt(pinValue);
    if (parseNmbr === nmbr && parsePin === pin) {
        window.location.href="./home.html"
    }
    else {
        alert("invalid Credentials")

    }
}) 