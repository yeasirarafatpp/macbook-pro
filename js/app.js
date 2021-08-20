function costForExtra(extra, cost) {
    const extraPurchase = document.getElementById(extra + '-total');
    const extraPurchaseText = extraPurchase.innerText;
    const extraPurchaseUpdate = parseInt(extraPurchaseText) + 1;
    const newMemoryValue = cost * extraPurchaseUpdate;
    if (newMemoryValue <= cost) {
        extraPurchase.innerText = newMemoryValue;
        const totalPrice = document.getElementById('total-price');
        const totalPriceText = totalPrice.innerText;
        const totalPriceRes = parseInt(totalPriceText);
        totalPrice.innerText = totalPriceRes + newMemoryValue;
        // This is for footer Price
        const footPrice = document.getElementById('footer-price');
        const footPriceText = footPrice.innerText;
        const footPriceAmount = parseInt(footPriceText);
        footPrice.innerText = totalPriceRes + newMemoryValue;
    }

}
// Increase Extra Memory Cost
document.getElementById('extra-memory').addEventListener('click', function () {
    costForExtra('memory', 180)
});
// Increase Extra Storage Cost
document.getElementById('mid-ssd').addEventListener('click', function () {
    costForExtra('ssd', 100)
});
document.getElementById('tb-ssd').addEventListener('click', function () {
    costForExtra('ssd', 180);
});
// Increase Extra Delivery Cost
document.getElementById('extra-delivery').addEventListener('click', function () {
    costForExtra('delivery', 20);
});
// This Function is for Default Money
function defaultMoney(product) {
    const previousAmount = document.getElementById(product + '-total');
    const previousAmountText = previousAmount.innerText;
    const previousAmountResult = parseInt(previousAmountText);
    previousAmount.innerText = previousAmountResult - previousAmountResult;
    const decreaseTotalPrice = document.getElementById('total-price');
    const decreaseTotalPriceText = decreaseTotalPrice.innerText;
    const decreaseTotalPriceRes = parseInt(decreaseTotalPriceText);
    decreaseTotalPrice.innerText = decreaseTotalPriceRes - previousAmountResult;
    // This is for footer Price
    const footPrice = document.getElementById('footer-price');
    const footPriceText = footPrice.innerText;
    const footPriceAmount = parseInt(footPriceText);
    footPrice.innerText = decreaseTotalPriceRes - previousAmountResult;
}
// Default Memory Amount
document.getElementById('default-memory').addEventListener('click', function () {
    defaultMoney('memory');
});
// Default Storage Amount 
document.getElementById('default-storage').addEventListener('click', function () {
    defaultMoney('ssd');
});
// Default Delivery Amount 
document.getElementById('default-delivery').addEventListener('click', function () {
    defaultMoney('delivery');
});
// Coupon Code apply
document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-code').value;
    const couponPrice = document.getElementById('total-price');
    const couponPriceText = couponPrice.innerText;
    let couponPriceAmount = parseFloat(couponPriceText);
    if (couponCode == 'stevekaku') {
        newCouponPriceAmount = couponPriceAmount / 100 * 20;
        couponPrice.innerText = couponPriceAmount - newCouponPriceAmount;
        // This is for footer Price
        const footPrice = document.getElementById('footer-price');
        const footPriceText = footPrice.innerText;
        const footPriceAmount = parseInt(footPriceText);
        footPrice.innerText = couponPriceAmount - newCouponPriceAmount;
    }
    document.getElementById('coupon-code').value = '';
});