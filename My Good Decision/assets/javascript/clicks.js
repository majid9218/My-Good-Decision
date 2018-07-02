/* JAVASCRIPT: CLICKS AND EVENTS HANDLING */

/* MAIN CLICKS */
const mainClicks = (interval) => {

    /* NAVBAR SANDWITCH CLICK */

    $("#sandwitch").click(()=>{
        $("#sandwitch").toggleClass('sandwitchOn sandwitchOff');
        if(nav_toggle === 0){
            $(".nav div:nth-child(2) a").toggleClass('sandwitch_on sandwitch_off');
            nav_toggle += 1;
        }else{
            $(".nav div:nth-child(2) a").toggleClass('sandwitch_on sandwitch_off');
        }
    });

    /* START BUTTON: LANDING PAGE */
    
    $("#start").click(() => {
        clearInterval(interval);
        $("#main").hide();
        $("#subject").css("display", "inline");
        setTimeout(() => {
            $("#subject .btnOff").toggleClass("btnOff btnOn");
            $("#subject .textOff").toggleClass("textOff textOn");
        }, 10500);
    });

    /* SUBJECT PAGE  BUTTON*/

    $("#subject .btn1").click(() => {

        if($("#subject input").val() !== ''){
            subject = $("#subject input").val().toUpperCase();
            $("#subject div").children().fadeOut(800);
            $("#subject .required").hide();
            setTimeout(() => {
                $("#subject").hide();
                $("#choices").css("display", "inline");
            }, 1000);
            setTimeout(() => {
                $("#choices .btnOff").toggleClass("btnOff btnOn");
                $("#choices .textOff").toggleClass("textOff textOn");
            }, 19500);
        } else{
            $("#subject .required").css('display', 'inline');
        }
    });

    /* CHOICES PAGE  BUTTON*/

    $("#choices .btn1").click(() => {
        if($("#choices .inputContainer div:nth-child(1) input").val() !== '' && $("#choices .inputContainer div:nth-child(2) input").val() !== '' && $("#choices .inputContainer div:nth-child(3) input").val() !== ''){
            $("#choices h1").children().fadeOut(800);
            $("#choices .container").children().fadeOut(800);
            $("#choices .required").hide();
            setTimeout(() => {
                $("#choices").hide();
                $("#result1").css("display", "inline");
                createChoice();
            }, 1000);
            setTimeout(() => {
                $("#result1 .btnOff").toggleClass("btnOff btnOn");
                $("#result1 .textOff").toggleClass("textOff textOn");
            }, 42000);
            $("#result1 h1 span").append($("#choices .inputContainer div:nth-child(1) input").val());
            $("#result2 h1 span").append($("#choices .inputContainer div:nth-child(2) input").val());
            $("#result3 h1 span").append($("#choices .inputContainer div:nth-child(3) input").val());
        } else {
            $("#choices .required").css('display', 'inline');
        }
    });
}

/* THE SENRIOS PAGE CLICKS */


/* THE SENRIOS OF THE FIRST CHOICE CLICKS */

