function hitungLuas() {
    let alas = document.querySelector("input[name='alas']").value;
    let tinggi = document.querySelector("input[name='tinggi']").value;
  
    let luas = alas * tinggi / 2;
  
    document.querySelector("#luas").textContent = luas;
  }
  
  function hitungKeliling() {
    const a = parseFloat(document.querySelector("input[name='a']").value);
    const b = parseFloat(document.querySelector("input[name='b']").value);
    const c = parseFloat(document.querySelector("input[name='c']").value);
  
    const keliling = a + b + c;
  
    document.querySelector("#keliling").textContent = keliling;
  }
  
  document.querySelector("input[type='submit']").addEventListener("click", function() {
    if (document.querySelector(".luas-segitiga").classList.contains("active")) {
      hitungLuas();
    } else if (document.querySelector(".keliling-segitiga").classList.contains("active")) {
      hitungKeliling();
    }
  });
  
  document.querySelector(".luas-segitiga").addEventListener("click", function() {
    document.querySelector(".luas-segitiga").classList.add("active");
    document.querySelector(".keliling-segitiga").classList.remove("active");
  });
  
  document.querySelector(".keliling-segitiga").addEventListener("click", function() {
    document.querySelector(".luas-segitiga").classList.remove("active");
    document.querySelector(".keliling-segitiga").classList.add("active");
  });
  