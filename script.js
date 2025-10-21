// --- PASTE YOUR API KEY HERE ---
// REMINDER: Use your own Google Gemini API Key here for full functionality.
const API_KEY = "AIzaSyDAZNKZTI5aHHnBuaVUo-b2DYyzARW77kw"; 

// --- 1. LANGUAGE TRANSLATIONS OBJECT ---
const translations = {
    en: {
        tagline: "Answer simple questions one-by-one to build your professional resume.",
        generateBtn: "Generate Resume",
        outputTitle: "Your Generated Resume:",
        initialText: "Fill in the steps above and click 'Generate Resume' to see your result.",
        downloadBtn: "Download Resume (Formatted HTML)",
        alertEmpty: (field) => `Please enter your ${field} before proceeding.`,
        alertMinLength: (min) => `Please provide more detail. Your description must be at least ${min} characters long to generate a meaningful resume.`,
        alertError: "Error: Could not connect to the AI. Check your API key and connection.",
        listening: "Listening... Speak clearly now.",
        promptInstruction: "Respond in English. The resume must contain English words.",
        promptError: "Not enough job data provided. Please try again with details about your experience, skills, and certifications.",
        
        // UPDATED LABELS
        nameLabel: "1. What is your full name?",
        jobLabel: "2. What is your most recent job title?",
        experienceLabel: "3. Describe your daily work duties, skills, and main tools used.",
        educationLabel: "4. What is your highest level of formal education?", 
        certsLabel: "5. List any professional certifications, licenses, or specific training.", 
        achievementsLabel: "6. List 2-3 of your key achievements.", 
        
        // UPDATED BUTTONS
        nextJob: "Next: Job Title",
        nextExperience: "Next: Experience",
        nextEducation: "Next: Education", 
        nextCerts: "Next: Certifications", 
        nextAchievements: "Next: Achievements", 
        back: "Back",
    },
    hi: {
        tagline: "अपने पेशेवर बायोडाटा (Resume) बनाने के लिए एक-एक करके सरल सवालों का जवाब दें।",
        generateBtn: "बायोडाटा बनाएँ",
        outputTitle: "आपका बायोडाटा:",
        initialText: "ऊपर दिए गए चरणों को भरें और परिणाम देखने के लिए 'बायोडाटा बनाएँ' पर क्लिक करें।",
        downloadBtn: "बायोडाटा डाउनलोड करें (HTML)",
        alertEmpty: (field) => `कृपया आगे बढ़ने से पहले अपना ${field} दर्ज करें।`,
        alertMinLength: (min) => `कृपया और विवरण दें। एक सार्थक बायोडाटा बनाने के लिए आपका विवरण कम से कम ${min} वर्ण लंबा होना चाहिए।`,
        alertError: "त्रुटि: AI से कनेक्ट नहीं हो सका। अपनी API कुंजी और कनेक्शन की जाँच करें।",
        listening: "सुन रहा हूँ... अब स्पष्ट बोलें।",
        promptInstruction: "हिंदी में जवाब दें। बायोडाटा में हिंदी शब्द होने चाहिए।",
        promptError: "पर्याप्त नौकरी डेटा प्रदान नहीं किया गया। कृपया अपने अनुभव, कौशल और प्रमाणन के विवरण के साथ पुनः प्रयास करें।",

        // UPDATED LABELS
        nameLabel: "1. आपका पूरा नाम क्या है?",
        jobLabel: "2. आपका सबसे हालिया पद (Job Title) क्या है?",
        experienceLabel: "3. अपने दैनिक कार्य कर्तव्यों, कौशल और मुख्य उपकरणों का वर्णन करें।",
        educationLabel: "4. आपकी औपचारिक शिक्षा (Formal Education) का उच्चतम स्तर क्या है?", 
        certsLabel: "5. अपने व्यावसायिक प्रमाणन (Certifications), लाइसेंस, या विशिष्ट प्रशिक्षण को सूचीबद्ध करें।", 
        achievementsLabel: "6. अपनी 2-3 प्रमुख उपलब्धियों को सूचीबद्ध करें। ", 

        // UPDATED BUTTONS
        nextJob: "अगला: पद (Job Title)",
        nextExperience: "अगला: कार्य विवरण",
        nextEducation: "अगला: शिक्षा", 
        nextCerts: "अगला: प्रमाणन", 
        nextAchievements: "अगला: उपलब्धियाँ", 
        back: "वापस जाएँ",
    },
    or: {
        tagline: "ଆପଣଙ୍କର ବୃତ୍ତିଗତ ବାୟୋଡାଟା (Resume) ତିଆରି କରିବା ପାଇଁ ଗୋଟିଏ ପରେ ଗୋଟିଏ ସରଳ ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ।",
        generateBtn: "ବାୟୋଡାଟା ତିଆରି କରନ୍ତୁ",
        outputTitle: "ଆପଣଙ୍କର ବାୟୋଡାଟା:",
        initialText: "ଉପରୋକ୍ତ ପଦକ୍ଷେପଗୁଡ଼ିକୁ ପୂରଣ କରନ୍ତୁ ଏବଂ ଫଳାଫଳ ଦେଖିବା ପାଇଁ 'ବାୟୋଡାଟା ତିଆରି କରନ୍ତୁ' ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
        downloadBtn: "ବାୟୋଡାଟା ଡାଉନଲୋଡ୍ କରନ୍ତୁ (HTML)",
        alertEmpty: (field) => `ଦୟାକରି ଆଗକୁ ବଢ଼ିବା ପୂର୍ବରୁ ଆପଣଙ୍କର ${field} ପ୍ରବେଶ କରନ୍ତୁ।`,
        alertMinLength: (min) => `ଦୟାକରି ଅଧିକ ବିବରଣୀ ପ୍ରଦାନ କରନ୍ତୁ। ଏକ ସାର୍ଥକ ବାୟୋଡାଟା ତିଆରି କରିବା ପାଇଁ ଆପଣଙ୍କର ବର୍ଣ୍ଣନା ଅତି କମରେ ${min} ଅକ୍ଷର ଲମ୍ବା ହେବା ଉଚିତ୍।`,
        alertError: "ତ୍ରୁଟି: AI ସହିତ ସଂଯୋଗ ହୋଇପାରିଲା ନାହିଁ। ଆପଣଙ୍କର API କି ଏବଂ ସଂଯୋଗ ଯାଞ୍ଚ କରନ୍ତୁ।",
        listening: "ଶୁଣୁଛି... ବର୍ତ୍ତମାନ ସ୍ପଷ୍ଟ ଭାବରେ କୁହନ୍ତୁ।",
        promptInstruction: "ଓଡିଆରେ ଉତ୍ତର ଦିଅନ୍ତୁ। ବାୟୋଡାଟା ଓଡିଆ ଶବ୍ଦ ଧାରଣ କରିବା ଉଚିତ୍।",
        promptError: "ଯଥେଷ୍ଟ ଚାକିରି ତଥ୍ୟ ପ୍ରଦାନ କରାଯାଇ ନାହିଁ। ଦୟାକରି ଆପଣଙ୍କର ଅଭିଜ୍ଞତା, କୌଶଳ ଏବଂ ପ୍ରମାଣପତ୍ର ବିଷୟରେ ବିବରଣୀ ସହିତ ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ।",
        
        // UPDATED LABELS
        nameLabel: "1. ଆପଣଙ୍କର ପୂରା ନାମ କଣ?",
        jobLabel: "2. ଆପଣଙ୍କର ସବୁଠାରୁ ନିକଟତମ ଚାକିରି ଶୀର୍ଷକ କ'ଣ?",
        experienceLabel: "3. ଆପଣଙ୍କର ଦୈନିକ କାର୍ଯ୍ୟ କର୍ତ୍ତବ୍ୟ, କୌଶଳ ଏବଂ ମୁଖ୍ୟ ଉପକରଣ ବର୍ଣ୍ଣନା କରନ୍ତୁ।",
        educationLabel: "4. ଆପଣଙ୍କର ଔପଚାରିକ ଶିକ୍ଷା (Formal Education) ର ସର୍ବୋଚ୍ଚ ସ୍ତର କ'ଣ?", 
        certsLabel: "5. କୌଣସି ବୃତ୍ତିଗତ ପ୍ରମାଣପତ୍ର, ଲାଇସେନ୍ସ, କିମ୍ବା ନିର୍ଦ୍ଦିଷ୍ଟ ତାଲିମ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ।", 
        achievementsLabel: "6. ଆପଣଙ୍କର 2-3 ମୁଖ୍ୟ ସଫଳତାଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରନ୍ତୁ।", 

        // UPDATED BUTTONS
        nextJob: "ପରବର୍ତ୍ତୀ: ଚାକିରି ଶୀର୍ଷକ",
        nextExperience: "ପରବର୍ତ୍ତୀ: କାର୍ଯ୍ୟ ବିବରଣୀ",
        nextEducation: "ପରବର୍ତ୍ତୀ: ଶିକ୍ଷା", 
        nextCerts: "ପରବର୍ତ୍ତୀ: ପ୍ରମାଣପତ୍ର", 
        nextAchievements: "ପରବର୍ତ୍ତୀ: ସଫଳତା", 
        back: "ପଛକୁ ଯାଆନ୍ତୁ",
    }
};