const result1Clicks = () => {
    $("#result1 .btn1").click(() => {

        if($("#result1 .good div:nth-child(1) textarea").val() !== '' && $("#result1 .good div:nth-child(2) textarea").val()
           && $("#result1 .bad div:nth-child(1) textarea").val() !== '' && $("#result1 .bad div:nth-child(2) textarea").val()){
            
            $("#result1 .senario").children().fadeOut(800);
            $("#result1 hr").fadeOut(800);
            $("#result1 .skip").children().fadeOut(800);
            $("#result1 .btn").fadeOut(800);
            $("#result1 .required").hide();
            setTimeout(() => {
                $("#result1").hide();
                $("#result2").css("display", "inline");
                createSenario('#result1 .good', choiceObjArray[0].goods);
                createSenario('#result1 .bad', choiceObjArray[0].bads);
            }, 1000);
            setTimeout(() => {
                $("#result2 .btnOff").toggleClass("btnOff btnOn");
                $("#result2 .textOff").toggleClass("textOff textOn");
            }, 8000);
        } else{
            $("#result1 .required").css('display', 'inline');
        }
    });

    /* FIRST CHOICE: SENARIOS TEXTAREA TOGGLING */

    $( "#result1 .senario_container_good .skip span:nth-child(1)" ).click(function() {
        $("#result1 .senario_container_good .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result1 .senario_container_good .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result1 .senario_container .good div:nth-child(1)').slideToggle(750);
        $('#result1 .senario_container .good div:nth-child(2)').slideToggle(750);
    });

    $( "#result1 .senario_container_good .skip span:nth-child(2)" ).click(function() {
        $("#result1 .senario_container_good .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result1 .senario_container_good .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result1 .senario_container .good div:nth-child(1)').slideToggle(750);
        $('#result1 .senario_container .good div:nth-child(2)').slideToggle(750);
    });

    $( "#result1 .senario_container_bad .skip span:nth-child(1)" ).click(function() {
        $("#result1 .senario_container_bad .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result1 .senario_container_bad .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result1 .senario_container .bad div:nth-child(1)').slideToggle(750);
        $('#result1 .senario_container .bad div:nth-child(2)').slideToggle(750);
    });

    $( "#result1 .senario_container_bad .skip span:nth-child(2)" ).click(function() {
        $("#result1 .senario_container_bad .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result1 .senario_container_bad .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result1 .senario_container .bad div:nth-child(1)').slideToggle(750);
        $('#result1 .senario_container .bad div:nth-child(2)').slideToggle(750);
    });
}

/* THE SENRIOS OF THE SECOND CHOICE CLICKS */

const result2Clicks = () => {
    $("#result2 .btn1").click(() => {

        if($("#result2 .good div:nth-child(1) textarea").val() !== '' && $("#result2 .good div:nth-child(2) textarea").val()
           && $("#result2 .bad div:nth-child(1) textarea").val() !== '' && $("#result2 .bad div:nth-child(2) textarea").val()){

            $("#result2 .senario").children().fadeOut(800);
            $("#result2 hr").fadeOut(800);
            $("#result2 .skip").children().fadeOut(800);
            $("#result2 .btn").fadeOut(800);
            $("#result2 .required").hide();
            setTimeout(() => {
                $("#result2").hide();
                $("#result3").css("display", "inline");
                createSenario('#result2 .good', choiceObjArray[1].goods);
                createSenario('#result2 .bad', choiceObjArray[1].bads);
            }, 1000);
            setTimeout(() => {
                $("#result3 .btnOff").toggleClass("btnOff btnOn");
                $("#result3 .textOff").toggleClass("textOff textOn");
            }, 8000);
        } else{
            $("#result2 .required").css('display', 'inline');
        }
    });

    /* SECOND CHOICE: SENARIOS TEXTAREA TOGGLING */

    $( "#result2 .senario_container_good .skip span:nth-child(1)" ).click(function() {
        $("#result2 .senario_container_good .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result2 .senario_container_good .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result2 .senario_container .good div:nth-child(1)').slideToggle(750);
        $('#result2 .senario_container .good div:nth-child(2)').slideToggle(750);
    });

    $( "#result2 .senario_container_good .skip span:nth-child(2)" ).click(function() {
        $("#result2 .senario_container_good .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result2 .senario_container_good .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result2 .senario_container .good div:nth-child(1)').slideToggle(750);
        $('#result2 .senario_container .good div:nth-child(2)').slideToggle(750);
    });

    $( "#result2 .senario_container_bad .skip span:nth-child(1)" ).click(function() {
        $("#result2 .senario_container_bad .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result2 .senario_container_bad .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result2 .senario_container .bad div:nth-child(1)').slideToggle(750);
        $('#result2 .senario_container .bad div:nth-child(2)').slideToggle(750);
    });

    $( "#result2 .senario_container_bad .skip span:nth-child(2)" ).click(function() {
        $("#result2 .senario_container_bad .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result2 .senario_container_bad .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result2 .senario_container .bad div:nth-child(1)').slideToggle(750);
        $('#result2 .senario_container .bad div:nth-child(2)').slideToggle(750);
    });

}

/* THE SENRIOS OF THE THIRD CHOICE CLICKS */

const result3Clicks = () => {

    $("#result3 .btn1").click(() => {

        if($("#result3 .good div:nth-child(1) textarea").val() !== '' && $("#result3 .good div:nth-child(2) textarea").val()
           && $("#result3 .bad div:nth-child(1) textarea").val() !== '' && $("#result3 .bad div:nth-child(2) textarea").val()){

            $("#result3 .senario").children().fadeOut(800);
            $("#result3 hr").fadeOut(800);
            $("#result3 .skip").children().fadeOut(800);
            $("#result3 .btn").fadeOut(800);
            $("#result3 .required").hide();
            setTimeout(() => {
                $("#result3").hide();
                $("#instructions").css("display", "inline");
                createSenario('#result3 .good', choiceObjArray[2].goods);
                createSenario('#result3 .bad', choiceObjArray[2].bads);
                createAllSenarios(choiceObjArray, 'goods', '#make_good .make');
                createAllSenarios(choiceObjArray, 'bads', '#make_bad .make');
                makeInstruction("#instructions p", "#instructions", "#make_good");
                setTimeout(()=>{
                    $("#make_good .make").find('p').toggleClass("btnOff btnOn");
                }, 36000);
            }, 2000);
            setTimeout(() => {
                $("#result3 .btnOff").toggleClass("btnOff btnOn");
                $("#result3 .textOff").toggleClass("textOff textOn");
            }, 8000);
        } else{
            $("#result3 .required").css('display', 'inline');
        }
    });

    /* THIRD CHOICE: SENARIOS TEXTAREA TOGGLING */

    $( "#result3 .senario_container_good .skip span:nth-child(1)" ).click(function() {
        $("#result3 .senario_container_good .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result3 .senario_container_good .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result3 .senario_container .good div:nth-child(1)').slideToggle(750);
        $('#result3 .senario_container .good div:nth-child(2)').slideToggle(750);
    });

    $( "#result3 .senario_container_good .skip span:nth-child(2)" ).click(function() {
        $("#result3 .senario_container_good .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result3 .senario_container_good .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result3 .senario_container .good div:nth-child(1)').slideToggle(750);
        $('#result3 .senario_container .good div:nth-child(2)').slideToggle(750);
    });

    $( "#result3 .senario_container_bad .skip span:nth-child(1)" ).click(function() {
        $("#result3 .senario_container_bad .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result3 .senario_container_bad .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result3 .senario_container .bad div:nth-child(1)').slideToggle(750);
        $('#result3 .senario_container .bad div:nth-child(2)').slideToggle(750);
    });

    $( "#result3 .senario_container_bad .skip span:nth-child(2)" ).click(function() {
        $("#result3 .senario_container_bad .skip span:nth-child(1)").toggleClass("spanOn spanOff");
        $("#result3 .senario_container_bad .skip span:nth-child(2)").toggleClass("spanOn spanOff");
        $('#result3 .senario_container .bad div:nth-child(1)').slideToggle(750);
        $('#result3 .senario_container .bad div:nth-child(2)').slideToggle(750);
    });

}

/* CHOICE ELIMINATION PAGE CLICKS */

const makeClicks = () => {

    /* GOOD CHOICE ELIMINATION PAGE CLICKS */

    $("#make_good .make").click(function(e){
        if($(e.target).is('p')){
            e.stopPropagation();
            increaseVal(choiceObjArray, 'goods', e.target);
            $("#make_good .make p").css('pointer-events', 'none');
            $(e.target).fadeOut(1000);
            setTimeout(() => {
                createEmptyElement('#make_good .make');
                let arr = Array.from($("#make_good .make").find('p')).filter(el => {
                    return el.style.display !== "none";
                });
                $("#make_good .any span:nth-child(2)").empty().append(arr.length);
                $("#make_good .make p").css('pointer-events', 'auto');
                if(arr.length < 1){
                    val = 1;
                    $("#make_good  .any").css('border', '0');
                    $("#make_good  .any").children().fadeOut(1800);
                    setTimeout(() => {
                        $("#make_good").hide();
                        $("#make_bad").css("display", "inline");
                        setTimeout(()=>{
                            $("#make_bad .make").find('p').toggleClass("btnOff btnOn");
                        }, 2000);
                    }, 2000);
                }
            }, 1100);
        }
    });

    /* BAD CHOICE ELIMINATION PAGE CLICKS */

    $("#make_bad .make").click(function(e){
        if($(e.target).is('p')){
            e.stopPropagation();
            increaseVal(choiceObjArray, 'bads', e.target);
            $("#make_bad .make p").css('pointer-events', 'none');
            $(e.target).fadeOut(1000);
            setTimeout(() => {
                createEmptyElement('#make_bad .make');
                let arr = Array.from($("#make_bad .make").find('p')).filter(el => {
                    return el.style.display !== "none"
                });
                $("#make_bad .any span:nth-child(2)").empty().append(arr.length);
                $("#make_bad .make p").css('pointer-events', 'auto');
                if(arr.length < 1){
                    val = 1;
                    $("#make_bad .any").css('border', '0');
                    $("#make_bad .any").children().fadeOut(1800);
                    setTimeout(() => {
                        $("#make_bad").hide();
                        $("#final .f_result h1 span").append(subject);
                        takeChoice(choiceObjArray, '#final .f_result p');
                        setTimeout(() => {
                            writeCharacter(Array.from('Your Good Decision'), '#final div:nth-child(1) h1');
                        }, 3000);
                        $("#final").css("display", "inline");
                    }, 2000);
                }
            }, 1100);
        }
    });

}







