
// Chatbox hover
const chatIcon = document.querySelector(".chat");
const chatInfo = document.querySelector(".chatInfo");

chatIcon.addEventListener("mouseover", function chatHover(){
    chatInfo.style.display = "block";
})
chatIcon.addEventListener("mouseout", function chatHoverEnd(){
    chatInfo.style.display = "none";
})



// Upload Image

const chooseFileBtn = document.querySelector("#userUploadedImg");
var uploadedImg = " ";

chooseFileBtn.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImg = reader.result;
        document.querySelector("#displayUploadedImg").style.backgroundImage = `url(${uploadedImg})`;
    })
    reader.readAsDataURL(this.files[0]);
})