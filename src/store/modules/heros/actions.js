export function saveHero(hero) {
    return {
        type: '@hero/SAVE_HERO',
        content: hero
    }
}