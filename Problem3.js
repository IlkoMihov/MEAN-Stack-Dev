const performedFunction = (string, func) => func(string)


console.log(performedFunction('supercalifragilisticexpialidocious',string=>string.split(/(?=c)/)))
console.log(performedFunction('supercalifragilisticexpialidocious',string => retVal = {
    originalString: string,
    modifiedString: string.replace(/a/g,'A'),
    numberReplaced: string.match((/a/g))||[].length,
    length: string.length

}))
