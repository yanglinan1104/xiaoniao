var bo1=document.getElementById("bo1")
	bo1.onclick=function(){
		var m=document.getElementById("m")
		if(bo1.textContent==""){
			//d1.style.display="none";
			m.style.width="0";
			bo1.textContent=""
		}else{
			//d1.style.display="block";
			m.style.width="1000px";
			bo1.textContent="";
		}
	}