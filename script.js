// LOGIN PROTECTION code
if (
    window.location.pathname.endsWith("index.html") &&
    localStorage.getItem("kisanLoggedIn") !== "true"
) {
    window.location.href = "login.html";
}

// Your old line 1 code starts here
function showMessage(message) {
    alert(message);
}
// Open Add Crop Form
function openCropForm() {
    document.getElementById("cropModal").style.display = "flex";
}


// Close Add Crop Form
function closeCropForm() {
    document.getElementById("cropModal").style.display = "none";
}
// Save Crop
document.getElementById("cropForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get information from the form
    const cropName = document.getElementById("cropName").value;
    const quantity = document.getElementById("cropQuantity").value;
    const quality = document.getElementById("cropQuality").value;
    const location = document.getElementById("cropLocation").value;

    // Update crop name
    document.getElementById("displayCropName").textContent = cropName;
    // Update crop quantity
const displayQuantity =
    document.getElementById("displayQuantity");

if (displayQuantity) {
    displayQuantity.textContent = quantity;
}


// Update crop quality
const displayQuality =
    document.getElementById("displayQuality");

if (displayQuality) {
    displayQuality.textContent = quality;
}


// Update crop location
const displayLocation =
    document.getElementById("displayLocation");

if (displayLocation) {
    displayLocation.textContent = location;
}


// Close crop form
closeCropForm();

// Show success message
alert("Crop added successfully!");

    // Update quantity
    document.getElementById("displayQuantity").textContent = quantity;

    // Update quality
    document.getElementById("displayQuality").textContent = quality;

    // Update location
    document.getElementById("displayLocation").textContent = location;

    // Close the popup
    closeCropForm();

    // Show confirmation
    alert("Crop saved successfully!");
});
// Show Market Prices
function showMarketPrices() {

    const marketSection = document.getElementById("marketPriceSection");

    marketSection.style.display = "grid";
    calculateBestMarket();

    alert("Market prices updated successfully!");
}
// Calculate Best Market

function calculateBestMarket() {

    const markets = [
        {
            name: "Siliguri Mandi",
            price: 23
        },
        {
            name: "Kolkata Market",
            price: 27
        },
        {
            name: "Durgapur Market",
            price: 25
        },
        {
            name: "Burdwan Market",
            price: 24
        }
    ];

    let bestMarket = markets[0];

    for (let i = 1; i < markets.length; i++) {

        if (markets[i].price > bestMarket.price) {

            bestMarket = markets[i];

        }
    }

    document.querySelector(".best-opportunity h3").textContent =
        bestMarket.name + " — ₹" + bestMarket.price + "/kg";

}
// Get farmer quantity
const quantity =
    Number(document.getElementById("displayQuantity").textContent);

// Calculate estimated earning
const estimatedValue = quantity * bestMarket.price;

// Show estimated earning
document.getElementById("estimatedValue").textContent =
    "Estimated value: ₹" + estimatedValue.toLocaleString("en-IN");
    // =========================
// BUYER MATCHING
// =========================

// Show buyer matching section
function findBuyers() {

    const buyerSection =
        document.getElementById("buyerSection");

    buyerSection.style.display = "grid";

    alert("Matching buyers found successfully!");
}


// Contact buyer
function contactBuyer(buyerName) {

    alert(
        "Buyer selected: " +
        buyerName +
        "\n\nA buyer enquiry can be started from here."
    );

}
// =========================
// AI PRICE PREDICTION
// =========================

function predictPrice() {

    // Get current crop information
    const cropName =
        document.getElementById("displayCropName").textContent;

    let currentPrice = 23;

if (cropName.toLowerCase() === "potato") {
    currentPrice = 23;
} 
else if (cropName.toLowerCase() === "tomato") {
    currentPrice = 30;
} 
else if (cropName.toLowerCase() === "onion") {
    currentPrice = 25;
} 
else if (cropName.toLowerCase() === "rice") {
    currentPrice = 35;
}

    // Demo prediction
    const predictedPrice = currentPrice + 3;
    // Generate 7-day price trend

const priceTrend =
    document.getElementById("priceTrend");

if (priceTrend) {

    priceTrend.innerHTML = "";

    for (let day = 1; day <= 7; day++) {

        const trendPrice =
            currentPrice + ((predictedPrice - currentPrice) / 6) * (day - 1);

        priceTrend.innerHTML +=
            `<span>
                Day ${day}<br>
                <strong>₹${trendPrice.toFixed(1)}</strong>
            </span>`;
    }
}

    // Calculate percentage change
    const percentageChange =
        ((predictedPrice - currentPrice) / currentPrice) * 100;

    // Update crop name
    document.getElementById("predictionCrop").textContent =
        cropName;

    // Update current price
    document.getElementById("currentPrice").textContent =
        "₹" + currentPrice + "/kg";

    // Update predicted price
    document.getElementById("predictedPrice").textContent =
        "₹" + predictedPrice + "/kg";

    // Update percentage
    document.getElementById("priceChange").textContent =
        "📈 Expected increase: +" +
        percentageChange.toFixed(1) +
        "%";

    // Recommendation
    if (predictedPrice > currentPrice) {

        document.getElementById("aiRecommendation").textContent =
            "🟢 WAIT & SELL";

        document.getElementById("recommendationText").textContent =
            "Price may increase in the coming days.";

    } else {

        document.getElementById("aiRecommendation").textContent =
            "🔵 SELL NOW";

        document.getElementById("recommendationText").textContent =
            "Current price looks favorable.";
    }

    alert("AI price prediction generated!");
}
// =========================
// SMART RECOMMENDATION
// =========================

