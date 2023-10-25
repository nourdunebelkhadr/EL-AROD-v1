

 const Button = document.querySelector('button');
 const Result=document.getElementById('result');
 const Bahr=document.getElementById('bahr');
 const Container=document.querySelector('#container');
 const Main=document.getElementById('main');
 
 const S=document.getElementById('S');
 const D=document.getElementById('D');
 const B=document.getElementById('B');
 const K=document.getElementById('K');
 const Aala=document.getElementById('aala');

 const S2=document.getElementById('S2');
 const D2=document.getElementById('D2');
 const B2=document.getElementById('B2');
 const K2=document.getElementById('K2');
 const Aala2=document.getElementById('aala2');

 const taweel='الطويل';
 const Madid='المديد'; 
 const BAS='البسيط';
 const Waf='الوافر';
 const Kamil='الكامل';
 const Hazraj='الهزرج';
 const Rajaz='الرزج';
 const Ramal='الرمل';
 const Sariaa='السريع';
 const Monsaih='المنسرح';
 const Khafif='الخفيف';
 const Modariaa='المضارع';
 const Moktadib='المقتضب';
 const Moj='المجتث';
 const Mot='المتقارب';
 const Motadarak='المتدارك';

 const kt1='صحيح(ة)'; const     kt2='مقبوض(ة)';const kt3='محذوف(ة)';
 const Mkfofa='مكفوف(ة)';const  mkta='مقطوع(ة)'; const mkhb='مخبون(ة)';
 const Mksora='مقصور(ة)'; const Mabtora ='مبثور(ة)';const Mktofa= 'مقطوفة دائما';
 const Maaso='معصوب(ة)'; const  AHadd='أحذ مضمر'; const Hadaa='حذاء';
 const Moda='مذيل'; const     Mora='مرفل'; const MatW='(مطوي(ة'; 
 const MakB='مخبول(ة)'; const   MtMk='مطوية  مكسوفة' ; const Aslam='أصلم'; 
 const MtMwkof='مطوي موقوف'; const MkhMksofa='مخبولة مكسوفة';const MMksor= 'مخبون مقصور';
 const Mksofa='مكسوف(ة)'; const Mwkofa='موقوف(ة)'; const MTachaite='متشعث(ة)';
 const MMkhbn='محذوف ذخله الخبن'; const Abtar='أبتر';

 const ADDKhbn='  ذخله(ا)  زحاف الخبن ';
 const ADDTy='  ذخله(ا) زحاف  الخبن ';
 const ADDKbl='  ذخله(ا)  زحاف الخبن ';

 const Aila='الزحاف الذي ذخل على البيت هو :';

 const ManHo='منهوك'; const Machto='مشطور'
 const Tam='تام';  const Mj='مجزوء'; const ShihM='صحيح مذيل';
 const Mosbak='مسبغ';

 /*العلل والزواحف */
 const Aa='الخبن'; const Ab='الطي'; const Ac='الخبل';  const Kap='القبض'; const Kaf='الكف';const Asp='العصب'; const Chakl='الشكل'; const Kasf='الكسف';const Tachaite='التشعيث';
 const Edmare='الإضمار';

 //---------------------------------------------------
function send1(){
  const text=document.getElementById('text').value;
  var convertedText = text.split('');
  console.log(convertedText);
  var charCodeArray = [];
  var mot=[];
    for (var i = 0; i < convertedText.length; i++) {
    var charCode = convertedText[i].charCodeAt(0);
    charCodeArray.push(charCode);
  }
  charCodeArray=charCodeArray.filter(item => item !== 32);
  console.log(charCodeArray);
      const chunkSize = 2; // حجم الأجزاء المراد تقسيم المصفوفة إليها
      const chunks = [];
      for (let i = 0; i < charCodeArray.length; i += chunkSize) {
      const chunk = charCodeArray.slice(i, i + chunkSize);
      chunks.push(chunk);
      console.log(chunks);
}
    // Assuming charCodeArray and convertedText are arrays of equal length
    
    chunks.forEach((element, index) => {  
      if (
        JSON.stringify(element) === JSON.stringify([1575, 1618])||
        JSON.stringify(element) === JSON.stringify([1608, 1618])||
        JSON.stringify(element) === JSON.stringify([1610, 1618])
        ) 
       {
        mot.push('0');
      }else if(JSON.stringify(element[1]) == 1618 ){
        mot.push('0');
      } else if(JSON.stringify(element[1]) >= 1614 && JSON.stringify(element[1]) < 1617){
        mot.push('|');
      }else if(JSON.stringify(element[0]) == 1575|JSON.stringify(element[0]) == 1608||JSON.stringify(element[0]) == 1610){
        mot.push('0');
      }
    })
      console.log(mot);
      S.textContent = mot.join('.');
      console.log(S.innerText);  

      D.textContent = '  ';
      B.textContent= ' ';
      K.textContent= '  ';
     Aala.textContent='  ';       
/*الطويل------------------------------------------------------------------*/ 
/*صحيحة */
   if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = ' فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  ';
    B.textContent=taweel;
    K.textContent=kt1; 
}
  else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  ';
     B.textContent=taweel;
     K.textContent=kt1; 
     Aala.textContent='العلة التي ذخلت على البيت هي :'+Kap;
}
   else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  ';
     B.textContent=taweel;
     K.textContent=kt1;
     Aala.textContent='العلة التي ذخلت على البيت هي :'+Kap;
}
   else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  ';
    B.textContent=taweel;
    K.textContent=kt1;
     Aala.textContent=Aila+Kap;
}

/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  ';
  B.textContent=taweel;
  K.textContent=kt2; 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  ';
  B.textContent=taweel;
  K.textContent=kt2; 
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  ';
  B.textContent=taweel;
  K.textContent=kt2;
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
 D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  ';
 B.textContent=taweel;
 K.textContent=kt2;
  Aala.textContent=Aila+Kap;
}

/*محذوفة*/
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  ';
  B.textContent=taweel;
  K.textContent=kt3; 
  Aala.textContent=Aila+Kap;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  ';
  B.textContent=taweel;
  K.textContent=kt3; 
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  ';
  B.textContent=taweel;
  K.textContent=kt3;
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
 D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  ';
 B.textContent=taweel;
 K.textContent=kt3;
  Aala.textContent=Aila+Kap;
}
      /*البسيط ------------------------------------------------------------------*/ 
       /*البسيط التام */
       /*عروضه صحيحة */
   if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
} 
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلٌنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
} 

  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ab;
}
   else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}


 /*عروضه مخبونة */

 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
} 
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
} 

else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa +' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa +' و '+Ac;
}

