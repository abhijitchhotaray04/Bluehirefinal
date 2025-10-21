// --- PASTE YOUR API KEY HERE ---
const API_KEY = "AIzaSyDAZNKZTI5aHHnBuaVUo-b2DYyzARW77kw"; 

// --- 1. LANGUAGE TRANSLATIONS OBJECT ---
const translations = {
    en: {
        tagline: "Helping blue-collar professionals highlight their trade-specific skills.",
        placeholder: "Type or paste your work experience, skills, and certifications here, OR click the microphone icon to speak.",
        generateBtn: "Generate Resume",
        outputTitle: "Your Generated Resume:",
        initialText: "Enter your details and click 'Generate Resume' to begin.",
        downloadBtn: "Download Resume (Formatted HTML)",
        alertEmpty: "Please enter some information about your skills and experience.",
        alertMinLength: (min) => `Please provide more detail. Your input must be at least ${min} characters long to generate a meaningful resume. Try describing your job, skills, and tools used!`,
        alertError: "Error: Could not connect to the AI. Check your API key and connection.",
        listening: "Listening... Speak clearly now.",
        defaultPlaceholder: "Type or paste your work experience, skills, or click the mic to speak.",
        targetLang: "English",
        promptInstruction: "Respond in English. The resume must contain English words.",
        promptError: "Not enough job data provided. Please try again with details about your experience, skills, and certifications."
    },
    hi: {
        tagline: "ब्लू-कॉलर पेशेवरों को उनके व्यापार-विशिष्ट कौशल को उजागर करने में मदद करना।",
        placeholder: "अपने कार्य अनुभव, कौशल और प्रमाणपत्रों को यहां टाइप या पेस्ट करें, या बोलने के लिए माइक्रोफोन आइकन पर क्लिक करें।",
        generateBtn: "रिज्यूमे बनाएं",
        outputTitle: "आपका जनरेटेड रिज्यूमे:",
        initialText: "अपनी जानकारी दर्ज करें और शुरू करने के लिए 'रिज्यूमे बनाएं' पर क्लिक करें।",
        downloadBtn: "रिज्यूमे डाउनलोड करें (स्वरूपित HTML)",
        alertEmpty: "कृपया अपने कौशल और अनुभव के बारे में कुछ जानकारी दर्ज करें।",
        alertMinLength: (min) => `कृपया अधिक विवरण प्रदान करें। एक सार्थक रिज्यूमे बनाने के लिए आपका इनपुट कम से कम ${min} वर्ण लंबा होना चाहिए। अपने काम, कौशल और उपयोग किए गए उपकरणों का वर्णन करने का प्रयास करें!`,
        alertError: "त्रुटि: AI से कनेक्ट नहीं हो सका। अपनी API कुंजी और कनेक्शन की जांच करें।",
        listening: "सुन रहा है... अब स्पष्ट रूप से बोलें।",
        defaultPlaceholder: "अपने कार्य अनुभव, कौशल टाइप करें या पेस्ट करें, या बोलने के लिए माइक पर क्लिक करें।",
        targetLang: "Hindi",
        promptInstruction: "Respond in Hindi. The resume must contain Hindi words.",
        promptError: "पर्याप्त नौकरी डेटा प्रदान नहीं किया गया। कृपया अपने अनुभव, कौशल और प्रमाणपत्रों के विवरण के साथ पुनः प्रयास करें।"
    },
    or: {
        tagline: "ନୀଳ-କଲର ପେସାଦାରମାନଙ୍କୁ ସେମାନଙ୍କ ବାଣିଜ୍ୟ-ନିର୍ଦ୍ଦିଷ୍ଟ କୌଶଳକୁ ଉଜାଗର କରିବାରେ ସାହାଯ୍ୟ କରିବା।",
        placeholder: "ଆପଣଙ୍କ କାର୍ଯ୍ୟ ଅଭିଜ୍ଞତା, କୌଶଳ, ଏବଂ ପ୍ରମାଣପତ୍ରଗୁଡ଼ିକୁ ଏଠାରେ ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା ପେଷ୍ଟ କରନ୍ତୁ, କିମ୍ବା କହିବା ପାଇଁ ମାଇକ୍ରୋଫୋନ୍ ଆଇକନ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
        generateBtn: "ରେଜ୍ୟୁମେଜେନେରେଟ୍ କରନ୍ତୁ",
        outputTitle: "ଆପଣଙ୍କ ଜେନେରେଟ୍ ହୋଇଥିବା ରେଜ୍ୟୁମେ:",
        initialText: "ଆରମ୍ଭ କରିବା ପାଇଁ ଆପଣଙ୍କ ବିବରଣୀ ପ୍ରବେଶ କରନ୍ତୁ ଏବଂ 'ରେଜ୍ୟୁମେ ଜେନେରେଟ୍ କରନ୍ତୁ' ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
        downloadBtn: "ରେଜ୍ୟୁମେ ଡାଉନଲୋଡ୍ କରନ୍ତୁ (ଫର୍ମାଟ୍ ହୋଇଥିବା HTML)",
        alertEmpty: "ଦୟାକରି ଆପଣଙ୍କ କୌଶଳ ଏବଂ ଅଭିଜ୍ଞତା ବିଷୟରେ କିଛି ସୂଚନା ପ୍ରବେଶ କରନ୍ତୁ।",
        alertMinLength: (min) => `ଦୟାକରି ଅଧିକ ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ। ଏକ ଅର୍ଥପୂର୍ଣ୍ଣ ରେଜ୍ୟୁମେ ଜେନେରେଟ୍ କରିବା ପାଇଁ ଆପଣଙ୍କ ଇନପୁଟ୍ ଅତିକମ୍ରେ ${min} ଅକ୍ଷର ଲମ୍ବା ହେବା ଆବଶ୍ୟକ। ଆପଣଙ୍କ ଚାକିରି, କୌଶଳ, ଏବଂ ବ୍ୟବହୃତ ଉପକରଣ ବିଷୟରେ ବର୍ଣ୍ଣନା କରିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ!`,
        alertError: "ତ୍ରୁଟି: AI ସହିତ ସଂଯୋଗ ହୋଇପାରିଲା ନାହିଁ। ଆପଣଙ୍କ API କୀ ଏବଂ ସଂଯୋଗ ଯାଞ୍ଚ କରନ୍ତୁ।",
        listening: "ଶୁଣୁଛି... ବର୍ତ୍ତମାନ ସ୍ପଷ୍ଟ ଭାବରେ କୁହନ୍ତୁ।",
        defaultPlaceholder: "ଆପଣଙ୍କ କାର୍ଯ୍ୟ ଅଭିଜ୍ଞତା, କୌଶଳ ଟାଇପ୍ କରନ୍ତୁ କିମ୍ବା ପେଷ୍ଟ କରନ୍ତୁ, କିମ୍ବା କହିବା ପାଇଁ ମାଇକ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
        targetLang: "Odia",
        promptInstruction: "Respond in Odia. The resume must contain Odia words.",
        promptError: "ପର୍ଯ୍ୟାପ୍ତ ଚାକିରି ଡାଟା ପ୍ରଦାନ କରାଯାଇ ନାହିଁ। ଦୟାକରି ଆପଣଙ୍କ ଅଭିଜ୍ଞତା, କୌଶଳ, ଏବଂ ପ୍ରମାଣପତ୍ରର ବିବରଣୀ ସହିତ ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।"
    }
};

