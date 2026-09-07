import { HOBBIES } from './data/hobbies.js';
import { calculateHobbyScores } from './scoringEngine.js';

// State
let currentStep = 0;
const userAnswers = {
  budgetLimit: 'low',
  weeklyHours: '3',
  physicalIntensity: 'light',
  location: 'any',
  messTolerance: 'clean',
  noiseTolerance: 'silent',
  firstWinSpeed: 'immediate'
};

let currentFilteredCategory = 'all';
let activeSearchQuery = '';
let activeBudgetFilter = 'all';
let activeLocationFilter = 'all';

// Pagination state for 140+ hobbies
const ITEMS_PER_PAGE = 18;
let currentVisibleLimit = ITEMS_PER_PAGE;

// Wizard Questions Definitions
const WIZARD_STEPS = [
  {
    key: 'budgetLimit',
    title: 'Yeni bir hobiye başlangıçta ne kadar bütçe ayırabilirsin?',
    description: 'Hobin, gizli maliyetleri ve sarf malzemesi yükünü bu tercihe göre hesaplar.',
    options: [
      { value: 'zero', icon: '🌱', title: '0 TL - Tamamen Sıfır Bütçe', sub: 'Mevcut telefon, ev gereçleri veya açık kaynak yazılımlar' },
      { value: 'low', icon: '🪙', title: 'Düşük Bütçe (0 - 800 TL)', sub: 'Temel başlangıç kiti ve birkaç sarf malzemesi' },
      { value: 'medium', icon: '💳', title: 'Orta Bütçe (800 - 2.500 TL)', sub: 'Kaliteli başlangıç ekipmanı ve uzun ömürlü gereçler' },
      { value: 'flexible', icon: '✨', title: 'Esnek / Bütçe İkinci Planda', sub: 'Yeter ki doğru ve keyifli bir uğraş olsun' }
    ]
  },
  {
    key: 'weeklyHours',
    title: 'Haftada ortalama ne kadar vakit ayırabileceksin?',
    description: 'Zaman-ödül uyuşmazlığını engellemek için gerçekçi bir saat seçin.',
    options: [
      { value: '2', icon: '⏱️', title: 'Haftada 1 - 2 Saat', sub: 'Hızlıca başlayıp bırakılabilecek, düşük zaman yükü' },
      { value: '4', icon: '⏳', title: 'Haftada 3 - 5 Saat', sub: 'Hafta sonu veya akşamları keyifli seanslar' },
      { value: '7', icon: '🚀', title: 'Haftada 6+ Saat', sub: 'Derin odaklanma ve hızlı ustalaşma hedefi' }
    ]
  },
  {
    key: 'physicalIntensity',
    title: 'Nasıl bir fiziksel aktivite seviyesi arıyorsun?',
    description: 'Hobin sırasında bedenen ne kadar hareket etmek ve enerji harcamak istersin?',
    options: [
      { value: 'sedentary', icon: '🪑', title: 'Hareketsiz / Dingin (Masa Başı)', sub: 'Oturarak, zihinsel odak veya ince el becerisi odaklı' },
      { value: 'light', icon: '🚶', title: 'Hafif & Dengeli Hareket', sub: 'Ayakta durma, mutfak veya hafif yürüyüş temposu' },
      { value: 'active', icon: '🔥', title: 'Yüksek Tempolu & Terleten Spor', sub: 'Tırmanış, koşu, kardiyo, güç veya çeviklik odaklı' },
      { value: 'flexible', icon: '✨', title: 'Fark Etmez / Esnek', sub: 'Hem dingin hem hareketli önerilere açığım' }
    ]
  },
  {
    key: 'location',
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
  {
    key: 'messTolerance',
    title: 'Dağınıklık ve temizlik toleransın nedir?',
    description: 'Hobiyi yarım bırakmanın en yaygın sebeplerinden biri temizlik yüküdür.',
    options: [
      { value: 'clean', icon: '✨', title: 'Sıfır Dağınıklık & Tozsuz', sub: 'Masam temiz kalsın, su veya çamur istemem' },
      { value: 'moderate', icon: '🧹', title: 'Makul / Kolay Temizlenebilir', sub: 'Ufak kırıntı, un veya kırpıntı sorun değil' },
      { value: 'heavy', icon: '🎨', title: 'Dağınıklık Önemli Değil', sub: 'Kil, boya, su... Sanat biraz kirlenmektir' }
    ]
  },
  {
    key: 'noiseTolerance',
    title: 'Çalışma ortamında ses ve gürültü düzeyi nasıl olmalı?',
    description: 'Gece saatlerinde veya ses geçiren apartman dairelerinde kritik bir faktör.',
    options: [
      { value: 'silent', icon: '🤫', title: 'Çok Sessiz Olmalı', sub: 'Geceleri veya yan odadakileri rahatsız etmeden' },
      { value: 'moderate', icon: '📻', title: 'Hafif Tıkırtı / Ses Sorun Değil', sub: 'Tokmak, tırmanış müziği veya el aleti sesi' },
      { value: 'any', icon: '🔊', title: 'Fark Etmez', sub: 'Ses izolasyonum var veya dışarıda yapacağım' }
    ]
  },
  {
    key: 'firstWinSpeed',
    title: 'İlk başarı ve tatmin hissini ne kadar çabuk almak istersin?',
    description: 'İlk somut çıktıyı alma süresi motivasyonu doğrudan belirler.',
    options: [
      { value: 'immediate', icon: '🎯', title: 'İlk Günden Somut Çıktı!', sub: 'Hemen ilk 30 dakikada elime bir ürün veya galibiyet geçsin' },
      { value: 'patient', icon: '🧘', title: 'Sürece Sabırlıyım', sub: '1-2 hafta öğrenme eğrisine zevkle katlanabilirim' }
    ]
  }
];

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
  currentStep = 0;
  wizardModal.classList.remove('hidden');
  renderWizardStep();
}

