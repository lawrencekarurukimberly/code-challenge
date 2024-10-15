function netCalculator (basicSalary, benefits) {
const grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

  let nhif = 0;

  if ( grossSalary <= 5999) {
       nhif = 150;
  }
  else if ( grossSalary <= 7999) {
       nhif = 300;
  }
  else if ( grossSalary <= 11999) {
      nhif = 400;
 }
   else if ( grossSalary <= 14999) {
       nhif = 500;
  }
  else if ( grossSalary <= 19999) {
       nhif = 600;
  }
  else if ( grossSalary <= 24999) {
       nhif = 750;
  }
  else if ( grossSalary <= 29999) {
      nhif = 850
  }
  else if ( grossSalary <= 34999) {
      nhif = 900
  }
  else if ( grossSalary <= 39999) {
      nhif = 950
  }
  else if ( grossSalary <= 44999) {
      nhif = 1000
  }
  else if ( grossSalary <= 49999) {
      nhif = 1100
  }
  else if ( grossSalary <= 59999) {
      nhif = 1200
  }
  else if ( grossSalary <= 69999) {
      nhif = 1300
  }
  else if ( grossSalary <= 79999) {
      nhif = 1400
  }
  else if ( grossSalary <= 89999) {
      nhif = 1500
  }
  else if ( grossSalary <= 99999) {
      nhif = 1600
  }
  else {
       nhif = 1700;
  }

  function calculatePayee(grossSalary) {
      const taxableIncome = grossSalary - nhif;

      if  (taxableIncome <= 24000) {
         return taxableIncome * 0.1
      }
      else if  (taxableIncome > 24001 && taxableIncome <= 32333) {
          return taxableIncome * 0.25
      }
      else if  (taxableIncome >= 32334 && taxableIncome <= 500000) {
          return taxableIncome * 0.3
      }
      else if  (taxableIncome >= 500001 && taxableIncome <= 800000) {
          return taxableIncome * 0.325
      }
      else if  (taxableIncome > 800000) {
          return taxableIncome * 0.35
      }
      else {
      }

  }

{
  function calculateNssf(pensionablePay) {
      let nssf = grossSalary * 0.05;
      return nssf;
      }



  }
  const pensionablePay = basicSalary;

  const nssf = calculateNssf(pensionablePay);

  const housingLevy = grossSalary * 0.015;

  const payee = calculatePayee(grossSalary);

  const netSalary = grossSalary - ( nhif + payee + nssf + housingLevy);

  return {
      grossSalary,
      nhif,
      nssf,
      payee,
      netSalary,
      housingLevy,

  };

}

const basicSalary = prompt("Enter basic salary:");
const benefits = prompt("Enter benefits:");
const calculatorDetails = netCalculator(basicSalary, benefits);

  console.log("Gross Salary:", calculatorDetails.grossSalary);
  alert("Gross Salary: " + calculatorDetails.grossSalary)
  console.log("NHIF:", calculatorDetails.nhif);
  alert("NHIF: " + calculatorDetails.nhif)
  console.log("NSSF:", calculatorDetails.nssf);
  alert("NSSF: " + calculatorDetails.nssf)
  console.log("housingLevy", calculatorDetails.housingLevy)
  alert("housingLevy: " + calculatorDetails.housingLevy)
  console.log("PAYEE Deductions:", calculatorDetails.payee);
  alert("PAYEE Deductions: " + calculatorDetails.payee)
  console.log("NetSalary:", calculatorDetails.netSalary);
  alert("NetSalary: " + calculatorDetails.netSalary)