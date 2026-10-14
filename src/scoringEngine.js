/**
 * Hobin Ağırlıklı Puanlama ve Karar Destek Motoru (v4 — Çok Boyutlu & Yüksek Keskinlik)
 *
 * Test Modları & Soru Kapsamları:
 *   ⚡ Hızlı Test (8 Soru): İlgi, Bütçe, Süre, Ekran/Analog, Mekan, Fiziksel Efor, Dağınıklık, Gürültü.
 *   ⚖️ Dengeli Test (14 Soru): Hızlı + Seans Süresi, İlk Ödül Hızı, Aylık Sarf Gideri, Saklama Alanı, Zihinsel Mod, Sosyal Tarz.
 *   🔬 Detaylı Test (20 Soru): Dengeli + Taşınabilirlik, Çıktı Biçimi, Kuralcılık/Hata Payı, Duyusal Çekim, İlerleme Ritmi, Pazarlıksız Kırmızı Çizgi.
 */

const WEIGHTS = {
  interest: 18,
  budget: 20,
  monthly: 12,
  time: 15,
  screenAttitude: 16,
  location: 16,
  physical: 16,
  mess: 10,
  noise: 8,
  sessionLength: 10,
  firstWin: 8,
  storageFootprint: 10,
  mentalState: 12,
  socialStyle: 8,
  portability: 11,
  outputType: 12,
  structureStyle: 8,
  sensoryPreference: 11,
  pacingStyle: 8
};

/**
 * Moda özel kalibrasyon profilleri.
 *  exponent : ham skor → yüzde eğrisinin üssü (büyüdükçe üst bant sıkılaşır)
 *  blend    : geometrik ortalamanın payı (büyüdükçe tek zıtlık daha sert cezalandırılır)
 *  maxPct   : ulaşılabilecek en yüksek yüzde
 */
export const MODE_PROFILES = {
  quick: { exponent: 1.55, blend: 0.50, maxPct: 94 },
  balanced: { exponent: 1.80, blend: 0.62, maxPct: 97 },
  detailed: { exponent: 2.10, blend: 0.75, maxPct: 99 }
};

// Öncelik sorusunda seçilen kriterin ağırlık çarpanı ve uyum katılığı (fit^x)
const PRIORITY_WEIGHT_BOOST = 2.4;
const PRIORITY_FIT_STRICTNESS = 1.7;

// Öncelik cevabı → etkilenen kriter anahtar(lar)ı
const PRIORITY_TARGETS = {
  interest: ['interest'],
  budget: ['budget', 'monthly'],
  time: ['time', 'sessionLength'],
  no_screen: ['screenAttitude'],
  location: ['location'],
  physical: ['physical'],
  calm: ['noise', 'mess'],
  portability: ['portability'],
  firstWin: ['firstWin']
};

const INDIFFERENT_WEIGHT_FACTOR = 0.45;
const NEUTRAL_FIT = 0.7;
const FIT_FLOOR = 0.03;

const BUDGET_LIMITS = { low: 800, medium: 2500 };

const MODERATE_PHYSICAL_IDS = new Set([
  'yoga-vinyasa',
  'tai-chi-chuan',
  'pilates-mat',
  'archery-traditional',
  'slackline-balance',
  'trail-hiking',
  'table-tennis',
  'hula-hooping-flow',
  'kayaking-paddle',
  'paddleboarding-sup'
]);

const LOCATION_MATRIX = {
  indoor_desk: { indoor_desk: 1, indoor_room: 0.5, outdoor: 0.08, specialized_venue: 0.08 },
  indoor_room: { indoor_room: 1, indoor_desk: 0.85, outdoor: 0.12, specialized_venue: 0.12 },
  outdoor: { outdoor: 1, specialized_venue: 0.45, indoor_room: 0.12, indoor_desk: 0.06 },
  specialized_venue: { specialized_venue: 1, outdoor: 0.5, indoor_room: 0.15, indoor_desk: 0.06 }
};

const INTEREST_MATRIX = {
  craft_making: { craft_making: 1, collecting_curation: 0.45, digital_creative: 0.35, mental_focus: 0.3, physical_movement: 0.08 },
  mental_focus: { mental_focus: 1, digital_creative: 0.5, collecting_curation: 0.4, craft_making: 0.3, physical_movement: 0.08 },
  physical_movement: { physical_movement: 1, collecting_curation: 0.15, craft_making: 0.08, mental_focus: 0.08, digital_creative: 0.05 },
  digital_creative: { digital_creative: 1, mental_focus: 0.5, craft_making: 0.3, collecting_curation: 0.2, physical_movement: 0.05 },
  collecting_curation: { collecting_curation: 1, craft_making: 0.4, mental_focus: 0.4, digital_creative: 0.2, physical_movement: 0.12 }
};

const INTEREST_LABELS = {
  craft_making: 'elle somut bir şey üretme',
  mental_focus: 'zihinsel odak ve strateji',
  physical_movement: 'bedeni hareket ettirme',
  digital_creative: 'dijital üretim',
  collecting_curation: 'keşif, tadım ve koleksiyon'
};

