import CurriculumTabs from "./curriculum-tabs";

const benefits = [
  { number: "01", title: "교과서 밖의 협업", body: "기획·디자인·개발이 한 팀으로 움직이며 실제 서비스가 완성되는 과정을 경험합니다." },
  { number: "02", title: "22개 대학의 네트워크", body: "학교와 전공의 경계를 넘어 같은 목표를 가진 사람들과 만나고 오래 갈 동료를 만듭니다." },
  { number: "03", title: "결과가 남는 방학", body: "10주 스터디에서 배운 것을 방학 프로젝트로 연결해 포트폴리오와 실전 경험을 함께 만듭니다." },
];

const tracks = [
  { key: "PLAN", title: "Plan", desc: "문제 발견부터 서비스 전략과 화면 설계까지", tags: ["리서치", "UX", "기획 문서", "PM"] },
  { key: "DESIGN", title: "Design", desc: "사용자 경험을 시각 언어와 프로토타입으로", tags: ["Figma", "UI", "디자인 시스템", "Prototype"] },
  { key: "WEB", title: "Product Engineering · Web", desc: "프론트엔드와 백엔드를 오가며 웹 서비스를 끝까지", tags: ["React", "Next.js", "API", "Database"] },
  { key: "MOBILE", title: "Product Engineering · Mobile", desc: "사용자의 손안에서 동작하는 모바일 제품을", tags: ["Flutter", "UI", "API", "Deploy"] },
];

const events = [
  { title: "연합 & 학교 OT", label: "THE FIRST STEP", image: "/events/event-7.jpg", body: "UMC의 문화와 커리큘럼을 만나고, 앞으로 함께 달릴 챌린저들과 처음 연결되는 순간입니다." },
  { title: "PM Day", label: "MAKE IT BETTER", image: "/events/event-4.jpg", extraImage: "/events/event-5.jpg", body: "PM·디자이너·개발자가 모여 아이디어를 점검하고 피드백으로 프로젝트 완성도를 높입니다." },
  { title: "Sprint Review Day", label: "SHARE THE PROCESS", image: "/events/event-3.jpg", extraImage: "/events/event-6.jpg", body: "지부 프로젝트 팀들이 진행 상황과 기술적 고민, 도전과 시행착오를 공유합니다." },
  { title: "UMC Demo Day", label: "BUILD TO SHOW", image: "/events/event-1.jpg", extraImage: "/events/event-2.jpg", body: "스터디와 프로젝트의 끝에서, 실제 사용자를 고려해 만든 서비스를 세상에 선보입니다." },
];

const studyPhotos = ["study-1.jpg", "study-2.jpg", "study-3.png", "study-4.png", "study-5.jpg", "study-6.jpg"];
const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7yUFp1ZFbJREAZEx1l6ap0ZEb_bhcFazSyGhoWHfIFFL8vA/viewform?usp=dialog";

