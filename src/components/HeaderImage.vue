<template>
<div>
    <div id="parallax" class="header-image"></div>
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
    background-image:url(../assets/city_gif.gif);
    background-size: 50% ;
    background-position-y: -150px;
    height: 300px;

}

</style>