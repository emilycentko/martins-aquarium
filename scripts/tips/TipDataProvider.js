const tipCollection = [
    {
        waterType: "Freshwater",
        waterTemp: "75-80°F",
        salinityLevel: "1.020-1.025sg",
        aquariumSize: "29+ gallons",
    },
    {
        waterType: "Saltwater",
        waterTemp: "78-82°F",
        salinityLevel: "1.020-1.028sg",
        aquariumSize: "30 gallons",
    }
]

export const useTips = () => {
    return tipCollection.slice()
}