function generateRecommendation() {

    // Demo market data
    const marketName = "Kolkata Market";
    const marketPrice = 27;

    // Demo buyer data
    const buyerName = "FreshMart Retailers";
    const buyerPrice = 28;

    // Demo transport data
    const transportName = "Local Farmer Truck";
    const transportCost = 4500;

    // Get farmer quantity
    const quantityElement =
        document.getElementById("displayQuantity");

    let quantity = 1500;

    if (quantityElement) {
        quantity = Number(quantityElement.textContent);
    }

    // Calculate estimated value
    const estimatedValue = quantity * buyerPrice;

    // Update recommendation
    document.getElementById("finalRecommendation").textContent =
        "Sell to " + buyerName;

    document.getElementById("recommendationDetails").textContent =
        "Based on price, buyer demand and estimated logistics cost, " +
        buyerName + " offers a suitable selling opportunity.";

    document.getElementById("finalMarket").textContent =
        marketName;

    document.getElementById("finalPrice").textContent =
        "₹" + buyerPrice + "/kg";

    document.getElementById("finalBuyer").textContent =
        buyerName;

    document.getElementById("finalTransport").textContent =
        transportName + " — ₹" + transportCost.toLocaleString("en-IN");

    alert(
        "Smart recommendation generated!\n\n" +
        "Buyer: " + buyerName +
        "\nPrice: ₹" + buyerPrice + "/kg" +
        "\nEstimated Value: ₹" +
        estimatedValue.toLocaleString("en-IN")
    );
}
// =========================
// DASHBOARD COUNTERS
// =========================

function updateDashboard() {

    const cropCount =
        document.getElementById("cropCount");

    const marketCount =
        document.getElementById("marketCount");

    const buyerCount =
        document.getElementById("buyerCount");

    const aiCount =
        document.getElementById("aiCount");


    if (cropCount) {
        cropCount.textContent = "1";
    }

    if (marketCount) {
        marketCount.textContent = "4";
    }

    if (buyerCount) {
        buyerCount.textContent = "3";
    }

    if (aiCount) {
        aiCount.textContent = "1";
    }
}


// Run dashboard update
updateDashboard();
// =========================
// FARMER AUTHENTICATION
// =========================

// Show Register Form
function showRegister() {

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";
}


// Show Login Form
function showLogin() {

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";
}


// Register Farmer
function registerFarmer() {

    const name =
        document.getElementById("registerName").value.trim();

    const phone =
        document.getElementById("registerPhone").value.trim();

    const password =
        document.getElementById("registerPassword").value;

    const location =
        document.getElementById("registerLocation").value.trim();


    // Validate fields
    if (!name || !phone || !password || !location) {

        alert("Please fill in all fields.");

        return;
    }


    // Create farmer account
    const farmer = {

        name: name,

        phone: phone,

        password: password,

        location: location
    };


    // Save account in browser
    localStorage.setItem(
        "kisanFarmer",
        JSON.stringify(farmer)
    );


    alert(
        "Registration successful!\n\n" +
        "You can now login with your phone number and password."
    );


    // Return to Login
    showLogin();
}


// Login Farmer
function loginFarmer() {

    const phone =
        document.getElementById("loginphone").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    // Get saved farmer
    const savedFarmer =
        localStorage.getItem("kisanFarmer");


    if (!savedFarmer) {

        alert(
            "No farmer account found.\n\n" +
            "Please register first."
        );

        return;
    }


    const farmer =
        JSON.parse(savedFarmer);


    // Check login details
    if (
        phone === farmer.phone &&
        password === farmer.password
    ) {

        // Create login session
        localStorage.setItem(
            "kisanLoggedIn",
            "true"
        );


        // Open existing dashboard
        window.location.href = "index.html";

    } else {

        alert(
            "Invalid phone number or password."
        );
    }
}
// =========================
// FARMER LOGOUT
// =========================

function logoutFarmer() {

    localStorage.removeItem("kisanLoggedIn");

    window.location.href = "login.html";
}
// =========================
// LANGUAGE SELECTION
// =========================