const TASTE_SMELL_IDS = new Set([
  'gourmet-chocolatier',
  'bread-baking-sourdough',
  'coffee-brewing-specialty',
  'tea-ceremony-gongfu',
  'fermentation-kombucha',
  'hot-sauce-making',
  'natural-perfumery',
  'soap-making',
  'cocktail-mixology',
  'cheese-making-home'
]);

const PORTABLE_TAGS = new Set([
  'taşınabilir', 'seyahat', 'park', 'yürüyüş', 'koşu', 'küçük', 'hafif',
  'sokak', 'defter', 'kart', 'taş', 'kitap', 'kalem', 'çakı', 'tığ', 'şiş'
]);

const PORTABLE_SPECIFIC_IDS = new Set([
  'origami-folding', 'rubiks-speedcubing', 'card-magic', 'haiku-poetry',
  'sudoku-logic-puzzles', 'travel-sketching', 'whittling-wood-carving',
  'knitting-basics', 'crochet-amigurumi', 'tarot-symbolism',
  'astronomy-stargazing', 'street-photography', 'birdwatching-nature',
  'slackline-balance', 'jump-rope-freestyle', 'skateboarding-cruiser'
]);

const HEAVY_STORAGE_IDS = new Set([
  'pottery-craft', 'leatherworking-wallet', 'linocut-printmaking',
  'indoor-rowing', 'gravel-cycling'
]);

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a, b, t) => a + (b - a) * clamp(t);
const isAnswered = v => v !== undefined && v !== null && v !== '';

function getActivityLevel(hobby) {
  if (hobby.category === 'physical_movement') {
    return MODERATE_PHYSICAL_IDS.has(hobby.id) ? 2 : 3;
  }
  if (hobby.environment.location === 'outdoor') return 1;
  if (hobby.environment.location === 'indoor_room') return 0.5;
  return 0;
}

function formatTL(value) {
  return `${Number(value).toLocaleString('tr-TR')} TL`;
}

function checkIsPortable(hobby) {
  if (hobby.environment.location === 'outdoor') return true;
  if (PORTABLE_SPECIFIC_IDS.has(hobby.id)) return true;
  return (hobby.tags || []).some(t => PORTABLE_TAGS.has(t));
}

function checkIsTasteSmell(hobby) {
  if (TASTE_SMELL_IDS.has(hobby.id)) return true;
  return (hobby.tags || []).some(t =>
    ['kahve', 'çay', 'tadım', 'ekmek', 'fermantasyon', 'lezzet', 'koku', 'gurme', 'mutfak', 'sos', 'baharat', 'sabun', 'mum'].includes(t)
  );
}

// ---------------------------------------------------------------------------
// 20 Kriter Değerlendirme Fonksiyonları
// ---------------------------------------------------------------------------

// 1. İlgi Alanı (interest)
function scoreInterest(hobby, prefs) {
  const pref = prefs.interest;
  if (pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.interest * INDIFFERENT_WEIGHT_FACTOR };
  }
  let fit = INTEREST_MATRIX[pref]?.[hobby.category] ?? 0.3;
  if (pref === 'physical_movement' && hobby.category !== 'physical_movement' && hobby.environment.location === 'outdoor') {
    fit = Math.max(fit, 0.35);
  }
  return {
    fit,
    weight: WEIGHTS.interest,
    reason: fit >= 1 ? `Aradığınız "${INTEREST_LABELS[pref]}" deneyiminin tam merkezinde.` : null,
    caveat: fit < 0.35 ? `Beklentiniz olan ${INTEREST_LABELS[pref]} odağından oldukça uzak.` : null,
    reasonPriority: 3
  };
}

// 2. Başlangıç Bütçesi (budgetLimit)
function scoreBudget(hobby, prefs) {
  const setup = hobby.budget.initial_setup_min;
  const monthly = hobby.budget.monthly_recurring_min || 0;
  const pref = prefs.budgetLimit;
  const considerMonthly = !isAnswered(prefs.monthlyBudget);
  let fit;
  let weight = WEIGHTS.budget;
  let reason = null;
  let caveat = null;

  if (pref === 'zero') {
    if (setup === 0) fit = 1;
    else if (setup <= 150) fit = 0.45;
    else if (setup <= 400) fit = 0.2;
    else fit = 0.03;
    if (considerMonthly && monthly > 0) fit *= monthly <= 100 ? 0.85 : 0.6;

    if (setup === 0 && (monthly === 0 || !considerMonthly)) reason = 'Tamamen sıfır maliyetle anında başlanabilir.';
    else if (setup > 0) caveat = `Sıfır bütçe hedefinize karşın min. ${formatTL(setup)} başlangıç gerektirir.`;
    else caveat = `Başlangıç ücretsiz ama aylık ~${formatTL(monthly)} sarf gideri var.`;
  } else if (pref === 'low' || pref === 'medium') {
    const limit = BUDGET_LIMITS[pref];
    const ratio = setup / limit;
    if (ratio <= 0.5) fit = 1 - ratio * 0.08;
    else if (ratio <= 1) fit = lerp(0.96, 0.82, (ratio - 0.5) / 0.5);
    else fit = Math.max(0.03, 0.82 - (ratio - 1) * 1.15);

    const monthlyRatio = monthly / limit;
    if (considerMonthly && monthlyRatio > 0.4) fit *= clamp(1 - (monthlyRatio - 0.4) * 0.6, 0.6, 1);

    if (ratio <= 1 && fit >= 0.82) {
      reason = setup === 0
        ? 'Ücretsiz başlanabiliyor; bütçenize hiç yük bindirmez.'
        : `Bütçenize uygun: başlangıç seti yaklaşık ${formatTL(setup)}.`;
    } else if (ratio > 1) {
      caveat = `Bütçe sınırınızı aşıyor (min. ${formatTL(setup)}).`;
    }
  } else {
    weight *= INDIFFERENT_WEIGHT_FACTOR;
    fit = clamp(0.72 - setup / 20000, 0.6, 0.72);
  }

  return { fit, weight, reason, caveat, reasonPriority: pref === 'zero' ? 3 : 2 };
}

