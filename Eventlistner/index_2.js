  //Points to study:- ( type,timestamp,preventdefault
        //target,sourceElement,toElement,currentTarget
        //clientX,clientY,screenX,screenY
        //altkey, ctrlkey, shiftkey, keycode)
        
        //1st method:
        //document.getElementById('clg').onclick = function(){
        //    alert("Hello")
        //}

       //2nd:
       // document.getElementById('clg').addEventListener('click', function(){
         //   alert('college')
        //}, false)

        //3rd:
        
        //Event propogation has two context: 1) Event capturing & Event public (default i.e false)
         //Event propogation means bubbling-up means Event public(i.e flase) act as bottom(child div) to top(parent) 
        //& Event capturing(i.e true) will work from top(parent) to bottom(child)
        // .stopPropagation() - it will stop bubbling to upper element.

        // document.getElementById('images').addEventListener('click', function(e){
        //     console.log('clicked inside the ul');
        // },false) 

        // document.getElementById('clg').addEventListener('click', function(e){
        //     console.log('clg clicked');
        //     e.stopPropagation()
        // }, false)

        // //preventDefault:
        // document.getElementById('girl').addEventListener('click', function(e){  //(e) will capture the event that happens
        //     e.preventDefault()
        //     console.log("gril clicked")
        // },false)


        document.querySelector('#images').addEventListener('click' ,(e)=>{
            console.log(e.target.parentNode);
            let removeIt = e.target.parentNode
            removeIt.remove()
        })
   
