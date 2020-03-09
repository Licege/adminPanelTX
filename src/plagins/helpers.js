export function getProfessionNameById (professions, id) {
    return professions.find(profession => profession.id === id).profession
}

export function getCategoryNameById (categories, id) {
    return categories.find(category => category.id === id).title
}