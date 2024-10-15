const marks = prompt("enter students marks:");
if(marks >= 0 && marks <= 100){
    function grader (){
        let grade;

        if(marks > 79){
            grade = "A";
        }else if(marks >= 60 && marks <= 79){
            grade = "B";
        }else if(marks >= 50 && marks <= 59){
            grade = "C";
        }else if(marks >= 40 && marks <= 49){
            grade = "D";
        }else{
            grade = "E";
        }

        return `Your grade is ${grade}`;
    }

    console.log(grader());
    alert(grader())
}else{
    console.log("Input marks between 0 and 100");
    alert(grader())
}