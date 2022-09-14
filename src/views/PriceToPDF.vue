<template>
  <div id="element-to-convert">
    <div class="w-full bg-red-300 flex justify-between items-center">
      <router-link class="pl-5 flex items-center" to="/">
        <img
          src="image/logo.svg"
          class="mr-3 h-8 md:h-12"
          alt="Flowbite Logo"
        />
      </router-link>
      <div
        class="
          px-5
          py-2
          flex-col
          justify-center
          items-center
          text-center text-gray-700
        "
      >
        <p>+7(978)095-00-03</p>
        <p>strousimf@mail.ru</p>
        <p>г. Симферополь, ул. Крылова 164А</p>
      </div>
    </div>
    <div class="py-1 bg-red-300 text-center">
      Прейскурант на строительные материалы от 01.01.2010
    </div>
    <table class="w-full text-sm text-left">
      <thead class="bg-slate-600 bg-opacity-90 border-b border-gray-200">
        <tr>
          <th class="w-[55%] text-center py-1 px-1">Наименование</th>
          <th class="w-[15%] text-center py-1 px-1">Цена за тонну (розница)</th>
          <th class="w-[15%] text-center py-1 px-1">Цена за тонну (опт)</th>
          <th class="w-[15%] text-center py-1 px-1">Цена за мешок</th>
        </tr>
      </thead>
      <tbody class="bg-slate-500 bg-opacity-90 text-white text-center">
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.20-40)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Крошка диорит (фр.5-10)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Отсев диоритовый (фр.0-5)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Бут диоритовый</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="py-1 px-1">Щебень диоритовый (фр.5-20)</th>
          <td>1300</td>
          <td>1250</td>
          <td>85</td>
        </tr>
      </tbody>
    </table>
    <div class="flex py-3 justify-center items-center">
      <button
        @click="exportToPDF"
        class="bg-red-300 hover:bg-red-400 rounded-lg py-2 px-2"
      >
        Скачать PDF
      </button>
    </div>
  </div>
</template>
<script setup>
  import jsPDF from "jspdf";
  // import html2canvas from "html2canvas";
  import html2pdf from "html2pdf.js";
  const exportToPDF = () => {
    html2pdf(
      document.getElementById("element-to-convert", {
        margin: 100,
        fileName: "myPDF.pdf",
      })
    );
  };

  // function makePDF() {
  //   window.html2canvas = html2canvas;
  //   var doc = new jsPDF("p", "pt", "a4");
  //   doc.html(document.querySelector("#app"), {
  //     callback: function (pdf) {
  //       pdf.save("myPDF");
  //     },
  //   });
  // }
</script>
$
