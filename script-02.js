function speedDetector (speed) {
    const speedlimit = 70;
    if (speed <speedlimit){
        return `OK`;
    }else {
        let demeritpoints = Math.floor((speed - speedLimit) / pointsPerOverSpeed);
        if (demeritpoints > 12){
            return `license suspended`;
        }else{
            return`points: ${demeritpoints}`;
        }

    }
}
speedDetector(40);
speedDetector(90);
speedDetector(140);