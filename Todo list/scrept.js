function calculate() {
    let a = parseInt(document.getElementById("bookOne").value);
    let b = parseInt(document.getElementById("bookTwo").value);
    let c = parseInt(document.getElementById("bookThree").value);
    let d = parseInt(document.getElementById("bookFour").value);
    let e = parseInt(document.getElementById("bookFive").value);

    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
        alert("Please Enter Valid value")
    } else {
        var optain = a + b + c + d + e;
        document.getElementById("optain").innerHTML = optain;
        var per = optain / 500 * 100;
        document.getElementById("per").innerHTML = per + "" + "%";
        if (a > 30 && b > 30 && c > 30 && d > 30 && e > 30) {
            document.getElementById("remarks").innerHTML = "<span style = 'color:green'>pass</span>";
        } else {
            document.getElementById("remarks").innerHTML = "<span style = 'color:red'>Fail</span>";
        }
        if (optain >= 80) {
            document.getElementById("grade").textContent = "A";
        }
        else if (optain >= 70) {
            document.getElementById("grade").textContent = "B";
        }
        else if (optain >= 40) {
            document.getElementById("grade").textContent = "D";
        }
        else {
            document.getElementById("grade").textContent = "F";
        }
    }
};
