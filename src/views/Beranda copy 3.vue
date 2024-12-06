<template>
    <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
      <Widget3
        className="h-md-50 mb-5 mb-xl-10"
        :chartSize="100"
        :totalStock="totalStock"
        :categories="categories"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import ApiService from "@/core/services/ApiService";
  import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
  
  export default defineComponent({
    name: "main-dashboard",
    components: { Widget3 },
    setup() {
      const totalStock = ref(0);
      const categories = ref([]);
  
      const fetchItems = async () => {
        try {
          const response = await ApiService.getObat();
          const rawItems = response.data.data.data;
  
          totalStock.value = rawItems.reduce((sum, item) => sum + item.stok, 0);
          categories.value = rawItems.map((item) => ({
            name: item.kategori.nama,
            stock: item.stok,
          }));
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      };
  
      onMounted(fetchItems);
  
      return { totalStock, categories };
    },
  });
  </script>
  