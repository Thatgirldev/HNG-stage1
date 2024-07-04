function getCurrentUTCTime() {
            const utctime = new Date();
            const currentUTCTime = utctime.toISOString().substr(11, 8);
            const currentUTCMs = utctime.getTime();
            document.querySelector(".text1").innerHTML = currentUTCMs;
        }
        setInterval(getCurrentUTCTime, 1000);
        getCurrentUTCTime()
const day = document.querySelector(".text2");

const today = new Date().getDay()

if(today === 0){
    day.innerText = "Sunday"
}
else if (today === 1){
    day.innerText = "Monday"
}
else if (today === 2){
    day.innerText="Tuesday"
}
else if (today ===3){
    day.innerText="Wednesday"
}
else{
    day.innerText="N/A"
}

document.querySelector("[data-testid='slackProfilePicture']");
document.querySelector("[data-testid='slackDisplayName']");
document.querySelector("[data-testid='currentDayOfTheWeek']");
document.querySelector("[data-testid='currentUTCTime']");
document.querySelector("[data-testid='slackEmail']");
