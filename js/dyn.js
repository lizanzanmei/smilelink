// 定义多语言翻译对象
const translations = {
    // 中文（已有的原文）
    zh: {
        // 网站基本信息
        "site.title": "微笑桥-让高端旅行，回归本真的体面与自在",

        // 导航栏
        "nav.home": "首页",
        "nav.about": "关于我们",
        "nav.services": "品质服务",
        "nav.contact": "联系我们",

        // 关于我们部分
        "about.title": "微笑桥：让高端旅行，回归本真的体面与自在",
        "about.p1": "真正私人定制的旅行服务",
        "about.p2": "专注于高端出行领域，以定制化全链路服务",
        "about.p3": "提供中、英、韩、日、西、葡多语种专属对接",
        "about.p4": "隐私不是\"附加服务\"，24小时专属管家一对一服务",
        "about.p5": "中国、韩国、日本、西班牙多语言应急团队",

        // 旅游出行定制详情
        "travel.title": "高端私享 自在体面",
        // "travel.brand.title": "品牌理念",
        // "travel.brand.desc": "微笑桥：让高端旅行，回归本真的体面与自在",
        // "travel.pain.title": "用户痛点直击",
        // "travel.pain.desc1": "你是否早已厌倦 ——",
        // "travel.pain.desc2": "花重金预订的 \"私人行程\"，实则是旅行社拼凑的固定路线，偶遇旅行团扎堆打卡？",
        // "travel.pain.desc3": "入住标榜 \"总统套房\" 的酒店，却要在早餐时与陌生宾客拥挤等候，隐私荡然无存？",
        // "travel.pain.desc4": "想探访小众秘境，向导却只会背诵大众攻略，错过藏在当地人生活里的真正惊喜？",
        // "travel.advantages.title": "核心服务优势",
        // "travel.advantages.desc1": "作为高端出行领域的行业新贵，微笑桥以 定制化全链路服务 脱颖而出，区别于 \"仅提供交通工具\" 的传统模式，构建从路线规划、翻译陪同到接送机、行程应急的无缝高端体验闭环。",
        // "travel.advantages.point1.title": "专属匹配，拒绝 \"差不多\"",
        // "travel.advantages.point1.desc": "无固定模板，仅提供 \"量身定制\" 的行程剧本。精通中国本土高端场景，可设计北京、上海、香港、澳门多地联动行程；配备中、英、韩、日、西语、葡语多语种专属对接，全程消除语言壁垒，秒级响应行程调整需求。",
        // "travel.advantages.point2.title": "隐私守护，视为 \"基本准则\"",
        // "travel.advantages.point2.desc": "入住前 24 小时协调客房（远离电梯、专属楼层），同步客户偏好（枕头硬度、房间布置）至酒店管家；24 小时专属管家一对一响应突发需求，无需层层转接，以 \"零信息外泄\" 协议保障隐私。",
        // "travel.advantages.point3.title": "灵活应急，从容应对 \"意外\"",
        // "travel.advantages.point3.desc": "在中国（北京、上海、广州、深圳、成都、香港、澳门等）及韩国、日本主要城市设专属服务点，配备多语言应急团队与合作医疗机构。突发状况（航班延误、景点关闭、临时加项）无需客户协调，当地团队迅速提供替代方案。",
        // "travel.cases.title": "服务案例",
        // "travel.cases.desc1": "为 20 位高端外国客户提供多地出行服务，30 分钟内协调完成北京临时体验场地，灵活调整参观顺序与特色项目。",
        // "travel.cases.desc2": "在故宫旁为 20 + 外国高端客户定制专属烤鸭宴，客户返程留言：\"这趟旅行最珍贵的，是你们让我的每一个临时想法都能成真。\"",

        // 高科技企业创新旅游套餐方案
        "tech.title": "智享科技 预见未来",
        "tech.name.title": "方案名称",
        "tech.name.desc": "\"智享科技・预见未来\"—— 高科技企业深度探秘之旅",
        "tech.content.title": "套餐核心内容",
        "tech.content.desc": "采用 \"1+N\" 模块化设计：",
        "tech.content.main": "\"1\"：核心科技体验主线（聚焦高科技企业研发、生产、应用全流程探秘）",
        "tech.content.addon": "\"N\"：定制化附加服务（可根据客群需求组合搭配，如高管座谈、技术 workshop、行业趋势分享等）",

        // 前沿新能源汽车自动驾驶体验之旅
        "auto.title": "一路繁花，驭见新生",
        "auto.name.title": "旅程名称",
        "auto.name.desc": "\"智驾未来・驭见新生\"—— 前沿新能源汽车自动驾驶深度体验之旅",
        "auto.content.title": "旅程核心内容",
        "auto.content.desc": "采用 \"技术溯源 — 场景体验 — 深度解析\" 三段式结构：",
        "auto.content.trace": "技术溯源：探访新能源汽车自动驾驶研发中心，了解算法、传感器等核心技术原理",
        "auto.content.experience": "场景体验：覆盖城市道路、高速路、园区等自动驾驶核心场景，沉浸式体验不同路况下的智驾功能",
        "auto.content.analysis": "深度解析：配备技术专家随行，实时解读智驾操作逻辑与行业发展趋势",

        // 科技双享套餐
        "combo.title": "研发应用 全场景体验",
        "combo.position.title": "套餐定位",
        "combo.position.desc": "\"高科技企业探秘 + 新能源自动驾驶体验\" 组合旅程",
        "combo.value.title": "核心价值",
        "combo.value.desc": "覆盖 \"研发端（高科技企业）+ 应用端（新能源自动驾驶）\" 全场景，一次行程满足科技爱好者对 \"技术源头\" 与 \"实际应用\" 的双重探索需求。",

        // 页脚
        "footer.contact.title": "联系我们",
        "footer.contact.person": "李先生",
        "footer.contact.location": "上海市 浦东新区",
        "footer.contact.phone": "+86 13472548340",
        "footer.contact.email": "lizanzanmei@gmail.com",
        "footer.copyright": "© 2025 SmileLink"
    },

    // 英文翻译
    en: {
        // Website basic information
        "site.title": "SmileBridge - Premium Travel, True Elegance and Freedom",

        // Navigation
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.services": "Premium Services",
        "nav.contact": "Contact Us",

        // About Us section
        "about.title": "SmileBridge: Let Premium Travel Return to True Elegance and Freedom",
        "about.p1": "Truly personalized travel services",
        "about.p2": "Focusing on high-end travel with customized full-link services",
        "about.p3": "Providing exclusive multi-language support in Chinese, English, Korean, Japanese, Spanish and Portuguese",
        "about.p4": "Privacy is not an \"additional service\", 24-hour exclusive butler one-on-one service",
        "about.p5": "Multilingual emergency teams in China, South Korea, Japan and Spain",

        // Custom Travel Arrangements details
        "travel.title": "Premium Private Enjoyment, Elegant and At Ease",
        // "travel.brand.title": "Brand Philosophy",
        // "travel.brand.desc": "SmileBridge: Let premium travel return to true elegance and freedom",
        // "travel.pain.title": "Customer Pain Points",
        // "travel.pain.desc1": "Are you tired of:",
        // "travel.pain.desc2": "Paying a fortune for a \"private itinerary\" that's actually a fixed route pieced together by a travel agency, encountering crowds of tour groups at popular spots?",
        // "travel.pain.desc3": "Staying in a hotel boasting \"presidential suites\" but having to wait in crowds with strangers at breakfast, with no privacy at all?",
        // "travel.pain.desc4": "Wanting to explore hidden gems, but guides only recite popular travel guides, missing the real surprises hidden in local life?",
        // "travel.advantages.title": "Core Service Advantages",
        // "travel.advantages.desc1": "As a rising star in the high-end travel industry, SmileBridge stands out with customized full-link services, different from the traditional model of \"only providing transportation\", building a seamless high-end experience loop from route planning, translation accompaniment to airport transfers and travel emergencies.",
        // "travel.advantages.point1.title": "Exclusive Matching, No \"Almost Good Enough\"",
        // "travel.advantages.point1.desc": "No fixed templates, only \"tailor-made\" travel scripts. Proficient in high-end local scenes in China, can design multi-city itineraries in Beijing, Shanghai, Hong Kong, Macau; equipped with Chinese, English, Korean, Japanese, Spanish, Portuguese multilingual exclusive docking, eliminating language barriers throughout, and responding to itinerary adjustments in seconds.",
        // "travel.advantages.point2.title": "Privacy Protection as \"Basic Principle\"",
        // "travel.advantages.point2.desc": "Coordinate rooms 24 hours before check-in (away from elevators, exclusive floors), synchronize customer preferences (pillow hardness, room layout) to hotel butlers; 24-hour exclusive butler responds to emergency needs one-on-one, no need for layers of transfer, and guarantees privacy with \"zero information leakage\" agreement.",
        // "travel.advantages.point3.title": "Flexible Emergency Response, Calmly Deal with \"Accidents\"",
        // "travel.advantages.point3.desc": "Set up exclusive service points in major cities in China (Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Hong Kong, Macau, etc.) and South Korea, Japan, with multilingual emergency teams and cooperative medical institutions. Emergency situations (flight delays, attraction closures, temporary additions) do not require customer coordination, local teams quickly provide alternative solutions.",
        // "travel.cases.title": "Service Cases",
        // "travel.cases.desc1": "Provided multi-city travel services for 20 high-end foreign customers, coordinated the temporary experience venue in Beijing within 30 minutes, flexibly adjusted the visiting order and featured projects.",
        // "travel.cases.desc2": "Customized exclusive roast duck banquet for 20+ high-end foreign customers near the Forbidden City, customer return message: \"The most precious thing about this trip is that you made every temporary idea of mine come true.\"",

        // Hi-Tech Enterprise Innovation Travel Package
        "tech.title": "Hi-Tech Enterprise Innovation Travel Package",
        "tech.name.title": "Package Name",
        "tech.name.desc": "\"Smart Tech Experience · Future Vision\" — Hi-Tech Enterprise In-depth Exploration Journey",
        "tech.content.title": "Core Package Content",
        "tech.content.desc": "Adopt \"1+N\" modular design:",
        "tech.content.main": "\"1\": Core tech experience main line (focusing on hi-tech enterprise R&D, production, application full-process exploration)",
        "tech.content.addon": "\"N\": Customized additional services (can be combined according to customer group needs, such as executive forums, technical workshops, industry trend sharing, etc.)",

        // Cutting-edge New Energy Vehicle Self-driving Journey
        "auto.title": "Driving Through Blossoms, Embracing New Horizons",
        "auto.name.title": "Journey Name",
        "auto.name.desc": "\"Smart Driving Future · Meet New Life\" — Cutting-edge New Energy Vehicle Self-driving In-depth Experience Journey",
        "auto.content.title": "Core Journey Content",
        "auto.content.desc": "Adopt \"Technology Traceability — Scene Experience — In-depth Analysis\" three-stage structure:",
        "auto.content.trace": "Technology Traceability: Visit new energy vehicle self-driving R&D centers, understand core technical principles such as algorithms and sensors",
        "auto.content.experience": "Scene Experience: Cover core self-driving scenes such as urban roads, highways, parks, immersive experience of smart driving functions under different road conditions",
        "auto.content.analysis": "In-depth Analysis: Equipped with technical experts, real-time interpretation of smart driving operation logic and industry development trends",

        // Tech Dual Experience Package
        "combo.title": "Tech Dual Experience Package",
        "combo.position.title": "Package Positioning",
        "combo.position.desc": "\"Hi-Tech Enterprise Exploration + New Energy Self-driving Experience\" combined journey",
        "combo.value.title": "Core Value",
        "combo.value.desc": "Covering the full scene of \"R&D end (hi-tech enterprises) + application end (new energy self-driving)\", one trip meets tech enthusiasts' dual exploration needs for \"technology source\" and \"practical application\".",

        // Footer
        "footer.contact.title": "Contact Us",
        "footer.contact.person": "Mr. Li",
        "footer.contact.location": "Pudong New District, Shanghai",
        "footer.contact.phone": "+86 13472548340",
        "footer.contact.email": "lizanzanmei@gmail.com",
        "footer.copyright": "© 2025 SmileLink"
    },

    // 日文翻译
    ja: {
        // ウェブサイト基本情報
        "site.title": "スマイルブリッジ-高級旅行、本当の品位と自由を取り戻す",

        // ナビゲーション
        "nav.home": "ホーム",
        "nav.about": "会社概要",
        "nav.services": "プレミアムサービス",
        "nav.contact": "お問い合わせ",

        // 会社概要セクション
        "about.title": "スマイルブリッジ：高級旅行を、本当の品位と自由に戻す",
        "about.p1": "本当のプライベートカスタマイズ旅行サービス",
        "about.p2": "ハイエンド旅行分野に特化し、カスタマイズされたフルリンクサービスを提供",
        "about.p3": "中国語、英語、韓国語、日本語、スペイン語、ポルトガル語の多言語専用対応を提供",
        "about.p4": "プライバシーは\\」追加サービス\\」ではなく、24時間専属バトラーによる一対一サービス",
        "about.p5": "中国、韓国、日本、スペインの多言語緊急チーム",

        // カスタム旅行手配の詳細
        "travel.title": "プレミアムプライベート、優雅で自由",
        // "travel.brand.title": "ブランド理念",
        // "travel.brand.desc": "スマイルブリッジ：高級旅行を、本当の品位と自由に戻す",
        // "travel.pain.title": "顧客の悩みへの洞察",
        // "travel.pain.desc1": "あなたはもう嫌になっていませんか：",
        // "travel.pain.desc2": "高額を払って予約した\"プライベート旅程\"が実際には旅行代理店が組み合わせた固定ルートで、観光団の群れと出会うこと？",
        // "travel.pain.desc3": "\"大統領スイート\"をうたったホテルに泊まっても、朝食時に見知らぬ客と混雑して待たなければならず、プライバシーが完全に失われること？",
        // "travel.pain.desc4": " hidden gemsを探検したいのに、ガイドは一般的なガイドブックしか暗唱できず、地元の人々の生活に隠された本当の驚きを見逃すこと？",
        // "travel.advantages.title": "コアサービスの優位性",
        // "travel.advantages.desc1": "ハイエンド旅行業界の新星として、スマイルブリッジはカスタマイズされたフルリンクサービスで際立っています。\"交通手段の提供のみ\"の伝統的なモデルとは異なり、ルート計画、通訳同伴、空港送迎、旅行中の緊急事態対応まで、シームレスな高級体験の閉ループを構築しています。",
        // "travel.advantages.point1.title": "専属マッチング、\"ほとんどいい\"を拒否",
        // "travel.advantages.point1.desc": "固定テンプレートはなく、\"完全カスタマイズ\"の旅程のみを提供します。中国国内の高級シーンに精通し、北京、上海、香港、マカオなど複数都市を結ぶ旅程を設計可能。中国語、英語、韓国語、日本語、スペイン語、ポルトガル語の多言語対応スタッフを配置し、言語の壁を全面的に排除し、旅程調整の要求に秒単位で対応します。",
        // "travel.advantages.point2.title": "プライバシー保護、\"基本原則\"として",
        // "travel.advantages.point2.desc": "チェックインの24時間前に客室（エレベーターから離れた専用フロア）を調整し、顧客の好み（枕の硬さ、部屋の布置）をホテルのバトラーに共有。24時間専属バトラーが一対一で緊急の要求に対応し、層を重ねて転送する必要はなく、\"情報漏洩ゼロ\"協定によってプライバシーを保障します。",
        // "travel.advantages.point3.title": "柔軟な緊急対応、\"意外\"に冷静に対応",
        // "travel.advantages.point3.desc": "中国（北京、上海、広州、深圳、成都、香港、マカオなど）や韓国、日本の主要都市に専属サービスポイントを設置し、多言語対応の緊急チームと提携医療機関を装備。緊急事態（フライト遅延、観光スポット閉鎖、臨時追加）は顧客の調整を必要とせず、現地チームが迅速に代替案を提供します。",
        // "travel.cases.title": "サービス事例",
        // "travel.cases.desc1": "20人の高級外国人顧客に複数都市の旅行サービスを提供し、30分以内に北京の臨時体験会場を調整し、見学順序と特色プロジェクトを柔軟に調整。",
        // "travel.cases.desc2": "故宮のそばで20人以上の外国人高級顧客のために専属北京ダックの宴会をカスタマイズ。顧客からの返信メッセージ：\"この旅行で最も貴重なのは、あなたたちが私の一時的なアイデアをすべて実現してくれたことです。\"",

        // ハイテク企業イノベーション旅行パッケージ
        "tech.title": "ハイテク企業イノベーション旅行パッケージ",
        "tech.name.title": "パッケージ名",
        "tech.name.desc": "\"スマートテック体験・未来ビジョン\"—— ハイテク企業深度探検の旅",
        "tech.content.title": "パッケージのコアコンテンツ",
        "tech.content.desc": "\"1+N\"モジュール設計を採用：",
        "tech.content.main": "\"1\": コアテック体験メインライン（ハイテク企業の研究開発、生産、応用の全工程探検に焦点）",
        "tech.content.addon": "\"N\": カスタマイズ可能な追加サービス（顧客層のニーズに応じて組み合わせ可能、幹部座談会、技術ワークショップ、業界動向共有など）",

        // 最先端新エネルギー車自動運転体験の旅
        "auto.title": "道中花咲き、新たな旅路を開く",
        "auto.name.title": "旅程名",
        "auto.name.desc": "\"スマートドライビング未来・新しい生活に出会う\"—— 最先端新エネルギー車自動運転深度体験の旅",
        "auto.content.title": "旅程のコアコンテンツ",
        "auto.content.desc": "\"技術溯源 — シーン体験 — 深度解析\"三段式構造を採用：",
        "auto.content.trace": "技術溯源：新エネルギー車自動運転研究開発センターを訪問し、アルゴリズム、センサーなどのコア技術原理を理解",
        "auto.content.experience": "シーン体験：都市道路、高速道路、園区など自動運転のコアシーンをカバーし、異なる道路状況でのスマート運転機能を没入型で体験",
        "auto.content.analysis": "深度解析：技術専門家を同行させ、スマート運転の操作ロジックと業界発展動向をリアルタイムで解説",

        // テックデュアル体験パッケージ
        "combo.title": "テックデュアル体験パッケージ",
        "combo.position.title": "パッケージポジショニング",
        "combo.position.desc": "\"ハイテク企業探検 + 新エネルギー自動運転体験\"コンビネーション旅程",
        "combo.value.title": "コア価値",
        "combo.value.desc": "\"研究開発端（ハイテク企業）+ 応用端（新エネルギー自動運転）\"の全シーンをカバーし、一回の旅程でテック愛好家の\"技術源\"と\"実際の応用\"への二重探索ニーズを満たします。",

        // フッター
        "footer.contact.title": "お問い合わせ",
        "footer.contact.person": "李さん",
        "footer.contact.location": "上海市 浦東新区",
        "footer.contact.phone": "+86 13472548340",
        "footer.contact.email": "lizanzanmei@gmail.com",
        "footer.copyright": "© 2025 スマイルブリッジ"
    },

    // 西班牙文翻译
    es: {
        // Información básica del sitio web
        "site.title": "SmileBridge - Viajes Premium, Verdadera Elegancia y Libertad",

        // Navegación
        "nav.home": "Inicio",
        "nav.about": "Sobre Nosotros",
        "nav.services": "Servicios Premium",
        "nav.contact": "Contáctenos",

        // Sección Acerca de Nosotros
        "about.title": "SmileBridge: Hacer que los viajes premium regresen a la verdadera elegancia y libertad",
        "about.p1": "Servicios de viaje verdaderamente personalizados",
        "about.p2": "Especializados en el ámbito de viajes de alta gama con servicios de cadena completa personalizados",
        "about.p3": "Ofreciendo servicio exclusivo en múltiples idiomas: chino, inglés, coreano, japonés, español y portugués",
        "about.p4": "La privacidad no es un \"servicio adicional\", servicio personalizado de mayordomo exclusivo las 24 horas",
        "about.p5": "Equipos de emergencia multilingües en China, Corea del Sur, Japón y España",

        // Detalles de Planificación de Viajes Personalizados
        "travel.title": "Privilegio Premium, Elegante y Confortable",
        // "travel.brand.title": "Filosofía de Marca",
        // "travel.brand.desc": "SmileBridge: Hacer que los viajes premium regresen a la verdadera elegancia y libertad",
        // "travel.pain.title": "Puntos Duros de los Clientes",
        // "travel.pain.desc1": "¿Estás cansado de:",
        // "travel.pain.desc2": "Pagar una fortuna por un \"itinerario privado\" que en realidad es una ruta fija ensamblada por una agencia de viajes, y toparse con multitudes de grupos turísticos en los puntos populares?",
        // "travel.pain.desc3": "Quedarte en un hotel que se jacta de \"suites presidenciales\" pero tener que esperar en multitudes con extraños en el desayuno, sin privacidad alguna?",
        // "travel.pain.desc4": "Querer explorar tesoros ocultos, pero que los guías solo sepan recitar guías turísticas populares, perdiendo las verdaderas sorpresas escondidas en la vida local?",
        // "travel.advantages.title": "Ventajas Clave del Servicio",
        // "travel.advantages.desc1": "Como una estrella emergente en la industria de viajes de alta gama, SmileBridge se destaca con servicios de cadena completa personalizados, diferente del modelo tradicional de \"solo proporcionar transporte\", construyendo un ciclo cerrado de experiencia premium perfecta desde la planificación de rutas, acompañamiento con traducción, hasta transferencias aeroportuarias y emergencias durante el viaje.",
        // "travel.advantages.point1.title": "Coincidencia Exclusiva, Rechazo a lo \"Casi Bueno\"",
        // "travel.advantages.point1.desc": "Sin plantillas fijas, solo guiones de viaje \"hechos a medida\". Expertos en escenas de alta gama locales en China, pueden diseñar itinerarios multinacionales en Beijing, Shanghai, Hong Kong, Macao; equipados con personalización multilingüe en chino, inglés, coreano, japonés, español y portugués, eliminando completamente las barreras lingüísticas, y respondiendo a los ajustes del itinerario en segundos.",
        // "travel.advantages.point2.title": "Protección de la Privacidad, considerado como \"Principio Básico\"",
        // "travel.advantages.point2.desc": "Coordinar habitaciones 24 horas antes del check-in (lejos de los ascensores, pisos exclusivos), sincronizar preferencias del cliente ( dureza de almohadas, decoración de la habitación) con el mayordomo del hotel; mayordomo exclusivo 24 horas responde a las necesidades urgentes de forma personal, sin necesidad de transferencias por capas, y garantiza la privacidad con un acuerdo de \"cero filtración de información\".",
        // "travel.advantages.point3.title": "Respuesta Flexible a Emergencias, Enfrentar \"Sorpresas\" con Calma",
        // "travel.advantages.point3.desc": "Establecer puntos de servicio exclusivos en las principales ciudades de China (Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Hong Kong, Macao, etc.) y Corea del Sur, Japón, con equipos de emergencia multilingües e instituciones médicas cooperantes. Situaciones de emergencia (retrasos de vuelos, cierres de atracciones, adiciones temporales) no requieren coordinación del cliente, los equipos locales proporcionan rápidamente soluciones alternativas.",
        // "travel.cases.title": "Casos de Servicio",
        // "travel.cases.desc1": "Proporcionar servicios de viaje multinacional a 20 clientes extranjeros de alta gama, coordinar el lugar de experiencia temporal en Beijing en 30 minutos, ajustando flexiblemente el orden de visita y los proyectos destacados.",
        // "travel.cases.desc2": "Personalizar un banquete exclusivo de pato laqueado para más de 20 clientes extranjeros de alta gama cerca de la Ciudad Prohibida, mensaje de regreso del cliente: \"Lo más preciado de este viaje es que hicieron realidad cada una de mis ideas temporales.\"",

        // Paquete de Viaje de Innovación para Empresas de Alta Tecnología
        "tech.title": "Paquete de Viaje de Innovación para Empresas de Alta Tecnología",
        "tech.name.title": "Nombre del Paquete",
        "tech.name.desc": "\"Experiencia de Tech Inteligente · Visión del Futuro\" — Viaje de Exploración en Profundidad a Empresas de Alta Tecnología",
        "tech.content.title": "Contenido Core del Paquete",
        "tech.content.desc": "Adoptar diseño modular \"1+N\":",
        "tech.content.main": "\"1\": Línea principal de experiencia de tech core (centrada en la exploración integral de I+D, producción y aplicación de empresas de alta tecnología)",
        "tech.content.addon": "\"N\": Servicios adicionales personalizados (pueden combinarse según las necesidades del grupo de clientes, como foros ejecutivos, talleres técnicos, compartir tendencias industriales, etc.)",

        // Viaje de Conducción Autónoma de Vehículos de Energía Nueva de Vanguardia
        "auto.title": "Un Camino de Flores, Un Nuevo Horizonte",
        "auto.name.title": "Nombre del Viaje",
        "auto.name.desc": "\"Conducción Inteligente del Futuro · Encuentra una Nueva Vida\" — Viaje de Experiencia en Profundidad de Conducción Autónoma de Vehículos de Energía Nueva de Vanguardia",
        "auto.content.title": "Contenido Core del Viaje",
        "auto.content.desc": "Adoptar estructura de tres etapas \"Seguimiento de Tecnología — Experiencia de Escena — Análisis en Profundidad\":",
        "auto.content.trace": "Seguimiento de Tecnología: Visitar centros de I+D de conducción autónoma de vehículos de energía nueva, comprender principios técnicos core como algoritmos y sensores",
        "auto.content.experience": "Experiencia de Escena: Cubrir escenas core de conducción autónoma como calles urbanas, autopistas, parques, experiencia inmersiva de funciones de conducción inteligente en diferentes condiciones viales",
        "auto.content.analysis": "Análisis en Profundidad: Equipado con expertos técnicos, interpretación en tiempo real de lógica de operación de conducción inteligente y tendencias de desarrollo industrial",

        // Paquete de Experiencia Dual de Tech
        "combo.title": "Paquete de Experiencia Dual de Tech",
        "combo.position.title": "Posicionamiento del Paquete",
        "combo.position.desc": "Viaje combinado \"Exploración de Empresas de Alta Tecnología + Experiencia de Conducción Autónoma de Energía Nueva\"",
        "combo.value.title": "Valor Core",
        "combo.value.desc": "Cubriendo la escena completa de \"extremo de I+D (empresas de alta tecnología) + extremo de aplicación (conducción autónoma de energía nueva)\", un solo viaje satisface las necesidades duales de exploración de los amantes de la tecnología para \"fuente de tecnología\" y \"aplicación práctica\".",

        // Pie de página
        "footer.contact.title": "Contáctenos",
        "footer.contact.person": "Sr. Li",
        "footer.contact.location": "Distrito New Pudong, Shanghái",
        "footer.contact.phone": "+86 13472548340",
        "footer.contact.email": "lizanzanmei@gmail.com",
        "footer.copyright": "© 2025 SmileLink"
    },

    // 葡萄牙文翻译
    pt: {
        // Informações básicas do site
        "site.title": "SmileBridge - Viagens Premium, Elegância e Liberdade Autênticas",

        // Navegação
        "nav.home": "Início",
        "nav.about": "Sobre Nós",
        "nav.services": "Serviços Premium",
        "nav.contact": "Entre em Contato",

        // Seção Sobre Nós
        "about.title": "SmileBridge: Fazer com que as viagens premium voltem à verdadeira elegância e liberdade",
        "about.p1": "Serviços de viagem verdadeiramente personalizados",
        "about.p2": "Especializados no setor de viagens de luxo com serviços personalizados de cadeia completa",
        "about.p3": "Oferecendo atendimento exclusivo em vários idiomas: chinês, inglês, coreano, japonês, espanhol e português",
        "about.p4": "A privacidade não é um \"serviço adicional\", serviço de mordomo exclusivo 24 horas por dia",
        "about.p5": "Equipes de emergência multilíngues na China, Coreia do Sul, Japão e Espanha",

        // Detalhes de Planejamento de Viagens Personalizadas
        "travel.title": "Privilégio Premium, Elegante e Confortável",
        // "travel.brand.title": "Filosofia da Marca",
        // "travel.brand.desc": "SmileBridge: Fazer com que as viagens premium voltem à verdadeira elegância e liberdade",
        // "travel.pain.title": "Pontos Sensíveis dos Clientes",
        // "travel.pain.desc1": "Você já está cansado de:",
        // "travel.pain.desc2": "Pagar uma fortuna por um \"itinerário privado\" que na verdade é uma rota fixa montada por uma agência de viagens, e se deparar com multidões de grupos turísticos nos pontos populares?",
        // "travel.pain.desc3": "Ficar em um hotel que se vangloria de \"suítes presidenciais\" mas ter que esperar em multidões com estranhos no café da manhã, sem nenhuma privacidade?",
        // "travel.pain.desc4": "Querer explorar joias ocultas, mas os guias só sabem recitar guias turísticos populares, perdendo as verdadeiras surpresas escondidas na vida local?",
        // "travel.advantages.title": "Vantagens do Serviço Principal",
        // "travel.advantages.desc1": "Como uma estrela em ascensão no setor de viagens de luxo, o SmileBridge se destaca com serviços personalizados de cadeia completa, diferente do modelo tradicional de \"apenas fornecer transporte\", construindo um ciclo fechado de experiência premium perfeito desde o planejamento de rotas, acompanhamento com tradução, até transferências aeroportuárias e emergências durante a viagem.",
        // "travel.advantages.point1.title": "Combinação Exclusiva, Recusando o \"Quase Bom\"",
        // "travel.advantages.point1.desc": "Sem modelos fixos, apenas roteiros de viagem \"feitos sob medida\". Especializados em cenários de luxo locais na China, podem projetar itinerários multinacionais em Pequim, Xangai, Hong Kong, Macau; equipados com personalização multilíngue em chinês, inglês, coreano, japonês, espanhol e português, eliminando completamente as barreiras linguísticas, e respondendo aos ajustes do itinerário em segundos.",
        // "travel.advantages.point2.title": "Proteção de Privacidade, considerada como \"Princípio Básico\"",
        // "travel.advantages.point2.desc": "Coordenas quartos 24 horas antes do check-in (longe dos elevadores, andares exclusivos), sincroniza preferências do cliente (dureza de travesseiros, decoração do quarto) com o mordomo do hotel; mordomo exclusivo 24 horas responde às necessidades urgentes de forma pessoal, sem necessidade de transferências por camadas, e garante a privacidade com um acordo de \"zero vazamento de informações\".",
        // "travel.advantages.point3.title": "Resposta Flexível a Emergências, Enfrentar \"Surpresas\" com Calma",
        // "travel.advantages.point3.desc": "Estabelecer pontos de serviço exclusivos nas principais cidades da China (Pequim, Xangai, Guangzhou, Shenzhen, Chengdu, Hong Kong, Macau, etc.) e Coreia do Sul, Japão, com equipes de emergência multilíngues e instituições médicas cooperantes. Situações de emergência (atrasos de voos, fechamentos de atrações, adições temporárias) não requerem coordenação do cliente, as equipes locais fornecem rapidamente soluções alternativas.",
        // "travel.cases.title": "Casos de Serviço",
        // "travel.cases.desc1": "Fornecer serviços de viagem multinacionais para 20 clientes estrangeiros de luxo, coordenar o local de experiência temporária em Pequim em 30 minutos, ajustando flexivelmente a ordem de visita e os projetos destacados.",
        // "travel.cases.desc2": "Personalizar um banquete exclusivo de pato laqueado para mais de 20 clientes estrangeiros de luxo perto da Cidade Proibida, mensagem de retorno do cliente: \"O mais precioso desta viagem é que vocês fizeram cada uma das minhas ideias temporárias se tornarem realidade.\"",

        // Pacote de Viagem de Inovação para Empresas de Alta Tecnologia
        "tech.title": "Pacote de Viagem de Inovação para Empresas de Alta Tecnologia",
        "tech.name.title": "Nome do Pacote",
        "tech.name.desc": "\"Experiência de Tech Inteligente · Visão do Futuro\" — Viagem de Exploração em Profundidade a Empresas de Alta Tecnologia",
        "tech.content.title": "Conteúdo Core do Pacote",
        "tech.content.desc": "Adotar design modular \"1+N\":",
        "tech.content.main": "\"1\": Linha principal de experiência de tech core (centrada na exploração integral de P&D, produção e aplicação de empresas de alta tecnologia)",
        "tech.content.addon": "\"N\": Serviços adicionais personalizados (podem ser combinados de acordo com as necessidades do grupo de clientes, como fóruns executivos, workshops técnicos, compartilhar tendências industriais, etc.)",

        // Jornada de Condução Autonoma de Veículos de Energia Nova de Ponta
        "auto.title": "Caminho Florido, Novo Horizonte",
        "auto.name.title": "Nome da Jornada",
        "auto.name.desc": "\"Condução Inteligente do Futuro · Encontre uma Nova Vida\" — Jornada de Experiência em Profundidade de Condução Autonoma de Veículos de Energia Nova de Ponta",
        "auto.content.title": "Conteúdo Core da Jornada",
        "auto.content.desc": "Adotar estrutura de três etapas \"Rastreamento de Tecnologia — Experiência de Cena — Análise em Profundidade\":",
        "auto.content.trace": "Rastreamento de Tecnologia: Visitar centros de P&D de condução autônoma de veículos de energia nova, compreender princípios técnicos core como algoritmos e sensores",
        "auto.content.experience": "Experiência de Cena: Cobrir cenas core de condução autônoma como ruas urbanas, autoestradas, parques, experiência imersiva de funções de condução inteligente em diferentes condições viárias",
        "auto.content.analysis": "Análise em Profundidade: Equipado com especialistas técnicos, interpretação em tempo real de lógica de operação de condução inteligente e tendências de desenvolvimento industrial",

        // Pacote de Experiência Dual de Tech
        "combo.title": "Pacote de Experiência Dual de Tech",
        "combo.position.title": "Posicionamento do Pacote",
        "combo.position.desc": "Jornada combinada \"Exploração de Empresas de Alta Tecnologia + Experiência de Condução Autonoma de Energia Nova\"",
        "combo.value.title": "Valor Core",
        "combo.value.desc": "Coberto a cena completa de \"extremo de P&D (empresas de alta tecnologia) + extremo de aplicação (condução autônoma de energia nova)\", uma única jornada satisfaz as necessidades duplas de exploração dos amantes da tecnologia para \"fonte de tecnologia\" e \"aplicação prática\".",

        // Rodapé
        "footer.contact.title": "Entre em Contato",
        "footer.contact.person": "Sr. Li",
        "footer.contact.location": "Distrito Novo Pudong, Xangai",
        "footer.contact.phone": "+86 13472548340",
        "footer.contact.email": "lizanzanmei@gmail.com",
        "footer.copyright": "© 2025 SmileLink"
    },

    // 韩文翻译
    ko: {
        // 웹사이트 기본 정보
        "site.title": "스마일브릿지-프리미엄 여행, 진정한 우아함과 자유로움을 되찾다",

        // 내비게이션
        "nav.home": "홈",
        "nav.about": "회사 소개",
        "nav.services": "프리미엄 서비스",
        "nav.contact": "연락처",

        // 회사 소개 섹션
        "about.title": "스마일브릿지: 프리미엄 여행이 진정한 우아함과 자유로움으로 돌아가도록",
        "about.p1": "진정한 개인 맞춤 여행 서비스",
        "about.p2": "고급 여행 분야에 중점을 두고 맞춤형 전과정 서비스를 제공",
        "about.p3": "중국어, 영어, 한국어, 일본어, 스페인어, 포르투갈어 다국어 전용 대응을 제공",
        "about.p4": "개인정보 보호는\"추가 서비스\"가 아닙니다, 24시간 전용 집사 일대일 서비스",
        "about.p5": "중국, 한국, 일본, 스페인의 다국어 긴급 팀",

        // 맞춤 여행 배치 세부 사항
        "travel.title": "프리미엄 프라이빗 즐거움, 우아하고 편안함",
        // "travel.brand.title": "브랜드 철학",
        // "travel.brand.desc": "스마일브릿지: 프리미엄 여행이 진정한 우아함과 자유로움으로 돌아가도록",
        // "travel.pain.title": "고객의 고통 포인트",
        // "travel.pain.desc1": "당신은 이미 지쳤습니까:",
        // "travel.pain.desc2": "비싼 돈을 지불하고 예약한 \"개인 여정\"이 실제로는 여행사에서 조합한 고정 경로이며, 인기 명소에서 관광단 무리를 만나는 것?",
        // "travel.pain.desc3": "\"대통령 스위트\"를 자랑하는 호텔에 투숙하지만 아침 식사에서 낯선 손님들과 붐비고 기다려야 하며, 전혀 사생활이 보호되지 않는 것?",
        // "travel.pain.desc4": "숨겨진 보물을 탐험하고 싶지만, 가이드는 유명 여행 가이드만 외우고 있으며, 현지 생활에 숨겨진 진정한 놀라움을 놓치는 것?",
        // "travel.advantages.title": "핵심 서비스 장점",
        // "travel.advantages.desc1": "고가 여행 업계의 신성으로서 스마일브릿지는 \"교통수단 제공만\" 하는 전통적인 모델과는 달리 맞춤형 전과정 서비스로 돋보이며, 경로 계획, 통역 동행, 공항 이송, 여행 중 긴급 상황 대응까지 완벽한 프리미엄 경험의 폐루프를 구축합니다.",
        // "travel.advantages.point1.title": "독점적 매칭, \"거의 좋음\"을 거부",
        // "travel.advantages.point1.desc": "고정 템플릿 없이 \"맞춤 제작\"된 여행 스크립트만 제공합니다. 중국 국내의 고급 장면에 능숙하여 베이징, 상하이, 홍콩, 마카오 등 다중 도시 여정을 설계할 수 있습니다. 중국어, 영어, 한국어, 일본어, 스페인어, 포르투갈어 다국어 전용 대응을 장착하여 언어 장벽을 완전히 제거하고, 초단위로 여정 조정 요구에 응답합니다.",
        // "travel.advantages.point2.title": "사생활 보호, \"기본 원칙\"으로 간주",
        // "travel.advantages.point2.desc": "체크인 24시간 전에 객실(엘리베이터에서 떨어진 전용 층)을 조정하고, 고객의 기호(베개 경도, 객실布置)를 호텔 집사에게 동기화합니다. 24시간 전용 집사가 일대일로 긴급 요구에 응답하며, 여러 단계의 전달이 필요 없으며, \"정보 유출 제로\" 계약으로 사생활을 보장합니다.",
        // "travel.advantages.point3.title": "유연한 긴급 대응, \"예기치 않은 상황\"에 침착하게 대응",
        // "travel.advantages.point3.desc": "중국 주요 도시(베이징, 상하이, 광저우, 심천, 청두, 홍콩, 마카오 등)와 한국, 일본 주요 도시에 전용 서비스 지점을 설정하고, 다국어 긴급 팀과 협력 의료 기관을 구비합니다. 긴급 상황(비행기 지연, 명소 폐쇄, 임시 추가)은 고객의 조정이 필요하지 않으며, 현지 팀이 빠르게 대안을 제공합니다.",
        // "travel.cases.title": "서비스 사례",
        // "travel.cases.desc1": "20명의 고급 외국 고객에게 다중 도시 여행 서비스를 제공하고, 30분 이내에 베이징의 임시 경험 장소를 조정하여 방문 순서와 특색 프로젝트를 유연하게 조정했습니다.",
        // "travel.cases.desc2": "금성 근처에서 20명 이상의 외국 고급 고객을 위한 전용 오리구이 만찬을 맞춤 제작했습니다. 고객의 귀환 메시지: \"이 여행에서 가장 소중한 것은 여러분이 제 모든 임시 아이디어를 실현해 주었다는 것입니다.\"",

        // 하이테크 기업 혁신 여행 패키지
        "tech.title": "하이테크 기업 혁신 여행 패키지",
        "tech.name.title": "패키지 이름",
        "tech.name.desc": "\"스마트 테크 경험 · 미래 비전\" — 하이테크 기업 심층 탐험 여행",
        "tech.content.title": "패키지 핵심 콘텐츠",
        "tech.content.desc": "\"1+N\" 모듈식 디자인 채택:",
        "tech.content.main": "\"1\": 핵심 테크 경험 메인 라인(하이테크 기업의 R&D, 생산, 응용 전 과정 탐험에 중점)",
        "tech.content.addon": "\"N\": 맞춤형 추가 서비스(고객 그룹의 요구에 따라 조합할 수 있으며, 고위 경영진 포럼, 기술 워크숍, 산업 동향 공유 등 포함)",

        // 최첨단 신에너지 차량 자율주행 여정
        "auto.title": "꽃길을 달려, 새로운 시작을 만나다",
        "auto.name.title": "여정 이름",
        "auto.name.desc": "\"스마트 주행 미래 · 새로운 삶을 만나다\" — 최첨단 신에너지 차량 자율주행 심층 경험 여정",
        "auto.content.title": "여정 핵심 콘텐츠",
        "auto.content.desc": "\"기술 추적 — 장면 경험 — 심층 분석\" 3단계 구조 채택:",
        "auto.content.trace": "기술 추적: 신에너지 차량 자율주행 연구개발 센터를 방문하여 알고리즘, 센서 등 핵심 기술 원리를 이해합니다.",
        "auto.content.experience": "장면 경험: 도시 도로, 고속 도로, 공원 등 자율주행 핵심 장면을 커버하여 다양한 도로 조건에서 스마트 주행 기능을 몰입式으로 경험합니다.",
        "auto.content.analysis": "심층 분석: 기술 전문가를 동행시켜 스마트 주행 운영 로직과 산업 발전 동향을 실시간으로 해석합니다.",

        // 테크 듀얼 경험 패키지
        "combo.title": "테크 듀얼 경험 패키지",
        "combo.position.title": "패키지 포지셔닝",
        "combo.position.desc": "\"하이테크 기업 탐험 + 신에너지 자율주행 경험\" 결합 여행",
        "combo.value.title": "핵심 가치",
        "combo.value.desc": "\"연구 개발 단(하이테크 기업) + 응용 단(신에너지 자율주행)\"의 전 장면을 커버하여 한 번의 여행으로 테크 애호가의 \"기술 원천\"과 \"실제 응용\"에 대한 이중 탐구 욕구를 만족시킵니다.",

        // 푸터
        "footer.contact.title": "연락처",
        "footer.contact.person": "이 선생",
        "footer.contact.location": "상하이시 푸동 신구",
        "footer.contact.phone": "+86 13472548340",
        "footer.contact.email": "lizanzanmei@gmail.com",
        "footer.copyright": "© 2025 스마일브릿지"
    }
};

