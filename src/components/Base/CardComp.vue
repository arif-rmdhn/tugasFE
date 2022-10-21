<script>
export default {
   name: "CardComp",
   props: {
      data: Object,
   },
};
</script>

<template>
   <figure class="grid-item">
      <div class="image-container">
         <img class="grid-img" :src="data.img" alt="" />
      </div>
      <figcaption>{{ data.title }}</figcaption>
   </figure>
</template>

<style lang="scss">
.grid-item {
   width: 100%;
   overflow: hidden;
   border: 1px solid gray;
   border-radius: 1rem;
   
   .image-container{
      object-fit: cover;
      height: 250px;
   }

   figcaption {
      background-color: white;
      padding: 0.25rem 1rem;
      text-align: center;
   }
}

.grid-img {
   width: 100%;
}
</style>