let currentLang = 'en'; // Default language

// --- 2. CACHING DOM ELEMENTS ---
const elements = {
    tagline: document.getElementById('tagline'),
    langSelect: document.getElementById('language-select'),
    userInputName: document.getElementById('input-name'),
    userInputJob: document.getElementById('input-job'),
    userInputExperience: document.getElementById('input-experience'),
    userInputEducation: document.getElementById('input-education'), // NEW CACHE
    userInputCerts: document.getElementById('input-certs'), 
    userInputAchievements: document.getElementById('input-achievements'), 
    voiceBtn: document.getElementById('voice-btn'),
    generateBtn: document.getElementById('generate-btn'),
    loadingSpinner: document.getElementById('loading-spinner'),
    resumeText: document.getElementById('resume-text'),
    downloadBtn: document.getElementById('download-btn'),
    wizardForm: document.getElementById('wizard-form'),
    steps: {
        '1': document.getElementById('step-1'),
        '2': document.getElementById('step-2'),
        '3': document.getElementById('step-3'),
        '4': document.getElementById('step-4'), 
        '5': document.getElementById('step-5'), 
        '6': document.getElementById('step-6'), 
    }
};

// --- 3. WIZARD STATE MANAGEMENT ---
let currentStep = 1;

/**
 * Updates the UI based on the current language selection.
 */