// 3. Haftalık Süre (weeklyHours)
function scoreTime(hobby, prefs) {
  const required = hobby.time_commitment.min_hours_weekly;
  const userHours = Number(prefs.weeklyHours);
  const prep = hobby.time_commitment.prep_cleanup_overhead_minutes;
  let reason = null;
  let caveat = null;

  let hoursFit;
  if (userHours >= required) {
    const surplus = userHours - required;
    hoursFit = surplus > 3 ? Math.max(0.8, 1 - (surplus - 3) * 0.06) : 1;
  } else {
    hoursFit = Math.pow(userHours / required, 1.8);
  }

  const prepFit = clamp(1 - prep * 0.006 - Math.max(0, prep - 5) * 0.022, 0.2, 1);
  const prepShare = userHours <= 2 ? 0.4 : userHours <= 4 ? 0.3 : 0.2;
  const fit = hoursFit * (1 - prepShare) + prepFit * prepShare;

  if (userHours < required) {
    caveat = `Haftada en az ${required} saat ister; ayırabileceğiniz süre ${userHours} saat.`;
  } else if (prep >= 15) {
    caveat = `Her seans için ~${prep} dk hazırlık/temizlik gerekir.`;
  }

  if (hoursFit >= 1 && prepFit >= 0.8) {
    reason = prep <= 5
      ? `Haftalık ${userHours} saatinize sığar ve neredeyse hiç hazırlık istemez.`
      : `Haftalık ${userHours} saatinize rahatça sığar (gereken: ${required} sa/hf).`;
  }

  return { fit, weight: WEIGHTS.time, reason, caveat, reasonPriority: 1 };
}

// 4. Ekran ve Dijital Yorgunluk Tutumu (screenAttitude)
function scoreScreen(hobby, prefs) {
  const pref = prefs.screenAttitude;
  const isDigitalHobby = hobby.category === 'digital_creative';

  if (!pref || pref === 'flexible') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.screenAttitude * INDIFFERENT_WEIGHT_FACTOR };
  }

  if (pref === 'no_screen') {
    if (isDigitalHobby) {
      return {
        fit: 0.02,
        weight: WEIGHTS.screenAttitude,
        caveat: 'Ekran başında yapılan dijital bir uğraştır; ekran detoksu hedefinize uymaz.',
        reasonPriority: 3
      };
    }
    const isDesk = hobby.environment.location === 'indoor_desk';
    return {
      fit: isDesk ? 0.95 : 1.0,
      weight: WEIGHTS.screenAttitude,
      reason: 'Tamamen ekrandan uzak, dokunsal ve zihni dinlendiren bir deneyim sunar.',
      reasonPriority: 3
    };
  }

  // screen_preferred
  if (isDigitalHobby) {
    return {
      fit: 1.0,
      weight: WEIGHTS.screenAttitude,
      reason: 'Bilgisayar başında yazılım ve dijital üretkenlik beklentinize birebir uyar.',
      reasonPriority: 2
    };
  }
  const isDeskNonDigital = hobby.environment.location === 'indoor_desk';
  return {
    fit: isDeskNonDigital ? 0.35 : 0.08,
    weight: WEIGHTS.screenAttitude,
    caveat: 'Fiziksel/manuel bir uğraştır; dijital üretim veya kodlama içermez.',
    reasonPriority: 1
  };
}

// 5. Mekan Tercihi (location)
function scoreLocation(hobby, prefs) {
  const pref = prefs.location;
  const loc = hobby.environment.location;

  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.location * INDIFFERENT_WEIGHT_FACTOR };
  }

  const fit = (LOCATION_MATRIX[pref] && LOCATION_MATRIX[pref][loc]) ?? 0.1;
  const labels = {
    indoor_desk: 'çalışma masanızda',
    indoor_room: 'evde bir köşede',
    outdoor: 'açık havada',
    specialized_venue: 'salon/atölyede'
  };

  return {
    fit,
    weight: WEIGHTS.location,
    reason: fit >= 1 ? `Tam istediğiniz gibi ${labels[loc]} yapılır.` : null,
    caveat: fit < 0.5 ? `Tercihinizin aksine ${labels[loc] || 'farklı bir mekanda'} yapılır.` : null,
    reasonPriority: 2
  };
}

