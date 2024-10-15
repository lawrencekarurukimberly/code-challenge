let speed = prompt("Input Speed: ");
let limit = 70;
function speedDetector(){
    let response;
    if(speed <= limit){
        response = "Ok";
    }else{
        let points = (speed - limit)/5;
        if (points < 12){
            response = Points: ${points};
        }else{
            response = "License suspended";
        }
    }
    return response;
}
console.log(speedDetector());
alert(speedDetector())