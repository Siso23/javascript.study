
// 1.New Object //엉뚱한 값이 들어갈 경우 예상치 못한 값이 출력될 수 있기 때문에 사용하지 않는다.
var obj = new Object();
console.log(typeof obj);
console.log(obj.constructor === Object);

obj.name = 'Bonjour';
obj.age = 123 ;
console.log(obj);

// String, bool, number 예외적으로
var s = new Object('str');
console.log(s);

//위에 방법은 절대 안써요
console.log("======================================");

//2번째 리터럴 방식 var a = 5; (우측에 있는 값을 좌측에 바로 표시해주는 것 을 리터럴 방식이라고 표현한다.)
var obj2 = {
    //정보들을 다 갖게된다.
    name : 'abc',
    age : 123
};
console.log(typeof obj2);
console.log(obj2.constructor === Object);
console.log(obj2);

//  어떨때 쓰느냐?
//  1.namespace 모듈화
//  2.option값
console.log("======================================");

//  3. 생성자 함수 new (이름은 함수지만 얘도 객체)
//  ex) 붕어빵 / 붕어빵틀(생성자 함수) -> 틀을 하나 만들어서 => 붕어빵 (같은걸 여러개 찍어내기 좋음)
//  생성자 함수는 무조건 대문자로 시작

var Person = function(name){ //지금의 name은 아무 의미 x
    this.name = name; //지금의 this는 Person 나 자신
};
//생성자 함수는 new로 만들어요
var p1 = new Person('영희');
var p2 = new Person('철수');
var p3 = new Person('짱구');

console.log(p1.name);
console.log(p2.name);
console.log(p3.name);

console.log("======================================");

//객체의 추가 삭제 탐색 갱신
var obj3 = {};
    obj3.name='asd';
    console.log(obj3);

    obj3.age = 2000;
    console.log(obj3);
    console.log('age를 삭제할거에요');
    delete obj3.age;
    console.log(obj3);

console.log("======================================");

//객체는 없는 값을 찍으면 만들고(추가를하고) , 있는값을 찍으면 덮어씌워서 갱신(업데이트)된다.

obj3.age =3000; //obj3["age"]=3000; 같다.
obj3.temp = 'empty';


//탐색 for in-> 반드시 변수필요
var key;  //var key=undefined와 같음
for(key in obj3){
    console.log("key: " + key + " value :" + obj3[key]);
}
console.log("======================================");

//접근 2개 (. / [])
var obj4 = {
    "first-name" : "Bonjour",
    "second-name" : "shinhye"
};

//console.log(obj4.first_name); // 오류남
console.log(obj4["first-name"]); //-를 연산부호로 인식하기에 스트링 처리 해줘야한다.
console.log(obj4["second-name"]);
console.log("======================================");

//for in 방지 (예외처리를 통해 내가 작성한 값들만 뽑아 오기 위한 과정)
var key;  //var key=undefined와 같음
for(key in obj3){
    if(obj3.hasOwnProperty(key)){
        console.log("key: " + key + " value :" + obj3[key]);
    }
}
console.log("======================================");

//생성자 함수는 new
var p5 = Person('바보');
console.log(p5); //아무것도 안만들어져요, 객체x

console.log("======================================");
//new를 강제화 하는 패턴
var Person = function(name){
    if(!(this instanceof Person)){ //instanceof > 생성자 확인 하기 용 ( 오른쪽에 있는 것이 왼쪽에 있는걸로 만들어 졌는가)
        return new Person(name);
    }
    this.name=name;
};
var p6 = new Person('바보바보');
console.log(p6);