// 6. Fiziksel Efor Seviyesi (physicalIntensity)
function scorePhysical(hobby, prefs) {
  const pref = prefs.physicalIntensity;
  const level = getActivityLevel(hobby);

  if (!pref || pref === 'flexible') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.physical * INDIFFERENT_WEIGHT_FACTOR };
  }

  const tables = {
    sedentary: { 0: 1, 0.5: 0.85, 1: 0.55, 2: 0.15, 3: 0.03 },
    light: { 0: 0.5, 0.5: 0.8, 1: 1, 2: 0.9, 3: 0.3 },
    active: { 0: 0.03, 0.5: 0.08, 1: 0.3, 2: 0.7, 3: 1 }
  };
  const fit = tables[pref]?.[level] ?? 0.5;

  let reason = null;
  let caveat = null;
  if (fit >= 0.9) {
    reason = {
      sedentary: 'Oturarak, bedensel yorgunluk olmadan dinginlikle yapılır.',
      light: 'Aşırı yormayan, dengeli bir hareketlilik sunar.',
      active: 'Enerjinizi boşaltacak yüksek tempolu fiziksel aktivite sağlar!'
    }[pref];
  } else if (fit < 0.4) {
    caveat = level > 1.5
      ? 'Beklediğinizden fazla fiziksel efor ve terleme gerektirir.'
      : 'Fiziksel hareket beklentinize göre fazla durağan kalır.';
  }

  return { fit, weight: WEIGHTS.physical, reason, caveat, reasonPriority: 2 };
}

// 7. Dağınıklık Toleransı (messTolerance)
function scoreMess(hobby, prefs) {
  const pref = prefs.messTolerance;
  const mess = hobby.environment.mess_level;

  if (!pref || pref === 'heavy') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.mess * INDIFFERENT_WEIGHT_FACTOR };
  }

  const tables = {
    clean: { clean: 1, moderate: 0.4, dust_chemical_heavy: 0.04 },
    moderate: { clean: 1, moderate: 0.95, dust_chemical_heavy: 0.3 }
  };
  const fit = tables[pref]?.[mess] ?? 0.7;

  return {
    fit,
    weight: WEIGHTS.mess,
    reason: pref === 'clean' && mess === 'clean' ? 'Temiz ve lekesiz; masanız düzenli kalır.' : null,
    caveat: fit < 0.5
      ? (mess === 'dust_chemical_heavy' ? 'Toz, çamur veya kimyasal leke üretir; izole bir köşe ister.' : 'Kırıntı/kırpıntı gibi hafif dağınıklık yaratır.')
      : null,
    reasonPriority: 1
  };
}

// 8. Ses ve Gürültü Düzeyi (noiseTolerance)
function scoreNoise(hobby, prefs) {
  const pref = prefs.noiseTolerance;
  const noise = hobby.environment.noise_level;

  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.noise * INDIFFERENT_WEIGHT_FACTOR };
  }
  if (pref === 'moderate') {
    return { fit: noise === 'silent' || noise === 'moderate' ? 1 : 0.5, weight: WEIGHTS.noise * 0.7 };
  }

  const fit = noise === 'silent' ? 1 : noise === 'moderate' ? 0.25 : 0.04;
  return {
    fit,
    weight: WEIGHTS.noise,
    reason: fit >= 1 ? 'Tamamen sessiz; geceleri veya apartmanda sorunsuz.' : null,
    caveat: fit < 1 ? 'Ses çıkarır; sessizlik hassasiyetinizle çelişebilir.' : null,
    reasonPriority: 1
  };
}

// 9. Seans Başına Odak Süresi (sessionLength)
function scoreSessionLength(hobby, prefs) {
  const pref = prefs.sessionLength;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.sessionLength * INDIFFERENT_WEIGHT_FACTOR };
  }
  const prep = hobby.time_commitment.prep_cleanup_overhead_minutes || 0;
  const firstAction = hobby.first_action?.duration_minutes || 20;

  if (pref === 'micro') {
    let fit = 1.0;
    if (prep > 15) fit = 0.2;
    else if (prep > 10) fit = 0.5;
    else if (firstAction > 30) fit = 0.65;

    return {
      fit,
      weight: WEIGHTS.sessionLength,
      reason: fit >= 0.85 ? '15-20 dakikalık molalarda bile hızlıca başlatılıp bırakılabilir.' : null,
      caveat: fit < 0.5 ? 'Hazırlık ve toparlanma süreci kısa mikro seanslara pek uygun değildir.' : null,
      reasonPriority: 1
    };
  }

  // deep
  const fit = (prep >= 10 || hobby.time_commitment.min_hours_weekly >= 3) ? 1.0 : 0.8;
  return {
    fit,
    weight: WEIGHTS.sessionLength,
    reason: fit >= 1 ? 'Uzun odaklanma seanslarında dünyaya kapıları kapatıp akışa girmek için idealdir.' : null,
    reasonPriority: 1
  };
}

