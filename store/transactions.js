export const state = () => ({
  transactions: [],
})

export const mutations = {
  SET_TRANSACTIONS(state, transactions) {
    state.transactions = transactions
  },
}

export const actions = {
  async fetchTransactions({ commit }) {
    const transactions = await this.$axios.$get(
      'http://localhost:3001/transactions'
    )
    commit('SET_TRANSACTIONS', transactions)
  },
  async fetchTransaction({ commit }, id) {
    const transactions = await this.$axios.$get(
      `http://localhost:3001/transactions/${id.id}`
    )
    commit('SET_TRANSACTIONS', transactions)
  }
}

export const getter = {
  getTransactions: (state) => {
    return state.transactions
  },
}
