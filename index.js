function distanceFromHqInBlocks(num){
    if(num > 42){
        return num - 42
    } else{
        return 42 - num
    }
}

function distanceFromHqInFeet(val){
    return distanceFromHqInBlocks(val) * 264
    
}

function distanceTravelledInFeet(start, destination) {
    if(start > 42){
    return (destination - start) * 264
} else{
    return (start - destination) * 264
}
  }

  function calculatesFarePrice(start, destination) {
    let price = 0;
    let distance = 0;
    if(start > 42){
        distance = (destination - start) * 264
        if(distance >= 2000 && distance <= 2500){
                return 25;
            } else if(distance > 400 && distance < 2000){
                return (distance - 400) * .02;
            } else if(distance <= 400){
                return 0;
            } else if(distance <= 400){
                return 0;
            } else if(distance > 2500){
                return 'cannot travel that far'
            }
    } else{
        distance = (start - destination) * 264;
        if(distance >= 2000 && distance <= 2500){
            return 25;
        } else if(distance > 400 && distance < 2000){
            return (distance - 400) * .02;
        } else if(distance <= 400){
            return 0;
        } else if(distance <= 400){
            return 0;
        } else if(distance > 2500){
            return 'cannot travel that far'
        }
    }
  }