<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const options = ref(['Option 2'])

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const twoFactor = ref(true)
const notifications = ref(false)
const notificationsLow = ref(false)
const marketing = ref(false)
const partners = ref(false)

const isScrolling = computed(() => {
  return y.value > 30
})
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>Opções Extras</h3>
        </div>
        <div class="right">
          <div class="buttons">
            <V-Button
              :to="{ name: 'index' }"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
              Volte
            </V-Button>
            <V-Button
              color="primary"
              raised
              :loading="isLoading"
              @click="onSave"
            >
              Salvar alterações
            </V-Button>
          </div>
        </div>
      </div>
    </div>
    <form class="form-body" @submit.prevent="onSave">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Selecione as opções abaixo</h4>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div>
            <V-Field>
              <V-Control>
                <V-Checkbox
                  v-model="options"
                  value="Receber e-mails de boletos impressos"
                  label="Receber e-mails de boletos impressos"
                  color="primary"
                />
                <V-Checkbox
                  v-model="options"
                  value="Receber e-mails de venda realizadas"
                  label="Receber e-mails de venda realizadas"
                  color="primary"
                />
                <V-Checkbox
                  v-model="options"
                  value="Receber e-mails de pedidos de reembolso e chargebacks"
                  label="Receber e-mails de pedidos de reembolso e chargebacks"
                  color="primary"
                />
                <!--<V-Checkbox
                  v-model="options"
                  value="Option 4"
                  label="Option 4"
                  color="primary"
                />
                <V-Checkbox
                  v-model="options"
                  value="Option 5"
                  label="Option 5"
                  color="primary"
                />
                <V-Checkbox
                  v-model="options"
                  value="Option 6"
                  label="Option 6"
                  color="primary"
                />-->
              </V-Control>
            </V-Field>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
