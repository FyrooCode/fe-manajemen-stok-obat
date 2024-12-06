<template>
  <!--begin::Products-->
  <div class="card card-flush">
    <!--begin::Card header-->
    <div class="card-header align-items-center py-5 gap-2 gap-md-5">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            v-model="search"
            @input="searchItems"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Product"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--end::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
        <div class="w-100 mw-150px">
          <!--begin::Select2-->
          <select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
            data-placeholder="Status" data-kt-ecommerce-product-filter="status">
            <option></option>
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="scheduled">Scheduled</option>
            <option value="inactive">Inactive</option>
          </select>
          <!--end::Select2-->
        </div>
        <!--begin::Add product-->
        <a href="apps/ecommerce/catalog/add-product.html" class="btn btn-primary">Add Product</a>
        <!--end::Add product-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body pt-0">
      <!--begin::Table-->
      <KTDataTable
        :header="tableHeader"
        :data="filteredItems"
        :itemsPerPage="itemsPerPage"
        :total="totalItems"
        :loading="loading"
        @page-change="handlePageChange"
        @on-sort="handleSort"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:id="{ row: data }">
          {{ data.id }}
        </template>
        <template v-slot:nama="{ row: data }">
          <div class="d-flex align-items-center">
            <a :href="`apps/ecommerce/catalog/edit-product.html?id=${data.id}`" class="symbol symbol-50px">
              <span class="symbol-label" :style="`background-image:url(${data.foto});`"></span>
            </a>
            <div class="ms-5">
              <a :href="`apps/ecommerce/catalog/edit-product.html?id=${data.id}`" class="text-gray-800 text-hover-primary fs-5 fw-bold">
                {{ data.nama }}
              </a>
            </div>
          </div>
        </template>
        <template v-slot:stok="{ row: data }">
          {{ data.stok }}
        </template>
        <template v-slot:min_stok="{ row: data }">
          {{ data.min_stok }}
        </template>
        <template v-slot:harga_jual="{ row: data }">
          {{ formatCurrency(data.harga_jual) }}
        </template>
        <template v-slot:deskripsi="{ row: data }">
          {{ data.deskripsi }}
        </template>
        <template v-slot:kategori.nama="{ row: data }">
          {{ data.kategori.nama }}
        </template>
        <template v-slot:vendor.nama="{ row: data }">
          {{ data.vendor.nama }}
        </template>
        <template v-slot:actions="{ row: data }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >Actions
            <KTIcon icon-name="down" icon-class="fs-5 m-0" />
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a :href="`apps/ecommerce/catalog/edit-product.html?id=${data.id}`" class="menu-link px-3">Edit</a>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a href="#" class="menu-link px-3" @click="deleteItem(data.id)">Delete</a>
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </KTDataTable>
      <!--end::Table-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Products-->
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, nextTick } from "vue";
import ApiService from "@/core/services/ApiService";
import KTDataTable from "@/components/kt-datatable/KTDataTable.vue";
import KTIcon from "@/core/helpers/kt-icon/KTIcon.vue";
import { MenuComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "MasterDataObat",
  components: { KTDataTable, KTIcon },
  setup() {
    const items = ref([]);
    const totalItems = ref(0);
    const itemsPerPage = ref(10);
    const currentPage = ref(1);
    const loading = ref(false);
    const search = ref("");

    const tableHeader = ref([
      { columnName: "ID", columnLabel: "id" },
      { columnName: "Nama", columnLabel: "nama" },
      { columnName: "Stok", columnLabel: "stok" },
      { columnName: "Min Stok", columnLabel: "min_stok" },
      { columnName: "Harga Jual", columnLabel: "harga_jual" },
      { columnName: "Deskripsi", columnLabel: "deskripsi" },
      { columnName: "Kategori", columnLabel: "kategori.nama" },
      { columnName: "Vendor", columnLabel: "vendor.nama" },
      { columnName: "Actions", columnLabel: "actions" },
    ]);

    const fetchItems = async () => {
      loading.value = true;
      try {
        const response = await ApiService.getObat();
        const rawItems = response.data.data.data;
        items.value = rawItems;
        totalItems.value = rawItems.length;
        nextTick(() => {
          // Initialize the dropdown menu
          MenuComponent.reinitialization();
        });
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        loading.value = false;
      }
    };

    const filteredItems = computed(() => {
      if (!search.value) {
        return items.value;
      }
      return items.value.filter((item) =>
        item.nama.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const handlePageChange = (page: number) => {
      currentPage.value = page;
      fetchItems();
    };

    const handleSort = (sort: { value: string; order: string }) => {
      // Implement sorting logic here if needed
      console.log("Sorting by:", sort);
    };

    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value);
    };

    const deleteItem = async (id: number) => {
      try {
        await ApiService.delete(`obat/${id}`);
        fetchItems();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };

    const searchItems = () => {
      // The search functionality is handled by the computed property `filteredItems`
      console.log("Searching for:", search.value);
    };

    onMounted(fetchItems);

    return {
      items,
      totalItems,
      itemsPerPage,
      currentPage,
      loading,
      tableHeader,
      handlePageChange,
      handleSort,
      formatCurrency,
      deleteItem,
      search,
      searchItems,
      filteredItems,
    };
  },
});
</script>