function changeLanguage() {

    const language =
        document.getElementById("languageSelect").value;

    // Save selected language
    localStorage.setItem(
        "kisanLanguage",
        language
    );

    if (language === "bn") {

        alert("বাংলা ভাষা নির্বাচিত হয়েছে।");

    } else {

        alert("English language selected.");

    }
}
// =========================
// DASHBOARD LANGUAGE
// =========================

const dashboardTranslations = {

    en: {
        dashboard: "Dashboard",
        addCrop: "Add Crop",
        marketPrices: "Market Prices",
        aiPrediction: "AI Price Prediction",
        buyers: "Find Buyers",
        logistics: "Logistics",
        recommendation: "Smart Recommendation",
        logout: "Logout"
    },

    bn: {
        dashboard: "ড্যাশবোর্ড",
        addCrop: "ফসল যোগ করুন",
        marketPrices: "বাজারের দাম",
        aiPrediction: "AI দামের পূর্বাভাস",
        buyers: "ক্রেতা খুঁজুন",
        logistics: "পরিবহন",
        recommendation: "স্মার্ট পরামর্শ",
        logout: "লগআউট"
    }

};


function changeDashboardLanguage() {

    const language =
        document.getElementById("dashboardLanguage").value;

    localStorage.setItem(
        "kisanLanguage",
        language
    );

    const text =
        dashboardTranslations[language];


    const dashboard =
        document.getElementById("dashboardText");

    if (dashboard) {
        dashboard.textContent = text.dashboard;
    }


    const addCrop =
        document.getElementById("addCropText");

    if (addCrop) {
        addCrop.textContent = text.addCrop;
    }


    const marketPrices =
        document.getElementById("marketPricesText");

    if (marketPrices) {
        marketPrices.textContent = text.marketPrices;
    }


    const aiPrediction =
        document.getElementById("aiPredictionText");

    if (aiPrediction) {
        aiPrediction.textContent = text.aiPrediction;
    }


    const buyers =
        document.getElementById("buyersText");

    if (buyers) {
        buyers.textContent = text.buyers;
    }


    const logistics =
        document.getElementById("logisticsText");

    if (logistics) {
        logistics.textContent = text.logistics;
    }


    const recommendation =
        document.getElementById("recommendationText");

    if (recommendation) {
        recommendation.textContent = text.recommendation;
    }


    const logout =
        document.querySelector(".logout-btn");

    if (logout) {
        logout.textContent = text.logout;
    }

}
// =========================
// CROP PHOTO PREVIEW
// =========================

function previewCropPhoto(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const image = document.getElementById("cropPreviewImage");
    const message = document.getElementById("cropPreviewText");
    const removeButton = document.getElementById("removePhotoBtn");

    const imageURL = URL.createObjectURL(file);

    image.src = imageURL;
    image.style.display = "block";

    if (message) {
        message.style.display = "none";
    }

    if (removeButton) {
        removeButton.style.display = "block";
    }
}
// =========================
// REMOVE CROP PHOTO
// =========================

function removeCropPhoto() {

    const image =
        document.getElementById("cropPreviewImage");

    const message =
        document.getElementById("cropPreviewText");

    const fileInput =
        document.getElementById("cropPhoto");

    const removeButton =
        document.getElementById("removePhotoBtn");

    image.src = "";
    image.style.display = "none";

    message.style.display = "block";

    fileInput.value = "";

    removeButton.style.display = "none";
    document.getElementById("removePhotoBtn").style.display = "block";
}
// =========================
// AI CROP IDENTIFICATION
// =========================

// =========================
// AI CROP IDENTIFICATION
// =========================

let cropModel = null;


// Load AI model
async function loadCropModel() {

    try {

        cropModel = await mobilenet.load();

        console.log("AI model loaded successfully.");

    } catch (error) {

        console.error("AI model loading failed:", error);

    }
}


// Identify crop from uploaded image
async function identifyCrop() {

    const fileInput =
        document.getElementById("cropPhoto");

    const result =
        document.getElementById("detectedCrop");

    const image =
        document.getElementById("cropPreviewImage");


    if (!fileInput.files || fileInput.files.length === 0) {

        alert("Please upload a crop photo first.");

        return;
    }


    if (!cropModel) {

        result.textContent =
            "Loading AI model... Please wait.";

        cropModel = await mobilenet.load();

    }


    result.textContent =
        "🤖 Analyzing crop photo...";


    try {

        const predictions =
            await cropModel.classify(image);


        if (predictions.length > 0) {

            const prediction =
                predictions[0];


            result.innerHTML =
                "🌾 " +
                prediction.className +
                "<br>" +
                "Confidence: " +
                (prediction.probability * 100).toFixed(1) +
                "%";

        } else {

            result.textContent =
                "Crop could not be identified.";

        }


    } catch (error) {

        console.error(error);

        result.textContent =
            "Unable to analyze this image.";

    }
}


// Load model when dashboard opens
loadCropModel();