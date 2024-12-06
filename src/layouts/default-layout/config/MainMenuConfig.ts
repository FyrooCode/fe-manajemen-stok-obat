import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Beranda",
        route: "/beranda",
        keenthemesIcon: "ki-duotone ki-home",
        bootstrapIcon: "bi-house",
      }
    ],
  },
  {
    heading: "Aplikasi",
    route: "/crafted",
    pages: [

      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Pengelolaan Obat",
        route: "/pengelolaan-obat",
        keenthemesIcon: "share",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Transaksi Obat",
        route: "/transaksi-obat",
        keenthemesIcon: "tag",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Laporan Stok Obat",
        route: "/laporan-stok-obat",
        keenthemesIcon: "notepad",
        bootstrapIcon: "bi-app-indicator",
      },


      // {
      //   sectionTitle: "pages",
      //   route: "/pages",
      //   keenthemesIcon: "element-plus",
      //   bootstrapIcon: "bi-archive",
      //   sub: [
      //     {
      //       sectionTitle: "profile",
      //       route: "/profile",
      //       sub: [
      //         {
      //           heading: "profileOverview",
      //           route: "/crafted/pages/profile/overview",
      //         },
      //         {
      //           heading: "projects",
      //           route: "/crafted/pages/profile/projects",
      //         },
      //         {
      //           heading: "campaigns",
      //           route: "/crafted/pages/profile/campaigns",
      //         },
      //         {
      //           heading: "documents",
      //           route: "/crafted/pages/profile/documents",
      //         },
      //         {
      //           heading: "connections",
      //           route: "/crafted/pages/profile/connections",
      //         },
      //         {
      //           heading: "activity",
      //           route: "/crafted/pages/profile/activity",
      //         },
      //       ],
      //     },
      //     {
      //       sectionTitle: "wizards",
      //       route: "/wizard",
      //       sub: [
      //         {
      //           heading: "horizontal",
      //           route: "/crafted/pages/wizards/horizontal",
      //         },
      //         {
      //           heading: "vertical",
      //           route: "/crafted/pages/wizards/vertical",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   sectionTitle: "account",
      //   route: "/account",
      //   keenthemesIcon: "profile-circle",
      //   bootstrapIcon: "bi-person",
      //   sub: [
      //     {
      //       heading: "accountOverview",
      //       route: "/crafted/account/overview",
      //     },
      //     {
      //       heading: "settings",
      //       route: "/crafted/account/settings",
      //     },
      //   ],
      // },
      // {
      //   sectionTitle: "authentication",
      //   keenthemesIcon: "fingerprint-scanning",
      //   bootstrapIcon: "bi-sticky",
      //   sub: [
      //     {
      //       sectionTitle: "basicFlow",
      //       sub: [
      //         {
      //           heading: "signIn",
      //           route: "/sign-in",
      //         },
      //         {
      //           heading: "signUp",
      //           route: "/sign-up",
      //         },
      //         {
      //           heading: "passwordReset",
      //           route: "/password-reset",
      //         },
      //       ],
      //     },
      //     {
      //       heading: "multiStepSignUp",
      //       route: "/multi-step-sign-up",
      //     },
      //     {
      //       heading: "error404",
      //       route: "/404",
      //     },
      //     {
      //       heading: "error500",
      //       route: "/500",
      //     },
      //   ],
      // },
      // {
      //   sectionTitle: "modals",
      //   route: "/modals",
      //   keenthemesIcon: "design",
      //   bootstrapIcon: "bi-shield-check",
      //   sub: [
      //     {
      //       sectionTitle: "general",
      //       route: "/general",
      //       sub: [
      //         {
      //           heading: "inviteFriends",
      //           route: "/crafted/modals/general/invite-friends",
      //         },
      //         {
      //           heading: "viewUsers",
      //           route: "/crafted/modals/general/view-user",
      //         },
      //         {
      //           heading: "upgradePlan",
      //           route: "/crafted/modals/general/upgrade-plan",
      //         },
      //         {
      //           heading: "shareAndEarn",
      //           route: "/crafted/modals/general/share-and-earn",
      //         },
      //       ],
      //     },
      //     {
      //       sectionTitle: "forms",
      //       route: "/forms",
      //       sub: [
      //         {
      //           heading: "newTarget",
      //           route: "/crafted/modals/forms/new-target",
      //         },
      //         {
      //           heading: "newCard",
      //           route: "/crafted/modals/forms/new-card",
      //         },
      //         {
      //           heading: "newAddress",
      //           route: "/crafted/modals/forms/new-address",
      //         },
      //         {
      //           heading: "createAPIKey",
      //           route: "/crafted/modals/forms/create-api-key",
      //         },
      //       ],
      //     },
      //     {
      //       sectionTitle: "wizards",
      //       route: "/wizards",
      //       sub: [
      //         {
      //           heading: "twoFactorAuth",
      //           route: "/crafted/modals/wizards/two-factor-auth",
      //         },
      //         {
      //           heading: "createApp",
      //           route: "/crafted/modals/wizards/create-app",
      //         },
      //         {
      //           heading: "createAccount",
      //           route: "/crafted/modals/wizards/create-account",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   sectionTitle: "widgets",
      //   route: "/widgets",
      //   keenthemesIcon: "element-7",
      //   bootstrapIcon: "bi-layers",
      //   sub: [
      //     {
      //       heading: "widgetsLists",
      //       route: "/crafted/widgets/lists",
      //     },
      //     {
      //       heading: "widgetsStatistics",
      //       route: "/crafted/widgets/statistics",
      //     },
      //     {
      //       heading: "widgetsCharts",
      //       route: "/crafted/widgets/charts",
      //     },
      //     {
      //       heading: "widgetsMixed",
      //       route: "/crafted/widgets/mixed",
      //     },
      //     {
      //       heading: "widgetsTables",
      //       route: "/crafted/widgets/tables",
      //     },
      //     {
      //       heading: "widgetsFeeds",
      //       route: "/crafted/widgets/feeds",
      //     },
      //   ],
      // },
    ],
  },
  {
    heading: "Master Data",
    route: "/apps",
    pages: [
      {
        heading: "Master Data Obat",
        route: "/master-data-obat",
        keenthemesIcon: "chart-simple-2",
        bootstrapIcon: "bi-printer",
      },
      {
        heading: "Master Data Vendor",
        route: "/customers",
        keenthemesIcon: "chart-simple-2",
        bootstrapIcon: "bi-printer",
      },
    ],
  },
];

export default MainMenuConfig;