/*عروضه مقطوعة */
 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = '  مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
} 
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
} 

  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ab;
}
   else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  فَاعِلْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}
/*البسيط  المجزوء*/
  /*  1 عروضه صحيحة */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
}  
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa;
}
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){ 
    D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Ac;
}
 /*  عروضه صحيحة  مذيل */
 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Ac;
}
/*   عروضه مقطوعة  */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
/*  مخلع البسيط */
const MkB='مخلع البسيط'
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Ac;
}
/*المديد------------------------------------------------------------------ */
/*صحيح  */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
/*محذوفة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Aa;
}
/*مقصورة  */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Aa;
}
/*مبثورة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Aa;
}
/*الوافر------------------------------------------------------------------ */
/*تام */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
  Aala.textContent=Aila+Asp;
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
  Aala.textContent=Aila+Asp;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
  Aala.textContent=Aila+Asp;
}
/*مجزوء */
/*صحيحة  */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Asp;
}
/*معصوبة */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=Maaso;
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=Maaso;
  Aala.textContent=Aila+Asp;
}
/*الكامل------------------------------------------------------------------ */
  /*التام */
    /*عروضه صحيحة */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
 /*-------- الضرب مقطوع -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
  /*-------- الضرب  أحذ مضمر -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
/*-------- حذاء  -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
/*مجزوء  الكامل  */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ    ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ    ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}

else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ    ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
/*---الضرب مقطوع--- */
 if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ  مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=mkta;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ  مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ  مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
/*---الضرب مذيل--- */
 if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَانْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Moda;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَانْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Moda;
  Aala.textContent=Aila+Edmare;
}
if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَانْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Moda;
  Aala.textContent=Aila+Ab;
}
/*----الضرب مرفل--- */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَاتُنْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Mora;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَاتُنْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Mora;
  Aala.textContent=Aila+Edmare
}
if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَاتُنْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Mora;
  Aala.textContent=Aila+Ab;
}
/*الهزرج-------------------------------------*/
if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُنْ مَفَاعِيلُنْ   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُ مَفَاعِيلُنْ   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf;
}
/*------*/
if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُنْ مَفَاعِي   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُ مَفَاعِي   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf;
}
/*الرزج------------------------------------------------------------------------------*/
/*العروض  صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*العروض  أو الضرب ذخلهما زحاف من زحافات الحشو */
/*الخبن */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*الطي */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*الخبل */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*مقطوعة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*المجزوء  */
/*صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent='  ';
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
/*مخبونة */
if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
/*مطوية */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent='  ';
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
/*مخبولة */
if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa;
}
/*منهوك الرزج */
if(S.innerText==='|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ     ';
  B.textContent=Rajaz+' '+ManHo;
  K.textContent=kt1;
}
/*الرمل -------------------------------------------------------------- */
  /*تام */
    /*العروض صحيحة */
    if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
      K.textContent=kt1;
      B.textContent=Ramal+' '+Tam;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
      K.textContent=kt1;
      B.textContent=Ramal+' '+Tam;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
      K.textContent=kt1;
      B.textContent=Ramal+' '+Tam;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf;
    }

    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+ Chakl;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+ Chakl;
    }
    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+ Chakl;
    }

    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Chakl+' و '+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Chakl+' و '+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf+' و '+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf+' و '+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf+' و '+Chakl;
    }
    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf+' و '+Chakl;
    }
 /*العروض مخبونة */
 if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ    ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}

else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf;
}

else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Chakl;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Chakl;
}
else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Chakl;
}

else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Chakl+' و '+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Chakl+' و '+Aa;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf+' و '+Chakl;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَعِلَاتُنْ   ';
  B.textContent=Ramal+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Kaf+' و '+Chakl;
}

    /*العروض محذوفة */
    if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf;
    }

    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+ Chakl;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+ Chakl;
    }
    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+ Chakl;
    }

    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Chakl+' و '+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Chakl+' و '+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf+' و '+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf+' و '+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf+' و '+Chakl;
    }
    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf+' و '+Chakl;
    }
    /*العروض مقصورة */
    if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf;
    }

    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+ Chakl;
    }
    else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+ Chakl;
    }
    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+ Chakl;
    }

    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Chakl+' و '+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Chakl+' و '+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf+' و '+Aa;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf+' و '+Aa;
    }

    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf+' و '+Chakl;
    }
    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.0'){
      D.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلَاتْ   ';
      B.textContent=Ramal+' '+Tam;
      K.textContent=Mksora;
      Aala.textContent=Aila+Kaf+' و '+Chakl;
    }
    /*مجزوء  الرمل */
    /*صحيحة */
    if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُنْ  فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt1;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُنْ  فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt1;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُ  فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt1;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُ  فَاعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt1;
      Aala.textContent=Aila+ Chakl;
    }
    /*مخبونة */
    if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُنْ  فَعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=mkhb;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُنْ  فَعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=mkhb;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0'){
      D.textContent = ' فَاعِلَاتُ  فَعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=mkhb;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.|.|.0.|.|.|.|.0.|.0'){
      D.textContent = ' فَعِلَاتُ  فَعِلَاتُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=mkhb;
      Aala.textContent=Aila+ Chakl;
    }
    /*محذوفة */
    if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُنْ  فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt3;
    }
    else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُنْ  فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt3;
      Aala.textContent=Aila+Aa;
    }
    else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَاعِلَاتُ  فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt3;
      Aala.textContent=Aila+Kaf;
    }
    else if(S.innerText==='|.|.|.0.|.|.0.|.|.0'){
      D.textContent = ' فَعِلَاتُ  فَاعِلُنْ   ';
      B.textContent=Ramal+' '+Mj;
      K.textContent=kt3;
      Aala.textContent=Aila+ Chakl;
    }
   /*مسبغ */
   if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.0'){
    D.textContent = ' فَاعِلَاتُنْ  فَاعِلَاتَانْ   ';
    B.textContent=Ramal+' '+Mj;
    K.textContent=Mosbak;
  }
  else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.0'){
    D.textContent = ' فَعِلَاتُنْ  فَاعِلَاتَانْ   ';
    B.textContent=Ramal+' '+Mj;
    K.textContent=Mosbak;
    Aala.textContent=Aila+Aa;
  }
  else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.0'){
    D.textContent = ' فَاعِلَاتُ  فَاعِلَاتَانْ   ';
    B.textContent=Ramal+' '+Mj;
    K.textContent=Mosbak;
    Aala.textContent=Aila+Kaf;
  }
  else if(S.innerText==='|.|.|.0.|.|.0.|.|.0.|.0.0'){
    D.textContent = ' فَعِلَاتُ  فَاعِلَاتَانْ   ';
    B.textContent=Ramal+' '+Mj;
    K.textContent=Mosbak;
    Aala.textContent=Aila+ Chakl;
  }
