console.log("Running...");
let occupation = document.querySelector(".occupation");
let cLine = document.querySelector(".cursorLine");

const occupationContent = "Software" + '\xa0' + "Engineering" + '\xa0' + "student" + '\xa0' + "@" + '\xa0' + "uOttawa";
let count = 0;

let toggleLine = () =>{
    let state = true;

    let toggleInterval = setInterval(() =>{
        if(state){
            cLine.style.display = "none";
            state = false;
        }else{
            cLine.style.display = "inline";
            state = true;
        }

        if(occupation.innerText == occupationContent){
            cLine.style.display = "none";
            clearInterval(toggleInterval);
        }

    }, 400);

    if(occupation.innerText == occupationContent){
        clearInterval(toggleInterval);
    }
};

let writingAnim = (target, content)=> {
    for (let i = 0; i < content.length; i++) {
        setTimeout(() => {
            target.innerText += content[i];
        }, i * 100);
    }
};

function goUp(){
    window.scrollTo(0,0);
}

writingAnim(occupation, occupationContent);
toggleLine();

// const me = {
//     name: "Rayane Maati",
//     occupation: "Software Enginnering Student",
//     hobby: "Programming",
//     age: "n/a"
// }