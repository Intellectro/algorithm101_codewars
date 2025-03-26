/*You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:*/

function likesArr(arr) {
    if (arr.length <= 0){
        return "no one likes this";
    };
    if (arr.length <= 3) {
        return (new Intl.ListFormat("en-Us", {type: "conjunction", style: "long"})).format(arr).split(", and").join(" and") + " like this";
    }
    const [a, b, ...others] = arr;
    return (a + ", " + b + ", and " + others.length + " others like this");
}

const check = likesArr(["John", "emeka", "Iyoo"]);

console.log(check);