/*السريع ------------------------------------------------------------------ */
/*مطوية مكسوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa+' '+Tam;
  K.textContent=MtMk;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ab;
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ac;
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Ac +' و '+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMk;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

/*أصلم */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ab;
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ac;
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Ac +' و '+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
  B.textContent=Sariaa;
  K.textContent=Aslam;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

/*مطوي موقوف */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ab;
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ac;
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Ac +' و '+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
  B.textContent=Sariaa;
  K.textContent=MtMwkof;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

/*مخبولة مكسوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ab;
}

else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ac;
}

else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ac +' و '+Aa;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Ac +' و '+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
  B.textContent=Sariaa;
  K.textContent=MkhMksofa;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}

/*المنسرح ----------------------------------------------------------------- */
/*مطوية */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Aa +' و '+Ac;
}

else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab ;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab +' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab +' و '+Ac;
}

else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab ;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab ;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab ;
}

/*مقطوع */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Aa +' و '+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Aa +' و '+Ac;
}

else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Ab ;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Ab +' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Ab +' و '+Ac;
}

else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Ac ;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Ac ;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
  B.textContent=Monsaih+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+ Ac ;
}

/*منهوك المنسرح */
/*موقوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مَفْعُولَاتْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mwkofa;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُتَعِلُنْ مَفْعُولَاتْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mwkofa;
  Aala.textContent=Aila+ Ac ;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُسْتَعِلُنْ مَفْعُولَاتْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mwkofa;
  Aala.textContent=Aila+ Ab ;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ مَفْعُولَاتْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mwkofa;
  Aala.textContent=Aila+ Aa ;
}
/*مكسوفة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مَفْعُولُنْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mksofa;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مَفْعُولُنْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mksofa;
  Aala.textContent=Aila+ Ac ;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مَفْعُولُنْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mksofa;
  Aala.textContent=Aila+ Ab ;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مَفْعُولُنْ  ';
  B.textContent=Monsaih+' '+ManHo;
  K.textContent=Mksofa;
  Aala.textContent=Aila+ Aa ;
}
/* الخفيف تام ----------------------------------------------------*/
/*صحيحة*/
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa +' و '+Tachaite;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa +' و '+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kaf;
}

/*متشعثة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa +' و '+Tachaite;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa +' و '+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Kaf;
}

/*مخبونة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa +' و '+Tachaite;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa +' و '+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Kaf;
}
/*محذوفة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Aa ;
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Aa +' و '+Tachaite;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Tachaite;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Aa +' و '+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kaf;
}
/*محذوف مخبون */

if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Aa ;
}

else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Aa +' و '+Tachaite;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Tachaite;
}

else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Aa +' و '+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
  B.textContent=Khafif+' '+Tam;
  K.textContent=MMkhbn;
  Aala.textContent=Aila+ Kaf;
}
/*الخفيف المجزوء */
/*صحيحة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ    ';
  B.textContent=Khafif+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ    ';
  B.textContent=Khafif+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
/*مخبون */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ    ';
  B.textContent=Khafif+' '+Mj;
  K.textContent=mkhb;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ    ';
  B.textContent=Khafif+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
/*مخبون مقصور */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لْ    ';
  B.textContent=Khafif+' '+Mj;
  K.textContent=MMksor;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ مُتَفْعِ لْ    ';
  B.textContent=Khafif+' '+Mj;
  K.textContent=MMksor;
  Aala.textContent=Aila+ Aa ;
}
/*المضارع ------------------------------------------------------------------ */
if(S.innerText==='|.|.0.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مَفَاعِيلُنْ فَاعِ لَاتُنْ   ';
  B.textContent=Modariaa+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مَفَاعِلُنْ فَاعِ لَاتُنْ   ';
  B.textContent=Modariaa+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Kap  ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = ' مَفَاعِيلُ فَاعِ لَاتُنْ   ';
  B.textContent=Modariaa+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kaf ;
}
/*المقتضب-------------------------------------------------------------------------- */
if(S.innerText==='|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مَفْعُولَاتُ مُسْتَعِلُنْ  ';
  B.textContent=Moktadib+' '+Mj;
  K.textContent=MatW;
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مَفَاعِيلُ مُسْتَعِلُنْ  ';
  B.textContent=Moktadib+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+ Aa ;
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ مُسْتَعِلُنْ  ';
  B.textContent=Moktadib+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+ Ab ;
}
/* المجتث-------------------------------------------------------------------------------- */
/*صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Moj+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
  B.textContent=Moj+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
/*مخبونة */
if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Moj+' '+Mj;
  K.textContent=mkhb;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
  B.textContent=Moj+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
/*متشعثة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = '   مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Moj+' '+Mj;
  K.textContent=MTachaite;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = '   مُتَفْعِ لُنْ فَالَاتُنْ   ';
  B.textContent=Moj+' '+Mj;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}

/*المتقارب تام --------------------------------------------------------------------- */
/*صحيحة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kap ;
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Kap ;
}

/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولُنْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}

/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D.textContent = ' فَعُولُ فَعُولُ فَعُولُنْ فَعُولُ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt2;
  Aala.textContent=Aila+ Kap ;
}

/*مقصور */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
  Aala.textContent=Aila+ Kap ;
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Mksora;
  Aala.textContent=Aila+ Kap ;
}

/*محذوفة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعَلْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}

/*أبتر */
/*محذوفة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}

else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعْ   ';
  B.textContent=Mot+' '+Tam;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}

/*المجزوء */
/*محذوفة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ  فَعَلْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=kt3;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '    فَعُولُ فَعُولُ فَعَلْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '    فَعُولُنْ فَعُولُ فَعَلْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '    فَعُولُ فَعُولُنْ فَعَلْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=kt3;
  Aala.textContent=Aila+ Kap ;
}
/*أبتر */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعُولُنْ فَعُولُنْ  فَعْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=Abtar;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0'){
  D.textContent = '    فَعُولُ فَعُولُ فَعْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = '    فَعُولُنْ فَعُولُ فَعْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '    فَعُولُ فَعُولُنْ فَعْ   ';
  B.textContent=Mot+' '+Mj;
  K.textContent=Abtar;
  Aala.textContent=Aila+ Kap ;
}
/*المتدارك--------------------------------------------------------------------------------- */
/*تام */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=Abtar;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
/*--*/
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
/*----*/
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Tachaite ;
}
/* */
/*متشعثة */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Aa ;
}
/*--*/
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
/*----*/
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.0.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=MTachaite;
  Aala.textContent=Aila+ Tachaite ;
}
/*مخبونة */
if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
/*--*/
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
/*----*/
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa ;
}
/*--*/
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
/*----*/
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
else if(S.innerText==='|.0.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B.textContent=Motadarak+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Tachaite ;
}
  }






 
 //---------------------------------------------------
