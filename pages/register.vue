<script setup lang="ts">
import { useFirebaseAuth } from "~/composables/useFirebaseAuth";
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const { register } = useFirebaseAuth();

const toast = useToast();

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

type Schema = z.output<typeof schema>;

const state = ref({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await register(event.data.email, event.data.password);
    toast.add({
      title: "Redirigiendo al admin",
      timeout: 3000,
      callback: async () => {
        await navigateTo("/admin");
      },
    });
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email" class="mb-4">
      <UInput v-model.trim="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" class="mb-4">
      <UInput v-model.trim="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
