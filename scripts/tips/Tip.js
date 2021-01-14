export const Tip = (tip) => {
    return `
    <ul>
        <li>${tip.waterType}</li>
        <li>${tip.waterTemp}</li>
        <li>${tip.salinityLevel}</li>
        <li>${tip.aquariumSize}</li>
    </ul>
    `
}