function send2(){
  const text2=document.getElementById('text2').value;

  console.log(text2);

var convertedText = text2.split('');
console.log(convertedText);
var charCodeArray = [];
var mot=[];
    for (var i = 0; i < convertedText.length; i++) {
    var charCode = convertedText[i].charCodeAt(0);
    charCodeArray.push(charCode);
  }
  charCodeArray=charCodeArray.filter(item => item !== 32);
  console.log(charCodeArray);
      const chunkSize = 2; // حجم الأجزاء المراد تقسيم المصفوفة إليها
      const chunks = [];
      for (let i = 0; i < charCodeArray.length; i += chunkSize) {
      const chunk = charCodeArray.slice(i, i + chunkSize);
      chunks.push(chunk);
      console.log(chunks);
}
    // Assuming charCodeArray and convertedText are arrays of equal length
    
    chunks.forEach((element, index) => {  
      if (
        JSON.stringify(element) === JSON.stringify([1575, 1618])||
        JSON.stringify(element) === JSON.stringify([1608, 1618])||
        JSON.stringify(element) === JSON.stringify([1610, 1618])
        ) 
       {
        mot.push('0');
      }else if(JSON.stringify(element[1]) == 1618 ){
        mot.push('0');
      } else if(JSON.stringify(element[1]) >= 1614 && JSON.stringify(element[1]) < 1617){
        mot.push('|');
      }else if(JSON.stringify(element[0]) == 1575|JSON.stringify(element[0]) == 1608||JSON.stringify(element[0]) == 1610){
        mot.push('0');
      }
    })
      console.log(mot);
      S2.textContent = mot.join('.');
      console.log(S.innerText);  

      D2.textContent = '  ';
      B2.textContent= ' ';
      K2.textContent= '  ';
      Aala2.textContent='  ';       
/*الطويل------------------------------------------------------------------*/ 
/*صحيحة */
   if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
    D2.textContent = ' فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  ';
    B2.textContent=taweel;
    K2.textContent=kt1; 
}
  else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
     D2.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  ';
      B2.textContent=taweel;
      K2.textContent=kt1; 
    Aala2.textContent='العلة التي ذخلت على البيت هي :'+Kap;
}
   else  if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  ';
      B2.textContent=taweel;
      K2.textContent=kt1;
    Aala2.textContent='العلة التي ذخلت على البيت هي :'+Kap;
}
   else  if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
    D2.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  ';
     B2.textContent=taweel;
     K2.textContent=kt1;
    Aala2.textContent=Aila+Kap;
}

/*مقبوضة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D2.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  ';
   B2.textContent=taweel;
   K2.textContent=kt2; 
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D2.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  ';
   B2.textContent=taweel;
   K2.textContent=kt2; 
 Aala2.textContent=Aila+Kap;
}
else  if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  ';
   B2.textContent=taweel;
   K2.textContent=kt2;
 Aala2.textContent=Aila+Kap;
}
else  if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
 D2.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  ';
  B2.textContent=taweel;
  K2.textContent=kt2;
 Aala2.textContent=Aila+Kap;
}

/*محذوفة*/
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  ';
   B2.textContent=taweel;
   K2.textContent=kt3; 
 Aala2.textContent=Aila+Kap;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  ';
   B2.textContent=taweel;
   K2.textContent=kt3; 
 Aala2.textContent=Aila+Kap;
}
else  if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  ';
   B2.textContent=taweel;
   K2.textContent=kt3;
 Aala2.textContent=Aila+Kap;
}
else  if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
 D2.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  ';
  B2.textContent=taweel;
  K2.textContent=kt3;
 Aala2.textContent=Aila+Kap;
}
      /*البسيط ------------------------------------------------------------------*/ 
       /*البسيط التام */
       /*عروضه صحيحة */
   if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
} 
   else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلٌنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=kt1;
       Aala2.textContent=Aila+Aa;
} 

  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Ab;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Ab;
}
   else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Ab;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Ac;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+Ac;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+ Aa +' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=kt1;
    Aala2.textContent=Aila+ Aa +' و '+Ac;
}


 /*عروضه مخبونة */

 if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
} 
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkhb;
    Aala2.textContent=Aila+Aa;
} 

else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa +' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
   B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa +' و '+Ac;
}

