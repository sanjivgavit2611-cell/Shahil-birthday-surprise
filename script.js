function revealEverything() {
    document.getElementById('initialBtnContainer').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');

    var audio = document.getElementById('bdayMusic');
    audio.play().catch(e => console.log("Music play blocked: ", e));

    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    createBalloons();
    startTypewriter();
}

function createBalloons() {
    const container = document.getElementById('extras-container');
    const emojis = ['✨', '🎈', '✨', '🎈'];
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 4 + 4) + 's';
        balloon.style.fontSize = Math.random() * 1.5 + 1.2 + 'rem';
        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 8000);
    }, 500);
}

// Aapka diya hua Hindi text exact layout ke saath
const text = `🎉🎂 Happy Birthday Mere Jigar Ke Tukde! 🎂🎉

Bhai, tere jaise dost har kisi ki life mein nahi hote. 🤝❤️
Hamesha khush reh 😊, haste reh 😄 aur life mein jo bhi chahe woh hasil kare. 🌟💪🚀

Aaj tera din hai, to full enjoy kar 🥳🎈, mast party kar 🎊🍰 aur dher saari yaadein bana 📸✨

Thanks har bakchodi 🤪, hasi-mazaak 😂 aur support 🫂 ke liye. 🤝💙
Aise hi hamesha saath rehna bhai. 🔥😎

Once again, Happy Birthday mere bhai! 🎂👑🎁
Tera aane wala saal khushiyon 😄, success 🏆 aur yaadgaar palon 🌈✨ se bhara ho. 🚀💖`;

let index = 0;

function startTypewriter() {
    const ele = document.getElementById('typewriter');
    if (index < text.length) {
        ele.innerHTML += text.charAt(index);
        index++;
        setTimeout(startTypewriter, 35); // Typing speed thodi fast rakhi h kyuki text bada h
    }
}
