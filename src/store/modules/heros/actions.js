export function saveHero(hero) {
    return {
        type: '@hero/SAVE_HERO',
        payload: hero
    }
}