/*عروضه مقطوعة */
 if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D2.textContent = '  مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
} 
   else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D2.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D2.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D2.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
}
   else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
         B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
         K2.textContent=mkta;
       Aala2.textContent=Aila+Aa;
} 

  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Ab;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Ab;
}
   else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Ab;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Ac;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+Ac;
}
  else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D2.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+ Aa +' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  فَاعِلْ ';
      B2.textContent=BAS +' '+'جاء هنا '+ Tam ;
      K2.textContent=mkta;
    Aala2.textContent=Aila+ Aa +' و '+Ac;
}
/*البسيط  المجزوء*/
  /*  1 عروضه صحيحة */
  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
}  
  else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D2.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Aa;
}
  else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D2.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Aa;
}
  else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D2.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Aa;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Aa+' و'+Ab;
}
  else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){ 
    D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Ab;
}
  else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Aa+' و '+Ac;
}
  else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
     B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
     K2.textContent=kt1;
   Aala2.textContent=Aila+Ac;
}
 /*  عروضه صحيحة  مذيل */
 if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
}  
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D2.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
  D2.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){ 
  D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=ShihM;
 Aala2.textContent=Aila+Ac;
}
/*   عروضه مقطوعة  */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
}  
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){ 
  D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ac;
}
/*  مخلع البسيط */
const MkB='مخلع البسيط'
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
}  
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Aa+' و'+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){ 
  D2.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
   B2.textContent=BAS +' '+'جاء هنا '+ Mj ;
   K2.textContent=MkB;
 Aala2.textContent=Aila+Ac;
}
/*المديد------------------------------------------------------------------ */
/*صحيح  */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Kaf+' و '+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
/*محذوفة */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt3;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt3;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt3;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلٌنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt3;
 Aala2.textContent=Aila+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلٌنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt3;
 Aala2.textContent=Aila+Kaf+' و '+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   ';
   B2.textContent=Madid;
   K2.textContent=kt3;
 Aala2.textContent=Aila+Aa;
}
/*مقصورة  */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   ';
   B2.textContent=Madid;
   K2.textContent=Mksora;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   ';
   B2.textContent=Madid;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   ';
   B2.textContent=Madid;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتْ   ';
   B2.textContent=Madid;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتْ   ';
   B2.textContent=Madid;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+Kaf+' و '+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   ';
   B2.textContent=Madid;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+Aa;
}
/*مبثورة */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   ';
   B2.textContent=Madid;
   K2.textContent=Mabtora;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   ';
   B2.textContent=Madid;
   K2.textContent=Mabtora;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَعِلُنْ   ';
   B2.textContent=Madid;
   K2.textContent=Mabtora;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَعِلُنْ   ';
   B2.textContent=Madid;
   K2.textContent=Mabtora;
 Aala2.textContent=Aila+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَعِلُنْ فَعِلُنْ   ';
   B2.textContent=Madid;
   K2.textContent=Mabtora;
 Aala2.textContent=Aila+Kaf+' و '+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَعِلُنْ   ';
   B2.textContent=Madid;
   K2.textContent=Mabtora;
 Aala2.textContent=Aila+Aa;
}
/*الوافر------------------------------------------------------------------ */
/*تام */
if( S2.textContent==='|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ فَعُولُنْ  ';
   B2.textContent=Waf+' '+Tam;
   K2.textContent=Mktofa;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ فَعُولُنْ  ';
   B2.textContent=Waf+' '+Tam;
   K2.textContent=Mktofa;
 Aala2.textContent=Aila+Asp;
}
else if( S2.textContent==='|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ فَعُولُنْ  ';
   B2.textContent=Waf+' '+Tam;
   K2.textContent=Mktofa;
 Aala2.textContent=Aila+Asp;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ فَعُولُنْ  ';
   B2.textContent=Waf+' '+Tam;
   K2.textContent=Mktofa;
 Aala2.textContent=Aila+Asp;
}
/*مجزوء */
/*صحيحة  */
if( S2.textContent==='|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ   ';
   B2.textContent=Waf+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ   ';
   B2.textContent=Waf+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Asp;
}
/*معصوبة */
if( S2.textContent==='|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ   ';
   B2.textContent=Waf+' '+Mj;
   K2.textContent=Maaso;
}
else if( S2.textContent==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ   ';
   B2.textContent=Waf+' '+Mj;
   K2.textContent=Maaso;
 Aala2.textContent=Aila+Asp;
}
/*الكامل------------------------------------------------------------------ */
  /*التام */
    /*عروضه صحيحة */
if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
 /*-------- الضرب مقطوع -----*/
if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
  /*-------- الضرب  أحذ مضمر -----*/
if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=AHadd;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
/*-------- حذاء  -----*/
if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
else if( S2.textContent==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
   B2.textContent=Kamil+' '+Tam;
   K2.textContent=Hadaa;
 Aala2.textContent=Aila+Ab+' و '+Edmare;
}
/*مجزوء  الكامل  */
if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ    ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ    ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Edmare;
}

else if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ    ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
/*---الضرب مقطوع--- */
 if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ  مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=mkta;
}
else if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ  مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ  مُتَفَاعِلْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Edmare;
}
/*---الضرب مذيل--- */
 if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَانْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=Moda;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَانْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=Moda;
 Aala2.textContent=Aila+Edmare;
}
if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَانْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=Moda;
 Aala2.textContent=Aila+Ab;
}
/*----الضرب مرفل--- */
if( S2.textContent==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَاتُنْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=Mora;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَاتُنْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=Mora;
 Aala2.textContent=Aila+Edmare
}
if( S2.textContent==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D2.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَاتُنْ   ';
   B2.textContent=Kamil+' '+Mj;
   K2.textContent=Mora;
 Aala2.textContent=Aila+Ab;
}
/*الهزرج-------------------------------------*/
if( S2.textContent==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = 'مَفَاعِيلُنْ مَفَاعِيلُنْ   ';
   B2.textContent=Hazraj+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = 'مَفَاعِيلُ مَفَاعِيلُنْ   ';
   B2.textContent=Hazraj+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Kaf;
}
/*------*/
if( S2.textContent==='|.|.0.|.0.|.0.|.|.0.|.0'){
  D2.textContent = 'مَفَاعِيلُنْ مَفَاعِي   ';
   B2.textContent=Hazraj+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = 'مَفَاعِيلُ مَفَاعِي   ';
   B2.textContent=Hazraj+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Kaf;
}
/*الرزج------------------------------------------------------------------------------*/
/*العروض  صحيحة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
/*العروض  أو الضرب ذخلهما زحاف من زحافات الحشو */
/*الخبن */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
/*الطي */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
/*الخبل */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
/*مقطوعة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab+' و '+Ac;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa+' و '+Ab;
}
else  if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
else  if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ ';
   B2.textContent=Rajaz+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Aa+' و '+Ac;
}
/*المجزوء  */
/*صحيحة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent='  ';
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Aa;
}
/*مخبونة */
if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}
/*مطوية */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MatW;
 Aala2.textContent='  ';
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Aa;
}
/*مخبولة */
if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MakB;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَعِلُنْ مُتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Ac;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مُتَعِلُنْ    ';
   B2.textContent=Rajaz+' '+Mj;
   K2.textContent=MakB;
 Aala2.textContent=Aila+Aa;
}
/*منهوك الرزج */
if( S2.textContent==='|.0.|.0.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ     ';
   B2.textContent=Rajaz+' '+ManHo;
   K2.textContent=kt1;
}
/*الرمل -------------------------------------------------------------- */
  /*تام */
    /*العروض صحيحة */
    if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
       K2.textContent=kt1;
       B2.textContent=Ramal+' '+Tam;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
       K2.textContent=kt1;
       B2.textContent=Ramal+' '+Tam;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
       K2.textContent=kt1;
       B2.textContent=Ramal+' '+Tam;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf;
    }

    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+ Chakl;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+ Chakl;
    }
    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+ Chakl;
    }

    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Chakl+' و '+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Chakl+' و '+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf+' و '+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf+' و '+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf+' و '+Chakl;
    }
    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf+' و '+Chakl;
    }
 /*العروض مخبونة */
 if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ    ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Aa;
}

else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf;
}

else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Chakl;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Chakl;
}
else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُ فَعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Chakl;
}

