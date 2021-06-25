
$(document).ready(()=> {  
  //showItems(saleItems);


const imageContainer = document.querySelector("#sale-items");




imageContainer.addEventListener('click', function(e) {
   if(e.target.getAttribute('class') == 'rightArrow') {
      const rightImg = e.target.parentNode.children[1].firstElementChild;
      const getImgSrc = rightImg.getAttribute('src');
     
      for(let i = 0; i < saleItems.length; i++) {
         if(saleItems[i].itemId == rightImg.id) {
            let imgIndex = saleItems[i].itemImage.indexOf(getImgSrc);
            saleItems[i].itemImage[imgIndex+1] ? rightImg.src = saleItems[i].itemImage[imgIndex+1] : rightImg.src = saleItems[i].itemImage[0];
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
       itemImage: ["img/air-pur-1.jpg", "img/air-pur-2.jpg", "img/air-pur-3.jpg"],
       itemName: "空气净化器",
       itemPrice: 70,
       itemDesc: "二手"
    },

    {
        itemId: 4012,
        itemImage: ["img/aircon-big-1.jpg", "img/aircon-big-2.jpg", "img/aircon-big-3.jpg", "img/aircon-big-4.jpg"],
        itemName: "空调",
        itemPrice: 3000,
        itemDesc: "二手，使用了 7 个月"
     },

     {
        itemId: 4013,
        itemImage: ["img/big-cabinet-1.jpg", "img/big-cabinet-2.jpg"],
        itemName: "储物柜",
        itemPrice: 75,
        itemDesc: "二手, 木制的"
     },

     {
        itemId: 4014,
        itemImage: ["img/blender-midea-1.jpg", "img/blender-midea-2.jpg"],
        itemName: "搅拌机 (美的)",
        itemPrice: 180,
        itemDesc: "新的"
     },

     {
        itemId: 4015,
        itemImage: ["img/blender-phil-1.jpg", "img/blender-phil-2.jpg"],
        itemName: "搅拌机 (飞利浦)",
        itemPrice: 120,
        itemDesc: "新的"
     },

     {
        itemId: 4016,
        itemImage: ["img/blow-heater-1.jpg", "img/blow-heater-2.jpg"],
        itemName: "暖风机",
        itemPrice: 30,
        itemDesc: "二手"
     },
     {
      itemId: 4017,
      itemImage: ["img/blue-mat-1.jpg", "img/blue-mat-2.jpg", "img/blue-mat-3.jpg"],
      itemName: "可折叠垫",
      itemPrice: 80,
      itemDesc: "二手"
   },
   {
      itemId: 4018,
      itemImage: ["img/book-cabinet-1.jpg", "img/book-cabinet-2.jpg", "img/book-cabinet-3.jpg"],
      itemName: "书柜",
      itemPrice: 150,
      itemDesc: "二手"
   },
   {
      itemId: 4019,
      itemImage: ["img/e-blanket-1.jpg", "img/e-blanket-2.jpg"],
      itemName: "电热毯",
      itemPrice: 75,
      itemDesc: "二手"
   },
   {
      itemId: 4020,
      itemImage: ["img/garden-chair-1.jpg", "img/garden-chair-2.jpg","img/garden-chair-3.jpg"],
      itemName: "折叠躺椅",
      itemPrice: 100,
      itemDesc: "二手, 有椅垫"
   },
   {
      itemId: 4021,
      itemImage: ["img/heater-1.jpg", "img/heater-2.jpg", "img/heater-3.jpg"],
      itemName: "加热器",
      itemPrice: 65,
      itemDesc: "二手, 很少使用"
   },
   {
      itemId: 4022,
      itemImage: ["img/scales-1.jpg", "img/scales-2.jpg"],
      itemName: "体质称",
      itemPrice: 50,
      itemDesc: "二手"
   },
   {
      itemId: 4023,
      itemImage: ["img/stand-lamp-1.jpg", "img/stand-lamp-2.jpg"],
      itemName: "落地灯",
      itemPrice: 75,
      itemDesc: "二手"
   },
   {
      itemId: 4024,
      itemImage: ["img/scooter-1.jpg", "img/scooter-2.jpg"],
      itemName: "电动车",
      itemPrice: 1000,
      itemDesc: "二手, 有头盔，手套"
   },
   {
      itemId: 4025,
      itemImage: ["img/super-desk-1.jpg", "img/super-desk-2.jpg"],
      itemName: "站立式工作桌",
      itemPrice: 650,
      itemDesc: "新的"
   },
   {
      itemId: 4026,
      itemImage: ["img/weights-1.jpg", "img/weights-2.jpg"],
      itemName: "锻炼哑铃",
      itemPrice: 60,
      itemDesc: "二手"
   },
   {
      itemId: 4027,
      itemImage: ["img/round-chair-1.jpg", "img/round-chair-2.jpg"],
      itemName: "椅子",
      itemPrice: 40,
      itemDesc: "二手, 没有椅垫 "
   },
   {
      itemId: 4028,
      itemImage: ["img/foam-1.jpg", "img/foam-2.jpg", "img/foam-3.jpg", "img/foam-4.jpg"],
      itemName: "海绵床垫",
      itemPrice: 60,
      itemDesc: "二手, "
   },
   {
      itemId: 4029,
      itemImage: ["img/couch-cover-1.jpg"],
      itemName: "沙发垫",
      itemPrice: 55,
      itemDesc: "二手"
   },
   {
      itemId: 4030,
      itemImage: ["img/oven-1.jpg"],
      itemName: "电烤箱",
      itemPrice: 50,
      itemDesc: "二手"
   },
   {
      itemId: 4031,
      itemImage: ["img/quilt-pink-1.jpg", "img/quilt-pink-2.jpg", "img/quilt-pink-3.jpg" ],
      itemName: "被子",
      itemPrice: 150,
      itemDesc: "二手, 有粉红色的床具"
   },
   {
      itemId: 4033,
      itemImage: ["img/room-cooler-1.jpg" ],
      itemName: "冷气机",
      itemPrice: 100,
      itemDesc: "卖光了"
   },
   {
      itemId: 4034,
      itemImage: ["img/curtains-beige-1.jpg" ],
      itemName: "窗帘",
      itemPrice: 200,
      itemDesc: "二手, 适合客厅"
   },
   {
      itemId: 4035,
      itemImage: ["img/curtains-brown-1.jpg" ],
      itemName: "窗帘",
      itemPrice: 200,
      itemDesc: "二手"
   },
   {
      itemId: 4036,
      itemImage: ["img/carpet-red-1.jpg" ],
      itemName: "地毯, 红色的",
      itemPrice: 60,
      itemDesc: "二手"
   }
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
           价格:  &#165;${each.itemPrice} <br/>
           细节:  ${each.itemDesc}.
          </p> 
          </div>
          <span class="rightArrow">&#10097;</span>
          <span class="leftArrow">&#10096;</span>
        </div>`
    })
    return itemsCollection.innerHTML = output;
};



showItems(saleItems);

function removeArrows () {
   let containertBox = document.querySelector('#sale-items');
   let postArray = containertBox.children;
   
   for(let i = 0; i < postArray.length; i++) {
       let imgId = postArray[i].querySelector('.img__div').firstElementChild.id;
       for(let j = 0; j < saleItems.length; j++) {
          if(imgId == saleItems[j].itemId && saleItems[j].itemImage.length == 1) {
             
             let imgRight = postArray[i].querySelector('.rightArrow');
             let imgLeft = postArray[i].querySelector('.leftArrow');
             postArray[i].removeChild(imgRight);
             postArray[i].removeChild(imgLeft);
          } 
       }
   }

};
removeArrows();

const mainContainer = document.getElementById("sale-items");
const phoneContact = document.querySelector('.phoneBox');







function showPhone () {
  let output = `
  <div class="modal-bg">
   
    <div class="modal">
    <span class="closeModal">&times;</span>
       <div class="phoneContainer">
       <h3>Arthur (亚瑟)</h3>
       <h5>寸金嘉苑详情咨询</h5>
         <ul>
           <li>电话 / 微信: 15218209747</li>
           
         </ul>
         <hr class="lineBreak">
       </div>
       
       <div class="phoneContainer">
       <h3>李果</h3>
       <h5>更多其他咨询</h5>
       <ul>
           <li>电话 / 微信: 13553493070</li>
  
         </ul>
         <hr class="lineBreak">
       </div>
       
       <div class="phoneContainer">
       <h3>温宇</h3>
       <h5>更多其他咨询</h5>
         <ul>
           <li>电话 / 微信: 18820811069</li>
           <hr class="lineBreak">
       </div>
       
       <div class="modalBottom"></div>
    </div>
    
  </div>
  `

   mainContainer.insertAdjacentHTML('beforeend', output); 
  
}

let clicked = false;
    
phoneContact.addEventListener('click', function(e) {
  
    if(clicked == false && e.target.getAttribute('class') == 'fas fa-mobile-alt') {
      showPhone()  
      clicked = true; 
    } else if ( clicked == true && e.target.getAttribute('class') == 'fas fa-mobile-alt' ) {
       let modalWindow = document.querySelector('.modal-bg');
       mainContainer.removeChild(modalWindow);
       clicked = false;
    }
    const closeModalCross = document.querySelector('.closeModal');
    if(clicked == true) {
        let modalWindow = document.querySelector('.modal-bg');
        closeModalCross.addEventListener('click', function() {
         mainContainer.removeChild(modalWindow);
         clicked = false;
      })
     
    } 
   
});




