let calculator = {
    bb : null,
    tb : null,
    result : 0,
    resulttoFix : 0,
    displayNumber: '0'
 };

 function updateDisplay() {
    document.querySelector("#displayNumber").innerText = displayNumber;
 }
  

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event) {
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
       bb = document.getElementById("inputBeratBadan1").value;
       tb = document.getElementById("inputTinggiBadan1").value;
       

       if(target.classList.contains('submit')) {
        performCalculation();
        updateDisplay();
    }
   });
}


function performCalculation() {
    console.log(bb);
        console.log(tb);
    if (bb == null || tb == null) {
        alert("Tidak Boleh Ada Data Yang Kosong");
        return;
    }

    else {
        
        result = parseFloat(bb) / (parseFloat(tb) * parseFloat(tb));
        resulttoFix = parseFloat(result).toFixed(2);
    }

    displayNumber = resulttoFix;
  
    
 }

 

//