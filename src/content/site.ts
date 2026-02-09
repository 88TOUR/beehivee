export const site = {
    name: 'GACHI',
    nameKo: '같이',
    type: 'Strategic Branding Agency',
  
    hero: {
      badge: 'Strategic Branding Agency',
      headline: '같이 만드는 가치',
      subheadline:
        '다듬어지지 않은 가능성에 주목하다 - 각자의 빛이 모여, 하나의 가치가 되다',
      ctaPrimary: { label: '프로젝트 보기', href: '#works' },
      ctaSecondary: { label: '문의하기', href: '#contact' },
      imageAlt: 'Jewel',
    },
  
    oneLiner:
      '2019년 설립된 GACHI는 청년과 크리에이터의 가능성을 발견하고, 협업과 문화를 통해 가치를 만들어온 전략적 브랜딩 에이전시입니다.',
  
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Values', href: '#values' },
      { label: 'What we do', href: '#services' },
      { label: 'History', href: '#history' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ],
  
    about: {
      title: '원석 같은 가능성을, 보석 같은 경험으로',
      paragraphs: [
        'GACHI는 아직 다듬어지지 않은 원석 같은 청년과 크리에이터의 역량을 발견하고, 그 안에 숨겨진 고유한 빛을 세공해 세상에 드러내는 전략적 크리에이티브 파트너입니다.',
        '다양한 프로젝트와 협업을 통해, 각자의 아이디어와 열정이 조금씩 다듬어져 하나의 빛나는 경험으로 완성됩니다.',
        'GACHI에서 함께하며, 당신 속에 숨겨진 원석 같은 가능성을 직접 발견하고 빛내 보세요.',
      ],
    },
  
    values: {
      title: 'Core Values',
      items: [
        { key: 'G', title: 'Growth (성장)', desc: '개인의 가능성을 실질적인 역량과 성과로 확장합니다.' },
        { key: 'A', title: 'Art & Culture (문화/예술)', desc: '문화와 예술을 통해 사회와 연결되는 창의적 경험을 만듭니다.' },
        { key: 'C', title: 'Creativity (창의)', desc: '다양한 아이디어와 개성이 협업을 통해 새로운 가치를 만들도록 설계합니다.' },
        { key: 'H', title: 'Horizon (미래/지평)', desc: '단기 성과를 넘어, 개인과 커뮤니티의 장기적인 성장 경로를 설계합니다.' },
        { key: 'I', title: 'Innovation (혁신/배움)', desc: '학습과 실험을 통해 새로운 협업 모델과 성장 방식을 지속적으로 만들어갑니다.' },
      ],
      footnote:
        '누구나 참여할 수 있는 GACHI의 공간에서는, 작은 시도 하나하나도 가치 있는 성과와 성장으로 연결됩니다.',
    },
  
    services: {
      title: 'What to do',
      items: [
        {
          title: '클래스 (Class)',
          bullets: [
            '청년·크리에이터 대상 실전형 클래스 및 워크숍 운영',
            '브랜딩·콘텐츠·기획 중심 프로젝트 기반 학습',
            '협업을 통한 결과물 중심 교육 설계',
          ],
        },
        {
          title: '프로덕트 (Product)',
          bullets: [
            '데이터 기반 인재 리포트 및 성장 분석 도구',
            '교육·협업 프로그램 패키지화',
            '기관·브랜드 맞춤형 솔루션 제공',
          ],
        },
      ],
    },
  
    history: {
      title: 'History',
      items: [
        {
          year: '2017',
          title: 'GACHI 설립 및 파일럿 프로젝트',
          bullets: [
            'GACHI 설립',
            '청년·크리에이터 파일럿 협업 프로젝트 진행',
            '협업 기반 프로젝트 운영 방식 실험',
          ],
          quote: '“같이 일해보는 구조를 처음으로 실험하다”',
        },
        {
          year: '2020',
          title: '온라인 전환 & 협업 구조 고도화',
          bullets: [
            '온라인 협업 시스템 구축',
            '누적 참여 청년 500명 돌파',
          ],
        },
        {
          year: '2023',
          title: '브랜드 액셀러레이팅 전환',
          bullets: [
            '기업·기관 협업 컨설팅',
            '누적 참여자 5,000명 돌파',
          ],
        },
      ],
    },
  
    team: {
      title: 'Team',
      org: [
        { role: 'CEO', name: '이경훈' },
        { role: 'CCO', name: '임지연' },
        { role: 'CRO', name: '김영준' },
        { role: 'CFO', name: '김나영' },
        { role: 'CPO', name: '최석훈' },
      ],
    },
  
    greeting: {
      title: '대표 인사말',
      paragraphs: [
        'GACHI는 완성된 답보다 가능성에 먼저 주목해왔습니다.',
        '사람과 아이디어가 성장할 수 있는 판을 설계하는 회사입니다.',
      ],
    },
  
    contact: {
      title: 'Contact',
      email: 'hello@gachi.co',
      note: '프로젝트 및 협업 문의는 메일로 연락 주세요.',
    },
  };
  
  /* ===============================
     Explore (가치 탐색) - 펀딩형
  ================================ */
  

  export const explore = {
    tabs: ['전체', '클래스', '프로덕트'],
  } as const;
  
  export const exploreFunding = {
    클래스: [
      {
        id: 'class-1',
        title: '열일곱살의 버킷리스트 - 17번',
        image: '/images/banner-3.jpg',
        percent: 131,
        amount: 6594160,
        daysLeft: 66,
        href: '#contact',
      },
      {
        id: 'class-2',
        title: '청년 크리에이터 브랜딩 클래스',
        image: '/images/banner-3.jpg',
        percent: 82,
        amount: 2140000,
        daysLeft: 21,
        href: '#contact',
      },
    ],
    프로덕트: [
      {
        id: 'product-1',
        title: 'GACHI 성장 리포트',
        image: '/images/banner-3.jpg',
        percent: 74,
        amount: 1240000,
        daysLeft: 12,
        href: '#contact',
      },
      {
        id: 'product-2',
        title: '협업 프로젝트 운영 툴킷',
        image: '/images/banner-3.jpg',
        percent: 119,
        amount: 3300000,
        daysLeft: 9,
        href: '#contact',
      },
    ],
  } as const;

  export const banners = [
  {
    id: 'b1',
    titleLines: ['같이 만드는 가치', '보석 같은 경험으로'],
    subtitle: 'Strategic Branding Agency · GACHI',
    image: '/images/banner-1.jpg',
    cta: {
      label: '프로젝트 보기',
      href: '#works',
    },
  },
  {
    id: 'b2',
    titleLines: ['다듬어지지 않은 가능성', '클래스에서 시작됩니다'],
    subtitle: '청년 · 크리에이터 클래스',
    image: '/images/banner-2.avif',
    cta: {
      label: '클래스 탐색',
      href: '#works',
    },
  },
  {
    id: 'b3',
    titleLines: ['아이디어를', '프로덕트로 증명하다'],
    subtitle: 'GACHI 프로덕트 & 협업',
    image: '/images/banner-3.jpg',
    cta: {
      label: '프로덕트 보기',
      href: '#works',
    },
  },
];

export const footer = {
    company: 'GACHI (예시)',
    address: '서울시 ○○구 ○○로 ○○ (예시 주소)',
    ceo: '홍길동',
    phone: '02-0000-0000',
    bizNo: '000-00-00000',
    mailOrderNo: '제0000-서울○○-0000호',
    email: 'contact@gachi.co',
    disclaimer:
      '본 사이트의 콘텐츠는 예시이며, 실제 서비스 및 투자·펀딩과는 무관합니다. 제공되는 정보는 참고용이며, 그에 따른 책임은 지지 않습니다.',
    copyright: '© 2026 GACHI. All rights reserved.',
  };