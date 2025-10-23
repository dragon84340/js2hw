let yosh = prompt("Iltimos, yoshingizni kiriting :");

// Son formatiga o'tkazamiz
yosh = Number(yosh);

if (!isNaN(yosh)) {
  if (yosh > 0 && yosh <= 18) {
    alert("Yoshsiz, o'qishingiz kerak.");
  } else if (yosh > 18 && yosh <= 50) {
    alert("Ishlashingiz kerak.");
  } else if (yosh > 50 && yosh <= 59) {
    alert("Yaqinda pensiyaga chiqasiz.");
  } else if (yosh > 59 && yosh <= 150) {
    alert("Pensionerga o'xshaysiz, agar tirik bo'lsangiz.");
  } else {
    alert("Nimadir noto'g'ri ketib qoldi.");
  }
} else {
  alert("Iltimos, faqat raqam kiriting!");
}

