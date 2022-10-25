//1. 함수가 어떻게 사용되는지
//2. 함수의 사용법
//3. 데이터의 흐름
//4. html요소를 자바스크립트로 컨트롤 하는법


//alert("TEST - main.js connected");
//alert 또는 console.log로 자바스크립트 파일이 html파일과 연결된건지 확인 후 코딩 ****
let target = document.querySelector("#dynamic");
//console.log(target.textContent);
//Document.getElementById("");


function randomString(){
  let stringArr = ["Learn to HTML", "Learn to CSS", 
  "Learn to Javascript", "Learn to Python", "Learn to Ruby","Learn to React"];

  // 배열안에 5개의 문자열이 들어가있다.
  Math.floor(Math.random() * stringArr.length) 
  // console.log("stringArr.length : " + stringArr.length); // 배열.length는 안에 데이터의 수 = 5 
  // console.log("Math.random() : "  + Math.random()); // 0 ~ 1 미만의 소숫점을 준다. 최소값 0 최대값 0.9999
  // console.log("Math.random() * stringArr.length : " + Math.random() * stringArr.length); //최소값 0, 최대값 4
  // console.log("Math.floor(Math.random() * stringArr.length) : "  + Math.floor(Math.random() * stringArr.length));
  //stringArr[0] -> "Learn to HTML"

  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  // let temp = selectStringArr[1];
  // let temp2 = selectStringArr[2];
  // selectStringArr[1] = " ";
  // selectStringArr[2] = temp;
  // selectStringArr[3] = " ";
  // selectStringArr[4] = temp2;

  // console.log("selectStringArr : " + selectStringArr);
  // console.log("selectStringArr.length : " + selectStringArr.length);
  return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
  //console.log("randomArr : " + randomArr);
  if(randomArr.length > 0){ // randomArr에 값이 있는지 확인 
    //console.log("randomArr.shift() : " + randomArr.shift());
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    },80);
  }else{
    setTimeout(resetTyping, 300);
  }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
  target.classList.toggle("active");
}
setInterval(blink, 500);