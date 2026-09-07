import { HOBBIES } from './src/data/hobbies.js';
import { calculateHobbyScores } from './src/scoringEngine.js';

console.log(`Total Hobbies Loaded: ${HOBBIES.length}`);

// Test 1: User wants active, high-intensity sport
const resActive = calculateHobbyScores(HOBBIES, {
  budgetLimit: 'medium',
  weeklyHours: 4,
  physicalIntensity: 'active',
  location: 'any',
  messTolerance: 'clean',
  noiseTolerance: 'moderate',
  firstWinSpeed: 'immediate'
});

console.log('\n--- Test: Active & High Physical Intensity ---');
resActive.slice(0, 3).forEach((h, i) => {
  console.log(`#${i + 1}: ${h.name} (${h.category}) - ${h.matchPercentage}% Uyum`);
  console.log(`   Neden: ${h.reasons.join(', ')}`);
});

// Test 2: User wants sedentary, zero physical exertion (desk)
const resSedentary = calculateHobbyScores(HOBBIES, {
  budgetLimit: 'zero',
  weeklyHours: 3,
  physicalIntensity: 'sedentary',
  location: 'indoor_desk',
  messTolerance: 'clean',
  noiseTolerance: 'silent',
  firstWinSpeed: 'immediate'
});

console.log('\n--- Test: Sedentary & Desk ---');
resSedentary.slice(0, 3).forEach((h, i) => {
  console.log(`#${i + 1}: ${h.name} (${h.category}) - ${h.matchPercentage}% Uyum`);
  console.log(`   Neden: ${h.reasons.join(', ')}`);
});
