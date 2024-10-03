<script setup>
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import MultiSelect from "primevue/multiselect";
import { ref, onMounted } from "vue";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import IconLoading from "../assets/img/loading.svg";
import { clsx } from "clsx";
import Chart from "primevue/chart";

const loading = ref(false);
const selectedCity = ref();
const selectedCities = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

// chart

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Jumlah Pasien",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        color: "#1f0869",
        tension: 0,
        backgroundColor: "#1f0869",
        borderWidth: 6,
        borderColor: "rgba(31, 8, 105,0.2)",
        pointBorderWidth: 20,
        // Point configuration
        pointRadius: 6, // Default point size
        pointHoverRadius: 8, // Point size on hover
        pointBorderWidth: 2, // Point border thickness
        pointBackgroundColor: "#1f0869", // Point color
        pointBorderColor: "#1f0869", // Point border color
      },
      {
        label: "Jumlah Pemeriksaan",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        tension: 0,
        backgroundColor: "#2db01c",
        borderWidth: 6,
        pointBorderWidth: 20,
        borderColor: "rgba(45, 176, 28,0.2)",
        // Point configuration
        pointRadius: 6, // Default point size
        pointHoverRadius: 8, // Point size on hover
        pointBorderWidth: 2, // Point border thickness
        pointBackgroundColor: "#2db01c", // Point color
        pointBorderColor: "#2db01c", // Point border color
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");
  const textColorSecondary = documentStyle.getPropertyValue("--p-text-muted-color");
  const surfaceBorder = documentStyle.getPropertyValue("--p-content-border-color");

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>
<template>
  <h1 class="text-blue-800 font-bold text-3xl mb-2">Statistik Lab</h1>
  <p class="text-gray-500 font-light text-lg">Live Report Statistik Lab</p>
  <!-- table -->
  <form>
    <div class="bg-blue-800 p-4 rounded-t-xl mt-6">
      <h3 class="text-white font-semibold">Filter Data</h3>
    </div>
    <div class="bg-white px-8 py-6 flex flex-col gap-6">
      <!-- row1 -->
      <div class="flex gap-5">
        <div class="w-full">
          <label class="font-semibold">Tanggal Periksa (Mulai)</label>
          <DatePicker
            v-model="icondisplay"
            showIcon
            fluid
            iconDisplay="input"
            class="mt-3"
          />
        </div>
        <div class="w-full">
          <label class="font-semibold">Tanggal Periksa (Selesai)</label>
          <DatePicker
            v-model="icondisplay"
            showIcon
            fluid
            iconDisplay="input"
            class="mt-3"
          />
        </div>
        <div class="w-full">
          <label class="font-semibold">Tipe Ringkesan</label>
          <DatePicker
            v-model="icondisplay"
            showIcon
            fluid
            iconDisplay="input"
            class="mt-3"
          />
        </div>
      </div>
      <!-- row2 -->
      <div class="flex gap-5">
        <div class="w-full">
          <label class="font-semibold">Subnit Asal</label>
          <Select
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
            class="w-full mt-3"
          />
        </div>
        <div class="w-full">
          <label class="font-semibold">Subnit Tujuan</label>

          <div class="card flex justify-center">
            <MultiSelect
              v-model="selectedCities"
              display="chip"
              :options="cities"
              optionLabel="name"
              filter
              placeholder="Select Cities"
              :maxSelectedLabels="3"
              class="w-full mt-3"
            />
          </div>
        </div>
      </div>
      <!-- button -->
      <div class="card flex justify-end">
        <Button
          type="button"
          label="Search"
          @click="load"
          severity="info"
          class="!bg-blue-800 font-semibold"
        >
          <img
            :src="IconLoading"
            alt="Loading"
            :class="clsx('h-8', { 'animate-spin': loading })"
          />
          Refresh Data
        </Button>
      </div>
    </div>
  </form>
  <!-- chart -->
  <div>
    <div class="bg-blue-800 p-4 rounded-t-xl mt-10">
      <h3 class="text-white font-semibold">Patologi Klinik</h3>
    </div>
    <div class="bg-white px-8 py-6 flex flex-col gap-6">
      <!-- chart -->
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />

      <!-- table -->
    </div>
  </div>
</template>
