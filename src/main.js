import { HOBBIES } from './data/hobbies.js';
import { calculateHobbyScores } from './scoringEngine.js';

// ============================================================================
// CLIENT-SIDE LOCAL STORAGE (HER CİHAZ İÇİN TAMAMEN BAĞIMSIZ & ÖZEL)
// ============================================================================
const STORAGE_KEYS = {
  ANSWERS: 'hobin_user_answers',
  QUIZ_STATE: 'hobin_quiz_state',
  FILTERS: 'hobin_catalog_filters',
  FAVORITES: 'hobin_favorite_hobbies',
  SCREENTIME: 'hobin_screentime_hours'
};

function getStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

function removeStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {}
}

// State
let currentStep = -1; // -1 = test modu seçim ekranı
const userAnswers = {
  interest: 'any',
  budgetLimit: 'low',
  weeklyHours: '4',
  screenAttitude: 'no_screen',
  location: 'any',
  physicalIntensity: 'light',
  messTolerance: 'clean',
  noiseTolerance: 'silent',
  sessionLength: 'deep',
  firstWinSpeed: 'immediate',
  monthlyBudget: 'up_to_200',
  storageFootprint: 'box',
  mentalState: 'creative_spark',
  socialStyle: 'solo',
  portability: 'fixed',
  outputType: 'physical_object',
  structureStyle: 'forgiving',
  sensoryPreference: 'tactile',
  pacingStyle: 'repetitive_flow',
  priority: 'interest'
};

// Cihazda önceden kaydedilmiş cevaplar varsa yükle
const savedAnswers = getStorage(STORAGE_KEYS.ANSWERS);
if (savedAnswers && typeof savedAnswers === 'object') {
  Object.assign(userAnswers, savedAnswers);
}

// Cihaza özel kaydedilen favori hobiler
let favoriteHobbyIds = new Set(getStorage(STORAGE_KEYS.FAVORITES, []));

let currentFilteredCategory = 'all';
let activeSearchQuery = '';
let activeBudgetFilter = 'all';
let activeLocationFilter = 'all';

// Pagination state for 140+ hobbies
const ITEMS_PER_PAGE = 18;
let currentVisibleLimit = ITEMS_PER_PAGE;

// Test Modları: soru sayısı arttıkça puanlama motoru daha katı kalibre edilir
const TEST_MODES = {
  quick: {
    icon: '⚡',
    title: 'Hızlı Test',
    duration: '~1 dk',
    sharpness: 1,
    desc: 'Temel 8 soru. Bütçe, vakit, ekran/analog ve mekan filtreleriyle genel yön bul.'
  },
  balanced: {
    icon: '⚖️',
    title: 'Dengeli Test',
    duration: '~2 dk',
    sharpness: 2,
    desc: 'Kapsamlı 14 soru. Seans süresi, alan, zihinsel mod ve sosyal tarz dahil dengeli analiz.'
  },
  detailed: {
    icon: '🔬',
    title: 'Ultra Keskin Test',
    duration: '~3-4 dk',
    sharpness: 3,
    desc: 'En derin 20 soru. Taşınabilirlik, duyusal çekim, kuralcılık ve kırmızı çizgi dahil nokta atışı.'
  }
};
const MODE_KEYS = Object.keys(TEST_MODES);

const savedQuizForMode = getStorage(STORAGE_KEYS.QUIZ_STATE, {});
let selectedTestMode = MODE_KEYS.includes(savedQuizForMode.mode) ? savedQuizForMode.mode : 'balanced';

