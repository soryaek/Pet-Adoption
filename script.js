//GALLERY PAGE
var openList =   '<li class="photo'; 
var closeList =  '</li>'; 

var openCaptionTag = "<caption>";
var closeCaptionTag = "</caption>"; 

var openDescTag = '<div class="description" onclick="displayInfoBox('; 
var openDescEndTag= ')">'; 
var closeDescTag = '</div>'; 

var openInfoBoxTag = '<div id="displayInfoBox">';
var closeInfoBoxTag = '</div>'; 

var openHeadingTag ='<h1>';
var closeHeadingTag ='</h1>'; 

var openParagraphTag = '<p>';
var closeParagraphTag = '</p>';
var closeTab = 'Click This To Close';

var photos  = [];
var image = [];
var imageList = []; 
var altAttr = []; 

var fileName = ['Husky.jpg','Tibetan-Terrier.jpg', 'Golden-Retriever.jpeg', 'German-Shepherd.jpg', 'papillon.jpg', 'boxer.jpg',
'persian.jpg', 'maine-coon.jpg', 'siamese.jpg', 'ragdoll.jpg', 'bengal.jpg', 'burmese.jpg'];

var captionTexts = ['Husky', 'Tibetan Terrier', 'Golden Retriever', 'German Shepherd', 'Papillon', 'Boxer', 'Persian',
                    'Maine Coon', 'Siamese', 'Ragdoll', 'Bengal', 'Burmese']; 
captionTexts = captionTexts.map(  x=> { return x.toUpperCase(); })  //convert string into Uppercase

var descTexts= ['A lovely dog', 'A lovely dog', 'A lovely dog', 'A lovely dog', 'A lovely dog', 'A lovely dog', 'A lovely cat', 
                'A lovely cat', 'A lovely cat', 'A lovely cat', 'A lovely cat', 'a lovely cat']; 

var infoText = ['A medium-sized working dog, quick and light on his feet and free and graceful in action.',
                'A medium-sized dog, profusely coated, of powerful build, and square in proportion.', 
                'A sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name.', 
                'A breed of medium to large-sized working dog that originated in Germany.', 
                'A steadfast companion. Has a friendly personality that can steal your heart.', 
                'Bold, exuberant, affectionate, self confident and utterly loyal. Patient with family.', 
                'A breed of livestock guardian dog from the East Azerbaijan Province in northern Iran, taking their name from the Sarab County.', 
                'It has a distinctive physical appearance and valuable hunting skills.', 
                'One of the first distinctly recognized breeds of Asian cat. Derived from the Wichianmat landrace, one of several varieties of cat native to Thailand.', 
                'A cat breed with a color point coat and blue eyes.', 
                'Domesticated cat breed created from hybrids of domestic cats, especially the spotted Egyptian Mau, with the Asian leopard cat.', 
                'A breed of domestic cat, originating in Burma, believed to have its roots near the Thai-Burma border and developed in the United States and Britain.'];

for (var i=0; i<12; i++){
    photos.push("<img src='images/"+ fileName[i] + "'");
    altAttr.push(" alt= '"+ captionTexts[i] + "'><br><br>"); 
    image = openList + (i+1) + '">' + photos[i] + altAttr[i] + openCaptionTag + captionTexts[i] + closeCaptionTag + 
            openDescTag + i + openDescEndTag + descTexts[i] + closeDescTag + closeList; 
    imageList.push(image);            
}

function displayInfoBox(num) {
    document.getElementById('infoBox').style.visibility = "visible";
    document.getElementById('headingInfo').innerHTML = captionTexts[num];
    document.getElementById('textInfo').innerHTML = infoText[num];
    document.getElementById('closeTab').addEventListener("click", hideInfoBox);
}
function hideInfoBox(){
    document.getElementById('infoBox').style.visibility = "hidden";
}
document.getElementById("dog-cat").innerHTML = imageList.join(' ');


//CONTACT PAGE
function show(selectOption){
    if(selectOption.value == 1){

        document.getElementById('email').style.display = "block";
        document.getElementById('phoneNumber').style.display= "none";
    }else if(selectOption.value == 2){
        document.getElementById('phoneNumber').style.display = "block";
        document.getElementById('email').style.display = "none";

    }else{
        document.getElementById('email').style.display = "none";
        document.getElementById('phoneNumber').style.display = "none";
    }
}
