(() => {
  const start = () => {
    const hero = document.querySelector('.hero h1');
    if (hero) hero.innerHTML = '경험보다,<br><strong>끝까지 함께 달릴 사람.</strong>';

    const applicationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf7BD7H9cX7e-xVDxzESZEEZbFypeeamTT4qn4_bgBwI06mVQ/viewform?usp=dialog';
    document.querySelectorAll('.nav-cta, .hero-actions .primary, .apply-button').forEach(link => {
      link.href = applicationUrl;
      link.target = '_blank';
      link.rel = 'noreferrer';
    });
    const heroApply = document.querySelector('.hero-actions .primary');
    if (heroApply) heroApply.innerHTML = '구글폼으로 지원하기 <span>↗</span>';
    const heroDeadline = document.querySelector('.hero-meta div:first-child');
    if (heroDeadline) heroDeadline.innerHTML = '<b>09.04 · 18:00까지</b><span>서류 모집 중</span>';
    const recruitNotice = document.querySelector('.recruit-title > span');
    if (recruitNotice) recruitNotice.textContent = '모집 중 · 09.04 18:00까지 지원을 받습니다.';
    const firstSchedule = document.querySelector('.schedule article:first-child');
    if (firstSchedule) {
      firstSchedule.querySelector('b').textContent = '09.04 · 18:00까지';
      firstSchedule.querySelector('em').textContent = '모집 중';
    }
    const finalApply = document.querySelector('.apply-button');
    if (finalApply) finalApply.innerHTML = '구글폼으로 지원하기 <span>↗</span>';
    const applyStatus = document.querySelector('.apply small');
    if (applyStatus) applyStatus.textContent = 'APPLICATION OPEN · 09.04 18:00까지';

    const universities = ['가천대학교','가톨릭대학교','단국대학교','덕성여자대학교','동국대학교','동덕여자대학교','동명대학교','서경대학교','서울여자대학교','성신여자대학교','세종대학교','숙명여자대학교','숭실대학교','안양대학교','이화여자대학교','인하대학교','중앙대학교','한국공학대학교','한국항공대학교','한성대학교','홍익대학교 세종캠퍼스','홍익대학교 서울캠퍼스'];
    const stats = document.querySelector('.stats');
    if (stats) {
      stats.innerHTML = '<div><strong>22</strong><span>함께하는 대학</span></div><div><strong>10<span>주</span></strong><span>파트별 스터디</span></div><div><strong>6<span>개월</span></strong><span>배움에서 프로젝트까지</span></div>';
      stats.insertAdjacentHTML('afterend', `<details class="university-list"><summary>함께하는 22개 대학 보기 <span>+</span></summary><div>${universities.map(x => `<span>${x}</span>`).join('')}</div></details>`);
    }
    const networkBenefit = document.querySelector('.benefit-list article:nth-child(2) h3');
    if (networkBenefit) networkBenefit.textContent = '22개 대학의 네트워크';
    document.querySelector('.parts .section-title-row p')?.remove();
    const eligibility = document.querySelector('.info-cards article:last-child');
    if (eligibility) {
      eligibility.querySelector('strong').textContent = '한국항공대학교 학생';
      eligibility.querySelector('p').textContent = '재학생 · 휴학생 모두 가능 · 학과 및 경험 무관';
    }

    const curriculum = document.querySelector('.curriculum-table');
    if (curriculum) {
      const tracks = {
        'Plan': ['Chapter 0. 서비스 기획 입문','Chapter 1. 문제 정의와 리서치 (1)','Chapter 2. 문제 정의와 리서치 (2)','Chapter 3. 서비스 정의와 비즈니스 모델링','Chapter 4. 기획 산출물 (1) UX 설계','Chapter 5. 기획 산출물 (2) 상세 기능 정의','Chapter 6. 기획 산출물 (3) 기획 문서 작성','Chapter 7. 기획 산출물 (4) 화면 설계','Chapter 8. 프로젝트 관리 및 협업','Chapter 9. 서비스 품질 검증','Chapter 10. 그로스 전략 설계'],
        'Design': ['Chapter 0. 피그마 기초 학습','Chapter 1. UI 디자인 입문: 클론 디자인 App & Web','Chapter 2. 리디자인: Pain Point 분석','Chapter 3. 리디자인: Solution 탐구','Chapter 4. 와이어프레임 & 디자인 시스템 구축','Chapter 5. UI 디자인 진행','Chapter 6. UI 디자인 확장 & 포트폴리오 제작','Chapter 7. 프로토타입 제작 & 복습 가이드','Chapter 8. 매칭 프로젝트 디자인 (1)','Chapter 9. 매칭 프로젝트 디자인 (2)','Chapter 10. 매칭 프로젝트 디자인 (3)','Appendix 1. 협업 가이드','Appendix 2. 디자인 인사이트'],
        'Product Engineering · Web': ['1주차 · 데이터 모델링과 타입 시스템 기초','2주차 · SQL 데이터 조작과 React UI 기초','3주차 · 서버 환경 세팅과 웹 화면 라우팅','4주차 · ORM 기반 CRUD와 클라이언트 상태 관리','5주차 · Public API 구축과 웹 API 연동','6주차 · CRUD API와 서버 상태 관리','7주차 · JWT 인증/인가와 사용자 인증 연동','8주차 · 핵심 비즈니스 로직과 사용자 기능 연동','9주차 · API 안정화와 Next.js 웹 개발','10주차 · 운영 환경 분리와 웹 서비스 배포'],
        'Product Engineering · Mobile': ['1주차 · 데이터 모델링과 앱 UI 기초','2주차 · SQL 데이터 조작과 사용자 입력 폼','3주차 · 서버 환경 세팅과 앱 화면 내비게이션','4주차 · ORM 기반 CRUD와 비동기 UI 처리','5주차 · Public API 설계와 앱 아키텍처 정립','6주차 · CRUD API 구축과 네트워크 통신','7주차 · JWT 인증/인가와 사용자 토큰 관리','8주차 · 핵심 비즈니스 로직과 데이터 상태 관리','9주차 · API 명세 확정과 심화 기능 연동','10주차 · 클라우드 환경 분리 배포와 앱 출시'],
        'Infra': ['1주차 · 신뢰할 수 있는 배포 파이프라인','2주차 · 관측 가능한 시스템 만들기','3주차 · 장애를 견디는 시스템 만들기']
      };
      curriculum.insertAdjacentHTML('beforebegin', `<div class="curriculum-tabs">${Object.keys(tracks).map((x,i) => `<button class="${i ? '' : 'active'}">${x}</button>`).join('')}</div>`);
      const render = (key) => curriculum.innerHTML = `<article class="curriculum-detail"><h3>${key}</h3><ol>${tracks[key].map(x => `<li>${x}</li>`).join('')}</ol></article>`;
      document.querySelectorAll('.curriculum-tabs button').forEach(button => button.onclick = () => { document.querySelectorAll('.curriculum-tabs button').forEach(x => x.classList.toggle('active', x === button)); render(button.textContent); });
      render('Plan');
    }
    document.querySelectorAll('.track-card h3').forEach((title) => {
      title.textContent = title.textContent.replace('PE ·', 'Product Engineering ·');
    });
    const infraNote = document.querySelector('.infra-note');
    if (infraNote) infraNote.innerHTML = '<b>+ Infra 심화</b> Product Engineering 트랙 수료자 중 희망자는 8–10주차에 별도 심화 워크북을 선택할 수 있습니다.';

    const grid = document.querySelector('.event-grid');
    if (grid) {
      const cards = [...grid.children];
      [cards[3], cards[2], cards[1], cards[0]].forEach((card,i) => { card.querySelector('.event-body > span').textContent = `0${i+1}`; grid.append(card); });
      grid.insertAdjacentHTML('beforeend', '<article class="event-card"><div class="event-image event-extra"><span>MORE TOGETHER</span><strong>그 외 활동들</strong><p>연합 네트워킹 데이 · 너디너리 해커톤 · UMC 해커톤 · 파트 스터디</p><a href="https://www.instagram.com/uni_makeus_challenge/" target="_blank" rel="noreferrer">UMC 공식 인스타그램 보기 ↗</a><a href="https://www.instagram.com/kau_makeus_challenge/" target="_blank" rel="noreferrer">한국항공대학교 UMC 인스타그램 ↗</a><div class="study-mini"><img src="./study/study-1.jpg" alt="UMC 스터디 현장 1"><img src="./study/study-2.jpg" alt="UMC 스터디 현장 2"><img src="./study/study-3.png" alt="UMC 스터디 현장 3"><img src="./study/study-4.png" alt="UMC 스터디 현장 4"><img src="./study/study-5.jpg" alt="UMC 스터디 현장 5"><img src="./study/study-6.jpg" alt="UMC 스터디 현장 6"></div></div><div class="event-body"><span>05</span><div><h3>더 넓게, 더 많이</h3><p>함께 배우고 연결되며 직접 부딪혀 성장하는 다양한 활동을 이어갑니다.</p></div></div></article>');
    }
    const commitment = document.querySelector('.commitment');
    if (commitment) {
      commitment.insertAdjacentHTML('beforebegin', '<section style="padding:0 6vw 100px"><details style="border-top:1px solid #07171329;border-bottom:1px solid #07171329"><summary style="cursor:pointer;display:flex;justify-content:space-between;padding:24px 0;font-size:18px;font-weight:800">운영진 소개 보기 <span>+</span></summary><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding-bottom:28px"><article style="background:#e8ebe5;padding:24px"><small>PRESIDENT</small><h3>니카 · 이나경</h3><p>회장 · 한국항공대학교 소프트웨어학과 24학번</p></article><article style="background:#e8ebe5;padding:24px"><small>VICE PRESIDENT</small><h3>원디 · 이상원</h3><p>부회장 · 한국항공대학교 소프트웨어학과 21학번</p></article></div></details></section>');
      commitment.querySelector('h2').insertAdjacentHTML('afterend', '<p class="commitment-intro">공대에만 구애받지 않습니다. 내 아이디어로 IT 창업을 꿈꾸는 PM부터<br>앱·웹을 만들고 싶은 개발자, 디자인을 경험하고 싶은 분까지 모두 환영합니다.</p>');
      const cards = commitment.querySelectorAll('.commit-grid article');
      const content = [
        ['아이디어를 현실로', '내 아이디어로 IT 창업을 해보고 싶거나, 서비스의 방향을 이끌어 보고 싶은 PM을 찾습니다.'],
        ['직접 만들어 보고 싶다면', '코딩으로 앱과 웹 서비스를 만들고, 사용자에게 닿는 결과물을 완성해 보고 싶은 분을 기다립니다.'],
        ['새로운 경험이 필요하다면', '웹·앱 디자인을 해보고 싶거나, 의미 있는 대외활동 경험과 함께할 동료를 찾는 분도 환영합니다.']
      ];
      cards.forEach((card, index) => {
        card.querySelector('h3').textContent = content[index][0];
        card.querySelector('p').textContent = content[index][1];
      });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  const style = document.createElement('style');
  style.textContent = `.hero h1{line-height:1.08!important}.stats{grid-template-columns:repeat(3,1fr)!important}.benefit-list article:hover{padding:0!important}.university-list{margin-top:18px}.university-list summary{cursor:pointer;font-weight:800}.university-list>div{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.university-list>div span{border:1px solid #07171329;border-radius:999px;padding:8px 11px;font-size:12px}.curriculum-tabs{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 28px}.curriculum-tabs button{border:1px solid #ffffff47;border-radius:999px;color:#fff;background:transparent;padding:10px 15px;cursor:pointer;font-weight:700}.curriculum-tabs button.active{background:#12e8a5;border-color:#12e8a5;color:#071713}.curriculum-detail{display:block!important}.curriculum-detail h3{margin-bottom:24px!important}.curriculum-detail ol{margin:0;padding-left:22px;color:#ffffffcf;line-height:2}.event-extra{display:flex;flex-direction:column;justify-content:flex-end;padding:28px;background:linear-gradient(135deg,#082b24,#0b7a60);color:#fff}.event-extra strong{font-size:42px;letter-spacing:-.06em}.event-extra p{max-width:330px;color:#ffffffb3;line-height:1.7}.event-extra span{position:absolute;top:16px;left:16px}@media(max-width:900px){.stats{grid-template-columns:1fr 1fr!important}.stats>div:nth-child(3){border-bottom:0}.curriculum-tabs button{flex:1}}`;
  document.head.append(style);
  const interactionStyle = document.createElement('style');
  interactionStyle.textContent = `.event-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:70px 4vw!important}.event-card:nth-child(even){margin-top:0!important}.event-image img{object-fit:cover!important;background:#071713}.event-image.dual{grid-template-columns:repeat(2,minmax(0,1fr))!important}.event-extra a{display:inline-block;width:max-content;margin-top:16px;color:#071713;background:#12e8a5;padding:10px 12px;font-size:12px;font-weight:800}.benefit-list article{min-height:94px!important;transition:min-height .25s,background .25s!important}.benefit-list article:hover{min-height:150px!important}.benefit-list p{max-height:0;opacity:0;overflow:hidden;transition:.25s}.benefit-list article:hover p{max-height:80px;opacity:1}.commitment-intro{max-width:720px;margin:-42px auto 72px;font-size:16px;line-height:1.75;opacity:.72}@media(max-width:900px){.event-grid{grid-template-columns:1fr!important}.commitment-intro{margin:-28px auto 48px}}`;
  document.head.append(interactionStyle);
  const headlineStyle = document.createElement('style');
  headlineStyle.textContent = `.hero-content{max-width:1200px!important}.hero h1 strong{display:inline-block;white-space:nowrap;font-size:clamp(48px,6.4vw,112px)}.study-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:42px}.study-gallery img{width:100%;aspect-ratio:4/3;object-fit:contain;background:#e8ebe5}@media(max-width:900px){.hero h1 strong{white-space:normal;font-size:inherit}.study-gallery{grid-template-columns:1fr 1fr}}`;
  document.head.append(headlineStyle);
  const photoStyle = document.createElement('style');
  photoStyle.textContent = `.event-extra{aspect-ratio:auto!important;min-height:520px!important}.study-mini{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:22px}.study-mini img{width:100%;aspect-ratio:1.15;object-fit:contain;background:#062f27}@media(max-width:900px){.event-extra{min-height:0!important}.study-mini{grid-template-columns:repeat(2,1fr)}}`;
  document.head.append(photoStyle);
})();
