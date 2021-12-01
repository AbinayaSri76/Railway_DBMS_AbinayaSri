function clickon() {
    const e = document.getElementById('mail').value;
    const p = document.getElementById('pass').value;
    const mpat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const ppat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (e == '' && p == '') {
        document.getElementById('error').innerHTML = "Enter the Email Id and the Password!";
        document.getElementById('merror').innerHTML = "";
        document.getElementById('perror').innerHTML = "";
    }
    else if (e == '') {
        document.getElementById('error').innerHTML = "";
        document.getElementById('merror').innerHTML = "Enter the Email Id!";
        document.getElementById('perror').innerHTML = "";
    }
    else if (p == '') {
        document.getElementById('error').innerHTML = "";
        document.getElementById('merror').innerHTML = "";
        document.getElementById('perror').innerHTML = "Enter the Password!";
    }
    else {
        window.location.href = 'InsidePage.html';
    }
}