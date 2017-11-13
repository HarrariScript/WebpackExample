let paraShown = false



let togglebtnEvent = () => {
    paraShown = ! paraShown ;
    dispayParaBtn();
};

let dispayParaBtn = () => {
    paraShown? paragraph.style.display = 'block' : paragraph.style.display = 'none'
    paraShown? showParaBtn.textContent = "hide"  : showParaBtn.textContent = "show"
 }

showParaBtn.addEventListener('click', togglebtnEvent);