// 20 Kapsamlı Soru Tanımı (modes: hangi testlerde sorulacağı)
const ALL_WIZARD_STEPS = [
  // --- 1. İlgi Alanı ---
  {
    key: 'interest',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Bir hobiden en çok ne bekliyorsun?',
    description: 'Motivasyonun, önerilerin hangi dünyadan geleceğini belirleyen en güçlü sinyaldir.',
    options: [
      { value: 'craft_making', icon: '🎨', title: 'Elimle Somut Bir Şey Üretmek', sub: 'Dokunabileceğim, sergileyebileceğim el emeği işler' },
      { value: 'mental_focus', icon: '🧠', title: 'Zihnimi Zorlamak & Odaklanmak', sub: 'Strateji, bulmaca, hafıza veya meditatif odak' },
      { value: 'physical_movement', icon: '🧗', title: 'Bedenimi Hareket Ettirmek', sub: 'Spor, denge, kondisyon ve enerji atmak' },
      { value: 'digital_creative', icon: '💻', title: 'Dijital Dünyada Üretmek', sub: 'Kodlama, tasarım, 3D, müzik veya video' },
      { value: 'collecting_curation', icon: '☕', title: 'Keşfetmek, Tatmak & Biriktirmek', sub: 'Koleksiyon, tadım, doğa gözlemi ve kürasyon' },
      { value: 'any', icon: '✨', title: 'Henüz Bilmiyorum / Açığım', sub: 'Her alandan öneri görmek istiyorum' }
    ]
  },
  // --- 2. Bütçe ---
  {
    key: 'budgetLimit',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Yeni bir hobiye başlangıçta ne kadar bütçe ayırabilirsin?',
    description: 'Hobin, gizli maliyetleri ve sarf malzemesi yükünü bu tercihe göre hesaplar.',
    options: [
      { value: 'zero', icon: '🌱', title: '0 TL - Tamamen Sıfır Bütçe', sub: 'Mevcut telefon, ev gereçleri veya açık kaynak yazılımlar' },
      { value: 'low', icon: '🪙', title: 'Düşük Bütçe (0 - 800 TL)', sub: 'Temel başlangıç kiti ve birkaç sarf malzemesi' },
      { value: 'medium', icon: '💳', title: 'Orta Bütçe (800 - 2.500 TL)', sub: 'Kaliteli başlangıç ekipmanı ve uzun ömürlü gereçler' },
      { value: 'flexible', icon: '✨', title: 'Esnek / Bütçe İkinci Planda', sub: 'Yeter ki doğru ve keyifli bir uğraş olsun' }
    ]
  },
  // --- 3. Haftalık Süre ---
  {
    key: 'weeklyHours',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Haftada ortalama toplam ne kadar vakit ayırabileceksin?',
    description: 'Zaman-ödül uyuşmazlığını engellemek için gerçekçi bir saat seçin.',
    options: [
      { value: '2', icon: '⏱️', title: 'Haftada 1 - 2 Saat', sub: 'Hızlıca başlayıp bırakılabilecek, düşük zaman yükü' },
      { value: '4', icon: '⏳', title: 'Haftada 3 - 5 Saat', sub: 'Hafta sonu veya akşamları keyifli seanslar' },
      { value: '7', icon: '🚀', title: 'Haftada 6+ Saat', sub: 'Derin odaklanma ve hızlı ustalaşma hedefi' }
    ]
  },
  // --- 4. Ekran Tutumu ---
  {
    key: 'screenAttitude',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Ekran ve dijital yorgunluk tutumun nedir?',
    description: 'Gün boyu bilgisayar/telefon başında mısın? Hobinde ekran görmek istiyor musun?',
    options: [
      { value: 'no_screen', icon: '📵', title: 'Sıfır Ekran! (Analog & Dokunsal)', sub: 'Gözlerim ve zihnim ekrandan tamamen uzaklaşsın' },
      { value: 'screen_preferred', icon: '💻', title: 'Ekran Başında Dijital Üretim', sub: 'Bilgisayar, yazılım, kod veya dijital tasarım araçları' },
      { value: 'flexible', icon: '✨', title: 'Fark Etmez / İkisine de Açığım', sub: 'Ekranlı ya da ekransız önerileri değerlendir' }
    ]
  },
  // --- 5. Mekan ---
  {
    key: 'location',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Bu hobiyi nerede yapmayı hayal ediyorsun?',
    description: 'Evinde alan kısıtın var mı yoksa dışarı çıkmak mı istersin?',
    options: [
      { value: 'any', icon: '🏠', title: 'Fark Etmez / Esnek', sub: 'Önerileri mekandan bağımsız listele' },
      { value: 'indoor_desk', icon: '💻', title: 'Çalışma Masamda', sub: 'Sıfır alan gereksinimi, sandalye ve masa yeterli' },
      { value: 'indoor_room', icon: '🛋️', title: 'Evde Ayrı Bir Köşede / Mutfakta', sub: 'Küçük bir zemin, tezgah veya özel bir masa' },
      { value: 'outdoor', icon: '🌳', title: 'Açık Havada & Sokaklarda', sub: 'Yürüyüş, doğa veya şehir keşfi' },
      { value: 'specialized_venue', icon: '🧗', title: 'Özel Salon veya Atölyede', sub: 'Ev dışı spor salonu veya stüdyo ortamı' }
    ]
  },
  // --- 6. Fiziksel Efor ---
  {
    key: 'physicalIntensity',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Nasıl bir fiziksel aktivite seviyesi arıyorsun?',
    description: 'Hobin sırasında bedenen ne kadar hareket etmek ve enerji harcamak istersin?',
    options: [
      { value: 'sedentary', icon: '🪑', title: 'Hareketsiz / Dingin (Masa Başı)', sub: 'Oturarak, zihinsel odak veya ince el becerisi odaklı' },
      { value: 'light', icon: '🚶', title: 'Hafif & Dengeli Hareket', sub: 'Ayakta durma, mutfak veya hafif yürüyüş temposu' },
      { value: 'active', icon: '🔥', title: 'Yüksek Tempolu & Terleten Spor', sub: 'Tırmanış, koşu, kardiyo, güç veya çeviklik odaklı' },
      { value: 'flexible', icon: '✨', title: 'Fark Etmez / Esnek', sub: 'Hem dingin hem hareketli önerilere açığım' }
    ]
  },
  // --- 7. Dağınıklık ---
  {
    key: 'messTolerance',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Dağınıklık ve temizlik toleransın nedir?',
    description: 'Hobiyi yarım bırakmanın en yaygın sebeplerinden biri temizlik yüküdür.',
    options: [
      { value: 'clean', icon: '✨', title: 'Sıfır Dağınıklık & Tozsuz', sub: 'Masam temiz kalsın, su veya çamur istemem' },
      { value: 'moderate', icon: '🧹', title: 'Makul / Kolay Temizlenebilir', sub: 'Ufak kırıntı, un veya kırpıntı sorun değil' },
      { value: 'heavy', icon: '🎨', title: 'Dağınıklık Önemli Değil', sub: 'Kil, boya, su... Sanat biraz kirlenmektir' }
    ]
  },
  // --- 8. Ses Düzeyi ---
  {
    key: 'noiseTolerance',
    modes: ['quick', 'balanced', 'detailed'],
    title: 'Çalışma ortamında ses ve gürültü düzeyi nasıl olmalı?',
    description: 'Gece saatlerinde veya ses geçiren apartman dairelerinde kritik bir faktör.',
    options: [
      { value: 'silent', icon: '🤫', title: 'Çok Sessiz Olmalı', sub: 'Geceleri veya yan odadakileri rahatsız etmeden' },
      { value: 'moderate', icon: '📻', title: 'Hafif Tıkırtı / Ses Sorun Değil', sub: 'Tokmak, tırmanış müziği veya el aleti sesi' },
      { value: 'any', icon: '🔊', title: 'Fark Etmez', sub: 'Ses izolasyonum var veya dışarıda yapacağım' }
    ]
  },
  // --- 9. Seans Başı Süre ---
  {
    key: 'sessionLength',
    modes: ['balanced', 'detailed'],
    title: 'Tek bir oturuşta / seansta nasıl bir zaman dilimi istersin?',
    description: 'Bazı hobiler 15 dakikada tamamlanırken, bazıları 2 saat kesintisiz akış ister.',
    options: [
      { value: 'micro', icon: '⏱️', title: '15 - 30 Dakikalık Hızlı Mikro Seanslar', sub: 'İstediğimde anında başlayıp bırakabileyim' },
      { value: 'deep', icon: '⏳', title: '1 - 2+ Saatlik Derinleşme Seansları', sub: 'Dünyayı unutup içine dalacağım uzun ve kesintisiz akış' },
      { value: 'any', icon: '✨', title: 'Fark Etmez / Duruma Göre Değişir', sub: 'Hem kısa molalara hem uzun seanslara açığım' }
    ]
  },
  // --- 10. İlk Ödül Hızı ---
  {
    key: 'firstWinSpeed',
    modes: ['balanced', 'detailed'],
    title: 'İlk başarı ve tatmin hissini ne kadar çabuk almak istersin?',
    description: 'İlk somut çıktıyı alma süresi motivasyonu doğrudan belirler.',
    options: [
      { value: 'immediate', icon: '🎯', title: 'İlk Günden Somut Çıktı!', sub: 'Hemen ilk 30 dakikada elime bir ürün veya galibiyet geçsin' },
      { value: 'patient', icon: '🧘', title: 'Sürece Sabırlıyım', sub: '1-2 hafta öğrenme eğrisine zevkle katlanabilirim' }
    ]
  },
  // --- 11. Aylık Sarf Gideri ---
  {
    key: 'monthlyBudget',
    modes: ['balanced', 'detailed'],
    title: 'Başladıktan sonra aylık ne kadar sarf/üyelik gideri kabul edersin?',
    description: 'Gizli maliyet yanılgısı: birçok hobi ucuz başlar ama malzemeyle pahalılaşır.',
    options: [
      { value: 'none', icon: '🚫', title: 'Hiç Sürekli Gider İstemiyorum', sub: 'Bir kez alıp yıllarca kullanabileceğim şeyler' },
      { value: 'up_to_200', icon: '🪙', title: 'Aylık 200 TL\'ye Kadar', sub: 'Ara sıra sarf malzemesi yenileme' },
      { value: 'up_to_500', icon: '💳', title: 'Aylık 500 TL\'ye Kadar', sub: 'Düzenli malzeme veya salon üyeliği' },
      { value: 'any', icon: '✨', title: 'Fark Etmez', sub: 'Aylık gider belirleyici değil' }
    ]
  },
  // --- 12. Saklama Alanı ---
  {
    key: 'storageFootprint',
    modes: ['balanced', 'detailed'],
    title: 'Evinde hobi ekipmanı için ne kadar yer ayırabilirsin?',
    description: 'Büyük aletler ve malzemeler dağınıklık yaratıp hevesinizi kırabilir.',
    options: [
      { value: 'pocket', icon: '🎒', title: 'Tek Çekmece veya Bir Çanta (Minimal)', sub: 'Sıfır yer kaplasın; masam ve dolabım ferah kalsın' },
      { value: 'box', icon: '📦', title: 'Orta Boy Bir Kutu / Raf Yeterli', sub: 'Dolapta veya masada ufak bir köşe ayırabilirim' },
      { value: 'dedicated', icon: '🏠', title: 'Geniş Alan / Özel Köşe Sorun Değil', sub: 'Şövale, alet çantası, ekipman alanı veya özel tezgah' }
    ]
  },
  // --- 13. Zihinsel Mod & Amaç ---
  {
    key: 'mentalState',
    modes: ['balanced', 'detailed'],
    title: 'Günün yorgunluğu ardından bu hobi sana ne hissettirmeli?',
    description: 'Temel psikolojik ihtiyacın: kafa dinlemek mi, zihni zorlamak mı, yaratmak mı?',
    options: [
      { value: 'zen', icon: '🧘', title: 'Zihni Boşaltma & Dinginlik', sub: 'Meditatif sakinlik, sakin ritim ve düşüncelerden arınma' },
      { value: 'challenge', icon: '🧠', title: 'Problem Çözme & Meydan Okuma', sub: 'Strateji, mantık, zeka, taktik veya bulmaca çözümü' },
      { value: 'creative_spark', icon: '🎨', title: 'Yaratıcı Kıvılcım & Estetik İfade', sub: 'Renkler, formlar, özgün sanat ve üretim sevinci' }
    ]
  },
  // --- 14. Sosyal Tarz ---
  {
    key: 'socialStyle',
    modes: ['balanced', 'detailed'],
    title: 'Hobini tek başına mı, başkalarıyla mı yapmayı tercih edersin?',
    description: 'Sosyal enerji ihtiyacı, bir hobiyi sürdürme olasılığını ciddi ölçüde etkiler.',
    options: [
      { value: 'solo', icon: '🎧', title: 'Tek Başıma, Kendi Ritmimde', sub: 'Kafa dinlemek ve kendi temposunda ilerlemek' },
      { value: 'social', icon: '🤝', title: 'Topluluk / Arkadaşlarla', sub: 'Kulüp, rakip, partner veya grup etkinlikleri' },
      { value: 'any', icon: '✨', title: 'Fark Etmez', sub: 'Her iki tür de olur' }
    ]
  },
  // --- 15. Taşınabilirlik ---
  {
    key: 'portability',
    modes: ['detailed'],
    title: 'Hobini yanında taşımak, seyahatte veya kafede yapmak ister misin?',
    description: 'Yolculukta, parkta veya kafede devam edebilen mobil hobiler serbestlik sağlar.',
    options: [
      { value: 'portable', icon: '👜', title: 'Taşınabilir Olmalı', sub: 'Çantamda her yere gitsin; parkta, kafede, seyahatte yapabileyim' },
      { value: 'fixed', icon: '🛋️', title: 'Sabit Evimde / Odamda Olsun', sub: 'Masa veya tezgah başında yapılması yeterli, taşımaya gerek yok' },
      { value: 'any', icon: '✨', title: 'Fark Etmez', sub: 'Mekan bağımsızlığı önceliğim değil' }
    ]
  },
  // --- 16. Çıktı Biçimi ---
  {
    key: 'outputType',
    modes: ['detailed'],
    title: 'Uğraşının sonucunda elinde ne kalmasını hayal ediyorsun?',
    description: 'Bazıları dokunabileceği somut bir obje ister, bazıları yeni bir zihinsel ustalık.',
    options: [
      { value: 'physical_object', icon: '🏺', title: 'Somut Fiziksel Bir Eser', sub: 'Fincan, ekmek, takı, örgü, ahşap obje veya tablo' },
      { value: 'digital_skill', icon: '💾', title: 'Dijital Varlık veya Yeni Beceri', sub: 'Kod, 3D model, müzik, satranç veya hafıza ustalığı' },
      { value: 'experience_curation', icon: '☕', title: 'Deneyim, Lezzet & Koleksiyon', sub: 'Tadım notları, doğa keşfi, fotoğraf, seçki ve anılar' },
      { value: 'any', icon: '✨', title: 'Hepsi Olabilir / Fark Etmez', sub: 'Çıktı türü önemsiz, süreç keyif versin' }
    ]
  },
  // --- 17. Kuralcılık ve Hassasiyet ---
  {
    key: 'structureStyle',
    modes: ['detailed'],
    title: 'Hangi çalışma tarzı seni daha az strese sokar?',
    description: 'Kimi milimetrik kural ve disiplini sever, kimi serbest doğaçlamayı.',
    options: [
      { value: 'forgiving', icon: '🌿', title: 'Hata Kaldıran & Serbest Akış', sub: 'Milimetrik kural yok, doğaçlama, esnek ve rahatlatıcı' },
      { value: 'precise', icon: '📐', title: 'Hassas, Titiz & Kuralcı', sub: 'Milimetrik ölçüm, teknik kurallar, mantık ve disiplin' },
      { value: 'any', icon: '✨', title: 'Fark Etmez', sub: 'İki çalışma tarzı da bana uyar' }
    ]
  },
  // --- 18. Duyusal Çekim ---
  {
    key: 'sensoryPreference',
    modes: ['detailed'],
    title: 'En çok hangi duyunun uyarılmasından keyif alırsın?',
    description: 'Hobi sırasında seni en çok büyüleyen duyusal his hangisi?',
    options: [
      { value: 'tactile', icon: '🖐️', title: 'Dokunsal & El Emeği', sub: 'Kil, ahşap, yün, ip, kağıt, metal, kumaş dokusu' },
      { value: 'gustatory', icon: '☕', title: 'Tat & Koku Duyusu', sub: 'Kahve, ekmek, çay, fermantasyon, aromaterapi ve lezzet' },
      { value: 'visual', icon: '👁️', title: 'Görsel & Tasarımsal', sub: 'Renkler, ışık, tipografi, desenler ve kompozisyon' },
      { value: 'intellectual', icon: '💡', title: 'Soyut Mantık & Zeka', sub: 'Rakamlar, algoritmalar, semboller ve hamleler' },
      { value: 'any', icon: '✨', title: 'Fark Etmez', sub: 'Tüm duyusal uyaranlara açığım' }
    ]
  },
  // --- 19. İlerleme Ritmi ---
  {
    key: 'pacingStyle',
    modes: ['detailed'],
    title: 'Hobiyi sürdürürken nasıl bir öğrenme süreci seversin?',
    description: 'Ritmik tekrarlar mı zihnini dinlendirir yoksa sürekli yeni dinamikler mi?',
    options: [
      { value: 'repetitive_flow', icon: '🔄', title: 'Ritmik & Tekrara Dayalı Akış', sub: 'Benzer hareketlerle zihnin hipnotik biçimde dinlenmesi' },
      { value: 'dynamic_variety', icon: '🎲', title: 'Sürekli Yeni Taktik & Değişkenlik', sub: 'Her seansta bambaşka bir senaryo, problem veya mekan' },
      { value: 'any', icon: '✨', title: 'Fark Etmez', sub: 'Her iki öğrenme biçimi de olur' }
    ]
  },
  // --- 20. Pazarlıksız Kırmızı Çizgi / Öncelik ---
  {
    key: 'priority',
    modes: ['detailed'],
    title: 'Senin için pazarlık konusu OLMAYAN kırmızı çizgi kriter hangisi?',
    description: 'Seçtiğin kriter puanlamada 2.4 kat ekstra ağırlık kazanır ve zıtlıklar çok daha sert elenir.',
    options: [
      { value: 'interest', icon: '💡', title: 'İlgi Alanım', sub: 'Ne yaptığım her şeyden önemli' },
      { value: 'budget', icon: '💰', title: 'Bütçe', sub: 'Başlangıç ve aylık maliyet sınırımı kesinlikle aşmamalı' },
      { value: 'no_screen', icon: '📵', title: 'Sıfır Ekran', sub: 'Kesinlikle ekrandan uzak, fiziksel/analog olmalı' },
      { value: 'time', icon: '⏱️', title: 'Zaman & Pratiklik', sub: 'Ayırabildiğim saate ve hazırlık yüküne tam sığmalı' },
      { value: 'location', icon: '📍', title: 'Mekan', sub: 'Seçtiğim ortamda yapılabilmeli' },
      { value: 'physical', icon: '🔥', title: 'Fiziksel Efor', sub: 'Hareket seviyesi beklentime birebir uymalı' },
      { value: 'calm', icon: '🤫', title: 'Sessizlik & Temizlik', sub: 'Evde gürültü ve leke yaratmamalı' },
      { value: 'portability', icon: '👜', title: 'Taşınabilirlik', sub: 'Çantamda yanımda gezdirebilmeliyim' },
      { value: 'firstWin', icon: '🎯', title: 'Hızlı Tatmin', sub: 'İlk günden somut sonuç görmeliyim' }
    ]
  }
];

