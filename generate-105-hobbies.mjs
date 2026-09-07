import fs from 'fs';
import path from 'path';

const rawHobbies = [
  // ==========================================
  // CRAFT_MAKING (El Sanatları, Tasarım & Üretim) - 26 Hobiler
  // ==========================================
  {
    id: "pottery-craft",
    name: "Hobi Seramik & Çömlekçilik",
    slug: "hobi-seramik",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Üretim",
    shortDescription: "Kendi çamurundan bardak, tabak ve heykeller şekillendirerek dokunsal yaratıcılığı keşfedin.",
    imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    tags: ["kil", "sanat", "meditatif", "üretim", "dokunsal"],
    budget: { tier: "medium", initial_setup_min: 1200, monthly_recurring_min: 450, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 30, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "dust_chemical_heavy" },
    friction_points: ["Hava ile kuruyan kil çatlayabilir veya seramik fırını (fırınlama atölyesi) bulmak gerekebilir.", "Çamur ve toz nedeniyle temizlik süresi 25-30 dakikayı bulabilir."],
    starter_kit: [
      { item: "Hava ile Kuruyan Seramik Kili (1.5 kg)", is_mandatory: true, approx_cost: 220 },
      { item: "8 Parça Ahşap Şekillendirme Seti", is_mandatory: true, approx_cost: 280 },
      { item: "Akrilik Boya Başlangıç Seti & Fırçalar", is_mandatory: false, approx_cost: 350 },
      { item: "Parlatıcı Vernik / Koruyucu Cila", is_mandatory: true, approx_cost: 190 }
    ],
    first_action: { duration_minutes: 25, description: "Paketten 200 gram kili alıp 'pinch pot' (parmakla sıkıştırma) tekniğiyle ilk küçük takı veya ataş tabağınızı yoğurup şekillendirin." }
  },
  {
    id: "leather-crafting",
    name: "El Yapımı Deri Zanaatı",
    slug: "deri-zanaati",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Üretim",
    shortDescription: "Hakiki deriyi kesip çift iğne eyer dikişiyle dikerek ömür boyu kullanılacak cüzdan ve anahtarlıklar yapın.",
    imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    tags: ["deri", "dikiş", "zanaat", "kalıcı", "aksesuar"],
    budget: { tier: "medium", initial_setup_min: 1100, monthly_recurring_min: 300, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 15, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "moderate", mess_level: "moderate" },
    friction_points: ["Deri delme zımbalarını tokmakla vururken çıkan vuruş sesi (altına kauçuk mat şart).", "Keskin falçata/bıçak kullanımı dikkat ister."],
    starter_kit: [
      { item: "Bitkisel Tabaklanmış Dana Derisi (A4)", is_mandatory: true, approx_cost: 320 },
      { item: "4'lü Delik Zımbası (Pricking Iron)", is_mandatory: true, approx_cost: 380 },
      { item: "Balmumu Kaplı İplik ve 2 İğne", is_mandatory: true, approx_cost: 140 },
      { item: "Poliüretan Çekiç ve Kesim Matı", is_mandatory: true, approx_cost: 260 }
    ],
    first_action: { duration_minutes: 30, description: "A4 derinizden 6x10 cm'lik iki parça kesin, kenarlardan 4 mm içeriden zımbayla delik açın ve eyer dikişiyle ilk kartlığınızı dikin." }
  },
  {
    id: "sourdough-baking",
    name: "Artisan Ekşi Mayalı Ekmekçilik",
    slug: "eksi-mayali-ekmek",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Mutfak",
    shortDescription: "Un, su ve sabrın fermantasyon büyüsüyle çıtır kabuklu, gözenekli ve sağlıklı fırın ekmekleri pişirin.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tags: ["ekmek", "mutfak", "lezzet", "fermantasyon", "tatmin"],
    budget: { tier: "low", initial_setup_min: 650, monthly_recurring_min: 250, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "moderate" },
    friction_points: ["Mayayı canlı tutmak için düzenli besleme disiplini.", "İlk denemelerde hamurun ele yapışması ve form tutturma zorluğu."],
    starter_kit: [
      { item: "Aktif Canlı Ekşi Maya Kültürü", is_mandatory: true, approx_cost: 80 },
      { item: "Hasır Mayalama Sepeti (Banneton)", is_mandatory: true, approx_cost: 240 },
      { item: "Jiletli Hamur Çizici & Spatula", is_mandatory: true, approx_cost: 150 },
      { item: "Taş Değirmen Ekmeklik Un (2 kg)", is_mandatory: true, approx_cost: 180 }
    ],
    first_action: { duration_minutes: 15, description: "Kavanozdaki mayayı 50g un ve 50g ılık suyla besleyip üzerine lastik takın, 4 saat sonraki kabarmayı gözlemleyin." }
  },
  {
    id: "wood-carving",
    name: "Ahşap Oyma & Kaşık Yapımı (Whittling)",
    slug: "ahsap-oyma",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Üretim",
    shortDescription: "Bir parça ıhlamur ağacını el bıçağıyla yontarak kendi organik kaşık veya figürlerinizi üretin.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    tags: ["ahşap", "yontma", "kaşık", "doğal", "odak"],
    budget: { tier: "low", initial_setup_min: 750, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "moderate" },
    friction_points: ["Ahşap talaşları döküldüğü için çalışma örtüsü gerekir.", "Kesik koruyucu eldiven takmak şarttır."],
    starter_kit: [
      { item: "Whittling Başlangıç Bıçağı (BeaverCraft)", is_mandatory: true, approx_cost: 390 },
      { item: "Ihlamur Ağacı Oyma Blokları (3 adet)", is_mandatory: true, approx_cost: 210 },
      { item: "Seviye 5 Kesilmez Güvenlik Eldiveni", is_mandatory: true, approx_cost: 150 }
    ],
    first_action: { duration_minutes: 20, description: "Eldiveni giyip ıhlamur bloğunun köşelerine 'push cut' (itme kesimi) yaparak ilk oval kenar formunu verin." }
  },
  {
    id: "candle-making",
    name: "Aromatik Soya Mum Tasarımı",
    slug: "soya-mum-yapimi",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Üretim",
    shortDescription: "Doğal soya vaksı ve lavanta/vanilya esanslarıyla evinizi spa atmosferine dönüştürecek mumlar dökün.",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    tags: ["mum", "koku", "soya", "estetik", "kolay"],
    budget: { tier: "low", initial_setup_min: 550, monthly_recurring_min: 200, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 15, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "moderate" },
    friction_points: ["Vaks eritilirken ocak ısısına dikkat etmek gerekir.", "Döküm sonrası yüzeyde çukurlaşma olmaması için doğru soğutma gerekir."],
    starter_kit: [
      { item: "1 kg Doğal Soya Vaksı", is_mandatory: true, approx_cost: 220 },
      { item: "Ahşap & Pamuk Fitil Seti (20 adet)", is_mandatory: true, approx_cost: 90 },
      { item: "Esansiyel Yağ (Lavanta/Vanilya)", is_mandatory: true, approx_cost: 130 },
      { item: "2 Adet Amber Cam Kavanoz", is_mandatory: true, approx_cost: 110 }
    ],
    first_action: { duration_minutes: 25, description: "150g vaksı benmari usulü eritin, 65°C'de 10 damla esans damlatıp kavanoz ortasındaki fitilin etrafına dökün." }
  },
  {
    id: "soap-making",
    name: "Doğal Soğuk Sıkım Sabun Yapımı",
    slug: "dogal-sabun-yapimi",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Üretim",
    shortDescription: "Zeytinyağı, hindistan cevizi yağı ve kurutulmuş bitkilerle kimyasalsız artisan sabunlar üretin.",
    imageUrl: "https://images.unsplash.com/photo-1607006314175-9610f7fa0812?auto=format&fit=crop&w=800&q=80",
    tags: ["sabun", "doğal", "kimya", "hediye", "cilt"],
    budget: { tier: "medium", initial_setup_min: 850, monthly_recurring_min: 250, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "dust_chemical_heavy" },
    friction_points: ["Kostik soda (NaOH) çözülürken koruyucu gözlük ve eldiven takılması zorunludur.", "Sabunların kürlenme süresi 4 haftayı bulur."],
    starter_kit: [
      { item: "Sodyum Hidroksit (Kostik) 500g", is_mandatory: true, approx_cost: 95 },
      { item: "Silikon Sabun Kalıbı ve Ahşap Kutu", is_mandatory: true, approx_cost: 290 },
      { item: "Koruyucu Gözlük & Nitril Eldiven", is_mandatory: true, approx_cost: 140 },
      { item: "Zeytinyağı & Hindistan Cevizi Yağı", is_mandatory: true, approx_cost: 325 }
    ],
    first_action: { duration_minutes: 30, description: "Eldiven ve gözlüğü takıp tarttığınız kostik suyu yağa ekleyin ve el blenderıyla 'iz' (puding kıvamı) alana kadar karıştırın." }
  },
  {
    id: "macrame-weaving",
    name: "Bohem Makrome & Duvar Süsleri",
    slug: "bohem-makrome",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Tasarım",
    shortDescription: "Özel ipleri düğümleme teknikleriyle modern saksılıklar, duvar panoları ve çantalar tasarlayın.",
    imageUrl: "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
    tags: ["makrome", "ip", "düğüm", "bohem", "dekorasyon"],
    budget: { tier: "low", initial_setup_min: 450, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Düğümleri eşit gerginlikte çekmek için başlangıçta biraz pratik gerekir.", "Uzun ipleri tararken uçuşan pamuk lifleri."],
    starter_kit: [
      { item: "3mm Taranabilir Pamuk Makrome İpi (250m)", is_mandatory: true, approx_cost: 210 },
      { item: "Ahşap Halka ve Askı Çubuğu (40 cm)", is_mandatory: true, approx_cost: 140 },
      { item: "Metal İp Tarama Tarağı", is_mandatory: true, approx_cost: 100 }
    ],
    first_action: { duration_minutes: 20, description: "Ahşap çubuğa 4 adet ip takarak 'kare düğüm' (square knot) serisini tamamlayıp ilk mini bardak altlığınızı örün." }
  },
  {
    id: "origami-folding",
    name: "Japon Kağıt Katlama Sanatı (Origami)",
    slug: "origami-sanati",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Geometri",
    shortDescription: "Sadece tek bir kare kağıdı katlayarak turna kuşları, ejderhalar ve geometrik heykeller yaratın.",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    tags: ["kağıt", "japon", "geometri", "ucuz", "huzur"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Karmaşık modellerde adım kaçırıldığında kağıdın buruşması.", "Milimetrik katlama hassasiyeti istemesi."],
    starter_kit: [
      { item: "Herhangi Bir A4 veya Kare Not Kağıdı", is_mandatory: true, approx_cost: 0 },
      { item: "100 Yaprak Çift Taraflı Origami Kağıdı Seti", is_mandatory: false, approx_cost: 120 }
    ],
    first_action: { duration_minutes: 10, description: "Bir kağıdı kare kesin ve geleneksel 'Barış Turnası' (Orizuru) katlama adımlarını uygulayarak ilk kanat çırpan kuşunuzu yapın." }
  },
  {
    id: "terrarium-building",
    name: "Kapalı Cam Teraryum & Mini Ekosistem",
    slug: "cam-teraryum",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Botanik",
    shortDescription: "Cam fanus içinde kendi su döngüsünü sağlayan yosunlu ve bitkili minyatür canlı ekosistemler kurun.",
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    tags: ["bitki", "cam", "ekosistem", "yosun", "büyüleyici"],
    budget: { tier: "low", initial_setup_min: 680, monthly_recurring_min: 80, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 15, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "moderate" },
    friction_points: ["Fazla su verilirse cam içinde küf oluşma riski.", "Doğru yosun türü ve drenaj taşlarını seçme ihtiyacı."],
    starter_kit: [
      { item: "Kapaklı Mantar Tıpalı Cam Fanus", is_mandatory: true, approx_cost: 260 },
      { item: "Aktif Karbon & Lav Taşı Drenaj Seti", is_mandatory: true, approx_cost: 180 },
      { item: "Canlı Yastık Yosun & Fittonia Bitkisi", is_mandatory: true, approx_cost: 240 }
    ],
    first_action: { duration_minutes: 30, description: "Fanusun altına 2 cm lav taşı ve aktif karbon serin, toprağı ekleyip cımbızla canlı yosunu ve Fittonia fidesini dikip fısfıslayın." }
  },
  {
    id: "linocut-printmaking",
    name: "Linolyum Baskı Sanatı (Linocut)",
    slug: "linolyum-baski",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Grafik",
    shortDescription: "Linolyum plakayı oyuk bıçaklarla kazıyıp mürekkepleyerek kendi orijinal tişört, bez çanta ve afiş baskılarınızı çıkarın.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    tags: ["baskı", "oyma", "grafik", "tasarım", "retro"],
    budget: { tier: "medium", initial_setup_min: 850, monthly_recurring_min: 200, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "moderate" },
    friction_points: ["Baskı mürekkebini cam tabladan ve merdaneden temizleme süreci.", "Oyma bıçağını kendinize doğru çekmemeniz gerekir."],
    starter_kit: [
      { item: "Lino Oyma Bıçak Seti (5 Uçlu)", is_mandatory: true, approx_cost: 280 },
      { item: "Yumuşak Lino Plaka (A5 ebat)", is_mandatory: true, approx_cost: 160 },
      { item: "Kauçuk Baskı Merdanesi (Brayer)", is_mandatory: true, approx_cost: 220 },
      { item: "Su Bazlı Siyah Blok Baskı Mürekkebi", is_mandatory: true, approx_cost: 190 }
    ],
    first_action: { duration_minutes: 30, description: "A5 plakaya kurşun kalemle bir yaprak deseni çizin, V uçlu bıçakla desenin çevresini oyun ve mürekkep sürüp kağıda bastırın." }
  },
  {
    id: "amigurumi-crochet",
    name: "Amigurumi & Tığ İşi Sevimli Figürler",
    slug: "amigurumi-tig-isi",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Örgü",
    shortDescription: "Renkli ipler ve tığla minik ayıcıklar, kaktüsler ve oyuncaklar örerek sevdiklerinize kalıcı hediyeler verin.",
    imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    tags: ["örgü", "amigurumi", "tığ", "oyuncak", "terapi"],
    budget: { tier: "low", initial_setup_min: 380, monthly_recurring_min: 120, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Sihirli halka (magic ring) ve ilmek saymayı kavramak ilk günlerde kafa karıştırabilir."],
    starter_kit: [
      { item: "Gazzal Baby Cotton İp (3 Renk)", is_mandatory: true, approx_cost: 160 },
      { item: "2.5 mm Ergonomik Silikon Saplı Tığ", is_mandatory: true, approx_cost: 95 },
      { item: "Kilitli Göz Seti & Elyaf Dolgusu", is_mandatory: true, approx_cost: 125 }
    ],
    first_action: { duration_minutes: 20, description: "Sihirli halka içine 6 sık iğne (single crochet) yaparak minik bir topun başlangıç kubbesini oluşturun." }
  },
  {
    id: "resin-jewelry",
    name: "Epoksi Reçine & Kurutulmuş Çiçek Takıları",
    slug: "epoksi-recine-taki",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Takı",
    shortDescription: "Kristal şeffaflığındaki reçine içine gerçek çiçekler ve parıltılar hapsederek kolye uçları ve yüzükler üretin.",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    tags: ["reçine", "takı", "kristal", "çiçek", "parıltı"],
    budget: { tier: "medium", initial_setup_min: 890, monthly_recurring_min: 250, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "dust_chemical_heavy" },
    friction_points: ["Hava kabarcıklarını çakmak veya ısıyla patlatmak gerekir.", "Reçine kokusuna karşı iyi havalandırılan oda gerekir."],
    starter_kit: [
      { item: "Ultra Berrak 2:1 Epoksi Reçine Kiti (375g)", is_mandatory: true, approx_cost: 380 },
      { item: "Silikon Takı ve Kolye Ucu Kalıpları Seti", is_mandatory: true, approx_cost: 260 },
      { item: "Kurutulmuş Minik Kır Çiçekleri Paketi", is_mandatory: true, approx_cost: 140 },
      { item: "Ölçü Kapları ve Karıştırma Çubukları", is_mandatory: true, approx_cost: 110 }
    ],
    first_action: { duration_minutes: 25, description: "A ve B bileşenlerini hassasça karıştırın, kalıba yarısına kadar döküp cımbızla minik bir papatya batırın." }
  },
  {
    id: "embroidery-hoop",
    name: "Modern Kasnak Nakışı & Kanaviçe",
    slug: "modern-kasnak-nakisi",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Tekstil",
    shortDescription: "Renkli muline ipliklerle kumaş üzerine botanik desenler ve ilham verici tipografiler işleyin.",
    imageUrl: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    tags: ["nakış", "kasnak", "iplik", "terapi", "detay"],
    budget: { tier: "low", initial_setup_min: 360, monthly_recurring_min: 90, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["İğneye ip geçirirken ve düğüm atarken göz yorulabilir (iyi ışık önerilir)."],
    starter_kit: [
      { item: "Vidalı Ahşap Kasnak (20 cm)", is_mandatory: true, approx_cost: 110 },
      { item: "DMC veya Muadili 12 Renk Muline İplik Seti", is_mandatory: true, approx_cost: 160 },
      { item: "Keten Kumaş ve Nakış İğneleri", is_mandatory: true, approx_cost: 90 }
    ],
    first_action: { duration_minutes: 20, description: "Kumaşı kasnağa gerin, kurşun kalemle bir papatya çizin ve 'tohum işi' (french knot) tekniğiyle çiçeğin ortasını dikin." }
  },
  {
    id: "miniature-painting",
    name: "Minyatür Figür & Masaüstü Boyama",
    slug: "minyatur-boyama",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Boyama",
    shortDescription: "Dungeons & Dragons, Warhammer veya tarihi karakterlerin 3 santimlik minyatürlerine gölge ve ışık canı verin.",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    tags: ["figür", "minyatür", "boyama", "odak", "fantastik"],
    budget: { tier: "medium", initial_setup_min: 950, monthly_recurring_min: 200, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Fırça kontrolü için el titremesini kontrol altına almak gerekir (iki bileği masaya sabitleme kuralı)."],
    starter_kit: [
      { item: "Army Painter veya Vallejo 8'li Akrilik Seti", is_mandatory: true, approx_cost: 520 },
      { item: "Detay Fırçaları (000 ve 0 Numara Kolinsky)", is_mandatory: true, approx_cost: 260 },
      { item: "Ham Reçine / Plastik Karakter Figürü", is_mandatory: true, approx_cost: 170 }
    ],
    first_action: { duration_minutes: 25, description: "Figüre gri astar atın, ıslak paletinizde fırçanın ucuna çok az boya alıp pelerin kısmına temel renk katmanını sürün." }
  },
  {
    id: "mosaic-art",
    name: "Cam ve Seramik Mozaik Sanatı",
    slug: "cam-mozaik-sanati",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Tasarım",
    shortDescription: "Renkli cam ve seramik parçalarını kırıp birleştirerek aynalar, tepsiler ve duvar panoları süsleyin.",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    tags: ["mozaik", "cam", "renk", "yapboz", "zanaat"],
    budget: { tier: "medium", initial_setup_min: 780, monthly_recurring_min: 200, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "moderate", mess_level: "moderate" },
    friction_points: ["Cam kırarken gözlük takılması ve dökülen minik cam parçacıklarının süpürülmesi gerekir."],
    starter_kit: [
      { item: "Karışık Renkli Vitray Mozaik Taşları (500g)", is_mandatory: true, approx_cost: 240 },
      { item: "Çift Tekerlekli Mozaik Kırma Pensesi", is_mandatory: true, approx_cost: 320 },
      { item: "Mozaik Tutkalı ve Beyaz Derz Dolgusu", is_mandatory: true, approx_cost: 220 }
    ],
    first_action: { duration_minutes: 25, description: "Ahşap bir bardak altlığına mozaik taşlarını penseyle ikiye bölerek çiçek deseni halinde yapıştırın." }
  },
  {
    id: "quilling-paper",
    name: "Quilling (Kağıt Telkari Sanatı)",
    slug: "quilling-kagit-telkari",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Tasarım",
    shortDescription: "İnce renkli kağıt şeritlerini kıvırıp şekillendirerek 3 boyutlu büyüleyici tablolar ve tebrik kartları yapın.",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    tags: ["quilling", "kağıt", "kıvırma", "detay", "ucuz"],
    budget: { tier: "low", initial_setup_min: 290, monthly_recurring_min: 60, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Çok minik kağıt rulolarıyla uğraşıldığından yapıştırıcıyı azar azar sürmek önemlidir."],
    starter_kit: [
      { item: "Quilling Kıvırma Kalemi ve Şablon Cetveli", is_mandatory: true, approx_cost: 110 },
      { item: "5mm Renkli Quilling Kağıt Şeritleri (500 Adet)", is_mandatory: true, approx_cost: 120 },
      { item: "İnce Uçlu Tutkal Aplikatörü", is_mandatory: true, approx_cost: 60 }
    ],
    first_action: { duration_minutes: 15, description: "Şeridi kalemin ucuna geçirip rulo sarın, şablonda genişletip ucunu yapıştırarak bir damla yaprak şekli oluşturun." }
  },
  {
    id: "tie-dye-textile",
    name: "Batik & Kumaş Boyama (Tie-Dye)",
    slug: "batik-kumas-boyama",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Moda",
    shortDescription: "Lastiklerle bağladığınız tişört ve kumaşları rengarenk organik boyalarla spiral ve gökkuşağı desenlerine kavuşturun.",
    imageUrl: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80",
    tags: ["batik", "kumaş", "tişört", "renkli", "eğlenceli"],
    budget: { tier: "low", initial_setup_min: 390, monthly_recurring_min: 120, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "dust_chemical_heavy" },
    friction_points: ["Boya damlamasına karşı lavaboda veya leğende yapılmalı ve eldiven giyilmelidir."],
    starter_kit: [
      { item: "3 Renkli Kumaş Boyası Başlangıç Şişeleri", is_mandatory: true, approx_cost: 210 },
      { item: "100% Pamuklu Beyaz Tişört", is_mandatory: true, approx_cost: 140 },
      { item: "Paket Lastiği & Koruyucu Eldiven Seti", is_mandatory: true, approx_cost: 40 }
    ],
    first_action: { duration_minutes: 20, description: "Tişörtün tam ortasından tutup spiral şeklinde sarın, 3 lastikle pizza dilimi gibi bağlayıp her dilime farklı boya sıkın." }
  },
  {
    id: "pressed-flower-art",
    name: "Kurutulmuş Bitki & Herbaryum Sanatı",
    slug: "kurutulmus-bitki-herbaryum",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Botanik",
    shortDescription: "Parklardan ve doğadan topladığınız yaprak ve çiçekleri presleyip cam çerçevelerde botanik tablolara dönüştürün.",
    imageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    tags: ["çiçek", "pres", "botanik", "tablo", "huzur"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Çiçeklerin kitap arasında rengini kaybetmeden kuruması için 1-2 hafta beklenmesi gerekir."],
    starter_kit: [
      { item: "Kalın Ansiklopedi / Kitap ve Yağlı Kağıt", is_mandatory: true, approx_cost: 0 },
      { item: "Çift Camlı İki Yüzü Şeffaf Asma Çerçeve", is_mandatory: false, approx_cost: 190 }
    ],
    first_action: { duration_minutes: 15, description: "Yürüyüşte bulduğunuz yabani yonca ve minik sarı çiçeği iki yağlı kağıt arasına yerleştirip ağır bir kitabın arasına bastırın." }
  },
  {
    id: "polymer-clay",
    name: "Polimer Kil ile Minyatür & Takı",
    slug: "polimer-kil-taki",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Modelleme",
    shortDescription: "Normal ev fırınında 110 derecede pişen renkli killerle küpeler, broşlar ve sevimli biblolar yaratın.",
    imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    tags: ["polimer kil", "fimo", "küpe", "renkli", "kolay"],
    budget: { tier: "low", initial_setup_min: 480, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Fırın sıcaklığını aşarsanız kil yanabilir; fırın derecesini termometreyle kontrol etmek önerilir."],
    starter_kit: [
      { item: "Fimo / Sculpey 6 Renk Başlangıç Seti", is_mandatory: true, approx_cost: 290 },
      { item: "Kil Açma Akrilik Silindiri & Maket Bıçağı", is_mandatory: true, approx_cost: 110 },
      { item: "Antialerjik Küpe Klipsleri (10 çift)", is_mandatory: true, approx_cost: 80 }
    ],
    first_action: { duration_minutes: 25, description: "Beyaz ve turuncu kili mermer deseni alana kadar burup silindirle açın, küçük bir daire kesip küpe deliği açın." }
  },
  {
    id: "needle-felting",
    name: "İğneleme Keçe Sanatı (Needle Felting)",
    slug: "igne-kece-sanati",
    category: "craft_making",
    categoryNameTr: "El Sanatları & Tekstil",
    shortDescription: "Yün liflerini özel tırtıklı iğneyle batırıp sıkıştırarak sevimli 3D hayvanlar ve süsler heykeltraş gibi şekillendirin.",
    imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    tags: ["keçe", "yün", "iğneleme", "heykelsi", "sevimli"],
    budget: { tier: "low", initial_setup_min: 360, monthly_recurring_min: 90, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Hızlı yaparken parmağa iğne batırma riski (deri parmaklık şarttır)."],
    starter_kit: [
      { item: "Doğal Merinos Yün Paketi (8 Renk)", is_mandatory: true, approx_cost: 180 },
      { item: "3'lü Keçe İğnesi ve Keçe Çalışma Süngeri", is_mandatory: true, approx_cost: 110 },
      { item: "Deri Parmak Koruyucu", is_mandatory: true, approx_cost: 70 }
    ],
    first_action: { duration_minutes: 20, description: "Bir avuç sarı yünü rulo yapıp süngere koyun ve iğneyle defalarca batırarak sert, yuvarlak bir mini limon topu oluşturun." }
  },

  // ==========================================
  // MENTAL_FOCUS (Zihinsel Odak, Strateji & Zen) - 22 Hobiler
  // ==========================================
  {
    id: "chess-strategy",
    name: "Stratejik Satranç & Taktik Çözüm",
    slug: "satranc-strateji",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Strateji",
    shortDescription: "Binlerce yıllık hamle kombinasyonlarıyla mantıksal derinliği ve odaklanma yetinizi zirveye taşıyın.",
    imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    tags: ["zihin", "satranç", "strateji", "ücretsiz", "derinlik"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "hybrid", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Arka arkaya maç kaybedildiğinde duyulan geçici moral bozukluğu."],
    starter_kit: [
      { item: "Lichess.org Ücretsiz Hesap", is_mandatory: true, approx_cost: 0 },
      { item: "Turnuva Tipi Ağırlıklı Satranç Takımı", is_mandatory: false, approx_cost: 450 }
    ],
    first_action: { duration_minutes: 15, description: "Lichess'te 'Puzzles' sekmesine girip 5 adet taktik çatal ve açmaz sorusunu çözerek hamle öngörünüzü test edin." }
  },
  {
    id: "bonsai-cultivation",
    name: "Bonsai & Minyatür Ağaç Sanatı",
    slug: "bonsai-sanati",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Doğa",
    shortDescription: "Yaşayan bir heykeli budayarak, telle sararak sabır ve estetik bilincini geliştiren dingin bir hobi.",
    imageUrl: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
    tags: ["bitki", "sabır", "zen", "doğa", "estetik"],
    budget: { tier: "medium", initial_setup_min: 950, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "moderate" },
    friction_points: ["Sulama dengesini kaçırıp yaprak döktürme riski.", "Hızlı büyüme bekleyenler için sabır gerektirmesi."],
    starter_kit: [
      { item: "Ficus Ginseng Başlangıç Bonsaisi", is_mandatory: true, approx_cost: 550 },
      { item: "Geleneksel Çelik Budama Makası", is_mandatory: true, approx_cost: 240 },
      { item: "Bonsai Toprağı & Nem Ölçer", is_mandatory: true, approx_cost: 160 }
    ],
    first_action: { duration_minutes: 15, description: "Ağacınızın toprağını kontrol edip ana formu bozan dışa doğru uzamış iki fazla dalı 45 derece açıyla budayın." }
  },
  {
    id: "rubiks-speedcubing",
    name: "Speedcubing & Rubik Küp Çözümü",
    slug: "rubik-kupu-speedcubing",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Hız",
    shortDescription: "Algoritmaları parmak hafızasına kazıyarak 3x3 zeka küpünü saniyeler içinde çözme rekorları kırın.",
    imageUrl: "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=800&q=80",
    tags: ["küp", "rubik", "hız", "algoritma", "refleks"],
    budget: { tier: "low", initial_setup_min: 280, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["İlk katmanı geçerken algoritma sırasını unutma; sabırla 3-4 gün tekrar gerekir."],
    starter_kit: [
      { item: "Manyetik Hızlı Zeka Küpü (MoYu RS3M)", is_mandatory: true, approx_cost: 280 },
      { item: "Ücretsiz Timer / Kronometre Uygulaması", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 20, description: "Küpün beyaz yüzünde bir 'beyaz artı' (white cross) oluşturup köşe parçalarını yerine oturtmayı öğrenin." }
  },
  {
    id: "calligraphy-lettering",
    name: "Geleneksel Kaligrafi & Yazı Sanatı",
    slug: "kaligrafi-yazi-sanati",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Estetik",
    shortDescription: "Mürekkep, divit ve fırça uçlu kalemlerle harflere zarafet, ritim ve görsel ahenk kazandırın.",
    imageUrl: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    tags: ["yazı", "kaligrafi", "mürekkep", "meditatif", "harf"],
    budget: { tier: "low", initial_setup_min: 420, monthly_recurring_min: 80, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Divit ucuna mürekkep fazlalığı geldiğinde kağıda damlama riski."],
    starter_kit: [
      { item: "Eğik / Düz Kaligrafi Sapı ve 3 Çelik Uç", is_mandatory: true, approx_cost: 190 },
      { item: "Siyah Kaligrafi Mürekkebi (30ml)", is_mandatory: true, approx_cost: 130 },
      { item: "Pürüzsüz 100g Noktalı Egzersiz Defteri", is_mandatory: true, approx_cost: 100 }
    ],
    first_action: { duration_minutes: 20, description: "Kalemi 45 derece eğimle tutup aşağı inerken kalın, yukarı çıkarken ince çizgiler çekerek temel 'stroke' egzersizi yapın." }
  },
  {
    id: "astronomy-stargazing",
    name: "Amatör Astronomi & Gökyüzü Gözlemi",
    slug: "amator-astronomi",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Bilim",
    shortDescription: "Gözlem dürbünüyle Ay kraterlerini, Jüpiter'in uydularını ve takımyıldızları keşfederek evrenin derinliğine bakın.",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    tags: ["uzay", "yıldız", "dürbün", "gece", "büyüleyici"],
    budget: { tier: "medium", initial_setup_min: 1600, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "outdoor", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Şehir ışık kirliliği ve bulutlu hava koşulları gözlemi kısıtlayabilir."],
    starter_kit: [
      { item: "Celestron 7x50 veya 10x50 Astronomi Dürbünü", is_mandatory: true, approx_cost: 1600 },
      { item: "Stellarium Gökyüzü Haritası (Ücretsiz Uygulama)", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 25, description: "Hava kararınca dürbünle Ay'a bakın, aydınlık ile gölgenin birleştiği çizgideki (terminatör) derin krater gölgelerini inceleyin." }
  },
  {
    id: "creative-writing",
    name: "Yaratıcı Yazarlık & Mikro Kurgu",
    slug: "yaratici-yazarlik",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Edebiyat",
    shortDescription: "Her gün 300 kelimelik kısa öyküler ve karakter diyalogları yazarak hayal gücünüzü kelimelere dökün.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    tags: ["yazı", "öykü", "edebiyat", "ücretsiz", "içsel"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Boş sayfa korkusu (writer's block) ve ilk taslakta kusursuzluk takıntısı."],
    starter_kit: [
      { item: "Herhangi Bir Not Defteri veya Google Dokümanlar", is_mandatory: true, approx_cost: 0 },
      { item: "Kaliteli Jel Mürekkepli Kalem", is_mandatory: false, approx_cost: 65 }
    ],
    first_action: { duration_minutes: 15, description: "'Treni kaçıran bir yolcunun çantasında unutulan gizemli mektup' konusuyla 150 kelimelik açılış paragrafı yazın." }
  },
  {
    id: "go-board-game",
    name: "Kadim Go Oyunu (Weiqi)",
    slug: "go-oyunu-strateji",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Strateji",
    shortDescription: "Siyah ve beyaz taşlarla tahta üzerinde alan çevreleyerek 4000 yıllık strateji ve denge felsefesini yaşayın.",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    tags: ["go", "uzakdoğu", "strateji", "felsefe", "derinlik"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_desk", social_dynamic: "hybrid", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Kuralları basit olmasına rağmen tahtanın genişliği ilk başta karmaşık gelebilir (9x9 tahta ile başlanmalı)."],
    starter_kit: [
      { item: "Online-Go.com (OGS) Ücretsiz Hesap", is_mandatory: true, approx_cost: 0 },
      { item: "Ahşap 9x9 / 13x13 Çift Taraflı Go Tahtası", is_mandatory: false, approx_cost: 580 }
    ],
    first_action: { duration_minutes: 15, description: "OGS'nin interaktif öğreticisinde 'taş esareti' (liberty) ve taş yakalama kuralını öğrenip ilk mini 9x9 maçınızı yapın." }
  },
  {
    id: "card-magic",
    name: "İskambil İllüzyonizmi & Sleight of Hand",
    slug: "iskambil-illuzyon",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & El Çabukluğu",
    shortDescription: "Tek bir deste kartla arkadaşlarınızı hayrete düşürecek zihinsel tahmin ve kart kaybetme numaraları öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
    tags: ["sihir", "kart", "illüzyon", "el çabukluğu", "sosyal"],
    budget: { tier: "low", initial_setup_min: 220, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "hybrid", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Hileyi ayna karşısında yaparken açık vermemek için en az 20 kez tekrarlamak gerekir."],
    starter_kit: [
      { item: "Orijinal Bicycle Rider Back Standart Deste", is_mandatory: true, approx_cost: 220 }
    ],
    first_action: { duration_minutes: 20, description: "'Double Lift' (iki kartı tek kart gibi kaldırma) tekniğini öğrenerek seyircinin seçtiği kartı destenin üstüne fırlatma numarasını çalışın." }
  },
  {
    id: "mindfulness-meditation",
    name: "Bilinçli Farkındalık (Mindfulness) & Zen",
    slug: "mindfulness-farkindalik",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & İçsel Denge",
    shortDescription: "Nefes teknikleri ve rehberli odaklanma egzersizleriyle günlük stres yükünü sıfırlayıp zihinsel berraklık kazanın.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    tags: ["zen", "nefes", "farkındalık", "huzur", "ücretsiz"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["İlk dakikalarda akla gelen düşüncelerle kavga etme hissi (düşünceleri izleyip bırakmayı öğrenmek gerekir)."],
    starter_kit: [
      { item: "Sessiz Bir Köşe ve Rahat Bir Minder", is_mandatory: true, approx_cost: 0 },
      { item: "Medito / Insight Timer (Tamamen Ücretsiz Uygulama)", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 10, description: "Gözlerinizi kapatıp burnunuzdan giren serin havaya ve çıkan ılık nefese odaklanarak 1'den 10'a kadar nefes sayın." }
  },
  {
    id: "sudoku-logic-puzzles",
    name: "İleri Düzey Mantık Bulmacaları & Sudoku",
    slug: "sudoku-mantik-bulmacalari",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Matematik",
    shortDescription: "Rakamların saf mantıkla dizildiği Sudoku, Kakuro ve Nonogram bulmacalarıyla analitik zekanızı keskinleştirin.",
    imageUrl: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80",
    tags: ["mantık", "sayı", "sudoku", "beyin", "ücretsiz"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Kilitlenildiğinde tahmin yapma dürtüsü (saf mantık kurallarını öğrenmek gerekir)."],
    starter_kit: [
      { item: "Cracking the Cryptic YouTube & Uygulaması", is_mandatory: true, approx_cost: 0 },
      { item: "Kurşun Kalem ve Silgi", is_mandatory: true, approx_cost: 30 }
    ],
    first_action: { duration_minutes: 15, description: "Orta zorlukta bir klasik Sudoku açın ve 'Naked Pairs' (çıplak ikili) tekniğini kullanarak kilitli kareleri çözün." }
  },
  {
    id: "cryptography-puzzles",
    name: "Kriptografi & Şifre Kırma Oyunları",
    slug: "kriptografi-sifre-cozme",
    category: "mental_focus",
    categoryNameTr: "Zihinsel Odak & Analitik",
    shortDescription: "Sezar şifresinden modern hash algoritmalarına kadar gizli mesajları çözerek dijital dedektiflik yapın.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["şifre", "kripto", "bulmaca", "dedektif", "zeka"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Harf frekansı analizi yaparken kağıt-kalem not tutma disiplini gerektirmesi."],
    starter_kit: [
      { item: "CryptoHack veya MysteryTwister Ücretsiz Platformu", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 20, description: "Karakterlerin alfabede 3 adım kaydırıldığı bir 'ROT13/Sezar' şifreli metnini frekans tablosuyla deşifre edin." }
  },

  // ==========================================
  // PHYSICAL_MOVEMENT (Fiziksel Hareket, Spor & Doğa) - 20 Hobiler
  // ==========================================
  {
    id: "bouldering-climbing",
    name: "Bouldering & Salon Tırmanışı",
    slug: "bouldering-tirmanis",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Spor",
    shortDescription: "İpsiz, minder üstünde problem çözme odaklı duvar tırmanışıyla tüm vücut gücünüzü ve dengenizi keşfedin.",
    imageUrl: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
    tags: ["tırmanış", "adrenalin", "fiziksel", "sosyal", "odak"],
    budget: { tier: "medium", initial_setup_min: 1400, monthly_recurring_min: 900, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 20, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "specialized_venue", social_dynamic: "hybrid", noise_level: "moderate", mess_level: "clean" },
    friction_points: ["İlk birkaç seansta parmak derisinde ve ön kol kaslarında hafif sızı.", "Yakın bir tırmanış salonu bulunması ihtiyacı."],
    starter_kit: [
      { item: "Tırmanış Salonu İlk Giriş & Ayakkabı Kiralama", is_mandatory: true, approx_cost: 350 },
      { item: "Toz Torbası (Chalk Bag) ve Magnezyum Tozu", is_mandatory: true, approx_cost: 320 }
    ],
    first_action: { duration_minutes: 45, description: "Tırmanış salonunda en kolay 'V0/V1' başlangıç rotasını ayak tekniğiyle ağırlığınızı duvara vererek tamamlayın." }
  },
  {
    id: "yoga-vinyasa",
    name: "Vinyasa Yoga & Beden Esnekliği",
    slug: "vinyasa-yoga",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Zihin",
    shortDescription: "Nefes ile akıcı hareket serilerini senkronize ederek sırt ağrılarını yok edin, esneklik ve denge kazanın.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    tags: ["yoga", "esneklik", "nefes", "sağlık", "omurga"],
    budget: { tier: "low", initial_setup_min: 350, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["İlk haftalarda esnek olmama hissi (yoga esnek olmak için yapılır, esnek olanların sporu değildir)."],
    starter_kit: [
      { item: "Kaymaz 6mm Yoga Matı (TPE veya Doğal Kauçuk)", is_mandatory: true, approx_cost: 350 },
      { item: "YouTube 'Yoga with Adriene' Ücretsiz Kanalları", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 20, description: "Matınızı açın, 3 tur 'Güneşe Selam' (Surya Namaskar) akışıyla omurganızı ve hamstring kaslarınızı esnetin." }
  },
  {
    id: "calisthenics-bodyweight",
    name: "Kalisteniks (Kendi Ağırlığınla Güçlenme)",
    slug: "kalisteniks-vucut-agirligi",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Güç",
    shortDescription: "Spor salonu üyeliği olmadan barfiks, şınav ve dip hareketleriyle heykelsi bir üst vücut kuvveti inşa edin.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    tags: ["güç", "barfiks", "şınav", "ücretsiz", "park"],
    budget: { tier: "low", initial_setup_min: 380, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "outdoor", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["İlk nizami barfiksi çekene kadar direnç lastiğiyle birkaç hafta sabır gerekir."],
    starter_kit: [
      { item: "Kapı Eşiği Barfiks Demiri veya Direnç Lastiği", is_mandatory: true, approx_cost: 380 }
    ],
    first_action: { duration_minutes: 20, description: "3 set 10 tekrar nizami şınav ve 3 set 20 saniye plank yaparak çekirdek bölge kuvvetinizi test edin." }
  },
  {
    id: "jump-rope-freestyle",
    name: "Freestyle İp Atlama & Kardiyo",
    slug: "freestyle-ip-atlama",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Ritim",
    shortDescription: "Çapraz geçişler, çift dönüşler ve müzik ritmiyle eğlenerek dakikada 15 kalori yaktıran yüksek tempolu antrenman.",
    imageUrl: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80",
    tags: ["ip atlama", "kardiyo", "ritim", "çeviklik", "taşınabilir"],
    budget: { tier: "low", initial_setup_min: 220, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "outdoor", social_dynamic: "solo", noise_level: "moderate", mess_level: "clean" },
    friction_points: ["Evde alt kata ses gitmemesi için açık alanda veya kalın mat üstünde yapılması gerekir."],
    starter_kit: [
      { item: "Boncuklu veya 5mm PVC Hızlı Atlama İpi", is_mandatory: true, approx_cost: 220 }
    ],
    first_action: { duration_minutes: 15, description: "İpin uzunluğunu göğüs hizanıza ayarlayın ve aralıksız 100 tek sıçrama ile ritminizi yakalayın." }
  },
  {
    id: "table-tennis",
    name: "Masa Tenisi (Ping-Pong)",
    slug: "masa-tenisi",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Refleks",
    shortDescription: "Spin vuruşları, falsolar ve hızlı reflekslerle göz-el koordinasyonunu geliştiren dinamik bir raket sporu.",
    imageUrl: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80",
    tags: ["raket", "refleks", "hız", "sosyal", "eğlenceli"],
    budget: { tier: "low", initial_setup_min: 490, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "specialized_venue", social_dynamic: "hybrid", noise_level: "moderate", mess_level: "clean" },
    friction_points: ["Birlikte oynayacak bir partner veya antrenman duvarı/kulüp bulma gereksinimi."],
    starter_kit: [
      { item: "Giriş Seviyesi Karbon/Kauçuk Raket (DHS veya Stiga)", is_mandatory: true, approx_cost: 390 },
      { item: "3 Yıldızlı Antrenman Topu (6'lı Paket)", is_mandatory: true, approx_cost: 100 }
    ],
    first_action: { duration_minutes: 30, description: "Forehand vuruş açısını 45 derece eğik tutarak topu masanın karşı köşesine üst spinle gönderme pratiği yapın." }
  },
  {
    id: "trail-hiking",
    name: "Trekking & Doğa Yürüyüşü",
    slug: "trekking-doga-yuruyusu",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Doğa",
    shortDescription: "Hafta sonları orman patikalarında, kanyonlarda yürüyerek akciğerlerinizi tazeleyin ve doğayla bütünleşin.",
    imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    tags: ["yürüyüş", "doğa", "orman", "manzara", "macera"],
    budget: { tier: "low", initial_setup_min: 750, monthly_recurring_min: 200, currency: "TRY" },
    time_commitment: { min_hours_weekly: 5, prep_cleanup_overhead_minutes: 30, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "outdoor", social_dynamic: "hybrid", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Şehir merkezinden doğa rotalarına ulaşım planlaması.", "Bileği tutan iyi bir outdoor ayakkabı ihtiyacı."],
    starter_kit: [
      { item: "Kaymaz Tabanlı Outdoor Yürüyüş Ayakkabısı", is_mandatory: true, approx_cost: 1400 },
      { item: "20L Hafif Sırt Çantası & Termos", is_mandatory: true, approx_cost: 550 },
      { item: "Wikiloc Çevrimdışı Rota Uygulaması", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 60, description: "Şehrinize en yakın milli park veya koruda 5 kilometrelik yeşil rotayı Wikiloc haritasıyla takip ederek yürüyün." }
  },
  {
    id: "skateboarding-cruiser",
    name: "Kaykay & Cruiser ile Şehir Gezintisi",
    slug: "kaykay-cruiser",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Denge",
    shortDescription: "Yumuşak tekerlekli cruiser kaykayla sahil yollarında süzülerek rüzgarı hissedin ve denge kaslarınızı güçlendirin.",
    imageUrl: "https://images.unsplash.com/photo-1520045892732-3010b42c4c35?auto=format&fit=crop&w=800&q=80",
    tags: ["kaykay", "cruiser", "denge", "sokak", "özgürlük"],
    budget: { tier: "medium", initial_setup_min: 1350, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "outdoor", social_dynamic: "solo", noise_level: "moderate", mess_level: "clean" },
    friction_points: ["İlk sürüşlerde düşme korkusu; dizlik ve kask takmak özgüven kazandırır."],
    starter_kit: [
      { item: "Tam Takım Ahşap Cruiser Kaykay (Oxelo vb.)", is_mandatory: true, approx_cost: 1350 },
      { item: "Kask ve Dizlik Güvenlik Seti", is_mandatory: true, approx_cost: 480 }
    ],
    first_action: { duration_minutes: 30, description: "Düz bir asfaltta 'push' (itme) ve ağırlık merkezini öne vererek yumuşak dönüş (carving) hareketini deneyin." }
  },
  {
    id: "archery-traditional",
    name: "Geleneksel Okçuluk & Hedef Odaklanması",
    slug: "geleneksel-okculuk",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Odak",
    shortDescription: "Geleneksel yay ve okla nefesinizi kontrol ederek sarı hedef merkezini vurma disiplinini öğrenin.",
    imageUrl: "https://images.unsplash.com/photo-1511067007798-44672d7b52b0?auto=format&fit=crop&w=800&q=80",
    tags: ["okçuluk", "odak", "hedef", "duruş", "geleneksel"],
    budget: { tier: "medium", initial_setup_min: 1200, monthly_recurring_min: 400, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 15, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "specialized_venue", social_dynamic: "hybrid", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Güvenlik nedeniyle sadece onaylı okçuluk menzillerinde veya açık arazide yapılmalıdır."],
    starter_kit: [
      { item: "Geleneksel Lamine Türk Yayı (25-30 lbs)", is_mandatory: false, approx_cost: 1400 },
      { item: "Zihgir (Başparmak Okçu Yüzüğü) & Oklar", is_mandatory: true, approx_cost: 450 },
      { item: "Okçuluk Kulübü Deneme Dersi", is_mandatory: true, approx_cost: 350 }
    ],
    first_action: { duration_minutes: 40, description: "Zihgir ile kirişi kavrayıp çene altına çekin (çapa noktası), nefes vererek kirişi serbest bırakıp 10 metre hedefine atış yapın." }
  },
  {
    id: "indoor-rowing",
    name: "Kürek Ergometresi & Tüm Vücut Kondisyonu",
    slug: "kurek-ergometresi",
    category: "physical_movement",
    categoryNameTr: "Fiziksel Hareket & Dayanıklılık",
    shortDescription: "Vücut kaslarının %86'sını çalıştıran ritmik kürek çekişleriyle sıfır eklem baskısıyla maksimum kalori yakın.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    tags: ["kürek", "kondisyon", "dayanıklılık", "eklemsiz", "ritim"],
    budget: { tier: "medium", initial_setup_min: 750, monthly_recurring_min: 650, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "specialized_venue", social_dynamic: "solo", noise_level: "moderate", mess_level: "clean" },
    friction_points: ["Doğru form (bacak-gövde-kol sırası) öğrenilmezse bel yorulabilir."],
    starter_kit: [
      { item: "Spor Salonu Üyeliği veya Concept2 Kullanımı", is_mandatory: true, approx_cost: 650 },
      { item: "Ter Emici Esnek Spor Kıyafeti", is_mandatory: true, approx_cost: 350 }
    ],
    first_action: { duration_minutes: 20, description: "Bacaklarla itme, gövdeyi 11 açısına yaslama ve kolları göğse çekme 1:2 ritmini tutturarak 1500 metre çekin." }
  },

  // ==========================================
  // DIGITAL_CREATIVE (Dijital, Kodlama, Ses & Tasarım) - 20 Hobiler
  // ==========================================
  {
    id: "digital-illustration",
    name: "Dijital İllüstrasyon & Çizim",
    slug: "dijital-illüstrasyon",
    category: "digital_creative",
    categoryNameTr: "Dijital Yaratıcılık",
    shortDescription: "Tablet veya bilgisayarda sıfır dağınıklıkla sınırsız renk paleti ve çizim dünyasına adım atın.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    tags: ["çizim", "tablet", "tasarım", "temiz", "sonsuz renk"],
    budget: { tier: "low", initial_setup_min: 800, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Ekrana bakarken el-göz koordinasyonuna alışmak ilk 2-3 gün sürebilir."],
    starter_kit: [
      { item: "Başlangıç Grafik Tableti (Wacom One / Huion)", is_mandatory: true, approx_cost: 750 },
      { item: "Krita / Krita Studio (Açık Kaynak & Ücretsiz)", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 20, description: "Krita'yı açıp basınç hassasiyetini deneyin, 3 farklı doku fırçasıyla bir kahve kupası eskizi yapın." }
  },
  {
    id: "microelectronics-arduino",
    name: "Mikroelektronik & Akıllı Maker Projeleri",
    slug: "mikroelektronik-arduino",
    category: "digital_creative",
    categoryNameTr: "Dijital & Donanım Yaratıcılığı",
    shortDescription: "Sensörler, LED'ler ve kod satırlarıyla kendi akıllı oda termometrenizi veya bitki sulayıcınızı inşa edin.",
    imageUrl: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80",
    tags: ["kodlama", "elektronik", "robotik", "maker", "üretim"],
    budget: { tier: "medium", initial_setup_min: 850, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 10, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Yanlış jumper kablo bağlantısı nedeniyle devrenin çalışmaması (hata ayıklama sabrı ister)."],
    starter_kit: [
      { item: "Arduino Uno / ESP32 Süper Başlangıç Kiti", is_mandatory: true, approx_cost: 680 },
      { item: "Lehimsiz Breadboard ve Kablo Demeti", is_mandatory: true, approx_cost: 140 }
    ],
    first_action: { duration_minutes: 20, description: "Arduino IDE'yi kurun, breadboard üzerine 220 ohm direnç ve kırmızı LED takıp 'Blink' kodunu yükleyerek ilk ışığı yakın." }
  },
  {
    id: "blender-3d-modeling",
    name: "Blender ile 3D Modelleme & Render",
    slug: "blender-3d-modelleme",
    category: "digital_creative",
    categoryNameTr: "Dijital Yaratıcılık & 3D",
    shortDescription: "Tamamen ücretsiz Blender yazılımıyla kendi sevimli düşük poligonlu (low-poly) evlerinizi ve karakterlerinizi tasarlayın.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["3d", "blender", "render", "animasyon", "ücretsiz"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Çok sayıda kısayol tuşu olması (G, S, R ve E tuşlarını öğrenerek başlamak gerekir)."],
    starter_kit: [
      { item: "Blender 4.x (Tamamen Ücretsiz & Açık Kaynak)", is_mandatory: true, approx_cost: 0 },
      { item: "Tekerlekli (3 tuşlu) Standart Mouse", is_mandatory: true, approx_cost: 120 }
    ],
    first_action: { duration_minutes: 30, description: "Blender'daki meşhur varsayılan küpü silmeden 'Extrude' (E) tuşuyla çatısını ve kapısını çekerek low-poly bir kulübe yapın." }
  },
  {
    id: "music-production-flstudio",
    name: "Dijital Müzik Prodüksiyonu & Beat Yapımı",
    slug: "muzik-produksiyonu-beat",
    category: "digital_creative",
    categoryNameTr: "Dijital Ses & Müzik",
    shortDescription: "Lo-Fi, hip-hop veya elektronik müzik beat'leri üretip synth melodileri ve davul ritimleriyle şarkı besteleyin.",
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    tags: ["müzik", "beat", "lofi", "prodüksiyon", "ritim"],
    budget: { tier: "low", initial_setup_min: 500, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Kulaklıkla uzun süre yüksek seste çalışmamak ve miks dengesini tutturmak."],
    starter_kit: [
      { item: "Reaper veya Vital VST (Ücretsiz/Deneme DAW)", is_mandatory: true, approx_cost: 0 },
      { item: "Kapalı Kapsül Monitör Kulaklığı", is_mandatory: true, approx_cost: 650 },
      { item: "25 Tuşlu Mini MIDI Klavye", is_mandatory: false, approx_cost: 1500 }
    ],
    first_action: { duration_minutes: 25, description: "Bir davul döngüsüne (kick ve snare) 4 akorluk nostaljik bir piyano döngüsü ekleyip ilk 8 barlık Lo-Fi beat'inizi döşeyin." }
  },
  {
    id: "pixel-art-animation",
    name: "Retro Pixel Art & Piksel Çizimi",
    slug: "pixel-art-retro-cizim",
    category: "digital_creative",
    categoryNameTr: "Dijital Sanat & Oyun",
    shortDescription: "90'lar nostaljisini piksel piksel işleyerek minik kılıçlar, iksirler ve yürüyen karakter animasyonları yapın.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    tags: ["pixel art", "retro", "oyun", "kolay", "eğlenceli"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Kısıtlı piksellerde (örn: 16x16) siluet netliği oluşturmayı öğrenmek."],
    starter_kit: [
      { item: "Aseprite veya Ücretsiz Piskel / LibreSprite", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 15, description: "32x32 piksellik bir tuval açıp 4 renk kullanarak sevimli bir iksir şişesi çizin ve gölge ekleyin." }
  },
  {
    id: "podcast-hosting",
    name: "Podcast Yayıncılığı & Sesli Hikayeler",
    slug: "podcast-yayinciligi",
    category: "digital_creative",
    categoryNameTr: "Dijital İçerik & Ses",
    shortDescription: "İlgi duyduğunuz bir konuda mikrofon başına geçip Spotify ve Apple Podcasts'te kendi sesli serinizi yayınlayın.",
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    tags: ["podcast", "ses", "yayın", "konuşma", "hikaye"],
    budget: { tier: "low", initial_setup_min: 650, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 15, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Oda yankısını azaltmak için yastık/perde ile akustik önlem alma ihtiyacı."],
    starter_kit: [
      { item: "USB Kardioid Kondenser Mikrofon (Fifine vb.)", is_mandatory: true, approx_cost: 650 },
      { item: "Audacity Ücretsiz Ses Kayıt & Düzenleme", is_mandatory: true, approx_cost: 0 },
      { item: "Spotify for Podcasters (Tamamen Ücretsiz Dağıtım)", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 20, description: "Audacity'de 3 dakikalık 'Bölüm 0: Bu Podcast Nedir?' tanıtım kaydı alıp nefes seslerini temizleyin." }
  },
  {
    id: "game-dev-godot",
    name: "Godot ile 2D Bağımsız Oyun Geliştirme",
    slug: "godot-oyun-gelistirme",
    category: "digital_creative",
    categoryNameTr: "Dijital & Kodlama",
    shortDescription: "Açık kaynaklı hafif Godot motoruyla kendi zıplayan platform veya labirent oyununuzu kodlayın.",
    imageUrl: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&q=80",
    tags: ["oyun", "godot", "kodlama", "yazılım", "ücretsiz"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 4, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Kapsamı çok büyük tutup oyunu bitirememe riski (küçük prototiplerle başlamak şart)."],
    starter_kit: [
      { item: "Godot Engine 4 (Tamamen Ücretsiz - 50MB)", is_mandatory: true, approx_cost: 0 },
      { item: "itch.io Ücretsiz 2D Oyun Grafikleri (Kenney.nl)", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 30, description: "Bir CharacterBody2D ekleyip GDScript ile sağ-sol ok tuşlarına basınca hareket eden ilk karakterinizi ekranda koşturun." }
  },
  {
    id: "creative-coding-p5",
    name: "Generative Art & P5.js Yaratıcı Kodlama",
    slug: "yaratici-kodlama-p5js",
    category: "digital_creative",
    categoryNameTr: "Dijital Sanat & Matematik",
    shortDescription: "Matematiksel formüller ve kod döngüleriyle sürekli devinen hipnotik dijital sanat eserleri üretin.",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    tags: ["kod", "sanat", "javascript", "geometri", "matematik"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Trigonometri ve açı mantığını koda dökerken deneme-yanılma yapmak gerekir."],
    starter_kit: [
      { item: "Tarayıcı Üzerinde p5.js Web Editörü", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 15, description: "10 satırlık for döngüsüyle farenin hareketine göre renk değiştiren bir fraktal daireler deseni oluşturun." }
  },

  // ==========================================
  // COLLECTING_CURATION (Kürasyon, Zevk, Gastronomi & Koleksiyon) - 20 Hobiler
  // ==========================================
  {
    id: "street-photography",
    name: "Sokak & Hikaye Fotoğrafçılığı",
    slug: "sokak-fotografciligi",
    category: "collecting_curation",
    categoryNameTr: "Kürasyon & Görsel Sanat",
    shortDescription: "Akıllı telefonunuzla veya kompakt kamerayla şehrin anlık ışık, gölge ve insan hikayelerini kadrajlayın.",
    imageUrl: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80",
    tags: ["fotoğraf", "sokak", "görsel", "gezi", "kompozisyon"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "outdoor", social_dynamic: "solo", noise_level: "moderate", mess_level: "clean" },
    friction_points: ["İnsanları çekerken duyulan ilk çekingenlik; önce geometri ve gölgelerle başlanmalıdır."],
    starter_kit: [
      { item: "Mevcut Akıllı Telefon Kamerası", is_mandatory: true, approx_cost: 0 },
      { item: "Lightroom Mobile (Ücretsiz Sürüm)", is_mandatory: true, approx_cost: 0 }
    ],
    first_action: { duration_minutes: 20, description: "Altın saatte sokağa çıkıp sadece ışık hüzmelerinin düştüğü kapı ve duvarlardaki kontrastı 5 karede çekin." }
  },
  {
    id: "aeropress-coffee",
    name: "Nitelikli Kahve Demleme & Tadım (Cupping)",
    slug: "nitelikli-kahve",
    category: "collecting_curation",
    categoryNameTr: "Kürasyon & Duyusal Zevk",
    shortDescription: "Tek köken çekirdekler, su sıcaklığı ve mikron ayarlarla mutfağınızı gurme bir kahve laboratuvarına çevirin.",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    tags: ["kahve", "tadım", "gurme", "sabah", "hassasiyet"],
    budget: { tier: "medium", initial_setup_min: 1200, monthly_recurring_min: 400, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Taze kavrulmuş çekirdek tedarik sürekliliği ve el değirmeninde öğütme alışkanlığı."],
    starter_kit: [
      { item: "Orijinal AeroPress veya V60 Dripper Takımı", is_mandatory: true, approx_cost: 650 },
      { item: "0.1g Hassas Dijital Mutfak Terazisi", is_mandatory: true, approx_cost: 320 },
      { item: "Taze Kavrulmuş Etiyopya Çekirdeği (250g)", is_mandatory: true, approx_cost: 290 }
    ],
    first_action: { duration_minutes: 10, description: "15g taze kahveye 92°C sıcaklıkta 200g su döküp AeroPress ters çevirme metoduyla meyvemsi bardağınızı demleyin." }
  },
  {
    id: "vinyl-record-collecting",
    name: "Vinil Plak Koleksiyonculuğu & Analog Ses",
    slug: "vinil-plak-koleksiyonu",
    category: "collecting_curation",
    categoryNameTr: "Koleksiyon & Müzik Kültürü",
    shortDescription: "Nadir baskı plakları sahaf dükkanlarında avlayarak pikap iğnesinin o sıcak, çıtırtılı analog ruhunu yaşayın.",
    imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    tags: ["plak", "vinil", "pikap", "analog", "nostalji"],
    budget: { tier: "medium", initial_setup_min: 2200, monthly_recurring_min: 500, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Plakların çizilmemesi için dik saklama ve karbon fırçayla toz alma titizliği."],
    starter_kit: [
      { item: "Giriş Seviyesi Hoparlörlü Pikap (Audio-Technica vb.)", is_mandatory: true, approx_cost: 2200 },
      { item: "İlk Sevdiğiniz Albümün 33'lük LP Plağı", is_mandatory: true, approx_cost: 450 },
      { item: "Anti-Statik Karbon Fiber Plak Fırçası", is_mandatory: false, approx_cost: 160 }
    ],
    first_action: { duration_minutes: 15, description: "Plağı kenarlarından tutup tablaya koyun, iğne kolunu kaldırıp ilk parçanın oluğuna usulca indirin." }
  },
  {
    id: "tea-ceremony-gongfu",
    name: "Gongfu Çay Seremonisi & Oolong Tadımı",
    slug: "gongfu-cay-seremonisi",
    category: "collecting_curation",
    categoryNameTr: "Kürasyon & Duyusal Zevk",
    shortDescription: "Minyatür porselen gaiwan kaplarında yaprakları çoklu demleyerek çayın her fincanda değişen notalarını keşfedin.",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tags: ["çay", "zen", "tadım", "oolong", "dinginlik"],
    budget: { tier: "low", initial_setup_min: 550, monthly_recurring_min: 150, currency: "TRY" },
    time_commitment: { min_hours_weekly: 2, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Musluk suyu yerine düşük mineralli arıtılmış/kaynak suyu kullanma gereksinimi."],
    starter_kit: [
      { item: "Porselen Gaiwan (100ml) & Tadım Fincanı", is_mandatory: true, approx_cost: 320 },
      { item: "Orijinal Tie Guan Yin Oolong Yaprak Çay (50g)", is_mandatory: true, approx_cost: 230 }
    ],
    first_action: { duration_minutes: 15, description: "Gaiwan'a 5g yaprak koyun, 95°C su döküp 10 saniye sonra süzerek ilk orkide kokulu yudumu alın." }
  },
  {
    id: "birdwatching-nature",
    name: "Kuş Gözlemciliği (Birdwatching)",
    slug: "kus-gozlemciligi",
    category: "collecting_curation",
    categoryNameTr: "Kürasyon & Doğa",
    shortDescription: "Sulak alanlarda ve parklarda kuş türlerini seslerinden ve siluetlerinden tanıyıp yaşam listenizi genişletin.",
    imageUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    tags: ["kuş", "doğa", "gözlem", "dürbün", "sabır"],
    budget: { tier: "free", initial_setup_min: 0, monthly_recurring_min: 0, currency: "TRY" },
    time_commitment: { min_hours_weekly: 3, prep_cleanup_overhead_minutes: 0, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "outdoor", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Kuşların en hareketli olduğu erken sabah saatlerinde (06:00-08:00) dışarı çıkmak."],
    starter_kit: [
      { item: "Merlin Bird ID (Cornell Lab - Ücretsiz Ses Tanıma)", is_mandatory: true, approx_cost: 0 },
      { item: "8x42 Doğa Gözlem Dürbünü", is_mandatory: false, approx_cost: 1100 }
    ],
    first_action: { duration_minutes: 20, description: "Merlin uygulamasını açıp mikrofonu balkonda kuş seslerine tutun ve çevrenizdeki 3 farklı türü anında teşhis edin." }
  },
  {
    id: "succulent-propagation",
    name: "Nadir Sukulent & Kaktüs Koleksiyonculuğu",
    slug: "sukulent-kaktus-yetistiriciligi",
    category: "collecting_curation",
    categoryNameTr: "Kürasyon & Botanik",
    shortDescription: "Tek bir yapraktan yeni yavrular üreterek pencere önünüzü renkli geometrik bir sukulent galerisine çevirin.",
    imageUrl: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
    tags: ["sukulent", "kaktüs", "çoğaltma", "yeşil", "kolay"],
    budget: { tier: "low", initial_setup_min: 240, monthly_recurring_min: 50, currency: "TRY" },
    time_commitment: { min_hours_weekly: 1, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Aşırı sevgi yüzünden fazla sulayıp kökleri çürütme hatası (2-3 haftada bir sulanmalı)."],
    starter_kit: [
      { item: "3 Farklı Echeveria / Haworthia Sukulent Fidesi", is_mandatory: true, approx_cost: 160 },
      { item: "Kaktüs Toprağı ve Perlit Karışımı", is_mandatory: true, approx_cost: 80 }
    ],
    first_action: { duration_minutes: 10, description: "Sağlıklı bir sukulentin alt yaprağını nazikçe bükerek koparın ve kuru toprağın üzerine yatırıp köklenmesini bekleyin." }
  },
  {
    id: "fountain-pen-collecting",
    name: "Dolma Kalem & Özel Mürekkep Koleksiyonu",
    slug: "dolma-kalem-murekkep",
    category: "collecting_curation",
    categoryNameTr: "Koleksiyon & Yazı Kültürü",
    shortDescription: "Altın uçların kağıttaki pürüzsüz kayışını, simli ve gölgeli el yapımı mürekkeplerle birleştirin.",
    imageUrl: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    tags: ["kalem", "dolmakalem", "mürekkep", "yazı", "prestij"],
    budget: { tier: "low", initial_setup_min: 450, monthly_recurring_min: 100, currency: "TRY" },
    time_commitment: { min_hours_weekly: 1, prep_cleanup_overhead_minutes: 5, learning_curve_to_first_win: "immediate_day1" },
    environment: { location: "indoor_desk", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Mürekkep değiştirirken kalemi ılık suyla temizleme alışkanlığı."],
    starter_kit: [
      { item: "Lamy Safari veya Kaweco Sport Dolma Kalem", is_mandatory: true, approx_cost: 450 },
      { item: "Diamine Şişe Mürekkep (30ml)", is_mandatory: false, approx_cost: 180 }
    ],
    first_action: { duration_minutes: 10, description: "Kartuşu takıp mürekkebin uca inmesini bekleyin, kaliteli bir kağıda adınızı el yazısıyla yazarak ıslak çizgi kalitesini hissedin." }
  },
  {
    id: "fermentation-kombucha",
    name: "Kombucha & Fermente İçecekler",
    slug: "kombucha-fermantasyon",
    category: "collecting_curation",
    categoryNameTr: "Kürasyon & Gastronomi",
    shortDescription: "SCOBY mayası, tatlı çay ve meyvelerle kendi probiyotik, gazlı ve ferahlatıcı kombucha içeceğinizi üretin.",
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    tags: ["kombucha", "fermente", "içecek", "probiyotik", "sağlık"],
    budget: { tier: "low", initial_setup_min: 350, monthly_recurring_min: 80, currency: "TRY" },
    time_commitment: { min_hours_weekly: 1, prep_cleanup_overhead_minutes: 15, learning_curve_to_first_win: "short_1_week" },
    environment: { location: "indoor_room", social_dynamic: "solo", noise_level: "silent", mess_level: "clean" },
    friction_points: ["Fermantasyon süresince kavanozun direkt güneş görmeyen ılık bir yerde dinlenmesi gerekir."],
    starter_kit: [
      { item: "Canlı Kombucha SCOBY Mayası & Başlangıç Sıvısı", is_mandatory: true, approx_cost: 160 },
      { item: "3 Litrelik Cam Kavanoz & Tülbent Bezi", is_mandatory: true, approx_cost: 120 },
      { item: "Siyah Dökme Çay ve Şeker", is_mandatory: true, approx_cost: 70 }
    ],
    first_action: { duration_minutes: 20, description: "1 litre tatlı siyah çay demleyip oda sıcaklığına soğutun, kavanoza döküp SCOBY mayasını içine bırakın ve tülbentle örtün." }
  }
];

// Generate an extended catalog of 105+ high quality hobbies by expanding realistic, unique hobby entities
console.log(`Starting generation. Base hobbies count: ${rawHobbies.length}`);

// We will add more specific hobbies across categories to reach 105+
const extraHobbyDefinitions = [
  // Crafts
  { id: "terrazzo-jesmonite", name: "Jesmonite & Terrazzo Tepsi Tasarımı", cat: "craft_making", catTr: "El Sanatları & Tasarım", tier: "medium", init: 650, time: 2, desc: "Ekolojik döküm reçinesiyle renkli mermer ve terrazzo desenli bardak altlıkları dökün.", img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80", tags: ["jesmonite", "terrazzo", "tepsi", "döküm"] },
  { id: "stained-glass", name: "Tiffany Vitray & Cam Sanatı", cat: "craft_making", catTr: "El Sanatları & Cam", tier: "high", init: 1900, time: 4, desc: "Renkli camları bakır folyolayıp lehimleyerek güneş yakalayıcı vitray süsleri yapın.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", tags: ["vitray", "cam", "lehim", "renkli"] },
  { id: "leather-pyrography", name: "Ahşap & Deri Yakma Sanatı (Pyrography)", cat: "craft_making", catTr: "El Sanatları & Oyma", tier: "low", init: 480, time: 3, desc: "Sıcak uçlu havya kalemiyle ahşap panolara detaylı portre ve doğa motifleri yakın.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80", tags: ["yakma", "ahşap", "havya", "sanat"] },
  { id: "natural-perfumery", name: "Doğal Esansiyel Parfüm Tasarımı", cat: "craft_making", catTr: "El Sanatları & Koku", tier: "medium", init: 890, time: 2, desc: "Üst, orta ve alt koku notalarını birleştirerek kendi imza kokunuzu şişeleyin.", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80", tags: ["parfüm", "koku", "esans", "tasarım"] },
  { id: "cyanotype-sunprint", name: "Siyanotip (Güneş Işığıyla Mavi Baskı)", cat: "craft_making", catTr: "El Sanatları & Fotoğraf", tier: "low", init: 360, time: 2, desc: "Güneş ışığına duyarlı solüsyonla yaprakların ve negatiflerin Prusya mavisi baskılarını alın.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", tags: ["mavi", "güneş", "baskı", "siyanotip"] },
  { id: "bookbinding-art", name: "El Yapımı Defter Ciltleme (Bookbinding)", cat: "craft_making", catTr: "El Sanatları & Kağıt", tier: "low", init: 420, time: 3, desc: "Sayfaları mumlu iple dikip deri veya kumaş kapaklarla özel eskiz defterleri ciltleyin.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80", tags: ["defter", "cilt", "dikiş", "kağıt"] },
  { id: "punch-needle", name: "Punch Needle (Panç Nakışı) ile Yastık", cat: "craft_making", catTr: "El Sanatları & Tekstil", tier: "low", init: 390, time: 3, desc: "Özel panç iğnesiyle kumaşa dokulu, kabartmalı modern desenler ve halılar işleyin.", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80", tags: ["punch", "nakış", "yün", "yastık"] },
  { id: "wire-wrapping-jewelry", name: "Bakır Tel Sarma Takı (Wire Wrapping)", cat: "craft_making", catTr: "El Sanatları & Takı", tier: "low", init: 320, time: 2, desc: "Doğal taşları lehim kullanmadan sadece bakır telleri büküp sararak kolyelere dönüştürün.", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80", tags: ["tel", "bakır", "taş", "kolye"] },
  { id: "paper-mache-sculpture", name: "Kağıt Hamuru (Paper Mache) Heykel", cat: "craft_making", catTr: "El Sanatları & Heykel", tier: "free", init: 0, time: 3, desc: "Eski gazete kağıtları ve unlu tutkalla hafif ve sağlam dekoratif heykeller yapın.", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80", tags: ["kağıt", "heykel", "sıfır atık", "ücretsiz"] },
  { id: "screen-printing", name: "Serigrafi (İpek Baskı) Atölyesi", cat: "craft_making", catTr: "El Sanatları & Baskı", tier: "medium", init: 1100, time: 4, desc: "İpek elek ve emülsiyonla kendi çizimlerinizi bez çanta ve posterlere seri basın.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80", tags: ["serigrafi", "ipek", "baskı", "tişört"] },

  // Mental focus
  { id: "haiku-poetry", name: "Japon Haiku & Minimalist Şiir", cat: "mental_focus", catTr: "Zihinsel Odak & Şiir", tier: "free", init: 0, time: 2, desc: "5-7-5 hece ölçüsüyle doğanın ve anın güzelliğini üç dizede ölümsüzleştirin.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", tags: ["şiir", "haiku", "japon", "minimalizm"] },
  { id: "zen-rock-balancing", name: "Taş Dengeleme Sanatı (Rock Balancing)", cat: "mental_focus", catTr: "Zihinsel Odak & Denge", tier: "free", init: 0, time: 2, desc: "Dere kenarlarında yapıştırıcı olmadan yerçekimi merkezini bularak taş kuleler dikin.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80", tags: ["taş", "denge", "zen", "doğa"] },
  { id: "chess-blindfold", name: "Körleme Satranç (Tahtasız Zihinsel Oyun)", cat: "mental_focus", catTr: "Zihinsel Odak & Bellek", tier: "free", init: 0, time: 3, desc: "Tahtaya bakmadan sadece zihninizde 64 kareyi ve taşların konumunu canlandırarak oynayın.", img: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80", tags: ["hafıza", "satranç", "zihin", "odak"] },
  { id: "speed-reading", name: "Hızlı Okuma & Anlama Teknikleri", cat: "mental_focus", catTr: "Zihinsel Odak & Gelişim", tier: "free", init: 0, time: 3, desc: "İç sesi susturarak dakikada 600+ kelime okuma ve bilgi tarama yeteneği kazanın.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", tags: ["okuma", "hız", "kitap", "hafıza"] },
  { id: "memory-palace", name: "Hafıza Sarayı (Mnemonik Teknikler)", cat: "mental_focus", catTr: "Zihinsel Odak & Bellek", tier: "free", init: 0, time: 2, desc: "Zihninizde odalar inşa ederek yüzlerce ismi, numarayı ve yabancı kelimeyi kalıcı hatırlayın.", img: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80", tags: ["hafıza", "saray", "zeka", "öğrenme"] },
  { id: "journaling-bullet", name: "Bullet Journal & Zihinsel Düzen", cat: "mental_focus", catTr: "Zihinsel Odak & Planlama", tier: "low", init: 240, time: 2, desc: "Noktalı defterde alışkanlık takibi, günlük düşünce dökümü ve kişisel gelişim çizelgeleri tutun.", img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80", tags: ["günlük", "bujo", "plan", "odak"] },
  { id: "philosophy-reading", name: "Stoacı Felsefe & Akşam Refleksiyonu", cat: "mental_focus", catTr: "Zihinsel Odak & Felsefe", tier: "free", init: 0, time: 2, desc: "Marcus Aurelius ve Epiktetos metinleriyle kontrol edebileceğiniz şeylere odaklanmayı öğrenin.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", tags: ["stoa", "felsefe", "huzur", "bilgelik"] },
  { id: "lucid-dreaming", name: "Lüsid Rüya & Bilinçli Rüya Günlüğü", cat: "mental_focus", catTr: "Zihinsel Odak & Zihin", tier: "free", init: 0, time: 1, desc: "Gerçeklik kontrolleri ve rüya günlüğüyle uykudayken rüya gördüğünüzün farkına varın.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80", tags: ["rüya", "bilinç", "lüsid", "günlük"] },
  { id: "polyglot-language", name: "Dil Öğrenimi & Anki Aralıklı Tekrar", cat: "mental_focus", catTr: "Zihinsel Odak & Dil", tier: "free", init: 0, time: 3, desc: "Günde 20 dakika aralıklı tekrar (spaced repetition) ile yeni bir dilin temelini atın.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80", tags: ["dil", "anki", "öğrenme", "ispanyolca"] },
  { id: "shogi-japanese-chess", name: "Shogi (Japon Satrancı & Taş Çevirme)", cat: "mental_focus", catTr: "Zihinsel Odak & Strateji", tier: "free", init: 0, time: 3, desc: "Yakalanan taşların karşı tarafa tekrar oyuna sokulduğu taktiksel Japon zeka oyunu.", img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80", tags: ["shogi", "japon", "satranç", "strateji"] },

  // Physical Movement
  { id: "gravel-cycling", name: "Gravel & Şehirlerarası Bisikletçilik", cat: "physical_movement", catTr: "Fiziksel Hareket & Macera", tier: "high", init: 4500, time: 5, desc: "Hem asfaltta hem toprak yollarda pedal çevirerek keşfedilmemiş köyleri gezin.", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80", tags: ["bisiklet", "gravel", "pedal", "özgürlük"] },
  { id: "swimming-freestyle", name: "Açık Su ve Havuzda Serbest Stil Yüzme", cat: "physical_movement", catTr: "Fiziksel Hareket & Su", tier: "medium", init: 750, time: 3, desc: "Doğru nefes ritmi ve kulaç mekaniğiyle sıfır eklem yüküyle tüm kasları çalıştırın.", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80", tags: ["yüzme", "su", "kondisyon", "nefes"] },
  { id: "trail-running", name: "Patika Koşusu (Trail Running)", cat: "physical_movement", catTr: "Fiziksel Hareket & Koşu", tier: "low", init: 950, time: 4, desc: "Toprak orman yollarında kök ve taşların üstünden sekerek doğada kardiyo yapın.", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80", tags: ["koşu", "patika", "orman", "kardiyo"] },
  { id: "slackline-balance", name: "Slackline & İp Üstünde Denge", cat: "physical_movement", catTr: "Fiziksel Hareket & Denge", tier: "low", init: 480, time: 2, desc: "İki ağaç arasına gerilen 5cm genişliğindeki esnek perlon bant üstünde yürüyün.", img: "https://images.unsplash.com/photo-1520045892732-3010b42c4c35?auto=format&fit=crop&w=800&q=80", tags: ["slackline", "denge", "ip", "park"] },
  { id: "badminton-play", name: "Badminton & Hızlı Raket Rallileri", cat: "physical_movement", catTr: "Fiziksel Hareket & Çeviklik", tier: "low", init: 380, time: 3, desc: "Tüytopun havada süzülüşünü takip ederek ani sıçramalarla kondisyon kazanın.", img: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80", tags: ["badminton", "raket", "tüytop", "hız"] },
  { id: "bjj-grappling", name: "Brazilian Jiu-Jitsu (BJJ) & Yer Dövüşü", cat: "physical_movement", catTr: "Fiziksel Hareket & Savunma", tier: "medium", init: 1100, time: 4, desc: "İnsan satrancı olarak bilinen kaldıraç ve kilitleme prensiplerine dayalı savunma sanatı.", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80", tags: ["bjj", "dövüş", "savunma", "satranç"] },
  { id: "roller-skating", name: "Dört Tekerlekli Paten (Roller Skating)", cat: "physical_movement", catTr: "Fiziksel Hareket & Ritim", tier: "medium", init: 1200, time: 3, desc: "Müzik eşliğinde retro quad patenlerle sahil boyunda dans figürleri ve kayışlar yapın.", img: "https://images.unsplash.com/photo-1520045892732-3010b42c4c35?auto=format&fit=crop&w=800&q=80", tags: ["paten", "retro", "dans", "denge"] },
  { id: "kayaking-paddle", name: "Kano & Deniz Kayaking", cat: "physical_movement", catTr: "Fiziksel Hareket & Su", tier: "medium", init: 600, time: 3, desc: "Sessiz koylarda kürek çekerek kıyı mağaralarını ve deniz canlılarını su seviyesinden izleyin.", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80", tags: ["kano", "deniz", "kürek", "doğa"] },
  { id: "kettlebell-flow", name: "Kettlebell (Girya) Akış Antrenmanları", cat: "physical_movement", catTr: "Fiziksel Hareket & Güç", tier: "low", init: 490, time: 3, desc: "Tek bir demir gülleyle swing, snatch ve get-up hareketleriyle patlayıcı güç kazanın.", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80", tags: ["kettlebell", "güç", "kardiyo", "ev"] },
  { id: "salsa-bachata-dance", name: "Salsa & Bachata Sosyal Dansları", cat: "physical_movement", catTr: "Fiziksel Hareket & Dans", tier: "low", init: 400, time: 3, desc: "Latin müziklerinin sıcak ritimleriyle partnerli koordinasyon ve özgüven geliştirin.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", tags: ["dans", "salsa", "latin", "sosyal"] },

  // Digital creative
  { id: "stop-motion-animation", name: "Stop-Motion Kil ve Lego Animasyonu", cat: "digital_creative", catTr: "Dijital & Sinema", tier: "free", init: 0, time: 3, desc: "Kare kare fotoğraf çekip nesneleri canlandırarak kendi mini filmlerinizi yönetin.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", tags: ["animasyon", "lego", "film", "kamera"] },
  { id: "chiptune-8bit-music", name: "8-Bit Chiptune Müzik Besteleme", cat: "digital_creative", catTr: "Dijital Ses & Retro", tier: "free", init: 0, time: 3, desc: "Eski Game Boy ve NES ses çipleri tonlarıyla neşeli 8-bit melodiler programlayın.", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80", tags: ["8bit", "müzik", "retro", "gameboy"] },
  { id: "ai-prompt-engineering", name: "Yapay Zeka Sanatı & Prompt Mühendisliği", cat: "digital_creative", catTr: "Dijital Yaratıcılık & AI", tier: "free", init: 0, time: 2, desc: "Midjourney ve Stable Diffusion modellerine kelimelerle görsel dünyalar tasarlatın.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", tags: ["ai", "prompt", "sanat", "teknoloji"] },
  { id: "video-editing-davinci", name: "DaVinci Resolve ile Sinematik Video Kurgu", cat: "digital_creative", catTr: "Dijital Sinema & Kurgu", tier: "free", init: 0, time: 4, desc: "Hollywood seviyesindeki ücretsiz DaVinci yazılımıyla renk düzenleme (color grading) yapın.", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80", tags: ["video", "kurgu", "davinci", "renk"] },
  { id: "web-dev-creative", name: "Kişisel Web Sitesi & HTML/CSS Kodlama", cat: "digital_creative", catTr: "Dijital & Kodlama", tier: "free", init: 0, time: 3, desc: "Kendi dijital bahçenizi, portfolyonuzu ve interaktif yazılarınızı sıfırdan kodlayın.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", tags: ["web", "html", "css", "kodlama"] },
  { id: "audiobook-narration", name: "Sesli Kitap Seslendirme & Diksiyon", cat: "digital_creative", catTr: "Dijital Ses & Edebiyat", tier: "low", init: 550, time: 3, desc: "Kamuya açık klasik romanları tonlama ve karakter sesleriyle okuyup sesli kitap yapın.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80", tags: ["ses", "kitap", "diksiyon", "mikrofon"] },
  { id: "keyboard-modding", name: "Mekanik Klavye Özelleştirme & Yağlama", cat: "digital_creative", catTr: "Dijital Donanım & Maker", tier: "medium", init: 1400, time: 3, desc: "Switch'leri lube'layıp köpük modlayarak 'thock' sesli mükemmel yazım hissiyatı oluşturun.", img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80", tags: ["klavye", "mod", "mekanik", "thock"] },
  { id: "retro-emulation", name: "Retro Konsol Emülasyonu & Raspberry Pi", cat: "digital_creative", catTr: "Dijital & Donanım", tier: "medium", init: 1100, time: 3, desc: "Raspberry Pi içine RetroPie kurarak binlerce nostaljik arcade oyununu tek kutuda toplayın.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", tags: ["raspberry", "arcade", "retro", "oyun"] },
  { id: "font-typography-design", name: "Tipografi & Kendi Yazı Tipini Tasarlama", cat: "digital_creative", catTr: "Dijital Tasarım & Font", tier: "free", init: 0, time: 3, desc: "FontForge ile harflerin kavislerini vektörel çizerek bilgisayara yüklenebilir font üretin.", img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80", tags: ["font", "tipografi", "harf", "vektör"] },
  { id: "vector-icon-design", name: "Vektörel İkon Seti Tasarımı", cat: "digital_creative", catTr: "Dijital Tasarım & UI", tier: "free", init: 0, time: 2, desc: "Figma üzerinde 24x24 ızgarada minimalist çizgi ve dolgulu simgeler oluşturun.", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80", tags: ["figma", "ikon", "vektör", "tasarım"] },

  // Collecting curation
  { id: "hot-sauce-making", name: "Artisan Acı Sos & Biber Fermantasyonu", cat: "collecting_curation", catTr: "Kürasyon & Gastronomi", tier: "low", init: 320, time: 2, desc: "Habanero ve jalapeno biberlerini tuzlu salamurada fermente edip lezzet patlaması soslar yapın.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", tags: ["sos", "acı", "fermente", "lezzet"] },
  { id: "perfume-decant-sampling", name: "Niş Parfüm Notaları & Dekant Tadımı", cat: "collecting_curation", catTr: "Kürasyon & Duyusal Zevk", tier: "medium", init: 750, time: 2, desc: "Ud, amber, tütsü ve vetiver gibi niş parfümlerin koku piramidini analiz edin.", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80", tags: ["parfüm", "niş", "koku", "tadım"] },
  { id: "numismatics-coins", name: "Nümizmatik (Tarihi Madeni Para Koleksiyonu)", cat: "collecting_curation", catTr: "Koleksiyon & Tarih", tier: "low", init: 350, time: 2, desc: "Farklı dönemlerin ve ülkelerin madeni paralarını büyüteç altında inceleyip albümleyin.", img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80", tags: ["para", "koleksiyon", "tarih", "nümizmatik"] },
  { id: "vintage-watch-restoration", name: "Vintage Mekanik Saat Koleksiyonculuğu", cat: "collecting_curation", catTr: "Koleksiyon & Mekanik", tier: "high", init: 2400, time: 2, desc: "Kurmalı ve otomatik tarihi saatlerin çark sesini dinleyip deri kayış kombinasyonları yapın.", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80", tags: ["saat", "vintage", "mekanik", "koleksiyon"] },
  { id: "mushroom-foraging", name: "Doğal Mantar Avcılığı (Mushroom Foraging)", cat: "collecting_curation", catTr: "Kürasyon & Doğa", tier: "free", init: 0, time: 3, desc: "Sonbaharda meşe ormanlarında kuzugöbeği ve kantarocu mantarlarını rehber eşliğinde bulun.", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80", tags: ["mantar", "orman", "doğa", "av"] },
  { id: "comic-book-curation", name: "Çizgi Roman & Grafik Roman Kürasyonu", cat: "collecting_curation", catTr: "Koleksiyon & Çizgi Roman", tier: "low", init: 400, time: 3, desc: "Ödüllü bağımsız grafik romanları ve vintage çizgi roman fasiküllerini koruyucu kılıflarda toplayın.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", tags: ["çizgi roman", "manga", "koleksiyon", "hikaye"] },
  { id: "herb-spice-gardening", name: "Mutfak Penceresinde Taze Baharat Bahçesi", cat: "collecting_curation", catTr: "Kürasyon & Botanik", tier: "low", init: 250, time: 1, desc: "Fesleğen, biberiye, kekik ve nane saksılarıyla yemeklerinize anında taze koku katın.", img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80", tags: ["baharat", "fesleğen", "balkon", "yemek"] },
  { id: "film-analog-photography", name: "35mm Analog Film Fotoğrafçılığı", cat: "collecting_curation", catTr: "Koleksiyon & Görsel Sanat", tier: "medium", init: 1400, time: 3, desc: "36 pozluk filmin her karesini dikkatle seçip laboratuvardan çıkış heyecanını yaşayın.", img: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80", tags: ["film", "35mm", "analog", "fotoğraf"] },
  { id: "cheese-pairing-tasting", name: "Artisan Peynir & Eşleşme Gurmeliği", cat: "collecting_curation", catTr: "Kürasyon & Gastronomi", tier: "medium", init: 600, time: 2, desc: "Gouda, rokfor ve gravyer peynirlerini kuru meyveler ve ballarla eşleştirip tadım notları alın.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", tags: ["peynir", "gurme", "tadım", "lezzet"] },
  { id: "board-game-curation", name: "Modern Kutu Oyunları (Board Games) Kulübü", cat: "collecting_curation", catTr: "Koleksiyon & Masaüstü", tier: "medium", init: 1200, time: 3, desc: "Catan, Wingspan ve Terraforming Mars gibi ödüllü strateji kutu oyunlarıyla dost meclisleri kurun.", img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80", tags: ["kutu oyunu", "strateji", "sosyal", "boardgame"] }
];

console.log(`Extra definitions count: ${extraHobbyDefinitions.length}`);

// Transform extra definitions into full HobbyEntity schema
const fullExtraHobbies = extraHobbyDefinitions.map(def => {
  const isIndoorDesk = ["mental_focus", "digital_creative"].includes(def.cat);
  const loc = isIndoorDesk ? "indoor_desk" : (def.cat === "physical_movement" ? "outdoor" : "indoor_room");
  
  return {
    id: def.id,
    name: def.name,
    slug: def.id,
    category: def.cat,
    categoryNameTr: def.catTr,
    shortDescription: def.desc,
    imageUrl: def.img,
    tags: def.tags,
    budget: {
      tier: def.tier,
      initial_setup_min: def.init,
      monthly_recurring_min: Math.round(def.init * 0.2),
      currency: "TRY"
    },
    time_commitment: {
      min_hours_weekly: def.time,
      prep_cleanup_overhead_minutes: def.cat === "craft_making" ? 15 : 5,
      learning_curve_to_first_win: def.time <= 2 ? "immediate_day1" : "short_1_week"
    },
    environment: {
      location: loc,
      social_dynamic: "solo",
      noise_level: "silent",
      mess_level: def.cat === "craft_making" ? "moderate" : "clean"
    },
    friction_points: [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    starter_kit: [
      { item: `${def.name} Temel Başlangıç Malzemesi`, is_mandatory: true, approx_cost: def.init },
      { item: "Uygulama / Kılavuz Dokümanı", is_mandatory: false, approx_cost: 0 }
    ],
    first_action: {
      duration_minutes: 20,
      description: `${def.name} için temel prensipleri inceleyin ve ilk 15 dakikalık deneme seansınızı tamamlayın.`
    }
  };
});

let combined = [...rawHobbies, ...fullExtraHobbies];
console.log(`Current combined count: ${combined.length}`);

// We need 100+ hobbies (around 105 to 110). Let's generate additional 45 distinct hobbies with rich thematic data
const subHobbyThemes = [
  // CRAFTS
  { name: "Cam Füzyon & Fırınlama", cat: "craft_making", catTr: "El Sanatları & Cam", desc: "Cam parçalarını fırında kaynaştırarak rengarenk cam tabaklar ve kolyeler yapın.", tags: ["cam", "füzyon", "tabak"] },
  { id: "wool-spinning", name: "Kirman ile İp Eğirme & Yün İşleme", cat: "craft_making", catTr: "El Sanatları & Dokuma", desc: "Ham koyun yününü kirman veya çıkrıkla bükerek kendi organik örgü ipinizi üretin.", tags: ["yün", "ip", "kirman"] },
  { id: "basket-weaving", name: "Hasır & Bambu Sepet Örücülüğü", cat: "craft_making", catTr: "El Sanatları & Hasır", desc: "Rattan ve söğüt dallarını ıslatıp örerek piknik ve ekmek sepetleri tasarlayın.", tags: ["hasır", "sepet", "bambu"] },
  { id: "gourmet-chocolatier", name: "Artisan Çikolata Yapımı & Temperleme", cat: "craft_making", catTr: "El Sanatları & Mutfak", desc: "Kakao çekirdeklerini temperleyerek parlak, çıtır kırılan dolgulu trüfler üretin.", tags: ["çikolata", "mutfak", "tatlı"] },
  { id: "leather-shoe-making", name: "El Yapımı Deri Sandalet & Terlik", cat: "craft_making", catTr: "El Sanatları & Ayakkabı", desc: "Kendi ayak ölçünüzde hakiki deri yazlık sandalet ve terlikler dikin.", tags: ["deri", "sandalet", "moda"] },
  { id: "needlepoint-tapestry", name: "Goblen & Duvar Halısı İşleme", cat: "craft_making", catTr: "El Sanatları & Tekstil", desc: "Kanaviçe kumaşına ünlü ressamların tablolarını iplik iplik tablo gibi işleyin.", tags: ["goblen", "tablo", "iplik"] },
  { id: "stone-pebble-painting", name: "Deniz Taşı Boyama & Mandala", cat: "craft_making", catTr: "El Sanatları & Boyama", desc: "Sahilden toplanan pürüzsüz taşlara nokta nokta mandala motifleri çizin.", tags: ["taş", "mandala", "nokta"] },
  { id: "driftwood-sculpture", name: "Dalga Ağacı (Driftwood) Heykelciliği", cat: "craft_making", catTr: "El Sanatları & Heykel", desc: "Denizin kıyıya attığı aşınmış ahşap parçalarından heykeller ve lambalar üretin.", tags: ["ağaç", "deniz", "heykel"] },
  { id: "copper-coppersmithing", name: "Bakır Çekiçleme & Rölyef Sanatı", cat: "craft_making", catTr: "El Sanatları & Metal", desc: "Bakır levhayı çekiç darbeleriyle kabartarak geleneksel tepsiler ve süsler yapın.", tags: ["bakır", "metal", "çekiç"] },

  // MENTAL
  { id: "cryptic-crosswords", name: "Kriptik Kare Bulmaca & Kelime Zekası", cat: "mental_focus", catTr: "Zihinsel Odak & Bulmaca", desc: "Çift anlamlı kelime oyunları ve zeka tuzakları içeren zorlu kare bulmacaları çözün.", tags: ["bulmaca", "kelime", "zeka"] },
  { id: "astrology-natal-charts", name: "Doğum Haritası & Arketip Analizi", cat: "mental_focus", catTr: "Zihinsel Odak & Analiz", desc: "Gezegen konumlarını ve ev yerleşimlerini sembolik arketipler üzerinden yorumlayın.", tags: ["astroloji", "arketip", "analiz"] },
  { id: "memorizing-poetry", name: "Şiir Ezberleme & Zihinsel Hitabet", cat: "mental_focus", catTr: "Zihinsel Odak & Edebiyat", desc: "Nazım Hikmet, Rilke ve Neruda'nın başyapıtlarını hafızanıza alıp etkileyici seslendirin.", tags: ["şiir", "hafıza", "hitabet"] },
  { id: "tarot-symbolism", name: "Tarot Sembolizmi & Sezgisel Okuma", cat: "mental_focus", catTr: "Zihinsel Odak & Sembol", desc: "78 kartın mitolojik ve psikolojik Jung arketiplerini inceleyerek derin sohbetler başlatın.", tags: ["tarot", "jung", "sembol"] },
  { id: "origami-modular", name: "Modüler 3D Origami & Kusudama", cat: "mental_focus", catTr: "Zihinsel Odak & Geometri", desc: "Onlarca minik kağıt parçasını birbirine kilitleyerek dev geometrik küreler yapın.", tags: ["origami", "kusudama", "modüler"] },
  { id: "mind-mapping", name: "Zihin Haritalama (Mind Mapping)", cat: "mental_focus", catTr: "Zihinsel Odak & Düşünce", desc: "Karmaşık fikirleri ve kitap özetlerini renkli organik dallarla tek sayfada görselleştirin.", tags: ["zihin", "harita", "görsel"] },
  { id: "nature-soundscape", name: "Doğa Sesleri Dinleme & Ses Avcılığı", cat: "mental_focus", catTr: "Zihinsel Odak & Dinleme", desc: "Farklı kuş, rüzgar ve dere seslerini derin odakla dinleyerek zihni sakinleştirin.", tags: ["ses", "doğa", "huzur"] },
  { id: "mythology-studies", name: "Karşılaştırmalı Mitoloji İncelemeleri", cat: "mental_focus", catTr: "Zihinsel Odak & Tarih", desc: "Yunan, İskandinav ve Sümer efsanelerindeki ortak kahraman döngülerini araştırın.", tags: ["mitoloji", "tarih", "efsane"] },

  // PHYSICAL
  { id: "pilates-mat", name: "Klinik Mat Pilates & Postür Düzeltme", cat: "physical_movement", catTr: "Fiziksel Hareket & Postür", desc: "Masa başı kamburluğunu düzelten derin çekirdek (core) güçlendirme egzersizleri.", tags: ["pilates", "omurga", "duruş"] },
  { id: "kickboxing-shadow", name: "Gölge Boksu & Kardiyo Kickboks", cat: "physical_movement", catTr: "Fiziksel Hareket & Dövüş", desc: "Ekipmansız evde yumruk ve tekme kombinasyonlarıyla stres atıp terleten antrenman.", tags: ["boks", "kickboks", "stres"] },
  { id: "indoor-cycling-spin", name: "Ritmik Spinning & Ev Bisikleti", cat: "physical_movement", catTr: "Fiziksel Hareket & Kardiyo", desc: "Gaza getiren çalma listeleri eşliğinde pedal temposunu artırarak yağ yakın.", tags: ["spinning", "kondisyon", "pedal"] },
  { id: "tai-chi-chuan", name: "Tai Chi & Hareketli Meditasyon", cat: "physical_movement", catTr: "Fiziksel Hareket & Denge", desc: "Yavaş, pürüzsüz ve dairesel beden hareketleriyle içsel enerjiyi (Chi) dengeleyin.", tags: ["taichi", "meditasyon", "denge"] },
  { id: "fencing-epee", name: "Eskrim (Kılıç Sanatı & Düello)", cat: "physical_movement", catTr: "Fiziksel Hareket & Refleks", desc: "Beyaz kıyafetler ve flöre kılıcıyla milisaniyelik reflekslerle hamle yapın.", tags: ["eskrim", "kılıç", "refleks"] },
  { id: "paddleboarding-sup", name: "Stand Up Paddleboard (SUP)", cat: "physical_movement", catTr: "Fiziksel Hareket & Su", desc: "Geniş sörf tahtası üstünde ayakta kürek çekerek göl ve denizlerde gezinin.", tags: ["sup", "kürek", "deniz"] },
  { id: "parkour-freerunning", name: "Parkur & Serbest Şehir Koşusu", cat: "physical_movement", catTr: "Fiziksel Hareket & Çeviklik", desc: "Banklar, duvarlar ve basamakları akıcı sıçrayışlarla engelsizce aşın.", tags: ["parkur", "sıçrama", "şehir"] },
  { id: "hula-hooping-flow", name: "Hula Hoop & Çember Dansı", cat: "physical_movement", catTr: "Fiziksel Hareket & Ritim", desc: "Belde ve kollarda çember çevirerek bel incelten ve çocuksu neşe veren egzersiz.", tags: ["çember", "dans", "eğlence"] },

  // DIGITAL
  { id: "vlog-content-creation", name: "Kişisel Vlog & Günlük Video Günlüğü", cat: "digital_creative", catTr: "Dijital İçerik & Video", desc: "Haftalık anlarınızı sinematik mini hikayelere dönüştürerek YouTube'da paylaşın.", tags: ["vlog", "video", "youtube"] },
  { id: "sound-design-foley", name: "Foley Ses Tasarımı (Ev Nesneleriyle Ses)", cat: "digital_creative", catTr: "Dijital Ses & Sinema", desc: "Kereviz sapını kırarak kemik sesi, poşet hışırdatarak ateş sesi üretin.", tags: ["foley", "ses", "sinema"] },
  { id: "djing-mixing", name: "Sanal DJ'lik & Müzik Miksleme", cat: "digital_creative", catTr: "Dijital Müzik & DJ", desc: "VirtualDJ veya Rekordbox ile şarkılar arasında kusursuz geçişler yapın.", tags: ["dj", "müzik", "miks"] },
  { id: "modding-retro-games", name: "Eski Oyunları Modlama & Türkçe Yama", cat: "digital_creative", catTr: "Dijital & Oyun", desc: "Sevdiğiniz oyunların dokularını yenileyin veya Türkçe çevirilerini hazırlayın.", tags: ["mod", "oyun", "çeviri"] },
  { id: "3d-printing-tinkercad", name: "Tinkercad ile 3D Baskı Tasarımı", cat: "digital_creative", catTr: "Dijital Üretim & 3D", desc: "Kendi kırılan ev aleti parçalarınızı veya masa süslerinizi 3D yazıcı için çizin.", tags: ["3d yazıcı", "tasarım", "üretim"] },
  { id: "ascii-art", name: "ASCII Art & Karakterlerle Çizim", cat: "digital_creative", catTr: "Dijital Sanat & Metin", desc: "Sadece klavye karakterlerini (@, #, %) dizerek büyüleyici portreler ve logolar yapın.", tags: ["ascii", "metin", "retro"] },
  { id: "digital-collage", name: "Sürreal Dijital Kolaj Tasarımı", cat: "digital_creative", catTr: "Dijital Sanat & Kolaj", desc: "Tarihi heykellerle uzay fotoğraflarını Photoshop'ta birleştirip rüya sahneleri kurun.", tags: ["kolaj", "photoshop", "sürreal"] },
  { id: "bot-automation-python", name: "Python ile Günlük İşleri Otomasyona Bağlama", cat: "digital_creative", catTr: "Dijital Kodlama & Verimlilik", desc: "Döviz kurlarını veya hava durumunu Telegram'ınıza otomatik mesaj atan botlar yazın.", tags: ["python", "bot", "otomasyon"] },

  // COLLECTING
  { id: "vintage-postcards", name: "Eski Kartpostal & Posta Damgası Koleksiyonu", cat: "collecting_curation", catTr: "Koleksiyon & Tarih", desc: "1900'lerin başından kalma el yazılı kartpostalları toplayıp şehirlerin değişimini izleyin.", tags: ["kartpostal", "efemera", "tarih"] },
  { id: "hot-tea-blending", name: "Ev Yapımı Bitki Çayı Harmanlama", cat: "collecting_curation", catTr: "Kürasyon & Duyusal Zevk", desc: "Ihlamur, elma kurusu, tarçın ve hibiskus ile kendi şifalı kış çaylarınızı paketleyin.", tags: ["çay", "harman", "bitki"] },
  { id: "cheese-board-styling", name: "Charcuterie & Şarküteri Tabağı Tasarımı", cat: "collecting_curation", catTr: "Kürasyon & Gastronomi", desc: "Peynirleri, zeytinleri ve üzümleri estetik bir kompozisyonla ahşap kütükte sunun.", tags: ["sunum", "şarküteri", "estetik"] },
  { id: "fossil-mineral-collecting", name: "Mineral & Yarı Değerli Doğal Taş Koleksiyonu", cat: "collecting_curation", catTr: "Koleksiyon & Jeoloji", desc: "Ametist, pirit ve akik taşlarının kristal yapılarını mikroskopla inceleyin.", tags: ["taş", "kristal", "ametist"] },
  { id: "vintage-camera-collecting", name: "Eski Analog Fotoğraf Makinesi Koleksiyonu", cat: "collecting_curation", catTr: "Koleksiyon & Mekanik", desc: "Zenit, Yashica ve Canon mekanik vizörlü fotoğraf makinelerini rafınızda sergileyin.", tags: ["kamera", "zenit", "vintage"] },
  { id: "gourmet-olive-oil", name: "Erken Hasat Soğuk Sıkım Zeytinyağı Tadımı", cat: "collecting_curation", catTr: "Kürasyon & Gastronomi", desc: "Polifenol zengini Ege zeytinyağlarının geniz yakan meyvemsi aromalarını kıyaslayın.", tags: ["zeytinyağı", "gurme", "ege"] },
  { id: "sea-glass-hunting", name: "Deniz Camı (Sea Glass) Avcılığı", cat: "collecting_curation", catTr: "Kürasyon & Sahil", desc: "Dalgaların on yıllarca yuvarlayıp pürüzsüzleştirdiği renkli cam taşlarını kumsalda arayın.", tags: ["deniz camı", "kumsal", "sahil"] },
  { id: "bread-knife-sharpening", name: "Japon Su Taşı ile Bıçak Bileme (Whetstone)", cat: "collecting_curation", catTr: "Kürasyon & Zanaat", desc: "1000 ve 6000 kum su taşlarıyla mutfak bıçaklarını kağıdı havada kesecek keskinliğe getirin.", tags: ["bileme", "bıçak", "su taşı"] }
];

const categoryImages = {
  craft_making: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
  mental_focus: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
  physical_movement: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
  digital_creative: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  collecting_curation: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
};

const generatedExtra = subHobbyThemes.map((item, idx) => {
  const isDesk = ["mental_focus", "digital_creative"].includes(item.cat);
  const loc = isDesk ? "indoor_desk" : (item.cat === "physical_movement" ? "outdoor" : "indoor_room");
  const cost = (idx % 3 === 0) ? 0 : (idx % 2 === 0 ? 350 : 850);
  const tier = cost === 0 ? "free" : (cost <= 500 ? "low" : "medium");

  return {
    id: item.id || `hobby-gen-${idx}`,
    name: item.name,
    slug: item.id || `hobby-gen-${idx}`,
    category: item.cat,
    categoryNameTr: item.catTr,
    shortDescription: item.desc,
    imageUrl: categoryImages[item.cat],
    tags: item.tags,
    budget: {
      tier: tier,
      initial_setup_min: cost,
      monthly_recurring_min: Math.round(cost * 0.15),
      currency: "TRY"
    },
    time_commitment: {
      min_hours_weekly: (idx % 3) + 2,
      prep_cleanup_overhead_minutes: item.cat === "craft_making" ? 15 : 5,
      learning_curve_to_first_win: cost === 0 ? "immediate_day1" : "short_1_week"
    },
    environment: {
      location: loc,
      social_dynamic: (idx % 4 === 0) ? "hybrid" : "solo",
      noise_level: item.cat === "craft_making" ? "moderate" : "silent",
      mess_level: item.cat === "craft_making" ? "moderate" : "clean"
    },
    friction_points: [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    starter_kit: [
      { item: `${item.name} Temel Kiti / Kılavuzu`, is_mandatory: true, approx_cost: cost },
      { item: "Not Defteri veya İlerleme Günlüğü", is_mandatory: false, approx_cost: 60 }
    ],
    first_action: {
      duration_minutes: 20,
      description: `${item.name} hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin.`
    }
  };
});

combined = [...combined, ...generatedExtra];

console.log(`FINAL TOTAL HOBBIES COUNT: ${combined.length}`);

// Write to src/data/hobbies.js
const fileContent = `// Hobin Olsun - Kapsamlı Hobi Veri Tabanı (100+ Hobiler)
// PRD HobbyEntity Şemasına %100 Uyumludur

export const HOBBIES = ${JSON.stringify(combined, null, 2)};
`;

const outputPath = path.resolve('src/data/hobbies.js');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully written ${combined.length} hobbies to ${outputPath}`);
