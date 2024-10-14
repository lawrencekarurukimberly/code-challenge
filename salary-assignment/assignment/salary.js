function calculateNetSalary(basicSalary, benefits) {

    const taxRate = 10
    const nhifRate = 2.5
    const nssfRate = 6

 const grossSalary = basicSalary + benefits;

 const tax = grossSalary * taxRate;
    const nhif = grossSalary * nhifRate;
    const nssf = grossSalary * nssfRate;

    const netSalary = grossSalary - (tax + nhif + nssf ) ;


    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary
    };
  }
const basicSalary = "90000";
  const benefits ="10000";
  const result = calculateNetSalary(basicSalary, benefits);
  console.log("Net Salary Calculation Results:");
  console.log("Gross Salary:", result.grossSalary);
  console.log("Tax:", result.tax);
  console.log("NHIF Deductions:", result.nhif);
  console.log("NSSF Deductions:", result.nssf);
  console.log("Net Salary:", result.netSalary);