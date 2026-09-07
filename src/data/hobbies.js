// Hobin Olsun - Kapsamlı Hobi Veri Tabanı (147 Detaylı Hobi)
// Her hobi için özgün açıklamalar, starter kit, ilk aksiyon ve görsel

export const HOBBIES = [
  {
    "id": "pottery-craft",
    "name": "Hobi Seramik & Çömlekçilik",
    "slug": "hobi-seramik",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Üretim",
    "shortDescription": "Parmaklarınızın arasında şekillenen ıslak kille fincan, tabak ve organik heykeller üreterek günün tüm stresini toprağa akıtın.",
    "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kil",
      "sanat",
      "meditatif",
      "üretim",
      "dokunsal"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1200,
      "monthly_recurring_min": 450,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 30,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "dust_chemical_heavy"
    },
    "friction_points": [
      "Hava ile kuruyan kil çatlayabilir veya seramik fırını (fırınlama atölyesi) bulmak gerekebilir.",
      "Çamur ve toz nedeniyle temizlik süresi 25-30 dakikayı bulabilir."
    ],
    "starter_kit": [
      {
        "item": "Hava ile Kuruyan Beyaz Seramik Kili (1.5 kg)",
        "is_mandatory": true,
        "approx_cost": 180
      },
      {
        "item": "8 Parça Ahşap & Metal Şekillendirme Ebeşuarı",
        "is_mandatory": true,
        "approx_cost": 240
      },
      {
        "item": "Silikon Çalışma Matı & Doğal Deniz Süngeri",
        "is_mandatory": true,
        "approx_cost": 160
      },
      {
        "item": "Akrilik Boya Seti & Su Bazlı Parlak Sır/Vernik",
        "is_mandatory": true,
        "approx_cost": 270
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Avucunuza mandalina büyüklüğünde bir kil topu alın; başparmağınızla ortasına bastırıp kenarları eşitçe sıkıştırarak (pinch pot tekniği) ilk takı/ataş çanağınızı şekillendirin."
    },
    "highlightBadges": [
      "🖐️ Dokunsal Terapi",
      "☕ Kendi Fincanını Yap"
    ]
  },
  {
    "id": "leather-crafting",
    "name": "El Yapımı Deri Zanaatı",
    "slug": "deri-zanaati",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Üretim",
    "shortDescription": "Hakiki bitkisel tabaklanmış deriyi kesip çift iğne eyer dikişiyle birleştirerek ömür boyu eskimeyecek cüzdan ve kartlıklar dikin.",
    "imageUrl": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "deri",
      "dikiş",
      "zanaat",
      "kalıcı",
      "aksesuar"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1100,
      "monthly_recurring_min": 300,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Deri delme zımbalarını tokmakla vururken çıkan vuruş sesi (altına kauçuk mat şart).",
      "Keskin falçata/bıçak kullanımı dikkat ister."
    ],
    "starter_kit": [
      {
        "item": "Bitkisel Tabaklanmış Dana Derisi (Vaketa A4)",
        "is_mandatory": true,
        "approx_cost": 290
      },
      {
        "item": "4mm 4'lü Fransız Tipi Delik Zımbası (Pricking Iron)",
        "is_mandatory": true,
        "approx_cost": 320
      },
      {
        "item": "Balmumu Kaplı 0.8mm İplik ve 2 Kör İğne",
        "is_mandatory": true,
        "approx_cost": 130
      },
      {
        "item": "A3 Kesim Matı ve Polietilen Tokmak",
        "is_mandatory": true,
        "approx_cost": 240
      }
    ],
    "first_action": {
      "duration_minutes": 30,
      "description": "A4 derinizden 6.5x10 cm boyutunda iki parça kesin; kenarlardan 4 mm içeriden zımbayla delik hizalayıp çift iğne eyer dikişiyle ilk minimalist kartlığınızı dikin."
    },
    "highlightBadges": [
      "🕰️ Ömürlük Ürün",
      "🧵 Geleneksel Dikiş"
    ]
  },
  {
    "id": "sourdough-baking",
    "name": "Artisan Ekşi Mayalı Ekmekçilik",
    "slug": "eksi-mayali-ekmek",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Mutfak",
    "shortDescription": "Yalnızca un, su ve yabani fermantasyonun sabrıyla dışı çıtır kabuklu, içi gözenekli ve mis gibi fırın ekmekleri pişirin.",
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ekmek",
      "mutfak",
      "lezzet",
      "fermantasyon",
      "tatmin"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 650,
      "monthly_recurring_min": 250,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Mayayı canlı tutmak için düzenli besleme disiplini.",
      "İlk denemelerde hamurun ele yapışması ve form tutturma zorluğu."
    ],
    "starter_kit": [
      {
        "item": "Aktif Canlı Ekşi Maya Başlangıç Kavanozu",
        "is_mandatory": true,
        "approx_cost": 70
      },
      {
        "item": "Banneton Hasır Mayalama Sepeti (22 cm)",
        "is_mandatory": true,
        "approx_cost": 220
      },
      {
        "item": "Jiletli Hamur Çizici (Lame) ve Hamur Kazıyıcı Spatula",
        "is_mandatory": true,
        "approx_cost": 140
      },
      {
        "item": "Taş Değirmen Yüksek Proteinli Ekmeklik Un (2 kg)",
        "is_mandatory": true,
        "approx_cost": 90
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Kavanozdaki mayanıza 40g un ve 40g ılık su ekleyip karıştırın; kavanoza lastik takarak 4 saat içindeki iki katına kabarma ve gözenek aktivitesini izleyin."
    },
    "highlightBadges": [
      "🍞 Doğal Fermantasyon",
      "😋 Gurme Lezzet"
    ]
  },
  {
    "id": "wood-carving",
    "name": "Ahşap Oyma & Kaşık Yapımı (Whittling)",
    "slug": "ahsap-oyma",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Üretim",
    "shortDescription": "Bir parça ıhlamur ağacını el bıçağıyla yontarak kendi organik kaşık veya figürlerinizi üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ahşap",
      "yontma",
      "kaşık",
      "doğal",
      "odak"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 750,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Ahşap talaşları döküldüğü için çalışma örtüsü gerekir.",
      "Kesik koruyucu eldiven takmak şarttır."
    ],
    "starter_kit": [
      {
        "item": "Whittling Başlangıç Bıçağı (BeaverCraft)",
        "is_mandatory": true,
        "approx_cost": 390
      },
      {
        "item": "Ihlamur Ağacı Oyma Blokları (3 adet)",
        "is_mandatory": true,
        "approx_cost": 210
      },
      {
        "item": "Seviye 5 Kesilmez Güvenlik Eldiveni",
        "is_mandatory": true,
        "approx_cost": 150
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Eldiveni giyip ıhlamur bloğunun köşelerine 'push cut' (itme kesimi) yaparak ilk oval kenar formunu verin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "candle-making",
    "name": "Aromatik Soya Mum Tasarımı",
    "slug": "soya-mum-yapimi",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Üretim",
    "shortDescription": "Doğal soya vaksı ve lavanta/vanilya esanslarıyla evinizi spa atmosferine dönüştürecek mumlar dökün.",
    "imageUrl": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mum",
      "koku",
      "soya",
      "estetik",
      "kolay"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 550,
      "monthly_recurring_min": 200,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Vaks eritilirken ocak ısısına dikkat etmek gerekir.",
      "Döküm sonrası yüzeyde çukurlaşma olmaması için doğru soğutma gerekir."
    ],
    "starter_kit": [
      {
        "item": "1 kg Doğal Soya Vaksı",
        "is_mandatory": true,
        "approx_cost": 220
      },
      {
        "item": "Ahşap & Pamuk Fitil Seti (20 adet)",
        "is_mandatory": true,
        "approx_cost": 90
      },
      {
        "item": "Esansiyel Yağ (Lavanta/Vanilya)",
        "is_mandatory": true,
        "approx_cost": 130
      },
      {
        "item": "2 Adet Amber Cam Kavanoz",
        "is_mandatory": true,
        "approx_cost": 110
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "150g vaksı benmari usulü eritin, 65°C'de 10 damla esans damlatıp kavanoz ortasındaki fitilin etrafına dökün."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "soap-making",
    "name": "Doğal Soğuk Sıkım Sabun Yapımı",
    "slug": "dogal-sabun-yapimi",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Üretim",
    "shortDescription": "Zeytinyağı, hindistan cevizi yağı ve kurutulmuş bitkilerle kimyasalsız artisan sabunlar üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1607006314175-9610f7fa0812?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sabun",
      "doğal",
      "kimya",
      "hediye",
      "cilt"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 250,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "dust_chemical_heavy"
    },
    "friction_points": [
      "Kostik soda (NaOH) çözülürken koruyucu gözlük ve eldiven takılması zorunludur.",
      "Sabunların kürlenme süresi 4 haftayı bulur."
    ],
    "starter_kit": [
      {
        "item": "Sodyum Hidroksit (Kostik) 500g",
        "is_mandatory": true,
        "approx_cost": 95
      },
      {
        "item": "Silikon Sabun Kalıbı ve Ahşap Kutu",
        "is_mandatory": true,
        "approx_cost": 290
      },
      {
        "item": "Koruyucu Gözlük & Nitril Eldiven",
        "is_mandatory": true,
        "approx_cost": 140
      },
      {
        "item": "Zeytinyağı & Hindistan Cevizi Yağı",
        "is_mandatory": true,
        "approx_cost": 325
      }
    ],
    "first_action": {
      "duration_minutes": 30,
      "description": "Eldiven ve gözlüğü takıp tarttığınız kostik suyu yağa ekleyin ve el blenderıyla 'iz' (puding kıvamı) alana kadar karıştırın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "macrame-weaving",
    "name": "Bohem Makrome & Duvar Süsleri",
    "slug": "bohem-makrome",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tasarım",
    "shortDescription": "Özel ipleri düğümleme teknikleriyle modern saksılıklar, duvar panoları ve çantalar tasarlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "makrome",
      "ip",
      "düğüm",
      "bohem",
      "dekorasyon"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 450,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Düğümleri eşit gerginlikte çekmek için başlangıçta biraz pratik gerekir.",
      "Uzun ipleri tararken uçuşan pamuk lifleri."
    ],
    "starter_kit": [
      {
        "item": "3mm Taranabilir Pamuk Makrome İpi (250m)",
        "is_mandatory": true,
        "approx_cost": 210
      },
      {
        "item": "Ahşap Halka ve Askı Çubuğu (40 cm)",
        "is_mandatory": true,
        "approx_cost": 140
      },
      {
        "item": "Metal İp Tarama Tarağı",
        "is_mandatory": true,
        "approx_cost": 100
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Ahşap çubuğa 4 adet ip takarak 'kare düğüm' (square knot) serisini tamamlayıp ilk mini bardak altlığınızı örün."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "origami-folding",
    "name": "Japon Kağıt Katlama Sanatı (Origami)",
    "slug": "origami-sanati",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Geometri",
    "shortDescription": "Sadece tek bir kare kağıdı katlayarak turna kuşları, ejderhalar ve geometrik heykeller yaratın.",
    "imageUrl": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kağıt",
      "japon",
      "geometri",
      "ucuz",
      "huzur"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Karmaşık modellerde adım kaçırıldığında kağıdın buruşması.",
      "Milimetrik katlama hassasiyeti istemesi."
    ],
    "starter_kit": [
      {
        "item": "Herhangi Bir A4 veya Kare Not Kağıdı",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "100 Yaprak Çift Taraflı Origami Kağıdı Seti",
        "is_mandatory": false,
        "approx_cost": 120
      }
    ],
    "first_action": {
      "duration_minutes": 10,
      "description": "Bir kağıdı kare kesin ve geleneksel 'Barış Turnası' (Orizuru) katlama adımlarını uygulayarak ilk kanat çırpan kuşunuzu yapın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "terrarium-building",
    "name": "Kapalı Cam Teraryum & Mini Ekosistem",
    "slug": "cam-teraryum",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Botanik",
    "shortDescription": "Mantar kapaklı kavanozda aktif karbon ve canlı yastık yosunlarıyla kendi kendine yeten yeşil bir dünya kurun.",
    "imageUrl": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bitki",
      "cam",
      "ekosistem",
      "yosun",
      "büyüleyici"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 680,
      "monthly_recurring_min": 80,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Fazla su verilirse cam içinde küf oluşma riski.",
      "Doğru yosun türü ve drenaj taşlarını seçme ihtiyacı."
    ],
    "starter_kit": [
      {
        "item": "Kapalı Cam Teraryum & Mini Ekosistem Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 490
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kapalı Cam Teraryum & Mini Ekosistem için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🌱 Kendi Yağmurunu Yapar",
      "🟢 Masaüstü Orman"
    ]
  },
  {
    "id": "linocut-printmaking",
    "name": "Linolyum Baskı Sanatı (Linocut)",
    "slug": "linolyum-baski",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Grafik",
    "shortDescription": "Yumuşak kauçuk plakaları oyarak kendi desenlerinizi çıkarın; merdane ve mürekkeple bez çantalara, tişörtlere ve tablolara basın.",
    "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "baskı",
      "oyma",
      "grafik",
      "tasarım",
      "retro"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 200,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Baskı mürekkebini cam tabladan ve merdaneden temizleme süreci.",
      "Oyma bıçağını kendinize doğru çekmemeniz gerekir."
    ],
    "starter_kit": [
      {
        "item": "5 Uçlu Linolyum Oyma Bıçak Seti",
        "is_mandatory": true,
        "approx_cost": 210
      },
      {
        "item": "A5 Yumuşak Lino / Soft-Cut Baskı Plakası",
        "is_mandatory": true,
        "approx_cost": 110
      },
      {
        "item": "Kauçuk Baskı Merdanesi (Brayer)",
        "is_mandatory": true,
        "approx_cost": 150
      },
      {
        "item": "Su Bazlı Siyah Blok Baskı Mürekkebi (100ml)",
        "is_mandatory": true,
        "approx_cost": 110
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Plakaya kurşun kalemle stilize bir monstera yaprağı çizin; V uçlu bıçakla kenarları kazıyıp merdaneyle mürekkep sürerek kağıda ilk temiz baskınızı alın."
    },
    "highlightBadges": [
      "🖼️ Çoğaltılabilir Sanat",
      "🎨 Kendi Tişörtünü Bas"
    ]
  },
  {
    "id": "amigurumi-crochet",
    "name": "Amigurumi & Tığ İşi Sevimli Figürler",
    "slug": "amigurumi-tig-isi",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Örgü",
    "shortDescription": "Tığ ve pamuk iplerle sevimli ayıcıklar, kaktüsler ve anahtarlıklar örerek çantanıza takın veya sevdiklerinize hediye edin.",
    "imageUrl": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "örgü",
      "amigurumi",
      "tığ",
      "oyuncak",
      "terapi"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 380,
      "monthly_recurring_min": 120,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Sihirli halka (magic ring) ve ilmek saymayı kavramak ilk günlerde kafa karıştırabilir."
    ],
    "starter_kit": [
      {
        "item": "Gazzal Baby Cotton İp (2 Farklı Renk)",
        "is_mandatory": true,
        "approx_cost": 110
      },
      {
        "item": "2.5 mm Ergonomik Silikon Saplı Tığ",
        "is_mandatory": true,
        "approx_cost": 85
      },
      {
        "item": "Güvenlik Kilitli Göz Seti & Boncuk Elyaf (100g)",
        "is_mandatory": true,
        "approx_cost": 125
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Sihirli halka (magic ring) oluşturup içine 6 sık iğne yapın ve ikinci sırada her ilmeğe çift batarak 12 ilmeklik minik bir topun tabanını örün."
    },
    "highlightBadges": [
      "🧸 Sevimli Sonuçlar",
      "🛋️ Koltukta Yapılabilir"
    ]
  },
  {
    "id": "resin-jewelry",
    "name": "Epoksi Reçine & Kurutulmuş Çiçek Takıları",
    "slug": "epoksi-recine-taki",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Takı",
    "shortDescription": "Kristal şeffaflığındaki reçine içine gerçek çiçekler ve parıltılar hapsederek kolye uçları ve yüzükler üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "reçine",
      "takı",
      "kristal",
      "çiçek",
      "parıltı"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 890,
      "monthly_recurring_min": 250,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "dust_chemical_heavy"
    },
    "friction_points": [
      "Hava kabarcıklarını çakmak veya ısıyla patlatmak gerekir.",
      "Reçine kokusuna karşı iyi havalandırılan oda gerekir."
    ],
    "starter_kit": [
      {
        "item": "Ultra Berrak 2:1 Epoksi Reçine Kiti (375g)",
        "is_mandatory": true,
        "approx_cost": 380
      },
      {
        "item": "Silikon Takı ve Kolye Ucu Kalıpları Seti",
        "is_mandatory": true,
        "approx_cost": 260
      },
      {
        "item": "Kurutulmuş Minik Kır Çiçekleri Paketi",
        "is_mandatory": true,
        "approx_cost": 140
      },
      {
        "item": "Ölçü Kapları ve Karıştırma Çubukları",
        "is_mandatory": true,
        "approx_cost": 110
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "A ve B bileşenlerini hassasça karıştırın, kalıba yarısına kadar döküp cımbızla minik bir papatya batırın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "embroidery-hoop",
    "name": "Modern Kasnak Nakışı & Kanaviçe",
    "slug": "modern-kasnak-nakisi",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tekstil",
    "shortDescription": "Ahşap kasnak arasına gerilmiş keten kumaşa renkli ipliklerle botanik dallar, yapraklar ve modern sözler işleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "nakış",
      "kasnak",
      "iplik",
      "terapi",
      "detay"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 360,
      "monthly_recurring_min": 90,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "İğneye ip geçirirken ve düğüm atarken göz yorulabilir (iyi ışık önerilir)."
    ],
    "starter_kit": [
      {
        "item": "20cm Vidalı Bambu Kasnak",
        "is_mandatory": true,
        "approx_cost": 90
      },
      {
        "item": "10 Renkli Muline Nakış İpliği Seti",
        "is_mandatory": true,
        "approx_cost": 110
      },
      {
        "item": "Keten Nakış Kumaşı & Sivri İğne Seti",
        "is_mandatory": true,
        "approx_cost": 80
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kumaşı kasnağa gerin; kurşun kalemle bir papatya çizin ve yaprakları 'balıksırtı' (satin stitch) vuruşuyla doldurarak ilk çiçeğinizi bitirin."
    },
    "highlightBadges": [
      "🧘 Meditatif Dikiş",
      "🖼️ Duvara Asılabilir"
    ]
  },
  {
    "id": "miniature-painting",
    "name": "Minyatür Figür & Masaüstü Boyama",
    "slug": "minyatur-boyama",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Boyama",
    "shortDescription": "Dungeons & Dragons, Warhammer veya tarihi karakterlerin 3 santimlik minyatürlerine gölge ve ışık canı verin.",
    "imageUrl": "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "figür",
      "minyatür",
      "boyama",
      "odak",
      "fantastik"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 950,
      "monthly_recurring_min": 200,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Fırça kontrolü için el titremesini kontrol altına almak gerekir (iki bileği masaya sabitleme kuralı)."
    ],
    "starter_kit": [
      {
        "item": "Army Painter veya Vallejo 8'li Akrilik Seti",
        "is_mandatory": true,
        "approx_cost": 520
      },
      {
        "item": "Detay Fırçaları (000 ve 0 Numara Kolinsky)",
        "is_mandatory": true,
        "approx_cost": 260
      },
      {
        "item": "Ham Reçine / Plastik Karakter Figürü",
        "is_mandatory": true,
        "approx_cost": 170
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Figüre gri astar atın, ıslak paletinizde fırçanın ucuna çok az boya alıp pelerin kısmına temel renk katmanını sürün."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "mosaic-art",
    "name": "Cam ve Seramik Mozaik Sanatı",
    "slug": "cam-mozaik-sanati",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tasarım",
    "shortDescription": "Renkli cam ve seramik parçalarını kırıp birleştirerek aynalar, tepsiler ve duvar panoları süsleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mozaik",
      "cam",
      "renk",
      "yapboz",
      "zanaat"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 780,
      "monthly_recurring_min": 200,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Cam kırarken gözlük takılması ve dökülen minik cam parçacıklarının süpürülmesi gerekir."
    ],
    "starter_kit": [
      {
        "item": "Karışık Renkli Vitray Mozaik Taşları (500g)",
        "is_mandatory": true,
        "approx_cost": 240
      },
      {
        "item": "Çift Tekerlekli Mozaik Kırma Pensesi",
        "is_mandatory": true,
        "approx_cost": 320
      },
      {
        "item": "Mozaik Tutkalı ve Beyaz Derz Dolgusu",
        "is_mandatory": true,
        "approx_cost": 220
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Ahşap bir bardak altlığına mozaik taşlarını penseyle ikiye bölerek çiçek deseni halinde yapıştırın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "quilling-paper",
    "name": "Quilling (Kağıt Telkari Sanatı)",
    "slug": "quilling-kagit-telkari",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tasarım",
    "shortDescription": "İnce renkli kağıt şeritlerini kıvırıp şekillendirerek 3 boyutlu büyüleyici tablolar ve tebrik kartları yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "quilling",
      "kağıt",
      "kıvırma",
      "detay",
      "ucuz"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 290,
      "monthly_recurring_min": 60,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Çok minik kağıt rulolarıyla uğraşıldığından yapıştırıcıyı azar azar sürmek önemlidir."
    ],
    "starter_kit": [
      {
        "item": "Quilling Kıvırma Kalemi ve Şablon Cetveli",
        "is_mandatory": true,
        "approx_cost": 110
      },
      {
        "item": "5mm Renkli Quilling Kağıt Şeritleri (500 Adet)",
        "is_mandatory": true,
        "approx_cost": 120
      },
      {
        "item": "İnce Uçlu Tutkal Aplikatörü",
        "is_mandatory": true,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Şeridi kalemin ucuna geçirip rulo sarın, şablonda genişletip ucunu yapıştırarak bir damla yaprak şekli oluşturun."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "tie-dye-textile",
    "name": "Batik & Kumaş Boyama (Tie-Dye)",
    "slug": "batik-kumas-boyama",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Moda",
    "shortDescription": "Lastiklerle bağladığınız tişört ve kumaşları rengarenk organik boyalarla spiral ve gökkuşağı desenlerine kavuşturun.",
    "imageUrl": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "batik",
      "kumaş",
      "tişört",
      "renkli",
      "eğlenceli"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 390,
      "monthly_recurring_min": 120,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "dust_chemical_heavy"
    },
    "friction_points": [
      "Boya damlamasına karşı lavaboda veya leğende yapılmalı ve eldiven giyilmelidir."
    ],
    "starter_kit": [
      {
        "item": "3 Renkli Kumaş Boyası Başlangıç Şişeleri",
        "is_mandatory": true,
        "approx_cost": 210
      },
      {
        "item": "100% Pamuklu Beyaz Tişört",
        "is_mandatory": true,
        "approx_cost": 140
      },
      {
        "item": "Paket Lastiği & Koruyucu Eldiven Seti",
        "is_mandatory": true,
        "approx_cost": 40
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Tişörtün tam ortasından tutup spiral şeklinde sarın, 3 lastikle pizza dilimi gibi bağlayıp her dilime farklı boya sıkın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "pressed-flower-art",
    "name": "Kurutulmuş Bitki & Herbaryum Sanatı",
    "slug": "kurutulmus-bitki-herbaryum",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Botanik",
    "shortDescription": "Parklardan ve doğadan topladığınız yaprak ve çiçekleri presleyip cam çerçevelerde botanik tablolara dönüştürün.",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çiçek",
      "pres",
      "botanik",
      "tablo",
      "huzur"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Çiçeklerin kitap arasında rengini kaybetmeden kuruması için 1-2 hafta beklenmesi gerekir."
    ],
    "starter_kit": [
      {
        "item": "Kalın Ansiklopedi / Kitap ve Yağlı Kağıt",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Çift Camlı İki Yüzü Şeffaf Asma Çerçeve",
        "is_mandatory": false,
        "approx_cost": 190
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Yürüyüşte bulduğunuz yabani yonca ve minik sarı çiçeği iki yağlı kağıt arasına yerleştirip ağır bir kitabın arasına bastırın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "polymer-clay",
    "name": "Polimer Kil ile Minyatür & Takı",
    "slug": "polimer-kil-taki",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Modelleme",
    "shortDescription": "Normal ev fırınında 110 derecede pişen renkli killerle küpeler, broşlar ve sevimli biblolar yaratın.",
    "imageUrl": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "polimer kil",
      "fimo",
      "küpe",
      "renkli",
      "kolay"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 480,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Fırın sıcaklığını aşarsanız kil yanabilir; fırın derecesini termometreyle kontrol etmek önerilir."
    ],
    "starter_kit": [
      {
        "item": "Fimo / Sculpey 6 Renk Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 290
      },
      {
        "item": "Kil Açma Akrilik Silindiri & Maket Bıçağı",
        "is_mandatory": true,
        "approx_cost": 110
      },
      {
        "item": "Antialerjik Küpe Klipsleri (10 çift)",
        "is_mandatory": true,
        "approx_cost": 80
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Beyaz ve turuncu kili mermer deseni alana kadar burup silindirle açın, küçük bir daire kesip küpe deliği açın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "needle-felting",
    "name": "İğneleme Keçe Sanatı (Needle Felting)",
    "slug": "igne-kece-sanati",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tekstil",
    "shortDescription": "Yün liflerini özel tırtıklı iğneyle batırıp sıkıştırarak sevimli 3D hayvanlar ve süsler heykeltraş gibi şekillendirin.",
    "imageUrl": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "keçe",
      "yün",
      "iğneleme",
      "heykelsi",
      "sevimli"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 360,
      "monthly_recurring_min": 90,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Hızlı yaparken parmağa iğne batırma riski (deri parmaklık şarttır)."
    ],
    "starter_kit": [
      {
        "item": "Doğal Merinos Yün Paketi (8 Renk)",
        "is_mandatory": true,
        "approx_cost": 180
      },
      {
        "item": "3'lü Keçe İğnesi ve Keçe Çalışma Süngeri",
        "is_mandatory": true,
        "approx_cost": 110
      },
      {
        "item": "Deri Parmak Koruyucu",
        "is_mandatory": true,
        "approx_cost": 70
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Bir avuç sarı yünü rulo yapıp süngere koyun ve iğneyle defalarca batırarak sert, yuvarlak bir mini limon topu oluşturun."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "chess-strategy",
    "name": "Stratejik Satranç & Taktik Çözüm",
    "slug": "satranc-strateji",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Strateji",
    "shortDescription": "Açmazlar, çatal hamleleri ve feda kombinasyonlarıyla zihninizi derin odaklanma ve ileri görüşlülük arenasında bileyin.",
    "imageUrl": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "zihin",
      "satranç",
      "strateji",
      "ücretsiz",
      "derinlik"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Arka arkaya maç kaybedildiğinde duyulan geçici moral bozukluğu."
    ],
    "starter_kit": [
      {
        "item": "Lichess.org Ücretsiz Hesap & Mobil Uygulama",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Standart Ağırlıklı Turnuva Satranç Takımı",
        "is_mandatory": false,
        "approx_cost": 380
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Lichess'te 'Puzzles' sekmesini açın ve reytinginize göre gelen 5 adet taktik bulmacayı hamle yapmadan önce kafanızda hesaplayarak çözün."
    },
    "highlightBadges": [
      "🧠 Yüksek Zeka",
      "🆓 Tamamen Ücretsiz"
    ]
  },
  {
    "id": "bonsai-cultivation",
    "name": "Bonsai & Minyatür Ağaç Sanatı",
    "slug": "bonsai-sanati",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Doğa",
    "shortDescription": "Yaşayan bir ağacı budayarak, telle bükerek ve köklerini terbiye ederek sabır ve doğa estetiğini masanızda yaşayın.",
    "imageUrl": "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bitki",
      "sabır",
      "zen",
      "doğa",
      "estetik"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 950,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Sulama dengesini kaçırıp yaprak döktürme riski.",
      "Hızlı büyüme bekleyenler için sabır gerektirmesi."
    ],
    "starter_kit": [
      {
        "item": "Ficus Ginseng veya Zelkova Başlangıç Bonsaisi",
        "is_mandatory": true,
        "approx_cost": 490
      },
      {
        "item": "Geleneksel Karbon Çelik Budama Makası",
        "is_mandatory": true,
        "approx_cost": 180
      },
      {
        "item": "Bonsai Toprağı & Ahşap Nem Çubuğu",
        "is_mandatory": true,
        "approx_cost": 80
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Ağacınızın silüetini göz hizasına getirin; ana gövde çizgisini bozan dışarıya doğru uzamış iki fazla dalı 45 derece açıyla budayın."
    },
    "highlightBadges": [
      "🌱 Yaşayan Heykel",
      "🧘 Zen Dinginliği"
    ]
  },
  {
    "id": "rubiks-speedcubing",
    "name": "Speedcubing & Rubik Küp Çözümü",
    "slug": "rubik-kupu-speedcubing",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Hız",
    "shortDescription": "Algoritmaları parmak kası hafızasına kaydederek 3x3 zeka küpünü 60 saniyenin altında çözme heyecanını yakalayın.",
    "imageUrl": "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "küp",
      "rubik",
      "hız",
      "algoritma",
      "refleks"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 280,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "İlk katmanı geçerken algoritma sırasını unutma; sabırla 3-4 gün tekrar gerekir."
    ],
    "starter_kit": [
      {
        "item": "MoYu RS3M 2020 Manyetik Hız Küpü",
        "is_mandatory": true,
        "approx_cost": 260
      },
      {
        "item": "csTimer.net Ücretsiz Çözüm Kronometresi",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Beyaz merkezli yüzde 4 kenar parçasını renkleriyle eşleştirerek 'Beyaz Artı'yı (White Cross) kurmayı öğrenin."
    },
    "highlightBadges": [
      "⚡ Refleks & Parmak Hızı",
      "🧩 Bağımlılık Yapıcı"
    ]
  },
  {
    "id": "calligraphy-lettering",
    "name": "Geleneksel Kaligrafi & Yazı Sanatı",
    "slug": "kaligrafi-yazi-sanati",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Estetik",
    "shortDescription": "Divit ucu ve koyu siyah mürekkeple harflerin ritmini, kavislerini ve nefesini sayfalara bir şelale gibi akıtın.",
    "imageUrl": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yazı",
      "kaligrafi",
      "mürekkep",
      "meditatif",
      "harf"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 420,
      "monthly_recurring_min": 80,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Divit ucuna mürekkep fazlalığı geldiğinde kağıda damlama riski."
    ],
    "starter_kit": [
      {
        "item": "Eğik / Düz Kaligrafi Uç Sapı & 3 Çelik Uç",
        "is_mandatory": true,
        "approx_cost": 160
      },
      {
        "item": "Winsor & Newton Siyah Çizim Mürekkebi (30ml)",
        "is_mandatory": true,
        "approx_cost": 120
      },
      {
        "item": "Pürüzsüz 90g Noktalı Kaligrafi Defteri",
        "is_mandatory": true,
        "approx_cost": 80
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Ucu mürekkebe batırıp eğim verin; aşağı çekerken baskı uygulayıp kalın, yukarı iterken baskıyı kesip kılcal ince çizgilerle 2 sayfa 'temel vuruş' çekin."
    },
    "highlightBadges": [
      "🖋️ Klasik Zarafet",
      "🧘 Hipnotik Odak"
    ]
  },
  {
    "id": "astronomy-stargazing",
    "name": "Amatör Astronomi & Gökyüzü Gözlemi",
    "slug": "amator-astronomi",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Bilim",
    "shortDescription": "Gözlem dürbünüyle Ay kraterlerini, Jüpiter'in uydularını ve takımyıldızları keşfederek evrenin derinliğine bakın.",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "uzay",
      "yıldız",
      "dürbün",
      "gece",
      "büyüleyici"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1600,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Şehir ışık kirliliği ve bulutlu hava koşulları gözlemi kısıtlayabilir."
    ],
    "starter_kit": [
      {
        "item": "Celestron 7x50 veya 10x50 Astronomi Dürbünü",
        "is_mandatory": true,
        "approx_cost": 1600
      },
      {
        "item": "Stellarium Gökyüzü Haritası (Ücretsiz Uygulama)",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Hava kararınca dürbünle Ay'a bakın, aydınlık ile gölgenin birleştiği çizgideki (terminatör) derin krater gölgelerini inceleyin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "creative-writing",
    "name": "Yaratıcı Yazarlık & Mikro Kurgu",
    "slug": "yaratici-yazarlik",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Edebiyat",
    "shortDescription": "Günde 300 kelimelik mikro öykülerle karakterler yaratın, çatışmalar kurgulayın ve içinizdeki anlatıcıyı serbest bırakın.",
    "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yazı",
      "öykü",
      "edebiyat",
      "ücretsiz",
      "içsel"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Boş sayfa korkusu (writer's block) ve ilk taslakta kusursuzluk takıntısı."
    ],
    "starter_kit": [
      {
        "item": "Google Dokümanlar veya Çizgisiz Not Defteri",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Muji / Pilot 0.5 Jel Kalem",
        "is_mandatory": false,
        "approx_cost": 55
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "'Gece saat 03:00'te çalan bir kapı zili ve kapı eşiğinde unutulan ıslak bir bavul' fikriyle 150 kelimelik bir açılış sahnesi yazın."
    },
    "highlightBadges": [
      "📖 Sıfır Maliyet",
      "✨ Sınırsız Hayal Gücü"
    ]
  },
  {
    "id": "go-board-game",
    "name": "Kadim Go Oyunu (Weiqi)",
    "slug": "go-oyunu-strateji",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Strateji",
    "shortDescription": "Siyah ve beyaz taşlarla 19x19 ızgarada alan çevreleyerek 4000 yıllık Uzak Doğu denge ve felsefesini deneyimleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "go",
      "uzakdoğu",
      "strateji",
      "felsefe",
      "derinlik"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Kuralları basit olmasına rağmen tahtanın genişliği ilk başta karmaşık gelebilir (9x9 tahta ile başlanmalı)."
    ],
    "starter_kit": [
      {
        "item": "Online-Go.com (OGS) Ücretsiz İnteraktif Eğitim",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "9x9 / 13x13 Çift Taraflı Ahşap Go Seti",
        "is_mandatory": false,
        "approx_cost": 490
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "OGS'de 'İnteraktif Öğretici'ye girin; taşların nefes alma noktalarını (liberties) ve taş esir alma kuralını 5 soruyla deneyin."
    },
    "highlightBadges": [
      "☯️ Sonsuz Olasılık",
      "🏯 4000 Yıllık Felsefe"
    ]
  },
  {
    "id": "card-magic",
    "name": "İskambil İllüzyonizmi & Sleight of Hand",
    "slug": "iskambil-illuzyon",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & El Çabukluğu",
    "shortDescription": "Tek bir deste kartla arkadaşlarınızı hayrete düşürecek zihinsel tahmin ve kart kaybetme numaraları öğrenin.",
    "imageUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sihir",
      "kart",
      "illüzyon",
      "el çabukluğu",
      "sosyal"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 220,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Hileyi ayna karşısında yaparken açık vermemek için en az 20 kez tekrarlamak gerekir."
    ],
    "starter_kit": [
      {
        "item": "Orijinal Bicycle Rider Back Standart Deste",
        "is_mandatory": true,
        "approx_cost": 220
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "'Double Lift' (iki kartı tek kart gibi kaldırma) tekniğini öğrenerek seyircinin seçtiği kartı destenin üstüne fırlatma numarasını çalışın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "mindfulness-meditation",
    "name": "Bilinçli Farkındalık (Mindfulness) & Zen",
    "slug": "mindfulness-farkindalik",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & İçsel Denge",
    "shortDescription": "Nefes teknikleri ve rehberli odaklanma egzersizleriyle günlük stres yükünü sıfırlayıp zihinsel berraklık kazanın.",
    "imageUrl": "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "zen",
      "nefes",
      "farkındalık",
      "huzur",
      "ücretsiz"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "İlk dakikalarda akla gelen düşüncelerle kavga etme hissi (düşünceleri izleyip bırakmayı öğrenmek gerekir)."
    ],
    "starter_kit": [
      {
        "item": "Sessiz Bir Köşe ve Rahat Bir Minder",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Medito / Insight Timer (Tamamen Ücretsiz Uygulama)",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 10,
      "description": "Gözlerinizi kapatıp burnunuzdan giren serin havaya ve çıkan ılık nefese odaklanarak 1'den 10'a kadar nefes sayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "sudoku-logic-puzzles",
    "name": "İleri Düzey Mantık Bulmacaları & Sudoku",
    "slug": "sudoku-mantik-bulmacalari",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Matematik",
    "shortDescription": "Rakamların saf mantıkla dizildiği Sudoku, Kakuro ve Nonogram bulmacalarıyla analitik zekanızı keskinleştirin.",
    "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mantık",
      "sayı",
      "sudoku",
      "beyin",
      "ücretsiz"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Kilitlenildiğinde tahmin yapma dürtüsü (saf mantık kurallarını öğrenmek gerekir)."
    ],
    "starter_kit": [
      {
        "item": "Cracking the Cryptic YouTube & Uygulaması",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Kurşun Kalem ve Silgi",
        "is_mandatory": true,
        "approx_cost": 30
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Orta zorlukta bir klasik Sudoku açın ve 'Naked Pairs' (çıplak ikili) tekniğini kullanarak kilitli kareleri çözün."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "cryptography-puzzles",
    "name": "Kriptografi & Şifre Kırma Oyunları",
    "slug": "kriptografi-sifre-cozme",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Analitik",
    "shortDescription": "Sezar şifresinden modern hash algoritmalarına kadar gizli mesajları çözerek dijital dedektiflik yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "şifre",
      "kripto",
      "bulmaca",
      "dedektif",
      "zeka"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Harf frekansı analizi yaparken kağıt-kalem not tutma disiplini gerektirmesi."
    ],
    "starter_kit": [
      {
        "item": "CryptoHack veya MysteryTwister Ücretsiz Platformu",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Karakterlerin alfabede 3 adım kaydırıldığı bir 'ROT13/Sezar' şifreli metnini frekans tablosuyla deşifre edin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "bouldering-climbing",
    "name": "Bouldering & Salon Tırmanışı",
    "slug": "bouldering-tirmanis",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Spor",
    "shortDescription": "İpsiz, minder üstünde problem çözme odaklı tırmanış rotalarıyla tüm vücut kaslarınızı çalıştırın ve adrenalini hissedin.",
    "imageUrl": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "tırmanış",
      "adrenalin",
      "fiziksel",
      "sosyal",
      "odak"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1400,
      "monthly_recurring_min": 900,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 20,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "specialized_venue",
      "social_dynamic": "hybrid",
      "noise_level": "moderate",
      "mess_level": "clean"
    },
    "friction_points": [
      "İlk birkaç seansta parmak derisinde ve ön kol kaslarında hafif sızı.",
      "Yakın bir tırmanış salonu bulunması ihtiyacı."
    ],
    "starter_kit": [
      {
        "item": "Tırmanış Salonu İlk Giriş & Kiralık Ayakkabı",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Magnezyum Tebeşir Tozu & Toz Torbası (Chalk Bag)",
        "is_mandatory": true,
        "approx_cost": 300
      }
    ],
    "first_action": {
      "duration_minutes": 40,
      "description": "Salondaki en kolay sarı/yeşil (V0) rotasını seçin; ağırlığınızı kollarınıza değil bacaklarınıza vererek tepe tutamağına iki elle dokunun."
    },
    "highlightBadges": [
      "🧗 Tüm Vücut Gücü",
      "🤝 Sosyal Salon Ortamı"
    ]
  },
  {
    "id": "yoga-vinyasa",
    "name": "Vinyasa Yoga & Beden Esnekliği",
    "slug": "vinyasa-yoga",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Zihin",
    "shortDescription": "Nefes ile akıcı hareket serilerini birleştirerek omurganızı uzatın, sırt ağrılarınızı giderin ve bedeninizle barışın.",
    "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yoga",
      "esneklik",
      "nefes",
      "sağlık",
      "omurga"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "İlk haftalarda esnek olmama hissi (yoga esnek olmak için yapılır, esnek olanların sporu değildir)."
    ],
    "starter_kit": [
      {
        "item": "Kaymaz 6mm Kalın TPE Yoga Matı",
        "is_mandatory": true,
        "approx_cost": 340
      },
      {
        "item": "YouTube 'Çetin Çetintaş / Adriene' Ücretsiz Akışları",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Matınızı serin; 3 tur Güneşe Selam (Surya Namaskar) akışıyla aşağı bakan köpek, kobra ve çocuk pozları arasında nefesinizi dinleyin."
    },
    "highlightBadges": [
      "🧘 Beden-Zihin Dengesi",
      "🏠 Evde Mat Üstünde"
    ]
  },
  {
    "id": "calisthenics-bodyweight",
    "name": "Kalisteniks (Kendi Ağırlığınla Güçlenme)",
    "slug": "kalisteniks-vucut-agirligi",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Güç",
    "shortDescription": "Spor salonu makinelerine ihtiyaç duymadan barfiks, şınav ve dip hareketleriyle heykelsi bir üst vücut kuvveti inşa edin.",
    "imageUrl": "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "güç",
      "barfiks",
      "şınav",
      "ücretsiz",
      "park"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 380,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "İlk nizami barfiksi çekene kadar direnç lastiğiyle birkaç hafta sabır gerekir."
    ],
    "starter_kit": [
      {
        "item": "Kapı Barfiks Demiri veya 25kg Direnç Lastiği",
        "is_mandatory": true,
        "approx_cost": 380
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "3 set 8 nizami şınav ve 3 set 30 saniye plank yaparak çekirdek bölge (core) dayanıklılığınızı test edin."
    },
    "highlightBadges": [
      "💪 Sıfır Salon Ücreti",
      "🌳 Parkta & Evde"
    ]
  },
  {
    "id": "jump-rope-freestyle",
    "name": "Freestyle İp Atlama & Kardiyo",
    "slug": "freestyle-ip-atlama",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Ritim",
    "shortDescription": "Çapraz geçişler, çift dönüşler ve müzik ritmiyle eğlenerek dakikada 15 kalori yaktıran yüksek tempolu antrenman.",
    "imageUrl": "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ip atlama",
      "kardiyo",
      "ritim",
      "çeviklik",
      "taşınabilir"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 220,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "clean"
    },
    "friction_points": [
      "Evde alt kata ses gitmemesi için açık alanda veya kalın mat üstünde yapılması gerekir."
    ],
    "starter_kit": [
      {
        "item": "Boncuklu veya 5mm PVC Hızlı Atlama İpi",
        "is_mandatory": true,
        "approx_cost": 220
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "İpin uzunluğunu göğüs hizanıza ayarlayın ve aralıksız 100 tek sıçrama ile ritminizi yakalayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "table-tennis",
    "name": "Masa Tenisi (Ping-Pong)",
    "slug": "masa-tenisi",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Refleks",
    "shortDescription": "Spin vuruşları, falsolar ve hızlı reflekslerle göz-el koordinasyonunu geliştiren dinamik bir raket sporu.",
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "raket",
      "refleks",
      "hız",
      "sosyal",
      "eğlenceli"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 490,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "specialized_venue",
      "social_dynamic": "hybrid",
      "noise_level": "moderate",
      "mess_level": "clean"
    },
    "friction_points": [
      "Birlikte oynayacak bir partner veya antrenman duvarı/kulüp bulma gereksinimi."
    ],
    "starter_kit": [
      {
        "item": "Giriş Seviyesi Karbon/Kauçuk Raket (DHS veya Stiga)",
        "is_mandatory": true,
        "approx_cost": 390
      },
      {
        "item": "3 Yıldızlı Antrenman Topu (6'lı Paket)",
        "is_mandatory": true,
        "approx_cost": 100
      }
    ],
    "first_action": {
      "duration_minutes": 30,
      "description": "Forehand vuruş açısını 45 derece eğik tutarak topu masanın karşı köşesine üst spinle gönderme pratiği yapın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🔥 Yüksek Kalori"
    ]
  },
  {
    "id": "trail-hiking",
    "name": "Trekking & Doğa Yürüyüşü",
    "slug": "trekking-doga-yuruyusu",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Doğa",
    "shortDescription": "Hafta sonları orman patikalarında, kanyonlarda yürüyerek akciğerlerinizi tazeleyin ve doğayla bütünleşin.",
    "imageUrl": "https://images.unsplash.com/photo-1520045892732-3010b42c4c35?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yürüyüş",
      "doğa",
      "orman",
      "manzara",
      "macera"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 750,
      "monthly_recurring_min": 200,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 5,
      "prep_cleanup_overhead_minutes": 30,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Şehir merkezinden doğa rotalarına ulaşım planlaması.",
      "Bileği tutan iyi bir outdoor ayakkabı ihtiyacı."
    ],
    "starter_kit": [
      {
        "item": "Kaymaz Tabanlı Outdoor Yürüyüş Ayakkabısı",
        "is_mandatory": true,
        "approx_cost": 1400
      },
      {
        "item": "20L Hafif Sırt Çantası & Termos",
        "is_mandatory": true,
        "approx_cost": 550
      },
      {
        "item": "Wikiloc Çevrimdışı Rota Uygulaması",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 60,
      "description": "Şehrinize en yakın milli park veya koruda 5 kilometrelik yeşil rotayı Wikiloc haritasıyla takip ederek yürüyün."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "skateboarding-cruiser",
    "name": "Kaykay & Cruiser ile Şehir Gezintisi",
    "slug": "kaykay-cruiser",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Denge",
    "shortDescription": "Yumuşak tekerlekli cruiser kaykayla sahil yollarında süzülerek rüzgarı hissedin ve denge kaslarınızı güçlendirin.",
    "imageUrl": "https://images.unsplash.com/photo-1511067007798-44672d7b52b0?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kaykay",
      "cruiser",
      "denge",
      "sokak",
      "özgürlük"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1350,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "clean"
    },
    "friction_points": [
      "İlk sürüşlerde düşme korkusu; dizlik ve kask takmak özgüven kazandırır."
    ],
    "starter_kit": [
      {
        "item": "Tam Takım Ahşap Cruiser Kaykay (Oxelo vb.)",
        "is_mandatory": true,
        "approx_cost": 1350
      },
      {
        "item": "Kask ve Dizlik Güvenlik Seti",
        "is_mandatory": true,
        "approx_cost": 480
      }
    ],
    "first_action": {
      "duration_minutes": 30,
      "description": "Düz bir asfaltta 'push' (itme) ve ağırlık merkezini öne vererek yumuşak dönüş (carving) hareketini deneyin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "archery-traditional",
    "name": "Geleneksel Okçuluk & Hedef Odaklanması",
    "slug": "geleneksel-okculuk",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Odak",
    "shortDescription": "Geleneksel yay ve okla nefesinizi kontrol ederek sarı hedef merkezini vurma disiplinini öğrenin.",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "okçuluk",
      "odak",
      "hedef",
      "duruş",
      "geleneksel"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1200,
      "monthly_recurring_min": 400,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "specialized_venue",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Güvenlik nedeniyle sadece onaylı okçuluk menzillerinde veya açık arazide yapılmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Geleneksel Lamine Türk Yayı (25-30 lbs)",
        "is_mandatory": false,
        "approx_cost": 1400
      },
      {
        "item": "Zihgir (Başparmak Okçu Yüzüğü) & Oklar",
        "is_mandatory": true,
        "approx_cost": 450
      },
      {
        "item": "Okçuluk Kulübü Deneme Dersi",
        "is_mandatory": true,
        "approx_cost": 350
      }
    ],
    "first_action": {
      "duration_minutes": 40,
      "description": "Zihgir ile kirişi kavrayıp çene altına çekin (çapa noktası), nefes vererek kirişi serbest bırakıp 10 metre hedefine atış yapın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🔥 Yüksek Kalori"
    ]
  },
  {
    "id": "indoor-rowing",
    "name": "Kürek Ergometresi & Tüm Vücut Kondisyonu",
    "slug": "kurek-ergometresi",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Dayanıklılık",
    "shortDescription": "Vücut kaslarının %86'sını çalıştıran ritmik kürek çekişleriyle sıfır eklem baskısıyla maksimum kalori yakın.",
    "imageUrl": "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kürek",
      "kondisyon",
      "dayanıklılık",
      "eklemsiz",
      "ritim"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 750,
      "monthly_recurring_min": 650,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "specialized_venue",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "clean"
    },
    "friction_points": [
      "Doğru form (bacak-gövde-kol sırası) öğrenilmezse bel yorulabilir."
    ],
    "starter_kit": [
      {
        "item": "Spor Salonu Üyeliği veya Concept2 Kullanımı",
        "is_mandatory": true,
        "approx_cost": 650
      },
      {
        "item": "Ter Emici Esnek Spor Kıyafeti",
        "is_mandatory": true,
        "approx_cost": 350
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Bacaklarla itme, gövdeyi 11 açısına yaslama ve kolları göğse çekme 1:2 ritmini tutturarak 1500 metre çekin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🔥 Yüksek Kalori"
    ]
  },
  {
    "id": "digital-illustration",
    "name": "Dijital İllüstrasyon & Çizim",
    "slug": "dijital-illüstrasyon",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Yaratıcılık",
    "shortDescription": "Tablet veya bilgisayarda sıfır dağınıklıkla, sınırsız katman ve boya paletiyle anime, portre veya manzara çizimleri yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çizim",
      "tablet",
      "tasarım",
      "temiz",
      "sonsuz renk"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 800,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Ekrana bakarken el-göz koordinasyonuna alışmak ilk 2-3 gün sürebilir."
    ],
    "starter_kit": [
      {
        "item": "Giriş Düzeyi Kalemli Grafik Tablet (One by Wacom / Huion)",
        "is_mandatory": true,
        "approx_cost": 790
      },
      {
        "item": "Krita Studio (Tamamen Ücretsiz & Açık Kaynak)",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Krita'yı açın, kalem basınç hassasiyetini test edin ve dijital suluboya fırçasıyla renk geçişli bir kahve fincanı eskizi yapın."
    },
    "highlightBadges": [
      "🎨 Sonsuz Renk Paleti",
      "🧹 Sıfır Dağınıklık"
    ]
  },
  {
    "id": "microelectronics-arduino",
    "name": "Mikroelektronik & Akıllı Maker Projeleri",
    "slug": "mikroelektronik-arduino",
    "category": "digital_creative",
    "categoryNameTr": "Dijital & Donanım Yaratıcılığı",
    "shortDescription": "Sensörler, LED'ler ve kod satırlarıyla kendi otomatik bitki sulayıcınızı veya oda sıcaklık panelinizi inşa edin.",
    "imageUrl": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kodlama",
      "elektronik",
      "robotik",
      "maker",
      "üretim"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 10,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Yanlış jumper kablo bağlantısı nedeniyle devrenin çalışmaması (hata ayıklama sabrı ister)."
    ],
    "starter_kit": [
      {
        "item": "ESP32 veya Arduino Uno Klon Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 580
      },
      {
        "item": "Lehimsiz Breadboard ve Jumper Kablo Demeti",
        "is_mandatory": true,
        "approx_cost": 110
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Arduino IDE'yi kurun, breadboard üzerine 220 ohm direnç ve bir kırmızı LED bağlayıp 'Blink' kodunu yükleyerek ilk ışığınızı yakın."
    },
    "highlightBadges": [
      "🤖 Gerçek Dünyayı Kodla",
      "⚡ Akıllı Cihazlar Üret"
    ]
  },
  {
    "id": "blender-3d-modeling",
    "name": "Blender ile 3D Modelleme & Render",
    "slug": "blender-3d-modelleme",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Yaratıcılık & 3D",
    "shortDescription": "Tamamen ücretsiz Blender ile kendi sevimli izometrik odalarınızı, low-poly arabalarınızı ve ışıklı 3D sahnelerinizi inşa edin.",
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "3d",
      "blender",
      "render",
      "animasyon",
      "ücretsiz"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Çok sayıda kısayol tuşu olması (G, S, R ve E tuşlarını öğrenerek başlamak gerekir)."
    ],
    "starter_kit": [
      {
        "item": "Blender 4.x (Resmi Ücretsiz Açık Kaynak)",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Tekerlekli 3 Tuşlu Standart Fare",
        "is_mandatory": true,
        "approx_cost": 100
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Blender'daki başlangıç küpünü silmeyin; 'Extrude' (E) tuşuyla çatısını yukarı çekip sevimli bir kulübeye dönüştürün ve Cycles motorunda render alın."
    },
    "highlightBadges": [
      "🖥️ Ücretsiz Güçlü Yazılım",
      "🧱 Kendi Dünyanı Yarat"
    ]
  },
  {
    "id": "music-production-flstudio",
    "name": "Dijital Müzik Prodüksiyonu & Beat Yapımı",
    "slug": "muzik-produksiyonu-beat",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Ses & Müzik",
    "shortDescription": "Lo-Fi, hip-hop veya elektronik ritimleri bilgisayarınızda davul vuruşları ve piyano akorlarıyla besteleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "müzik",
      "beat",
      "lofi",
      "prodüksiyon",
      "ritim"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 500,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Kulaklıkla uzun süre yüksek seste çalışmamak ve miks dengesini tutturmak."
    ],
    "starter_kit": [
      {
        "item": "Reaper veya Vital VST (Ücretsiz Deneme / Açık DAW)",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Stüdyo Tipi Kapalı Kapsül Kulaklık",
        "is_mandatory": true,
        "approx_cost": 550
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "85 BPM tempoda bir davul ritmi (kick-snare) dizin, üzerine 4 nostaljik caz akoru ekleyip ilk 8 barlık Lo-Fi döngünüzü kaydedin."
    },
    "highlightBadges": [
      "🎧 Kendi Şarkını Üret",
      "🎹 Ritim & Melodi"
    ]
  },
  {
    "id": "pixel-art-animation",
    "name": "Retro Pixel Art & Piksel Çizimi",
    "slug": "pixel-art-retro-cizim",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Sanat & Oyun",
    "shortDescription": "90'lar nostaljisini piksel piksel işleyerek minik kılıçlar, iksirler ve yürüyen karakter animasyonları yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "pixel art",
      "retro",
      "oyun",
      "kolay",
      "eğlenceli"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Kısıtlı piksellerde (örn: 16x16) siluet netliği oluşturmayı öğrenmek."
    ],
    "starter_kit": [
      {
        "item": "Aseprite veya Ücretsiz Piskel / LibreSprite",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "32x32 piksellik bir tuval açıp 4 renk kullanarak sevimli bir iksir şişesi çizin ve gölge ekleyin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "podcast-hosting",
    "name": "Podcast Yayıncılığı & Sesli Hikayeler",
    "slug": "podcast-yayinciligi",
    "category": "digital_creative",
    "categoryNameTr": "Dijital İçerik & Ses",
    "shortDescription": "İlgi duyduğunuz bir konuda mikrofon başına geçip Spotify ve Apple Podcasts'te kendi sesli serinizi yayınlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "podcast",
      "ses",
      "yayın",
      "konuşma",
      "hikaye"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 650,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Oda yankısını azaltmak için yastık/perde ile akustik önlem alma ihtiyacı."
    ],
    "starter_kit": [
      {
        "item": "USB Kardioid Kondenser Mikrofon (Fifine vb.)",
        "is_mandatory": true,
        "approx_cost": 650
      },
      {
        "item": "Audacity Ücretsiz Ses Kayıt & Düzenleme",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Spotify for Podcasters (Tamamen Ücretsiz Dağıtım)",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Audacity'de 3 dakikalık 'Bölüm 0: Bu Podcast Nedir?' tanıtım kaydı alıp nefes seslerini temizleyin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "game-dev-godot",
    "name": "Godot ile 2D Bağımsız Oyun Geliştirme",
    "slug": "godot-oyun-gelistirme",
    "category": "digital_creative",
    "categoryNameTr": "Dijital & Kodlama",
    "shortDescription": "Açık kaynaklı hafif Godot motoruyla kendi zıplayan platform veya labirent oyununuzu kodlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "oyun",
      "godot",
      "kodlama",
      "yazılım",
      "ücretsiz"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Kapsamı çok büyük tutup oyunu bitirememe riski (küçük prototiplerle başlamak şart)."
    ],
    "starter_kit": [
      {
        "item": "Godot Engine 4 (Tamamen Ücretsiz - 50MB)",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "itch.io Ücretsiz 2D Oyun Grafikleri (Kenney.nl)",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 30,
      "description": "Bir CharacterBody2D ekleyip GDScript ile sağ-sol ok tuşlarına basınca hareket eden ilk karakterinizi ekranda koşturun."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "creative-coding-p5",
    "name": "Generative Art & P5.js Yaratıcı Kodlama",
    "slug": "yaratici-kodlama-p5js",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Sanat & Matematik",
    "shortDescription": "Matematiksel formüller ve kod döngüleriyle sürekli devinen hipnotik dijital sanat eserleri üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kod",
      "sanat",
      "javascript",
      "geometri",
      "matematik"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Trigonometri ve açı mantığını koda dökerken deneme-yanılma yapmak gerekir."
    ],
    "starter_kit": [
      {
        "item": "Tarayıcı Üzerinde p5.js Web Editörü",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "10 satırlık for döngüsüyle farenin hareketine göre renk değiştiren bir fraktal daireler deseni oluşturun."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "street-photography",
    "name": "Sokak & Hikaye Fotoğrafçılığı",
    "slug": "sokak-fotografciligi",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Görsel Sanat",
    "shortDescription": "Sadece telefonunuzla veya kompakt kamerayla şehrin anlık ışık oyunlarını, siluetlerini ve insan hikayelerini kadrajlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "fotoğraf",
      "sokak",
      "görsel",
      "gezi",
      "kompozisyon"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "clean"
    },
    "friction_points": [
      "İnsanları çekerken duyulan ilk çekingenlik; önce geometri ve gölgelerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Mevcut Akıllı Telefon Kamerası (Giriş İçin)",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Lightroom Mobile (Ücretsiz Renk Düzenleme)",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Gün batımına 1 saat kala sokağa çıkın; yalnızca sert gölgelerin ve pencere yansımalarının oluşturduğu 5 güçlü kompozisyon çekin."
    },
    "highlightBadges": [
      "📱 Eldeki Telefon Yeterli",
      "🚶 Şehri Yeniden Keşfet"
    ]
  },
  {
    "id": "aeropress-coffee",
    "name": "Nitelikli Kahve Demleme & Tadım (Cupping)",
    "slug": "nitelikli-kahve",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Duyusal Zevk",
    "shortDescription": "Tek köken çekirdekler, su sıcaklığı ve mikron ayarlarla mutfağınızı gurme bir kahve laboratuvarına çevirin.",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kahve",
      "tadım",
      "gurme",
      "sabah",
      "hassasiyet"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1200,
      "monthly_recurring_min": 400,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Taze kavrulmuş çekirdek tedarik sürekliliği ve el değirmeninde öğütme alışkanlığı."
    ],
    "starter_kit": [
      {
        "item": "Orijinal AeroPress veya V60 Dripper Takımı",
        "is_mandatory": true,
        "approx_cost": 650
      },
      {
        "item": "0.1g Hassas Dijital Mutfak Terazisi",
        "is_mandatory": true,
        "approx_cost": 320
      },
      {
        "item": "Taze Kavrulmuş Etiyopya Çekirdeği (250g)",
        "is_mandatory": true,
        "approx_cost": 290
      }
    ],
    "first_action": {
      "duration_minutes": 10,
      "description": "15g taze kahveye 92°C sıcaklıkta 200g su döküp AeroPress ters çevirme metoduyla meyvemsi bardağınızı demleyin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "vinyl-record-collecting",
    "name": "Vinil Plak Koleksiyonculuğu & Analog Ses",
    "slug": "vinil-plak-koleksiyonu",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Müzik Kültürü",
    "shortDescription": "Sahafların tozlu raflarında nadir baskıları keşfedin; pikap iğnesinin sıcak çıtırtısıyla albümleri baştan sona dinleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "plak",
      "vinil",
      "pikap",
      "analog",
      "nostalji"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 2200,
      "monthly_recurring_min": 500,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Plakların çizilmemesi için dik saklama ve karbon fırçayla toz alma titizliği."
    ],
    "starter_kit": [
      {
        "item": "Dahili Hoparlörlü / RCA Çıkışlı Giriş Pikabı",
        "is_mandatory": true,
        "approx_cost": 1650
      },
      {
        "item": "İlk Sevdiğiniz Albümün 33'lük LP Plağı",
        "is_mandatory": true,
        "approx_cost": 380
      }
    ],
    "first_action": {
      "duration_minutes": 15,
      "description": "Plağı kenarlarından tutup döner tablaya koyun, kolu kaldırıp iğneyi plağın ilk oluğuna indirin ve sıcak çıtırtıyı dinleyin."
    },
    "highlightBadges": [
      "📻 Sıcak Analog Ses",
      "📦 Fiziksel Koleksiyon"
    ]
  },
  {
    "id": "tea-ceremony-gongfu",
    "name": "Gongfu Çay Seremonisi & Oolong Tadımı",
    "slug": "gongfu-cay-seremonisi",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Duyusal Zevk",
    "shortDescription": "Porselen gaiwan kabında yaprakları 6-7 kez demleyerek fincandan fincana değişen bal ve orkide notalarını tadın.",
    "imageUrl": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çay",
      "zen",
      "tadım",
      "oolong",
      "dinginlik"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 550,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Musluk suyu yerine düşük mineralli arıtılmış/kaynak suyu kullanma gereksinimi."
    ],
    "starter_kit": [
      {
        "item": "Gongfu Çay Seremonisi & Oolong Tadımı Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 480
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Gongfu Çay Seremonisi & Oolong Tadımı için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🍵 Zen Çay Ritüeli",
      "🌸 Orkide Notaları"
    ]
  },
  {
    "id": "birdwatching-nature",
    "name": "Kuş Gözlemciliği (Birdwatching)",
    "slug": "kus-gozlemciligi",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Doğa",
    "shortDescription": "Sulak alanlarda ve parklarda kuş türlerini ötüşlerinden ve uçuş siluetlerinden tanıyıp kişisel yaşam listenizi doldurun.",
    "imageUrl": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kuş",
      "doğa",
      "gözlem",
      "dürbün",
      "sabır"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 0,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Kuşların en hareketli olduğu erken sabah saatlerinde (06:00-08:00) dışarı çıkmak."
    ],
    "starter_kit": [
      {
        "item": "Merlin Bird ID (Cornell Lab - Ücretsiz Ses Tanıma)",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "8x42 Doğa Dürbünü",
        "is_mandatory": false,
        "approx_cost": 850
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Merlin uygulamasını açıp mikrofonu balkonda kuş cıvıltılarına doğru tutun ve çevrenizdeki 3 farklı kuş türünü haritayla teşhis edin."
    },
    "highlightBadges": [
      "🦜 Doğa Dedektifliği",
      "📱 Yapay Zeka Ses Tanıma"
    ]
  },
  {
    "id": "succulent-propagation",
    "name": "Nadir Sukulent & Kaktüs Koleksiyonculuğu",
    "slug": "sukulent-kaktus-yetistiriciligi",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Botanik",
    "shortDescription": "Tek bir yapraktan yeni yavrular üreterek pencere önünüzü renkli geometrik bir sukulent galerisine çevirin.",
    "imageUrl": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sukulent",
      "kaktüs",
      "çoğaltma",
      "yeşil",
      "kolay"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 240,
      "monthly_recurring_min": 50,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 1,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Aşırı sevgi yüzünden fazla sulayıp kökleri çürütme hatası (2-3 haftada bir sulanmalı)."
    ],
    "starter_kit": [
      {
        "item": "3 Farklı Echeveria / Haworthia Sukulent Fidesi",
        "is_mandatory": true,
        "approx_cost": 160
      },
      {
        "item": "Kaktüs Toprağı ve Perlit Karışımı",
        "is_mandatory": true,
        "approx_cost": 80
      }
    ],
    "first_action": {
      "duration_minutes": 10,
      "description": "Sağlıklı bir sukulentin alt yaprağını nazikçe bükerek koparın ve kuru toprağın üzerine yatırıp köklenmesini bekleyin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "fountain-pen-collecting",
    "name": "Dolma Kalem & Özel Mürekkep Koleksiyonu",
    "slug": "dolma-kalem-murekkep",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Yazı Kültürü",
    "shortDescription": "Altın uçların kağıttaki pürüzsüz kayışını, simli ve gölgeli el yapımı mürekkeplerle birleştirin.",
    "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kalem",
      "dolmakalem",
      "mürekkep",
      "yazı",
      "prestij"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 450,
      "monthly_recurring_min": 100,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 1,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Mürekkep değiştirirken kalemi ılık suyla temizleme alışkanlığı."
    ],
    "starter_kit": [
      {
        "item": "Lamy Safari veya Kaweco Sport Dolma Kalem",
        "is_mandatory": true,
        "approx_cost": 450
      },
      {
        "item": "Diamine Şişe Mürekkep (30ml)",
        "is_mandatory": false,
        "approx_cost": 180
      }
    ],
    "first_action": {
      "duration_minutes": 10,
      "description": "Kartuşu takıp mürekkebin uca inmesini bekleyin, kaliteli bir kağıda adınızı el yazısıyla yazarak ıslak çizgi kalitesini hissedin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "fermentation-kombucha",
    "name": "Kombucha & Fermente İçecekler",
    "slug": "kombucha-fermantasyon",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Gastronomi",
    "shortDescription": "SCOBY mayası, tatlı çay ve meyvelerle kendi probiyotik, gazlı ve ferahlatıcı kombucha içeceğinizi üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kombucha",
      "fermente",
      "içecek",
      "probiyotik",
      "sağlık"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 80,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 1,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Fermantasyon süresince kavanozun direkt güneş görmeyen ılık bir yerde dinlenmesi gerekir."
    ],
    "starter_kit": [
      {
        "item": "Canlı Kombucha SCOBY Mayası & Başlangıç Sıvısı",
        "is_mandatory": true,
        "approx_cost": 160
      },
      {
        "item": "3 Litrelik Cam Kavanoz & Tülbent Bezi",
        "is_mandatory": true,
        "approx_cost": 120
      },
      {
        "item": "Siyah Dökme Çay ve Şeker",
        "is_mandatory": true,
        "approx_cost": 70
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "1 litre tatlı siyah çay demleyip oda sıcaklığına soğutun, kavanoza döküp SCOBY mayasını içine bırakın ve tülbentle örtün."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "terrazzo-jesmonite",
    "name": "Jesmonite & Terrazzo Tepsi Tasarımı",
    "slug": "terrazzo-jesmonite",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tasarım",
    "shortDescription": "Toksik olmayan çevre dostu döküm reçinesiyle renkli mermer ve terrazzo parçacıklı İskandinav tarzı takı tepsileri dökün.",
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "jesmonite",
      "terrazzo",
      "tepsi",
      "döküm"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 650,
      "monthly_recurring_min": 130,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Jesmonite AC100 Başlangıç Seti (Sıvı + Toz 1.2kg)",
        "is_mandatory": true,
        "approx_cost": 380
      },
      {
        "item": "Oval Takı Tepsisi Silikon Kalıbı",
        "is_mandatory": true,
        "approx_cost": 130
      },
      {
        "item": "Su Zımparası Seti (400 - 1200 Kum)",
        "is_mandatory": true,
        "approx_cost": 80
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Toz ve sıvıyı 2.5:1 oranında karıştırın, içine kırdığınız renkli parçacıkları ekleyip kalıba dökün; 30 dakika sonra kalıptan çıkarıp su altında zımparalayarak desenleri parlatın."
    },
    "highlightBadges": [
      "⚡ 30 Dakikada Kurur",
      "🌿 Çevre Dostu Reçine"
    ]
  },
  {
    "id": "stained-glass",
    "name": "Tiffany Vitray & Cam Sanatı",
    "slug": "stained-glass",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Cam",
    "shortDescription": "Işık saçan renkli vitray camlarını elmas uçla kesip bakır folyolayın ve lehimleyerek güneş yakalayıcı (sun-catcher) panolar üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "vitray",
      "cam",
      "lehim",
      "renkli"
    ],
    "budget": {
      "tier": "high",
      "initial_setup_min": 1900,
      "monthly_recurring_min": 380,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Yağlı Profesyonel Cam Kesme Elması",
        "is_mandatory": true,
        "approx_cost": 290
      },
      {
        "item": "Karışık Renkli Vitray Cam Plaka Paketi (4 Parça)",
        "is_mandatory": true,
        "approx_cost": 480
      },
      {
        "item": "Bakır Folyo Bant (5.5mm) & Düzleme Çubuğu",
        "is_mandatory": true,
        "approx_cost": 220
      },
      {
        "item": "80W Ayarlı Lehim Havyası & Kurşunsuz Lehim Teli",
        "is_mandatory": true,
        "approx_cost": 460
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "Düz bir şeffaf cam parçasını elmasla çizip tık sesiyle kırın; kenarını bakır folyoyla sarıp lehim havyasıyla parlak gümüşi lehim dikişi çekin."
    },
    "highlightBadges": [
      "🌈 Büyüleyici Işık",
      "✨ Usta İşi Zanaat"
    ]
  },
  {
    "id": "leather-pyrography",
    "name": "Ahşap & Deri Yakma Sanatı (Pyrography)",
    "slug": "leather-pyrography",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Oyma",
    "shortDescription": "Sıcak uçlu havya kalemiyle ahşap panolara detaylı portre ve doğa motifleri yakın.",
    "imageUrl": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yakma",
      "ahşap",
      "havya",
      "sanat"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 480,
      "monthly_recurring_min": 96,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Ahşap & Deri Yakma Sanatı (Pyrography) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 480
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Ahşap & Deri Yakma Sanatı (Pyrography) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "natural-perfumery",
    "name": "Doğal Esansiyel Parfüm Tasarımı",
    "slug": "natural-perfumery",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Koku",
    "shortDescription": "Üst, orta ve alt koku notalarını birleştirerek kendi imza kokunuzu şişeleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1607006314175-9610f7fa0812?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "parfüm",
      "koku",
      "esans",
      "tasarım"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 890,
      "monthly_recurring_min": 178,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Doğal Esansiyel Parfüm Tasarımı Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 890
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Doğal Esansiyel Parfüm Tasarımı için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "cyanotype-sunprint",
    "name": "Siyanotip (Güneş Işığıyla Mavi Baskı)",
    "slug": "cyanotype-sunprint",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Fotoğraf",
    "shortDescription": "Demir tuzlarıyla kaplı kağıdın üzerine gerçek eğrelti otları koyup güneşte 5 dakika bekleterek lacivert tablolar elde edin.",
    "imageUrl": "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mavi",
      "güneş",
      "baskı",
      "siyanotip"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 360,
      "monthly_recurring_min": 72,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Siyanotip (Güneş Işığıyla Mavi Baskı) Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 310
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Siyanotip (Güneş Işığıyla Mavi Baskı) için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "☀️ Güneşle Pozlanır",
      "💙 Büyüleyici Mavi"
    ]
  },
  {
    "id": "bookbinding-art",
    "name": "El Yapımı Defter Ciltleme (Bookbinding)",
    "slug": "bookbinding-art",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Kağıt",
    "shortDescription": "Sayfaları mumlu iple dikip deri veya kumaş kapaklarla özel eskiz defterleri ciltleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "defter",
      "cilt",
      "dikiş",
      "kağıt"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 420,
      "monthly_recurring_min": 84,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "El Yapımı Defter Ciltleme (Bookbinding) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 420
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "El Yapımı Defter Ciltleme (Bookbinding) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "punch-needle",
    "name": "Punch Needle (Panç Nakışı) ile Yastık",
    "slug": "punch-needle",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tekstil",
    "shortDescription": "Özel panç iğnesiyle kumaşa dokulu, kabartmalı modern desenler ve halılar işleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "punch",
      "nakış",
      "yün",
      "yastık"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 390,
      "monthly_recurring_min": 78,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Punch Needle (Panç Nakışı) ile Yastık Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 390
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Punch Needle (Panç Nakışı) ile Yastık için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "wire-wrapping-jewelry",
    "name": "Bakır Tel Sarma Takı (Wire Wrapping)",
    "slug": "wire-wrapping-jewelry",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Takı",
    "shortDescription": "Doğal taşları lehim kullanmadan sadece bakır telleri büküp sararak kolyelere dönüştürün.",
    "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "tel",
      "bakır",
      "taş",
      "kolye"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 320,
      "monthly_recurring_min": 64,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Bakır Tel Sarma Takı (Wire Wrapping) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 320
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Bakır Tel Sarma Takı (Wire Wrapping) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "paper-mache-sculpture",
    "name": "Kağıt Hamuru (Paper Mache) Heykel",
    "slug": "paper-mache-sculpture",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Heykel",
    "shortDescription": "Eski gazete kağıtları ve unlu tutkalla hafif ve sağlam dekoratif heykeller yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kağıt",
      "heykel",
      "sıfır atık",
      "ücretsiz"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Kağıt Hamuru (Paper Mache) Heykel Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kağıt Hamuru (Paper Mache) Heykel için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "screen-printing",
    "name": "Serigrafi (İpek Baskı) Atölyesi",
    "slug": "screen-printing",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Baskı",
    "shortDescription": "İpek elek ve emülsiyonla kendi çizimlerinizi bez çanta ve posterlere seri basın.",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "serigrafi",
      "ipek",
      "baskı",
      "tişört"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1100,
      "monthly_recurring_min": 220,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Serigrafi (İpek Baskı) Atölyesi Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1100
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Serigrafi (İpek Baskı) Atölyesi için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "haiku-poetry",
    "name": "Japon Haiku & Minimalist Şiir",
    "slug": "haiku-poetry",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Şiir",
    "shortDescription": "5-7-5 hece kalıbıyla anın geçiciliğini ve doğanın sessiz mucizesini 3 dizeye sığdırın.",
    "imageUrl": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "şiir",
      "haiku",
      "japon",
      "minimalizm"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Japon Haiku & Minimalist Şiir Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Japon Haiku & Minimalist Şiir için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🍃 Minimalist Ruhu",
      "🆓 Sıfır Masraf"
    ]
  },
  {
    "id": "zen-rock-balancing",
    "name": "Taş Dengeleme Sanatı (Rock Balancing)",
    "slug": "zen-rock-balancing",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Denge",
    "shortDescription": "Dere kenarlarında yapıştırıcı olmadan yerçekimi merkezini bularak taş kuleler dikin.",
    "imageUrl": "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "taş",
      "denge",
      "zen",
      "doğa"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Taş Dengeleme Sanatı (Rock Balancing) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Taş Dengeleme Sanatı (Rock Balancing) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "chess-blindfold",
    "name": "Körleme Satranç (Tahtasız Zihinsel Oyun)",
    "slug": "chess-blindfold",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Bellek",
    "shortDescription": "Tahtaya bakmadan sadece zihninizde 64 kareyi ve taşların konumunu canlandırarak oynayın.",
    "imageUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "hafıza",
      "satranç",
      "zihin",
      "odak"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Körleme Satranç (Tahtasız Zihinsel Oyun) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Körleme Satranç (Tahtasız Zihinsel Oyun) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "speed-reading",
    "name": "Hızlı Okuma & Anlama Teknikleri",
    "slug": "speed-reading",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Gelişim",
    "shortDescription": "İç sesi susturarak dakikada 600+ kelime okuma ve bilgi tarama yeteneği kazanın.",
    "imageUrl": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "okuma",
      "hız",
      "kitap",
      "hafıza"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Hızlı Okuma & Anlama Teknikleri Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Hızlı Okuma & Anlama Teknikleri için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "memory-palace",
    "name": "Hafıza Sarayı (Mnemonik Teknikler)",
    "slug": "memory-palace",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Bellek",
    "shortDescription": "Evinizin odalarını zihinsel bir kütüphaneye çevirerek onlarca ismi, tarihi ve dili kalıcı hafızaya kodlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "hafıza",
      "saray",
      "zeka",
      "öğrenme"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Hafıza Sarayı (Mnemonik Teknikler) Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Hafıza Sarayı (Mnemonik Teknikler) için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🧠 Süper Hafıza",
      "🗝️ Zihinsel Harita"
    ]
  },
  {
    "id": "journaling-bullet",
    "name": "Bullet Journal & Zihinsel Düzen",
    "slug": "journaling-bullet",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Planlama",
    "shortDescription": "Noktalı defterde alışkanlık takibi, günlük düşünce dökümü ve kişisel gelişim çizelgeleri tutun.",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "günlük",
      "bujo",
      "plan",
      "odak"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 240,
      "monthly_recurring_min": 48,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Bullet Journal & Zihinsel Düzen Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 240
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Bullet Journal & Zihinsel Düzen için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "philosophy-reading",
    "name": "Stoacı Felsefe & Akşam Refleksiyonu",
    "slug": "philosophy-reading",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Felsefe",
    "shortDescription": "Marcus Aurelius'un 'Kendime Düşünceler' rehberliğinde günün stresini kontrol edebildiğin şeylerle ayrıştırın.",
    "imageUrl": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "stoa",
      "felsefe",
      "huzur",
      "bilgelik"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Stoacı Felsefe & Akşam Refleksiyonu Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Stoacı Felsefe & Akşam Refleksiyonu için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🏛️ Sarsılmaz Zihin",
      "🌙 Akşam Ritüeli"
    ]
  },
  {
    "id": "lucid-dreaming",
    "name": "Lüsid Rüya & Bilinçli Rüya Günlüğü",
    "slug": "lucid-dreaming",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Zihin",
    "shortDescription": "Gerçeklik kontrolleri ve rüya günlüğüyle uykudayken rüya gördüğünüzün farkına varın.",
    "imageUrl": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "rüya",
      "bilinç",
      "lüsid",
      "günlük"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 1,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Lüsid Rüya & Bilinçli Rüya Günlüğü Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Lüsid Rüya & Bilinçli Rüya Günlüğü için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "polyglot-language",
    "name": "Dil Öğrenimi & Anki Aralıklı Tekrar",
    "slug": "polyglot-language",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Dil",
    "shortDescription": "Günde 20 dakika aralıklı tekrar (spaced repetition) ile yeni bir dilin temelini atın.",
    "imageUrl": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "dil",
      "anki",
      "öğrenme",
      "ispanyolca"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Dil Öğrenimi & Anki Aralıklı Tekrar Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Dil Öğrenimi & Anki Aralıklı Tekrar için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "shogi-japanese-chess",
    "name": "Shogi (Japon Satrancı & Taş Çevirme)",
    "slug": "shogi-japanese-chess",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Strateji",
    "shortDescription": "Yakalanan taşların karşı tarafa tekrar oyuna sokulduğu taktiksel Japon zeka oyunu.",
    "imageUrl": "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "shogi",
      "japon",
      "satranç",
      "strateji"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Shogi (Japon Satrancı & Taş Çevirme) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Shogi (Japon Satrancı & Taş Çevirme) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "gravel-cycling",
    "name": "Gravel & Şehirlerarası Bisikletçilik",
    "slug": "gravel-cycling",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Macera",
    "shortDescription": "Hem asfaltta hem toprak yollarda pedal çevirerek keşfedilmemiş köyleri gezin.",
    "imageUrl": "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bisiklet",
      "gravel",
      "pedal",
      "özgürlük"
    ],
    "budget": {
      "tier": "high",
      "initial_setup_min": 4500,
      "monthly_recurring_min": 900,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 5,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Gravel & Şehirlerarası Bisikletçilik Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 4500
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Gravel & Şehirlerarası Bisikletçilik için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "swimming-freestyle",
    "name": "Açık Su ve Havuzda Serbest Stil Yüzme",
    "slug": "swimming-freestyle",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Su",
    "shortDescription": "Doğru nefes ritmi ve kulaç mekaniğiyle sıfır eklem yüküyle tüm kasları çalıştırın.",
    "imageUrl": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yüzme",
      "su",
      "kondisyon",
      "nefes"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 750,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Açık Su ve Havuzda Serbest Stil Yüzme Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 750
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Açık Su ve Havuzda Serbest Stil Yüzme için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "trail-running",
    "name": "Patika Koşusu (Trail Running)",
    "slug": "trail-running",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Koşu",
    "shortDescription": "Asfaltın monotonluğunu bırakın; orman patikalarında, toprak yollarda ağaçlar arasında koşarak ciğerlerinizi tazeleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "koşu",
      "patika",
      "orman",
      "kardiyo"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 950,
      "monthly_recurring_min": 190,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Dişli Tabanlı Patika Koşu Ayakkabısı (Evdeki de olur)",
        "is_mandatory": true,
        "approx_cost": 890
      },
      {
        "item": "Strava / Nike Run Club Ücretsiz Takip",
        "is_mandatory": true,
        "approx_cost": 0
      }
    ],
    "first_action": {
      "duration_minutes": 25,
      "description": "En yakın koru veya toprak parkurda 1 dakika koşu + 1 dakika tempolu yürüyüş aralıklarıyla 3 kilometreyi tamamlayın."
    },
    "highlightBadges": [
      "🌲 Temiz Orman Havası",
      "🏃 Kardiyo Zirvesi"
    ]
  },
  {
    "id": "slackline-balance",
    "name": "Slackline & İp Üstünde Denge",
    "slug": "slackline-balance",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Denge",
    "shortDescription": "İki park ağacı arasına gerilen 5cm perlon bant üstünde tek ayak durup yürüyerek çekirdek dengeyi geliştirin.",
    "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "slackline",
      "denge",
      "ip",
      "park"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 480,
      "monthly_recurring_min": 96,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Slackline & İp Üstünde Denge Sanatı Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 450
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Slackline & İp Üstünde Denge Sanatı için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🌲 Ağaçlar Arasında",
      "🧘 Hareketli Meditasyon"
    ]
  },
  {
    "id": "badminton-play",
    "name": "Badminton & Hızlı Raket Rallileri",
    "slug": "badminton-play",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Çeviklik",
    "shortDescription": "Tüytopun havada süzülüşünü takip ederek ani sıçramalarla kondisyon kazanın.",
    "imageUrl": "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "badminton",
      "raket",
      "tüytop",
      "hız"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 380,
      "monthly_recurring_min": 76,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Badminton & Hızlı Raket Rallileri Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 380
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Badminton & Hızlı Raket Rallileri için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "bjj-grappling",
    "name": "Brazilian Jiu-Jitsu (BJJ) & Yer Dövüşü",
    "slug": "bjj-grappling",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Savunma",
    "shortDescription": "İnsan satrancı olarak bilinen kaldıraç ve kilitleme prensiplerine dayalı savunma sanatı.",
    "imageUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bjj",
      "dövüş",
      "savunma",
      "satranç"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1100,
      "monthly_recurring_min": 220,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Brazilian Jiu-Jitsu (BJJ) & Yer Dövüşü Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1100
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Brazilian Jiu-Jitsu (BJJ) & Yer Dövüşü için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "roller-skating",
    "name": "Dört Tekerlekli Paten (Roller Skating)",
    "slug": "roller-skating",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Ritim",
    "shortDescription": "Müzik eşliğinde retro quad patenlerle sahil boyunda dans figürleri ve kayışlar yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "paten",
      "retro",
      "dans",
      "denge"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1200,
      "monthly_recurring_min": 240,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Dört Tekerlekli Paten (Roller Skating) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1200
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Dört Tekerlekli Paten (Roller Skating) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "kayaking-paddle",
    "name": "Kano & Deniz Kayaking",
    "slug": "kayaking-paddle",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Su",
    "shortDescription": "Sessiz koylarda kürek çekerek kıyı mağaralarını ve deniz canlılarını su seviyesinden izleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kano",
      "deniz",
      "kürek",
      "doğa"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 600,
      "monthly_recurring_min": 120,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Kano & Deniz Kayaking Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 600
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kano & Deniz Kayaking için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "kettlebell-flow",
    "name": "Kettlebell (Girya) Akış Antrenmanları",
    "slug": "kettlebell-flow",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Güç",
    "shortDescription": "Tek bir demir gülleyle swing, snatch ve get-up hareketleriyle patlayıcı güç kazanın.",
    "imageUrl": "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kettlebell",
      "güç",
      "kardiyo",
      "ev"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 490,
      "monthly_recurring_min": 98,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Kettlebell (Girya) Akış Antrenmanları Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 490
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kettlebell (Girya) Akış Antrenmanları için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "salsa-bachata-dance",
    "name": "Salsa & Bachata Sosyal Dansları",
    "slug": "salsa-bachata-dance",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Dans",
    "shortDescription": "Latin müziklerinin sıcak ritimleriyle partnerli koordinasyon ve özgüven geliştirin.",
    "imageUrl": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "dans",
      "salsa",
      "latin",
      "sosyal"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 400,
      "monthly_recurring_min": 80,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Salsa & Bachata Sosyal Dansları Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 400
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Salsa & Bachata Sosyal Dansları için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "stop-motion-animation",
    "name": "Stop-Motion Kil ve Lego Animasyonu",
    "slug": "stop-motion-animation",
    "category": "digital_creative",
    "categoryNameTr": "Dijital & Sinema",
    "shortDescription": "Kare kare fotoğraf çekip nesneleri canlandırarak kendi mini filmlerinizi yönetin.",
    "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "animasyon",
      "lego",
      "film",
      "kamera"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Stop-Motion Kil ve Lego Animasyonu Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Stop-Motion Kil ve Lego Animasyonu için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "chiptune-8bit-music",
    "name": "8-Bit Chiptune Müzik Besteleme",
    "slug": "chiptune-8bit-music",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Ses & Retro",
    "shortDescription": "Eski Game Boy ve NES ses çipleri tonlarıyla neşeli 8-bit melodiler programlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "8bit",
      "müzik",
      "retro",
      "gameboy"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "8-Bit Chiptune Müzik Besteleme Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "8-Bit Chiptune Müzik Besteleme için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "ai-prompt-engineering",
    "name": "Yapay Zeka Sanatı & Prompt Mühendisliği",
    "slug": "ai-prompt-engineering",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Yaratıcılık & AI",
    "shortDescription": "Midjourney ve Stable Diffusion modellerine kelimelerle görsel dünyalar tasarlatın.",
    "imageUrl": "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ai",
      "prompt",
      "sanat",
      "teknoloji"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Yapay Zeka Sanatı & Prompt Mühendisliği Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Yapay Zeka Sanatı & Prompt Mühendisliği için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "video-editing-davinci",
    "name": "DaVinci Resolve ile Sinematik Video Kurgu",
    "slug": "video-editing-davinci",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Sinema & Kurgu",
    "shortDescription": "Hollywood seviyesindeki ücretsiz DaVinci yazılımıyla renk düzenleme (color grading) yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "video",
      "kurgu",
      "davinci",
      "renk"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "DaVinci Resolve ile Sinematik Video Kurgu Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "DaVinci Resolve ile Sinematik Video Kurgu için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "web-dev-creative",
    "name": "Kişisel Web Sitesi & HTML/CSS Kodlama",
    "slug": "web-dev-creative",
    "category": "digital_creative",
    "categoryNameTr": "Dijital & Kodlama",
    "shortDescription": "Kendi dijital bahçenizi, portfolyonuzu ve interaktif yazılarınızı sıfırdan kodlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1520045892732-3010b42c4c35?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "web",
      "html",
      "css",
      "kodlama"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Kişisel Web Sitesi & HTML/CSS Kodlama Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kişisel Web Sitesi & HTML/CSS Kodlama için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "audiobook-narration",
    "name": "Sesli Kitap Seslendirme & Diksiyon",
    "slug": "audiobook-narration",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Ses & Edebiyat",
    "shortDescription": "Kamuya açık klasik romanları tonlama ve karakter sesleriyle okuyup sesli kitap yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1511067007798-44672d7b52b0?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ses",
      "kitap",
      "diksiyon",
      "mikrofon"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 550,
      "monthly_recurring_min": 110,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Sesli Kitap Seslendirme & Diksiyon Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 550
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Sesli Kitap Seslendirme & Diksiyon için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "keyboard-modding",
    "name": "Mekanik Klavye Özelleştirme & Yağlama",
    "slug": "keyboard-modding",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Donanım & Maker",
    "shortDescription": "Switch'leri lube'layıp köpük modlayarak 'thock' sesli mükemmel yazım hissiyatı oluşturun.",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "klavye",
      "mod",
      "mekanik",
      "thock"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1400,
      "monthly_recurring_min": 280,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Mekanik Klavye Özelleştirme & Yağlama Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1400
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Mekanik Klavye Özelleştirme & Yağlama için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "retro-emulation",
    "name": "Retro Konsol Emülasyonu & Raspberry Pi",
    "slug": "retro-emulation",
    "category": "digital_creative",
    "categoryNameTr": "Dijital & Donanım",
    "shortDescription": "Raspberry Pi içine RetroPie kurarak binlerce nostaljik arcade oyununu tek kutuda toplayın.",
    "imageUrl": "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "raspberry",
      "arcade",
      "retro",
      "oyun"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1100,
      "monthly_recurring_min": 220,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Retro Konsol Emülasyonu & Raspberry Pi Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1100
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Retro Konsol Emülasyonu & Raspberry Pi için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "font-typography-design",
    "name": "Tipografi & Kendi Yazı Tipini Tasarlama",
    "slug": "font-typography-design",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Tasarım & Font",
    "shortDescription": "FontForge ile harflerin kavislerini vektörel çizerek bilgisayara yüklenebilir font üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "font",
      "tipografi",
      "harf",
      "vektör"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Tipografi & Kendi Yazı Tipini Tasarlama Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Tipografi & Kendi Yazı Tipini Tasarlama için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "vector-icon-design",
    "name": "Vektörel İkon Seti Tasarımı",
    "slug": "vector-icon-design",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Tasarım & UI",
    "shortDescription": "Figma üzerinde 24x24 ızgarada minimalist çizgi ve dolgulu simgeler oluşturun.",
    "imageUrl": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "figma",
      "ikon",
      "vektör",
      "tasarım"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Vektörel İkon Seti Tasarımı Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Vektörel İkon Seti Tasarımı için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "hot-sauce-making",
    "name": "Artisan Acı Sos & Biber Fermantasyonu",
    "slug": "hot-sauce-making",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Gastronomi",
    "shortDescription": "Habanero ve jalapeno biberlerini tuzlu salamurada fermente edip lezzet patlaması soslar yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sos",
      "acı",
      "fermente",
      "lezzet"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 320,
      "monthly_recurring_min": 64,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Artisan Acı Sos & Biber Fermantasyonu Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 320
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Artisan Acı Sos & Biber Fermantasyonu için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "perfume-decant-sampling",
    "name": "Niş Parfüm Notaları & Dekant Tadımı",
    "slug": "perfume-decant-sampling",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Duyusal Zevk",
    "shortDescription": "Ud, amber, tütsü ve vetiver gibi niş parfümlerin koku piramidini analiz edin.",
    "imageUrl": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "parfüm",
      "niş",
      "koku",
      "tadım"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 750,
      "monthly_recurring_min": 150,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Niş Parfüm Notaları & Dekant Tadımı Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 750
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Niş Parfüm Notaları & Dekant Tadımı için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "numismatics-coins",
    "name": "Nümizmatik (Tarihi Madeni Para Koleksiyonu)",
    "slug": "numismatics-coins",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Tarih",
    "shortDescription": "Farklı dönemlerin ve ülkelerin madeni paralarını büyüteç altında inceleyip albümleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "para",
      "koleksiyon",
      "tarih",
      "nümizmatik"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 70,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Nümizmatik (Tarihi Madeni Para Koleksiyonu) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Nümizmatik (Tarihi Madeni Para Koleksiyonu) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "vintage-watch-restoration",
    "name": "Vintage Mekanik Saat Koleksiyonculuğu",
    "slug": "vintage-watch-restoration",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Mekanik",
    "shortDescription": "Kurmalı ve otomatik tarihi saatlerin çark sesini dinleyip deri kayış kombinasyonları yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "saat",
      "vintage",
      "mekanik",
      "koleksiyon"
    ],
    "budget": {
      "tier": "high",
      "initial_setup_min": 2400,
      "monthly_recurring_min": 480,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Vintage Mekanik Saat Koleksiyonculuğu Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 2400
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Vintage Mekanik Saat Koleksiyonculuğu için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "mushroom-foraging",
    "name": "Doğal Mantar Avcılığı (Mushroom Foraging)",
    "slug": "mushroom-foraging",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Doğa",
    "shortDescription": "Sonbaharda meşe ormanlarında kuzugöbeği ve kantarocu mantarlarını rehber eşliğinde bulun.",
    "imageUrl": "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mantar",
      "orman",
      "doğa",
      "av"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Doğal Mantar Avcılığı (Mushroom Foraging) Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Doğal Mantar Avcılığı (Mushroom Foraging) için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "comic-book-curation",
    "name": "Çizgi Roman & Grafik Roman Kürasyonu",
    "slug": "comic-book-curation",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Çizgi Roman",
    "shortDescription": "Ödüllü bağımsız grafik romanları ve vintage çizgi roman fasiküllerini koruyucu kılıflarda toplayın.",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çizgi roman",
      "manga",
      "koleksiyon",
      "hikaye"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 400,
      "monthly_recurring_min": 80,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Çizgi Roman & Grafik Roman Kürasyonu Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 400
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Çizgi Roman & Grafik Roman Kürasyonu için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "herb-spice-gardening",
    "name": "Mutfak Penceresinde Taze Baharat Bahçesi",
    "slug": "herb-spice-gardening",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Botanik",
    "shortDescription": "Fesleğen, biberiye, kekik ve nane saksılarıyla yemeklerinize anında taze koku katın.",
    "imageUrl": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "baharat",
      "fesleğen",
      "balkon",
      "yemek"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 250,
      "monthly_recurring_min": 50,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 1,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Mutfak Penceresinde Taze Baharat Bahçesi Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 250
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Mutfak Penceresinde Taze Baharat Bahçesi için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "film-analog-photography",
    "name": "35mm Analog Film Fotoğrafçılığı",
    "slug": "film-analog-photography",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Görsel Sanat",
    "shortDescription": "36 pozluk filmin her karesini dikkatle seçip laboratuvardan çıkış heyecanını yaşayın.",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "film",
      "35mm",
      "analog",
      "fotoğraf"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1400,
      "monthly_recurring_min": 280,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "35mm Analog Film Fotoğrafçılığı Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1400
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "35mm Analog Film Fotoğrafçılığı için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "cheese-pairing-tasting",
    "name": "Artisan Peynir & Eşleşme Gurmeliği",
    "slug": "cheese-pairing-tasting",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Gastronomi",
    "shortDescription": "Gouda, rokfor ve gravyer peynirlerini kuru meyveler ve ballarla eşleştirip tadım notları alın.",
    "imageUrl": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "peynir",
      "gurme",
      "tadım",
      "lezzet"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 600,
      "monthly_recurring_min": 120,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Artisan Peynir & Eşleşme Gurmeliği Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 600
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Artisan Peynir & Eşleşme Gurmeliği için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "board-game-curation",
    "name": "Modern Kutu Oyunları (Board Games) Kulübü",
    "slug": "board-game-curation",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Masaüstü",
    "shortDescription": "Catan, Wingspan ve Terraforming Mars gibi ödüllü strateji kutu oyunlarıyla dost meclisleri kurun.",
    "imageUrl": "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kutu oyunu",
      "strateji",
      "sosyal",
      "boardgame"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 1200,
      "monthly_recurring_min": 240,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıç heyecanıyla gereğinden fazla malzeme satın alıp tüketmeme riski.",
      "Düzenli haftalık seanslar ayırmadıkça ilerleme hızının yavaşlaması."
    ],
    "starter_kit": [
      {
        "item": "Modern Kutu Oyunları (Board Games) Kulübü Başlangıç Seti",
        "is_mandatory": true,
        "approx_cost": 1200
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Modern Kutu Oyunları (Board Games) Kulübü için temel malzemeleri masanıza yerleştirin, rehber videoyu açın ve ilk 15 dakikalık deneme egzersizinizi tamamlayın."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "hobby-gen-0",
    "name": "Cam Füzyon & Fırınlama",
    "slug": "hobby-gen-0",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Cam",
    "shortDescription": "Cam parçalarını fırında kaynaştırarak rengarenk cam tabaklar ve kolyeler yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "cam",
      "füzyon",
      "tabak"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "hybrid",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Cam Füzyon & Fırınlama Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Cam Füzyon & Fırınlama hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "wool-spinning",
    "name": "Kirman ile İp Eğirme & Yün İşleme",
    "slug": "wool-spinning",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Dokuma",
    "shortDescription": "Ham koyun yününü kirman veya çıkrıkla bükerek kendi organik örgü ipinizi üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "yün",
      "ip",
      "kirman"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Kirman ile İp Eğirme & Yün İşleme Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kirman ile İp Eğirme & Yün İşleme hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "basket-weaving",
    "name": "Hasır & Bambu Sepet Örücülüğü",
    "slug": "basket-weaving",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Hasır",
    "shortDescription": "Rattan ve söğüt dallarını ıslatıp örerek piknik ve ekmek sepetleri tasarlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "hasır",
      "sepet",
      "bambu"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Hasır & Bambu Sepet Örücülüğü Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Hasır & Bambu Sepet Örücülüğü hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "gourmet-chocolatier",
    "name": "Artisan Çikolata Yapımı & Temperleme",
    "slug": "gourmet-chocolatier",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Mutfak",
    "shortDescription": "Kakao çekirdeklerini temperleyerek parlak, çıtır kırılan dolgulu trüfler üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çikolata",
      "mutfak",
      "tatlı"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Artisan Çikolata Yapımı & Temperleme Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Artisan Çikolata Yapımı & Temperleme hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "leather-shoe-making",
    "name": "El Yapımı Deri Sandalet & Terlik",
    "slug": "leather-shoe-making",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Ayakkabı",
    "shortDescription": "Kendi ayak ölçünüzde hakiki deri yazlık sandalet ve terlikler dikin.",
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "deri",
      "sandalet",
      "moda"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "hybrid",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "El Yapımı Deri Sandalet & Terlik Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "El Yapımı Deri Sandalet & Terlik hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "needlepoint-tapestry",
    "name": "Goblen & Duvar Halısı İşleme",
    "slug": "needlepoint-tapestry",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Tekstil",
    "shortDescription": "Kanaviçe kumaşına ünlü ressamların tablolarını iplik iplik tablo gibi işleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "goblen",
      "tablo",
      "iplik"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Goblen & Duvar Halısı İşleme Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Goblen & Duvar Halısı İşleme hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "stone-pebble-painting",
    "name": "Deniz Taşı Boyama & Mandala",
    "slug": "stone-pebble-painting",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Boyama",
    "shortDescription": "Sahilden toplanan pürüzsüz taşlara nokta nokta mandala motifleri çizin.",
    "imageUrl": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "taş",
      "mandala",
      "nokta"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Deniz Taşı Boyama & Mandala Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Deniz Taşı Boyama & Mandala hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "driftwood-sculpture",
    "name": "Dalga Ağacı (Driftwood) Heykelciliği",
    "slug": "driftwood-sculpture",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Heykel",
    "shortDescription": "Denizin kıyıya attığı aşınmış ahşap parçalarından heykeller ve lambalar üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1607006314175-9610f7fa0812?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ağaç",
      "deniz",
      "heykel"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Dalga Ağacı (Driftwood) Heykelciliği Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Dalga Ağacı (Driftwood) Heykelciliği hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "copper-coppersmithing",
    "name": "Bakır Çekiçleme & Rölyef Sanatı",
    "slug": "copper-coppersmithing",
    "category": "craft_making",
    "categoryNameTr": "El Sanatları & Metal",
    "shortDescription": "Bakır levhayı çekiç darbeleriyle kabartarak geleneksel tepsiler ve süsler yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bakır",
      "metal",
      "çekiç"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 15,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "hybrid",
      "noise_level": "moderate",
      "mess_level": "moderate"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Bakır Çekiçleme & Rölyef Sanatı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Bakır Çekiçleme & Rölyef Sanatı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "cryptic-crosswords",
    "name": "Kriptik Kare Bulmaca & Kelime Zekası",
    "slug": "cryptic-crosswords",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Bulmaca",
    "shortDescription": "Çift anlamlı kelime oyunları ve zeka tuzakları içeren zorlu kare bulmacaları çözün.",
    "imageUrl": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bulmaca",
      "kelime",
      "zeka"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Kriptik Kare Bulmaca & Kelime Zekası Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kriptik Kare Bulmaca & Kelime Zekası hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "astrology-natal-charts",
    "name": "Doğum Haritası & Arketip Analizi",
    "slug": "astrology-natal-charts",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Analiz",
    "shortDescription": "Gezegen konumlarını ve ev yerleşimlerini sembolik arketipler üzerinden yorumlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "astroloji",
      "arketip",
      "analiz"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Doğum Haritası & Arketip Analizi Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Doğum Haritası & Arketip Analizi hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "memorizing-poetry",
    "name": "Şiir Ezberleme & Zihinsel Hitabet",
    "slug": "memorizing-poetry",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Edebiyat",
    "shortDescription": "Nazım Hikmet, Rilke ve Neruda'nın başyapıtlarını hafızanıza alıp etkileyici seslendirin.",
    "imageUrl": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "şiir",
      "hafıza",
      "hitabet"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Şiir Ezberleme & Zihinsel Hitabet Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Şiir Ezberleme & Zihinsel Hitabet hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "tarot-symbolism",
    "name": "Tarot Sembolizmi & Sezgisel Okuma",
    "slug": "tarot-symbolism",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Sembol",
    "shortDescription": "78 kartın mitolojik ve psikolojik Jung arketiplerini inceleyerek derin sohbetler başlatın.",
    "imageUrl": "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "tarot",
      "jung",
      "sembol"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Tarot Sembolizmi & Sezgisel Okuma Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Tarot Sembolizmi & Sezgisel Okuma hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "origami-modular",
    "name": "Modüler 3D Origami & Kusudama",
    "slug": "origami-modular",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Geometri",
    "shortDescription": "Onlarca kare kağıdı katlayıp birbirine kilitleyerek yapıştırıcısız 3 boyutlu çiçekli küreler inşa edin.",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "origami",
      "kusudama",
      "modüler"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Japon Modüler Origami & Kusudama Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Japon Modüler Origami & Kusudama için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "📄 Yalnızca Kağıt",
      "🧩 Yapboz Hissi"
    ]
  },
  {
    "id": "mind-mapping",
    "name": "Zihin Haritalama (Mind Mapping)",
    "slug": "mind-mapping",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Düşünce",
    "shortDescription": "Karmaşık fikirleri ve kitap özetlerini renkli organik dallarla tek sayfada görselleştirin.",
    "imageUrl": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "zihin",
      "harita",
      "görsel"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Zihin Haritalama (Mind Mapping) Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Zihin Haritalama (Mind Mapping) hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "nature-soundscape",
    "name": "Doğa Sesleri Dinleme & Ses Avcılığı",
    "slug": "nature-soundscape",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Dinleme",
    "shortDescription": "Farklı kuş, rüzgar ve dere seslerini derin odakla dinleyerek zihni sakinleştirin.",
    "imageUrl": "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ses",
      "doğa",
      "huzur"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Doğa Sesleri Dinleme & Ses Avcılığı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Doğa Sesleri Dinleme & Ses Avcılığı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "mythology-studies",
    "name": "Karşılaştırmalı Mitoloji İncelemeleri",
    "slug": "mythology-studies",
    "category": "mental_focus",
    "categoryNameTr": "Zihinsel Odak & Tarih",
    "shortDescription": "Yunan, İskandinav ve Sümer efsanelerindeki ortak kahraman döngülerini araştırın.",
    "imageUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mitoloji",
      "tarih",
      "efsane"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Karşılaştırmalı Mitoloji İncelemeleri Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Karşılaştırmalı Mitoloji İncelemeleri hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "pilates-mat",
    "name": "Klinik Mat Pilates & Postür Düzeltme",
    "slug": "pilates-mat",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Postür",
    "shortDescription": "Masa başı kamburluğunu düzelten derin çekirdek (core) güçlendirme egzersizleri.",
    "imageUrl": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "pilates",
      "omurga",
      "duruş"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Klinik Mat Pilates & Postür Düzeltme Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Klinik Mat Pilates & Postür Düzeltme hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "kickboxing-shadow",
    "name": "Gölge Boksu & Kardiyo Kickboks",
    "slug": "kickboxing-shadow",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Dövüş",
    "shortDescription": "Ekipmansız evde yumruk ve tekme kombinasyonlarıyla stres atıp terleten antrenman.",
    "imageUrl": "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "boks",
      "kickboks",
      "stres"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Gölge Boksu & Kardiyo Kickboks Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Gölge Boksu & Kardiyo Kickboks hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "indoor-cycling-spin",
    "name": "Ritmik Spinning & Ev Bisikleti",
    "slug": "indoor-cycling-spin",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Kardiyo",
    "shortDescription": "Gaza getiren çalma listeleri eşliğinde pedal temposunu artırarak yağ yakın.",
    "imageUrl": "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "spinning",
      "kondisyon",
      "pedal"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Ritmik Spinning & Ev Bisikleti Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Ritmik Spinning & Ev Bisikleti hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "tai-chi-chuan",
    "name": "Tai Chi & Hareketli Meditasyon",
    "slug": "tai-chi-chuan",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Denge",
    "shortDescription": "Yavaş, pürüzsüz ve dairesel beden hareketleriyle içsel enerjiyi (Chi) dengeleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "taichi",
      "meditasyon",
      "denge"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Tai Chi & Hareketli Meditasyon Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Tai Chi & Hareketli Meditasyon hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "fencing-epee",
    "name": "Eskrim (Kılıç Sanatı & Düello)",
    "slug": "fencing-epee",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Refleks",
    "shortDescription": "Beyaz kıyafetler ve flöre kılıcıyla milisaniyelik reflekslerle hamle yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "eskrim",
      "kılıç",
      "refleks"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Eskrim (Kılıç Sanatı & Düello) Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Eskrim (Kılıç Sanatı & Düello) hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "paddleboarding-sup",
    "name": "Stand Up Paddleboard (SUP)",
    "slug": "paddleboarding-sup",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Su",
    "shortDescription": "Geniş sörf tahtası üstünde ayakta kürek çekerek göl ve denizlerde gezinin.",
    "imageUrl": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sup",
      "kürek",
      "deniz"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Stand Up Paddleboard (SUP) Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Stand Up Paddleboard (SUP) hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "parkour-freerunning",
    "name": "Parkur & Serbest Şehir Koşusu",
    "slug": "parkour-freerunning",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Çeviklik",
    "shortDescription": "Banklar, duvarlar ve basamakları akıcı sıçrayışlarla engelsizce aşın.",
    "imageUrl": "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "parkur",
      "sıçrama",
      "şehir"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Parkur & Serbest Şehir Koşusu Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Parkur & Serbest Şehir Koşusu hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "hula-hooping-flow",
    "name": "Hula Hoop & Çember Dansı",
    "slug": "hula-hooping-flow",
    "category": "physical_movement",
    "categoryNameTr": "Fiziksel Hareket & Ritim",
    "shortDescription": "Belde ve kollarda çember çevirerek bel incelten ve çocuksu neşe veren egzersiz.",
    "imageUrl": "https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çember",
      "dans",
      "eğlence"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "outdoor",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Hula Hoop & Çember Dansı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Hula Hoop & Çember Dansı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "🌳 Açık Hava"
    ]
  },
  {
    "id": "vlog-content-creation",
    "name": "Kişisel Vlog & Günlük Video Günlüğü",
    "slug": "vlog-content-creation",
    "category": "digital_creative",
    "categoryNameTr": "Dijital İçerik & Video",
    "shortDescription": "Haftalık anlarınızı sinematik mini hikayelere dönüştürerek YouTube'da paylaşın.",
    "imageUrl": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "vlog",
      "video",
      "youtube"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Kişisel Vlog & Günlük Video Günlüğü Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Kişisel Vlog & Günlük Video Günlüğü hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "sound-design-foley",
    "name": "Foley Ses Tasarımı (Ev Nesneleriyle Ses)",
    "slug": "sound-design-foley",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Ses & Sinema",
    "shortDescription": "Kereviz sapını kırarak kemik sesi, poşet hışırdatarak ateş sesi üretin.",
    "imageUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "foley",
      "ses",
      "sinema"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Foley Ses Tasarımı (Ev Nesneleriyle Ses) Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Foley Ses Tasarımı (Ev Nesneleriyle Ses) hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "djing-mixing",
    "name": "Sanal DJ'lik & Müzik Miksleme",
    "slug": "djing-mixing",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Müzik & DJ",
    "shortDescription": "VirtualDJ veya Rekordbox ile şarkılar arasında kusursuz geçişler yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "dj",
      "müzik",
      "miks"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Sanal DJ'lik & Müzik Miksleme Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Sanal DJ'lik & Müzik Miksleme hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "modding-retro-games",
    "name": "Eski Oyunları Modlama & Türkçe Yama",
    "slug": "modding-retro-games",
    "category": "digital_creative",
    "categoryNameTr": "Dijital & Oyun",
    "shortDescription": "Sevdiğiniz oyunların dokularını yenileyin veya Türkçe çevirilerini hazırlayın.",
    "imageUrl": "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "mod",
      "oyun",
      "çeviri"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Eski Oyunları Modlama & Türkçe Yama Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Eski Oyunları Modlama & Türkçe Yama hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "3d-printing-tinkercad",
    "name": "Tinkercad ile 3D Baskı Tasarımı",
    "slug": "3d-printing-tinkercad",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Üretim & 3D",
    "shortDescription": "Kendi kırılan ev aleti parçalarınızı veya masa süslerinizi 3D yazıcı için çizin.",
    "imageUrl": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "3d yazıcı",
      "tasarım",
      "üretim"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Tinkercad ile 3D Baskı Tasarımı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Tinkercad ile 3D Baskı Tasarımı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "ascii-art",
    "name": "ASCII Art & Karakterlerle Çizim",
    "slug": "ascii-art",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Sanat & Metin",
    "shortDescription": "Sadece klavye karakterlerini (@, #, %) dizerek büyüleyici portreler ve logolar yapın.",
    "imageUrl": "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "ascii",
      "metin",
      "retro"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "ASCII Art & Karakterlerle Çizim Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "ASCII Art & Karakterlerle Çizim hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "digital-collage",
    "name": "Sürreal Dijital Kolaj Tasarımı",
    "slug": "digital-collage",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Sanat & Kolaj",
    "shortDescription": "Tarihi heykellerle uzay fotoğraflarını Photoshop'ta birleştirip rüya sahneleri kurun.",
    "imageUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kolaj",
      "photoshop",
      "sürreal"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Sürreal Dijital Kolaj Tasarımı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Sürreal Dijital Kolaj Tasarımı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "bot-automation-python",
    "name": "Python ile Günlük İşleri Otomasyona Bağlama",
    "slug": "bot-automation-python",
    "category": "digital_creative",
    "categoryNameTr": "Dijital Kodlama & Verimlilik",
    "shortDescription": "Döviz kurlarını veya hava durumunu Telegram'ınıza otomatik mesaj atan botlar yazın.",
    "imageUrl": "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "python",
      "bot",
      "otomasyon"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_desk",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Python ile Günlük İşleri Otomasyona Bağlama Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Python ile Günlük İşleri Otomasyona Bağlama hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "💻 Masa Başı"
    ]
  },
  {
    "id": "vintage-postcards",
    "name": "Eski Kartpostal & Posta Damgası Koleksiyonu",
    "slug": "vintage-postcards",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Tarih",
    "shortDescription": "1900'lerin başından kalma el yazılı kartpostalları toplayıp şehirlerin değişimini izleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kartpostal",
      "efemera",
      "tarih"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Eski Kartpostal & Posta Damgası Koleksiyonu Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Eski Kartpostal & Posta Damgası Koleksiyonu hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "hot-tea-blending",
    "name": "Ev Yapımı Bitki Çayı Harmanlama",
    "slug": "hot-tea-blending",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Duyusal Zevk",
    "shortDescription": "Ihlamur, elma kurusu, tarçın ve hibiskus ile kendi şifalı kış çaylarınızı paketleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "çay",
      "harman",
      "bitki"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Ev Yapımı Bitki Çayı Harmanlama Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Ev Yapımı Bitki Çayı Harmanlama hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "cheese-board-styling",
    "name": "Charcuterie & Şarküteri Tabağı Tasarımı",
    "slug": "cheese-board-styling",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Gastronomi",
    "shortDescription": "Peynirleri, zeytinleri ve üzümleri estetik bir kompozisyonla ahşap kütükte sunun.",
    "imageUrl": "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "sunum",
      "şarküteri",
      "estetik"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Charcuterie & Şarküteri Tabağı Tasarımı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Charcuterie & Şarküteri Tabağı Tasarımı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "fossil-mineral-collecting",
    "name": "Mineral & Yarı Değerli Doğal Taş Koleksiyonu",
    "slug": "fossil-mineral-collecting",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Jeoloji",
    "shortDescription": "Ametist, pirit ve akik taşlarının kristal yapılarını mikroskopla inceleyin.",
    "imageUrl": "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "taş",
      "kristal",
      "ametist"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Mineral & Yarı Değerli Doğal Taş Koleksiyonu Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Mineral & Yarı Değerli Doğal Taş Koleksiyonu hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "vintage-camera-collecting",
    "name": "Eski Analog Fotoğraf Makinesi Koleksiyonu",
    "slug": "vintage-camera-collecting",
    "category": "collecting_curation",
    "categoryNameTr": "Koleksiyon & Mekanik",
    "shortDescription": "Zenit, Yashica ve Canon mekanik vizörlü fotoğraf makinelerini rafınızda sergileyin.",
    "imageUrl": "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "kamera",
      "zenit",
      "vintage"
    ],
    "budget": {
      "tier": "medium",
      "initial_setup_min": 850,
      "monthly_recurring_min": 128,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Eski Analog Fotoğraf Makinesi Koleksiyonu Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 850
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Eski Analog Fotoğraf Makinesi Koleksiyonu hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "💎 Nitelikli Ekipman",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "gourmet-olive-oil",
    "name": "Erken Hasat Soğuk Sıkım Zeytinyağı Tadımı",
    "slug": "gourmet-olive-oil",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Gastronomi",
    "shortDescription": "Polifenol zengini Ege zeytinyağlarının geniz yakan meyvemsi aromalarını kıyaslayın.",
    "imageUrl": "https://images.unsplash.com/photo-1520045892732-3010b42c4c35?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "zeytinyağı",
      "gurme",
      "ege"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 4,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Erken Hasat Soğuk Sıkım Zeytinyağı Tadımı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 350
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Erken Hasat Soğuk Sıkım Zeytinyağı Tadımı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🪙 Bütçe Dostu",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "sea-glass-hunting",
    "name": "Deniz Camı (Sea Glass) Avcılığı",
    "slug": "sea-glass-hunting",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Sahil",
    "shortDescription": "Dalgaların on yıllarca yuvarlayıp pürüzsüzleştirdiği renkli cam taşlarını kumsalda arayın.",
    "imageUrl": "https://images.unsplash.com/photo-1511067007798-44672d7b52b0?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "deniz camı",
      "kumsal",
      "sahil"
    ],
    "budget": {
      "tier": "free",
      "initial_setup_min": 0,
      "monthly_recurring_min": 0,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 2,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "immediate_day1"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "solo",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Deniz Camı (Sea Glass) Avcılığı Temel Kiti / Kılavuzu",
        "is_mandatory": true,
        "approx_cost": 0
      },
      {
        "item": "Not Defteri veya İlerleme Günlüğü",
        "is_mandatory": false,
        "approx_cost": 60
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Deniz Camı (Sea Glass) Avcılığı hakkında temel bir egzersiz yapın ve ilk somut denemenizi gerçekleştirin."
    },
    "highlightBadges": [
      "🆓 Tamamen Ücretsiz",
      "✨ Ev Konforu"
    ]
  },
  {
    "id": "bread-knife-sharpening",
    "name": "Japon Su Taşı ile Bıçak Bileme (Whetstone)",
    "slug": "bread-knife-sharpening",
    "category": "collecting_curation",
    "categoryNameTr": "Kürasyon & Zanaat",
    "shortDescription": "1000 ve 6000 kum çift taraflı su taşında mutfak bıçaklarınızı domatesi ağırlığıyla kesecek jilet keskinliğine getirin.",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "tags": [
      "bileme",
      "bıçak",
      "su taşı"
    ],
    "budget": {
      "tier": "low",
      "initial_setup_min": 350,
      "monthly_recurring_min": 53,
      "currency": "TRY"
    },
    "time_commitment": {
      "min_hours_weekly": 3,
      "prep_cleanup_overhead_minutes": 5,
      "learning_curve_to_first_win": "short_1_week"
    },
    "environment": {
      "location": "indoor_room",
      "social_dynamic": "hybrid",
      "noise_level": "silent",
      "mess_level": "clean"
    },
    "friction_points": [
      "Başlangıçta hevesi korumak için haftada en az 2 gün sabit bir zaman dilimi ayrılmalıdır.",
      "Gereksiz ekipman satın alma tuzağına düşmeden asgari gereçlerle başlanmalıdır."
    ],
    "starter_kit": [
      {
        "item": "Japon Su Taşı ile Bıçak Bileme (Whetstone) Temel Başlangıç Kiti",
        "is_mandatory": true,
        "approx_cost": 380
      },
      {
        "item": "Uygulama Kılavuzu & Not Defteri",
        "is_mandatory": false,
        "approx_cost": 50
      }
    ],
    "first_action": {
      "duration_minutes": 20,
      "description": "Japon Su Taşı ile Bıçak Bileme (Whetstone) için temel prensipleri gözden geçirin ve ilk 20 dakikalık deneme uygulamanızı tamamlayın."
    },
    "highlightBadges": [
      "🔪 Jilet Keskinliği",
      "🌊 Meditatif Ritim"
    ]
  }
];