// 10. İlk Başarı & Ödül Hızı (firstWinSpeed)
function scoreFirstWin(hobby, prefs) {
  const pref = prefs.firstWinSpeed;
  const curve = hobby.time_commitment.learning_curve_to_first_win;

  const tables = {
    immediate: { immediate_day1: 1, short_1_week: 0.5, medium_1_month: 0.2, steep_3_months_plus: 0.05 },
    patient: { immediate_day1: 0.85, short_1_week: 1, medium_1_month: 0.85, steep_3_months_plus: 0.6 }
  };
  let fit = tables[pref]?.[curve] ?? 0.7;
  const firstActionMin = hobby.first_action?.duration_minutes ?? 20;
  if (pref === 'immediate') fit *= clamp(1 - Math.max(0, firstActionMin - 15) * 0.004, 0.85, 1);
  const weight = pref === 'patient' ? WEIGHTS.firstWin * 0.6 : WEIGHTS.firstWin;

  return {
    fit,
    weight,
    reason: pref === 'immediate' && curve === 'immediate_day1' ? 'İlk günden somut bir başarı ve tatmin hissi sağlar.' : null,
    caveat: pref === 'immediate' && curve !== 'immediate_day1' ? 'İlk somut çıktıyı almak birkaç gün–hafta sabır ister.' : null,
    reasonPriority: 1
  };
}

// 11. Aylık Düzenli Sarf Gideri (monthlyBudget)
function scoreMonthly(hobby, prefs) {
  const pref = prefs.monthlyBudget;
  const monthly = hobby.budget.monthly_recurring_min || 0;

  if (!pref || pref === 'any') {
    return { fit: clamp(0.72 - monthly / 5000, 0.6, 0.72), weight: WEIGHTS.monthly * INDIFFERENT_WEIGHT_FACTOR };
  }

  let fit;
  if (pref === 'none') {
    fit = monthly === 0 ? 1 : monthly <= 50 ? 0.6 : monthly <= 150 ? 0.3 : 0.05;
  } else {
    const limit = pref === 'up_to_200' ? 200 : 500;
    if (monthly <= limit) fit = 1 - (monthly / limit) * 0.1;
    else fit = Math.max(0.04, 0.9 - ((monthly - limit) / limit) * 1.4);
  }

  return {
    fit,
    weight: WEIGHTS.monthly,
    reason: fit >= 1 && monthly === 0 ? 'Sürekli sarf gideri yok; ay sonunda sürpriz fatura çıkarmaz.' : null,
    caveat: fit < 0.7 ? `Aylık ~${formatTL(monthly)} sarf/üyelik gideri var.` : null,
    reasonPriority: 1
  };
}

// 12. Ekipman Saklama ve Alan Kaplama (storageFootprint)
function scoreStorage(hobby, prefs) {
  const pref = prefs.storageFootprint;
  if (!pref || pref === 'dedicated') {
    return { fit: 0.9, weight: WEIGHTS.storageFootprint * INDIFFERENT_WEIGHT_FACTOR };
  }
  const isHeavy = HEAVY_STORAGE_IDS.has(hobby.id) ||
    hobby.environment.mess_level === 'dust_chemical_heavy' ||
    hobby.environment.location === 'specialized_venue' ||
    (hobby.starter_kit && hobby.starter_kit.length >= 4 && hobby.budget.initial_setup_min >= 1000);

  const isCompact = hobby.category === 'digital_creative' ||
    hobby.environment.location === 'indoor_desk' ||
    checkIsPortable(hobby);

  if (pref === 'pocket') {
    let fit = isCompact ? 1.0 : isHeavy ? 0.08 : 0.6;
    return {
      fit,
      weight: WEIGHTS.storageFootprint,
      reason: fit >= 0.95 ? 'Tek bir çekmeceye veya çantaya sığar; evde sıfır yer kaplar.' : null,
      caveat: fit < 0.4 ? 'Geniş ekipman ve özel köşe gerektirebilir.' : null,
      reasonPriority: 1
    };
  }

  // box
  let fit = isHeavy ? 0.35 : 1.0;
  return {
    fit,
    weight: WEIGHTS.storageFootprint,
    reason: fit >= 0.9 ? 'Bir kutu veya raf yeterlidir; evinizi işgal etmez.' : null,
    caveat: fit < 0.5 ? 'Özel depolama ve geniş çalışma alanı isteyebilir.' : null,
    reasonPriority: 1
  };
}

