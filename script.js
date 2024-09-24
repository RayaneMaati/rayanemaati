console.log("Running...");
let fName = document.querySelector(".fullName");
let occupation = document.querySelector(".occupation");
let cLine = document.querySelector(".cursorLine");

const content = "Rayane" + '\xa0' + "Maati";
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

        if(fName.innerText == content){
            cLine.style.display = "none";
            clearInterval(toggleInterval);
        }

    }, 400);

    if(fName.innerText == content){
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

writingAnim(fName, content);
writingAnim(occupation, occupationContent);
toggleLine();
