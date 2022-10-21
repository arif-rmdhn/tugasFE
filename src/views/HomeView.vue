<script>
import project from "@/views/Project.vue";
import contact from "@/views/contact.vue";

export default {
   name: "HomeView",
   components: {
      project,
      contact,
   },
};
</script>

<template>
   <section class="jumbotron text-center">
      <img src="@/assets/img/foto.jpeg" width="200" alt="" class="rounded-circle img-thumbnail" />
      <h1 class="display-4">Arif Ramadhan</h1>
      <p class="lead">STUDENT | MUSICIAN</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path
            fill="#10403B"
            fill-opacity="10"
            d="M0,64L48,64C96,64,192,64,288,90.7C384,117,480,171,576,165.3C672,160,768,96,864,80C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
         ></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
         <path
            fill="#10403B"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,64C320,75,400,117,480,122.7C560,128,640,96,720,74.7C800,53,880,43,960,69.3C1040,96,1120,160,1200,165.3C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
         ></path>
      </svg>
   </section>
   <project />
   <contact />
</template>
