var values = {};

$(document).ready(function(){
    $('#calculate').on('click', getXAndY);
    $('#add').on('click', addOperator);
    $('#subtract').on('click', subtractOperator);
    $('#multiply').on('click', multiplyOperator);
    $('#divide').on('click', divideOperator);
    $('#clear').on('click', clearEverything);
});

function getXAndY() {
    event.preventDefault();

    $.each($('.digit').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });



    console.log(values);
    $.ajax({
        type: 'POST',
        url: '/object',
        data: values,
        beforeSend: function() {
            console.log('before!' + values.type + values.xDigit + values.yDigit);
        },
        success: function(data) {
            refreshDom(data);
            console.log('From Server: ', data);
        }
    });
}

// operator button object assignments
function addOperator (){
    values.type = 'add';
}

function subtractOperator (){
    values.type = 'subtract';
}

function multiplyOperator (){
    values.type = 'multiply';
}

function divideOperator (){
    values.type = 'divide';
}


//append data to the dom
function refreshDom (num) {
    $('#result').text(num);
}

function clearEverything (){
    $('.digit').find('input').val('');
    $('#result').text('');
}