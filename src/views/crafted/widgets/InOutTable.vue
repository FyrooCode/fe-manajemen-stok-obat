<template>
  <div class="card h-md-100">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0">
      <!--begin::Title-->
      <h3 class="fw-bold text-gray-900 m-0">Recent Orders</h3>
      <!--end::Title-->
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <!--begin::Nav-->
      <ul class="nav nav-pills nav-pills-custom mb-3">
        <!--begin::Item-->
        <li class="nav-item mb-3 me-3 me-lg-6">
          <!--begin::Link-->
          <a class="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden active w-80px h-85px py-4" data-bs-toggle="pill" href="#kt_stats_widget_2_tab_1">
            <!--begin::Icon-->
            <div class="nav-icon">
              <img alt="" src="assets/media/svg/products-categories/t-shirt.svg" class="" />
            </div>
            <!--end::Icon-->
            <!--begin::Subtitle-->
            <span class="nav-text text-gray-700 fw-bold fs-6 lh-1">T-shirt</span>
            <!--end::Subtitle-->
            <!--begin::Bullet-->
            <span class="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
            <!--end::Bullet-->
          </a>
          <!--end::Link-->
        </li>
        <!--end::Item-->
      </ul>
      <!--end::Nav-->
      <!--begin::Tab Content-->
      <div class="tab-content">
        <!--begin::Tap pane-->
        <div class="tab-pane fade show active" id="kt_stats_widget_2_tab_1">
          <!--begin::Table container-->
          <div class="table-responsive">
            <!--begin::Table-->
            <table class="table table-row-dashed align-middle gs-0 gy-4 my-0">
              <!--begin::Table head-->
              <thead>
                <tr class="fs-7 fw-bold text-gray-500 border-bottom-0">
                  <th class="ps-0 w-50px">ITEM</th>
                  <th class="min-w-125px"></th>
                  <th class="text-end min-w-100px">QTY</th>
                  <th class="pe-0 text-end min-w-100px">PRICE</th>
                  <th class="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                </tr>
              </thead>
              <!--end::Table head-->
              <!--begin::Table body-->
              <tbody>
                <tr>
                  <td>
                    <img src="assets/media/stock/ecommerce/210.png" class="w-50px ms-n1" alt="" />
                  </td>
                  <td class="ps-0">
                    <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Elephant 1802</a>
                    <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-2347</span>
                  </td>
                  <td>
                    <span class="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x1</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-gray-800 fw-bold d-block fs-6">$72.00</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-gray-800 fw-bold d-block fs-6">$126.00</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="assets/media/stock/ecommerce/215.png" class="w-50px ms-n1" alt="" />
                  </td>
                  <td class="ps-0">
                    <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0">Red Laga</a>
                    <span class="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">Item: #XDG-1321</span>
                  </td>
                  <td>
                    <span class="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">x2</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-gray-800 fw-bold d-block fs-6">$45.00</span>
                  </td>
                  <td class="text-end pe-0">
                    <span class="text-gray-800 fw-bold d-block fs-6">$76.00</span>
                  </td>
                </tr>
              </tbody>
              <!--end::Table body-->
            </table>
            <!--end::Table-->
          </div>
          <!--end::Table container-->
        </div>
        <!--end::Tap pane-->
      </div>
      <!--end::Tab Content-->
    </div>
    <!--end: Card Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InOutTable",
});
</script>