// 13. Zihinsel Mod & Temel Amaç (mentalState)
function scoreMentalState(hobby, prefs) {
  const pref = prefs.mentalState;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.mentalState * INDIFFERENT_WEIGHT_FACTOR };
  }

  const tags = hobby.tags || [];
  const isZenHobby = tags.some(t => ['meditatif', 'huzur', 'zen', 'nefes', 'yoga', 'origami', 'doğa', 'çay', 'bitki', 'yürüyüş', 'sessiz', 'sabun', 'örgü', 'nakış', 'akvaryum'].includes(t));
  const isChallengeHobby = hobby.category === 'mental_focus' || tags.some(t => ['strateji', 'satranç', 'kodlama', 'bulmaca', 'go', 'küp', 'mantık', 'hafıza', 'python', 'hız', 'refleks', 'bouldering'].includes(t));
  const isCreativeHobby = hobby.category === 'craft_making' || tags.some(t => ['sanat', 'tasarım', 'yazı', 'resim', 'boya', 'müzik', 'fotoğraf', 'estetik', 'şiir'].includes(t));

  let fit = 0.5;
  let reason = null;
  if (pref === 'zen') {
    fit = isZenHobby ? 1.0 : isChallengeHobby ? 0.15 : 0.65;
    if (fit >= 0.9) reason = 'Günün stresini arındıran dingin ve meditatif bir sığınak sunar.';
  } else if (pref === 'challenge') {
    fit = isChallengeHobby ? 1.0 : isZenHobby ? 0.3 : 0.6;
    if (fit >= 0.9) reason = 'Zihninizi zorlayacak derin strateji ve problem çözme keyfi verir.';
  } else if (pref === 'creative_spark') {
    fit = isCreativeHobby ? 1.0 : isChallengeHobby ? 0.45 : 0.65;
    if (fit >= 0.9) reason = 'İçinizdeki yaratıcı üretme arzusunu ve estetik ifadeyi besler.';
  }

  return { fit, weight: WEIGHTS.mentalState, reason, reasonPriority: 2 };
}

// 14. Sosyal Dinamik (socialStyle)
function scoreSocial(hobby, prefs) {
  const pref = prefs.socialStyle;
  const social = hobby.environment.social_dynamic;

  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.socialStyle * INDIFFERENT_WEIGHT_FACTOR };
  }

  const tables = {
    solo: { solo: 1, hybrid: 0.75 },
    social: { hybrid: 1, solo: 0.45 }
  };
  const fit = tables[pref]?.[social] ?? 0.6;

  return {
    fit,
    weight: WEIGHTS.socialStyle,
    reason: pref === 'social' && fit >= 1 ? 'Toplulukla, kulüplerde veya arkadaşlarla birlikte yapılabilir.' : null,
    caveat: pref === 'social' && fit < 0.5 ? 'Ağırlıklı olarak tek başına yapılan bir uğraş.' : null,
    reasonPriority: 1
  };
}

// 15. Taşınabilirlik (portability)
function scorePortability(hobby, prefs) {
  const pref = prefs.portability;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.portability * INDIFFERENT_WEIGHT_FACTOR };
  }
  const isPort = checkIsPortable(hobby);

  if (pref === 'portable') {
    const fit = isPort ? 1.0 : 0.12;
    return {
      fit,
      weight: WEIGHTS.portability,
      reason: fit >= 1 ? 'Çantanıza atıp kafede, parkta veya seyahatte kolayca yapabilirsiniz.' : null,
      caveat: fit < 0.3 ? 'Taşınamaz; evde sabit tezgah veya özel alan ister.' : null,
      reasonPriority: 2
    };
  }

  // fixed
  const isIndoor = hobby.environment.location === 'indoor_desk' || hobby.environment.location === 'indoor_room';
  const fit = isIndoor ? 1.0 : 0.3;
  return { fit, weight: WEIGHTS.portability, reasonPriority: 1 };
}

// 16. Çıktı Biçimi (outputType)
function scoreOutputType(hobby, prefs) {
  const pref = prefs.outputType;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.outputType * INDIFFERENT_WEIGHT_FACTOR };
  }

  let fit = 0.5;
  let reason = null;
  let caveat = null;

  if (pref === 'physical_object') {
    if (hobby.category === 'craft_making' || checkIsTasteSmell(hobby)) {
      fit = 1.0;
      reason = 'Elinizde tutabileceğiniz, evinize koyup hediye edebileceğiniz somut eserler üretir.';
    } else if (hobby.category === 'digital_creative') {
      fit = 0.15;
      caveat = 'Fiziksel nesne yerine dijital dosya üretir.';
    } else if (hobby.category === 'physical_movement') {
      fit = 0.10;
      caveat = 'Somut nesne bırakmaz; bedensel kondisyon ve enerji kazandırır.';
    } else {
      fit = 0.35;
    }
  } else if (pref === 'digital_skill') {
    if (hobby.category === 'digital_creative' || hobby.category === 'mental_focus') {
      fit = 1.0;
      reason = 'Dijital beceri, yeni bir yazılım veya zihinsel strateji uzmanlığı kazandırır.';
    } else {
      fit = 0.25;
    }
  } else if (pref === 'experience_curation') {
    if (hobby.category === 'collecting_curation' || checkIsTasteSmell(hobby) || hobby.environment.location === 'outdoor') {
      fit = 1.0;
      reason = 'Tadım, keşif, koleksiyon ve anılarla zenginleşen derin bir yaşam zevki sunar.';
    } else {
      fit = 0.4;
    }
  }

  return { fit, weight: WEIGHTS.outputType, reason, caveat, reasonPriority: 2 };
}

