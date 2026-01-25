import { Award, Certification, Activity, LocalizedData } from "./types";

export const awardsData: LocalizedData<Award[]> = {
  ko: [
    { title: "SK Smarteen App Challenge 2018", award: "생활 부문 우수상", issuer: "SK 텔레콤" },
    { title: "SK Smarteen App Challenge 2017", award: "IoT 부문 장려상", issuer: "SK 텔레콤" },
    { title: "제 12회 SK Appjam", award: "생활부문 금상", issuer: "아산나눔재단" },
    { title: "시선추적 모바일 앱 해커톤", award: "대상", issuer: "Visual Camp" },
    { title: "제 5회 대한민국 SW 융합 해커톤", award: "경기도지사 상", issuer: "경기도" },
    { title: "K-water 시민참여혁신 해커톤", award: "K-water 사장상", issuer: "K-water" },
    { title: "Inapse 해커톤", award: "대상", issuer: "Inapse" },
    { title: "2018 불법스포츠도박 근절 해커톤", award: "이사장상", issuer: "서울올림픽기념국민체육진흥공단" },
  ],
  en: [
    { title: "SK Smarteen App Challenge 2018", award: "Excellence Award (Life)", issuer: "SK Telecom" },
    { title: "SK Smarteen App Challenge 2017", award: "Encouragement (IoT)", issuer: "SK Telecom" },
    { title: "12th SK Appjam", award: "Gold Award (Life)", issuer: "Asan Foundation" },
    { title: "Eye-tracking Mobile App Hackathon", award: "Grand Prize", issuer: "Visual Camp" },
    { title: "5th Korea SW Convergence Hackathon", award: "Governor Award", issuer: "Gyeonggi Province" },
    { title: "K-water Citizen Innovation Hackathon", award: "CEO Award", issuer: "K-water" },
    { title: "Inapse Hackathon", award: "Grand Prize", issuer: "Inapse" },
    { title: "2018 Anti-Gambling Hackathon", award: "Chairman Award", issuer: "KSPO" },
  ],
};

export const certificationsData: LocalizedData<Certification[]> = {
  ko: [
    { name: "정보처리기능사", issuer: "한국산업인력공단", date: "2018.07" },
    { name: "ITQ 파워포인트", issuer: "한국생산성본부", date: "2010.11" },
    { name: "ITQ 아래한글", issuer: "한국생산성본부", date: "2011.06" },
    { name: "ITQ 한글엑셀", issuer: "한국생산성본부", date: "2012.03" },
  ],
  en: [
    { name: "Craftsman Info Processing", issuer: "HRD Korea", date: "2018.07" },
    { name: "ITQ PowerPoint", issuer: "KPC", date: "2010.11" },
    { name: "ITQ Hangul", issuer: "KPC", date: "2011.06" },
    { name: "ITQ Excel", issuer: "KPC", date: "2012.03" },
  ],
};

export const activitiesData: LocalizedData<Activity[]> = {
  ko: [
    {
      title: "SmarteenAppClub 8기 회장",
      period: "2018.07 - 2018.11",
      description: "SK, IT동아, 중소벤처기업부 주관 고교 앱 개발 동아리 회장단",
    },
    {
      title: "소프트웨어 마에스트로 9기",
      period: "2018.06 - 2018.12",
      description: "과학기술정보통신부 주관 SW 인재 양성 프로그램 연수생",
    },
    {
      title: "선린인터넷고 '애플파이' 부장",
      period: "2017.04 - 2018.03",
      description: "교내 모바일 앱 개발 동아리 부장, 커리큘럼 수업 진행",
    },
    {
      title: "청계천꿈디딤장학금 장학생",
      period: "2017.06 - 2018.11",
      description: "서울장학재단, 서울시설공단 장학 프로그램",
    },
  ],
  en: [
    {
      title: "SmarteenAppClub 8th President",
      period: "2018.07 - 2018.11",
      description: "High school app dev club sponsored by SK, IT Donga, MSS",
    },
    {
      title: "SW Maestro 9th Trainee",
      period: "2018.06 - 2018.12",
      description: "SW talent program by Ministry of Science and ICT",
    },
    {
      title: "Sunrin 'ApplePie' Club Leader",
      period: "2017.04 - 2018.03",
      description: "Mobile app dev club leader, taught curriculum classes",
    },
    {
      title: "Cheonggyecheon Dream Scholarship",
      period: "2017.06 - 2018.11",
      description: "Seoul Scholarship Foundation program",
    },
  ],
};