function closeWizard() {
  wizardModal.classList.add('hidden');
}

function renderWizardStep() {
  const step = WIZARD_STEPS[currentStep];
  wizardStepLabel.textContent = `Adım ${currentStep + 1} / ${WIZARD_STEPS.length}`;
  const progressPercent = ((currentStep + 1) / WIZARD_STEPS.length) * 100;
  wizardProgressBar.style.width = `${progressPercent}%`;

  wizardPrevBtn.disabled = currentStep === 0;
  wizardNextBtn.textContent = (currentStep === WIZARD_STEPS.length - 1) ? '🎯 Sonuçları Gör' : 'Devam Et →';

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
    });
  });
}

function handleWizardNext() {
  if (currentStep < WIZARD_STEPS.length - 1) {
    currentStep++;
    renderWizardStep();
  } else {
    closeWizard();
    finishWizardAndShowResults();
  }
}

function handleWizardPrev() {
  if (currentStep > 0) {
    currentStep--;
    renderWizardStep();
  }
}

function finishWizardAndShowResults() {
  allScoredHobbies = calculateHobbyScores(HOBBIES, userAnswers);
  currentThresholdPercent = 75;
  if (matchThresholdSlider) {
    matchThresholdSlider.value = 75;
  }
  recActiveCategory = 'all';
  updateThresholdAndFilter(true);
  recommendationsSection.classList.remove('hidden');
  recommendationsSection.scrollIntoView({ behavior: 'smooth' });
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

  updateRecCategoryFilterPills();
  renderTopMatches();

  if (!isInitial) {
    showToast(`%${currentThresholdPercent}+ uyum: ${topRecommendedHobbies.length} hobi listelendi`);
  }
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

    card.innerHTML = `
      <div class="match-rank-tag">#${hobby.recommendationRank} Öneri</div>
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

    card.addEventListener('click', () => openHobbyDetail(hobby));
    topMatchesGrid.appendChild(card);
  });
}

// ============================================================================
// HOBBY CATALOG GRID & DYNAMIC COUNTS
// ============================================================================
function updateCategoryFilterPills() {
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
    <button class="filter-pill ${currentFilteredCategory === 'craft_making' ? 'active' : ''}" data-category="craft_making">🎨 El Sanatları (${counts.craft_making})</button>
    <button class="filter-pill ${currentFilteredCategory === 'mental_focus' ? 'active' : ''}" data-category="mental_focus">🧠 Zihinsel Odak (${counts.mental_focus})</button>
    <button class="filter-pill ${currentFilteredCategory === 'physical_movement' ? 'active' : ''}" data-category="physical_movement">🧗 Fiziksel Hareket (${counts.physical_movement})</button>
    <button class="filter-pill ${currentFilteredCategory === 'digital_creative' ? 'active' : ''}" data-category="digital_creative">💻 Dijital & Maker (${counts.digital_creative})</button>
    <button class="filter-pill ${currentFilteredCategory === 'collecting_curation' ? 'active' : ''}" data-category="collecting_curation">☕ Kürasyon & Zevk (${counts.collecting_curation})</button>
  `;
}

function getFilteredHobbies() {
  return HOBBIES.filter(hobby => {
    if (currentFilteredCategory !== 'all' && hobby.category !== currentFilteredCategory) {
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

    card.innerHTML = `
      <!-- Top Half: "Hobi Resmi" -->
      <div class="card-top-half">
        <img src="${hobby.imageUrl}" alt="${hobby.name}" class="card-top-image" loading="lazy" />
        <div class="card-image-gradient"></div>
        <span class="card-category-tag">${hobby.categoryNameTr}</span>
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

  detailModal.classList.remove('hidden');
}

function closeHobbyDetail() {
  detailModal.classList.add('hidden');
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
    });
  }

  if (matchThresholdSlider) {
    matchThresholdSlider.addEventListener('input', (e) => {
      currentThresholdPercent = Number(e.target.value);
      updateThresholdAndFilter(false);
    });
  }

  hobbySearchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value;
    currentVisibleLimit = ITEMS_PER_PAGE;
    renderCatalogGrid();
  });

  budgetFilterSelect.addEventListener('change', (e) => {
    activeBudgetFilter = e.target.value;
    currentVisibleLimit = ITEMS_PER_PAGE;
    renderCatalogGrid();
  });

  locationFilterSelect.addEventListener('change', (e) => {
    activeLocationFilter = e.target.value;
    currentVisibleLimit = ITEMS_PER_PAGE;
    renderCatalogGrid();
  });

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
    updateValues(parseFloat(e.target.value));
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
  updateCategoryFilterPills();
  renderCatalogGrid();
  initEventListeners();
});
