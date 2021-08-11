<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const isUploading = ref(false)
const isLoading = ref(false)

const notyf = useNotyf()
const { y } = useWindowScroll()

const date = ref({
  start: new Date(),
  end: new Date(),
})

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
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
const addExperience = async () => {
  isUploading.value = false
  onSave()
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
          <h3>Work Experience</h3>
          <p>Edit your work experience info</p>
        </div>
        <div class="right">
          <div class="buttons">
            <V-Button
              :to="{ name: 'index' }"
              icon="lnir lnir-arrow-left rem-100"
              light
              dark-outlined
            >
              Go Back
            </V-Button>
            <V-Button
              color="primary"
              raised
              :loading="isLoading"
              @click="onSave"
            >
              Save Changes
            </V-Button>
          </div>
        </div>
      </div>
    </div>
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div v-if="!isUploading" class="fieldset-heading">
          <h4>Previous Experiences</h4>
          <p>This will help others assess your experience</p>
        </div>
        <div v-else class="fieldset-heading">
          <a class="action-link" @click="isUploading = false">Cancel</a>
        </div>
        <!--CNH-->
        <div class="fieldset">
          <V-Field grouped>
            <V-CardMedia>
              <div v-if="!isUploading" class="fieldset-heading">
                <h4>Foto da CNH</h4>
              </div>
              <V-Control>
                <div class="file has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                      </span>
                      <span class="file-label"> Choose a file… </span>
                    </span>
                    <span class="file-name light-text">
                      22082020_project_budget.xls
                    </span>
                  </label>
                </div>
              </V-Control>
            </V-CardMedia>
          </V-Field>
        </div>
        <!--residencia-->
        <div class="fieldset">
          <V-Field grouped>
            <V-CardMedia>
              <div v-if="!isUploading" class="fieldset-heading">
                <h4>Foto do comprovante de residencia</h4>
              </div>
              <V-Control>
                <div class="file has-name">
                  <label class="file-label">
                    <V-FilePond class="file-input" type="file" name="resume" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                      </span>
                      <span class="file-label"> Choose a file… </span>
                    </span>
                    <span class="file-name light-text">
                      22082020_project_budget.xls
                    </span>
                  </label>
                </div>
              </V-Control>
            </V-CardMedia>
          </V-Field>
        </div>
      </div>
    </div>
  </div>
</template>
