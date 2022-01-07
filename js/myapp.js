
var str="Hello to everyone"
var xx = str.charAt(4)
console.log(xx)




let  dtext=/find/i
let stats="Please Find the dog"
var result=dtext.test(stats)
console.log(result)



function get_text(){
var data=document.getElementById('tdata').value
//alert(data)
document.getElementById('stc').innerHTML=data
//document.getElementById('stcText').innerHTML="<h1 style='color:red'>String length is ,"+data.length+"<br>"+data[4]+"</h1>"
document.getElementById('stcText').innerHTML="<h1 style='color:red'> "+data.charAt(4)+"</h1>"

}




function join_text(){
var data=document.getElementById('tdata').value
var data2=document.getElementById('tdata2').value
//alert(data)
document.getElementById('stc').innerHTML=data.concat(data2)

}

function check_email(){

var check=document.getElementById('tdata2').value
document.getElementById('stc').innerHTML=check.search("@")
var chkval=check.search("@")
if(chkval==-1){
document.getElementById('stcText').innerHTML="<h1 style='color:red'> &#128078; Ooops! invalid email</h1>"
}

if(chkval!=-1){
document.getElementById('stcText').innerHTML="<h1 style='color:blue'> &#128077; valid email</h1>"
}



}


function action(){
var d1=document.getElementById('etr_1').value
var d2=document.getElementById('etr_2').value
//alert(data)
document.getElementById('stc').innerHTML=d1<d2 || d1>d2
//document.getElementById('stcText').innerHTML="<h1 style='color:red'>String length is ,"+data.length+"<br>"+data[4]+"</h1>"
//document.getElementById('stcText').innerHTML="<h1 style='color:red'> "+data.charAt(4)+"</h1>"

}

//>
//<
//>=
//<=


var person1={'name':'Tola',
'age':27,'email':'tola@yahoo.com',
'phone':23480976543
}
var person2={'name':'Tunmise',
'age':32,'email':'tunmise@yahoo.com',
'phone':23480976543
}
var person3={'name':'Niyi',
'age':37,'email':'olaniyi@yahoo.com',
'phone':23480976543
}
console.log(person1.name)
console.log(person1.email)
var listed=[1,2,3,4,5,6,7,8,90,]
var persons=[person3,person2,person1]
var pchk=[person3.age,person2.age,person1.age]
//console.log(persons)
console.log(pchk)
function dochk(age){return age>=21}
console.log(pchk.every(dochk))

function chgclr(){
document.getElementById('dxt').style.color="green"
	
	
}
