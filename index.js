function add(){
    var act=0,b=0;
    act=myform.mytext.value;
    b=act.charAt(act.length-1);
   
    
    if(b =='+' ||b =='-' ||  b =='*' || b =='%' || b =='/'){
        myform.mytext.value=act.substring(0,act.length-1);
        myform.mytext.value+='+';
    }else{
        myform.mytext.value+='+';
    }
}

function sub(){
    var act=0,b=0;
    act=myform.mytext.value;
    b=act.charAt(act.length-1);
   
    if( b =='-' || b=='+' || b=="*" || b=='%' || b=='/'){
        myform.mytext.value=act.substring(0,act.length-1);
        myform.mytext.value+='-';
    }else{
        myform.mytext.value+='-';
    }
}

function div(){
    var act=0,b=0;
    act=myform.mytext.value;
    b=act.charAt(act.length-1);
  
    if(b=='/' || b=='-' || b=='+' || b=="*" || b=='%' ){
        myform.mytext.value=act.substring(0,act.length-1);
        myform.mytext.value+='/';
    }else{
        myform.mytext.value+='/';
    }
}


function mal(){
    var act=0,b=0;
    act=myform.mytext.value;
    b=act.charAt(act.length-1);
//    alert(b);
    if(b=='*' || b=='-' || b=='+' ||  b=='%' || b=='/'){
        myform.mytext.value=act.substring(0,act.length-1);
        myform.mytext.value+='*';
    }else{
        myform.mytext.value+='*';
    }
}