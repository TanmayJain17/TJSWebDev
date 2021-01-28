function creategreetings(greetings)
{
    function greet(name)
    {
        console.log(greetings, name)
    }

    return greet()
}

let g1=creategreetings('goodmorning')

console.log(typeof g1)
console.log(typeof g1())