else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Chakl+' و '+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Chakl+' و '+Aa;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf+' و '+Aa;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf+' و '+Aa;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf+' و '+Chakl;
}
else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَعِلَاتُنْ   ';
   B2.textContent=Ramal+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+Kaf+' و '+Chakl;
}

    /*العروض محذوفة */
    if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf;
    }

    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+ Chakl;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+ Chakl;
    }
    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+ Chakl;
    }

    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Chakl+' و '+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Chakl+' و '+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf+' و '+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf+' و '+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf+' و '+Chakl;
    }
    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf+' و '+Chakl;
    }
    /*العروض مقصورة */
    if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُ فَاعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf;
    }

    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُ فَاعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+ Chakl;
    }
    else if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُنْ فَعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+ Chakl;
    }
    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُ فَعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+ Chakl;
    }

    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُ فَعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Chakl+' و '+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُنْ فَعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Chakl+' و '+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُ فَعِلَاتُنْ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf+' و '+Aa;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُنْ فَاعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf+' و '+Aa;
    }

    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَاعِلَاتُ فَعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf+' و '+Chakl;
    }
    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0.0'){
      D2.textContent = ' فَعِلَاتُ فَاعِلَاتُ فَاعِلَاتْ   ';
       B2.textContent=Ramal+' '+Tam;
       K2.textContent=Mksora;
     Aala2.textContent=Aila+Kaf+' و '+Chakl;
    }
    /*مجزوء  الرمل */
    /*صحيحة */
    if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ  فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt1;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُنْ  فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُ  فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt1;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُ  فَاعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt1;
     Aala2.textContent=Aila+ Chakl;
    }
    /*مخبونة */
    if( S2.textContent==='|.0.|.|.0.|.0.|.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ  فَعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=mkhb;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُنْ  فَعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=mkhb;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0'){
      D2.textContent = ' فَاعِلَاتُ  فَعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=mkhb;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.|.|.0.|.|.|.|.0.|.0'){
      D2.textContent = ' فَعِلَاتُ  فَعِلَاتُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=mkhb;
     Aala2.textContent=Aila+ Chakl;
    }
    /*محذوفة */
    if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُنْ  فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt3;
    }
    else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُنْ  فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Aa;
    }
    else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَاعِلَاتُ  فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt3;
     Aala2.textContent=Aila+Kaf;
    }
    else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0'){
      D2.textContent = ' فَعِلَاتُ  فَاعِلُنْ   ';
       B2.textContent=Ramal+' '+Mj;
       K2.textContent=kt3;
     Aala2.textContent=Aila+ Chakl;
    }
   /*مسبغ */
   if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.0'){
    D2.textContent = ' فَاعِلَاتُنْ  فَاعِلَاتَانْ   ';
     B2.textContent=Ramal+' '+Mj;
     K2.textContent=Mosbak;
  }
  else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.0.|.0.0'){
    D2.textContent = ' فَعِلَاتُنْ  فَاعِلَاتَانْ   ';
     B2.textContent=Ramal+' '+Mj;
     K2.textContent=Mosbak;
   Aala2.textContent=Aila+Aa;
  }
  else if( S2.textContent==='|.0.|.|.0.|.|.0.|.|.0.|.0.0'){
    D2.textContent = ' فَاعِلَاتُ  فَاعِلَاتَانْ   ';
     B2.textContent=Ramal+' '+Mj;
     K2.textContent=Mosbak;
   Aala2.textContent=Aila+Kaf;
  }
  else if( S2.textContent==='|.|.|.0.|.|.0.|.|.0.|.0.0'){
    D2.textContent = ' فَعِلَاتُ  فَاعِلَاتَانْ   ';
     B2.textContent=Ramal+' '+Mj;
     K2.textContent=Mosbak;
   Aala2.textContent=Aila+ Chakl;
  }
/*السريع ------------------------------------------------------------------ */
/*مطوية مكسوفة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa+' '+Tam;
   K2.textContent=MtMk;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ab;
}

else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ac;
}

else if( S2.textContent==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}
else if( S2.textContent==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Ac +' و '+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMk;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

/*أصلم */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ab;
}

else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ac;
}

else if( S2.textContent==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}
else if( S2.textContent==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Ac +' و '+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُو   ';
   B2.textContent=Sariaa;
   K2.textContent=Aslam;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

/*مطوي موقوف */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ab;
}

else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ac;
}

else if( S2.textContent==='|.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}
else if( S2.textContent==='|.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Ac +' و '+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ مَفْعُلَاتْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MtMwkof;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

/*مخبولة مكسوفة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Aa;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ab;
}

else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ac;
}

else if( S2.textContent==='|.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}
else if( S2.textContent==='|.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ac +' و '+Aa;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Ac +' و '+Ab;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

else if( S2.textContent==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مُتَفْعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مُسْتَعِلُنْ فَعَلُنْ   ';
   B2.textContent=Sariaa;
   K2.textContent=MkhMksofa;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}

/*المنسرح ----------------------------------------------------------------- */
/*مطوية */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Aa +' و '+Ac;
}

else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab ;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab +' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مَفْعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab +' و '+Ac;
}

else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab ;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ مَفْعُولَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab ;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعُلَاتُ مُسْتَعِلُنْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab ;
}

/*مقطوع */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
}
else  if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Aa +' و '+Ab;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَفْعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Aa +' و '+Ac;
}

else  if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Ab ;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+Ab;
}
else if( S2.textContent==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Ab +' و '+Ac;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ مَفْعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Ab +' و '+Ac;
}

else  if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُسْتَفْعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Ac ;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ مَفْعُولَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Ac ;
}
else if( S2.textContent==='|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D2.textContent = ' مُتَعِلُنْ فَعُلَاتُ مُسْتَفْعِلْ    ';
   B2.textContent=Monsaih+' '+Tam;
   K2.textContent=mkta;
 Aala2.textContent=Aila+ Ac ;
}

/*منهوك المنسرح */
/*موقوفة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.0.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مَفْعُولَاتْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mwkofa;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.0.0'){
  D2.textContent = 'مُتَعِلُنْ مَفْعُولَاتْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mwkofa;
 Aala2.textContent=Aila+ Ac ;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.0.0'){
  D2.textContent = 'مُسْتَعِلُنْ مَفْعُولَاتْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mwkofa;
 Aala2.textContent=Aila+ Ab ;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.0.0'){
  D2.textContent = 'مُتَفْعِلُنْ مَفْعُولَاتْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mwkofa;
 Aala2.textContent=Aila+ Aa ;
}
/*مكسوفة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَفْعِلُنْ مَفْعُولُنْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mksofa;
}
else if( S2.textContent==='|.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَعِلُنْ مَفْعُولُنْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mksofa;
 Aala2.textContent=Aila+ Ac ;
}
else if( S2.textContent==='|.0.|.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُسْتَعِلُنْ مَفْعُولُنْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mksofa;
 Aala2.textContent=Aila+ Ab ;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = 'مُتَفْعِلُنْ مَفْعُولُنْ  ';
   B2.textContent=Monsaih+' '+ManHo;
   K2.textContent=Mksofa;
 Aala2.textContent=Aila+ Aa ;
}
/* الخفيف تام ----------------------------------------------------*/
/*صحيحة*/
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}

