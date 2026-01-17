// 1. Your Custom Messages
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

// 2. Random Message Logic
button.addEventListener('click', () => {
    messageElement.classList.remove('fade-in');
    void messageElement.offsetWidth; // Force CSS restart
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
    
    messageElement.classList.add('fade-in');
});

// 3. Day Counter Logic
function updateCounter() {
    // SET YOUR DATE HERE: (Year, Month Index 0-11, Day)
    // Example: January is 0, February is 1...
    const startDate = new Date(2017, 9, 14); 
    const today = new Date();
    
    const timeDiff = today - startDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-count').textContent = daysDiff;
}

updateCounter();
