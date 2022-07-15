//*********** Functions *********//

function getformatedNumber(num){
    var n =Number(num);
    var value =  n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

//*********** Buttons *********//

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( button => {
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText){
            case 'AC':
                display.innerText='';
            break;

            case 'DEL':
                if(display.innerText){
                    display.innerText = getformatedNumber(display.innerText.slice(0, -1));
                }
                break;

            case '=' :
                try{
                    display.innerText= getformatedNumber(eval(display.innerText));
                }
                catch{
                    alert("Error!! Type correctly");
                    display.innerText='';
                }
                break;
            default :
                display.innerText += e.target.innerText; 
        }
    });
});