function getActiveSteps() {
  return ALL_WIZARD_STEPS.filter(s => s.modes.includes(selectedTestMode));
}

// Puanlama motoruna yalnızca seçilen testte sorulan cevaplar gönderilir
function getActivePreferences() {
  const prefs = {};
  getActiveSteps().forEach(s => {
    prefs[s.key] = userAnswers[s.key];
  });
  return prefs;
}

// Elements
const wizardModal = document.getElementById('wizard-modal');
const openWizardBtn = document.getElementById('open-wizard-btn');
const navWizardBtn = document.getElementById('nav-wizard-btn');
const closeWizardBtn = document.getElementById('close-wizard-btn');
const wizardStepLabel = document.getElementById('wizard-step-label');
const wizardProgressBar = document.getElementById('wizard-progress-bar');
const wizardStepContent = document.getElementById('wizard-step-content');
const wizardPrevBtn = document.getElementById('wizard-prev-btn');
const wizardNextBtn = document.getElementById('wizard-next-btn');

const recommendationsSection = document.getElementById('recommendations-section');
const topMatchesGrid = document.getElementById('top-matches-grid');
const recCategoryFilterBar = document.getElementById('rec-category-filter-bar');
const btnRecalculate = document.getElementById('btn-recalculate');
const matchThresholdSlider = document.getElementById('match-threshold-slider');
const sliderValDisplay = document.getElementById('slider-val-display');
const recHeadingTitle = document.getElementById('rec-heading-title');

