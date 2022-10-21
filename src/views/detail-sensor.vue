<template>
   <section class=" text-center" style="background-color:#589A8D">
      <img src="@/assets/img/sensor.png" width="300" alt="" class="img-fluid" />
      <h1 class="display-4">Monitoring Sensor System</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path
            fill="#8FC1B5"
            fill-opacity="10"
            d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,165.3C672,160,768,96,864,80C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
         ></path>
      </svg>
   </section>

   <section id="about" style="background-color: #8FC1B5">
      <div class="container">
         <div class="row text-center mb-5">
            <div class="col">
               <h2>Detail Alat</h2>
            </div>
         </div>
         <div class="row justify-content-center fs-5 text-center">
            <div class="col-md-5 mb-3">
               <p>Alat ini digunakan untuk memonitoring ketinggian air, kelembaban udara, dan temperature suhu. Alat ini masih berupa prototype hanya untuk pembuatan project akhir dari mata kuliah Internet of Things.</p>
            </div>
            <div class="col-md-5 mb-3">
               <p>Alat ini akan menampilkan nilai kelembaban, suhu,status kipas/pendingin dan setpoint, serta dapat mengirimkan nilai setpoint ke nodemcu agar bisa merubah setpoint yang diinginkan. Untuk tampilan yang kedua terdapat nilai ketinggian serta status kipas dan LED. Node mcu yang nantinya yang akan mengirimkan infromasi ke laptop dan kemudian laptop menerima data untuk selanjutkan akan ditampilkan.</p>
            </div>
         </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path
            fill="#10403B"
            fill-opacity="1"
            d="M0,32L48,26.7C96,21,192,11,288,37.3C384,64,480,128,576,160C672,192,768,192,864,170.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
         ></path>
      </svg>
   </section>
</template>
