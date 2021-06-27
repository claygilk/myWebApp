// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function calcOneRepMax(){
    let form = document.getElementById("oneRM_form");

    let weight = parseInt(form.elements[0].value) ;
    let reps = parseInt(form.elements[1].value);

    let total = Math.round(weight / ( 1.0278 - 0.0278 * reps ));

    document.getElementById("result").innerHTML = total;
}

function calcPlates()
{
    let form = document.getElementById("plateMath");

    let barWeight = 45;
    const plateLibrary = [45,35,25,10,5,2.5] 

    let runningWeight = form.elements[0].value - barWeight;
    
    let plates = "----";
    
    for (let plate of plateLibrary){
        
        while(runningWeight >= plate*2){
            plates += " | " + plate.toString();
            runningWeight -= plate*2;
        }
    }
    
    document.getElementById("plates").innerHTML = plates;
}
