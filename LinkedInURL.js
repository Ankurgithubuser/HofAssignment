const regex= /^www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;


const url="www.linkedin.com/in/ankur-mishra-465a6922b";

if (regex.test(url)) {
    console.log("The input URL is a valid LinkedIn profile URL.");
    
}else{
    console.log("The input URL is not a valid LinkedIn profile URL.");
}