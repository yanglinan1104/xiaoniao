<script src="jquery-1.11.3.js"></script>
window.onload=function(){
    var nav=document.getElementById('nav');
    var oNav=nav.getElementsByTagName('li');
    var container=document.getElementById('container');
    var oDiv=container.getElementsByClassName('tab');
    for(var i=0;i<oNav.length;i++){
        oNav[i].index=i;
        oNav[i].onmouseover=function(){
            for(var i=0;i<oNav.length;i++){
                oNav[i].className='';
                oDiv[i].style.display="none";
            }
            this.className='act';
            oDiv[this.index].style.display="block";
        }
        for(var m=1;m<oNav.length;m++){
            oNav[m].claaName='';
            oDiv[m].style.display="none";
        }
    }
};
