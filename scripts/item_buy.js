/* item_buy.js */

// 2행 작은 썸네일 html 반복 삽입
const thumbnailList = document.querySelector('.thumbnail_list');
const mainThumbnail = document.querySelector('.main_thumbnail');

thumbnailDB.forEach((item, index)=>{
    const li = document.createElement(li);
    li.className = 'thumbnail_item';
})

// 2행 작은 썸네일 호버 시 큰 썸네일 변경