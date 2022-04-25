

const salaryEl = document.getElementById('salary');
const netSalaryEl = document.getElementById('netSalary');
const taxEl = document.getElementById('tax');
const socTaxEl = document.getElementById('socTax');
const stampEl = document.getElementById('stamp');

function calculate() { 
    
  const socTax = 0.045* salaryEl.value; 
  const  salaryTax = 0.21 * salaryEl.value;
  


  socTaxEl.value = socTax;
  taxEl.value = salaryTax ;
  stampEl.value = stamp;

  if (salaryEl.value <'100000'){
     stamp = 0;
  } else {

     stamp = 3000;
   }

  

  netSalaryEl.value = (salaryEl.value - taxEl.value - socTaxEl.value - stampEl.value);

}

salaryEl.addEventListener('input', calculate);