else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa +' و '+Tachaite;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa +' و '+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kaf;
}

/*متشعثة */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}

else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa +' و '+Tachaite;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa +' و '+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Kaf;
}

/*مخبونة */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}

else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa +' و '+Tachaite;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa +' و '+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Kaf;
}
/*محذوفة */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Aa ;
}

else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Aa +' و '+Tachaite;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Tachaite;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Aa +' و '+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَاعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kaf;
}
/*محذوف مخبون */

if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Aa ;
}

else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَالَاتُنْ مُتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Aa +' و '+Tachaite;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَالَاتُنْ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Tachaite;
}

else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Aa +' و '+Kaf;
}
else if( S2.textContent==='|.0.|.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُسْتَفْعِ لُنْ فَعِلُنْ   ';
   B2.textContent=Khafif+' '+Tam;
   K2.textContent=MMkhbn;
 Aala2.textContent=Aila+ Kaf;
}
/*الخفيف المجزوء */
/*صحيحة */
if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُسْتَفْعِ لُنْ    ';
   B2.textContent=Khafif+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُسْتَفْعِ لُنْ    ';
   B2.textContent=Khafif+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
/*مخبون */
if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لُنْ    ';
   B2.textContent=Khafif+' '+Mj;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لُنْ    ';
   B2.textContent=Khafif+' '+Mj;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
/*مخبون مقصور */
if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَاعِلَاتُنْ مُتَفْعِ لْ    ';
   B2.textContent=Khafif+' '+Mj;
   K2.textContent=MMksor;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' فَعِلَاتُنْ مُتَفْعِ لْ    ';
   B2.textContent=Khafif+' '+Mj;
   K2.textContent=MMksor;
 Aala2.textContent=Aila+ Aa ;
}
/*المضارع ------------------------------------------------------------------ */
if( S2.textContent==='|.|.0.|.0.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' مَفَاعِيلُنْ فَاعِ لَاتُنْ   ';
   B2.textContent=Modariaa+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = ' مَفَاعِلُنْ فَاعِ لَاتُنْ   ';
   B2.textContent=Modariaa+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+Kap  ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D2.textContent = ' مَفَاعِيلُ فَاعِ لَاتُنْ   ';
   B2.textContent=Modariaa+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kaf ;
}
/*المقتضب-------------------------------------------------------------------------- */
if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مَفْعُولَاتُ مُسْتَعِلُنْ  ';
   B2.textContent=Moktadib+' '+Mj;
   K2.textContent=MatW;
}
else  if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' مَفَاعِيلُ مُسْتَعِلُنْ  ';
   B2.textContent=Moktadib+' '+Mj;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Aa ;
}
else  if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = ' فَاعِلَاتُ مُسْتَعِلُنْ  ';
   B2.textContent=Moktadib+' '+Mj;
   K2.textContent=MatW;
 Aala2.textContent=Aila+ Ab ;
}
/* المجتث-------------------------------------------------------------------------------- */
/*صحيحة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   مُسْتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Moj+' '+Mj;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   مُتَفْعِ لُنْ فَاعِلَاتُنْ   ';
   B2.textContent=Moj+' '+Mj;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
/*مخبونة */
if( S2.textContent==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = '   مُسْتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Moj+' '+Mj;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = '   مُتَفْعِ لُنْ فَعِلَاتُنْ   ';
   B2.textContent=Moj+' '+Mj;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
/*متشعثة */
if( S2.textContent==='|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = '   مُسْتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Moj+' '+Mj;
   K2.textContent=MTachaite;
}
else if( S2.textContent==='|.|.0.|.|.0.|.0.|.0.|.0'){
  D2.textContent = '   مُتَفْعِ لُنْ فَالَاتُنْ   ';
   B2.textContent=Moj+' '+Mj;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}

/*المتقارب تام --------------------------------------------------------------------- */
/*صحيحة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kap ;
}

else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Kap ;
}

/*مقبوضة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}

else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D2.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولُنْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}

/*مقبوضة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.|'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}

else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.|'){
  D2.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.|'){
  D2.textContent = ' فَعُولُ فَعُولُ فَعُولُنْ فَعُولُ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt2;
 Aala2.textContent=Aila+ Kap ;
}

/*مقصور */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+ Kap ;
}

else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D2.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعُولْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Mksora;
 Aala2.textContent=Aila+ Kap ;
}

/*محذوفة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}

else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعَلْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}

/*أبتر */
/*محذوفة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُنْ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ فَعُولُ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}

else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُنْ فَعُولُنْ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُ فَعُولُنْ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعُولُ فَعُولُ فَعُولُنْ فَعْ   ';
   B2.textContent=Mot+' '+Tam;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}

/*المجزوء */
/*محذوفة */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ  فَعَلْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=kt3;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '    فَعُولُ فَعُولُ فَعَلْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '    فَعُولُنْ فَعُولُ فَعَلْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '    فَعُولُ فَعُولُنْ فَعَلْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=kt3;
 Aala2.textContent=Aila+ Kap ;
}
/*أبتر */
if( S2.textContent==='|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعُولُنْ فَعُولُنْ  فَعْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=Abtar;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.|.0'){
  D2.textContent = '    فَعُولُ فَعُولُ فَعْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.0.|.|.0.|.|.0'){
  D2.textContent = '    فَعُولُنْ فَعُولُ فَعْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
else if( S2.textContent==='|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '    فَعُولُ فَعُولُنْ فَعْ   ';
   B2.textContent=Mot+' '+Mj;
   K2.textContent=Abtar;
 Aala2.textContent=Aila+ Kap ;
}
/*المتدارك--------------------------------------------------------------------------------- */
/*تام */
if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=Abtar;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
/*--*/
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
/*----*/
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.0.|.0.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَاعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Tachaite ;
}
/* */
/*متشعثة */
if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Aa ;
}
/*--*/
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
/*----*/
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.|.0.|.0.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.0.|.0.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعْلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=MTachaite;
 Aala2.textContent=Aila+ Tachaite ;
}
/*مخبونة */
if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
/*--*/
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
/*----*/
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=kt1;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Aa ;
}
/*--*/
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَاعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَاعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
/*----*/
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite + ' و '+Aa ;
}
else if( S2.textContent==='|.0.|.|.0.|.0.|.0.|.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَاعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَاعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.|.|.0.|.0.|.0.|.|.|.0.|.|.|.0'){
  D2.textContent = '   فَعِلُنْ فَعْلُنْ فَعِلُنْ فَعِلُنْ  ';       
   B2.textContent=Motadarak+' '+Tam;
   K2.textContent=mkhb;
 Aala2.textContent=Aila+ Tachaite ;
}
else if( S2.textContent==='|.0.|.0.|.|.|.0.|.0.|.0.|.|.|.0'){
  D2.textContent = '   فَعْلُنْ فَعِلُنْ فَعْلُنْ فَعِلُنْ  ';       
  B2.textContent=Motadarak+' '+Tam;
  K2.textContent=mkhb;
  Aala2.textContent=Aila+ Tachaite ;
}

 if(B.textContent===B2.textContent) {
    Bahr.textContent=B2.textContent;
  }else{
    Bahr.textContent=' تـأكد من كتابة الأبيات كتابة صحيحة ';
  }
  }
 

