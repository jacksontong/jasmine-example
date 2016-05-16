function validateCreditCardnumber(number) {
    return number.replace(/-/g,'').length === 16;
}