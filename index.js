const get = para=>document.getElementById(`${para}`);
const btnmode = get("btn-mode");
const modetext =get('mode-text');
const modeicon = get('mode-icon');
const profilecontainer = document.querySelector(".profile-container");
const iconcontainer =document.querySelector(".icon-container");
let darkMode = false;
const lightModeImagePath = './assets/images/sun-icon.svg';
const darkModeImagePath = './assets/images/moon-icon.svg';
const root = document.documentElement.style;
// -- while writing the getuser and updateprofile()
const btnsubmit = get('submit');
const userInput = get('input');
const avatar = get("avatar");
const url = "https://api.github.com/users/";;
const noresults = get("no-results");
const Username=get("name");
const user = get("user");
const date = get("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");

// handling dark light mode
function darkModeProperties() {
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modetext.innerText = "LIGHT";
    modeicon.src = "./assets/images/sun-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode = true;
    console.log("darkmode changed to " + darkMode);
    localStorage.setItem("dark-mode", true);  console.log("setting dark mode to false");
  
    console.log("setting dark mode to true");
  
  }
  
  //SWITCH TO LIGHT MODE - activateLightMode()
  function lightModeProperties() {
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    modetext.innerText = "DARK";
    modeicon.src = "./assets/images/moon-icon.svg";
    root.setProperty("--lm-icon-bg", "brightness(100%)");
    darkMode = false;
    console.log("darkmode changed to " + darkMode);
  
    localStorage.setItem("dark-mode", false);
    console.log("setting dark mode to false");
  }
btnmode.addEventListener("click",function(){
    if(darkMode == false){
        darkModeProperties();
    }
    else{
        lightModeProperties(); 
    }
});

// API FETCH for search
function getUser(url){
    fetch(url)
    .then((response)=>
         response.json()
    )
    .then((data)=>{
        console.log(data);
        updateProfile(data);
    })
    .catch ((error)=>{
        throw error;
    });
}

// Render:
function updateProfile(data){
    {
        if(data.message!=="Not Found"){
            function checkNull(param1,param2){
                if(param1==="" || param1===null){
                    param2.style.opacity=0.5;
                    param2.previousElementSibling.style.opacity = 0.5;
                    return false;
                }
                return true;
            }
            noresults.style.display="none";
            avatar.src = `${data.avatar_url}`;
            Username.innerText=data.name===null?data.login:data.name;
            user.innerText=`@${data.login}`;
            user.href=`${data.html_url}`;
            datesegments=data.created_at.split('T').shift().split("-");
            date.innerText=`Joined ${datesegments[2]} ${months[datesegments[1]-1]} ${datesegments[0]}`;
            bio.innerText=data.bio===null?"This profile has no Bio":data.bio;
            repos.innerText=`${data.public_repos}`;
            followers.innerText=`${data.followers}`;
            following.innerText=`${data.following}`;
            // company.innerText =`${data.company}`;
            company.innerText=checkNull(data.company,company) ? data.company:"Not Available";
            twitter.innerText=checkNull(data.twitter_username,twitter) ? data.twitter_username:"Not Available";
            user_location.innerText=checkNull(data.location,user_location)?data.location:"Not Available";
            page.innerText=checkNull(data.blog,page)?data.blog:"Not Available";
            page.href = checkNull(data.blog,page) ? data.blog:"#";
        }else{
            noresults.style.display="block";
        }

    } 
}

btnsubmit.addEventListener("click",function(){
    if(userInput.value!==""){
        getUser(url+userInput.value);
    }
    // we can tell user to write when input is note given
});
userInput.addEventListener(
    "keydown",
    function(e){
        if(e.key === "Enter"){
            if(userInput.value!==""){
                getUser(url+userInput.value);
            }
        }
    },
    false
);
userInput.addEventListener("input",function(){
    noresults.style.display='none';
    // does not work for cross button
})
function init() {
    const value = localStorage.getItem("dark-mode");
    if (value === "true") {
        darkModeProperties();
    } else {
        lightModeProperties();
    }
    noresults.style.display = 'none';
    getUser(url + "areyutyk");
}

init();
