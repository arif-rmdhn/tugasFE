<script>
import MainHeader from "@/components/main/header.vue";
import MainFooter from "@/components/main/footer.vue";

export default {
   name: "DefaultView",
   components: {
      MainHeader,
      MainFooter,
   },
};
</script>

<template>
   <MainHeader />
   <main>
      <slot />
   </main>
   <MainFooter />
</template>