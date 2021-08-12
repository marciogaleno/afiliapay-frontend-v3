<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, reactive } from 'vue'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { Form, Field } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { typePersonSelected } from '/@src/state/typePerson'

const isUploading = ref(false)
const isLoading = ref(false)
const experience = ref('')
const firstJob = ref('')
const flexibility = ref('')
const remote = ref('')
const skills = ref(['software', 'saas', 'engineering'])
const skillsOptions = [
  { value: 'software', label: 'Software' },
  { value: 'saas', label: 'SaaS' },
  { value: 'engineering', label: 'Engineering' },
]
const schema = {
  name: 'required|max:55',
  password: 'required|min:8',
  last_name: 'required|max:20',
  cpf: 'required|max:11|min:11',
  email: 'required|max:100|min:10',
  whatsapp: 'required|max:11|min:11',
  razão: 'required',
  cnpj: 'required|max:14|min:14',
  email_afiliapay: 'required|min:10',
  email_communique: 'required|min:10',
  phone: 'required|max:11',
  facebook: 'required|min:10',
  instagram: 'required|min:10',
  cep: 'required|min:8',
  Endereço: 'required',
  numberAdress: 'required|max:10',
  complement: 'required',
  district: 'required',
  city: 'required',
  state: 'required',
  country: 'required',
}

const user = reactive({
  name: '',
  cpf: '',
  last_name: '',
  typePerson: 'PF',
  email: '',
  whatsapp: '',
  razão: '',
  cnpj: '',
  email_afiliapay: '',
  email_communique: '',
  phone: '',
  facebook: '',
  instagram: '',
  cep: '',
  Endereço: '',
  numberAdress: '',
  complement: '',
  district: '',
  city: '',
  state: '',
  country: '',
})

const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}

// const setTypePerson = () => {
//   typePersonSelected = user.typePerson;
//   return;
// }

