
$(document).ready(()=> {  
  //showItems(saleItems);
//const myCollection = document.querySelector("#imageBox");

const imageContainer = document.querySelector("#sale-items");
/*
imageContainer.addEventListener('click',function(e) {
   if(e.target.tagName == "IMG") {
      console.log("This item is clicked " + e.target.id);
      //e.target.src = saleItems[0].itemImage[1];
       for(let i = 0; i < saleItems.length; i++) {
          if(saleItems[i].itemId == e.target.id) {
             let imgIndex = saleItems[i].itemImage.indexOf(e.target.getAttribute('src'));
             saleItems[i].itemImage[imgIndex+1] ? e.target.src = saleItems[i].itemImage[imgIndex+1] : e.target.src = saleItems[i].itemImage[0];
          }
       }
   }
   
}) */

//const imgRightArrow = document.querySelector('.rightArrow');
//const imgLeftArrow = document.querySelector('.leftArrow');

imageContainer.addEventListener('click', function(e) {
   if(e.target.getAttribute('class') == 'rightArrow') {
      const rightImg = e.target.parentNode.children[1].firstElementChild;
      const getImgSrc = rightImg.getAttribute('src');
      console.log(rightImg.id);
      for(let i = 0; i < saleItems.length; i++) {
         if(saleItems[i].itemId == rightImg.id) {
            let imgIndex = saleItems[i].itemImage.indexOf(getImgSrc);
            saleItems[i].itemImage[imgIndex+1] ? rightImg.src = saleItems[i].itemImage[imgIndex+1] : rightImg.src = saleItems[i].itemImage[imgIndex];
         }
      }
   }

})

imageContainer.addEventListener('click', function(e) {
   if(e.target.getAttribute('class') == 'leftArrow') {
      const rightImg = e.target.parentNode.children[1].firstElementChild;
      const getImgSrc = rightImg.getAttribute('src');
      console.log(rightImg.id);
      for(let i = 0; i < saleItems.length; i++) {
         if(saleItems[i].itemId == rightImg.id) {
            let imgIndex = saleItems[i].itemImage.indexOf(getImgSrc);
            saleItems[i].itemImage[imgIndex-1] ? rightImg.src = saleItems[i].itemImage[imgIndex-1] : rightImg.src = saleItems[i].itemImage[0];
         }
      }
   }

})



  })

const saleItems = [
    {
       itemId: 4011,
       itemIdRight: 40111,
       itemIdLeft: 40112,
       itemImage: ["img/air-pur-1.jpg", "img/air-pur-2.jpg", "img/air-pur-3.jpg"],
       itemName: "Name-1",
       itemPrice: 25,
       itemDesc: "Some description here in Chinese"
    },

    {
        itemId: 4012,
        itemIdRight: 40121,
        itemIdLeft: 40122,
        itemImage: ["img/aircon-big-1.jpg", "img/aircon-big-2.jpg", "img/aircon-big-3.jpg", "img/aircon-big-4.jpg"],
        itemName: "Name-2",
        itemPrice: 25,
        itemDesc: "Some description here in Chinese"
     },

     {
        itemId: 4013,
        itemIdRight: 40131,
        itemIdLeft: 40132,
        itemImage: ["img/big-cabinet-1.jpg", "img/big-cabinet-2.jpg"],
        itemName: "Name-3",
        itemPrice: 25,
        itemDesc: "Some description here in Chinese"
     },

     {
        itemId: 4014,
        itemIdRight: 40141,
        itemIdLeft: 40142,
        itemImage: ["img/blender-midea-1.jpg", "img/blender-midea-2.jpg"],
        itemName: "Name-4",
        itemPrice: 25,
        itemDesc: "Some description here in Chinese"
     },

     {
        itemId: 4015,
        itemIdRight: 40151,
        itemIdLeft: 40152,
        itemImage: ["img/blender-phil-1.jpg", "img/blender-phil-2.jpg"],
        itemName: "Name-5",
        itemPrice: 25,
        itemDesc: "Some description here in Chinese"
     },

     {
        itemId: 4016,
        itemIdRight: 40161,
        itemIdLeft: 40162,
        itemImage: ["img/blow-heater-1.jpg", "img/blow-heater-2.jpg"],
        itemName: "Name-6",
        itemPrice: 25,
        itemDesc: "Some description here in Chinese"
     },
];



const itemsCollection = document.getElementById("sale-items")

function showItems (itemsArray) {
    let output = '';
    itemsArray.map(function(each) {
        output += `
        <div  class="post" id="imageBox">
          <h2>${each.itemName}</h2>
          <div class="img__div">
              <img src="${each.itemImage[0]}" class="post__img" id="${each.itemId}">
              
           </div>

           <div class="post__bottom">
          <p>
           Price: ${each.itemPrice} <br/>
           Description: ${each.itemDesc}
          </p> 
          </div>
          <span class="rightArrow" id="${each.itemIdRight}">&#10097;</span>
          <span class="leftArrow" id="${each.itemIdLeft}">&#10096;</span>
        </div>`
    })
    return itemsCollection.innerHTML = output;
};

showItems(saleItems);
