window.onload = function() {
    let pradine1 = 100;
    let pradine2 = 15.99;
    let galutine1 = 275;
    let galutine2 = 16.99;
    let kaina1 = pokytis(pradine1, galutine1);
    console.log(kaina1);
    let kaina2 = pokytis(pradine2, galutine2);
    console.log(kaina2);
}
function pokytis(kaina1, galutine1, pradine1) {
    return kaina1 = (galutine1 - pradine1) / galutine1;
}