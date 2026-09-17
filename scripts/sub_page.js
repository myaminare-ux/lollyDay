/* sub_page.js */

// 3-1-2. 카테고리
const subTabList = document.querySelector('.sub_tab_list');

subTabListDB.forEach((tab, index)=>{
    const li = document.createElement('li');
    const activeClass = index === 0 ? 'active' : '';
    li.innerHTML = `
    <button type="button" class="${activeClass}" data-id="${tab.id}">${tab.name}</button>
    `;
    subTabList.appendChild(li);
})

subTabList.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    subTabList.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
})

// 3-2-1. 서브 아이템 컨테이너 카테고리
const conSubUl = document.querySelector('.con_sub_tab');

conSubTabDB.forEach((tab, index)=>{
    const li = document.createElement('li');
    const activeClass = index === 0 ? 'active' : '';
    li.innerHTML = `
    <button type="button" class="${activeClass}" data-id="${tab.id}">${tab.name}</button>
    `;
    conSubUl.appendChild(li);
})

conSubUl.addEventListener('click',(e)=>{
    const btn = e.target.closest('button');
    if (!btn) return;
    conSubUl.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
});

// 서브 아이템 리스트
const subItemListUl = document.querySelector('.sub_item_list');
const totalcount = 16;

for(let i=0; i<totalcount; i++){
    const item = subItemDB[i % subItemDB.length];
    const li = document.createElement('li');
    const sizeLabellHTML = item.size ? `<span class="size_label">${item.size}</span>` : '';
    li.innerHTML = `
    <div class="item_top">
        ${sizeLabellHTML}
        <a href="#" class="item_img">
            <img src="${item.img}" alt="${item.title}">
        </a>
        <button type="button" class="favorite_btn">
            <img src="./images/favorite_items_icon2.png" alt="관심상품 등록">
        </button>
    </div>
    <a href="#" class="item_btm">
        <h3>${item.title}</h3>
        <del class="item_origin_price">${item.originPrice.toLocaleString('ko-KR')}원</del>
        <div class="sale_price">
            <p class="sale">${item.discount}</p>
            <p class="price">${item.salePrice.toLocaleString('ko-KR')}원</p>
        </div>
    </a>`;

    // 관심상품 등록 버튼 클릭 시 활성화 이미지 변경
    const favBtn = li.querySelector('.favorite_btn');
    const favImg = li.querySelector('.favorite_btn > img');
    
    favBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        favBtn.classList.toggle('active');
        if(favBtn.classList.contains('active')){
            favImg.src = './images/favorite_items_active_icon.png';
        } else {
            favImg.src = './images/favorite_items_icon2.png';
        }
    });

    subItemListUl.appendChild(li);
}

// 3-2-2. 필터 선택지
const filterSelect = document.querySelector('.filter_select');
const selectBtn = filterSelect.querySelector('.select_btn');
const optionBtns = filterSelect.querySelectorAll('.option_btn');

console.log(filterSelect, selectBtn, optionBtns);

selectBtn.addEventListener('click',()=>{
    filterSelect.classList.toggle('on');
});

optionBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        selectBtn.querySelector('span').textContent = btn.textContent;
        optionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterSelect.classList.remove('on');
    });
});