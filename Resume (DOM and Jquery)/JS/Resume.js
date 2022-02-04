
alert("This page wont display properly without internet");

//                      IMPORTANT NOTE

//left section is implemented using DOM only 
//the right section is implemented using Jquery only





//////////////////////////////////////////////////////////////////////////
//                                                                      //
//                                DOM                                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


$(document).ready(function(){
 

let resume = document.body.children[0];
resume.classList.add("resume");
resume.style.width = "50%";
resume.style.height = "150%";
resume.style.margin = "5% 0 0 25%";
resume.style.backgroundColor = "rgb(255, 255, 255)";


let leftSec = resume.children[0];
leftSec.classList.add("left-section");
let rightSection = resume.children[1];
rightSection.classList.add("right-section");
leftSec.style.height = "100%";
leftSec.style.width = "30%";
leftSec.style.float = "left";
leftSec.style.backgroundColor = "rgb(37, 38, 43)";



let picSec = leftSec.children[0];
picSec.classList.add("pic-section");
picSec.style.height = "20%";
picSec.style.width = "100%";
picSec.style.textAlign = "center";
leftSec.style.backgroundColor = "rgb(37, 38, 43)";


let photo = document.createElement("IMG");
photo.setAttribute("src", "../images/9.jpg");
photo.setAttribute("width", "62%");
photo.setAttribute("height", "60%");
photo.style.border = "4px solid rgb(122, 61, 4)";
photo.style.borderRadius = "50%";
photo.style.marginTop = "15%";
picSec.appendChild(photo);


leftSec.children[1].classList.add("heading");
leftSec.children[3].classList.add("heading");
leftSec.children[5].classList.add("heading");


leftSec.children[1].appendChild(document.createElement("H1"));
leftSec.children[3].appendChild(document.createElement("H1"));
leftSec.children[5].appendChild(document.createElement("H1"));


var t1 = document.createTextNode("CONTACT");
leftSec.children[1].children[0].appendChild(t1);
var t2 = document.createTextNode("SKILLS");
leftSec.children[3].children[0].appendChild(t2);
var t3 = document.createTextNode("FOLLOW ME");
leftSec.children[5].children[0].appendChild(t3);


let headings = document.getElementsByClassName("heading");
var i;
for (i = 0; i < headings.length; i++) 
{
    headings[i].style.marginRight = "10%";
    headings[i].style.textAlign = "center";
    headings[i].style.borderBottom = "2px ridge whitesmoke";
    headings[i].style.backgroundColor = "rgb(37, 38, 43)"; 
}

  
leftSec.children[2].classList.add("section-1");
leftSec.children[2].style.width = "100%";
leftSec.children[2].style.height = "20%";
leftSec.children[2].style.paddingTop = "5%";
leftSec.children[2].style.paddingBottom = "5%";
leftSec.children[2].style.backgroundColor = "rgb(37, 38, 43)";


$(".section-1 div").eq(0).append("<i class='fas fa-user'></i>");
$(".section-1 div").eq(1).append("<i class='fas fa-home'></i>");
$(".section-1 div").eq(2).append("<i class='fas fa-phone-square'></i>");
$(".section-1 div").eq(3).append("<i class='fas fa-envelope'></i>");
$(".section-1 div").eq(4).append("<i class='fas fa-globe'></i>");



let s1s = leftSec.children[2].getElementsByTagName("div");
var i;
for (i = 0; i < s1s.length; i++) 
{
    s1s[i].style.width = "100%";
    s1s[i].style.height = "20%";
    s1s[i].appendChild(document.createElement("H3"));
}



s1s[0].children[1].innerHTML = "Usman Malik";
s1s[1].children[1].innerHTML = "122, D-2 Block, Lahore";
s1s[2].children[1].innerHTML = "+92 3107139929";
s1s[3].children[1].innerHTML = "Usman@gmail.com";
s1s[4].children[1].innerHTML = "www.usmanmalik.com";


leftSec.children[4].classList.add("section-2");
leftSec.children[4].style.width = "100%";
leftSec.children[4].style.height = "30%";
leftSec.children[4].style.paddingTop = "5%";
leftSec.children[4].style.paddingBottom = "5%";
leftSec.children[4].style.backgroundColor = "rgb(37, 38, 43)";


var i;
for (i = 0; i < leftSec.children[4].children.length; i++) 
{
    leftSec.children[4].children[i].classList.add("s-2");
    leftSec.children[4].children[i].style.width = "100%";
    leftSec.children[4].children[i].style.height = "20%";
    leftSec.children[4].children[i].children[0].classList.add("bar");
    leftSec.children[4].children[i].children[0].style.display = "inline-block";
    leftSec.children[4].children[i].children[0].style.marginLeft = "5%";
    leftSec.children[4].children[i].children[0].style.width = "70%";
    leftSec.children[4].children[i].children[0].style.height = "14%";
    leftSec.children[4].children[i].children[0].style.backgroundColor = "black";
    leftSec.children[4].children[i].children[0].style.border = "1px solid rgb(54, 55, 63)";
    leftSec.children[4].children[i].children[0].children[0].classList.add("progress");
    leftSec.children[4].children[i].children[0].children[0].style.width = "60%";
    leftSec.children[4].children[i].children[0].children[0].style.height = "100%";
    leftSec.children[4].children[i].children[0].children[0].style.backgroundColor = "rgb(122, 61, 4)";

    leftSec.children[4].children[i].insertBefore (document.createElement("H3"),leftSec.children[4].children[i].children[0]);
}
document.getElementsByClassName("progress")[0].style.width = "0%";
document.getElementsByClassName("progress")[1].style.width = "0%";
document.getElementsByClassName("progress")[2].style.width = "0%";
document.getElementsByClassName("progress")[3].style.width = "0%";
document.getElementsByClassName("progress")[4].style.width = "0%";


var skills = leftSec.children[4].getElementsByTagName("h3");
skills[0].innerHTML = "PhotoShop";
skills[1].innerHTML = "Illustrator";
skills[2].innerHTML = "InDesigns";
skills[3].innerHTML = "Wacom Bamboo";
skills[4].innerHTML = "DeviantArt";



leftSec.children[6].classList.add("section-3");
leftSec.children[6].style.width = "100%";
leftSec.children[6].style.height = "15.2%";
leftSec.children[6].style.paddingTop = "5%";
leftSec.children[6].style.paddingBottom = "5%";
leftSec.children[6].style.backgroundColor = "rgb(37, 38, 43)";

$(".section-3 div").eq(0).append("<i class='fab fa-facebook-square'></i>");
$(".section-3 div").eq(1).append("<i class='fab fa-twitter'></i>");
$(".section-3 div").eq(2).append("<i class='fab fa-linkedin'></i>");
$(".section-3 div").eq(3).append("<i class='fab fa-pinterest'></i>");

$("i").css("color","white");
$("i").css("fontSize","1.1rem");
$("i").css("marginLeft","5%");

let s3s = leftSec.children[6].getElementsByTagName("div");
var i;
for (i = 0; i < s3s.length; i++) 
{
    s3s[i].style.width = "100%";
    s3s[i].style.height = "25%";
    s3s[i].appendChild(document.createElement("H3"));
}


s3s[0].children[1].innerHTML = "/Usman.Malik";
s3s[1].children[1].innerHTML = "/Usman.Writes";
s3s[2].children[1].innerHTML = "/Usman.M";
s3s[3].children[1].innerHTML = "/Usman.Artbook";



//////////////////////////////////////////////////////////////////////////
//                                                                      //
//                                JQUERY                                //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


    
    $("h1").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $("h1").css("color","#ffffff");
    $("h1").css("fontSize","1rem");
    $("h1").css("fontWeight","lighter");
    $("h1").css("letterSpacing","1px");
    $("h1").css("marginTop","0em");
    $("h1").css("marginBottom","0em");

    $("h3").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $("h3").css("color","#ffffff");
    $("h3").css("fontSize","0.6rem");
    $("h3").css("fontWeight","lighter");
    $("h3").css("display","inline-block");
    $("h3").css("marginLeft","5%");


    $(".right-section").css("height","100%");
    $(".right-section").css("width","70%");
    $(".right-section").css("float","right");
    $(".right-section").css("backgroundColor","whitesmoke");

    
    let nameSection =  rightSection.children[0];
    nameSection.classList.add("name-section");
    $(".name-section").css("height","20%");
    $(".name-section").css("width","100%");
    $(".name-section").css("textAlign","center");
    $(".name-section").append(" <h1> USMAN MALIK </h1> ");
    $(".name-section").append(" <h3> Graphic Designer </h3>");

    nameSection.children[0].classList.add("name-txt");
    $(".name-txt").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".name-txt").css("fontSize","3rem");
    $(".name-txt").css("color","rgb(31, 32, 36)");
    $(".name-txt").css("display","inline-block");
    $(".name-txt").css("marginTop","10%");
    $(".name-txt").css("marginBottom","1%");

    nameSection.children[1].classList.add("desig-txt");
    $(".desig-txt").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".desig-txt").css("fontSize","1.5rem");
    $(".desig-txt").css("color","rgb(31, 32, 36)");
    $(".desig-txt").css("marginTop","-2%");


    rightSection.children[1].classList.add("heading2");
    rightSection.children[3].classList.add("heading2");
    rightSection.children[5].classList.add("heading2");

    let headings2 = $(".heading2");
    var i;
    for (i = 0; i < headings2.length; i++) 
    {
        headings2[i].style.marginLeft = "5%";
        headings2[i].style.borderBottom = "2px ridge rgb(31, 32, 36)";
    }

    $(".heading2").eq(0).append("<h1> EDUCATION </h1>");
    $(".heading2").eq(1).append("<h1> EXPERIENCE </h1>");
    $(".heading2").eq(2).append("<h1> LANGUAGES </h1>");

    $(".heading2 h1").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".heading2 h1").css("color","rgb(31, 32, 36)");
    $(".heading2 h1").css("fontSize","1rem");
    $(".heading2 h1").css("fontWeight","lighter");
    $(".heading2 h1").css("letterSpacing","1px");
    $(".heading2 h1").css("marginTop","0em");
    $(".heading2 h1").css("marginBottom","0em");


    rightSection.children[2].classList.add("education-section");
    rightSection.children[4].classList.add("experience-section");
    rightSection.children[6].classList.add("languages-section");

    $(".education-section").css("height","22%");
    $(".education-section").css("width","100%");
    $(".experience-section").css("height","30.5%");
    $(".experience-section").css("width","100%");
    $(".languages-section").css("height","16.5%");
    $(".languages-section").css("width","90%");
    $(".languages-section").css("marginLeft","5%");

    rightSection.children[2].children[0].classList.add("left-sec");
    rightSection.children[2].children[1].classList.add("right-sec");
    
    $(".left-sec").css("height","100%");
    $(".left-sec").css("width","42%");
    $(".left-sec").css("float","left");
    $(".left-sec").css("marginLeft","5%");

    $(".right-sec").css("height","100%");
    $(".right-sec").css("width","42%");
    $(".right-sec").css("float","right");
    $(".right-sec").css("marginRight","5%");

    rightSection.children[2].children[0].children[0].classList.add("sub-section");
    rightSection.children[2].children[0].children[1].classList.add("sub-section");
    rightSection.children[2].children[1].children[0].classList.add("sub-section");
    rightSection.children[2].children[1].children[1].classList.add("sub-section");

    $(".sub-section").css("height","40%");
    $(".sub-section").css("width","100%");
    $(".sub-section").css("textAlign","center");
    $(".sub-section").css("marginTop","7%");
    $(".sub-section").css("marginBottom","7%");

    $(".sub-section").eq(0).append("<i class='fas fa-user-graduate'></i>");
    $(".sub-section").eq(0).append("<h2 class='course'> MSSE </h2>");
    $(".sub-section").eq(0).append("<h2 class='school'> FAST UNIVERSITY </h2>");
    $(".sub-section").eq(0).append("<h2 class='date'> 2015-2017 </h2>");

    $(".sub-section").eq(1).append("<i class='fas fa-shapes'></i>");
    $(".sub-section").eq(1).append("<h2 class='course'> FSC </h2>");
    $(".sub-section").eq(1).append("<h2 class='school'> GARRISON ACADEMY </h2>");
    $(".sub-section").eq(1).append("<h2 class='date'> 2008-2010 </h2>");

    $(".sub-section").eq(2).append("<i class='fas fa-graduation-cap'></i>");
    $(".sub-section").eq(2).append("<h2 class='course'> BSSE </h2>");
    $(".sub-section").eq(2).append("<h2 class='school'> COMSATS UNIVERSITY </h2>");
    $(".sub-section").eq(2).append("<h2 class='date'> 2010-2014 </h2>");

    $(".sub-section").eq(3).append("<i class='fas fa-school'></i>");
    $(".sub-section").eq(3).append("<h2 class='course'> MATRICULATION </h2>");
    $(".sub-section").eq(3).append("<h2 class='school'> ARMY PUBLIC SCHOOL </h2>");
    $(".sub-section").eq(3).append("<h2 class='date'> 1998-2008 </h2>");

    $(".sub-section i").css("color","rgb(31, 32, 36)");
    $(".sub-section i").css("fontSize","25px");


    rightSection.children[4].children[0].classList.add("sub-sec");
    rightSection.children[4].children[1].classList.add("sub-sec");
    rightSection.children[4].children[2].classList.add("sub-sec");

    $(".sub-sec").css("height","29%");
    $(".sub-sec").css("width","90%");
    $(".sub-sec").css("marginLeft","5%");
    $(".sub-sec").css("marginTop","4%");

    $(".sub-sec").eq(0).append("<h2 class='course'> GRAPHIC DESIGN SPECIALIST </h2>");
    $(".sub-sec").eq(0).append("<h2 class='school'> EXPERION, Lahore </h2>");
    $(".sub-sec").eq(0).append("<h3 class='detail'> Developed 3000+ graphic design projects including brochures, catalogs and presentations. Increased the E-commerce Bussiness by 24%. Lead team meetings for the projects for increasing revenue for E-commerce clients.</h3>");

    $(".sub-sec").eq(0).append("<h2 class='course'> SENIOR GRAPHIC DESIGN </h2>");
    $(".sub-sec").eq(0).append("<h2 class='school'> SHIBULA DESIGNS, Lahore </h2>");
    $(".sub-sec").eq(0).append("<h3 class='detail'> Created wireframes and page designs for multiple client websites. Worked with a team of 5 animation specialists to create and modify 200+ animations. Increased the E-commerce Bussiness by 24%. Lead team meetings for the projects for increasing revenue for E-commerce clients. </h3>");

    $(".sub-sec").eq(0).append("<h2 class='course'> GRAPHIC DESIGN SPECIALIST </h2>");
    $(".sub-sec").eq(0).append("<h2 class='school'> EXPERION, Lahore </h2>");
    $(".sub-sec").eq(0).append("<h3 class='detail'> Worked with a team of 5 animation specialists to create and modify 200+ animations. Increased the E-commerce Bussiness by 24%. Lead team meetings for the projects for increasing revenue for E-commerce clients. Created wireframes and page designs for multiple client websites. Worked with a team of 5 animation specialists to create and modify 200+ animations. Increased the E-commerce Bussiness by 24%. </h3>");

    rightSection.children[6].classList.add("languages-section");
    rightSection.children[6].children[0].classList.add("l-sec1");
    rightSection.children[6].children[1].classList.add("l-sec2");
    rightSection.children[6].children[2].classList.add("l-sec2");


    $(".l-sec1").css("height","50%");
    $(".l-sec1").css("width","30%");
    $(".l-sec1").css("textAlign","center");
    $(".l-sec1").css("marginTop","6%");
    $(".l-sec1").css("float","left");

    $(".l-sec2").css("height","50%");
    $(".l-sec2").css("width","30%");
    $(".l-sec2").css("textAlign","center");
    $(".l-sec2").css("marginTop","6%");
    $(".l-sec2").css("float","right");



    $(".l-sec1").eq(0).append("<h2 class='course'> ENGLISH </h2>");
    $(".l-sec1").eq(0).append("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='far fa-star'></i>");
    
    $(".l-sec2").eq(0).append("<h2 class='course'> CHINESE </h2>");
    $(".l-sec2").eq(0).append("<i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='fas fa-star'></i> <i class='far fa-star'></i>");

    $(".l-sec2").eq(1).append("<h2 class='course'> URDU </h2>");
    $(".l-sec2").eq(1).append("<i class='fas fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i> <i class='far fa-star'></i>");

    $(".languages-section i").css("color","rgb(31, 32, 36)");
    $(".languages-section i").css("fontSize","20px");


    $(".course").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".course").css("color","rgb(31, 32, 36)");
    $(".course").css("fontSize","0.9rem");
    $(".course").css("fontWeight","bolder");
    $(".course").css("letterSpacing","1px");
    $(".course").css("marginTop","0em");
    $(".course").css("marginBottom","0em");

    $(".school").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".school").css("color","rgb(31, 32, 36)");
    $(".school").css("fontSize","0.7rem");
    $(".school").css("fontWeight","lighter");
    $(".school").css("marginTop","0em");
    $(".school").css("marginBottom","0em");

    $(".date").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".date").css("color","rgb(31, 32, 36)");
    $(".date").css("fontSize","0.5rem");
    $(".date").css("fontWeight","lighter");
    $(".date").css("marginTop","0%");

    $(".detail").css("fontFamily","Lucida Sans Unicode, Lucida Grande, sans-serif");
    $(".detail").css("color","rgb(31, 32, 36)");
    $(".detail").css("fontSize","0.5rem");
    $(".detail").css("fontWeight","lighter");
    $(".detail").css("marginTop","0%");
    $(".detail").css("marginLeft","0%");




    $(".progress").eq(0).animate({width : "90%"}, 1500);
    $(".progress").eq(1).animate({width : "70%"}, 1500);
    $(".progress").eq(2).animate({width : "75%"}, 1500);
    $(".progress").eq(3).animate({width : "40%"}, 1500);
    $(".progress").eq(4).animate({width : "60%"}, 1500);




    
});
