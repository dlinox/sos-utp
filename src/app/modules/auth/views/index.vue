<template>
  <div v-if="landingPage" class="loading-container" @click="landingPage = false">
    <img :src="LandingImage" alt="" />
  </div>
  <v-container
    class="h-100 d-flex justify-space-between align-center flex-column"
    v-if="!landingPage"
  >
    <div></div>
    <v-card class="w-md-75 bg-white" elevation="0">
      <div class="pa-4">
        <h3 class="text-center">Iniciar sesión</h3>
        <p class="text-center">
          Ingrese sus credenciales para acceder al sistema.
        </p>
      </div>

      <v-card-item>
        <v-form @submit.prevent="submitSignIn">
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Usuario"
                v-model="form.email"
                prepend-inner-icon="mdi-email"
                type="text"
                :rules="AuthFormRules.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                autocomplete="off"
                v-model="form.password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="() => (showPassword = !showPassword)"
                label="Contraseña"
                :rules="AuthFormRules.password"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" color="primary" block :loading="loading">
                Ingresar
              </v-btn>
            </v-col>

            <v-col cols="12">
              <v-btn
                type="button"
                variant="text"
                color="secondary"
                link
                block
                to="/register"
              >
                registrarme
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
    </v-card>

    <div class="text-center">
      <small> &copy; {{ new Date().getFullYear() }} </small>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { signIn } from "@/app/modules/auth/services";
import { type AuthForm, AuthFormRules } from "../models";

import { LandingImage } from "@/common/resources/images";

const landingPage = ref(true);

const form: Ref<AuthForm> = ref({
  email: "",
  password: "",
});

const loading = ref(false);

const showPassword = ref(false);

const submitSignIn = async () => {
  loading.value = true;
  await signIn(form.value);
  loading.value = false;
};
</script>
<style>
.loading-container {
  background-color: #3578C5;
  height: 100vh;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
