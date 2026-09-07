/**
 * Hobin Ağırlıklı Puanlama ve Karar Destek Motoru
 * Kriterler: Bütçe (%25), Zaman & Hazırlık (%20), Mekan & Dağınıklık (%20),
 * Fiziksel Aktivite Seviyesi (%15), İlk Ödül Hızı (%10), Gürültü (%10)
 */

export function calculateHobbyScores(hobbies, userPreferences) {
  return hobbies.map(hobby => {
    let totalScore = 0;
    const reasons = [];
    const caveats = [];

    // 1. BÜTÇE PUANLAMASI (Ağırlık: %25)
    let budgetScore = 0;
    const setupCost = hobby.budget.initial_setup_min;

    if (userPreferences.budgetLimit === "zero") {
      if (hobby.budget.tier === "free" || setupCost === 0) {
        budgetScore = 25;
        reasons.push("Tamamen sıfır maliyetle anında başlanabilir.");
      } else {
        budgetScore = 0;
        caveats.push(`Başlangıç için min. ${setupCost} TL gerektirir.`);
      }
    } else if (userPreferences.budgetLimit === "low") {
      if (setupCost <= 800) {
        budgetScore = 25;
        reasons.push(`Bütçe dostu: Başlangıç seti yaklaşık ${setupCost} TL.`);
      } else if (setupCost <= 1500) {
        budgetScore = 15;
      } else {
        budgetScore = 4;
        caveats.push(`Düşük bütçeyi biraz aşabilir (${setupCost} TL).`);
      }
    } else if (userPreferences.budgetLimit === "medium") {
      if (setupCost <= 2500) {
        budgetScore = 25;
        reasons.push(`Orta bütçe aralığınıza tam oturuyor (${setupCost} TL).`);
      } else {
        budgetScore = 12;
      }
    } else {
      // flexible
      budgetScore = 25;
    }
    totalScore += budgetScore;

    // 2. HAFTALIK ZAMAN & HAZIRLIK/TEMİZLİK YÜKÜ (Ağırlık: %20)
    let timeScore = 0;
    const weeklyHours = hobby.time_commitment.min_hours_weekly;
    const userHours = Number(userPreferences.weeklyHours || 3);

    if (userHours >= weeklyHours) {
      timeScore += 14;
      reasons.push(`Haftalık ${userHours} saatlik vaktinize tam uygun (gereken: ${weeklyHours} sa/hf).`);
    } else {
      const diff = weeklyHours - userHours;
      timeScore += Math.max(3, 14 - diff * 4);
      caveats.push(`Haftada en az ${weeklyHours} saat ayırmanız önerilir.`);
    }

    if (hobby.time_commitment.prep_cleanup_overhead_minutes <= 10) {
      timeScore += 6;
      reasons.push("Sıfıra yakın hazırlık ve temizlik süresi.");
    } else if (hobby.time_commitment.prep_cleanup_overhead_minutes <= 25) {
      timeScore += 3;
    } else {
      timeScore += 1;
      caveats.push(`${hobby.time_commitment.prep_cleanup_overhead_minutes} dk hazırlık/temizlik gerektirebilir.`);
    }
    totalScore += timeScore;

    // 3. MEKAN VE DAĞINIKLIK TOLERANSI (Ağırlık: %20)
    let envScore = 0;
    if (!userPreferences.location || userPreferences.location === "any" || userPreferences.location === hobby.environment.location) {
      envScore += 10;
      reasons.push("Yaşam alanınıza ve mekan tercihinize birebir uyumlu.");
    } else {
      envScore += 4;
    }

    if (userPreferences.messTolerance === "clean") {
      if (hobby.environment.mess_level === "clean") {
        envScore += 10;
        reasons.push("Temiz ve lekesiz; masa başında rahatlıkla yapılabilir.");
      } else if (hobby.environment.mess_level === "moderate") {
        envScore += 4;
      } else {
        envScore += 0;
        caveats.push("Toz veya çamur/leke üretebilir, izole köşe ister.");
      }
    } else if (userPreferences.messTolerance === "moderate") {
      if (hobby.environment.mess_level !== "dust_chemical_heavy") {
        envScore += 10;
      } else {
        envScore += 5;
      }
    } else {
      envScore += 10;
    }
    totalScore += envScore;

    // 4. FİZİKSEL AKTİVİTE SEVİYESİ (Ağırlık: %15)
    let physScore = 0;
    const isPhysical = hobby.category === "physical_movement";
    const isDesk = hobby.environment.location === "indoor_desk";

    if (userPreferences.physicalIntensity === "sedentary") {
      // Hareketsiz / Dingin masa başı arayanlar
      if (!isPhysical) {
        physScore = 15;
        reasons.push("Masa başında bedensel yorulmadan dinginlikle yapılabilir.");
      } else {
        physScore = 3;
        caveats.push("Yüksek fiziksel efor ve terleme gerektirebilir.");
      }
    } else if (userPreferences.physicalIntensity === "light") {
      // Hafif ve dengeli hareket
      if (hobby.category === "craft_making" || hobby.category === "collecting_curation" || hobby.id.includes("yoga") || hobby.id.includes("walking")) {
        physScore = 15;
        reasons.push("Aşırı yormayan dengeli bir hareketlilik sunar.");
      } else if (isPhysical) {
        physScore = 10;
      } else {
        physScore = 10;
      }
    } else if (userPreferences.physicalIntensity === "active") {
      // Yüksek hareket ve spor arayanlar
      if (isPhysical) {
        physScore = 15;
        reasons.push("Enerjinizi boşaltacak yüksek tempolu fiziksel aktivite sağlar!");
      } else if (hobby.environment.location === "outdoor") {
        physScore = 10;
      } else {
        physScore = 2;
        caveats.push("Fiziksel hareket beklentinize göre fazla durağan kalabilir.");
      }
    } else {
      // flexible / any
      physScore = 15;
    }
    totalScore += physScore;

    // 5. GÜRÜLTÜ SEVİYESİ (Ağırlık: %10)
    let noiseScore = 0;
    if (userPreferences.noiseTolerance === "silent") {
      if (hobby.environment.noise_level === "silent") {
        noiseScore = 10;
        reasons.push("Tamamen sessiz; geceleri veya apartmanda sorunsuz.");
      } else if (hobby.environment.noise_level === "moderate") {
        noiseScore = 5;
        caveats.push("Hafif tıkırtı veya çekiç/çalışma sesi olabilir.");
      } else {
        noiseScore = 0;
        caveats.push("Gürültü hassasiyetinizle çelişebilir.");
      }
    } else {
      noiseScore = 10;
    }
    totalScore += noiseScore;

    // 6. İLK TATMIN / HIZLI ÖDÜL EŞİĞİ (Ağırlık: %10)
    let winScore = 0;
    if (userPreferences.firstWinSpeed === "immediate") {
      if (hobby.time_commitment.learning_curve_to_first_win === "immediate_day1") {
        winScore = 10;
        reasons.push("İlk günden somut bir başarı ve tatmin hissi sağlar.");
      } else if (hobby.time_commitment.learning_curve_to_first_win === "short_1_week") {
        winScore = 7;
      } else {
        winScore = 3;
        caveats.push("İlk somut çıktıyı almak birkaç hafta sabır gerektirebilir.");
      }
    } else {
      winScore = 10;
    }
    totalScore += winScore;

    const matchPercentage = Math.min(99, Math.max(35, Math.round(totalScore)));

    return {
      ...hobby,
      score: totalScore,
      matchPercentage,
      reasons: reasons.slice(0, 3),
      caveats: caveats.slice(0, 2)
    };
  }).sort((a, b) => b.score - a.score);
}
