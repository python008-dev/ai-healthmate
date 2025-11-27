const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/NEXT_PUBLIC_GEMINI_API_KEY=(.*)/);
const API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : "";
console.log("Using API Key starting with:", API_KEY.substring(0, 5) + "...");

const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    try {
        console.log("Listing available models...");
        // Note: listModels might not be available on the client instance directly in some versions, 
        // but let's try to use the model directly first if list fails.
        
        const modelsToTry = ["gemini-1.5-flash", "gemini-pro", "gemini-1.0-pro"];
        
        for (const modelName of modelsToTry) {
            console.log(`\nTesting model: ${modelName}`);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                const response = await result.response;
                console.log(`SUCCESS with ${modelName}:`, response.text());
                return; // Exit on first success
            } catch (e) {
                const errorMsg = `Failed with ${modelName}:\n` + 
                    (e.response ? 
                        `Status: ${e.response.status}\nBody: ${JSON.stringify(e.response.data, null, 2)}` : 
                        e.message) + "\n\n";
                fs.appendFileSync('error_log.txt', errorMsg);
            }
        }
        
        console.error("\nAll models failed. Check error_log.txt");
    } catch (error) {
        fs.writeFileSync('error_log.txt', "Fatal Error: " + error.toString());
    }
}

run();
