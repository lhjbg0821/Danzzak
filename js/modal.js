var modals = document.getElementsByClassName("modal");

var btns = document.getElementsByClassName("btn");

var spanes = document.getElementsByClassName("close");
var funcs = [];


//Modal 띄우고 닫는 클릭이벤트 정의 
function Modal(num) {
    return function() {
        //내용 클릭 시 Modal 띄움
        btns[num].onClick = function() {
            modals[num].style.display = "block";
            console.log(num);
        };

        //닫기 버튼 클릭 시 Modal 닫기
        spanes[num].onClick = function() {
            modals[num].style.display = "none";
        };
    };
}


for (var i = 0; i<btns.length; i++) {
    funcs[i] = Modal(i);
}

for (var j = 0; j<btns.length; j++) { 
    funcs[j]();
}

window.onClick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
};