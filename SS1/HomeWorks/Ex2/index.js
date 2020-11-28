let n = [1,5,9,7,2,3,1,22,65,999,6969];
function SNT(n) {
    var test = true;

    if (n < 2) {
        test = false;
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                test = false;
                break;
            }
        }
    }

    if (test == true) {
        console.log(n + " là số nguyên tố ");
    }
    else {
        console.log(n + " không phải là số nguyên tố ");
    }
}
for (let x = 0; x <= n.length - 1; x++) {
    SNT(n[x])
}
