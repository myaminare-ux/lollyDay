/* sub_db.js */

// 모바일용 서브 네비-카테고리 영역
const menuDB = [
    {id:'tab1', title:'ALL', sub:['전체 상품 보기']},
    {id:'tab2', title:'BEST', sub:['일일 베스트', '주간 베스트', '월간 베스트']},
    {id:'tab3', title:'NEW', sub:['전체 신상품 보기']},
    {id:'tab4', title:'문구', sub:['다이어리 & 플래너', '캘린더', '노트 & 메모', '펜 & 펜케이스', '카드 & 엽서', '데코레이션', '파일']},
    {id:'tab5', title:'패션', sub:['가방', '파우치', '악세사리', '디지털 악세사리']},
    {id:'tab6', title:'리빙', sub:['키친', '포스터', '기타']},
    {id:'tab7', title:'시그니처', sub:['못나니즈', '팔팔노트', '해피어라벨 시리즈']},
    {id:'tab8', title:'SEASON', sub:['계절 추천 아이템', '독서 추천 아이템', '하반기 추천 아이템']},
    {id:'tab9', title:'GIFT GUIDE', sub:['전체보기', '1만원 이하', '2~3만원대', '4만원 이상']},
    {id:'tab10', title:'OUTLET', sub:['문구', '패션 / 리빙']},
    {id:'tab11', title:'BRAND', sub:['캠페인', '프로젝트', '소확행 리스트']}
];

// 3-1-2. 카테고리
const subTabListDB = [
    { id:'daily', name:'일일' },
    { id:'weekly', name:'주간' },
    { id:'monthly', name:'월간' },
]

// 3-2-1. 서브 아이템 컨테이너 카테고리
const conSubTabDB = [
    {id:'all', name:'전체',},
    {id:'planner', name:'다이어리 & 플래너',},
    {id:'calendar', name:'캘린더',},
    {id:'note', name:'노트 & 메모',},
    {id:'pen', name:'펜 & 펜케이스',},
    {id:'card', name:'카드 & 엽서',},
    {id:'deco', name:'데코레이션',},
    {id:'file', name:'파일',},
    {id:'fashion', name:'패션',},
    {id:'living', name:'리빙',},
    {id:'signature', name:'시그니처',},
]

// 서브 아이템 리스트
const subItemDB = [
{
    id:1,
    title:'내 A6 노트를 보호해 줄 커버',
    size:'A6',
    img:'./images/best_item1.jpg',
    originPrice:'16,000',
    discount:'5%',
    salePrice:'15,200',
},
{
    id:2,
    title:'A6 노트 커버와 함께 사용하는 스트랩',
    size:'A6',
    img:'./images/best_item2.jpg',
    originPrice:'1,300',
    discount:'5%',
    salePrice:'1,235',
},
{
    id:3,
    title:'기록 스타일에 맞게 골라 쓰는 A6 노트 5종',
    size:'A6',
    img:'./images/best_item3.jpg',
    originPrice:'11,000',
    discount:'5%',
    salePrice:'10,450',
},
{
    id:4,
    title:'집 안 기분 좋은 포인트! 못나니즈 사각 쿠션',
    size:null,
    img:'./images/new_item1.jpg',
    originPrice:'43,000',
    discount:'15%',
    salePrice:'36,550',
},
{
    id:5,
    title:'티켓, 사진을 쏙! 나만의 작은 기억 도서관',
    size:null,
    img:'./images/new_item2.jpg',
    originPrice:'32,000',
    discount:'50%',
    salePrice:'16,000',
},
{
    id:6,
    title:'책 사이에서 잃어버린 물건을 발견한다면?',
    size:null,
    img:'./images/new_item3.jpg',
    originPrice:'9,000',
    discount:'5%',
    salePrice:'8,550',
},
{
    id:7,
    title:'생활방수 가능한 TPL 스트링 펜 케이스',
    size:null,
    img:'./images/new_item4.jpg',
    originPrice:'14,500',
    discount:'5%',
    salePrice:'13,770',
},
]