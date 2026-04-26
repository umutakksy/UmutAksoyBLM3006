/**
 * Lab Selector - Global Fonksiyonalite
 * Tüm sayfalarda lab seçimi işlevselliğini sağlar
 */

document.addEventListener('DOMContentLoaded', function() {
  const labSelector = document.getElementById('labSelector');
  if (labSelector) {
    labSelector.addEventListener('change', function() {
      if (this.value) {
        window.location.href = `lab${this.value}.html`;
      }
    });
  }
});
