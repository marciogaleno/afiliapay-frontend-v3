<template>
  <V-Dropdown right spaced class="user-dropdown profile-dropdown">
    <template #button="{ toggle }">
      <a
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @click="toggle"
      >
        <V-Avatar picture="https://vuero.cssninja.io/demo/avatars/8.jpg" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <V-Avatar
          size="large"
          picture="https://vuero.cssninja.io/demo/avatars/8.jpg"
        />

        <div class="meta">
          <span>Erik Kovalsky</span>
          <span>Product Manager</span>
        </div>
      </div>

      <a href="/profile-edit" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-user-alt"></i>
        </div>
        <div class="meta">
          <span>Dados Cadastrais</span>
          <span> Edite seus dados</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Saques</span>
          <span>Saque o valor de suas vendas</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
        </div>
        <div class="meta">
          <span>Colaboradores</span>
          <span>Adicione subusuários para a sua conta</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <!--<a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Account settings</span>
        </div>
      </a>-->

      <hr class="dropdown-divider" />

      <div class="dropdown-item is-button">
        <RouterLink :to="{ name: 'auth-login' }">
          <V-Button
            class="logout-button"
            icon="feather:log-out"
            color="primary"
            role="menuitem"
            raised
            fullwidth
          >
            Desconectar
          </V-Button>
        </RouterLink>
      </div>
    </template>
  </V-Dropdown>
</template>
