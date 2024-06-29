 export default function resultReducer(cruntresultState,action){
    console.log("calling the reducer",cruntresultState,action)
    const type = action.type
    if (type == "sum"){
      const {firstNumber,scondNumber} = action.payload
      return Number(firstNumber ) + Number(scondNumber);
    }else if(type == "Sub"){
      const {firstNumber,scondNumber} = action.payload
      return firstNumber -  scondNumber;
    }else if(type == "Mult"){
      const {firstNumber,scondNumber} = action.payload
      return firstNumber *  scondNumber;
    }else if(type == "DivClic"){
      const {firstNumber,scondNumber} = action.payload
      return firstNumber /  scondNumber;
    }
  
  
  }