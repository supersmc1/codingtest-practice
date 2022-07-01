//var :예전 버전에서 있었던 변수 선언방식,잔재되어있고,다운그레이드

//var : function scope : 함수 영역으로만 처준다
      //:함수를 제외한 영역은 안먹힌다

/*var a = '바입니다'
var a = '어라?'
console.log(a)
let b = '랫입니다'
b = '마음이 변했습니다'
console.log(b)
*/
/*const c = '대입을 무언가 해주어야한다'
const c = '에러'*/
//네임스페이스에서 중복이 일어났다 
//네임스페이스가 다르면 같은이름의 변수 상수를 사용할수있다
//절대로 권장하진 않는다
//var -> let : 99프로
//let -> const : 변하지않게하려고
//데이터 타입을 변하게 못한다
//데이터타입이 배열이면, 그안에 원소로 무언가 추가하는 종료의 일은 가능하다

//옛날코드는 = 원형 
//1.원리를 이해하기 좋다
//2.'문제해결능력' 에서 큰문제가 생길 수 있다
//var : 함수의 영역을 구분한다 : function scope
//var : 함수영역외에는 무시하는 것이 문제 
//let,const : {} 중괄호 영역을 구분한다 : lexical scope

//유연해서 어렵다 = this 는 무엇일지 모르니 콘솔만 확인하면 완료다
function one(element){
 element.addEventListener('click',function(){
  console.log(this);
 })
}

function two(element){
  element.addEventListener('click',()=>{
    console.log(this)
  })
}

function three(element){
  let getvalue = element.map((element)=>{element})
}

/*화살표함수는 매개변수가 하나일떄 소괄호를 안써도 된다
두개부터는 소괄호를 쓴다
(a)=>{}
return 키워드를 안써도 리턴이 되는경우가 있다
{return data} : 아무런 변형 없이 리턴만 할것이라면 키워드를 삭제해도 된다
{앞중괄호 다음에 return 이 붙어있다면 리턴을 지워도 된다}
비권장
*/



/*유연해서 어렵다 = this는 무엇일지 모르니 콘솔만 확인하면 완료
()=>{} 화살표함수가 가지는 편의성
사용을 다르게하려고 this 역할을 바꾸어 놓았다
선언문 function(){}this
리터럴(표현식)this
여러함수를 한번에 묶어서 처리할떄*/

//event.object = 안에 this 가 들어있다
/*this는 진짜 어지간하면 쓰지말자:
this를 써야만 할때 외에는 쓰지말자:
개발자가 힘들어서*/

