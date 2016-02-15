var values = {};
var count = 0;

$(document).ready(function(){
    $('.num').on('click', calculatorIntake2);
    $('#calculate').on('click', sendData);
    $('#clear').on('click', clearEverything);
    $('#add').on('click', addOperator);
    $('#subtract').on('click', subtractOperator);
    $('#multiply').on('click', multiplyOperator);
    $('#divide').on('click', divideOperator);
});

//experiment #4
function calculatorIntake2 () {
    if (count == 0) {
        values.xDigit = $(this).val();
        $('#display').val($(this).val());
        count++;
    } else {
        values.yDigit = $(this).val();
        $('#display').val($(this).val());
        count = 0;
    }
}

// operator button object assignments
function addOperator (){
    values.type = 'add';
    clearDisplay();
}

function subtractOperator (){
    values.type = 'subtract';
    clearDisplay();
}

function multiplyOperator (){
    values.type = 'multiply';
    clearDisplay();
}

function divideOperator (){
    values.type = 'divide';
    clearDisplay();
}


//append data to the dom
function refreshDom (num) {
    clearDisplay();
    $('.display').find('input').val(num);
}

function clearEverything (){
    $('.display').find('input').val('');
    $('#result').text('');
}

function clearDisplay () {
    $('.display').find('input').val('');
}

function sendData () {

    $.ajax({
        type: 'POST',
        url: '/object',
        data: values,
        beforeSend: function () {
            console.log('before!' + values.type + values.xDigit + values.yDigit);
        },
        success: function (data) {
            refreshDom(data);
            console.log('From Server: ', data);
        }
    });
}