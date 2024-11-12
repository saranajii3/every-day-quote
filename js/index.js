var arr=[  {"quote":"“When you have a dream, you\'ve got to grab it and never let go.”", "author":"Carol Burnett"},
    {"quote":"“Nothing is impossible. The word itself says \'I\'m possible!'”", "author":"Audrey Hepburn"},
    {"quote":"“There is nothing impossible to they who will try.”", "author":"Alexander the Great"},
    {"quote":"“The bad news is time flies. The good news is you\'re the pilot.”", "author":"Michael Altshuler"},
    {"quote":"“Life has got all those twists and turns. You\'ve got to hold on tight and off you go.”", "author":"Nicole Kidman"},
    {"quote":"“Keep your face always toward the sunshine, and shadows will fall behind you.”", "author":"Walt Whitman"},
    {"quote":"“Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.”", "author":"Amal Clooney"},
    {"quote":"“You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.”", "author":"Duchess Meghan"},
    {"quote":"“Success is not final, failure is not fatal: it is the courage to continue that counts.”", "author":"Winston Churchill"},
    {"quote":"“You define your own life. Don\'t let other people write your script.”", "author":"Oprah Winfrey"},
    {"quote":"“You are never too old to set another goal or to dream a new dream.”", "author":"Malala Yousafzai"},
    {"quote":"“At the end of the day, whether or not those people are comfortable with how you\'re living your life doesn\'t matter. What matters is whether you\'re comfortable with it.”", "author":"Dr. Phil"},
    {"quote":"“Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.”", "author":"Lady Gaga"},
    {"quote":"“Spread love everywhere you go.”", "author":"Mother Teresa"},
    {"quote":"“You can be everything. You can be the infinite amount of things that people are.”", "author":"Kesha"}
];
function random(arrayLength)
{
    return Math.floor(Math.random() * arrayLength);            
}

function generateRandomQuote()
{
    var randomNumber = random(arr.length);                  
    document.getElementById("quote").innerHTML = arr[randomNumber].quote;
    document.getElementById("author").innerHTML = "- " + arr[randomNumber].author;
}
