export const profile = {
  name: '黃彥惟',
  role: 'Software Research and Development Engineer',
  headline: 'Event-driven Digital Twin Portfolio',
  location: 'Taiwan',
  github: 'https://github.com/Tommy840602',
  resumePath: '/resume.pdf'
};

export const projects = [
  {
    slug: 'czochralski-digital-twin',
    title: '數位孿生(Digital Twin)',
    subtitle: 'CZ Digital Twin System',
    short: 'OPC-UA / MQTT 採集、Kafka 串流、Flink CEP、Spring Boot API 與 Three.js 3D 監控。',
    role: 'System design, backend, stream processing, frontend visualization',
    period: '2026',
    accent: '#16a085',
    icon: 'DT',
    iconImage: '/icons/digital-twin.png',
    iconAlt: 'Digital Twin project icon',
    href: '/projects/czochralski-digital-twin/',
    repo: 'https://github.com/Tommy840602/czochralski-digital-twin',
    stack: [
      'Java 17',
      'Spring Boot',
      'Kafka',
      'Flink CEP',
      'TimescaleDB',
      'MongoDB',
      'Redis',
      'Vue 3',
      'Three.js'
    ],
    highlights: [
      '以事件驅動架構串接兩台長晶爐 C1/C2 的即時資料流。',
      '使用 Flink CEP 偵測爐況異常，並將告警事件傳遞到 AlarmService。',
      '用 Three.js 建立 3D 監控視覺化，支援即時趨勢與爐況狀態。'
    ],
    metrics: [
      { label: 'Services', value: '8+' },
      { label: 'Pipeline', value: 'MQTT -> Kafka -> Flink' },
      { label: 'Runtime', value: 'Java 17' }
    ]
  },
  {
    slug: 'SPC',
    title: '製程管制系統(SPC)',
    subtitle: 'CZ SPC System',
    short: '即時 KPI、SPC 趨勢、報表下載與 WebSocket 推播，聚焦工程師面試展示。',
    role: 'Frontend architecture and API integration',
    period: '2025',
    accent: '#ffffff',
    icon: 'SPC',
    iconImage: '/icons/spc.png',
    iconAlt: 'SPC project icon',
    iconVariant: 'white',
    href: '/projects/SPC/',
    repo: 'https://github.com/Tommy840602/czochralski-digital-twin',
    stack: ['Vue 3', 'Pinia', 'Chart.js', 'ECharts', 'WebSocket', 'Spring Cloud Gateway'],
    highlights: [
      '把時序資料整理成可掃描的即時面板，降低工程決策所需的上下文切換。',
      '用 WebSocket 推播最新爐況，並保留歷史查詢與報表下載工作流。',
      '將權限、登入與 API Gateway 整合在同一套展示流程中。'
    ],
    metrics: [
      { label: 'Views', value: '6' },
      { label: 'Realtime', value: 'WebSocket' },
      { label: 'Charts', value: 'Chart.js / ECharts' }
    ]
  },
  {
    slug: 'DCS',
    title: '分散式控制系統(DCS)',
    subtitle: 'CZ DCS System',
    short: 'Python datapipe 模擬資料源，經 MQTT/Kafka 進入 Flink Job，形成可重放的串流測試環境。',
    role: 'Data pipeline and integration readiness',
    period: '2024',
    accent: '#d45d5d',
    icon: 'DCS',
    iconImage: '/icons/dcs.png',
    iconAlt: 'DCS project icon',
    iconVariant: 'white',
    href: '/projects/DCS/',
    repo: 'https://github.com/Tommy840602/czochralski-digital-twin',
    stack: ['Python 3.11', 'MQTT', 'Kafka', 'Apache Flink 2.2', 'Docker Compose'],
    highlights: [
      '以 CSV 模擬實際長晶爐資料，支援 OK/NG 爐事件流程驗證。',
      'Flink Job 以 fat JAR 發布，符合獨立串流工作部署需求。',
      '提供 readiness 與 smoke test script，讓展示環境能被快速驗證。'
    ],
    metrics: [
      { label: 'Topics', value: '3' },
      { label: 'Jobs', value: '2' },
      { label: 'Infra', value: 'Docker Compose' }
    ]
  },
  {
    slug: 'cloud-native-backend',
    title: '雲原生後端服務',
    subtitle: 'Microservices for auth, alarm and state',
    short: 'Eureka、Config Server、Gateway 與多儲存層服務，呈現完整後端整合能力。',
    role: 'Backend service design and security flow',
    period: '2026',
    accent: '#5b8def',
    icon: 'BE',
    href: '/projects/cloud-native-backend/',
    repo: 'https://github.com/Tommy840602/czochralski-digital-twin',
    stack: ['Spring Boot', 'Spring Cloud', 'Eureka', 'JWT', 'MongoDB', 'Redis', 'TimescaleDB'],
    highlights: [
      '將認證、告警、爐況資料、即時狀態拆成清楚的服務邊界。',
      '透過 Gateway 統一路由與安全入口，後端服務註冊到 Eureka。',
      '依資料特性選用 TimescaleDB、MongoDB 與 Redis，避免單一資料庫承擔所有情境。'
    ],
    metrics: [
      { label: 'Storage', value: '3 layers' },
      { label: 'Gateway', value: '8085' },
      { label: 'Discovery', value: 'Eureka' }
    ]
  }
];
