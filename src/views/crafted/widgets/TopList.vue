<template>
  <!--begin::TopList-->
  <div class="card card-flush h-lg-100">
    <!--begin::Header-->
    <div class="card-header flex-nowrap pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold text-gray-900">Obat yang paling sering digunakan</span>
      </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body d-flex align-items-center justify-content-center px-3">
      <!-- ApexChart Container -->
      <div class="w-100 h-100 d-flex align-items-center justify-content-center">
        <apexchart type="bar" :options="chartOptions" :series="series" style="width: 100%; height: 100%;" />
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::TopList-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "TopList",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "Sales",
          data: [15000, 12000, 10000, 8000, 6000, 4000, 2000],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: '100%',
          width: '100%',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 4,
            barHeight: "30%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Phones", "Laptops", "Headsets", "Games", "Keyboards", "Monitors", "Speakers"],
          labels: {
            formatter: (val: number) => `${val}k`,
          },
        },
        colors: ["#3b82f6", "#f87171", "#10b981", "#facc15", "#a78bfa", "#38bdf8", "#6b7280"],
        grid: {
          borderColor: "#e7e7e7",
        },
      },
    };
  },
});
</script>