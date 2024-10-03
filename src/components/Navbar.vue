<script setup>
import { ref } from "vue";
import NavItem from "../components/NavItem.vue";
import IconImg1 from "../assets/img/doctorbag.svg";
import IconHamburgerMenu from "../assets/img/hamburgermenu.svg";
import IconUser from "../assets/img/user.svg";
import { clsx } from "clsx";

const setNav = ref(false);

const NavItems = [
  {
    label: "Laboratorium",
    icon: IconImg1,
    items: [
      {
        label: "Ringkasan Kunjungan",
      },
      {
        label: "Ringkasan Kunjungan Basis Unit",
      },
    ],
  },
  {
    label: "Radiologi",
    icon: IconImg1,
    items: [
      {
        label: "Ringkasan Kunjungan",
      },
      {
        label: "Ringkasan Kunnjungan Basis Unit",
      },
    ],
  },
  {
    label: "Kunjungan Layanan",
    icon: IconImg1,
  },
  {
    label: "Anjungan Mandiri",
    icon: IconImg1,
  },
  {
    label: "RBAC",
    icon: IconImg1,
  },
];

const handleNav = () => {
  setNav.value = !setNav.value;
  const sidebar = document.querySelector(".sidebar");
};
</script>
<template>
  <div class="flex">
    <!-- sidebar -->
    <div
      :class="
        clsx(
          'sidebar bg-white min-h-screen w-full max-w-[300px] border-[1.5px] transition ease-in-out',
          { hidden: setNav }
        )
      "
    >
      <!-- logos -->
      <div class="border-b-[1.5px] px-8 h-[90px] flex flex-col justify-center">
        <h4 class="font-bold text-blue-800 text-xl">LOGO BALI MED</h4>
        <p class="text-xs">Lorem ipsum dolor sit amet.</p>
      </div>
      <!-- nav items -->
      <div class="p-4">
        <!-- items -->
        <NavItem
          v-for="(item, index) in NavItems"
          :key="index"
          :label="item.label"
          :icon="item.icon"
        />
      </div>
    </div>
    <div class="w-full">
      <!-- nav top -->
      <nav
        class="border-b-[1.5px] w-full transition h-[92px] flex items-center justify-between px-4 z-10"
      >
        <!--  -->
        <div class="flex gap-4 items-center py-3">
          <img
            :src="IconHamburgerMenu"
            alt="hamburger menu"
            class="w-7 cursor-pointer"
            @click="handleNav"
          />
          <div class="font-bold">
            <h3 class="text-blue-800">Dashboard Live Report SIMRS BALIMED</h3>
            <h5 class="text-gray-500 -mt-1">Dashboard</h5>
          </div>
        </div>
        <!--  -->
        <div class="bg-blue-800 w-[50px] h-[50px] p-3 rounded-full">
          <img :src="IconUser" alt="user" class="w-full" />
        </div>
      </nav>
      <!-- main -->
      <div class="bg-gray-100 min-h-screen p-6">
        <router-view />
      </div>
    </div>
  </div>
</template>
