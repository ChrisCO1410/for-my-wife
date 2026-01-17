const messages = [
    "I love that we can talk through hard things and grow together.",
    "You are my favorite person, even when we are miles apart.",
    "I appreciate you apologizing. It shows me how much you care.",
    "You don't have to be perfect to be the perfect wife for me.",
    "Just a reminder: you are incredibly beautiful, inside and out.",
    "I love you more than words can describe (and more than code can calculate!).",
    "I can't wait for all the memories we haven't made yet.",
    "Distance is temporary, but my love for you is permanent.",
    "The best is yet to come, and I am glad I am experiencing it with you.",
    "I'm so proud of the woman you are becoming.",
    "Thank you for being my wife. I wouldn't want anyone else.",
    "You are doing a great job at life. I'm so proud of you.",
    "I am your biggest fan, always.",
    "August 15, 2025, was the best day of my life. I'm so proud to be your husband.",
    "I want to grow old and grumpy with you.",
    "I love the way you look at me.",
    "Just a reminder that you are the best thing that ever happened to me.",
    "I am so lucky that I get to call you my wife.",
    "Warning: The person reading this is deeply loved.",
    "Building a life with you is my favorite project.",
    "October 14, 2017, changed my life forever. I'm so glad I asked you to be mine.",
    "I love to see you smile.",
    "I love the person you were, the person you are, and the person you are becoming.",
    "I love hearing your voice.",
    "I love how passionate you are.",
    "I can't wait to experience the rest of our lives with you by my side.",
    "You are my favorite distraction.",
    "I love you more than I love coffee (and that's saying a lot).",
    "Even when I'm quiet, please know you are still my entire world.",
    "My soul recognized yours the moment we met.",
    "Still crushing on you every single day.",
    "You don't have to be perfect for me to be obsessed with you.",
    "I'm sending you a hug through this screen. Can you feel it?",
    "You are the poem I never knew how to write.",
    "From 13 & 14 years old to 22 & 23... look at how far we've come.",
    "High school crushes that turned into a marriage... we really are a movie.",
    "I loved you in the lives before this one, I love you in this one, and I'll find you in every one that follows."
];

const messageElement = document.getElementById('message');
const button = document.getElementById('btn');
let lastIndex = -1;

button.addEventListener('click', () => {
    // 1. SAFE CONFETTI: Only runs if the library loaded correctly
    try {
        if (typeof confetti === 'function') {
            const scalar = 2.5;
            const heart = confetti.shapeFromText({ text: '❤️', scalar });
            confetti({
                shapes: [heart],
                particleCount: 40,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#ff4081', '#ff80ab', '#f8bbd0'],
                scalar: scalar
            });
        }
    } catch (e) { console.log("Confetti skip"); }

    // 2. MESSAGE LOGIC
    messageElement.classList.remove('fade-in');
    void messageElement.offsetWidth; 
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (randomIndex === lastIndex && messages.length > 1);
    
    lastIndex = randomIndex;
    messageElement.textContent = messages[randomIndex];
    messageElement.classList.add('fade-in');
});

function updateCounter() {
    const startDate = new Date(2017, 9, 14); 
    const today = new Date();
    const timeDiff = today - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('days-count').textContent = daysDiff;
}

function setDynamicBackground() {
    const hour = new Date().getHours();
    const body = document.body;
    if (hour >= 5 && hour < 12) {
        body.style.background = "linear-gradient(135deg, #FF9A8B 0%, #FFD1FF 100%)";
    } else if (hour >= 12 && hour < 18) {
        body.style.background = "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)";
    } else if (hour >= 18 && hour < 21) {
        body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    } else {
        body.style.background = "linear-gradient(135deg, #243B55 0%, #141E30 100%)";
    }
}

updateCounter();
setDynamicBackground();
