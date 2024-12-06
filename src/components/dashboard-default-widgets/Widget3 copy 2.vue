<template>
  <div class="card card-flush" :class="className">
    <!--begin::Header-->
    <div class="card-header pt-5">
      <!--begin::Title-->
      <div class="card-title d-flex flex-column">
        <!--begin::Info-->
        <div class="d-flex align-items-center">
          <!--begin::Currency-->
          <span class="fs-4 fw-semibold text-gray-500 me-1 align-self-start">Total Stock:</span>
          <!--end::Currency-->

          <!--begin::Amount-->
          <span class="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">{{ totalStock }}</span>
          <!--end::Amount-->
        </div>
        <!--end::Info-->

        <!--begin::Subtitle-->
        <span class="text-gray-500 pt-1 fw-semibold fs-6">Stock by Category</span>
        <!--end::Subtitle-->
      </div>
      <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Card body-->
    <div class="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
      <!--begin::Chart-->
      <div class="d-flex flex-center me-5 pt-2">
        <div
          id="kt_card_widget_17_chart"
          :style="{ minWidth: `${chartSize}px`, minHeight: `${chartSize}px` }"
          :data-kt-size="chartSize"
          :data-kt-line="11"
        ></div>
      </div>
      <!--end::Chart-->

      <!--begin::Labels-->
      <div class="d-flex flex-column content-justify-center flex-row-fluid">
        <div
          v-for="(category, index) in categories"
          :key="category.name"
          class="d-flex fw-semibold align-items-center my-3"
        >
          <!--begin::Bullet-->
          <div
            class="bullet w-8px h-3px rounded-2 me-3"
            :style="{ backgroundColor: colors[index % colors.length] }"
          ></div>
          <!--end::Bullet-->

          <!--begin::Label-->
          <div class="text-gray-500 flex-grow-1 me-4">{{ category.name }}</div>
          <!--end::Label-->

          <!--begin::Stats-->
          <div class="fw-bolder text-gray-700 text-xxl-end">{{ category.stock }} PCS</div>
          <!--end::Stats-->
        </div>
        <!--end::Label-->
      </div>
      <!--end::Labels-->
    </div>
    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "Widget3",
  props: {
    className: { type: String, required: false },
    chartSize: { type: Number, required: true },
    totalStock: { type: Number, required: true },
    categories: { type: Array, required: true }, // { name: string, stock: number }[]
  },
  setup(props, { expose }) {
    const colors = ref<string[]>([]);

    const generateColors = (count: number) => {
      return Array.from({ length: count }, (_, i) => {
        const hue = (i * 360) / count; // Spread hues evenly
        return `hsl(${hue}, 70%, 50%)`; // Vivid colors with 70% saturation, 50% lightness
      });
    };

    const initChart = () => {
      expose();
      const el = document.getElementById("kt_card_widget_17_chart");

      if (!el) return;

      const options = {
        size: el.getAttribute("data-kt-size")
          ? parseInt(el.getAttribute("data-kt-size") as string)
          : 70,
        lineWidth: el.getAttribute("data-kt-line")
          ? parseInt(el.getAttribute("data-kt-line") as string)
          : 11,
        rotate: el.getAttribute("data-kt-rotate")
          ? parseInt(el.getAttribute("data-kt-rotate") as string)
          : 145,
      };

      // Clear the existing canvas if it exists
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      canvas.width = canvas.height = options.size;
      el.appendChild(canvas);

      ctx.translate(options.size / 2, options.size / 2);
      ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

      const radius = (options.size - options.lineWidth) / 2;

      // Clear the canvas before drawing
      ctx.clearRect(-options.size / 2, -options.size / 2, options.size, options.size);

      // Draw the background circle first
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "#E4E6EF";
      ctx.lineWidth = options.lineWidth;
      ctx.stroke();

      const totalStock = props.categories.reduce((sum, cat) => sum + cat.stock, 0);

      let startAngle = 0;

      props.categories.forEach((category, index) => {
        const percentage = category.stock / totalStock;
        const endAngle = startAngle + Math.PI * 2 * percentage;

        // Draw the segment
        ctx.beginPath();
        ctx.arc(0, 0, radius, startAngle, endAngle, false);
        ctx.strokeStyle = colors.value[index % colors.value.length]; // Use dynamic color
        ctx.lineWidth = options.lineWidth;
        ctx.stroke();

        startAngle = endAngle;
      });
    };

    onMounted(() => {
      colors.value = generateColors(props.categories.length);
      initChart();
    });

    watch(() => props.categories, (newCategories) => {
      colors.value = generateColors(newCategories.length);
      initChart();
    });

    return { colors };
  },
});
</script>