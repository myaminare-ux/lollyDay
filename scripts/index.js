/* index.js */
const best_swiper = document.querySelector('.best_item_list');

for (let i = 0; i<3; i++) {
    // ----------------------------------------------- 클래스 생성
    const best_slide = document.createElement('div');
    // ----------------------------------------------- 클래스 연결
    best_slide.classList.add('swiper-slide');
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
                <p class="sale">${bestDB[i].discount}%</p>
                <p class="price">${bestDB[i].salePrice.toLocaleString('ko-KR')}원</p>
            </div>
        </div>
    </a>
    <button type="button" class="favorite_btn">
        <img src="./images/favorite_items_icon.png" alt="관심상품 등록">
    </button>`;
    best_swiper.children[0].appendChild(best_slide);
}

const best_swiper_func = new Swiper(best_swiper, {
    slidesPerView:3,
    spaceBetween:20,
    observer: true,
});