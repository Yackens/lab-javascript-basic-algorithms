// Iteration 1: Names and Input
const hacker1 = "Pablo";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Peter";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""));

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}

else {

    for (let i=0; i<=hacker1.length; i++) {
        if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i)) {
            console.log("The driver's name goes first.");
            break;
        }

        else if (hacker1.charCodeAt(i) > hacker2.charCodeAt(i)) {
            console.log("Yo, the navigator goes first, definitely.");
            break;
        }

        else {
            if (hacker1.length - i === 0) {
                console.log("The driver's name goes first.");
            }

            else if (hacker2.length - i === 0) {
                console.log("Yo, the navigator goes first, definitely.");
            }
        }
    }
}


// BONUS 1:
const longText= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit sem eu nibh ultricies ornare. Aliquam ut sapien vehicula, tristique justo id, suscipit lacus. Phasellus posuere est risus, ac pharetra felis maximus id. Morbi id justo laoreet, tincidunt felis vitae, gravida ligula. Sed non tortor augue. Suspendisse vulputate eros mattis risus bibendum, a imperdiet dolor mattis. Sed lorem nisl, tristique vel ultricies elementum, accumsan in elit. Fusce imperdiet sollicitudin nunc, porta fermentum tellus sodales non.
Vivamus consectetur, felis eu ullamcorper congue, nulla quam euismod mauris, at laoreet nisi velit eu felis. Aenean quis placerat mauris, in laoreet nibh. In ipsum tellus, elementum a ante quis, fringilla porta nibh. In sollicitudin est eu lorem facilisis sagittis. Praesent ultricies tristique ipsum, a aliquam augue vestibulum non. Donec sagittis aliquam mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ultrices quam nec mauris sollicitudin, ac varius libero semper. Proin erat risus, tincidunt nec massa quis, laoreet porta dolor. Suspendisse tincidunt faucibus odio, ultrices pellentesque quam gravida ut.
Duis aliquet, magna dignissim viverra accumsan, nunc libero maximus odio, quis facilisis mauris mauris ac sem. Nullam quam mauris, sollicitudin eu augue eu, porta finibus velit. Aliquam erat volutpat. Sed in diam ut eros mollis pharetra vel quis massa. Duis at fringilla purus. Etiam eget dapibus urna, eget varius neque. Ut in justo lectus. Praesent ullamcorper erat id tellus posuere scelerisque.
`

console.log(longText.split(' ').length);
console.log(longText.split(' et ').length -1);