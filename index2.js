//Number Line

//create a script tag that takes the sum of two variables
    //print the result

    const input1 = 0;
    const input2 = -1001;
    let sum = input1 + input2;
    
    if(sum > 100){
        console.log(`${sum} is greater than 100`);
    }else if(sum > 0){
        console.log(`${sum} is greater than 0`);
    }else if(sum === 0){
        console.log(`${sum} is equal to 0`);
    }else if(sum < 0 && sum >= -1000){
        console.log(`${sum} is a negative number`);
    }else if(sum < -1000){
        console.log(`${sum} is less than -1000`);
    }