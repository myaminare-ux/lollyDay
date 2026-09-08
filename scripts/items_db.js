/* best_db.js */
// 베스트
const bestDB = [
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
    title:'내 A6 노트를 보호해 줄 커버',
    size:'A6',
    img:'./images/best_item1.jpg',
    originPrice:'16,000',
    discount:'5%',
    salePrice:'15,200',
},
];

// 신상품
const newDB = [
{
    id:1,
    title:'집 안 기분 좋은 포인트! 못나니즈 사각 쿠션',
    img:'./images/new_item1.jpg',
    originPrice:'43,000',
    discount:'15%',
    salePrice:'36,550',
},
{
    id:2,
    title:'티켓, 사진을 쏙! 나만의 작은 기억 도서관',
    img:'./images/new_item2.jpg',
    originPrice:'32,000',
    discount:'50%',
    salePrice:'16,000',
},
{
    id:1,
    title:'티켓, 사진을 쏙! 나만의 작은 기억 도서관',
    img:'./images/new_item3.jpg',
    originPrice:'9,000',
    discount:'5%',
    salePrice:'8,550',
},
{
    id:1,
    title:'생활방수 가능한 TPL 스트링 펜 케이스',
    img:'./images/new_item4.jpg',
    originPrice:'14,500',
    discount:'5%',
    salePrice:'13,770',
},
];

// 시즌 기획전
const seasonDB = [
{
    id:1,
    subTitle:'공간 분리가 완벽한',
    title:'레이어 파우치',
    img:'./images/season_item1.jpg',
    originPrice:'21,500',
    discount:'5%',
    salePrice:'20,420',
},
{
    id:2,
    subTitle:'새로운 컬러로 다시 돌아온',
    title:'코듀로이 파우치',
    img:'./images/season_item2.jpg',
    originPrice:'14,000',
    discount:'5%',
    salePrice:'13,300',
},
{
    id:3,
    subTitle:'달마다 새로운 기분으로 쓰는',
    title:'Month 다이어리',
    img:'./images/season_item3.jpg',
    originPrice:'5,000',
    discount:'5%',
    salePrice:'4,750',
},
{
    id:4,
    subTitle:'공간 분리가 완벽한',
    title:'레이어 파우치',
    img:'./images/season_item1.jpg',
    originPrice:'21,500',
    discount:'5%',
    salePrice:'20,420',
},
];

// 선물 추천
const giftDB = [
{
    id:1,
    title:'품절 대란의 주인공! 해피어 라벨 파우치',
    img:'./images/gift_item1.jpg',
    originPrice:'12,500',
    discount:'5%',
    salePrice:'11,870',
},
{
    id:2,
    title:'카드와 립밤, 작은 소품들의 집',
    img:'./images/gift_item2.jpg',
    originPrice:'9,500',
    discount:'5%',
    salePrice:'9,020',
},
{
    id:3,
    title:'네모네모 스퀘어 파우치',
    img:'./images/gift_item3.jpg',
    originPrice:'18,000',
    discount:'5%',
    salePrice:'13,300',
},
{
    id:4,
    title:'품절 대란의 주인공! 해피어 라벨 파우치',
    img:'./images/gift_item1.jpg',
    originPrice:'12,500',
    discount:'5%',
    salePrice:'11,870',
},
];

// 시그니처
const signatureDB = [
{
    categoryClass:'mnns',
    bannerImg:'./images/sign_mnns_banner.jpg',
    bannerTitle:'못나니즈',
    bannerDesc:'오롤리데이의 원조, 매력 넘치는 캐릭터 삼총사를 만나보세요!',
    items:[
        {
            img:'./images/sign_mnns_item1.jpg',
            title:'왕크왕귀 못나니즈 납작 얼굴 인형 키링',
            originPrice:'18,000',
            discount:'10%',
            salePrice:'16,200',
        },
        {
            img:'./images/sign_mnns_item2.jpg',
            title:'말랑말랑 쫀득쫀득 스트레스야 물러가라',
            originPrice:'15,500',
            discount:'5%',
            salePrice:'14,720',
        },
        {
            img:'./images/sign_mnns_item3.jpg',
            title:'왕 크니까 왕 귀엽다! 못나니즈 리무버블 스티커 팩',
            originPrice:'18,000',
            discount:'10%',
            salePrice:'16,200',
        },
    ]
},
{
    categoryClass:'part_part',
    bannerImg:'./images/sign_part_banner.jpg',
    bannerTitle:'팥팥노트',
    bannerDesc:'팥 심은 데 팥 난다! 노력이 결실이 되는 아이템',
    items:[
        {
            img:'./images/sign_part_item1.jpg',
            title:'팥팥노트가 처음인 해피어를 위한 세트 상품',
            originPrice:'11,600',
            discount:'5%',
            salePrice:'11,020',
        },
        {
            img:'./images/sign_part_item2.jpg',
            title:'가로형 팥팥노트가 처음인 해피어를 위한 세트 상품',
            originPrice:'15,800',
            discount:'5%',
            salePrice:'15,010',
        },
        {
            img:'./images/sign_part_item3.jpg',
            title:'가로형 팥팥노트를 세워둘 수 있는 삼각대',
            originPrice:'4,200',
            discount:'5%',
            salePrice:'3,990',
        },
    ]
},
{
    categoryClass:'happyer',
    bannerImg:'./images/sign_happy_banner.jpg',
    bannerTitle:'해피어라벨 시리즈',
    bannerDesc:'심플한 자수 라벨 하나로 일상에 행복 더하기',
    items:[
        {
            img:'./images/sign_happy_item1.jpg',
            title:'2단 지퍼로 공간 분리가 완벽한 레이어 파우치',
            originPrice:'21,500',
            discount:'5%',
            salePrice:'20,420',
        },
        {
            img:'./images/sign_happy_item2.jpg',
            title:'방수되는 통통한 PVC 핸들 파우치',
            originPrice:'22,000',
            discount:'5%',
            salePrice:'20,900',
        },
        {
            img:'./images/sign_happy_item3.jpg',
            title:'왕 크니까 왕 예쁜 PVC 비치백',
            originPrice:'42,000',
            discount:'5%',
            salePrice:'39,900',
        },
    ]
},
];

// 소확행 리스트
const routineDB = [
{
    img:'./images/routine_small1.jpg',
    title:'매일 매일 행복 뽑기',
    desc:'1DAY 1HAPPY! 오늘은 어떤 행복이 기다리고 있을까요?',
},
];