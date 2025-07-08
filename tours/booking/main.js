const today = new Date().toISOString().split('T')[0];
document.getElementById('dateInput').min = today;

document.getElementById('participants').addEventListener('change', function() {
  if (this.value === '') {
    document.getElementById('participants').style.backgroundColor = 'var(--main-color)'; // Placeholder color
    document.getElementById('participants').style.color = 'var(--secend-color)';
    document.getElementById('participants').style.border = '0px solid var(--secend-color)'; // Selected color
     // Placeholder color
  } else {
    document.getElementById('participants').style.backgroundColor = 'var(--third-color)'; // Selected color
    document.getElementById('participants').style.border = '2px solid var(--third-color)'; // Selected color
    document.getElementById('participants').style.color = 'var(--main-color)'; // Selected color
  }
});


document.getElementById('youngs').addEventListener('change', function() {
  if (this.value === '') {
    document.getElementById('youngs').style.backgroundColor = 'var(--main-color)'; // Placeholder color
    document.getElementById('youngs').style.color = 'var(--secend-color)';
    document.getElementById('youngs').style.border = '0px solid var(--secend-color)'; // Selected color
     // Placeholder color
  } else {
    document.getElementById('youngs').style.backgroundColor = 'var(--third-color)'; // Selected color
    document.getElementById('youngs').style.border = '2px solid var(--third-color)'; // Selected color
    document.getElementById('youngs').style.color = 'var(--main-color)'; // Selected color
  }
});


document.getElementById("check-availability").addEventListener("click", function () {
    const adultSelect = document.getElementById("participants");
    const youngSelect = document.getElementById("youngs");
    const dateInput = document.getElementById("dateInput");

    let adults = adultSelect.value;
    let youngs = youngSelect.value;
    const date = dateInput.value;

    // معالجة الاختيارات مثل 10+ أو 15+
    const parseValue = (val) => {
      if (val.includes("+")) {
        return parseInt(val) || 0;
      }
      return parseInt(val) || 0;
    };

    adults = parseValue(adults);
    youngs = parseValue(youngs);

    // السعر
    const adultPrice = 35;
    const youngPrice = 0;
    const total = (adults * adultPrice) + (youngs * youngPrice);

    // تحديث عدد الأشخاص
    document.getElementById("adult-count").textContent = adults + " ";
    document.getElementById("young-count").textContent = youngs + " ";

    // تحديث السعر
    const priceElement = document.querySelector(".price-members h2");
    priceElement.textContent = `$${total}`;

    // لو حبيت تعرض التاريخ كمان
    if (!date) {
      // alert("Please select a date");
      document.getElementById("check-availability").innerText = "Please Try Again";
      return
    } else {
      document.getElementById("check-availability").innerText = "Availability";
      document.getElementById("time").innerText = `${date}`;
      document.getElementById('result').style.display = 'block';
    }
  });