let allScoredHobbies = [];
let topRecommendedHobbies = [];
let recActiveCategory = 'all';
let currentThresholdPercent = 75;

const hobbyGrid = document.getElementById('hobby-grid');
const categoryFilterBar = document.getElementById('category-filter-bar');
const hobbySearchInput = document.getElementById('hobby-search-input');
const budgetFilterSelect = document.getElementById('budget-filter-select');
const locationFilterSelect = document.getElementById('location-filter-select');

const detailModal = document.getElementById('detail-modal');
const closeDetailBtn = document.getElementById('close-detail-btn');
const btnCloseDetailCta = document.getElementById('btn-close-detail-cta');
const btnShareHobby = document.getElementById('btn-share-hobby');

const methodologyModal = document.getElementById('methodology-modal');
const btnMethodology = document.getElementById('btn-methodology');
const closeMethodologyBtn = document.getElementById('close-methodology-btn');
const btnCloseMethodology = document.getElementById('btn-close-methodology');

let activeHobbyForModal = null;

// ============================================================================
// WIZARD LOGIC
// ============================================================================
function openWizard() {
  currentStep = -1;
  wizardModal.classList.remove('hidden');
  renderWizardStep();
}

function closeWizard() {
  wizardModal.classList.add('hidden');
}

function renderSharpnessMeter(level) {
  return `<span class="sharpness-meter" aria-label="Keskinlik ${level}/3">${[1, 2, 3]
    .map(i => `<span class="sharpness-bar ${i <= level ? 'filled' : ''}"></span>`)
    .join('')}</span>`;
}

function renderModeSelection() {
  wizardStepLabel.textContent = 'Test Türünü Seç';
  wizardProgressBar.style.width = '0%';
  wizardPrevBtn.disabled = true;
  wizardNextBtn.textContent = 'Teste Başla →';

  const cards = MODE_KEYS.map(key => {
    const m = TEST_MODES[key];
    const qCount = ALL_WIZARD_STEPS.filter(s => s.modes.includes(key)).length;
    return `
      <button type="button" class="test-mode-card ${selectedTestMode === key ? 'selected' : ''}" id="test-mode-${key}" data-mode="${key}">
        <span class="test-mode-icon">${m.icon}</span>
        <span class="test-mode-title">${m.title}</span>
        <span class="test-mode-meta">${qCount} soru • ${m.duration}</span>
        <span class="test-mode-desc">${m.desc}</span>
        <span class="test-mode-sharpness">Keskinlik ${renderSharpnessMeter(m.sharpness)}</span>
      </button>
    `;
  }).join('');

  wizardStepContent.innerHTML = `
    <h3 class="wizard-question-title">Nasıl bir test istersin?</h3>
    <p class="wizard-question-desc">Soru sayısı arttıkça puanlama daha katı kalibre edilir: daha az ama daha isabetli hobi yüksek uyum alır.</p>
    <div class="test-mode-grid">${cards}</div>
  `;

  const cardEls = wizardStepContent.querySelectorAll('.test-mode-card');
  cardEls.forEach(el => {
    el.addEventListener('click', () => {
      cardEls.forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      selectedTestMode = el.getAttribute('data-mode');
    });
    el.addEventListener('dblclick', handleWizardNext);
  });
}

