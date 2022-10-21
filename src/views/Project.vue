<template>
   <section id="projects">
      <div class="container">
         <div class="row text-center mb-md-4">
            <div class="col">
               <h2>My projects</h2>
            </div>
         </div>

         <div class="row">
            <div class="col-md-4 mb-3">
               <RouterLink :to="{ name: 'detail1' }">
                  <div class="card">
                     <img src="@/assets/img/1.jpg" class="card-img-top" alt="Project" />
                     <div class="card-body">
                        <p class="card-text">IoT Monitoring Sensor</p>
                     </div>
                  </div>
               </RouterLink>
            </div>

            <div class="col-md-4 mb-3">
               <RouterLink :to="{ name: 'detail2' }">
                  <div class="card">
                     <img src="@/assets/img/2.jpg" class="card-img-top" alt="Project" />
                     <div class="card-body">
                        <p class="card-text">Jam Sholat Otomatis</p>
                     </div>
                  </div>
               </RouterLink>
            </div>

            <div class="col-md-4 mb-2">
               <RouterLink :to="{ name: 'detail3' }">
                  <div class="card">
                     <img src="@/assets/img/3.jpg" class="card-img-top" alt="Project" />
                     <div class="card-body">
                        <p class="card-text">Pemilah Barang Otomatis</p>
                     </div>
                  </div>
               </RouterLink>
            </div>
         </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path
            fill="#347355"
            fill-opacity="1"
            d="M0,160L26.7,170.7C53.3,181,107,203,160,192C213.3,181,267,139,320,144C373.3,149,427,203,480,234.7C533.3,267,587,277,640,272C693.3,267,747,245,800,218.7C853.3,192,907,160,960,160C1013.3,160,1067,192,1120,181.3C1173.3,171,1227,117,1280,101.3C1333.3,85,1387,107,1413,117.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
         ></path>
      </svg>
   </section>
</template>
