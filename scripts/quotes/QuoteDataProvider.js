const quoteCollection = [
    {
        text: "Tell 'em I'm going fishing.",
        author: "- Chief Brody",
    },
    {
        text: "No good fish goes anywhere without a porpoise.",
        author: "- Lewis Carroll",
    },
    {
        text: "It's ok to eat fish because they don't have any feelings.",
        author: "Nirvana",
    }
]

export const useQuotes = () => {
    return quoteCollection.slice()
}