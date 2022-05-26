<template>
  <v-row>
    <v-col cols="8" class="pa-5">
      <h2>Hello, Daniel</h2>
    </v-col>
    <v-col cols="4" class="pa-5">
      <v-card color="secondary">
        <v-card-title> Account Balance </v-card-title>
        <v-card-subtitle class="text-h5"> {{getBalance(cards)}} </v-card-subtitle>
      </v-card>
      <v-list color="transparent">
        <div class="text-h5 pa-3"> My Cards </div>
        <v-list color="transparent">
        <CreditCard
          v-for="card in cards"
          :key="card.id"
          :card="card"
        ></CreditCard>
      </v-list>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',

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

  
  methods: {
    getBalance(cards){
      let balance = 0;
      for(const x in cards){
        if(cards[x].balance){
          balance += cards[x].balance
        }
      }

      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance)
    }
  },
}
</script>

<style scoped>
.text-h5{
  color: #5c509b ;
}
</style>