<template>
    <BaseDialog ref="refCreateNews">
      <section class="login pa-5 mt-5">
        <v-row class="mb-5" style= "height: 50px;">
            <h1 class="text-left">Create News</h1>
        </v-row>
            <v-form v-model="valid" @submit.prevent="handleSubmit">
                <v-text-field
                    v-model="formValues.judul"
                    label="Title"
                    required
                    variant="outlined"
                ></v-text-field>
                <v-textarea label="Label" variant="outlined"></v-textarea>
                <v-row>
                    <v-col md="5" align-self="left">
                        <v-btn block color="success">
                            Add Attachment
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col md="6">

                    </v-col>
                    <v-col md="3">
                        <div class="d-flex justify-end mb-6">
                            <v-btn block color="success">
                                Cancel
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col md="3">
                        <div class="d-flex justify-end mb-6">
                            <v-btn block color="success">
                                Submit
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>

        </v-form>
      </section>
    </BaseDialog>
  </template>

<script setup>
  import BaseDialog from "@/components/Base/Dialog.vue";
  import { reactive, ref } from "@vue/reactivity";

  const formValues = reactive({
    judul: "",
    short_content: "",
    entry: "",
    image: "",
  });

  const refCreateNews = ref("");

  const handleSubmit = () => {

      refCreateNews.value.close();
    };
  </script>