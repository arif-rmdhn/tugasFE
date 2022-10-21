<template>
   <nav class="navbar navbar-expand-lg shadow fixed-top" style="background-color: #005C53">
      <div class="container">
         <a class="navbar-brand">Arif Ramadhan</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
               <li class="nav-item">
                  <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
               </li>
               <li class="nav-item">
                  <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
               </li>
               <li class="nav-item">
                  <RouterLink :to="{ name: 'project' }" class="nav-link">Project</RouterLink>
               </li>
               <li class="nav-item">
                  <RouterLink :to="{ name: 'contact' }" class="nav-link">Contact</RouterLink>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>
