# Nexora Home & Tech - E-Commerce Demo Storefront

A modern e-commerce storefront for **Nexora Home & Tech** (fictional consumer electronics & appliances). Built specifically as a showcase environment for an embeddable AI customer support chatbot widget.

---

## Quick Start (Port 5501)

The chatbot backend requires origin matching for CORS and security. This site is preconfigured to serve on **`http://localhost:5501`**.

### Option 1: Via npm (Recommended)
```bash
# Navigate to the folder
cd "c:\FWS\Demo Web $ (electrnoics)"

# Start static server on port 5501
npm start
```
*(Runs `npx serve -l 5501 .` under the hood).*

### Option 2: Via Python 3
```bash
# From inside the folder
python -m http.server 5501
```

Once running, open your browser to:
👉 **`http://localhost:5501`**

---

## Connecting the AI Chatbot Widget

### 1. Configure the Frontend Embed
Open `index.html` and look for the `<script>` tag near the bottom of `<body>`:

```html
<!-- Nexora AI Support Chatbot Widget Embed -->
<script src="REPLACE_WITH_BACKEND_URL/widget/widget.js"
        data-api-url="REPLACE_WITH_BACKEND_URL"
        data-client-id="electronics-demo"
        data-title="Nexora Support Assistant"
        data-greeting="Hi! I can help with product questions, shipping, returns, and warranty. How can I help?"
        data-color="#2F6BFF"
        defer></script>
```

Replace both occurrences of `REPLACE_WITH_BACKEND_URL` with your actual backend URL (for example, `http://localhost:8000` or your deployed backend address).

> **Note on Custom Attributes**: The `data-title`, `data-greeting`, and `data-color` attributes provide default styling hints. They will only take effect if your widget script version supports custom attribute overrides; otherwise, the widget will use its backend defaults.

### 2. Add `http://localhost:5501` to Backend `ALLOWED_ORIGINS`
Your backend's environment variables must allow requests from origin `http://localhost:5501`.

In your backend `.env` file or environment settings, update `ALLOWED_ORIGINS`:
```env
# Example with multiple demo origins comma-separated:
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173,http://localhost:5500,http://localhost:5501
```
Restart your chatbot backend service after modifying `.env`.

### 3. Ingest the Knowledge Base into the Chatbot
This demo repository includes a pre-chunked knowledge base containing specs for all 14 products, shipping and warranty policies, return rules, troubleshooting trees, and support contacts:
- File location: `knowledge/electronics-demo.md`

#### Steps to seed:
1. Copy `knowledge/electronics-demo.md` into your chatbot repository's knowledge or seed directory (e.g., `chatbot/data/electronics-demo.md`).
2. Run your repository's ingestion or ingest script specifying the client ID `electronics-demo`:
   ```bash
   # Example ingestion command in your chatbot backend:
   python ingest.py --client-id electronics-demo --file knowledge/electronics-demo.md
   ```
3. The chatbot is now ready to answer queries for client `electronics-demo`.

---

## Screen Recording & Demo

See **`DEMO_SCRIPT.md`** for a complete 90-second video demo walkthrough, including 6 realistic test questions covering:
1. Product recommendation (kitchen blender under $70)
2. Comparison (earbuds vs. over-ear headphones for travel)
3. Return policy (opened appliance restocking fee)
4. Warranty & claims (2-year appliance coverage)
5. Troubleshooting (earbuds pairing reset)
6. Out-of-scope fallback (live order status & installments handoff)

---

## Design & Architecture Notes
- **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript. All device graphics are rendered via custom inline SVG illustrations for zero latency, zero CDN reliance, and total offline stability.
- **Fixed Port 5501**: Required for CORS policy validation against the chatbot API.
- **Widget Clearance**: The bottom-right corner is reserved exclusively for the chatbot floating launcher bubble. The cart drawer, modals, and toast messages are positioned to avoid obscuring the widget.
- **Full Interactivity**: Live category filters, instant keyword search, product detail modal with complete specs tables, working shopping cart drawer with free-shipping threshold calculator ($75), and expandable FAQ accordions.
