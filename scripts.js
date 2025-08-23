
document.getElementById("loginbtn").addEventListener("click", function (e) {
    e.preventDefault()
    const nmbr = 01679714839;
    const pin = 2612;
    const nmbrValue = parseInt(document.getElementById("nmbr").value);
    const pinValue = parseInt(document.getElementById("pin").value);

    if (nmbrValue === nmbr && pinValue === pin) {
        window.location.href = "./home.html"
    }
    else {
        alert("invalid Credentials")
    }
}) 