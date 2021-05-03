
<script>
function myFunction() {
      var x = document.getElementById("myDIV1");
      var y = document.getElementById("myDIV2");
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none"
      } else {
        y.style.display = "block";
        x.style.display = "none";
    
      }
    }
</script>