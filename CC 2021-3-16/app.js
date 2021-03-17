function basicOp(operation, value1, value2)
{
  if (operation === '+'){
      let additionAnswer = value1 + value2
      return additionAnswer;
      }else if(operation === '-'){
      let subtractionAnswer = value1 - value2
      return subtractionAnswer;
      }else if(operation === '*'){
      let multiplicationAnswer = value1 * value2
      return multiplicationAnswer;
      }else if(operation === '/'){
      let divisionAnswer = value1 / value2
      return divisionAnswer;}
  }