/* index.js */
// 베스트
const best_swiper = document.querySelector('.best_item_list');

for (let i = 0; i<3; i++) {
    // ----------------------------------------------- 클래스 생성
    const best_slide = document.createElement('div');
    // ----------------------------------------------- 클래스 연결
    best_slide.classList.add('swiper-slide', 'best_slide');
    // ----------------------------------------------- HTML 연결
    best_slide.innerHTML = `
    <a href="#" target="_blank" class="best_item">
        <div class="item_top">
            <span class="size_label">${bestDB[i].size}</span>
            <img src="${bestDB[i].img}" alt="${bestDB[i].title}">
        </div>
        <div class="item_btm">
            <h3>${bestDB[i].title}</h3>
            <del class="item_origin_price">${bestDB[i].originPrice.toLocaleString('ko-KR')}원</del>
            <div class="sale_price">
                <p class="sale">${bestDB[i].discount}</p>
                <p class="price">${bestDB[i].salePrice.toLocaleString('ko-KR')}원</p>
            </div>
        </div>
    </a>
    <button type="button" class="favorite_btn">
        <img src="./images/favorite_items_icon2.png" alt="관심상품 등록">
    </button>`;

    // 관심상품 등록 버튼 클릭 시 활성화 이미지 변경
    const favBtn = best_slide.querySelector('.favorite_btn');
    const favImg = best_slide.querySelector('.favorite_btn > img');
    
    favBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        favBtn.classList.toggle('active');
        if(favBtn.classList.contains('active')){
            favImg.src = './images/favorite_items_active_icon.png';
        } else {
            favImg.src = './images/favorite_items_icon2.png';
        }
    });

    best_swiper.children[0].appendChild(best_slide);
}


const best_swiper_func = new Swiper(best_swiper, {
    slidesPerView:3,
    spaceBetween:20,
    observer:true,
    watchOverflow:false,
    pagination:{
        el:'.best_item_list .swiper-pagination',
        //type:'bullets'(기본)
        //type:'fraction' (숫자)
        //type:'progressbar' (바)
        type:'fraction',
    },
    navigation:{
        nextEl:'.best_item_list .swiper-button-next',
        prevEl:'.best_item_list .swiper-button-prev',
    },
});

// 신상품
const newUl = document.querySelector('.new_item_list');

for(let i=0; i<4; i++){
    const newLi = document.createElement('li');
    newLi.innerHTML = `
    <a href="#" target="_blank" class="new_item">
        <div class="item_top">
            <img src="${newDB[i].img}" alt="${newDB[i].title}">
        </div>
        <div class="item_btm">
            <h3>${newDB[i].title}</h3>
                <del class="item_origin_price">${newDB[i].originPrice.toLocaleString('ko-KR')}원</del>
                <div class="sale_price">
                    <p class="sale">${newDB[i].discount}</p>
                    <p class="price">${newDB[i].salePrice.toLocaleString('ko-KR')}원</p>
                </div>
        </div>
    </a>
    <button type="button" class="favorite_btn">
        <img src="./images/favorite_items_icon2.png" alt="관심상품 등록">
    </button>`;

    // 관심상품 등록 버튼 클릭 시 활성화 이미지 변경
    const favBtn = newLi.querySelector('.favorite_btn');
    const favImg = newLi.querySelector('.favorite_btn > img');
    
    favBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        favBtn.classList.toggle('active');
        if(favBtn.classList.contains('active')){
            favImg.src = './images/favorite_items_active_icon.png';
        } else {
            favImg.src = './images/favorite_items_icon2.png';
        }
    });

    newUl.appendChild(newLi);
}