function updateLanguageUI() {
    const lang = translations[currentLang];
    
    // Update main text elements
    elements.tagline.textContent = lang.tagline;
    
    // Update step labels
    document.querySelector('#step-1 .question-label').textContent = lang.nameLabel;
    document.querySelector('#step-2 .question-label').textContent = lang.jobLabel;
    document.querySelector('#step-3 .question-label').textContent = lang.experienceLabel;
    document.querySelector('#step-4 .question-label').textContent = lang.educationLabel; // UPDATED
    document.querySelector('#step-5 .question-label').textContent = lang.certsLabel; // UPDATED
    document.querySelector('#step-6 .question-label').textContent = lang.achievementsLabel; // UPDATED

    // Update buttons
    document.querySelector('#step-1 .step-btn').textContent = lang.nextJob;
    document.querySelector('#step-2 .step-btn').textContent = lang.nextExperience;
    document.querySelector('#step-3 .step-btn').textContent = lang.nextEducation; 
    document.querySelector('#step-4 .step-btn').textContent = lang.nextCerts; 
    document.querySelector('#step-5 .step-btn').textContent = lang.nextAchievements; 

    document.querySelector('#step-2 .step-back-btn').textContent = lang.back;
    document.querySelector('#step-3 .step-back-btn').textContent = lang.back;
    document.querySelector('#step-4 .step-back-btn').textContent = lang.back;
    document.querySelector('#step-5 .step-back-btn').textContent = lang.back;
    document.querySelector('#step-6 .step-back-btn').textContent = lang.back;

    elements.generateBtn.textContent = lang.generateBtn;
    elements.downloadBtn.textContent = lang.downloadBtn;
    elements.resumeText.textContent = lang.initialText;
    
    // Update placeholders
    elements.userInputName.placeholder = 'e.g., Ramesh Kumar';
    elements.userInputJob.placeholder = 'e.g., Electrician, HVAC Technician, Security Guard';
    elements.userInputExperience.placeholder = "Type or paste details (e.g., 'Repaired commercial HVAC units, used a multimeter and thermal camera, followed safety protocols').";
    elements.userInputEducation.placeholder = "e.g., Class 10th Pass, Diploma in Mechanical Engineering from XYZ College, B.A. History from ABC University.";
    elements.userInputCerts.placeholder = "e.g., Commercial Driver's License (CDL), OSHA 10-Hour Safety Training, ITI Electrician Certificate, Forklift Operator License."; 
    elements.userInputAchievements.placeholder = "e.g., Reduced equipment downtime by 20% in 6 months; Managed a team of 4 people; Safely completed 50+ welding jobs without incident."; 
}

