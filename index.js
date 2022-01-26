// Make the pop and shift buttons work as well
const myEmojis = ["👨‍💻", "📡", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const DisplModeBtn = document.getElementById("displmode-btn")
const Stylesheet = document.getElementById("stylesheet")
let dayMode = true

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {

    myEmojis.pop(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
    }
)

shiftBtn.addEventListener("click", function() {

    myEmojis.shift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
    }
)

DisplModeBtn.addEventListener("click", function(){
    if (dayMode) {
        Stylesheet.setAttribute("href", "indexNight.css")
        dayMode = false
    }
    else {
        Stylesheet.setAttribute("href", "index.css")
        dayMode = true
    }

})