const curriculum = [
  { week: "01–03", title: "기초를 단단하게", plan: "서비스 기획 입문 · 문제 정의 · 리서치", design: "Figma · UI 디자인 · Pain Point", pe: "데이터 모델링 · UI 기초 · 개발 환경" },
  { week: "04–07", title: "직접 만들어보기", plan: "비즈니스 모델 · UX · 기능 정의", design: "와이어프레임 · 디자인 시스템 · UI", pe: "CRUD · 상태 관리 · API · 인증/인가" },
  { week: "08–10", title: "서비스로 연결하기", plan: "화면 설계 · 프로젝트 관리 · 품질 검증", design: "프로토타입 · 포트폴리오 · 협업", pe: "핵심 로직 · 안정화 · 배포/출시" },
  { week: "WINTER", title: "연합 프로젝트", plan: "PM으로 팀의 문제와 방향을 이끌기", design: "제품 경험을 설계하고 검증하기", pe: "실제 서비스를 구현하고 배포하기" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="UMC KAU 홈"><span className="brand-mark">U</span><span>UMC</span><em>KAU</em></a>
        <nav aria-label="주요 메뉴"><a href="#about">소개</a><a href="#parts">파트</a><a href="#events">활동</a><a href="#recruit">모집안내</a></nav>
        <a className="nav-cta" href={applicationUrl} target="_blank" rel="noreferrer">지원하기 <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-content">
          <p className="eyebrow"><span /> KOREA AEROSPACE UNIVERSITY · 11TH</p>
          <h1>경험을 쌓고,<br /><strong>함께 성장할 사람.</strong></h1>
          <p className="hero-copy">전공도, 시작점도 상관없어요.<br />이번 학기와 겨울방학을 뜨겁게 채울 열정이면 충분합니다.</p>
          <div className="hero-actions"><a className="button primary" href={applicationUrl} target="_blank" rel="noreferrer">구글폼으로 지원하기 <span>↗</span></a><a className="text-link" href="#about">UMC 더 알아보기 <span>↘</span></a></div>
        </div>
        <div className="hero-meta"><div><b>09.04 · 18:00까지</b><span>서류 모집 중</span></div><div><b>6 MONTHS</b><span>26.09 — 27.02</span></div><div><b>NO LIMITS</b><span>전공 · 경험 무관</span></div></div>
        <p className="scroll-note">SCROLL TO EXPLORE <span>↓</span></p>
      </section>

      <section className="ticker" aria-label="UMC 주요 키워드"><div>LEARN TOGETHER <i>✦</i> BUILD FOR REAL <i>✦</i> GROW BEYOND CAMPUS <i>✦</i> LEARN TOGETHER <i>✦</i></div></section>

      <section className="section about" id="about">
        <div className="section-kicker">01 / ABOUT UMC</div>
        <div className="about-grid"><h2>우리는 함께 배우고,<br />진짜 서비스를 만듭니다.</h2><div className="about-copy"><p>UMC는 대학생이 기획, 디자인, 개발을 배우고 실제 프로젝트까지 완주하는 전국 대학 연합 IT 동아리입니다.</p><p>매주 워크북과 스터디로 실력을 쌓고, 다른 학교·다른 파트의 동료들과 팀을 이루어 아이디어를 작동하는 서비스로 만듭니다.</p></div></div>
        <div className="stats"><div><strong>22</strong><span>함께하는 대학</span></div><div><strong>10<span>주</span></strong><span>파트별 스터디</span></div><div><strong>6<span>개월</span></strong><span>배움에서 프로젝트까지</span></div></div>
        <p className="university-note">22개 참여 대학 명단은 모집 공지와 함께 안내됩니다.</p>
      </section>

      <section className="section benefits">
        <div className="section-kicker light">02 / WHY UMC</div>
        <div className="benefit-head"><h2>한 학기 뒤,<br />분명 달라져 있을 당신.</h2><p>혼자서는 만나기 어려운 사람, 과정, 결과를<br />UMC에서 한 번에 경험하세요.</p></div>
        <div className="benefit-list">{benefits.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p><i>↗</i></article>)}</div>
      </section>

      <section className="section parts" id="parts">
        <div className="section-kicker">03 / FIND YOUR PART</div>
        <div className="section-title-row"><h2>각자의 강점으로,<br />하나의 서비스를.</h2></div>
        <div className="track-grid">{tracks.map((track, index) => <article className="track-card" key={track.key}><div className="track-top"><span>0{index + 1}</span><b>{track.key}</b></div><h3>{track.title}</h3><p>{track.desc}</p><div className="tags">{track.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        <p className="infra-note"><b>+ Infra 심화</b> Product Engineering 트랙 수료자 중 희망자는 8–10주차에 별도 심화 워크북을 선택할 수 있습니다.</p>
      </section>

      <section className="section curriculum" id="curriculum">
        <div className="section-kicker light">04 / CURRICULUM</div>
        <div className="section-title-row light-text"><h2>10주의 배움이<br />방학의 프로젝트로.</h2><p>매주 워크북 수행과 대면 스터디,<br />그리고 인증샷으로 함께 완주합니다.</p></div>
        <CurriculumTabs curriculum={curriculum} />
      </section>

      <section className="section events" id="events">
        <div className="section-kicker">05 / UMC MOMENTS</div>
        <div className="section-title-row"><h2>배움보다 오래 남는<br />우리의 순간들.</h2><p>학교 안에서 시작해 전국의 챌린저와 연결되고,<br />함께 만든 것을 무대 위에 올립니다.</p></div>
        <div className="event-grid">{events.map((event, index) => <article className={`event-card event-${index + 1}`} key={event.title}><div className={`event-image ${event.extraImage ? "dual" : ""}`}><img src={event.image} alt={`${event.title} 현장 사진 1`} loading="lazy" />{event.extraImage && <img src={event.extraImage} alt={`${event.title} 현장 사진 2`} loading="lazy" />}<span>{event.label}</span></div><div className="event-body"><span>0{index + 1}</span><div><h3>{event.title}</h3><p>{event.body}</p></div></div></article>)}
          <article className="event-card"><div className="event-image event-extra"><span>STUDY TOGETHER</span><strong>스터디</strong><p>함께 배우고, 질문하고, 성장하는 매주 한 번의 시간입니다.</p><div className="study-mini" aria-label="UMC 스터디 현장">{studyPhotos.map((photo, index) => <img key={photo} src={`/study/${photo}`} alt={`UMC 스터디 현장 ${index + 1}`} loading="lazy" />)}</div></div><div className="event-body"><span>05</span><div><h3>스터디</h3><p>같은 목표를 가진 동료들과 배움을 쌓고 서로의 과정을 나눕니다.</p></div></div></article>
          <article className="event-card"><div className="event-image event-extra"><span>MORE TOGETHER</span><strong>그 외 활동들</strong><p>연합 네트워킹 데이, 너디너리 해커톤, UMC 해커톤 등 다양한 경험으로 더 넓게 연결됩니다.</p><a href="https://www.instagram.com/uni_makeus_challenge/" target="_blank" rel="noreferrer">UMC 공식 인스타그램 보기 ↗</a><a href="https://www.instagram.com/kau_makeus_challenge/" target="_blank" rel="noreferrer">한국항공대학교 UMC 인스타그램 ↗</a></div><div className="event-body"><span>06</span><div><h3>그 외 활동들</h3><p>함께 배우고 연결되며 직접 부딪혀 성장하는 다양한 활동을 이어갑니다.</p></div></div></article>
        </div>
      </section>

      <section className="team-preview" aria-label="운영진 소개"><details><summary>운영진 소개 보기 <span>+</span></summary><div className="team-cards"><article><span>PRESIDENT</span><h3>니카 · 이나경</h3><p>회장 · 한국항공대학교 소프트웨어학과 24학번</p></article><article><span>VICE PRESIDENT</span><h3>원디 · 이상원</h3><p>부회장 · 한국항공대학교 소프트웨어학과 21학번</p></article></div></details></section>

      <section className="commitment">
        <p>WE ARE LOOKING FOR</p><h2>완벽한 사람보다,<br /><em>끝까지 함께할 사람.</em></h2>
        <p className="commitment-intro">공대에만 구애받지 않습니다. 내 아이디어로 IT 창업을 꿈꾸는 PM부터<br />앱·웹을 만들고 싶은 개발자, 디자인을 경험하고 싶은 분까지 모두 환영합니다.</p>
        <div className="commit-grid"><article><span>01</span><h3>아이디어를 현실로</h3><p>내 아이디어로 IT 창업을 해보고 싶거나, 서비스의 방향을 이끌어 보고 싶은 PM을 찾습니다.</p></article><article><span>02</span><h3>직접 만들어 보고 싶다면</h3><p>코딩으로 앱과 웹 서비스를 만들고, 사용자에게 닿는 결과물을 완성해 보고 싶은 분을 기다립니다.</p></article><article><span>03</span><h3>새로운 경험이 필요하다면</h3><p>웹·앱 디자인을 해보고 싶거나, 의미 있는 대외활동 경험과 함께할 동료를 찾는 분도 환영합니다.</p></article></div>
      </section>

      <section className="section recruit" id="recruit">
        <div className="section-kicker">06 / RECRUITMENT</div>
        <div className="recruit-layout"><div className="recruit-title"><p>UMC KAU 11TH</p><h2>우리의 다음 장면에<br />당신을 초대합니다.</h2><span>모집 중 · 09.04 18:00까지 지원을 받습니다.</span></div><div className="schedule">
          <article className="active"><span>01</span><div><p>서류 모집</p><b>09.04 · 18:00까지</b></div><em>모집 중</em></article><article><span>02</span><div><p>면접</p><b>09.05 — 09.06</b></div></article><article><span>03</span><div><p>최종 결과 발표</p><b>09.07</b></div></article><article><span>04</span><div><p>연합 OT</p><b>09.11 · 18:00</b></div><em>필수</em></article><article><span>05</span><div><p>학교 OT</p><b>09.11 · 19:00</b></div><em>필수</em></article>
        </div></div>
        <div className="info-cards"><article><span>활동 기간</span><strong>2026.09 — 2027.02</strong><p>학기 스터디 + 겨울방학 프로젝트</p></article><article><span>동아리 회비</span><strong>35,000원</strong><p>프로젝트 참가 시 30,000원 별도</p></article><article><span>지원 조건</span><strong>한국항공대학교 학생</strong><p>재학생 · 휴학생 모두 가능 · 학과 및 경험 무관</p></article></div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-kicker">07 / FAQ</div>
        <div className="faq-layout"><h2>자주 묻는 질문</h2><div className="questions">
          <details><summary>전공자가 아니어도 지원 가능한가요?<span>+</span></summary><p>가능합니다. 전공과 기존 경험보다 성장 의지와 겨울방학까지 책임 있게 참여할 수 있는지를 중요하게 봅니다.</p></details>
          <details><summary>스터디는 어떻게 진행되나요?<span>+</span></summary><p>주 1회, 총 10주간 대면 스터디가 진행됩니다. 매주 워크북을 수행하고 학교별 파트 스터디에서 학습 내용을 나눕니다.</p></details>
          <details><summary>프로젝트 참여는 필수인가요?<span>+</span></summary><p>스터디 수료 후 진행되는 서비스 개발 프로젝트는 UMC 활동의 핵심 과정입니다. 지원 전 겨울방학 일정을 꼭 확인해 주세요.</p></details>
          <details><summary>연합 OT와 학교 OT는 꼭 참석해야 하나요?<span>+</span></summary><p>네. 두 OT 모두 필수 일정이며, 불참 시 합격이 취소될 수 있습니다.</p></details>
        </div></div>
      </section>

      <section className="apply" id="apply"><div className="apply-glow" /><p>UMC KAU 11TH RECRUITING</p><h2>이번 겨울,<br />무엇을 남기고 싶나요?</h2><a className="button apply-button" href={applicationUrl} target="_blank" rel="noreferrer">구글폼으로 지원하기 <span>↗</span></a><small>APPLICATION OPEN · 09.04 18:00까지</small></section>
      <footer><div className="brand footer-brand"><span className="brand-mark">U</span><span>UMC</span><em>KAU</em></div><p>University MakeUs Challenge · Korea Aerospace University</p><div><a href="#top">TOP ↑</a></div></footer>
    </main>
  );
}
