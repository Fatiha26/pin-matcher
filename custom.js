// empty value

function emptyValue(id){
    document.getElementById(id).value = '';
}

//empty text
function emptyText(id){
    document.getElementById(id).innerText = '';
}

// display none
function displayNone(id)
{
    document.getElementById(id).style.display = 'none';
}

// display block
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}

//random number generate

function randomNumber()
{
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateNum').value = randomNumber;
    emptyValue('inputPin');
    displayNone('matched');
    displayNone('unmatched');
    displayNone('tryCount');

}

//input number

function btnKey(id)
{
   let prevValue = document.getElementById('inputPin').value;
   let key = document.getElementById(id).innerHTML;
   document.getElementById('inputPin').value = prevValue + key; 
}

//clear function

function clean()
{
    document.getElementById('inputPin').value = '';
}

//clear last function
function cleanLast()
{
    var inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length - 1);
    document.getElementById('inputPin').value = removeValue;
}

// submit pin button(match or no match)

function submitBtn()
{
    var randomNum = document.getElementById('generateNum').value;
    var typeNum = document.getElementById('inputPin').value;

    // pin matching condition

    if(randomNum == typeNum)
    {
        displayBlock('matched');
        displayNone('unmatched');
        displayNone('tryCount');
    }
    else
    {
        displayBlock('unmatched');
        displayNone('matched');
        tryLeft('tryLeft');
        displayBlock('tryCount');
    }
}

// try left

function tryLeft(id){
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgain == '1'){
        disableBtn('submit');
    }
}

// try left expired

function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.setAttribute('disabled', 'true');
    button.title = 'Please Reload Page';
}