<template>
<NuxtLink :to="{ name: 'cards-id-transactions-slug', params: { id: transaction.card, slug:transaction.id} }">
<!-- :to="`/cards/${transaction.id}/transactions/${transaction.id}`" -->
  <v-list-item >
  
    <v-list-item-avatar rounded="circle" color="#58aee14d" size="70">
      <v-icon color="primary" large>
        {{ setIcon(transaction.category) }}
      </v-icon>
    </v-list-item-avatar>

    <v-list-item-content class="transaction-content">
      <div class="transaction-item">
        <p class="transaction-title transaction-establishment">
          {{ transaction.establishment }}
        </p>
        <p
          v-if="transaction.type == 'deposit'"
          class="transaction-title transaction-deposit"
        >
          +${{ transaction.amount }}
        </p>
        <p
          v-else-if="transaction.type == 'withdraw'"
          class="transaction-title transaction-withdraw"
        >
          -${{ transaction.amount }}
        </p>
      </div>
      <div class="transaction-item">
        <p class="transaction-subtitle">{{ formatDate(transaction.date) }}</p>
        <p class="transaction-subtitle">{{ transaction.category }}</p>
      </div>
    </v-list-item-content>
  </v-list-item>
</NuxtLink>
</template>

<script>
import moment from 'moment'

export default {
  name: 'TransactionItemComponent',
  props: {
    transaction: {
      type: Object,
      required: true,
      default: () => {
        return {
          id: '',
          amount: '',
          establishment: '',
          type: '',
          date: '',
          category: '',
          card: '',
        }
      },
    },
  },
  methods: {
    formatDate(date) {
      return moment(date).format('DD/MM/YYYY hh:mm')
    },

    setIcon(type) {
      switch (type) {
        case 'food':
          return 'mdi-food'
        case 'transport':
          return 'mdi-car'
        case 'transfer':
          return 'mdi-compare-horizontal'
        default:
          return 'mdi-alert-circle-outline'
      }
    },
  },
}
</script>

<style scoped>
.transaction-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 10px;
  margin: 0;
}
.transaction-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
.transaction-establishment {
  color: #5c509b;
}
.transaction-subtitle {
  color: rgb(30 30 30 / 70%) !important;
  line-height: 1.2;
  font-size: 0.875rem;
  margin: 0;
}

.transaction-deposit {
  color: #66bb6a;
  letter-spacing: 0.5px;
}
.transaction-withdraw {
  color: #f44336;
}
</style>