// 17. Kuralcılık ve Hassasiyet (structureStyle)
function scoreStructure(hobby, prefs) {
  const pref = prefs.structureStyle;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.structureStyle * INDIFFERENT_WEIGHT_FACTOR };
  }
  const tags = hobby.tags || [];
  const isPreciseHobby = hobby.category === 'digital_creative' ||
    tags.some(t => ['ölçüm', 'titiz', 'geometri', 'satranç', 'kodlama', 'küp', 'saat', 'deri', 'ahşap', 'ebru', 'kaligrafi', 'hat'].includes(t));

  if (pref === 'forgiving') {
    const fit = isPreciseHobby ? 0.3 : 1.0;
    return {
      fit,
      weight: WEIGHTS.structureStyle,
      reason: fit >= 0.9 ? 'Katı kuralları yoktur; hata kaldırmaya ve özgür doğaçlamaya uygundur.' : null,
      caveat: fit < 0.5 ? 'Milimetrik titizlik ve kural disiplini gerektirebilir.' : null,
      reasonPriority: 1
    };
  }

  // precise
  const fit = isPreciseHobby ? 1.0 : 0.45;
  return {
    fit,
    weight: WEIGHTS.structureStyle,
    reason: fit >= 0.9 ? 'Milimetrik disiplin ve teknik hassasiyet arayanlar için kusursuzdur.' : null,
    reasonPriority: 1
  };
}

// 18. Duyusal Çekim (sensoryPreference)
function scoreSensory(hobby, prefs) {
  const pref = prefs.sensoryPreference;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.sensoryPreference * INDIFFERENT_WEIGHT_FACTOR };
  }
  const tags = hobby.tags || [];

  if (pref === 'tactile') {
    const isTact = hobby.category === 'craft_making' || tags.some(t => ['kil', 'deri', 'ahşap', 'yün', 'ip', 'dikiş', 'nakış', 'örgü', 'makrome', 'mum', 'sabun'].includes(t));
    const fit = isTact ? 1.0 : 0.15;
    return {
      fit,
      weight: WEIGHTS.sensoryPreference,
      reason: fit >= 0.9 ? 'Parmaklarınızın ucuyla malzemeyi hissedeceğiniz zengin bir dokunsallık taşır.' : null,
      reasonPriority: 2
    };
  }
  if (pref === 'gustatory') {
    const isTaste = checkIsTasteSmell(hobby);
    const fit = isTaste ? 1.0 : 0.08;
    return {
      fit,
      weight: WEIGHTS.sensoryPreference,
      reason: fit >= 0.9 ? 'Koku ve tat duyularınızı uyaran zengin bir gastronomi keyfi yaşatır.' : null,
      caveat: fit < 0.2 ? 'Tat veya koku duyusuyla ilgili bir uğraş değildir.' : null,
      reasonPriority: 3
    };
  }
  if (pref === 'intellectual') {
    const isIntel = hobby.category === 'mental_focus' || hobby.category === 'digital_creative';
    const fit = isIntel ? 1.0 : 0.2;
    return {
      fit,
      weight: WEIGHTS.sensoryPreference,
      reason: fit >= 0.9 ? 'Soyut mantık ve zihinsel problem çözme odağındadır.' : null,
      reasonPriority: 2
    };
  }
  if (pref === 'visual') {
    const isVis = tags.some(t => ['sanat', 'tasarım', 'çizim', 'resim', 'boya', 'fotoğraf', 'estetik', 'renk'].includes(t)) || hobby.category === 'digital_creative';
    const fit = isVis ? 1.0 : 0.35;
    return {
      fit,
      weight: WEIGHTS.sensoryPreference,
      reason: fit >= 0.9 ? 'Renkler, kompozisyon ve görsel estetiğin ön planda olduğu bir deneyimdir.' : null,
      reasonPriority: 2
    };
  }
  return { fit: 0.7, weight: WEIGHTS.sensoryPreference * 0.5 };
}

// 19. İlerleme Ritmi (pacingStyle)
function scorePacing(hobby, prefs) {
  const pref = prefs.pacingStyle;
  if (!pref || pref === 'any') {
    return { fit: NEUTRAL_FIT, weight: WEIGHTS.pacingStyle * INDIFFERENT_WEIGHT_FACTOR };
  }
  const tags = hobby.tags || [];
  const isRepetitive = tags.some(t => ['örgü', 'makrome', 'koşu', 'yüzme', 'ip', 'kürek', 'ritim', 'döngü', 'meditatif', 'tekrar'].includes(t));

  if (pref === 'repetitive_flow') {
    const fit = isRepetitive ? 1.0 : 0.5;
    return {
      fit,
      weight: WEIGHTS.pacingStyle,
      reason: fit >= 0.9 ? 'Ritmik tekrarlarıyla zihni sakinleştiren hipnotik bir akış sunar.' : null,
      reasonPriority: 1
    };
  }
  // dynamic_variety
  const fit = isRepetitive ? 0.35 : 1.0;
  return {
    fit,
    weight: WEIGHTS.pacingStyle,
    reason: fit >= 0.9 ? 'Her seansta yeni senaryo ve farklı dinamiklerle monotonluktan uzaktır.' : null,
    reasonPriority: 1
  };
}