/*---------------------------------------------------------- */
  // تحديد الحقول والزر
  const text1 = document.getElementById('text');
  const text2 = document.getElementById('text2');
  const submitButton = document.getElementById('submitButton');
  const Result2=document.getElementById('r2');

  const P=document.getElementById('l1');
  const P2=document.getElementById('l2');
  const P3=document.getElementById('l3');
  const P4=document.getElementById('l4');

  const P11=document.getElementById('l11');
  const P21=document.getElementById('l21');
  const P31=document.getElementById('l31');
  const P41=document.getElementById('l41');

  const  Elbahr=document.getElementById('ElBahr') ;
  const Close=document.getElementById('close');
  const Explanation=document.getElementById('Explanation');
  const Open=document.getElementById('open');

  // تفعيل الحدث عندما يتم تغيير قيمة الحقول
  text1.addEventListener('input', toggleButton);
  text2.addEventListener('input', toggleButton);

  // دالة للتحقق وعرض أو إخفاء الزر
  function toggleButton() {
      if (text1.value.trim() !== '' && text2.value.trim() !== '') {
          submitButton.style.display = 'block'; // إظهار الزر إذا تم ملء الحقلين
          submitButton.classList.add('submitButton');   
      }
       else {
          submitButton.style.display = 'none'; // إخفاء الزر إذا كان أحد الحقلين فارغًا

          Result2.classList.remove('result21'); 
          P.style.display = 'none';    S.style.display = 'none'; 
          P2.style.display = 'none';   D.style.display = 'none'; 
          P3.style.display = 'none';   K.style.display = 'none';
          P4.style.display = 'none';   Aala.style.display = 'none'; 

          P11.style.display = 'none';  S2.style.display = 'none'; 
          P21.style.display = 'none';  D2.style.display = 'none';
          P31.style.display = 'none';  K2.style.display = 'none';
          P41.style.display = 'none';  Aala2.style.display = 'none'; 

          Elbahr.style.display = 'none'; Bahr.style.display='none';
      }
  }

  function showContainers() {
    var containers = document.querySelectorAll("#container");
    containers.forEach(function(container) {
    container.style.display='block';
    Result2.classList.add('result21');           
  
    P.classList.add('p');     S.classList.add('pp'); 
    P2.classList.add('p2');   D.classList.add('pp2'); 
    P3.classList.add('p3');   K.classList.add('pp3'); 
    P4.classList.add('p4');   Aala.classList.add('pp4');  

    P11.classList.add('p11'); S2.classList.add('pp11'); 
    P21.classList.add('p21'); D2.classList.add('pp21'); 
    P31.classList.add('p31'); K2.classList.add('pp31'); 
    P41.classList.add('p41'); Aala2.classList.add('pp41'); 
    
    /* S2.textContent.trim() !== '' && D2.textContent.trim() !== '' && K2.textContent.trim() !== '' && Aala2.textContent.trim() !== '' &&
      S.textContent.trim() !== '' && D.textContent.trim() !== '' && K.textContent === '' && Aala.textContent.trim() !== '')  */
     if ( 
      S2.textContent.trim() !== '' &&
      S.textContent.trim() !== '' &&  D2.textContent.trim() !== '' && D.textContent.trim() !== '') 
      { 
        Main.classList.add('overflow');
    setTimeout(function() {             
    P.style.display = 'block'; 
        }, 0);
    setTimeout(function() {
      P2.style.display = 'block'; 
    }, 2000);
    setTimeout(function() {
      P3.style.display = 'block'; 
    }, 4000);
    setTimeout(function() {
      P4.style.display = 'block'; 
    }, 6000);
   

    setTimeout(function() {
      P11.style.display = 'block'; 
    }, 1000);
    setTimeout(function() {
      P21.style.display = 'block'; 
    }, 3000);
    setTimeout(function() {
      P31.style.display = 'block'; 
    }, 5000);
    setTimeout(function() {
      P41.style.display = 'block'; 
    }, 7000);

    setTimeout(function() {             
      S.style.display = 'block'; 
    }, 500);
    setTimeout(function() {
      D.style.display = 'block'; 
    }, 1500);
    setTimeout(function() {
     K.style.display = 'block'; 
    }, 3500);
    setTimeout(function() {
      Aala.style.display = 'block'; 
    }, 5500);
   

    setTimeout(function() {
      S2.style.display = 'block'; 
    }, 1500);
    setTimeout(function() {
      D2.style.display = 'block'; 
    }, 3500);
    setTimeout(function() {
      K2.style.display = 'block'; 
    }, 5500);
    setTimeout(function() {
      Aala2.style.display = 'block'; 
    }, 7500);

    setTimeout(function() {
      Elbahr.style.display = 'block'; 
    }, 9000);
    setTimeout(function() {
      Bahr.style.display = 'block'; 
    }, 9500);
/*
     S2.textContent=' ' ;
     D2.textContent=' '  ;
     K2.textContent=' '  
     Aala2.textContent=' ' ;

     S.textContent=' '  ;
     D.textContent=' '  ;
     K.textContent===' ' ;
     Aala.textContent=' ' ;
                            */
  }
  });

    }
    Close.addEventListener('click',function(){
      Explanation.style.display='none';
    }) 
      
     Open.addEventListener('click',function(){
        Explanation.style.display='block';
    })  
   
 function run() {
  setTimeout(function() {
    send1();
    send2();
    showContainers();
  }, 0);

}
/*----*/
var subLink = document.querySelector('.sub_link');
var bohor = document.getElementById('Bohor');

subLink.addEventListener('mouseover', function() {
  bohor.style.display = 'block';
});

bohor.addEventListener('mouseover', function() {
  bohor.style.display = 'block';
});

bohor.addEventListener('mouseout', function() {
  bohor.style.display = 'none';
});
