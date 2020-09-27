//verygood = bill + 6% of bill
//good = bill + 5% of bill
//ok = 4% of bill
//bad = 2 % of bill





const calculate = () => {
    const bill_amount = document.getElementById('bill_amount').value
    const service = document.getElementById('service');
    const peaople = document.getElementById('peaople').value
     var result = service.options[service.selectedIndex].value
     
    

    if(result == 1){
        document.querySelector('.result').innerHTML =  Math.floor( parseInt( bill_amount) + (bill_amount / 100) * 6);
        document.querySelector('.per-head').innerHTML =  Math.floor( parseInt( bill_amount) + (bill_amount / 100) * 6) / peaople
    }else if(result == 2){
        document.querySelector('.result').innerHTML =  parseInt( bill_amount) + (bill_amount / 100) * 5;
        document.querySelector('.per-head').innerHTML =  Math.floor( parseInt( bill_amount) + (bill_amount / 100) * 5) / peaople
    }else if(result == 3){
        document.querySelector('.result').innerHTML =  parseInt( bill_amount) + (bill_amount / 100) * 4;
        document.querySelector('.per-head').innerHTML =  Math.floor( parseInt( bill_amount) + (bill_amount / 100) * 4) / peaople
    }else{
        document.querySelector('.result').innerHTML =  parseInt( bill_amount) + (bill_amount / 100) * 2;
        document.querySelector('.per-head').innerHTML =  Math.floor( parseInt( bill_amount) + (bill_amount / 100) * 2) / peaople
    }
   
    
    
 
   

}