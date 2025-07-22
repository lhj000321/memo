document.addEventListener('DOMContentLoaded', () => {

    // ==================== 모바일 네비게이션 토글 ====================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        // 햄버거 버튼 클릭 시 메뉴와 버튼에 'active' 클래스 토글
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // ==================== 메뉴 링크 클릭 시 모바일 메뉴 닫기 ====================
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // 모바일 메뉴가 활성화 상태일 때만 닫기
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // ==================== 스크롤 시 네비게이션 링크 활성화 ====================
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('.nav-menu a');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';

        // 현재 스크롤 위치에 맞는 섹션 ID 찾기
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - navHeight) {
                current = section.getAttribute('id');
            }
        });

        // 모든 네비게이션 링크에서 'active-link' 클래스를 제거하고, 현재 섹션에 해당하는 링크에만 추가
        navLi.forEach(a => {
            a.classList.remove('active-link');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active-link');
            }
        });
    });

    // ==================== 이력서 다운로드 버튼 (기능 예시) ====================
    const downloadBtn = document.getElementById('download-resume-btn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // window.location.href = 'files/이현진_이력서.pdf';
            alert('이력서 다운로드 기능은 준비 중입니다.');
        });
    }

    // ==================== 연락처 폼 유효성 검사 및 제출 처리 ====================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('모든 필드를 입력해주세요.');
            } else {
                alert('메시지가 성공적으로 전송되었습니다. 감사합니다!');
                contactForm.reset(); 
            }
        });
    }
});