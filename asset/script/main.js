// 메인 슬라이드
const mainSlide = new Swiper(".main-slide", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});


// 콜백 이벤트
/* mainSlide.on('slideChange', function () {
    active = this.realIndex + 1;

    if (this.slides[active].classList.contains('white')) {
        // 제거
        // 버튼두개한테 클레스1추가
    } else if (this.slides[active].classList.contains('green')) {
        // 제거
        // 버튼두개한테 클레스2추가
    } else {
        // 제거
    }
}) */





// 스타일 & 인기 유저 슬라이드
const pickSlide = new Swiper(".pick .pick-slide", {
    slidesPerView: 'auto',
    spaceBetween: 9,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        768: {
            spaceBetween: 4,
        }
    }
});







// 제품 목록
const product = new Swiper(".product-slide", {
    slidesPerView: 'auto',
    touchRatio: 1,
    breakpoints: {
        768: {
            touchRatio: 0,
        }
    }
})




// 맨 위로 올라가기
$('.btn-top').click(function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})




// 모바일 메뉴 열렸을 때 body 배경 변경
// 모바일 메뉴 열기
$('.gnb-menu .mobile-menu').click(function (e) {
    e.preventDefault();
    //alert('1');

    $('body').addClass('o-hidden');
    $('.mobile-area').addClass('open');
})

// 모바일 메뉴 닫기
$('.mobile-wrap .btn-close').click(function (e) {
    e.preventDefault();

    $('body').removeClass('o-hidden');
    $('.mobile-area').removeClass('open');
})


// 모바일 배너
$('.mobile-banner .btn-close').click(function (e) {
    e.preventDefault();

    $('.mobile-banner').addClass('close');
})


// 스크롤 내리면 모바일 배너 사라짐
$(window).scroll(function () {
    current = $(this).scrollTop();

    if (current > 0) {
        $('.mobile-banner').addClass('close')
    } else {
        $('.mobile-banner').removeClass('close')
    }
})

$(window).trigger('scroll'); //강제실행



// footer 사업자 정보 클릭
$('.company-info').click(function () {
    $('.company-addr').toggleClass('open');
})


// data 영역
fetch('http://127.0.0.1:5500/asset/data/brandData.json')
    .then((response) => response.json())
    .then((json) => {
        data = json.items;

        let html = "";

        data.forEach(element => {
            html += `<li class="grid-item brand-item">
                    <a href="/경로/${element.id}" class="">
                        <img src="${element.thumbnail}">
                        <span class="name">${element.title}</span>
                    </a>
                </li>`;
        });

        $('#brandList').html(html);
    })


// 젶품

/* fetch('/asset/data/brandData.json') */
/* .then((response) => response.json())
.then((json) => {
    data = json.items;
    let html = "";
    qucickEl = `<span class="icon">빠른배송</span>`;
    data.forEach(element => {
        quick = (element.quick) ? qucickEl : '';
        html += `<li class="brand-item">
                    <a href="/경로/${element.id}" class="">
                    <img src="${element.thumbnail}"> ${element.title}</a>
                    ${quick}
                </li>`;
    });

    $('#brandList').html(html);
}) */