function renderWizardStep() {
  if (currentStep < 0) {
    renderModeSelection();
    return;
  }

  const steps = getActiveSteps();
  const step = steps[currentStep];
  const mode = TEST_MODES[selectedTestMode];
  wizardStepLabel.textContent = `${mode.icon} ${mode.title} • Adım ${currentStep + 1} / ${steps.length}`;
  const progressPercent = ((currentStep + 1) / steps.length) * 100;
  wizardProgressBar.style.width = `${progressPercent}%`;

  wizardPrevBtn.disabled = false;
  wizardNextBtn.textContent = (currentStep === steps.length - 1) ? '🎯 Sonuçları Gör' : 'Devam Et →';

  let html = `
    <h3 class="wizard-question-title">${step.title}</h3>
    <p class="wizard-question-desc">${step.description}</p>
    <div class="wizard-options-grid">
  `;

  step.options.forEach(opt => {
    const isSelected = userAnswers[step.key] === opt.value;
    html += `
      <div class="wizard-option-btn ${isSelected ? 'selected' : ''}" data-value="${opt.value}">
        <span class="opt-icon">${opt.icon}</span>
        <div class="opt-text-wrap">
          <span class="opt-title">${opt.title}</span>
          <span class="opt-sub">${opt.sub}</span>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  wizardStepContent.innerHTML = html;

  const optionElements = wizardStepContent.querySelectorAll('.wizard-option-btn');
  optionElements.forEach(el => {
    el.addEventListener('click', () => {
      optionElements.forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      userAnswers[step.key] = el.getAttribute('data-value');
      setStorage(STORAGE_KEYS.ANSWERS, userAnswers);
    });
  });
}

function handleWizardNext() {
  const steps = getActiveSteps();
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderWizardStep();
  } else {
    closeWizard();
    finishWizardAndShowResults(false);
  }
}

function handleWizardPrev() {
  if (currentStep >= 0) {
    currentStep--;
    renderWizardStep();
  }
}

function finishWizardAndShowResults(isSilentRestore = false) {
  const savedQuiz = getStorage(STORAGE_KEYS.QUIZ_STATE, {});
  if (isSilentRestore && savedQuiz.mode && MODE_KEYS.includes(savedQuiz.mode)) {
    selectedTestMode = savedQuiz.mode;
  }
  allScoredHobbies = calculateHobbyScores(HOBBIES, getActivePreferences(), selectedTestMode);

  if (isSilentRestore && savedQuiz.threshold) {
    currentThresholdPercent = Number(savedQuiz.threshold) || 75;
    recActiveCategory = savedQuiz.recActiveCategory || 'all';
  } else if (!isSilentRestore) {
    currentThresholdPercent = 75;
    recActiveCategory = 'all';
  }

  if (matchThresholdSlider) {
    matchThresholdSlider.value = currentThresholdPercent;
  }

  updateThresholdAndFilter(true);
  recommendationsSection.classList.remove('hidden');

  setStorage(STORAGE_KEYS.ANSWERS, userAnswers);
  setStorage(STORAGE_KEYS.QUIZ_STATE, {
    completed: true,
    mode: selectedTestMode,
    threshold: currentThresholdPercent,
    recActiveCategory: recActiveCategory
  });

  if (!isSilentRestore) {
    recommendationsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateThresholdAndFilter(isInitial = false) {
  if (allScoredHobbies.length === 0) return;

  // Filter hobbies with at least currentThresholdPercent match
  let matching = allScoredHobbies.filter(h => h.matchPercentage >= currentThresholdPercent);
  const isFallback = matching.length === 0;

  if (isFallback) {
    matching = allScoredHobbies.slice(0, 3);
  }

  topRecommendedHobbies = matching.map((hobby, index) => ({
    ...hobby,
    recommendationRank: index + 1
  }));

  if (sliderValDisplay) {
    sliderValDisplay.textContent = `%${currentThresholdPercent} ve Üzeri`;
  }

  if (recHeadingTitle) {
    recHeadingTitle.textContent = isFallback 
      ? `Bu Eşikte Hobi Bulunamadı (En Yakın ${topRecommendedHobbies.length} Hobi)`
      : `Senin İçin %${currentThresholdPercent}+ Uyum Sağlayan ${topRecommendedHobbies.length} Hobi`;
  }

  const summaryText = document.getElementById('recommendation-summary-text');
  if (summaryText) {
    summaryText.textContent = isFallback
      ? `%${currentThresholdPercent} ve üzerinde hobi bulunamadı. Slider çubuğunu sola kaydırarak eşiği esnetebilirsiniz.`
      : `Belirttiğiniz kriterlere göre %${currentThresholdPercent} ve üzeri uyum sağlayan toplam ${topRecommendedHobbies.length} hobi listelenmiştir. Kategorilere göre filtreleyebilirsiniz.`;
  }

  updateRecModeBadge();
  updateRecCategoryFilterPills();
  renderTopMatches();

  if (!isInitial) {
    showToast(`%${currentThresholdPercent}+ uyum: ${topRecommendedHobbies.length} hobi listelendi`);
  }
}

function updateRecModeBadge() {
  const mode = TEST_MODES[selectedTestMode];
  const badge = document.getElementById('rec-mode-badge');
  if (badge) {
    badge.innerHTML = `${mode.icon} ${mode.title} Sonuçları ${renderSharpnessMeter(mode.sharpness)}`;
  }

  const upgradeBtn = document.getElementById('btn-upgrade-test');
  if (upgradeBtn) {
    const nextMode = MODE_KEYS[MODE_KEYS.indexOf(selectedTestMode) + 1];
    if (nextMode) {
      upgradeBtn.style.display = '';
      upgradeBtn.dataset.mode = nextMode;
      upgradeBtn.textContent = `${TEST_MODES[nextMode].icon} Daha Keskin Sonuç: ${TEST_MODES[nextMode].title}`;
    } else {
      upgradeBtn.style.display = 'none';
    }
  }
}

function startTestInMode(mode) {
  selectedTestMode = mode;
  currentStep = 0;
  wizardModal.classList.remove('hidden');
  renderWizardStep();
}

function updateRecCategoryFilterPills() {
  if (!recCategoryFilterBar) return;
  const counts = {
    all: topRecommendedHobbies.length,
    craft_making: topRecommendedHobbies.filter(h => h.category === 'craft_making').length,
    mental_focus: topRecommendedHobbies.filter(h => h.category === 'mental_focus').length,
    physical_movement: topRecommendedHobbies.filter(h => h.category === 'physical_movement').length,
    digital_creative: topRecommendedHobbies.filter(h => h.category === 'digital_creative').length,
    collecting_curation: topRecommendedHobbies.filter(h => h.category === 'collecting_curation').length
  };

  recCategoryFilterBar.innerHTML = `
    <button class="filter-pill ${recActiveCategory === 'all' ? 'active' : ''}" data-category="all">Tümü (${counts.all})</button>
    ${counts.craft_making > 0 ? `<button class="filter-pill ${recActiveCategory === 'craft_making' ? 'active' : ''}" data-category="craft_making">🎨 El Sanatları (${counts.craft_making})</button>` : ''}
    ${counts.mental_focus > 0 ? `<button class="filter-pill ${recActiveCategory === 'mental_focus' ? 'active' : ''}" data-category="mental_focus">🧠 Zihinsel Odak (${counts.mental_focus})</button>` : ''}
    ${counts.physical_movement > 0 ? `<button class="filter-pill ${recActiveCategory === 'physical_movement' ? 'active' : ''}" data-category="physical_movement">🧗 Fiziksel Hareket (${counts.physical_movement})</button>` : ''}
    ${counts.digital_creative > 0 ? `<button class="filter-pill ${recActiveCategory === 'digital_creative' ? 'active' : ''}" data-category="digital_creative">💻 Dijital & Maker (${counts.digital_creative})</button>` : ''}
    ${counts.collecting_curation > 0 ? `<button class="filter-pill ${recActiveCategory === 'collecting_curation' ? 'active' : ''}" data-category="collecting_curation">☕ Kürasyon & Zevk (${counts.collecting_curation})</button>` : ''}
  `;
}

function renderTopMatches() {
  topMatchesGrid.innerHTML = '';
  const filtered = recActiveCategory === 'all'
    ? topRecommendedHobbies
    : topRecommendedHobbies.filter(h => h.category === recActiveCategory);

  if (filtered.length === 0) {
    topMatchesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 36px; color: #555;">
        <p style="font-size: 1.1rem; font-weight: 600;">Bu kategoride önerilen hobi bulunmuyor.</p>
        <p style="font-size: 0.9rem;">Diğer kategorileri seçebilir veya filtreyi temizleyebilirsiniz.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(hobby => {
    const card = document.createElement('div');
    card.className = 'top-match-card';
    const badgesHtml = (hobby.highlightBadges || [])
      .slice(0, 2)
      .map(b => `<span class="card-chip" style="background: #e8f3f3; color: #194648; border-color: #bee0e0;">${b}</span>`)
      .join('');

    const isFav = favoriteHobbyIds.has(hobby.id);

    card.innerHTML = `
      <div class="match-rank-tag">#${hobby.recommendationRank} Öneri</div>
      <button class="card-fav-btn ${isFav ? 'active' : ''}" data-hobby-id="${hobby.id}" style="top: 14px; right: 90px;" aria-label="Favorilere ekle/çıkar" title="${isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      <div class="match-score-badge">%${hobby.matchPercentage} Uyum</div>
      <img src="${hobby.imageUrl}" alt="${hobby.name}" class="top-match-image" loading="lazy" />
      <div class="top-match-body">
        <span class="detail-category-badge" style="margin-bottom: 8px;">${hobby.categoryNameTr}</span>
        <h3 class="top-match-title">${hobby.name}</h3>
        ${badgesHtml ? `<div class="card-badge-chips-row" style="margin-bottom: 8px;">${badgesHtml}</div>` : ''}
        <p style="font-size: 0.88rem; color: #3c4849; margin-bottom: 8px; line-height: 1.45;">${hobby.shortDescription}</p>
        
        <div class="top-match-reasons">
          <strong>Neden Senin İçin Uygun?</strong>
          <ul>
            ${hobby.reasons.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div class="top-match-footer">
          <div>
            <div style="font-size: 0.75rem; color: #888;">MİNİMUM BAŞLANGIÇ</div>
            <strong style="color: #2d6a6d;">${hobby.budget.initial_setup_min === 0 ? 'ÜCRETSİZ' : hobby.budget.initial_setup_min + ' TL'}</strong>
          </div>
          <button class="primary-btn view-detail-trigger" style="padding: 8px 18px; font-size: 0.85rem;">İncele & Başla →</button>
        </div>
      </div>
    `;

    const favBtn = card.querySelector('.card-fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavoriteHobby(hobby.id, e);
      });
    }

    card.addEventListener('click', () => openHobbyDetail(hobby));
    topMatchesGrid.appendChild(card);
  });
}

// ============================================================================
// HOBBY CATALOG GRID & DYNAMIC COUNTS
// ============================================================================
function updateCategoryFilterPills() {
  const favCount = favoriteHobbyIds.size;
  const counts = {
    all: HOBBIES.length,
    craft_making: HOBBIES.filter(h => h.category === 'craft_making').length,
    mental_focus: HOBBIES.filter(h => h.category === 'mental_focus').length,
    physical_movement: HOBBIES.filter(h => h.category === 'physical_movement').length,
    digital_creative: HOBBIES.filter(h => h.category === 'digital_creative').length,
    collecting_curation: HOBBIES.filter(h => h.category === 'collecting_curation').length
  };

  categoryFilterBar.innerHTML = `
    <button class="filter-pill ${currentFilteredCategory === 'all' ? 'active' : ''}" data-category="all">Tümü (${counts.all})</button>
    ${favCount > 0 ? `<button class="filter-pill ${currentFilteredCategory === 'favorites' ? 'active' : ''}" data-category="favorites" style="border-color: #f7a8a8; color: ${currentFilteredCategory === 'favorites' ? '#ffffff' : '#c92a2a'}; background: ${currentFilteredCategory === 'favorites' ? '#d94b4b' : '#fff5f5'};">❤️ Favorilerim (${favCount})</button>` : ''}
    <button class="filter-pill ${currentFilteredCategory === 'craft_making' ? 'active' : ''}" data-category="craft_making">🎨 El Sanatları (${counts.craft_making})</button>
    <button class="filter-pill ${currentFilteredCategory === 'mental_focus' ? 'active' : ''}" data-category="mental_focus">🧠 Zihinsel Odak (${counts.mental_focus})</button>
    <button class="filter-pill ${currentFilteredCategory === 'physical_movement' ? 'active' : ''}" data-category="physical_movement">🧗 Fiziksel Hareket (${counts.physical_movement})</button>
    <button class="filter-pill ${currentFilteredCategory === 'digital_creative' ? 'active' : ''}" data-category="digital_creative">💻 Dijital & Maker (${counts.digital_creative})</button>
    <button class="filter-pill ${currentFilteredCategory === 'collecting_curation' ? 'active' : ''}" data-category="collecting_curation">☕ Kürasyon & Zevk (${counts.collecting_curation})</button>
  `;
}

function getFilteredHobbies() {
  return HOBBIES.filter(hobby => {
    if (currentFilteredCategory === 'favorites') {
      if (!favoriteHobbyIds.has(hobby.id)) return false;
    } else if (currentFilteredCategory !== 'all' && hobby.category !== currentFilteredCategory) {
      return false;
    }

    if (activeBudgetFilter !== 'all') {
      if (activeBudgetFilter === 'free' && hobby.budget.tier !== 'free') return false;
      if (activeBudgetFilter === 'low' && hobby.budget.initial_setup_min > 800) return false;
      if (activeBudgetFilter === 'medium' && (hobby.budget.initial_setup_min <= 800 || hobby.budget.initial_setup_min > 2000)) return false;
    }

    if (activeLocationFilter !== 'all' && hobby.environment.location !== activeLocationFilter) {
      return false;
    }

    if (activeSearchQuery.trim()) {
      const q = activeSearchQuery.toLowerCase();
      const matchName = hobby.name.toLowerCase().includes(q);
      const matchDesc = hobby.shortDescription.toLowerCase().includes(q);
      const matchTags = hobby.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchTags) return false;
    }

    return true;
  });
}

function renderCatalogGrid() {
  const fullList = getFilteredHobbies();
  const visibleList = fullList.slice(0, currentVisibleLimit);
  hobbyGrid.innerHTML = '';

  if (fullList.length === 0) {
    hobbyGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #888;">
        <p style="font-size: 1.2rem; font-weight: 600;">Eşleşen hobi bulunamadı.</p>
        <p style="font-size: 0.9rem;">Filtreleri sıfırlayarak tekrar deneyebilirsiniz.</p>
      </div>
    `;
    removeLoadMoreButton();
    return;
  }

  visibleList.forEach(hobby => {
    const card = document.createElement('div');
    card.className = 'hobby-wireframe-card';
    card.id = `hobby-card-${hobby.id}`;

    const locationLabels = {
      indoor_desk: 'Masa Başı',
      indoor_room: 'Ev / Oda',
      outdoor: 'Açık Hava',
      specialized_venue: 'Özel Mekan'
    };

    const costLabel = hobby.budget.initial_setup_min === 0 
      ? 'Ücretsiz' 
      : `${hobby.budget.initial_setup_min} TL`;

    const badgesHtml = (hobby.highlightBadges || [])
      .slice(0, 2)
      .map(b => `<span class="card-chip">${b}</span>`)
      .join('');

    const isFav = favoriteHobbyIds.has(hobby.id);

    card.innerHTML = `
      <!-- Top Half: "Hobi Resmi" -->
      <div class="card-top-half">
        <img src="${hobby.imageUrl}" alt="${hobby.name}" class="card-top-image" loading="lazy" />
        <div class="card-image-gradient"></div>
        <span class="card-category-tag">${hobby.categoryNameTr}</span>
        <button class="card-fav-btn ${isFav ? 'active' : ''}" data-hobby-id="${hobby.id}" aria-label="Favorilere ekle/çıkar" title="${isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}">
          ${isFav ? '❤️' : '🤍'}
        </button>
        <span class="card-budget-badge">${costLabel}</span>
      </div>

      <!-- Bottom Half: "Hobi Detayları" (Mint / Teal) -->
      <div class="card-bottom-half">
        <h4 class="card-title">${hobby.name}</h4>
        
        ${badgesHtml ? `<div class="card-badge-chips-row">${badgesHtml}</div>` : ''}

        <p class="card-snippet">${hobby.shortDescription}</p>

        <div class="card-specs-row">
          <span>⏱️ ${hobby.time_commitment.min_hours_weekly} sa/hf</span>
          <span>📍 ${locationLabels[hobby.environment.location] || 'Ev'}</span>
          <span>⚡ ${hobby.first_action.duration_minutes} dk</span>
        </div>

        <div class="card-btn-action">
          İncele & Başla <span>→</span>
        </div>
      </div>
    `;

    const favBtn = card.querySelector('.card-fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavoriteHobby(hobby.id, e);
      });
    }

    card.addEventListener('click', () => openHobbyDetail(hobby));
    hobbyGrid.appendChild(card);
  });

  renderLoadMoreButton(fullList.length);
}

