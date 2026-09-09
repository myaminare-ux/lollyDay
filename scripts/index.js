/* index.js */
// 베스트
const best_swiper = document.querySelector('.best_item_list');

for (let i = 0; i<4; i++) {
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

// 시즌 기획전
const season_swiper = document.querySelector('.season_item_list');

for (let i=0; i<4; i++){
    const season_slide = document.createElement('div');
    season_slide.classList.add('swiper-slide', 'season_slide');
    season_slide.innerHTML = `
    <a href="#" target="_blank" class="season_item">
        <div class="item_top">
            <img src="${seasonDB[i].img}" alt="${seasonDB[i].title}">
        </div>
        <div class="item_btm">
            <p class="sub_title">${seasonDB[i].subTitle}</p>
            <h3>${seasonDB[i].title}</h3>
            <del class="item_origin_price">${seasonDB[i].originPrice.toLocaleString('ko-KR')}원</del>
            <div class="sale_price">
                <p class="sale">${seasonDB[i].discount}</p>
                <p class="price">${seasonDB[i].salePrice.toLocaleString('ko-KR')}원</p>
            </div>
        </div>
    </a>`;
    season_swiper.children[0].appendChild(season_slide);
}

const season_swiper_func = new Swiper(season_swiper, {
    slidesPerView:3,
    spaceBetween:10,
    loop:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    watchOverflow:false,
    pagination:{
        el:'.season_item_list .swiper-pagination',
        //type:'bullets'(기본)
        //type:'fraction' (숫자)
        //type:'progressbar' (바)
        type:'progressbar',
    },
});

// 선물 추천
const gift_swiper = document.querySelector('.gift_item_list');

for (let i = 0; i<4; i++){
    // ----------------------------------------------- 클래스 생성
    const gift_slide = document.createElement('div');
    // ----------------------------------------------- 클래스 연결
    gift_slide.classList.add('swiper-slide', 'gift_slide');
    // ----------------------------------------------- HTML 연결
    gift_slide.innerHTML = `
    <a href="#" target="_blank" class="gift_item">
        <div class="item_top">
            <img src="${giftDB[i].img}" alt="${giftDB[i].title}">
        </div>
        <div class="item_btm">
            <h3>${giftDB[i].title}</h3>
            <del class="item_origin_price">${giftDB[i].originPrice.toLocaleString('ko-KR')}원</del>
            <div class="sale_price">
                <p class="sale">${giftDB[i].discount}</p>
                <p class="price">${giftDB[i].salePrice.toLocaleString('ko-KR')}원</p>
            </div>
        </div>
    </a>
    <button type="button" class="favorite_btn">
        <img src="./images/favorite_items_icon2.png" alt="관심상품 등록">
    </button>`;

    // 관심상품 등록 버튼 클릭 시 활성화 이미지 변경
    const favBtn2 = gift_slide.querySelector('.favorite_btn');
    const favImg2 = gift_slide.querySelector('.favorite_btn > img');
    
    favBtn2.addEventListener('click', (e)=>{
        e.preventDefault();
        favBtn2.classList.toggle('active');
        if(favBtn2.classList.contains('active')){
            favImg2.src = './images/favorite_items_active_icon.png';
        } else {
            favImg2.src = './images/favorite_items_icon2.png';
        }
    });

    gift_swiper.children[0].appendChild(gift_slide);
}


const gift_swiper_func = new Swiper(gift_swiper, {
    slidesPerView:3,
    spaceBetween:20,
    observer:true,
    watchOverflow:false,
    pagination:{
        el:'.gift_item_list .swiper-pagination',
        //type:'bullets'(기본)
        //type:'fraction' (숫자)
        //type:'progressbar' (바)
        type:'fraction',
    },
    navigation:{
        nextEl:'.gift_item_list .swiper-button-next',
        prevEl:'.gift_item_list .swiper-button-prev',
    },
});

// 시그니처
const signaUl = document.querySelector('.signa_wrap');

for (let i=0; i<signatureDB.length; i++){
    const category = signatureDB[i];

    const categoryLi = document.createElement('li');
    categoryLi.innerHTML = `
    <a href="#" class="signa_banner ${signatureDB[i].categoryClass}">
        <div class="banner_img">
            <img src="${signatureDB[i].bannerImg}" alt="${signatureDB[i].bannerTitle}">
        </div>
        <h3 class="banner_title">${signatureDB[i].bannerTitle}</h3>
        <p class="banner_desc">${signatureDB[i].bannerDesc}</p>
    </a>
    <ul class="sub_item_list"></ul>`;

    const subItemList = categoryLi.querySelector('.sub_item_list');

    for (let j=0; j<category.items.length; j++){
        const item = category.items[j];

        subItemList.innerHTML += `
        <li>
            <a href="#" class="sub_item">
                <div class="item_left">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="item_right">
                    <h3>${item.title}</h3>
                    <del class="item_origin_price">${item.originPrice.toLocaleString('ko-KR')}원</del>
                    <div class="sale_price">
                        <p class="sale">${item.discount}</p>
                        <p class="price">${item.salePrice.toLocaleString('ko-KR')}원</p>
                    </div>
                </div>
            </a>
        </li>`;
    }
    signaUl.appendChild(categoryLi);
}

// 소확행 리스트
const routineList = document.querySelector('.routine_list');

for (let i=0; i<routineDB.length; i++){
    const data = routineDB[i];

    routineList.innerHTML += `
    <li>
        <a href="#">
            <div class="thumb_img">
                <img src="${data.img}" alt="${data.title}">
            </div>
            <div class="routine_info">
                <h3 class="routine_info_title">${data.title}</h3>
                <p class="routine_desc">${data.desc}</p>
            </div>
        </a>
    </li>`;
};

// 검색창 추천 리스트
const recommendList = document.querySelector('.recommend_list');

for (let i=0; i<recommendDB.length; i++){
    const data = recommendDB[i];

    recommendList.innerHTML += `
    <li>
        <a href="${data.url}">${data.title}</a>
    </li>`;
};

// 검색창 클릭 시 열고 닫기 버튼 누르면 닫힘
const searchOpenBtn = document.querySelector('.search_open_btn');
const searchOpen = document.querySelector('.search_open');
const searchCloseBtn = document.querySelector('.search_close_btn button');

searchOpenBtn.addEventListener('click',()=>{
    searchOpen.classList.add('active');
});
searchCloseBtn.addEventListener('click',()=>{
    searchOpen.classList.remove('active');
});