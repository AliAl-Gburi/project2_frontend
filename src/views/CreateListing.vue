<template>
  <div class="container">
    <form>
  <div class="mb-3">
    <label for="description" class="form-label my-label">Description</label>
    <textarea type="text" class="form-control" id="description" aria-describedby="emailHelp"></textarea>
  </div>
  <div class="mb-3">
    <label for="estimatedTime" class="form-label my-label">Estimated Time</label>
    <input type="time" class="form-control" id="estimatedTime">
  </div>
  <div class="mb-3">
    <label for="estimatedPay" class="form-label my-label">Estimated Pay</label>
    <input type="number" class="form-control" id="estimatedPay">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
</template>

<script>


export default {
  mounted() {
    /*let des = document.getElementById("description");
    let estime = document.getElementById("estimatedTime");
    let espay = document.getElementById("estimatedPay");*/
  }
}
</script>
<style scoped>
.my-label {
  color: #f1c40f;
  float: left;

}
#estimatedPay, #estimatedTime {
  display: block;
}
.btn-primary {
  
}
.mb-3{
  margin-top: 50px;
}
</style>