function renderLoadMoreButton(totalItems) {
  removeLoadMoreButton();

  if (currentVisibleLimit < totalItems) {
    const container = document.createElement('div');
    container.id = 'load-more-container';
    container.style.textAlign = 'center';
    container.style.marginTop = '28px';
    container.style.width = '100%';

    const remaining = totalItems - currentVisibleLimit;
    const nextAmount = Math.min(ITEMS_PER_PAGE, remaining);

    container.innerHTML = `
      <button class="secondary-btn" id="btn-load-more" style="padding: 14px 32px; font-weight: 700; font-size: 1rem; border: 2px solid #7cb9b9; background: #ffffff;">
        Daha Fazla Hobi Yükle (+${nextAmount}) • Kalan: ${remaining}
      </button>
      <div style="font-size: 0.85rem; color: #777; margin-top: 8px;">
        Toplam ${totalItems} hobiden ${Math.min(currentVisibleLimit, totalItems)} tanesi görüntüleniyor
      </div>
    `;

    hobbyGrid.parentNode.appendChild(container);

    document.getElementById('btn-load-more').addEventListener('click', () => {
      currentVisibleLimit += ITEMS_PER_PAGE;
      renderCatalogGrid();
    });
  }
}

function removeLoadMoreButton() {
  const existing = document.getElementById('load-more-container');
  if (existing) existing.remove();
}

