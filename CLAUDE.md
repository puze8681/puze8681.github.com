# CLAUDE.md

이 파일은 Claude Code가 이 프로젝트에서 작업할 때 참고하는 가이드입니다.

## 작업 후 로컬 서버 재시작

코드 수정 작업이 완료되면 로컬 개발 서버를 재시작합니다:

```bash
# 기존 서버 종료 후 재시작
pkill -f "next dev" 2>/dev/null; npm run dev
```

## 프로젝트 개요

- **프레임워크**: Next.js 15 (App Router, Static Export)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **다국어 지원**: 한국어/영어 (LanguageContext)

## 주요 디렉토리

- `src/app/` - 페이지 라우팅
- `src/components/` - React 컴포넌트
- `src/components/resume/` - PDF 이력서 관련 컴포넌트
- `src/data/` - 데이터 파일 (프로필, 경력, 프로젝트 등)
- `public/fonts/` - 폰트 파일 (Pretendard)

## 빌드 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
```
