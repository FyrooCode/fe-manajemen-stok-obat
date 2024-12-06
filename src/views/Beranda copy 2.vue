<template>
    <!--begin::Row-->
    <div class="row g-5 g-xl-8">
      <div 
        class="col-xl-4" 
        v-for="(stock, index) in stockData" 
        :key="index"
      >
        <StatisticsWidget6
          :widget-classes="'card-xl-stretch mb-xl-8'"
          :color="stock.color"
          :title="`${stock.total} Items`"
          :description="stock.category"
          :progress="stock.percentage"
        />
      </div>
    </div>
    <!--end::Row-->
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
import StatisticsWidget6 from "@/components/widgets/statsistics/Widget6.vue";
  import ApiService from "@/core/services/ApiService";
  
  export default defineComponent({
    name: "StockStatistics",
    components: { StatisticsWidget6 },
    setup() {
      const stockData = ref([]);
  
      const fetchStockData = async () => {
        try {
          const response = await ApiService.getObat();
          const rawItems = response.data.data.data || [];
  
          // Transform the data for the widget
          stockData.value = rawItems.map((item) => {
            const percentage = Math.min(
              (item.stok / 100) * 100, // Normalize as percentage
              100
            ).toFixed(0);
  
            return {
              category: item.nama,
              total: item.stok,
              percentage: `${percentage}%`,
              color: getColor(item.stok),
            };
          });
        } catch (error) {
          console.error("Error fetching stock data:", error);
        }
      };
  
      const getColor = (stock) => {
        if (stock >= 50) return "success"; // High stock
        if (stock >= 20) return "warning"; // Moderate stock
        return "danger"; // Low stock
      };
  
      onMounted(() => {
        fetchStockData();
      });
  
      return {
        stockData,
      };
    },
  });
  </script>
  