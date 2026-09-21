/* sub_page.js */

// 모바일용 서브 네비
const tabMenu = document.querySelector('.tab_menu');
const tabContent = document.querySelector('.tab_content');

menuDB.forEach((w, i)=>{
    // active라는 변수의 i가 0일때 active를 주고 아니면 빈 문자열로 둔다(active를 적용하지 않는다).
    const active = i === 0 ? 'active' : '';

    const menuLi = document.createElement('li');
    menuLi.className = active;
    // menuLi에 새로운 속성을 부여(== setAttribute) -> 요소.setAttribute('속성명', 속성에 넣을 값);
    menuLi.setAttribute('data-tab', w.id);
    menuLi.innerHTML = `<a href="#">${w.title}</a>`;
    tabMenu.appendChild(menuLi);

    const subList = w.sub.map(subTitle => `<li><a href="#">${subTitle}</a></li>`).join('');

    const panelDiv = document.createElement('div');
    panelDiv.id = w.id;
    panelDiv.className = `sub_panel ${active}`;
    panelDiv.innerHTML = `
        <ul>
            ${subList}
        </ul>`;
    tabContent.appendChild(panelDiv);
})

// 모바일용 서브 메뉴의 카테고리 탭 클릭 시 해당 하위 카테고리 리스트가 등장
tabMenu.addEventListener('click', (e)=>{
    const targetLi = e.target.closest('li');
    if(!targetLi) return;
    e.preventDefault();

    const targetId = targetLi.getAttribute('data-tab');

    tabMenu.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    targetLi.classList.add('active');

    const targetPanel = document.getElementById(targetId);
    tabContent.querySelectorAll('.sub_panel').forEach(panel => panel.classList.remove('active'));
    if(targetPanel){targetPanel.classList.add('active');}
});

// 전체 메뉴(햄버거) 클릭 시 모바일 서브 메뉴 등장, 닫기 버튼 클릭 시 서브 메뉴 닫힘
const mobalieSnbNav = document.querySelector('.mobaile_sub_nav');
const allMenuBtn = document.querySelector('.all_menu_btn');
const closeBtn = document.querySelector('.m_sub .close_btn');

allMenuBtn.addEventListener('click', ()=>{
    mobalieSnbNav.classList.add('active');
})

closeBtn.addEventListener('click', ()=>{
    mobalieSnbNav.classList.remove('active');
})

// 검색창
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

// 네비게이션 all 호버 시 검색창 없어지게 하기
const navAll = document.querySelector('.gnb .gnb_all');
navAll.addEventListener('mouseenter',()=>{
    searchOpen.classList.remove('active');
});

// CTA 버튼
const topBtn = document.querySelector('.top_btn_png');

topBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
});

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

// 3-2-2-1. 필터 옵션
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

// 3-2-2-2. 상품 미리보기 필터 옵션
const viewTypeBtns = document.querySelectorAll('.view_type_wrap button');

viewTypeBtns.forEach(btn => {
    btn.addEventListener('click',()=>{
        viewTypeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});