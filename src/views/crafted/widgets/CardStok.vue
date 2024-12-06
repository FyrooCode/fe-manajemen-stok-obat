<template>
  <div class="card card-flush h-xl-100">
    <!--begin::Header-->
    <div class="card-header pt-7">
      <!--begin::Title-->
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold text-gray-900">Stok Obat</span>
      </h3>
      <!--end::Title-->
      <!--begin::Toolbar-->
      <div class="card-toolbar">
        <!-- <a href="apps/ecommerce/sales/details.html" class="btn btn-sm btn-light">Order Details</a> -->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Scroll-->
      <div class="hover-scroll-overlay-y pe-6 me-n6" style="height: 415px">
        <!--begin::Stock Statistics-->
        <div class="row g-3 flex-column">
          <div 
            class="col-12 mb-3" 
            v-for="(stock, index) in stockData" 
            :key="index"
          >
            <StatisticsWidget6
              :widget-classes="'card-xl-stretch mb-3'"
              :color="stock.color"
              :title="`${stock.total} Items`"
              :description="stock.category"
              :progress="stock.percentage"
            />
          </div>
        </div>
        <!--end::Stock Statistics-->
      </div>
      <!--end::Scroll-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import StatisticsWidget6 from "@/components/widgets/statsistics/Widget6.vue";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "CardStok",
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