// Global State
let currentLang = 'en'; // Default language is English
const MIN_INPUT_LENGTH = 20;

// --- 2. DOM Elements ---
const userInput = document.getElementById("user-input");
const generateBtn = document.getElementById("generate-btn");
const resumeText = document.getElementById("resume-text");
const languageSelect = document.getElementById('language-select');
const voiceBtn = document.getElementById("voice-btn");
const downloadBtn = document.getElementById("download-btn");
const loadingSpinner = document.getElementById("loading-spinner");

// --- 3. UI/Language Management ---

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update global state
    currentLang = lang;

    // Update Text Content
    document.getElementById('tagline').textContent = t.tagline;
    userInput.placeholder = t.placeholder;
    generateBtn.textContent = t.generateBtn;
    document.querySelector('.resume-output h2').textContent = t.outputTitle;
    if (resumeText.textContent === translations[currentLang === 'en' ? 'en' : 'hi' || 'or'].initialText) {
        resumeText.textContent = t.initialText;
    }
    downloadBtn.textContent = t.downloadBtn;
    downloadBtn.classList.add('hidden'); // Ensure download button is hidden on lang change
}

languageSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(languageSelect.value);
});


// --- 4. Voice Input (Web Speech API) ---

// Check for the Web Speech API and initialize the button
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;
let isListening = false;

// The check that hid the button is REMOVED. The button will now always be visible.
// This allows us to debug why the API is not being detected in Chrome.

