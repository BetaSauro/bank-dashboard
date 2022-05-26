<template>
  <div>
    <div class="text-h5 pa-4">Transaction {{transaction.id}} Details</div>
    <TransactionItem :transaction=transaction></TransactionItem>
    
    
  </div>

</template>

<script setup lang='ts'>
export default {

  computed: {
    transaction() {
      return this.$store.state.transactions.transactions
    },
  },

  mounted() {
    
    this.$store.dispatch('transactions/fetchTransaction',{id:this.$route.params.slug} )
  },
}
</script>

<style scoped>

</style>