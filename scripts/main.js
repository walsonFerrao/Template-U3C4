async function apiCall(url) {


    //add api call logic here

   let  req=await fetch(url)
  let   res=await req.json()

  return res
}


function appendArticles(articles, main) {

    articles.map((elem)=>{


        let div1=document.createElement("div")
        let div2=document.createElement("div")
        let div3=document.createElement("div")
        
         let title=document.createElement("p")
         title.innerHTML=elem.title
     
         let description=document.createElement("p")
         description.innerHTML=elem.description
     
        let img=document.createElement("img")
        img.src=elem.image
     
        let time=document.createElement("img")
        time.innerHTML=elem.publishedAt
     
     //    appending
     
     div2.append(img)
     div3.append(time,title,description)
     div1.append(div2,div3)
     main.append(div1)


     div1.addEventListener("click",collectdata)
     function collectdata(){
         localStorage.setItem("article",JSON.stringify(elem))
         window.location.href="news.html"
     }


    })
    //add append logic here
  


   

}

export { apiCall, appendArticles }