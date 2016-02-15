var values = {};
var count = 0;

$(document).ready(function(){
    $('.num').on('click', calculatorIntake2);
    $('#calculate').on('click', sendData);
    $('#add').on('click', addOperator);
    $('#subtract').on('click', subtractOperator);
    $('#multiply').on('click', multiplyOperator);
    $('#divide').on('click', divideOperator);
    $('#clear').on('click', clearEverything);
});

//experiment #4
function calculatorIntake2 () {
    if (count == 0) {
        values.xDigit = $(this).val();
        $('#display').val($(this).val());
        console.log(values);
        count++;
        console.log(count);
    } else {
        values.yDigit = $(this).val();
        $('#display').val($(this).val());
        console.log(values);
        count = 0;
        console.log(count);
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
    $('.digit').find('input').val(num);
}

function clearEverything (){
    $('.digit').find('input').val('');
    $('#result').text('');
}

function clearDisplay () {
    $('.digit').find('input').val('');
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