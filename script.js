// Why checking for String doesn't work????
// 1
const textInput = document.getElementById('item_input')

function isString(x){
    if (typeof x === 'string'){
        return true
    } else {
        return false
    }
}

function isPalindrome(){
    const text = textInput.value
    if(isString(text)){
        let arrText = text.split('')
        let arrTextReverse = arrText.reverse()
        let res = arrTextReverse.join('')
        if(text === res || text.toUpperCase() === res.toUpperCase()
        || text.trim() === res.trim()){
            console.log(true)
            return true
        }else {
            console.log(false)
            return false
        }
    }else{
        return false
    }
}

// 2
const inputString = document.getElementById('item_input1')
const reverseResult = document.getElementById('result1')

function reverseString(){
    const text = inputString.value
    if(typeof text === 'string'){
        let arrText = text.split('')
        let arrTextReverse = arrText.reverse()
        reverseResult.textContent = arrTextReverse.join('')
    }else {
        alert('Not a string')
    }
}

// 3

const inputText = document.getElementById('item_input2')
const search = document.getElementById('item')
const resultOfSearch = document.getElementById('result2')

function countChar(){
    let text = inputText.value
    let partOfText = search.value
    if(typeof text === 'string' && typeof partOfText === 'string'){
            let res = text.split(partOfText).length-1
            resultOfSearch.textContent = res
    }
}