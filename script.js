let users=[
    {
        name:"kazi bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1594007759138-855170ec8dc0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"Chintu bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1564440769611-a105bcd81f1a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"Yashraj bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1588953936179-d2a4734c5490?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"Hansraj bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1594007759138-855170ec8dc0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"divyansh bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1527091481625-e3d4db4fc3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"vebhav bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1570150766593-fcda96114fd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"Anish bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1591852651348-20f2255cb64b?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"sheetal bro",
        viewed:false,
        link:"https://plus.unsplash.com/premium_photo-1671656349080-59033895973d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    },{
        name:"Monu bro",
        viewed:false,
        link:"https://images.unsplash.com/photo-1580067644090-a03da9d1e360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        view:false,
    }]

    

    let allStatus = document.querySelector(".allStatus")

   function main(){
    users.forEach((elem, index)=>{
        allStatus.innerHTML += 
        `
                <div class="first">
                <img id="${index}" src="${elem.link}" alt="">
                <div class="allstatusR">
                    <h4>${elem.name}</h4>
                    <h5>12:58 pm</h5>
                </div>
               </div>
               </div>`
    })
   }

   main();

   const images = document.querySelectorAll(".first img");
   const modal = document.querySelector(".modal");
   const modalImg = document.querySelector(".modal img");
   let i = document.querySelector(".ri-close-line")

   images.forEach(function(img){
    img.addEventListener("click",function(dets){
        modal.style.display = "flex";
        modalImg.setAttribute("src",`${dets.target.src}`)   
    })
   })

   i.addEventListener("click",function(){
    modal.style.display = "none"
    
   })

   
        
        
