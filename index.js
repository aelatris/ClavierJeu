// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with ID "mot"
    var mot = document.getElementById("mot");
    var input = document.getElementById("input");
    var score = document.getElementById("score");
    var boutton = document.getElementById("boutton");
    var timer = document.getElementById("timer");
    var gameOver = document.getElementById("gameOver");
    var startt = document.getElementById("start");
    var restart = document.getElementById("restart");
    var goBack = document.getElementById("goToHomePage");


    var resultMessage = document.getElementById("resultMessage");



    var commencer = document.getElementById("commencer");
    var nombre = 1;
    var temps = 60;
    timer.textContent = "You have " + temps + " seconds";
    var chiffre = false;
const randomWord = ["banana", "elephant", "computer", "rainbow", "mountain", "guitar", "ocean", "cake", "moon", "rocket", "sun", "flower", "dog", "cat", "bird", "house", "book", "tree", "beach", "star", "bridge", "river", "lake", "bicycle", "chair", "table", "lamp", "phone", "shoe", "hat", "jacket", "pencil", "pen", "paper", "carpet", "window", "door", "key", "lock", "clock", "mirror", "painting", "globe", "map", "guitar", "piano", "violin", "drum", "trumpet", "flute", "camera", "microphone", "speaker", "headphones", "watch", "bracelet", "necklace", "ring", "garden", "fireplace", "candle", "chocolate", "coffee", "tea", "juice", "apple", "orange", "banana", "grape", "strawberry", "watermelon", "lemon", "pineapple", "mango", "kiwi", "peach", "plum", "blueberry", "raspberry", "blackberry", "cherry", "pear", "carrot", "broccoli", "tomato", "potato", "lettuce", "cucumber", "onion", "garlic", "pepper", "salt", "sugar", "flour", "butter", "cheese", "milk", "egg", "bread", "pasta", "rice", "chicken", "beef", "fish", "shrimp", "lobster", "crab", "soup", "salad", "pizza", "burger", "fries", "sandwich", "taco", "sushi", "ice cream", "cake", "cookie", "brownie", "pie", "chocolate", "vanilla", "strawberry", "caramel", "honey", "jam", "nut", "peanut", "almond", "cashew", "walnut", "pecan", "hazelnut", "macadamia", "coconut", "pistachio", "cinnamon", "vanilla", "mint", "chili", "pepper", "garlic", "ginger", "onion", "cumin", "thyme", "rosemary", "oregano", "basil", "parsley", "cilantro", "dill", "mustard", "ketchup", "mayonnaise", "sauce", "oil", "vinegar", "soy", "honey", "salt", "pepper", "sugar", "flour", "butter", "cheese", "milk", "egg", "cream", "yogurt", "bread", "pasta", "rice", "cereal", "oatmeal", "waffle", "pancake", "toothbrush", "toothpaste", "shampoo", "conditioner", "soap", "lotion", "towel", "shower", "bathtub", "sink", "toilet", "mirror", "scale", "hairdryer", "razor", "comb", "brush", "nail", "makeup", "perfume", "bracelet", "necklace", "ring", "earring", "watch", "sunglasses", "hat", "scarf", "glove", "umbrella", "wallet", "purse", "backpack", "briefcase", "laptop", "tablet", "phone", "charger", "battery", "cable", "speaker", "headphones", "microphone", "camera", "tripod", "lens", "remote", "keyboard", "mouse", "monitor", "printer", "scanner", "projector", "paper", "pen", "pencil", "notebook", "folder", "file", "stapler", "tape", "glue", "scissors", "ruler", "calculator", "calendar", "clock", "alarm", "candle", "lighter", "matches", "fireplace", "campfire", "lantern", "flashlight", "batteries", "rope", "tarp", "tent", "sleeping", "sleeping bag", "mattress", "pillow", "blanket", "chair", "table", "cooler", "cookware", "pot", "pan", "skillet", "grill", "oven", "microwave", "fridge", "freezer", "sink", "dish", "dishwasher", "utensil", "knife", "fork", "spoon", "plate", "bowl", "glass", "cup", "mug", "napkin", "straw", "plastic", "wood", "metal", "glass", "ceramic", "fabric", "paper", "cardboard", "paint", "canvas", "brush", "easel", "clay", "pottery", "sculpture", "marble", "stone", "wood", "metal", "glass", "ceramic", "fabric", "paper", "cardboard", "paint", "canvas", "brush", "easel", "clay", "pottery", "sculpture", "marble", "stone"];


    input.style.visibility = 'hidden';
    mot.style.visibility = 'hidden';
    boutton.style.visibility = 'hidden';
    restart.style.visibility = 'hidden';
    goBack.style.visibility = 'hidden';

    resultMessage.style.visibility = 'hidden';
   


    mot.textContent = "GO";

   
        for (let index = 0; index < mot.textContent.length; index++) {
            
            
        }



        function validerMot(){
            if (input.value.toLowerCase() === mot.textContent.toLowerCase()) {
                score.textContent = (nombre ++).toString();
                var motRandom = Math.floor(Math.random() * randomWord.length);;
                mot.textContent = randomWord[motRandom].toUpperCase();
                mot.style.color = "black";
                input.value = "";
                console.log(nombre);
            }else{
                mot.style.color = "red";
            }
        }

        boutton.addEventListener("click", validerMot);

        document.addEventListener("keydown", function(event) {
            // Check if the pressed key is the "Enter" key (keycode 13)
            if (event.keyCode === 13) {
              // Call the validerMot function when the "Enter" key is pressed
              validerMot();
              
            }
    })

    
function start(){
    var countdownInterval = setInterval(function() {
        startt.style.display = 'none';
        input.style.visibility = 'visible';
        mot.style.visibility = 'visible';
        boutton.style.visibility = 'visible';
        input.focus();
        temps--;
        timer.textContent = temps.toString();
        if (temps <= 0) {
            startt.style.display = 'none';
            input.style.display = 'none';
            mot.style.display = 'none';
            boutton.style.display = 'none';
            restart.style.visibility = 'visible';
            goBack.style.visibility = 'visible';
            timer = 60;
            clearInterval(countdownInterval);
            // Handle game over or other actions here

            score.style.visibility = 'hidden';

           resultMessage.style.visibility = 'visible';

           if(nombre >= 29){
            resultMessage.textContent = "Very Good. You're a fast typer!"
            resultMessage.style.color = 'green';

           }else if (nombre <=20) {
            resultMessage.textContent = "That was very bad! Keep typing."
            resultMessage.style.color = 'red';
           }else{
            resultMessage.textContent = "That was good! You can do better"
            resultMessage.style.color = 'rgb(140, 140, 6)';
           }

            gameOver.textContent = "Your Score: " + score.textContent;
          
        }
    }, 1000);
}


function restartt(){
location.reload();    

}



startt.addEventListener("click", start);
restart.addEventListener("click", restartt);




});


