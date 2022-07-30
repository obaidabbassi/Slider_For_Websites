var lft=document.getElementById('left').addEventListener('click',function(){
    var con=document.getElementById('cont')
    var imgs=["url(/img1.jpg)","url(/img2.jpg)","url(/img3.jpg)","url(/img4.jpg)","url(/img5.jpg)","url(/img6.jpg)","url(/img7.jpg)","url(/img8.jpg)","url(/img9.jpg)","url(/img10.jpg)",]
    var q=(Math.ceil(Math.random() *3))
    
    
    
    con.style.backgroundImage=imgs[q]
    
    
    
    
    
    })
    
    
    
    
    var rt=document.getElementById('right').addEventListener('click',function(){
    var con=document.getElementById('cont')
    var imgs=["url(/img1.jpg)","url(/img2.jpg)","url(/img3.jpg)","url(/img4.jpg)","url(/img5.jpg)","url(/img6.jpg)","url(/img7.jpg)","url(/img8.jpg)","url(/img9.jpg)","url(/img10.jpg)",]
    var q=(Math.ceil(Math.random() *10))
    con.style.backgroundImage=imgs[q]
    
    
    
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
        
    setInterval(function(){
    
    
    
        var con=document.getElementById('cont')
    var imgs=["url(/img1.jpg)","url(/img2.jpg)","url(/img3.jpg)","url(/img4.jpg)","url(/img5.jpg)","url(/img6.jpg)","url(/img7.jpg)","url(/img8.jpg)","url(/img9.jpg)","url(/img10.jpg)",]
    var q=(Math.ceil(Math.random() *10))
    
    
    
      con.style.backgroundImage=imgs[q]
   
  
    
     },5000)
    
    
    
    