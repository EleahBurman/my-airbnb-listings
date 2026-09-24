# AirBNB Listings Reloaded

A page that loads the first 50 San Francisco Airbnb listings from a local
JSON file using `fetch()` and `async/await`, and displays each as a
Bootstrap card.

**🔗 Live demo:** 
https://eleahburman.github.io/my-airbnb-listings/

## Features
- Loads data asynchronously with `fetch`/`await` — confirmed via console
  logs showing the full dataset size (523) vs. the 50 actually displayed
- Each card shows: name, description, amenities, host name + photo, price,
  and thumbnail
- Broken/missing listing photos fall back to a placeholder apartment image
- **Creative additions:**
  - A sort dropdown (price low→high, high→low, or highest rated)
  - Click any card to open a Bootstrap modal with the full, unclamped
    description, complete amenities list, and host info

## Tech
Vanilla JavaScript (revealing module pattern) + Bootstrap 5.3 for layout
and the modal component. No build step, no frameworks.

## Running locally
`fetch()` is blocked on the `file://` protocol, so serve the folder instead
of opening `index.html` directly:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Data source
`airbnb_sf_listings_500.json` — Inside Airbnb San Francisco listings
snapshot, provided for CS5610 (Web Development).