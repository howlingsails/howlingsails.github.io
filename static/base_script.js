// Kick off all the Magical Spells -]:-)>
document.addEventListener('DOMContentLoaded', function () {
    createInteractiveElements();
    createHamburgerMenu();
}, false);

function jumpTop() {
    window.location.href = "#root_div";
}

function pop_menu(target, text, html) {
    let top_button = document.createElement("div");
    top_button.title = "Command Menu Panel";
    top_button.className = "command_menu";
}

function createLinkItem(href, text, target) {
    const linkItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = href;
    link.textContent = text;
    link.target = target;
    linkItem.classList.add('hamburger-link');
    linkItem.appendChild(link);
    return linkItem;
}

function createHamburgerMenu() {
    const summaryElements = document.getElementsByClassName("section_group");

    const menu = document.createElement("div");
    menu.classList.add("hamburger-menu");
    menu.innerHTML = '<span class="material-symbols-outlined">menu</span>';

    const panel = document.createElement("div");
    panel.classList.add("hamburger-panel");
    panel.style.display = "none";


    const navList = document.createElement("ul");
    if (!window.location.href.startsWith("https://howlingsails.com/world_vision/")) {
        const pateiaBlog = createLinkItem("https://pateia.howlingsails.com/", "World of Pateia Stories", "Pateia_Blog");
        navList.appendChild(pateiaBlog);
        const fwvgLink = createLinkItem("https://howlingsails.com/world_vision/world/Pateia", " World of Pateia Details", "Pateia");
        navList.appendChild(fwvgLink);
    }


    const rootItem = document.createElement("li");
    const rootLink = document.createElement("a");
    rootLink.href = `#root_div`;
    rootLink.textContent = 'Top of Page';
    rootItem.classList.add('hamburger-link');
    rootItem.appendChild(rootLink);
    navList.appendChild(rootItem);

    // Add the new list item for copying the HTML document
    const copyHTMLTextLink = createLinkItem("#", "Copy Page Text", "_self");
    copyHTMLTextLink.addEventListener("click", copyHTMLAsPlainText);
    copyHTMLTextLink.classList.add("hamburger-link");
    navList.appendChild(copyHTMLTextLink);


    const subPaths = window.location.href.split("/").slice(4);

    if (subPaths.includes("world")) {
        const worldName = subPaths[subPaths.indexOf("world") + 1];
        const worldLink = createLinkItem(`/world_vision/world/${worldName}`, `Return to ${worldName}`, `${worldName}`);
        navList.appendChild(worldLink);
    }

    // Add more if statements for other subPaths

    for (const summaryElement of summaryElements) {
        if (!summaryElement.id) {
            continue;
        }

        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${summaryElement.id}`;
        link.textContent = summaryElement.id;
        listItem.classList.add('hamburger-link');
        listItem.appendChild(link);
        navList.appendChild(listItem);
    }

    const voiceSelectorLink = document.createElement("li");
    voiceSelectorLink.innerHTML = "<strong><u>Voice Options</u></strong>";
    voiceSelectorLink.addEventListener("click", createVoiceSelector);
    voiceSelectorLink.onclick = createVoiceSelector;
    voiceSelectorLink.classList.add('hamburger-link');
    navList.appendChild(voiceSelectorLink);


    if (window.location.href.startsWith("https://howlingsails.com/world_vision/")) {
        const logoutLink = createLinkItem("/logout", "Logout", "_self");
        navList.appendChild(logoutLink);
    }

    panel.appendChild(navList);
    document.body.appendChild(panel);
    document.body.appendChild(menu);

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerPanel = document.querySelector('.hamburger-panel');
    const hamburgerLinks = document.querySelectorAll('.hamburger-link');

    const handleClick = (event) => {
        if (!hamburgerMenu.contains(event.target) && !hamburgerPanel.contains(event.target)) {
            hamburgerPanel.style.display = 'none';
        }
    };

    hamburgerMenu.addEventListener('click', () => {
        hamburgerPanel.style.display = hamburgerPanel.style.display === 'block' ? 'none' : 'block';
    });

    hamburgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerPanel.style.display = 'none';
        });
    });

    document.addEventListener('click', handleClick);
}

function copyHTMLAsPlainText(event) {
    const sectionGroups = document.getElementsByClassName("section_group");
    let html_to_copy = "";

    for (let i = 0; i < sectionGroups.length; i++) {
        html_to_copy += sectionGroups[i].innerText + "\n";
    }


    html_to_copy = html_to_copy.replace(/\s\s+/g, " "); // Replace multiple consecutive spaces with a single space
    html_to_copy = html_to_copy.replace(/navigation/g, "");
    html_to_copy = html_to_copy.replace(/more_vert/g, "");
    html_to_copy = html_to_copy.replace(/text_to_speech/g, "");
    html_to_copy = html_to_copy.replace(/-/g, "");
    html_to_copy = html_to_copy.replace(/content_copy/g, "");
    html_to_copy = html_to_copy.replace(/cancel/g, "");
    html_to_copy = html_to_copy.replace(/html/g, "");
    html_to_copy = html_to_copy.replace(/\n\n/g, "\n");
    html_to_copy = html_to_copy.replace(/\n\n/g, "\n");
    html_to_copy = html_to_copy.replace(/\n\n/g, "\n");
    html_to_copy = html_to_copy.trim(); // Trim leading/trailing whitespace

    console.log(html_to_copy);
    navigator.clipboard.writeText(html_to_copy);
}

function extractInnerText(event) {
    const speak_me_target = event.target.closest(".speakToMeNow");
    let html_to_copy = speak_me_target.innerText;
    html_to_copy = html_to_copy.replace(/\s\s+/g, " "); // Replace multiple consecutive spaces with a single space
    html_to_copy = html_to_copy.replace(/navigation/g, "");
    html_to_copy = html_to_copy.replace(/more_vert/g, "");
    html_to_copy = html_to_copy.replace(/text_to_speech/g, "");
    html_to_copy = html_to_copy.replace(/-/g, "");
    html_to_copy = html_to_copy.replace(/content_copy/g, "");
    html_to_copy = html_to_copy.replace(/cancel/g, "");
    html_to_copy = html_to_copy.replace(/html/g, "");
    html_to_copy = html_to_copy.replace(/\n\n/g, "\n");
    html_to_copy = html_to_copy.replace(/\n\n/g, "\n");
    html_to_copy = html_to_copy.replace(/\n\n/g, "\n");
    html_to_copy = html_to_copy.trim(); // Trim leading/trailing whitespace
    return html_to_copy
}

// Add Elements for interactiveElements Called "SpeakToMe"
function createInteractiveElements() {
    const burg_summary_div = document.getElementsByClassName("burgSummary");
    const fragment = document.createDocumentFragment();

    for (let speakToMeNowIndex = 0; speakToMeNowIndex < burg_summary_div.length; speakToMeNowIndex++) {
        burg_summary_div[speakToMeNowIndex].appendChild(fragment.cloneNode(true));
    }

    const speak_me = document.getElementsByClassName("speakToMeNow");
    const fragment2 = document.createDocumentFragment(); // create a document fragment

    let commander_buttons = document.createElement("div");
    commander_buttons.className = "commander_button";

    let speakToMeButton = document.createElement("div");
    speakToMeButton.className = "speak_button cmd";
    speakToMeButton.title = "Speak Text";
    speakToMeButton.innerHTML = "<div class='buttons'><span class=\"text_to_speech material-symbols-outlined\">text_to_speech</span></div>";

    let noSpeakToMeButton = document.createElement("div");
    noSpeakToMeButton.className = "cancel_speak_button cmd";
    noSpeakToMeButton.title = "Stop Speaking";
    noSpeakToMeButton.innerHTML = "<div class='buttons'><span class=\"cancel material-symbols-outlined\">cancel</span></div>";

    let copyTextClipboardButton = document.createElement("div");
    copyTextClipboardButton.className = "copy_text_button cmd";
    copyTextClipboardButton.title = "Copy Text to Clipboard";
    copyTextClipboardButton.innerHTML = "<div class='buttons'><span class=\"content_copy material-symbols-outlined\">content_copy</span></div>";

    let copyHTMLToClipBoardButton = document.createElement("div");
    copyHTMLToClipBoardButton.className = "copy_html_button cmd";
    copyHTMLToClipBoardButton.title = "Copy HTML to clipboard";
    copyHTMLToClipBoardButton.innerHTML = "<div class='buttons'><span class=\"html material-symbols-outlined\">html</span></div>";

    commander_buttons.appendChild(speakToMeButton);
    commander_buttons.appendChild(noSpeakToMeButton);
    commander_buttons.appendChild(copyTextClipboardButton);
    commander_buttons.appendChild(copyHTMLToClipBoardButton);

    fragment2.appendChild(commander_buttons); // append the elements to the fragment

    for (let speakToMeNowIndex = 0; speakToMeNowIndex < speak_me.length; speakToMeNowIndex++) {
        speak_me[speakToMeNowIndex].appendChild(fragment2.cloneNode(true)); // append the fragment to the DOM outside of the loop
    }

    // Add event listener to parent element for event delegation
    document.querySelector('body').addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("text_to_speech")) {
            let text_to_say = repeatedlyTrimString(extractInnerText(event));
            console.log(text_to_say);
            speakToMeNow(text_to_say);
        } else if (target.classList.contains("cancel")) {
            stopSpeaking();
        } else if (target.classList.contains("content_copy")) {
            let text_to_say = repeatedlyTrimString(extractInnerText(event));
            console.log(text_to_say);
            navigator.clipboard.writeText(text_to_say);
        } else if (target.classList.contains("html")) {
            const speak_me_target = event.target.closest(".speakToMeNow");
            let html_to_copy = speak_me_target.innerHTML.split("<div title=\"Navigate")[0]
                .replace("\n\n", "\n")
                .replace("\s\s", "\s");
            console.log(html_to_copy);
            if (html_to_copy.includes("commander_button")) {
                html_to_copy = speak_me_target.innerHTML.split("<div class=\"commander_button")[0]
                    .replace("\n\n", "\n")
                    .replace("\s\s", "\s");
                console.log(html_to_copy);
            }

            const generatedHtml = "<div class=\"source\"><a href=\"" + window.location.href + "\" target=\"_blank\">source</a>" + "</div>\n" + "<div class='speakToMeNow'>\n\t\t" + html_to_copy + "\n" + "</div>\n";
            navigator.clipboard.writeText(generatedHtml);
        }
    });
}

function stopSpeaking() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
}

function speakToMeNow(text, voiceName) {
    if (!('speechSynthesis' in window)) {
        alert("You don't have speechSynthesis");
        return;
    }
    let cnt = 0;
    speechSynthesis.getVoices().forEach(function (voice) {
        console.log(cnt++, voice.name, voice.default ? voice.default : '');
    });
    console.log("Speaking?");
    stopSpeaking();

    let splitText = text.split(".");

    for (let i = 0; i < splitText.length; i++) {
        const speechRequest = new SpeechSynthesisUtterance(splitText[i]);
        let voices = window.speechSynthesis.getVoices();
        const voiceName = localStorage.getItem("voice") || voices[0].name;

        const voice = voices.find(v => v.name === voiceName) || voices[0];
        speechRequest.voice = voice;

        speechRequest.volume = 1.0;
        speechRequest.rate = 1.0;
        speechRequest.pitch = 1.0;

        if (window.speechSynthesis.speaking) {
            sleep(50);
        }
        window.speechSynthesis.speak(speechRequest);
        sleep(1000);
    }
}

function createVoiceSelector() {
    if (!('speechSynthesis' in window)) {
        alert("You don't have speechSynthesis");
        return;
    }

    const oldDialog = document.querySelector('.dialog.burgSummary');
    if (oldDialog) {
        oldDialog.remove();
    }

    const dialog = document.createElement("dialog");
    dialog.classList.add("dialog", "burgSummary", "voice_option_dialog");
    dialog.style.display = "block";

    const voiceSelect = document.createElement("select");
    const updateVoices = () => {
        const voices = speechSynthesis.getVoices();
        voices.forEach(function (voice) {
            const option = document.createElement("option");
            option.value = voice.name;
            option.textContent = voice.name;
            voiceSelect.appendChild(option);
        });
        voiceSelect.value = localStorage.getItem("voice") || voices[0].name;
    };

    // Listen for the 'voiceschanged' event to ensure voices are available
    speechSynthesis.addEventListener('voiceschanged', updateVoices);
    updateVoices();

    voiceSelect.addEventListener("change", function () {
        localStorage.setItem("voice", voiceSelect.value);
    });

    const playButton = document.createElement("button");
    playButton.textContent = "Sample Voice";
    playButton.addEventListener("click", function () {
        const voice = localStorage.getItem("voice") || voices[0].name;
        const text = "Welcome to Fantasy World Vision Generator! Let your adventure begin!";
        speakToMeNow(text, voice);
    });

    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop Speaking";
    stopButton.addEventListener("click", function () {
        stopSpeaking();
    });


    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", function () {
        localStorage.setItem("voice", voiceSelect.value);
        dialog.close();
        const oldDialog = document.querySelector('.dialog.burgSummary');
        if (oldDialog) {
            oldDialog.remove();
        }
    });

    dialog.appendChild(voiceSelect);
    dialog.appendChild(playButton);
    dialog.appendChild(stopButton);
    dialog.appendChild(saveButton);
    document.body.appendChild(dialog);
    const voiceSelectorItem = createLinkItem("#", "Voice Options");
    voiceSelectorItem.addEventListener("click", function (event) {
        event.preventDefault();
        dialog.showModal(); // Show the dialog
    });

    return voiceSelectorItem;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function repeatedlyTrimString(input) {
    const stringsToRemove = ['map', 'navigation', 'more_vert', 'text_to_speech', 'cancel', 'content_copy', 'html'];

    let trimmedString = input.trim(); // trim leading/trailing whitespace
    let foundMatch = true;

    while (foundMatch) {
        foundMatch = false;

        for (let i = 0; i < stringsToRemove.length; i++) {
            const stringToRemove = stringsToRemove[i];

            if (trimmedString.endsWith(stringToRemove)) {
                trimmedString = trimmedString.slice(0, -stringToRemove.length).trim();
                foundMatch = true;
                break;
            }
        }
    }

    return trimmedString;
}

