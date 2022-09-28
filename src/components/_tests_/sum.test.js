const Word = require("./wordWhithNumb");
const PasGen = require("./Lenght_test");
var sm = "abcdefghijklmnopqrstuvwxyz", sm_cifr = "1234567890" , sm_tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",sm_spec = "!@#$%^&*?/<>";
test("sm_lenght", () => {
    expect(PasGen(2)).toBe(2);
  });
test("sm_numb", ()=>{
    var sm_forSecTest="";
sm_forSecTest=sm_forSecTest+sm_cifr+sm;
var flag=true;
var i=3,asd;
asd=Word(i,1);
for(i=0;i<3;i++){
    if((sm_forSecTest.includes(asd[i]))==false)
    flag==false;
}
    expect(flag==true);
})
test("", () => {
    var sm_forSecTest="";
    sm_forSecTest=sm_forSecTest+sm_spec+sm;
    var flag=true;
    var i=3,asd;
    asd=Word(i,2);
    for(i=0;i<3;i++){
        if((sm_forSecTest.includes(asd[i]))==false)
        flag==false;
    }
    expect(flag==true);
  });
  test("sm_numb", ()=>{
    var sm_forSecTest="";
sm_forSecTest=sm_forSecTest+sm_tab+sm;
var flag=true;
var i=3,asd;
asd=Word(i,3);
for(i=0;i<3;i++){
    if((sm_forSecTest.includes(asd[i]))==false)
    flag==false;
}
    expect(flag==true);
})
test("sm_numb", ()=>{
    var sm_forSecTest="";
sm_forSecTest=sm_forSecTest+sm_spec+sm+sm_cifr;
var flag=true;
var i=3,asd;
asd=Word(i,4);
for(i=0;i<3;i++){
    if((sm_forSecTest.includes(asd[i]))==false)
    flag==false;
}
    expect(flag==true);
})