const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
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
          <h3>Informações gerais</h3>
          <p>Edite as informações gerais da sua conta</p>
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
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Foto do perfil</h4>
          <p>É assim que os outros irão reconhecê-lo</p>
        </div>

        <V-Avatar size="xl" class="profile-v-avatar">
          <template #avatar>
            <img
              v-if="!isUploading"
              class="avatar"
              src="https://vuero.cssninja.io/demo/avatars/8.jpg"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
            <V-FilePond
              v-else
              class="profile-filepond"
              name="profile_filepond"
              :chunk-retry-delays="[500, 1000, 3000]"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
              :image-preview-height="140"
              :image-resize-target-width="140"
              :image-resize-target-height="140"
              image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle"
              style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom"
              style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom"
              @addfile="onAddFile"
              @removefile="onRemoveFile"
            />
            <V-IconButton
              v-if="!isUploading"
              icon="feather:edit-2"
              class="edit-button is-edit"
              circle
              @click="isUploading = true"
            />
            <V-IconButton
              v-else
              icon="feather:arrow-left"
              class="edit-button is-back"
              circle
              @click="isUploading = false"
            />
          </template>
        </V-Avatar>
      </div>
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Dados Pessoais:</h4>
        </div>
        <Form v-slot="{ errors }" :validation-schema="schema" @submit="submit">
          <div class="columns is-multiline">
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control>
                  <Multiselect
                    v-model="user.typePerson"
                    placeholder="Selecione o tipo"
                    :options="{
                      PF: 'Pessoa Fisica',
                      PJ: 'Pessoa Juridica',
                    }"
                    @click="typePersonSelected = user.typePerson"
                  />
                </V-Control>
              </V-Field>
            </div>
            <!--pessoa fisica-->
            <div v-show="user.typePerson == 'PF'" class="column is-6">
              <V-Field>
                <V-Control icon="feather:file-text" :has-error="errors.cpf">
                  <Field
                    name="cpf"
                    type="number"
                    class="input"
                    placeholder="CPF"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.cpf }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PF'" class="column is-6">
              <V-Field>
                <V-Control icon="feather:user" :has-error="errors.name">
                  <Field
                    name="name"
                    type="text"
                    class="input"
                    placeholder="Name"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.name }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PF'" class="column is-6">
              <V-Field>
                <V-Control icon="feather:user" :has-error="errors.last_name">
                  <Field
                    name="last_name"
                    type="text"
                    class="input"
                    placeholder="Last name"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.last_name }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PF'" class="column is-12">
              <V-Field>
                <V-Control icon="feather:mail" :has-error="errors.email">
                  <Field
                    name="email"
                    type="email"
                    class="input"
                    placeholder="E-mail"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.email }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PF'" class="column is-12">
              <V-Field>
                <V-Control
                  icon="feather:message-circle"
                  :has-error="errors.whatsapp"
                >
                  <Field
                    name="whatsapp"
                    type="number"
                    class="input"
                    placeholder="Whatsapp"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.whatsapp }}</span>
              </V-Field>
            </div>
            <!--pessoa juridica-->
            <div v-show="user.typePerson == 'PJ'" class="column is-6">
              <V-Field>
                <V-Control icon="feather:file-text" :has-error="errors.cnpj">
                  <Field
                    name="cnpj"
                    type="number"
                    class="input"
                    placeholder="CNPJ"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.cnpj }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PJ'" class="column is-12">
              <V-Field>
                <V-Control icon="feather:briefcase" :has-error="errors.razão">
                  <Field
                    name="razão"
                    type="text"
                    class="input"
                    placeholder="Razão sozial"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.razão }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PJ'" class="column is-12">
              <V-Field>
                <V-Control icon="feather:mail" :has-error="errors.email">
                  <Field
                    name="email"
                    type="email"
                    class="input"
                    placeholder="E-mail"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.email }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div v-show="user.typePerson == 'PJ'" class="column is-12">
              <V-Field>
                <V-Control
                  icon="feather:message-circle"
                  :has-error="errors.whatsapp"
                >
                  <Field
                    name="whatsapp"
                    type="number"
                    class="input"
                    placeholder="Whatsapp"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.whatsapp }}</span>
              </V-Field>
            </div>
          </div>
        </Form>
      </div>
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Dados de Contato:</h4>
          <p>
            Isso pode ajudar outras pessoas a encontrar você nas redes sociais
          </p>
        </div>
        <Form v-slot="{ errors }" :validation-schema="schema" @submit="submit">
          <div class="columns is-multiline">
            <!--Field-->
            <div class="column is-12">
              <V-Field>
                <V-Control
                  icon="feather:mail"
                  :has-error="errors.email_afiliapay"
                >
                  <Field
                    name="email_afiliapay"
                    type="email"
                    class="input"
                    placeholder="E-mail de acesso a AfiliaPay"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{
                  errors.email_afiliapay
                }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-12">
              <V-Field>
                <V-Control
                  icon="feather:mail"
                  :has-error="errors.email_communique"
                >
                  <Field
                    name="email_communique"
                    type="email"
                    class="input"
                    placeholder="E-mail para comunicados da AfiliaPay"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{
                  errors.email_communique
                }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:phone" :has-error="errors.phone">
                  <Field
                    name="phone"
                    type="number"
                    class="input"
                    placeholder="Telefone profissional"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.phone }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:facebook" :has-error="errors.facebook">
                  <Field
                    name="facebook"
                    type="text"
                    class="input"
                    placeholder="Link do facebook"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.facebook }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-12">
              <V-Field>
                <V-Control
                  icon="feather:instagram"
                  :has-error="errors.instagram"
                >
                  <Field
                    name="instagram"
                    type="text"
                    class="input"
                    placeholder="Link do instagram"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.instagram }}</span>
              </V-Field>
            </div>
          </div>
        </Form>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>Endereço:</h4>
        </div>
        <Form v-slot="{ errors }" :validation-schema="schema" @submit="submit">
          <div class="columns is-multiline">
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:map-pin" :has-error="errors.cep">
                  <Field
                    name="cep"
                    type="number"
                    class="input"
                    placeholder="CEP"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.cep }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:map" :has-error="errors.Endereço">
                  <Field
                    name="Endereço"
                    type="text"
                    class="input"
                    placeholder="Endereço"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.Endereço }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control
                  icon="feather:edit-3"
                  :has-error="errors.numberAdress"
                >
                  <Field
                    name="numberAdress"
                    type="number"
                    class="input"
                    placeholder="Numero"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.numberAdress }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control
                  icon="feather:file-text"
                  :has-error="errors.complement"
                >
                  <Field
                    name="complement"
                    type="text"
                    class="input"
                    placeholder="complemento"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.complement }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:home" :has-error="errors.district">
                  <Field
                    name="district"
                    type="text"
                    class="input"
                    placeholder="Bairro"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.district }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:flag" :has-error="errors.city">
                  <Field
                    name="city"
                    type="text"
                    class="input"
                    placeholder="Cidade"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.city }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:map" :has-error="errors.state">
                  <Field
                    name="state"
                    type="text"
                    class="input"
                    placeholder="Estado"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.state }}</span>
              </V-Field>
            </div>
            <!--Field-->
            <div class="column is-6">
              <V-Field>
                <V-Control icon="feather:map" :has-error="errors.country">
                  <Field
                    name="country"
                    type="text"
                    class="input"
                    placeholder="país"
                    autocomplete="given-name"
                  />
                </V-Control>
                <span class="help text-danger">{{ errors.country }}</span>
              </V-Field>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
