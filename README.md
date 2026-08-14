# 한국항공대학교 UMC 11기 리크루팅 사이트

UMC 11기 모집을 위한 반응형 원페이지 사이트입니다. GitHub 저장소에 이 폴더의 **내용 전체**를 올리면 포함된 GitHub Actions가 `github-pages/` 폴더를 자동으로 배포합니다.

## GitHub Pages 배포

1. 이 폴더 안의 모든 파일을 GitHub 저장소 최상단에 업로드합니다.
2. 저장소의 `Settings → Pages`로 이동합니다.
3. `Build and deployment → Source`를 **GitHub Actions**로 선택합니다.
4. `Actions` 탭의 **Deploy UMC recruitment site** 작업이 끝나면 Pages 주소가 생성됩니다.

별도의 빌드나 패키지 설치 없이 `github-pages/` 안의 정적 사이트가 배포됩니다.

## 가장 먼저 바꿀 부분

- 지원 링크: `app/page.tsx`의 `href="#recruit"` 또는 `href="#apply"`를 실제 구글폼 주소로 변경
- 정적 배포본: `github-pages/index.html`의 같은 링크도 실제 주소로 변경
- 행사 사진: `public/events/`와 `github-pages/events/`
- 모집 일정과 문구: `app/page.tsx`
- 색상과 레이아웃: `app/globals.css`

현재 지원 링크는 아직 전달받지 않아 `COMING SOON` 상태입니다.

## 로컬에서 원본 수정하기

Node.js 22 이상에서 아래 명령으로 확인할 수 있습니다.

```bash
npm ci
npm run dev
```

원본은 `app/page.tsx`와 `app/globals.css`이며, `github-pages/`는 GitHub Pages용 정적 배포본입니다.
