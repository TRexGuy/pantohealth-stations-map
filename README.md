# PANTOhealth – Germany Stations Map

A small frontend application that visualizes train stations in Germany on an interactive Leaflet map.

## 🚀 Live Demo

https://pantohealth-stations-map-d4j5.vercel.app/

## 📦 Tech Stack

- React
- TypeScript
- Vite
- Leaflet & React-Leaflet
- Tailwind CSS
- Vitest + Testing Library

## ✨ Features

- Fetches station data from a remote API
- Displays all stations on a Leaflet map (centered on Germany)
- Lists stations with name and city
- Filter stations by city
- Clicking a station:
  - Highlights it in the list
  - Zooms the map to the selected station
- Loading and error states handled
- Basic UI styling and smooth interaction

## 🗺️ Data Source

Stations data is fetched from the following GitHub Gist:
https://gist.github.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c

## 🧪 Testing

Includes a basic component test using Vitest and React Testing Library.

Run tests:

```bash
npx vitest run
```
