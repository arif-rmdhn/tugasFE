<template>
    <section class=" text-center" style="background-color:#589A8D">
       <img src="@/assets/img/robot.png" width="300" alt="" class="img-fluid" />
       <h1 class="display-4">Pemilah Barang Otomatis</h1>
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
                <p>Bagian robot ini terdiri dari Arduino Uno sebagai microcontroller untuk servo pada lengan, sensor warna TCS 3200 sebagai pembaca warna yang nantinya akan diambil dan diletak kan sesuai warna oleh robot, motor servo untuk bagian base, shoulder, dan elbow penggerak dari tiap sendi robot.</p>
             </div>
             <div class="col-md-5 mb-3">
                <p>Sensor Warna TCS 3200 Membaca Warna RGB pada Kubus Berwarna yang telah di bentuk yang nantinya akan mengirim data ke arduino dan arduino mengirim data ke robot lengan. Motor Servo akan bergerak berputar, maju, mengangkat dan mengapit sesuai derajat yang di coding pada arduino. Letakkan Kubus berwarna yang di buat dengan kertas origami di atas sensor warna TCS 3200 , system akan membaca dan robot lengan akan bergerak mengambil kubus tersebut dan meletakkannya sesuai dengan kotak warna yang sudah di sediakan.</p>
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
 