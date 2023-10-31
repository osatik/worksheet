const dice = (max) =>{
    let zar = {1:'one', 2:'two', 3:'three', 4: 'four', 5: 'five', 6: 'six'}
    let allDices=[];
    for(let i = 0;i<max; i++){
        let arr = [];
        for(let i = 0; i<2; i++){            
            let dice = Math.floor(Math.random()*6)+1;
            arr.push(dice)
        }
        allDices.push(arr.sort((a,b) => a-b))
        console.log(`"${zar[arr[0]]}"-"${zar[arr[1]]}`);
    }
    return allDices         
}
console.log(dice(10));