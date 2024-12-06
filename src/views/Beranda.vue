<template>
  <div class="col-12">
    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
      <!--begin::Total Stock Cards-->
      <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <Widget3
          class="h-md-30 mb-5 mb-xl-10"
          :chartSize="350"
          :totalStock="totalStock"
          :categories="categories"
        />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <CardStok />
      </div>
      <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <TopList />
      </div>
      <!--end::Total Stock Cards-->
    </div>

    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
      <!--begin::Table Stok-->
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <TableStok
          :items="items"
          :totalItems="totalItems"
          :getStatusClass="getStatusClass"
          :formatDate="formatDate"
          :formatCurrency="formatCurrency"
        />
      </div>
      <!--end::Table Stok-->

      <!--begin::In Out Table-->
      <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <InOutTable />
      </div>
      <!--end::In Out Table-->
    </div>
    <!--end::Row-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import ApiService from "@/core/services/ApiService";
import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
import CardStok from "@/views/crafted/widgets/CardStok.vue";
import TableStok from "@/views/crafted/widgets/TableStok.vue";
import InOutTable from "@/views/crafted/widgets/InOutTable.vue";
import TopList from "@/views/crafted/widgets/TopList.vue";

export default defineComponent({
  name: "main-dashboard",
  components: { Widget3, CardStok, TableStok, InOutTable, TopList },
  setup() {
    const totalStock = ref(0);
    const categories = ref([]);
    const items = ref([]);
    const totalItems = ref(0);

    const getStatusClass = (status) => {
      switch (status) {
        case 'stok aman':
          return 'badge-light-primary';
        case 'stok rendah':
          return 'badge-light-warning';
        case 'restock':
          return 'badge-light-danger';
        default:
          return '';
      }
    };

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value);
    };

    const determineStatus = (item) => {
      if (item.stok <= item.min_stok) {
        return 'restock';
      } else if (item.stok <= item.min_stok * 2) {
        return 'stok rendah';
      } else {
        return 'stok aman';
      }
    };

    const fetchItems = async () => {
      try {
        const response = await ApiService.getObat();
        const rawItems = response.data.data.data;

        totalStock.value = rawItems.reduce((sum, item) => sum + item.stok, 0);
        categories.value = rawItems.map((item) => ({
          name: item.kategori.nama,
          stock: item.stok,
        }));
        items.value = rawItems.map((item) => ({
          ...item,
          status: determineStatus(item),
        }));
        totalItems.value = items.value.length;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    onMounted(fetchItems);

    return {
      totalStock,
      categories,
      items,
      totalItems,
      getStatusClass,
      formatDate,
      formatCurrency,
    };
  },
});
</script>