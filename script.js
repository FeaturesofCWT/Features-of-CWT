function calculateCalories() {
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activity').value;
   
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = bmr * activityLevel;
    const maintenance = Math.round(tdee);
    const mildWeightLoss = Math.round(tdee - 250);
    const weightLoss = Math.round(tdee - 500);
    const extremeWeightLoss = Math.round(tdee - 1000);
    const mildWeightGain = Math.round(tdee + 250); // For mild weight gain
    const weightGain = Math.round(tdee + 500); // For significant weight gain
    const fastWeightGain = Math.round(tdee + 1000); // For fast weight gain

    document.getElementById('results').innerHTML = `
        <div>
            <h3>Maintenance and Weight Loss</h3>
            <p>To maintain your weight you need ${maintenance} calories/day.</p>
            <p>For mild weight loss (0.25 kg/week) you need ${mildWeightLoss} calories/day.</p>
            <p>For weight loss (0.5 kg/week) you need ${weightLoss} calories/day.</p>
            <p>For extreme weight loss (1 kg/week) you need ${extremeWeightLoss} calories/day.</p>
        </div>
        <div>
            <h3>Weight Gain</h3>
            <p>For mild weight gain (0.25 kg/week) you need ${mildWeightGain} calories/day.</p>
            <p>For weight gain (0.5 kg/week) you need ${weightGain} calories/day.</p>
            <p>For fast weight gain (1 kg/week) you need ${fastWeightGain} calories/day.</p>
        </div>
    `;
}