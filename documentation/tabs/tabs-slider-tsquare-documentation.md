### Squared Slider Tabs 3x

Vuero provides special navigation tabs that you can use to build nice
looking and optimized layouts. Tabs work with a javascript implementation.
Check the markup for more details. These tabs only support 3 items.

<!--code-->

```vue
<template>
  <V-Tabs
    slider
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
        sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
        abducam, times. Quae diligentissime contra Aristonem dicuntur a
        Chryippo. Duo Reges: constructio interrete.
      </p>
      <p v-else-if="activeValue === 'projects'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
        sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
        abducam, times. Quae diligentissime contra Aristonem dicuntur a
        Chryippo. Duo Reges: constructio interrete.
      </p>
      <p v-else-if="activeValue === 'tasks'">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
        sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
        abducam, times. Quae diligentissime contra Aristonem dicuntur a
        Chryippo. Duo Reges: constructio interrete.
      </p>
    </template>
  </V-Tabs>
</template>
```

<!--/code-->

<!--example-->

<V-Tabs slider selected="team" :tabs="[{ label: 'Team', value: 'team' },{ label: 'Projects', value: 'projects' },{ label: 'Tasks', value: 'tasks' }]">
  <template #tab="{ activeValue }">
    <p v-if="activeValue === 'team'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
      beatissimum? Ne discipulum abducam, times. Quae
      diligentissime contra Aristonem dicuntur a Chryippo. Duo
      Reges: constructio interrete.
    </p>
    <p v-else-if="activeValue === 'projects'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
      beatissimum? Ne discipulum abducam, times. Quae
      diligentissime contra Aristonem dicuntur a Chryippo. Duo
      Reges: constructio interrete.
    </p>
    <p v-else-if="activeValue === 'tasks'">
      aLorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
      beatissimum? Ne discipulum abducam, times. Quae
      diligentissime contra Aristonem dicuntur a Chryippo. Duo
      Reges: constructio interrete.
    </p>
  </template>
</V-Tabs>

<!--/example-->
