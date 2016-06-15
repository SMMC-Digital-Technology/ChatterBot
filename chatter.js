//DOCTYPE Javascript
//save input field and container div
var container = document.getElementById("container");
var inputText = document.getElementById("inputText");
var reply;

/* this function displays user input on the computer
*/

function addInput(text) {
    
    var line = document.createElement("p");
    line.className = "user";
    line.innerHTML = text; 
    //add line to container
    container.appendChild(line);
    line.scrollIntoView;
    
}

//Robot Replies
//initial reply
var botReply = ["Hello", "Why?", "How are you?", "So what brings you to the realm of the digital world ?", "Hi how are you", " Welcome to the Bot realm, how can we help you ? ", "Hi i'm Gary", "Hi, i'm Constantina, your loyal ChatBot.", " Hi i'm Wulfram your Friendly chatterbot"];
//conversation
var botChat = ["So, what did you do?", "You should try relaxing, take a deep breath and count to 10", "Listen to some good songs", " I would love to eat some food but unfortunately I am a computer", "I would love to go running but my developer *coughs* Alexis has not programmed me to be able to", "Sometimes I get sleepy and just hibernate, the life of a computer"];
var botRea = [" Because why not ?", "Because it is how the world works", " Because, Science", "Because of your perception of reality, is what you see actually real. "]
//reply positive 
var repPos = [" That's nice ", " What a great idea ", " Splendid"  ];
//reply negative
var repNeg = [" Oh no", " That's so bad ", " So unfortunate"];
//consoles when sadness is detected
var comfort = ["You will be fine", " There are plenty of people to talk to", "How about you go outside for a bit", "It's not your fault, human emotions can really be a rollercoaster"," You can't continue like this ", " "  ];
var complementing = ["Thats a nice shirt your wearing", "You seem a bit excited today", "You have a great taste in computers"];
//farewell
var far = ["See ya round", "Au revoir", "Auf Videzen", " Ciao", "Adieu", "Saiyonara", "I will see you soon", "Adios"];



/* This function displays its own reply
*/

function addBotReply() {
    var line = document.createElement("p");
    //create a new paragraph
    var line = document.createElement("p");
    line.className = "bot";
    line.innerHTML = reply;
    //add line to container
    container.appendChild(line);
    line.scrollIntoView;
    
}
                
function createReply(text) {         
    reply = "";
    //word with capital and lowercase
    if (text.includes("Hello", 0) || text.includes("hello", 0)) {
        reply = botReply[Math.floor(Math.random() * botReply.length)];
        
    } else if (text.includes("Why", 0) || text.includes("why", 0)) { 
        reply = botRea[Math.floor(Math.random() * botRea.length)];
        
    } else if (text.includes("Bye", 0) || text.includes("bye", 0)) {
        reply = far[Math.floor(Math.random() * far.length)];
        
    } else if (text.includes("Excited", 0) || text.includes("excited", 0)) {
        reply = repPos[Math.floor(Math.random() * repPos.length)]; 
        
    } else {  reply = "error !!!"; }
    
    line.scrollIntoView;
    
}
            
       
        


/* Displays user text, gives a reply
*/

function chat() {
    var text = inputText.value;
    addInput(text);
    createReply(text);
    setTimeout(addBotReply, 500);
    
}

//add button listener

var inputButton = document.getElementById("inputEnter");
inputButton.addEventListener("click", chat, false);

