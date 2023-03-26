const acc = document.getElementsByClassName("accordion");
let activePanelIndex;
const sub_acc = document.getElementsByClassName("sub-accordion");
let subActivePanelIndex;


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
    top_button.title = "Command Menu Panel"
    top_button.className = "command_menu";

}

function createHamburgerMenu() {
    // Get all elements with classname "burgSummary"
    const summaryElements = document.getElementsByClassName("section_group");
    // Create the hamburger menu button
    const menu = document.createElement("div");
    menu.classList.add("hamburger-menu");
    menu.innerHTML = '<span class="material-symbols-outlined">menu</span>';

    // Add a click event listener to toggle the visibility of the floating panel
    menu.addEventListener("click", function () {
        const panel = menu.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });

    // Create the floating panel
    const panel = document.createElement("div");
    panel.classList.add("hamburger-panel");
    panel.style.display = "none";

    // Create the navigation list
    const navList = document.createElement("ul");

    // Add Top of Page
            // Create a list item for each "burgSummary" element with an ID
        const rootItem = document.createElement("li");

        // Create a link for each list item
        const link = document.createElement("a");
        link.href = `#root_div`;
        link.text = 'Top of Page';
        link.className = 'hamburger-link '

        // Append the link to the list item
        rootItem.appendChild(link);

        // Append the list item to the navigation list
        navList.appendChild(rootItem);

    // Loop through all "burgSummary" elements
    for (const summaryElement of summaryElements) {
        // Check if the element has an ID
        if (!summaryElement.id) {
            continue;
        }

        // Create a list item for each "burgSummary" element with an ID
        const listItem = document.createElement("li");

        // Create a link for each list item
        const link = document.createElement("a");
        link.href = `#${summaryElement.id}`;
        link.text = summaryElement.id;
        link.className = 'hamburger-link '

        // Append the link to the list item
        listItem.appendChild(link);

        // Append the list item to the navigation list
        navList.appendChild(listItem);
    }

    // Append the navigation list to the floating panel
    panel.appendChild(navList);

    // Append the floating panel to the body of the page
    document.body.appendChild(panel);

    // Append the hamburger menu to the body of the page
    document.body.appendChild(menu);
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerPanel = document.querySelector('.hamburger-panel');
    const hamburgerLinks = document.querySelectorAll('.hamburger-link');

    hamburgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerPanel.style.display = 'none';
        });
    });
    hamburgerMenu.addEventListener('click', function () {
        hamburgerPanel.style.display = hamburgerPanel.style.display === 'block' ? 'none' : 'block';
    });
}


function extractInnerText(event) {
    const speak_me_target = event.target.closest(".speakToMeNow")
    let text_to_say = speak_me_target.innerText;
    return text_to_say
        .replace("navigation", "")
        .replace("more_vert", "")
        .replace("text_to_speech", "")
        .replace("-", "")
        .replace("content_copy", "")
        .replace("cancel", "")
        .replace("html", "")
}