/**
 * Handles navigation between steps.
 * @param {number} step - The target step number.
 */
function goToStep(step) {
    // Basic validation before moving forward
    if (step > currentStep) {
        // Find the input element for the current step
        const currentInput = document.querySelector(`#step-${currentStep} input, #step-${currentStep} textarea`);
        let fieldName;

        switch(currentStep) {
            case 1: fieldName = 'name'; break;
            case 2: fieldName = 'job title'; break;
            case 3: fieldName = 'experience details'; break;
            case 4: fieldName = 'education'; break; // NEW
            case 5: fieldName = 'certifications/licenses'; break; // NEW
            case 6: fieldName = 'achievements'; break; 
            default: fieldName = 'input';
        }

        if (currentInput && currentInput.value.trim() === '') {
            const lang = translations[currentLang];
            showModal(lang.alertEmpty(fieldName)); 
            return;
        }
    }

    // Hide all steps
    Object.values(elements.steps).forEach(el => el.classList.add('hidden'));

    // Show the target step
    const targetStepEl = elements.steps[step.toString()];
    if (targetStepEl) {
        targetStepEl.classList.remove('hidden');
        currentStep = step;
    }
}

/**
 * Initializes step navigation listeners.
 */
function initWizard() {
    // Attach listeners to 'Next' buttons
    elements.wizardForm.querySelectorAll('.step-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const nextStep = parseInt(e.target.dataset.next, 10);
            goToStep(nextStep);
        });
    });

    // Attach listeners to 'Back' buttons
    elements.wizardForm.querySelectorAll('.step-back-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const prevStep = parseInt(e.target.dataset.prev, 10);
            goToStep(prevStep);
        });
    });

    // Initialize to the first step
    goToStep(1);
}

// --- 4. CORE APPLICATION LOGIC (Adapted for 6 Steps) ---

elements.langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguageUI();
});

elements.generateBtn.addEventListener('click', generateResume);

/**
 * Main function to initiate resume generation via Gemini API.
 */
async function generateResume() {
    const lang = translations[currentLang];
    
    // Final achievements validation for last step
    const achievements = elements.userInputAchievements.value.trim();
    if (achievements.length < 20) {
        // Enforce a minimum length for achievements/numbers
        showModal(lang.alertMinLength(20));
        return;
    }

    const name = elements.userInputName.value.trim();
    const jobTitle = elements.userInputJob.value.trim();
    const experience = elements.userInputExperience.value.trim();
    const education = elements.userInputEducation.value.trim(); // NEW DATA POINT
    const certs = elements.userInputCerts.value.trim();
    
    // UPDATED PROMPT: Ensuring all 6 steps/4 main sections are explicitly included for the AI
    const userQuery = `
        User Name: ${name}
        Target Job Title: ${jobTitle}
        Daily Duties and Skills: ${experience}
        Formal Education Details: ${education}
        Certifications and Licenses: ${certs}
        Key Achievements (Use numbers/quantifiable data): ${achievements}
        
        Task: Based on ALL the provided details, generate a clean, professional, and highly detailed resume. 
        1. **Summary:** Write a 3-4 sentence professional summary.
        2. **Experience:** Use the 'Daily Duties' and 'Key Achievements' to write strong, active, bullet points. Prioritize achievements with numbers.
        3. **Skills:** Include a 'Technical Skills' section based on the 'Daily Duties' and 'Certifications'.
        4. **Education:** Create a dedicated 'Education' section using the 'Formal Education Details' data.
        5. **Certifications:** Create a dedicated 'Certifications' section using the 'Certifications and Licenses' data.
        
        Format the output using HTML tags for structure (e.g., <div> for sections, <ul>/<li> for bullet points) but ONLY provide the content within the <body> tags, without the <html> or <head> tags.
        Ensure to include a clear contact line with the Name and Job Title at the top.
    `;

    // Show loading state
    elements.generateBtn.disabled = true;
    elements.loadingSpinner.classList.remove('hidden');
    elements.resumeText.textContent = 'Generating resume...';
    elements.downloadBtn.classList.add('hidden');

    try {
        const responseText = await callGeminiAPI(userQuery, lang.promptInstruction);
        
        if (responseText.toLowerCase().includes('not enough job data')) {
            elements.resumeText.textContent = lang.promptError;
        } else {
            // Use innerHTML to render the HTML structure for preview
            elements.resumeText.innerHTML = responseText;
            elements.downloadBtn.classList.remove('hidden');
        }
    } catch (error) {
        console.error("Gemini API Error:", error);
        elements.resumeText.textContent = lang.alertError;
    } finally {
        elements.generateBtn.disabled = false;
        elements.loadingSpinner.classList.add('hidden');
    }
}

