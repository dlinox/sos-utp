<template>
  <v-container
    class="h-100 d-flex justify-space-between align-center flex-column"
  >
    <div></div>
    <v-card class="w-md-75 bg-white" elevation="0">
      <div class="pa-4">
        <h3 class="">Registrarse</h3>
        <p class="">Ingrese sus datos para registrarse en el sistema.</p>
      </div>
      <v-card-item>
        <v-alert type="info" variant="tonal">
          Asegúrese de ingresar un correo válido, ya que se le enviará un correo
          con su contraseña.
        </v-alert>
      </v-card-item>
      <v-card-item>
        <v-form @submit.prevent="submitSignIn">
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="DNI"
                v-model="form.documentNumber"
                type="text"
                :rules="UserRules.documentNumber"
              />
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                label="Nombre"
                v-model="form.name"
                type="text"
                :rules="UserRules.name"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Apellido Paterno"
                v-model="form.paternalSurname"
                type="text"
                :rules="UserRules.paternalSurname"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                label="Apellido Materno"
                v-model="form.maternalSurname"
                type="text"
                :rules="UserRules.maternalSurname"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Número de Celular"
                v-model="form.phoneNumber"
                type="text"
                :rules="UserRules.phoneNumber"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Correo"
                v-model="form.email"
                prepend-inner-icon="mdi-email"
                type="text"
                :rules="UserRules.email"
                hint="Este correo será su usuario para ingresar al sistema."
              />
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" color="primary" block :loading="loading">
                Registrarme
              </v-btn>
            </v-col>

            <v-col cols="12">
              <v-btn
                type="button"
                variant="text"
                color="secondary"
                link
                block
                to="/"
              >
                Ingresar
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
import { ref } from "vue";
import { signUp } from "@/app/modules/auth/services";

import {
  type UserDTO,
  UserRules,
  initUserValues,
} from "@/app/modules/user/models/User.types";

const form = ref<UserDTO>({ ...initUserValues() });

const loading = ref(false);


const submitSignIn = async () => {
  loading.value = true;

  try {
    await signUp(form.value);
    location.href = "/";
    // router.push({ name: "Login" });
  } catch (error) {
    loading.value = false;
  } finally {
    loading.value = false;
  }
};
</script>