// ============================================================================
// HOBBY DETAIL MODAL
// ============================================================================
function openHobbyDetail(hobby) {
  activeHobbyForModal = hobby;

  const banner = document.getElementById('detail-hero-banner');
  banner.style.backgroundImage = `url('${hobby.imageUrl}')`;

  document.getElementById('modal-category-badge').textContent = hobby.categoryNameTr;
  document.getElementById('modal-title').textContent = hobby.name;
  document.getElementById('modal-tagline').textContent = hobby.shortDescription;

  // Metrics
  document.getElementById('modal-time-val').textContent = `${hobby.time_commitment.min_hours_weekly} sa/hf`;
  document.getElementById('modal-budget-val').textContent = hobby.budget.initial_setup_min === 0 
    ? '0 TL (Ücretsiz)' 
    : `${hobby.budget.initial_setup_min} TL`;

  const winLabels = {
    immediate_day1: '1. Günde',
    short_1_week: '1 Haftada',
    medium_1_month: '1 Ayda',
    steep_3_months_plus: '3+ Ayda'
  };
  document.getElementById('modal-win-val').textContent = winLabels[hobby.time_commitment.learning_curve_to_first_win] || '1 Günde';

  const locationLabels = {
    indoor_desk: 'Masa Başı',
    indoor_room: 'Ev / Oda',
    outdoor: 'Açık Hava',
    specialized_venue: 'Özel Mekan'
  };
  document.getElementById('modal-env-val').textContent = locationLabels[hobby.environment.location] || 'Masa Başı';

  // First Action
  document.getElementById('modal-first-action-time').textContent = `⏱️ ${hobby.first_action.duration_minutes} Dakika Mikro-Eylem`;
  document.getElementById('modal-first-action-desc').textContent = hobby.first_action.description;

  // Starter Kit
  const kitList = document.getElementById('modal-starter-kit-list');
  kitList.innerHTML = '';
  let mandatoryTotal = 0;

  hobby.starter_kit.forEach(item => {
    if (item.is_mandatory) {
      mandatoryTotal += item.approx_cost;
    }
    const row = document.createElement('div');
    row.className = 'kit-item-row';
    row.innerHTML = `
      <div class="kit-item-left">
        <span class="kit-mandatory-tag ${item.is_mandatory ? 'tag-mandatory' : 'tag-optional'}">
          ${item.is_mandatory ? 'Zorunlu' : 'Opsiyonel'}
        </span>
        <span style="font-size: 0.9rem; font-weight: 600;">${item.item}</span>
      </div>
      <span class="kit-item-cost">${item.approx_cost === 0 ? 'Ücretsiz' : item.approx_cost + ' TL'}</span>
    `;
    kitList.appendChild(row);
  });

  document.getElementById('modal-starter-total').textContent = mandatoryTotal === 0 ? '0 TL (Maliyetsiz)' : `${mandatoryTotal} TL`;

  // Friction Points
  const frictionList = document.getElementById('modal-friction-list');
  frictionList.innerHTML = '';
  hobby.friction_points.forEach(point => {
    const li = document.createElement('li');
    li.textContent = point;
    frictionList.appendChild(li);
  });

  updateModalFavBtn(hobby.id);
  detailModal.classList.remove('hidden');
}

function closeHobbyDetail() {
  detailModal.classList.add('hidden');
}

// ============================================================================
// FAVORITES & STORAGE CONTROLS (HER CİHAZA ÖZEL)
// ============================================================================
function toggleFavoriteHobby(hobbyId, e) {
  if (e) e.stopPropagation();
  if (favoriteHobbyIds.has(hobbyId)) {
    favoriteHobbyIds.delete(hobbyId);
    showToast('Favorilerden çıkarıldı');
  } else {
    favoriteHobbyIds.add(hobbyId);
    showToast('Favorilere eklendi ❤️');
  }
  setStorage(STORAGE_KEYS.FAVORITES, Array.from(favoriteHobbyIds));
  updateCategoryFilterPills();
  renderCatalogGrid();
  renderTopMatches();
  updateModalFavBtn(hobbyId);
}

function updateModalFavBtn(hobbyId) {
  const modalFavBtn = document.getElementById('modal-fav-btn');
  if (!modalFavBtn) return;
  const isFav = favoriteHobbyIds.has(hobbyId);
  modalFavBtn.innerHTML = isFav ? '❤️ Favorilerimden Çıkar' : '🤍 Favorilere Ekle';
  modalFavBtn.classList.toggle('active', isFav);
}

function saveCatalogFilters() {
  setStorage(STORAGE_KEYS.FILTERS, {
    category: currentFilteredCategory,
    budget: activeBudgetFilter,
    location: activeLocationFilter,
    search: activeSearchQuery
  });
}

function restoreCatalogFilters() {
  const saved = getStorage(STORAGE_KEYS.FILTERS);
  if (saved) {
    if (saved.category) currentFilteredCategory = saved.category;
    if (saved.budget && budgetFilterSelect) {
      activeBudgetFilter = saved.budget;
      budgetFilterSelect.value = saved.budget;
    }
    if (saved.location && locationFilterSelect) {
      activeLocationFilter = saved.location;
      locationFilterSelect.value = saved.location;
    }
    if (saved.search && hobbySearchInput) {
      activeSearchQuery = saved.search;
      hobbySearchInput.value = saved.search;
    }
  }
}

function resetCatalogFilters() {
  currentFilteredCategory = 'all';
  activeBudgetFilter = 'all';
  activeLocationFilter = 'all';
  activeSearchQuery = '';

  if (budgetFilterSelect) budgetFilterSelect.value = 'all';
  if (locationFilterSelect) locationFilterSelect.value = 'all';
  if (hobbySearchInput) hobbySearchInput.value = '';

  saveCatalogFilters();
  updateCategoryFilterPills();
  currentVisibleLimit = ITEMS_PER_PAGE;
  renderCatalogGrid();
  showToast('Filtreler varsayılana sıfırlandı');
}

function clearRecommendations() {
  removeStorage(STORAGE_KEYS.QUIZ_STATE);
  recommendationsSection.classList.add('hidden');
  allScoredHobbies = [];
  topRecommendedHobbies = [];
  showToast('Öneriler temizlendi');
}

// Notifications & Utils
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function copyCurrentHobbyPlan() {
  if (!activeHobbyForModal) return;
  const h = activeHobbyForModal;
  const planText = `
🎯 ${h.name} Başlangıç Eylem Planı (Hobin)
• Kategori: ${h.categoryNameTr}
• Minimum Başlangıç Maliyeti: ${h.budget.initial_setup_min} TL
• Haftalık Süre: ${h.time_commitment.min_hours_weekly} saat

🚀 İLK 20 DAKİKA EYLEMİ:
${h.first_action.description}

⚠️ DİKKAT EDİLECEK RİSKLER (FRICTION):
${h.friction_points.map(p => `- ${p}`).join('\n')}
  `.trim();

  navigator.clipboard.writeText(planText).then(() => {
    showToast('Plan panoya kopyalandı! 📋');
  }).catch(() => {
    showToast('Kopyalandı!');
  });
}

