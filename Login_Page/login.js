function clickon() {
    const e = document.getElementById('mail').value;
    const p = document.getElementById('pass').value;
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
        if (e == 'abhinaya@gmail.com' && p == '1234') {
            window.location.href = 'InsidePage.html';
        }
        else if (e == 'rg26082001@gmail.com' && p == '1234') {
            window.location.href = 'InsidePage.html';
        }
        else {
            document.getElementById('error').innerHTML = "Wrong Email Id Or Password!";
            document.getElementById('merror').innerHTML = "";
            document.getElementById('perror').innerHTML = "";
        }
    }
}