// Revealing module pattern: keeps our variables/functions tucked away
// inside MainModule instead of floating around as globals.
function MainModule(listingsID = "#listings") {
  const me = {};

  const listingsElement = document.querySelector(listingsID);

  // amenities comes from the JSON as a STRING that looks like an array,
  // e.g. '["Wifi", "Kitchen", "Free parking"]' — so we have to JSON.parse it
  // before we can use it as a real array.
  function parseAmenities(raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }

  // amenities comes from the JSON as a STRING that looks like an array,
  // e.g. '["Wifi", "Kitchen", "Free parking"]' — so we have to JSON.parse it
  // before we can use it as a real array.
  function parseAmenities(raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }

  // Builds the HTML string for ONE listing card
  function getListingCode(listing) {
    const amenities = parseAmenities(listing.amenities);
    const amenityList = amenities.slice(0, 6).join(", ");

    return `<div class="col-4">
  <div class="listing card">
    <img
      src="${listing.picture_url}"
      class="card-img-top"
      alt="${listing.name}"
      onerror="this.src='https://images.unsplash.com/photo-1525953776754-6c4b7ee655ab?w=400&h=220&fit=crop&auto=format'"
    />
    <div class="card-body">
      <h2 class="card-title">${listing.name}</h2>
      <div>${listing.price}</div>
      <p class="card-text">
        ${listing.description}
      </p>

      <div class="amenities">
        <strong>Amenities:</strong> ${amenityList}
      </div>

      <div class="host">
        <img
          src="${listing.host_picture_url}"
          alt="${listing.host_name}"
          width="40"
          height="40"
        />
        <span>Hosted by ${listing.host_name}</span>
      </div>
    </div>
  </div>
  </div>
  `;
  }

  // Wipes out whatever is currently in #listings and re-fills it
  function redraw(listings) {
    listingsElement.innerHTML = "";
    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  // The core of the assignment: fetch the JSON file, wait for it,
  // then only keep the first 50 listings
  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();

    me.redraw(listings.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();
main.loadData();