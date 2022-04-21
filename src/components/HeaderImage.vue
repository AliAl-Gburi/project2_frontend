<template>
<div>
    <div id="parallax" class="header-image"></div>
    <div class="header-overlay"></div>
    </div>
    
</template>

<script>

export default {
    name: 'HeaderImage',
     mounted() {
  const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function() {
    let offset = this.window.pageYOffset;
    parallax.style.backgroundPositionY = (offset * 0.7)-50 + "px";
})
}
}
</script>

<style scoped>
.header-image{
    background-image:url(../assets/header.jpg);
    background-position-y: -50px;
    height: 300px;

}
.header-overlay {
    background-color: black;
    width: 100%;
    
    height: 300px;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 56px;
    right: 0;
    bottom: 0;
}
</style>