/**
 * Calls the Gemini API with exponential backoff.
 */
async function callGeminiAPI(userQuery, systemInstruction, retries = 0) {
    if (!API_KEY) {
        throw new Error("API Key is missing. Please paste your key in script.js.");
    }
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${API_KEY}`;
    
    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        tools: [{ "google_search": {} }],
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.status === 429 && retries < 3) {
            const delay = Math.pow(2, retries) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
            return callGeminiAPI(userQuery, systemInstruction, retries + 1);
        }

        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`API call failed: ${response.status} ${response.statusText}. Details: ${JSON.stringify(errorBody)}`);
        }

        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!text) {
             throw new Error("API response was empty or malformed.");
        }
        return text;

    } catch (error) {
        throw error;
    }
}

// --- 5. SPEECH RECOGNITION (NO CHANGES) ---

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;
let finalTranscript = '';

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
        isListening = true;
        elements.voiceBtn.classList.add('listening');
        elements.voiceBtn.textContent = '🔴';
        showModal(translations[currentLang].listening);
    };

    recognition.onresult = (event) => {
        finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            }
        }
    };

    recognition.onend = () => {
        isListening = false;
        elements.voiceBtn.classList.remove('listening');
        elements.voiceBtn.textContent = '🎙️';
        hideModal(); 
        
        // This only applies to the experience input box (Step 3)
        if (finalTranscript && currentStep === 3) { 
            elements.userInputExperience.value += (elements.userInputExperience.value ? ' ' : '') + finalTranscript;
            finalTranscript = '';
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        showModal(`Speech Error: ${event.error}`, true);
        isListening = false;
        elements.voiceBtn.classList.remove('listening');
        elements.voiceBtn.textContent = '🎙️';
    };

    elements.voiceBtn.addEventListener('click', () => {
        // Only allow voice input on Step 3 (Detailed Experience)
        if (currentStep !== 3) {
            showModal("Voice input is only available for Step 3: Detailed Experience.");
            return;
        }

        if (!isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }
    });
} else {
    elements.voiceBtn.disabled = true;
    elements.voiceBtn.title = "Speech Recognition not supported in this browser.";
}

// --- 6. DOWNLOAD LOGIC (UPDATED) ---

elements.downloadBtn.addEventListener('click', downloadResume);

function downloadResume() {
    // 1. Get the complete HTML content generated by the AI
    const rawContent = elements.resumeText.innerHTML;
    
    // 2. We don't need to parse or split the content anymore.
    // We just wrap the raw AI-generated HTML (which is the resume content) in a full HTML document.
    
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="${currentLang}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume - ${elements.userInputName.value || 'Untitled'}</title>
            <style>
                /* CSS for Print and Download */
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    color: #000;
                }
                .resume-download-content {
                    max-width: 8.5in;
                    margin: 0.5in auto;
                    padding: 0;
                }
                .contact-line {
                    text-align: center;
                    font-size: 14pt;
                    font-weight: bold;
                    margin-bottom: 20px;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #000;
                }
                h3 {
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
                /* Ensures all text is black for printing */
                * { color: #000 !important; } 
            </style>
        </head>
        <body>
            <div class="resume-download-content">
                ${rawContent}
            </div>
        </body>
        </html>
    `;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `Resume_${elements.userInputName.value || 'New'}_${currentLang.toUpperCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// --- 7. CUSTOM MODAL IMPLEMENTATION (NO CHANGES) ---
let modalElement = null;

function showModal(message, isError = false) {
    if (!modalElement) {
        modalElement = document.createElement('div');
        modalElement.id = 'custom-modal';
        modalElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            text-align: center;
            max-width: 300px;
        `;
        document.body.appendChild(modalElement);
    }

    modalElement.innerHTML = `
        <p style="color: ${isError ? 'red' : '#4B0082'}; font-weight: bold; margin-bottom: 10px;">
            ${message}
        </p>
        <button onclick="hideModal()" style="padding: 8px 15px; background: #8A2BE2; color: white; border: none; border-radius: 5px; cursor: pointer;">
            OK
        </button>
    `;
    modalElement.style.display = 'block';
}

window.hideModal = function() {
    if (modalElement) {
        modalElement.style.display = 'none';
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    initWizard();
});
