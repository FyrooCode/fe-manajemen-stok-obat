<template>
  <div class="card card-flush h-100 d-flex flex-column" :class="className">
    <!-- Card Header -->
    <div class="card-header pt-5">
      <div class="card-title d-flex flex-column">
        <div class="d-flex align-items-center">
          <span class="fs-4 fw-semibold text-gray-500 me-1 align-self-start">Total Stock:</span>
          <span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">{{ totalStock }}</span>
        </div>
        <span class="text-gray-500 pt-1 fw-semibold fs-6">Stock by Category</span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body d-flex justify-content-center align-items-center">
      <div class="chart-container w-100 h-100 d-flex justify-content-center align-items-center">
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="series"
          :width="chartSize"
          :height="chartSize"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  name: "Widget3",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    className: { type: String, required: false },
    chartSize: { type: Number, required: true },
    totalStock: { type: Number, required: true },
    categories: { type: Array, required: true }, // { name: string, stock: number }[]
  },
  setup(props) {
    const colors = ref<string[]>([]);
    const series = ref<number[]>([]);
    const chartOptions = ref({
      chart: { type: "donut" },
      labels: [],
      legend: { fontSize: "14px", position: "bottom" },
      dataLabels: { style: { fontSize: "14px" } },
      noData: {
        text: 'No Data Available',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#888',
          fontSize: '14px',
          fontFamily: undefined
        }
      }
    });

    const generateColors = (count: number) => {
      return Array.from({ length: count }, (_, i) => {
        const hue = (i * 360) / count;
        return `hsl(${hue}, 70%, 50%)`;
      });
    };

    const updateChartOptions = () => {
      chartOptions.value = {
        ...chartOptions.value,
        labels: props.categories.map((category) => category.name),
      };
    };

    const updateSeries = () => {
      if (props.totalStock === 0) {
        series.value = [];
      } else {
        series.value = props.categories.map((category) => category.stock);
      }
    };

    onMounted(() => {
      if (props.categories && props.categories.length > 0) {
        colors.value = generateColors(props.categories.length);
        updateSeries();
        updateChartOptions();
      }
    });

    watch(() => props.categories, (newCategories) => {
      if (newCategories && newCategories.length > 0) {
        colors.value = generateColors(newCategories.length);
        updateSeries();
        updateChartOptions();
      } else {
        series.value = [];
      }
    });

    watch(() => props.totalStock, (newTotalStock) => {
      updateSeries();
    });

    return { colors, series, chartOptions };
  },
});
</script>