// 语言切换函数
function changeLanguage(lang) {
    // 更新文档语言属性
    document.documentElement.lang = lang;

    // 更新所有带data-i18n属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');

        // 检查翻译是否存在，如果不存在则使用英文作为第一后备
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else if (translations.en && translations.en[key]) {
            element.textContent = translations.en[key];
        }

        // 特别处理标题
        if (key === 'site.title' && element.tagName === 'TITLE') {
            document.title = translations[lang] && translations[lang][key] ? translations[lang][key] : document.title;
        }
    });

    // 更新导航栏文字
    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length === 4) {
        navLinks[0].textContent = translations[lang]['nav.home'] || navLinks[0].textContent;
        navLinks[1].textContent = translations[lang]['nav.about'] || navLinks[1].textContent;
        navLinks[2].textContent = translations[lang]['nav.services'] || navLinks[2].textContent;
        navLinks[3].textContent = translations[lang]['nav.contact'] || navLinks[3].textContent;
    }

    // 更新页脚联系我们标题
    const footerContactTitle = document.querySelector('footer h2');
    if (footerContactTitle) {
        footerContactTitle.textContent = translations[lang]['footer.contact.title'] || footerContactTitle.textContent;
    }

    // 更新页脚联系信息
    const footerContactInfo = document.querySelectorAll('.footer-content p');
    if (footerContactInfo.length >= 4) {
        footerContactInfo[0].textContent = translations[lang]['footer.contact.person'] || footerContactInfo[0].textContent;
        footerContactInfo[1].textContent = translations[lang]['footer.contact.location'] || footerContactInfo[1].textContent;
        footerContactInfo[2].textContent = translations[lang]['footer.contact.phone'] || footerContactInfo[2].textContent;
        footerContactInfo[3].textContent = translations[lang]['footer.contact.email'] || footerContactInfo[3].textContent;
    }

    // 保存用户语言偏好到localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// 更新当前语言显示