if (SpeechRecognition) {
    try {
        recognition = new SpeechRecognition();
        recognition.interimResults = true; // Get results while speaking
        recognition.continuous = false;    // Stop listening after a pause
        recognition.lang = 'en-US';        // Default recognition language

        // Set recognition language based on the selected UI language
        const setRecognitionLang = (langCode) => {
            if (langCode === 'hi') {
                recognition.lang = 'hi-IN';
            } else if (langCode === 'or') {
                // Odia is not officially supported by most browser APIs, fall back to Hindi/English
                console.warn("Odia speech recognition is not officially supported by Web Speech API. Falling back to English.");
                recognition.lang = 'en-US';
            } else {
                recognition.lang = 'en-US';
            }
        };

        // Update recognition lang when UI lang changes
        languageSelect.addEventListener('change', (e) => {
            setRecognitionLang(e.target.value);
        });
        
        // Initial setup
        setRecognitionLang(languageSelect.value);

        // Event: When speech is detected
        recognition.addEventListener('result', (e) => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            
            userInput.value = transcript;
            
            if (e.results[0].isFinal) {
                // If it's the final result, stop the visual listening state
                voiceBtn.classList.remove('listening');
                voiceBtn.textContent = '🎙️';
                userInput.placeholder = translations[currentLang].placeholder;
            }
        });

        // Event: When listening stops naturally or with stop()
        recognition.addEventListener('end', () => {
            isListening = false;
            voiceBtn.classList.remove('listening');
            voiceBtn.textContent = '🎙️';
            // Only update placeholder if it's currently showing 'Listening...'
            if (userInput.placeholder === translations[currentLang].listening) {
                userInput.placeholder = translations[currentLang].placeholder;
            }
        });

        // Event: Error handling
        recognition.addEventListener('error', (e) => {
            console.error('Speech Recognition Error:', e.error);
            isListening = false;
            voiceBtn.classList.remove('listening');
            voiceBtn.textContent = '🎙️';
            userInput.placeholder = translations[currentLang].placeholder;
        });

        // Button click handler
        voiceBtn.addEventListener('click', () => {
            if (isListening) {
                recognition.stop();
            } else {
                try {
                    recognition.start();
                    isListening = true;
                    voiceBtn.classList.add('listening');
                    voiceBtn.textContent = '🔴';
                    userInput.placeholder = translations[currentLang].listening;
                    userInput.focus();
                } catch (e) {
                    console.error("Error starting recognition. Microphone access may be blocked.", e);
                    // Provide visual feedback for a failed start
                    alert("Could not start voice recognition. Please check if your browser has microphone access permissions.");
                }
            }
        });
        
    } catch (e) {
        console.error("Error initializing Web Speech API:", e);
        // The button will remain visible, but clicking it will now throw an error
    }
} else {
    // We keep the button visible for debugging, but log a warning
    console.warn("Web Speech API not supported (or not found) in this browser. Voice input will not work.");
    // The button remains visible but will not have the event listener attached from the try block
    voiceBtn.addEventListener('click', () => {
        alert("Voice input is not supported by your current browser configuration.");
    });
}


// --- 5. Gemini API Handler ---

async function generateResume(prompt) {
    // Show spinner and disable button
    loadingSpinner.classList.remove('hidden');
    generateBtn.disabled = true;
    downloadBtn.classList.add('hidden');

    const apiKey = API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const systemInstruction = `You are a specialized AI assistant that creates powerful, professional resumes for blue-collar workers (tradespeople, laborers, machine operators, drivers, hospitality staff, etc.). Your goal is to take unstructured input about a person's work history, skills, and certifications, and format it into a high-quality resume that is clean, clear, and highlights achievements.

The user will provide raw text in ${translations[currentLang].targetLang}. The final output must be structured as follows, with no extra conversational text, markdown headers, or bullet points outside of the sections shown.

1.  **Contact Line:** A single line containing a placeholder Name, Phone Number, and Email Address, separated by pipe (|).
2.  **Summary:** A concise (3-4 sentence) professional summary highlighting their years of experience and top skills.
3.  **Skills:** A section listing all relevant hard skills (tools, machinery, techniques, safety certifications). List these as bullet points.
4.  **Experience:** A section formatted as bullet points, summarizing job roles, duties, and quantified achievements.
5.  **Certifications/Education:** A section for relevant training or education.

The final response must be in a single JSON object that strictly adheres to the provided schema. The language for the content of the resume must be ${translations[currentLang].targetLang}.`;

    const userQuery = `${translations[currentLang].promptInstruction} Transform this raw data into a professional resume suitable for a blue-collar job application. Raw Data: "${prompt}"`;
    
    // Define the structure for the resume output
    const resumeSchema = {
        type: "OBJECT",
        properties: {
            "contactLine": { "type": "STRING", "description": "Name | Phone | Email placeholders" },
            "summary": { "type": "STRING", "description": "3-4 sentence professional summary." },
            "skills": {
                "type": "ARRAY",
                "description": "List of hard skills, tools, and certifications.",
                "items": { "type": "STRING" }
            },
            "experience": {
                "type": "ARRAY",
                "description": "List of job duties and accomplishments, formatted for the resume.",
                "items": { "type": "STRING" }
            },
            "education": {
                "type": "ARRAY",
                "description": "List of certifications or education details.",
                "items": { "type": "STRING" }
            }
        },
        required: ["contactLine", "summary", "skills", "experience", "education"]
    };

    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: resumeSchema,
            temperature: 0.2
        },
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Extract the JSON string from the response
        const jsonString = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!jsonString) {
            throw new Error(translations[currentLang].promptError);
        }

        const resumeData = JSON.parse(jsonString);
        
        // Process and display the resume
        displayResume(resumeData);
        downloadBtn.classList.remove('hidden');

    } catch (error) {
        console.error("Gemini API Error:", error);
        resumeText.textContent = translations[currentLang].alertError;
        // Also show a simplified version of the API error for better debugging
        if (error.message.includes("400")) {
             resumeText.textContent += " (Check API Key or Input Length)";
        }
    } finally {
        // Hide spinner and re-enable button
        loadingSpinner.classList.add('hidden');
        generateBtn.disabled = false;
    }
}