// Add Elements for interactiveElements Called "SpeakToMe"
function createInteractiveElements() {
    const burg_summary_div = document.getElementsByClassName("burgSummary");
    const fragment = document.createDocumentFragment();
    
    for (let speakToMeNowIndex = 0; speakToMeNowIndex < burg_summary_div.length; speakToMeNowIndex++) {
      let top_button = document.createElement("div");
      top_button.title = "Navigate to Top of Page";
      top_button.className = "";
      top_button.innerHTML = "<span class=\"material-symbols-outlined navigation top_button cmd\">navigation</span>";
      top_button.addEventListener('click', jumpTop);
      fragment.appendChild(top_button);
    
      let menu_button = document.createElement("div");
      menu_button.title = "Section Menu";
      menu_button.className = "";
      menu_button.innerHTML = "<span class=\"material-symbols-outlined more_vert menu_button cmd\">more_vert</span>";
      menu_button.addEventListener('click', pop_menu);
      fragment.appendChild(menu_button);
    }
    
    for (let speakToMeNowIndex = 0; speakToMeNowIndex < burg_summary_div.length; speakToMeNowIndex++) {
      burg_summary_div[speakToMeNowIndex].appendChild(fragment.cloneNode(true));
    }

    const speak_me = document.getElementsByClassName("speakToMeNow");
    const fragment2 = document.createDocumentFragment(); // create a document fragment
    
    for (let speakToMeNowIndex = 0; speakToMeNowIndex < speak_me.length; speakToMeNowIndex++) {
      let commander_buttons = document.createElement("div");
      commander_buttons.className = "commander_button";
    
      let speakToMeButton = document.createElement("div");
      speakToMeButton.className = "speak_button cmd";
      speakToMeButton.title = "Speak Text"
      speakToMeButton.innerHTML = "<span class=\"material-symbols-outlined text_to_speach\">text_to_speech</span>"
    
      let noSpeakToMeButton = document.createElement("div");
      noSpeakToMeButton.className = "cancel_speak_button cmd";
      noSpeakToMeButton.title = "Stop Speaking"
      noSpeakToMeButton.innerHTML = "<span class=\"material-symbols-outlined cancel\">cancel</span>"
    
      let copyTextClipboardButton = document.createElement("div");
      copyTextClipboardButton.className = "copy_text_button cmd";
      copyTextClipboardButton.title = "Copy Text to Clipboard"
      copyTextClipboardButton.innerHTML = "<span class=\"material-symbols-outlined content_copy\">content_copy</span>"
    
      let copyHTMLToClipBoardButton = document.createElement("div");
      copyHTMLToClipBoardButton.className = "copy_html_button cmd";
      copyHTMLToClipBoardButton.title = "Copy HTML to clipboard"
      copyHTMLToClipBoardButton.innerHTML = "<span class=\"material-symbols-outlined html\">html</span>"
    
      commander_buttons.appendChild(speakToMeButton);
      commander_buttons.appendChild(noSpeakToMeButton);
      commander_buttons.appendChild(copyTextClipboardButton);
      commander_buttons.appendChild(copyHTMLToClipBoardButton);
    
      fragment2.appendChild(commander_buttons); // append the elements to the fragment
    }
    
    for (let speakToMeNowIndex = 0; speakToMeNowIndex < speak_me.length; speakToMeNowIndex++) {
      speak_me[speakToMeNowIndex].appendChild(fragment2.cloneNode(true)); // append the fragment to the DOM outside of the loop
    }
    
    

    // Add event listeners to buttons
    document.addEventListener("click", function (event) {
        const target = event.target
        console.log(target)
        //debugger;
        if (target.classList.contains("navigation")) {
            return jumpTop();
        } else if (target.classList.contains("text_to_speach")) {
            let text_to_say = repeatedlyTrimString(extractInnerText(event));
            console.log(text_to_say);
            speakToMeNow(text_to_say)
        } else if (target.classList.contains("cancel")) {
            stopSpeaking();
        } else if (target.classList.contains("content_copy")) {
            let text_to_say = repeatedlyTrimString(extractInnerText(event));
            console.log(text_to_say);
            navigator.clipboard.writeText(text_to_say);
        } else if (target.classList.contains("more_vert")) {
            pop_menu(target);
        } else if (target.classList.contains("html")) {
            debugger;
            const speak_me_target = event.target.closest(".speakToMeNow")
            let html_to_copy = speak_me_target.innerHTML.split("<div title=\"Navigate")[0]
                .replace("\n\n", "\n")
                .replace("\s\s", "\s")
            console.log(html_to_copy)
            if (html_to_copy.includes("commander_button")) {
                html_to_copy = speak_me_target.innerHTML.split("<div class=\"commander_button")[0]
                    .replace("\n\n", "\n")
                    .replace("\s\s", "\s");
                console.log(html_to_copy);

            }

            const generatedHtml =
                "<div class=\"source\"><a href=\"" + window.location.href + "\" target=\"_blank\">source</a>" +
                "</div>\n" +
                "<div class='speakToMeNow'>\n\t\t" + html_to_copy + "\n" +
                "</div>\n";
            navigator.clipboard.writeText(generatedHtml);
        }

    });
}

function repeatedlyTrimString(input) {
    const stringsToRemove = ['map','navigation', 'more_vert', 'text_to_speech', 'cancel', 'content_copy', 'html'];
    
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
      


/*
    function addCopyLink() {
    const linkAnchors = document.getElementsByTagName("a")
    debugger;
    for (let linkAnchorIndex = 0; linkAnchorIndex < linkAnchors.length; linkAnchorIndex++) {
                let linkAnchorCopyButton = document.createElement("div");
        linkAnchorCopyButton.className = "anchor_button cmd";
        linkAnchorCopyButton.title = "Copy Link"
        linkAnchorCopyButton.innerHTML = "<span class=\"material-symbols-outlined\">code</span>"
        linkAnchors[linkAnchorIndex].appendChild(linkAnchorCopyButton)
    }

}*/


function stopSpeaking() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
}

function speakToMeNow(text) {
    if (!('speechSynthesis' in window)) {
        alert("You don't have speechSynthesis");
        return;
    }
    debugger;
    let cnt = 0;
    speechSynthesis.getVoices().forEach(function (voice) {
        console.log(cnt++, voice.name, voice.default ? voice.default : '');
    });
    console.log("Speaking?")
    stopSpeaking();

   let splitText = text.split(".") // Hmmm

    for (let i = 0; i < splitText.length; i++) {
        const speechRequest = new SpeechSynthesisUtterance(text);
        let voices = window.speechSynthesis.getVoices();
        //speechRequest.voice = voices[0]; //Nora Siri

        speechRequest.volume = 1.0; // From 0 to 1
        speechRequest.rate = 1.0; // From 0.1 to 10
        speechRequest.pitch = 1.0; // From 0 to 2
        speechRequest.text = splitText[i]
        if (window.speechSynthesis.speaking) {
            sleep(50)
        }
        window.speechSynthesis.speak(speechRequest);
        sleep(1000);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



