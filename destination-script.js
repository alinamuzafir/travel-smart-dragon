function filterDestinations() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const regionValue = document.getElementById("regionFilter").value.toLowerCase();
  const priceValue = document.getElementById("priceFilter").value;
  const durationValue = document.getElementById("durationFilter").value;

  const cards = document.querySelectorAll(".destination-card");

  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    const region = card.getAttribute("data-region").toLowerCase();
    const price = parseInt(card.getAttribute("data-price"));
    const duration = card.getAttribute("data-duration");

    let show = true;

    // Search
    if (searchValue && !name.includes(searchValue)) show = false;
    // Region
    if (regionValue && region !== regionValue) show = false;
    // Price
    if (priceValue === "under50" && price >= 50000) show = false;
    if (priceValue === "50to100" && (price < 50000 || price > 100000)) show = false;
    if (priceValue === "above100" && price <= 100000) show = false;
    // Duration
    if (durationValue && duration !== durationValue) show = false;

    card.style.display = show ? "block" : "none";
  });
}