function updateCurrentLanguageDisplay(lang) {
    const currentText = document.getElementById('currentLanguageText');
    if (currentText) {
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                currentText.textContent = option.querySelector('.language-text').textContent;
            }
        });
    }
}

// 初始化语言选择器
function initLanguageSelector() {
    // 获取语言选择器元素
    const selector = document.querySelector('.language-selector');
    const trigger = document.querySelector('.language-selector-trigger');
    const options = document.querySelectorAll('.language-option');
    const currentText = document.getElementById('currentLanguageText');

    // 切换下拉菜单显示/隐藏
    trigger.addEventListener('click', (e) => {
        e.stopPropagation(); // 防止点击触发器时关闭下拉菜单
        selector.classList.toggle('open');
    });

    // 点击选项切换语言
    options.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            const text = option.querySelector('.language-text').textContent;

            // 更新当前显示的语言
            currentText.textContent = text;

            // 隐藏下拉菜单
            selector.classList.remove('open');

            // 调用语言切换函数
            changeLanguage(lang);
        });
    });

    // 点击页面其他地方关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (selector && !selector.contains(e.target)) {
            selector.classList.remove('open');
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function () {
    // 初始化语言选择器
    initLanguageSelector();

    // 检查并设置语言偏好
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
        updateCurrentLanguageDisplay(savedLanguage);
    } else {
        // 默认使用中文
        changeLanguage('zh');
        updateCurrentLanguageDisplay('zh');
    }
});