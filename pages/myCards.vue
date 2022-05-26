
<template>
  <v-row class="split layout layout-transaction">
    <v-col id="myCards" cols="4" class="pa-5 transaction-list">
      <div class="text-h4 pa-6">Cards</div>
      <v-list color="transparent">
        <CreditCard
          v-for="card in cards"
          :key="card.id"
          :card="card"
        ></CreditCard>
      </v-list>
    </v-col>

    <v-col cols="8" class="pa-5 transaction-list">
      <v-list class="transaction-list" color="#FFFFFF">
        <div class="text-h4 pa-4">Recent Transactions</div>
        <TransactionItem
          v-for="transaction in transactions"
          :key="transaction.id"
          :transaction="transaction"
        >
        </TransactionItem>
      </v-list>
    </v-col>
  </v-row>
</template>  


<script setup lang='ts'>
export default {
  name: 'MyCardsPage',

  computed: {
    cards() {
      return this.$store.state.cards.cards
    },
    transactions() {
      return this.$store.state.transactions.transactions
    },
  },

  mounted() {
    this.$store.dispatch('cards/fetchCards')
    this.$store.dispatch('transactions/fetchTransactions')
  },
}
</script>

<style scoped>
.transaction-list {
  overflow-y: scroll;
  flex: 1;
}

.layout-transaction {
  display: flex !important;
  flex: 1 1 auto !important;
  flex-wrap: nowrap !important;
  min-width: 0 !important;
}

.container,
.v-subheader,
.v-list,
.v-list-content,
.theme--dark,
.text-h4 {
  color: #5c509b;
}
</style>