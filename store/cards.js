export const state = () => ({
  cards: [],
})

export const mutations = {
  SET_CARDS(state, cards) {
    state.cards = cards
  },
}

export const actions = {
  async fetchCards({ commit }) {
    const cards = await this.$axios.$get('http://localhost:3001/cards')
    commit('SET_CARDS', cards)
  },
}

export const getters = {
  getCards: (state) => {
    return state.cards
  },
}