function initEventListeners() {
  openWizardBtn.addEventListener('click', openWizard);
  navWizardBtn.addEventListener('click', openWizard);
  closeWizardBtn.addEventListener('click', closeWizard);
  wizardNextBtn.addEventListener('click', handleWizardNext);
  wizardPrevBtn.addEventListener('click', handleWizardPrev);

  btnRecalculate.addEventListener('click', openWizard);

  const btnUpgradeTest = document.getElementById('btn-upgrade-test');
  if (btnUpgradeTest) {
    btnUpgradeTest.addEventListener('click', () => {
      if (btnUpgradeTest.dataset.mode) startTestInMode(btnUpgradeTest.dataset.mode);
    });
  }

  document.querySelectorAll('[data-launch-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-launch-mode');
      if (mode && MODE_KEYS.includes(mode)) {
        startTestInMode(mode);
      }
    });
  });

  closeDetailBtn.addEventListener('click', closeHobbyDetail);
  btnCloseDetailCta.addEventListener('click', closeHobbyDetail);
  btnShareHobby.addEventListener('click', copyCurrentHobbyPlan);

  btnMethodology.addEventListener('click', () => methodologyModal.classList.remove('hidden'));
  closeMethodologyBtn.addEventListener('click', () => methodologyModal.classList.add('hidden'));
  btnCloseMethodology.addEventListener('click', () => methodologyModal.classList.add('hidden'));

  [wizardModal, detailModal, methodologyModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });

  document.getElementById('btn-show-all-hobbies').addEventListener('click', () => {
    document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' });
  });

  categoryFilterBar.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    categoryFilterBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFilteredCategory = pill.getAttribute('data-category');
    currentVisibleLimit = ITEMS_PER_PAGE;
    saveCatalogFilters();
    renderCatalogGrid();
  });

  if (recCategoryFilterBar) {
    recCategoryFilterBar.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;
      recCategoryFilterBar.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      recActiveCategory = pill.getAttribute('data-category');
      renderTopMatches();

      const quizState = getStorage(STORAGE_KEYS.QUIZ_STATE, {});
      quizState.recActiveCategory = recActiveCategory;
      setStorage(STORAGE_KEYS.QUIZ_STATE, quizState);
    });
  }

  if (matchThresholdSlider) {
    matchThresholdSlider.addEventListener('input', (e) => {
      currentThresholdPercent = Number(e.target.value);
      updateThresholdAndFilter(false);

      const quizState = getStorage(STORAGE_KEYS.QUIZ_STATE, {});
      quizState.threshold = currentThresholdPercent;
      setStorage(STORAGE_KEYS.QUIZ_STATE, quizState);
    });
  }

  hobbySearchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value;
    currentVisibleLimit = ITEMS_PER_PAGE;
    saveCatalogFilters();
    renderCatalogGrid();
  });

  budgetFilterSelect.addEventListener('change', (e) => {
    activeBudgetFilter = e.target.value;
    currentVisibleLimit = ITEMS_PER_PAGE;
    saveCatalogFilters();
    renderCatalogGrid();
  });

  locationFilterSelect.addEventListener('change', (e) => {
    activeLocationFilter = e.target.value;
    currentVisibleLimit = ITEMS_PER_PAGE;
    saveCatalogFilters();
    renderCatalogGrid();
  });

  // Filtreleri sıfırla butonu
  const btnResetCatalogFilters = document.getElementById('btn-reset-catalog-filters');
  if (btnResetCatalogFilters) {
    btnResetCatalogFilters.addEventListener('click', resetCatalogFilters);
  }

  // Önerileri temizle butonu
  const btnClearRecommendations = document.getElementById('btn-clear-recommendations');
  if (btnClearRecommendations) {
    btnClearRecommendations.addEventListener('click', clearRecommendations);
  }

  // Detay modalındaki favori butonu
  const modalFavBtn = document.getElementById('modal-fav-btn');
  if (modalFavBtn) {
    modalFavBtn.addEventListener('click', () => {
      if (activeHobbyForModal) {
        toggleFavoriteHobby(activeHobbyForModal.id);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      wizardModal.classList.add('hidden');
      detailModal.classList.add('hidden');
      methodologyModal.classList.add('hidden');
    }
  });

  initScreentimeCalculator();
}

function initScreentimeCalculator() {
  const slider = document.getElementById('screentime-slider');
  const hoursDisplay = document.getElementById('st-hours-display');
  const sliderCaption = document.getElementById('st-slider-caption');
  const yearlyHoursEl = document.getElementById('st-yearly-hours');
  const yearlyDaysEl = document.getElementById('st-yearly-days');
  const awakePercentEl = document.getElementById('st-awake-percent');
  const hobbiesMasteryEl = document.getElementById('st-hobbies-mastery');
  const calcInstrument = document.getElementById('st-calc-instrument');
  const calcBooks = document.getElementById('st-calc-books');
  const calcLoaves = document.getElementById('st-calc-loaves');
  const calcSport = document.getElementById('st-calc-sport');
  const calcCraft = document.getElementById('st-calc-craft');
  const calcLanguage = document.getElementById('st-calc-language');

  if (!slider) return;

  // Cihazda önceden kaydedilmiş ekran süresi varsa yükle
  const savedSt = getStorage(STORAGE_KEYS.SCREENTIME);
  if (savedSt !== null && !isNaN(savedSt)) {
    slider.value = savedSt;
  }

  function updateValues(hours) {
    const formattedHours = Number.isInteger(hours) ? hours : hours.toFixed(1);
    if (hoursDisplay) hoursDisplay.textContent = formattedHours;
    if (sliderCaption) sliderCaption.textContent = `Günde ${formattedHours} Saat`;

    const yearlyHours = Math.round(hours * 365);
    const yearlyDays = Math.round(yearlyHours / 24);
    const awakePercent = Math.min(100, Math.round((hours / 16) * 100));
    const masteryCount = Math.max(1, Math.floor(yearlyHours / 365));

    if (yearlyHoursEl) yearlyHoursEl.textContent = `${yearlyHours.toLocaleString('tr-TR')} Saat / Yıl`;
    if (yearlyDaysEl) yearlyDaysEl.textContent = `= Tam ${yearlyDays} gün kesintisiz ekran!`;
    if (awakePercentEl) awakePercentEl.textContent = `%${awakePercent} Kayıp`;
    if (hobbiesMasteryEl) hobbiesMasteryEl.textContent = masteryCount > 1 ? `${masteryCount} - ${masteryCount + 1}` : '1 - 2';

    const achieveHoursHighlight = document.getElementById('st-achieve-hours-highlight');
    if (achieveHoursHighlight) achieveHoursHighlight.textContent = `${yearlyHours.toLocaleString('tr-TR')} Saatte`;

    const lossDescDays = document.getElementById('loss-desc-days');
    if (lossDescDays) {
      lossDescDays.textContent = `${yearlyDays} gün kayıp • Odak tükenişi & 0 kalıcı eser`;
    }

    if (calcInstrument) calcInstrument.textContent = Math.max(2, Math.round(yearlyHours / 180));
    if (calcBooks) calcBooks.textContent = Math.max(4, Math.round(yearlyHours / 35));
    if (calcLoaves) calcLoaves.textContent = `${Math.max(25, Math.round(yearlyHours / 10))}+`;
    if (calcSport) calcSport.textContent = Math.max(30, Math.round(yearlyHours / 7));
    if (calcCraft) calcCraft.textContent = `${Math.max(10, Math.round(yearlyHours / 22))}+`;
    if (calcLanguage) {
      calcLanguage.textContent = yearlyHours >= 700 ? 'C1' : (yearlyHours >= 450 ? 'B2' : (yearlyHours >= 250 ? 'B1' : 'A2'));
    }
  }

  slider.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    updateValues(val);
    setStorage(STORAGE_KEYS.SCREENTIME, val);
  });

  // initial call
  updateValues(parseFloat(slider.value));

  // Navigation and CTA buttons
  const btnNavManifesto = document.getElementById('btn-nav-manifesto');
  if (btnNavManifesto) {
    btnNavManifesto.addEventListener('click', () => {
      document.getElementById('screen-time-manifesto')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const manifestoStartWizard = document.getElementById('manifesto-start-wizard-btn');
  if (manifestoStartWizard) {
    manifestoStartWizard.addEventListener('click', openWizard);
  }

  const manifestoViewCatalog = document.getElementById('manifesto-view-catalog-btn');
  if (manifestoViewCatalog) {
    manifestoViewCatalog.addEventListener('click', () => {
      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  restoreCatalogFilters();
  updateCategoryFilterPills();
  renderCatalogGrid();
  initEventListeners();

  // Her cihazda daha önce tamamlanmış hobi testi varsa otomatik yükle
  const savedQuiz = getStorage(STORAGE_KEYS.QUIZ_STATE);
  if (savedQuiz && savedQuiz.completed) {
    finishWizardAndShowResults(true); // Sessizce sonuçları açar, sayfayı zıplatmaz
  }
});
