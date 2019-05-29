function* wordByWord(sentence){
    let counter = 0;
    splitSentence = sentence.split(' ')
    while(counter<splitSentence.length){
        yield splitSentence[counter]
        counter+=1
    }


}

const emitted = wordByWord("All I know is something like a bird within her sang")
nextIteration= emitted.next()
    while(true){
    if(nextIteration.done == true) return
    console.log(nextIteration.value)
    nextIteration =emitted.next()

}