// ---------------------------------------------------------------------------
// Kriter Sözlüğü
// ---------------------------------------------------------------------------
const CRITERIA = [
  { key: 'interest', pref: 'interest', fn: scoreInterest },
  { key: 'budget', pref: 'budgetLimit', fn: scoreBudget },
  { key: 'time', pref: 'weeklyHours', fn: scoreTime },
  { key: 'screenAttitude', pref: 'screenAttitude', fn: scoreScreen },
  { key: 'location', pref: 'location', fn: scoreLocation },
  { key: 'physical', pref: 'physicalIntensity', fn: scorePhysical },
  { key: 'mess', pref: 'messTolerance', fn: scoreMess },
  { key: 'noise', pref: 'noiseTolerance', fn: scoreNoise },
  { key: 'sessionLength', pref: 'sessionLength', fn: scoreSessionLength },
  { key: 'firstWin', pref: 'firstWinSpeed', fn: scoreFirstWin },
  { key: 'monthly', pref: 'monthlyBudget', fn: scoreMonthly },
  { key: 'storageFootprint', pref: 'storageFootprint', fn: scoreStorage },
  { key: 'mentalState', pref: 'mentalState', fn: scoreMentalState },
  { key: 'socialStyle', pref: 'socialStyle', fn: scoreSocial },
  { key: 'portability', pref: 'portability', fn: scorePortability },
  { key: 'outputType', pref: 'outputType', fn: scoreOutputType },
  { key: 'structureStyle', pref: 'structureStyle', fn: scoreStructure },
  { key: 'sensoryPreference', pref: 'sensoryPreference', fn: scoreSensory },
  { key: 'pacingStyle', pref: 'pacingStyle', fn: scorePacing }
];

// ---------------------------------------------------------------------------
// Ana Puanlama Fonksiyonu
// ---------------------------------------------------------------------------

/**
 * @param {Array} hobbies
 * @param {Object} userPreferences
 * @param {'quick'|'balanced'|'detailed'} mode
 */
export function calculateHobbyScores(hobbies, userPreferences, mode = 'balanced') {
  const profile = MODE_PROFILES[mode] || MODE_PROFILES.balanced;
  const priorityKeys = new Set(PRIORITY_TARGETS[userPreferences.priority] || []);
  const activeCriteria = CRITERIA.filter(c => isAnswered(userPreferences[c.pref]));

  return hobbies.map(hobby => {
    const breakdown = {};
    const reasonCandidates = [];
    const caveatCandidates = [];

    let weightSum = 0;
    let arithmetic = 0;
    let logSum = 0;

    for (const { key, fn } of activeCriteria) {
      const r = fn(hobby, userPreferences);
      let fit = clamp(r.fit);
      let weight = r.weight;

      // Öncelikli / Kırmızı Çizgi kriteri: katı üs ve yüksek ağırlık
      if (priorityKeys.has(key)) {
        weight *= PRIORITY_WEIGHT_BOOST;
        fit = Math.pow(fit, PRIORITY_FIT_STRICTNESS);
      }

      breakdown[key] = { fit: Math.round(fit * 100), weight: Math.round(weight * 10) / 10 };

      weightSum += weight;
      arithmetic += weight * fit;
      logSum += weight * Math.log(Math.max(FIT_FLOOR, fit));

      if (r.reason) reasonCandidates.push({ text: r.reason, rank: weight * fit + (r.reasonPriority || 0) });
      if (r.caveat) caveatCandidates.push({ text: r.caveat, rank: weight * (1 - fit) });
    }

    let calibrated = 0;
    if (weightSum > 0) {
      const arithmeticMean = arithmetic / weightSum;
      const geometricMean = Math.exp(logSum / weightSum);
      const raw = arithmeticMean * (1 - profile.blend) + geometricMean * profile.blend;
      calibrated = Math.pow(raw, profile.exponent) * 100;
    }
    const matchPercentage = Math.round(clamp(calibrated, 3, profile.maxPct));

    reasonCandidates.sort((a, b) => b.rank - a.rank);
    caveatCandidates.sort((a, b) => b.rank - a.rank);

    return {
      ...hobby,
      score: calibrated,
      matchPercentage,
      scoreBreakdown: breakdown,
      reasons: reasonCandidates.slice(0, 3).map(r => r.text),
      caveats: caveatCandidates.slice(0, 2).map(c => c.text)
    };
  }).sort((a, b) =>
    b.score - a.score ||
    a.budget.initial_setup_min - b.budget.initial_setup_min ||
    a.time_commitment.prep_cleanup_overhead_minutes - b.time_commitment.prep_cleanup_overhead_minutes
  );
}
