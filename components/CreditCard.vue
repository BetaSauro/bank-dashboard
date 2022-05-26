<template>

    <div class="card-item pa">
        
      <div class="card-item__wrapper"><v-list-item nuxt :to="`/cards/${card.id}/transactions  `">
        <div class="card-item__top">
          <div class="card-item__type">
            <img
              :src="setIcon(card.brand)"
              alt="Card Type Logo"
              class="card-item__typeImg"
            />
          </div>
          <v-chip outlined> {{ card.color }} </v-chip>
        </div>
        <div class="card-item__middle">
          <div class="card-item__limit">
            <p>Disponivel</p>
            <p>Total</p>
          </div>
          <v-progress-linear
            v-model="limit"
            color="#FFFFFF"
            class="card-item__progress"
          ></v-progress-linear>
          <div class="card-item__limit">
            <p>$ {{ card.avaliable }}</p>
            <p>$ {{ card.limit }}</p>
          </div>
        </div>
        <div class="card-item__bottom">
          <p class="card-item__name">
            #### #### #### {{ getCardLastNumbers(card.number) }}
          </p>
          <p>{{ card.expiration }}</p>
        </div></v-list-item>
      </div>
        
    </div>
</template>

<script>
export default {
  name: 'CreditCardComponent',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => {
        return {
          id: '',
          number: '',
          cvv: '',
          expiration: '',
          name: '',
          brand: '',
          type: '',
          color: '',
          limit: '',
          avaliable: '',
        }
      },
    },
  },
  computed: {
    limit() {
      return this.card.avaliable / this.card.limit * 100
    },
  },
  methods: {
    setIcon(type) {
      switch (type) {
        case 'visa':
          return '/visa.png'
        case 'mastercard':
          return '/mastercard.png'
        case 'amex':
          return '/american-express.png'
        case 'diners':
          return '/diners-club.png'
        case 'discover':
          return '/discover.png'
        case 'jcb':
          return '/jcb.png'
        default:
          return '/credit-card.png'
      }
    },

    getCardLastNumbers(card) {
      return card.substring(12);
    },
  },
}
</script>

<style scoped>
.card-item {
  max-width: 430px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;
  border-radius: 15px;
  background-color: #5c509b;
  color: #fff;
  margin-bottom: 20px;
}

.v-list-item{
    position: unset;
    display: unset;
    padding: 0;
}

.card-item__wrapper {
  font-family: 'Source Code Pro', monospace;
  padding: 25px 15px;
  position: relative;
  z-index: 4;
  height: 100%;
  text-shadow: 7px 6px 10px rgb(14 42 90 / 80%);
  user-select: none;
  display: block;
}

.card-item__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
}

.card-item__type {
  height: 30px;
}

.card-item__typeImg {
  max-width: 100%;
  object-fit: contain;
  max-height: 100%;
  object-position: top left;
}

.card-item__chip {
  width: 40px;
}

.card-item__middle {
  margin-bottom: 30px;
  padding: 0 10px;
}

.card-item__limit {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 10px;
}

.card-item__progress {
  margin-bottom: 5px;
}

.card-item__number {
  font-weight: 500;
  line-height: 1;
  color: #fff;
  font-size: 27px;
  margin-bottom: 35px;
  display: inline-block;
  padding: 10px 15px;
}

.card-item__bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
}
</style>