function displayResume(data) {
    const formatSection = (title, items) => {
        if (!items || items.length === 0) return '';
        let listItems = items.map(item => `<li>${item}</li>`).join('');
        // Add a line break for better visual separation in the <pre> tag
        return `\n\n=== ${title.toUpperCase()} ===\n\n<ul>${listItems}</ul>`;
    };

    // Construct the final text content
    const t = translations[currentLang];
    const contactLine = data.contactLine || "Name | Phone Number | Email Address";
    let formattedResume = `${contactLine}\n\n`;
    
    formattedResume += `=== ${t.targetLang.toUpperCase()} PROFESSIONAL SUMMARY ===\n\n${data.summary}\n`;
    
    formattedResume += formatSection("SKILLS", data.skills);
    formattedResume += formatSection("WORK EXPERIENCE", data.experience);
    formattedResume += formatSection("EDUCATION & CERTIFICATIONS", data.education);

    // Replace the inner HTML with the formatted text (using <pre> for structure)
    // We use innerHTML here because the list items (<ul>/<li>) make the output much cleaner
    resumeText.innerHTML = formattedResume;
}


// --- 6. Main Logic & Event Listeners ---

generateBtn.addEventListener('click', () => {
    const input = userInput.value.trim();
    if (input.length === 0) {
        alert(translations[currentLang].alertEmpty);
        return;
    }
    if (input.length < MIN_INPUT_LENGTH) {
         alert(translations[currentLang].alertMinLength(MIN_INPUT_LENGTH));
         return;
    }
    
    generateResume(input);
});


// --- 7. Download Logic ---

downloadBtn.addEventListener('click', () => {
    // Get the current formatted content from the resumeText element
    const resumeContent = resumeText.innerHTML;

    // Separate Contact Line from the main body content
    const contactLineMatch = resumeContent.match(/(.*?)<br>|<br>\n\n/);
    const contactLine = contactLineMatch ? contactLineMatch[1].trim() : "Name | Phone Number | Email Address";
    const formattedBody = resumeContent.replace(contactLineMatch ? contactLineMatch[0] : "", "").trim();


    // Simple HTML template for download (using inline CSS for style retention)
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="${currentLang}">
        <head>
            <meta charset="UTF-8">
            <title>Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.4;
                    max-width: 800px;
                    margin: 40px auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                .contact-line {
                    text-align: center;
                    font-size: 14pt;
                    font-weight: bold;
                    margin-bottom: 20px;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #000;
                }
                h1 {
                    font-size: 14pt;
                    color: #333;
                    margin-top: 15px;
                    margin-bottom: 5px;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #000;
                }
                h2 {
                    font-size: 12pt;
                    color: #333;
                    margin-top: 15px;
                    margin-bottom: 5px;
                    padding-bottom: 3px;
                    border-bottom: 1px solid #000;
                    text-transform: uppercase;
                }
                p, li {
                    font-size: 10pt;
                    margin-bottom: 5px;
                }
                ul {
                    list-style-type: disc;
                    margin: 5px 0 10px 20px;
                    padding: 0;
                }
                * { color: #000 !important; }
            </style>
        </head>
        <body>
            <div class="resume-download-content">
                <div class="contact-line">${contactLine}</div>
                ${formattedBody}
            </div>
        </body>
        </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    // Download file name is now dependent on the language selector (default: English)
    a.download = `Resume_Template_${currentLang.toUpperCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    URL.revokeObjectURL(url);
});
