<template>

    <div class="col-12">

        <!--begin::Row-->
        <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
            <!--begin::Total Stock Cards-->
            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Widget3 class="h-md-30 mb-5 mb-xl-10" :chartSize="350" :totalStock="totalStock"
                    :categories="categories" />
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <Widget3 class="h-md-30 mb-5 mb-xl-10" :chartSize="350" :totalStock="totalStock"
                    :categories="categories" />
            </div>
            <!--end::Total Stock Cards-->
        </div>

        <!--begin::card stok-->
        <div class="card card-flush h-xl-100">
            <!--begin::Header-->
            <div class="card-header pt-7">
                <!--begin::Title-->
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bold text-gray-900">Product Delivery</span>
                    <span class="text-gray-500 mt-1 fw-semibold fs-6">1M Products Shipped so far</span>
                </h3>
                <!--end::Title-->
                <!--begin::Toolbar-->
                <div class="card-toolbar">
                    <a href="apps/ecommerce/sales/details.html" class="btn btn-sm btn-light">Order Details</a>
                </div>
                <!--end::Toolbar-->
            </div>
            <!--end::Header-->
            <!--begin::Body-->
            <div class="card-body">
                <!--begin::Scroll-->
                <div class="hover-scroll-overlay-y pe-6 me-n6" style="height: 415px">
                    <!--begin::Item-->
                    <div class="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                        <!--begin::Info-->
                        <div class="d-flex flex-stack mb-3">
                            <!--begin::Wrapper-->
                            <div class="me-3">
                                <!--begin::Icon-->
                                <img src="assets/media/stock/ecommerce/210.png" class="w-50px ms-n1 me-1" alt="" />
                                <!--end::Icon-->
                                <!--begin::Title-->
                                <a href="apps/ecommerce/catalog/edit-product.html"
                                    class="text-gray-800 text-hover-primary fw-bold">Elephant 1802</a>
                                <!--end::Title-->
                            </div>
                            <!--end::Wrapper-->
                            <!--begin::Action-->
                            <div class="m-0">
                                <!--begin::Menu-->
                                <button
                                    class="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                                    data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end"
                                    data-kt-menu-overflow="true">
                                    <i class="ki-duotone ki-dots-square fs-1">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                        <span class="path4"></span>
                                    </i>
                                </button>
                                <!--begin::Menu 2-->
                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                                    data-kt-menu="true">
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions
                                        </div>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu separator-->
                                    <div class="separator mb-3 opacity-75"></div>
                                    <!--end::Menu separator-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link px-3">New Ticket</a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link px-3">New Customer</a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3" data-kt-menu-trigger="hover"
                                        data-kt-menu-placement="right-start">
                                        <!--begin::Menu item-->
                                        <a href="#" class="menu-link px-3">
                                            <span class="menu-title">New Group</span>
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <!--end::Menu item-->
                                        <!--begin::Menu sub-->
                                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3">Admin Group</a>
                                            </div>
                                            <!--end::Menu item-->
                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3">Staff Group</a>
                                            </div>
                                            <!--end::Menu item-->
                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3">Member Group</a>
                                            </div>
                                            <!--end::Menu item-->
                                        </div>
                                        <!--end::Menu sub-->
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link px-3">New Contact</a>
                                    </div>
                                    <!--end::Menu item-->
                                    <!--begin::Menu separator-->
                                    <div class="separator mt-3 opacity-75"></div>
                                    <!--end::Menu separator-->
                                    <!--begin::Menu item-->
                                    <div class="menu-item px-3">
                                        <div class="menu-content px-3 py-3">
                                            <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                        </div>
                                    </div>
                                    <!--end::Menu item-->
                                </div>
                                <!--end::Menu 2-->
                                <!--end::Menu-->
                            </div>
                            <!--end::Action-->
                        </div>
                        <!--end::Info-->
                        <!--begin::Customer-->
                        <div class="d-flex flex-stack">
                            <!--begin::Name-->
                            <span class="text-gray-500 fw-bold">To:
                                <a href="apps/ecommerce/sales/details.html"
                                    class="text-gray-800 text-hover-primary fw-bold">Jason Bourne</a></span>
                            <!--end::Name-->
                            <!--begin::Label-->
                            <span class="badge badge-light-success">Delivered</span>
                            <!--end::Label-->
                        </div>
                        <!--end::Customer-->
                    </div>
                    <!--end::Item-->

                </div>
                <!--end::Scroll-->
            </div>
            <!--end::Body-->
        </div>
        <!--end::card stok-->

        <!--begin::Table Widget 5-->
        <div class="card card-flush h-100">
            <!--begin::Card header-->
            <div class="card-header pt-7">
                <!--begin::Title-->
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bold text-gray-900">Stock Report</span>
                    <span class="text-gray-500 mt-1 fw-semibold fs-6">Total {{ totalItems }} Items in the
                        Stock</span>
                </h3>
                <!--end::Title-->
                <!--begin::Actions-->
                <div class="card-toolbar">
                    <!--begin::Filters-->
                    <div class="d-flex flex-stack flex-wrap gap-4">
                        <!--begin::Destination-->
                        <div class="d-flex align-items-center fw-bold">
                            <!--begin::Label-->
                            <div class="text-muted fs-7 me-2">Category</div>
                            <!--end::Label-->
                            <!--begin::Select-->
                            <select
                                class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                data-control="select2" data-hide-search="true" data-dropdown-css-class="w-150px"
                                data-placeholder="Select an option">
                                <option></option>
                                <option value="Show All" selected="selected">Show All</option>
                                <option value="a">Category A</option>
                                <option value="b">Category B</option>
                            </select>
                            <!--end::Select-->
                        </div>
                        <!--end::Destination-->
                        <!--begin::Status-->
                        <div class="d-flex align-items-center fw-bold">
                            <!--begin::Label-->
                            <div class="text-muted fs-7 me-2">Status</div>
                            <!--end::Label-->
                            <!--begin::Select-->
                            <select
                                class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                data-control="select2" data-hide-search="true" data-dropdown-css-class="w-150px"
                                data-placeholder="Select an option" data-kt-table-widget-5="filter_status">
                                <option></option>
                                <option value="Show All" selected="selected">Show All</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                                <option value="Low Stock">Low Stock</option>
                            </select>
                            <!--end::Select-->
                        </div>
                        <!--end::Status-->
                        <!--begin::Search-->
                        <a href="apps/ecommerce/catalog/products.html" class="btn btn-light btn-sm">View Stock</a>
                        <!--end::Search-->
                    </div>
                    <!--begin::Filters-->
                </div>
                <!--end::Actions-->
            </div>
            <!--end::Card header-->
            <!--begin::Card body-->
            <div class="card-body">
                <!--begin::Table-->
                <table class="table align-middle table-row-dashed fs-6 gy-3 w-100" id="kt_table_widget_5_table">
                    <!--begin::Table head-->
                    <thead>
                        <!--begin::Table row-->
                        <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                            <th class="min-w-150px">Item</th>
                            <th class="text-end pe-3 min-w-100px">Product ID</th>
                            <th class="text-end pe-3 min-w-150px">Date Added</th>
                            <th class="text-end pe-3 min-w-100px">Price</th>
                            <th class="text-end pe-3 min-w-100px">Status</th>
                            <th class="text-end pe-0 min-w-75px">Qty</th>
                        </tr>
                        <!--end::Table row-->
                    </thead>
                    <!--end::Table head-->
                    <!--begin::Table body-->
                    <tbody class="fw-bold text-gray-600">
                        <tr v-for="item in items" :key="item.id">
                            <!--begin::Item-->
                            <td>
                                <a href="apps/ecommerce/catalog/edit-product.html"
                                    class="text-gray-900 text-hover-primary">{{ item.nama }}</a>
                            </td>
                            <!--end::Item-->
                            <!--begin::Product ID-->
                            <td class="text-end">{{ item.id }}</td>
                            <!--end::Product ID-->
                            <!--begin::Date added-->
                            <td class="text-end">{{ formatDate(item.created_at) }}</td>
                            <!--end::Date added-->
                            <!--begin::Price-->
                            <td class="text-end">{{ formatCurrency(item.harga_jual) }}</td>
                            <!--end::Price-->
                            <!--begin::Status-->
                            <td class="text-end">
                                <span :class="['badge py-3 px-4 fs-7', getStatusClass(item.status)]">{{ item.status
                                    }}</span>
                            </td>
                            <!--end::Status-->
                            <!--begin::Qty-->
                            <td class="text-end" :data-order="item.stok">
                                <span class="text-gray-900 fw-bold">{{ item.stok }} PCS</span>
                            </td>
                            <!--end::Qty-->
                        </tr>
                    </tbody>
                    <!--end::Table body-->
                </table>
                <!--end::Table-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Table Widget 5-->
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
        const items = ref([]);
        const totalItems = ref(0);

        const getStatusClass = (status) => {
            switch (status) {
                case 'stok aman':
                    return 'badge-light-primary';
                case 'stok habis':
                    return 'badge-light-danger';
                case 'stok rendah':
                    return 'badge-light-warning';
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

        const fetchItems = async () => {
            try {
                const response = await ApiService.getObat();
                const rawItems = response.data.data.data;

                totalStock.value = rawItems.reduce((sum, item) => sum + item.stok, 0);
                categories.value = rawItems.map((item) => ({
                    name: item.kategori.nama,
                    stock: item.stok,
                }));
                items.value = rawItems || [];
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