module.exports = function check(str, bracketsConfig) {
  debugger;
  var stack = [];    

  for (let j = 0; j < str.length; j++) {
    const symbol = str[j];
    
    let flag = false;
    
    for (let i = 0; i < bracketsConfig.length; i++) {
      const configElement = bracketsConfig[i];

      const stackElement = stack[stack.length - 1];

      if(stackElement == configElement[0] && symbol == configElement[1]){
        stack.pop();
        flag = true;
      }
    }
    
    if (!flag) stack.push(symbol);
  }    
  if (stack.length == 0 ) return true;
  
  return false;  
}