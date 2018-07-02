/* THE MAIN JAVASCRIPT FILE */

const audios = ['../../audio/do.wav',
                '../../audio/re.wav', 
                '../../audio/mi.wav', 
                '../../audio/fa.wav', 
                '../../audio/sol.wav', 
                '../../audio/la.wav', 
                '../../audio/si.wav'];

const instructions = `Now, after creating the senarios, it is the time to make your decision, So read them carefully and then eliminate all the senarios one by one sequentially, starting from the less preferable one to the more preferable one.`;

const instructionsArray = instructions.split('');

let subject = '';

const choiceObjArray = [];

const allSenariosArray = [];

let val = 1;

let nav_toggle = 0;

$(document).ready(() => {

    const soundInterval = setInterval(() => {
        var audio = new Audio(audios[getRandom(audios)]);
        audio.play();
    }, 2000);

    mainClicks(soundInterval);
    result1Clicks();
    result2Clicks();
    result3Clicks();
    makeClicks();

});


const getRandom = (arr) => {
    const i = Math.floor(Math.random() * arr.length);
    return i;
}

/* AUTO TYPING INSTRUCTIONS*/
const makeInstruction = (dom, dom2, dom3) => {
    writeCharacter(instructionsArray, dom);
    setTimeout(()=>{
        $(dom2).hide();
        $(dom3).css('display', 'inline');
    }, 34000);
}

/* DISPLAYING CHARACTERS ONE BY ONE */
const writeCharacter = (arr, dom) => {
    arr.forEach((letter, i) => {
        window.setTimeout(()=>{
            $(dom).append(letter);
        }, 100*(i+1));
    });
}

/* PUSHING THE CHOICES INTO ARRAY */
const createChoice = () => {
    Array.from($('#choices').find('input[type=text]')).forEach(choice => {
        let newChoice = new Object();
        newChoice.title = choice.value;
        newChoice.goods = [];
        newChoice.bads  = [];
        newChoice.totals = 0;
        choiceObjArray.push(newChoice);
    });
}

/* PUSHING THE SENARIOS INTO ARRAY*/
const createSenario = (dom, arr) => {
    Array.from($(dom).find('textarea')).forEach(senario => {
        let newSenario = new Object();
        newSenario.text = senario.value;
        newSenario.total = 0;
        arr.push(newSenario);
    });
}

/* APPENDING ALL SENARIOS TO THE ELIMINATION PAGE */
const createAllSenarios = (arr, type, dom) => {
    arr.forEach(choice => {
        choice[type].forEach(senario => {
            let p = `<p class='btnOff'>${senario.text}</p>`;
            $(dom).append(p);
        });
    });
}

/* THE VALUE OF THE SENARIO OBJECT */
const increaseVal = (arr, type, event) => {
    arr.forEach(choice => {
        choice[type].forEach(senario => {
            if($(event).text() === senario.text){
                senario.total = val;
                val++;
            }
        });
    });
}

/* THE TOTAL OF THE CHOICE OBJECT */
const setTotals = (arr) => {
    let totals = 0;
    arr.forEach(choice => {
        choice.goods.forEach(senario => {
            totals += senario.total;
        });
        choice.bads.forEach(senario => {
            totals += senario.total;
        });
        choice.totals = totals;
        totals = 0;
    });
}

/* TAKING THE FINAL DECISION */
const takeChoice = (arr, dom) => {

    setTotals(arr);

    let max = 0;
    let myChoice = {};
    arr.forEach(choice => {
        if(choice.totals > max){
            max = choice.totals;
            myChoice = choice;
        }
    });
    $(dom).append(`${myChoice.title}`.toUpperCase());
}

/* CREATING EMPTY BOX OVER THE ELIMINATED SENARIO */
const createEmptyElement = (dom) => {
    const newDiv = "<div class='empty'></div>";
    $(dom).append(newDiv);
}



