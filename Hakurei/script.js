// let options = {
//     Strings:[
//         '𝕸𝖆𝖘𝖒𝖊𝖗 𝖈𝖑𝖆𝖘𝖘',
//     ],

//     typeSpeed:100,
//     backSpeed:50,
//     loop:true
// };
// new typed('#meclass',options);


//  $("input[name='inputid']").val();
//用户名与密码
function stat(){
    let pwd = document.getElementById("II01").value;
    let pwd2 = document.getElementById("II02").value;

    if(pwd == "xtandec"&&pwd2 == "gmtxdy"){
        // alert("登录成功");
        window.location.href ='./blue.html'
    }else{
        alert("Wrong password,please login again");
    }

 }


    let shouye = document.getElementById('shouye').value;
    shouye.textContent = '《绿洲》'


