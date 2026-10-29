# Nexora Home & Tech - E-Commerce Demo Storefront

A modern, high-performance e-commerce storefront for **Nexora Home & Tech** (fictional consumer electronics & appliances). Built as an authentic, interactive showcase environment for the embeddable AI customer support chatbot widget.

---

## Complete Local Setup & Run Guide

Everything runs 100% locally on localhost across two independent services:
- **Chatbot Backend**: `http://localhost:3000` (Node.js / Express / Groq / MongoDB / RAG)
- **Demo Storefront**: `http://localhost:5501` (Vanilla HTML5 / CSS3 / JavaScript)

---

### Step 1: Start the Chatbot Backend
In a terminal, navigate to the chatbot backend directory and start the server:

```bash
cd "c:\FWS\chatbot"
npm start
```

Verify the backend is healthy by visiting or pinging:
👉 **`http://localhost:3000/health`**  
*(Expected response: `{"status":"ok","mongodb":"connected",...}`)*

Ensure `ALLOWED_ORIGINS` in `c:\FWS\chatbot\.env` includes `http://localhost:5501`:
```env
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5500,http://localhost:5501
```

---

### Step 2: Seed the Knowledge Base
The knowledge base for this demo is located at `knowledge/electronics-demo.md` (and synchronized with `c:\FWS\chatbot\knowledge\electronics-demo.md`).

To seed or refresh the vector embeddings for client `electronics-demo`:

```bash
cd "c:\FWS\chatbot"
npm run seed -- --client=electronics-demo --clear
```

This ingests all 34 topic blocks (specs for 14 products, shipping rules, return policy, warranties, troubleshooting trees, and support contacts).

---

### Step 3: Start the Nexora Storefront (Port 5501)
In a second terminal, start the static server in this folder:

```bash
cd "c:\FWS\Demo Web $ (electrnoics)"
npm start
```
*(Runs `npx serve -l 5501 .` on the required fixed port `5501`)*

Alternative via Python:
```bash
python -m http.server 5501
```

---

### Step 4: Open and Test
Open your browser to:
👉 **`http://localhost:5501`**

1. The floating electric-blue chat bubble appears in the bottom-right corner.
2. Click the bubble to open the **Nexora Support Assistant**.
3. Try asking product questions, requesting recommendations under a budget, asking return rules, or troubleshooting earbuds.

---

## AI Chatbot Widget Configuration
The embed tag in `index.html` is configured as follows:

```html
<!-- Nexora AI Support Chatbot Widget Embed -->
<script src="http://localhost:3000/widget/widget.js"
        data-api-url="http://localhost:3000"
        data-client-id="electronics-demo"
        data-title="Nexora Support Assistant"
        data-greeting="Hi! I can help with product questions, shipping, returns, and warranty. How can I help?"
        data-color="#2F6BFF"
        defer></script>
```

---

## Demo & Testing Checklist
See **`DEMO_SCRIPT.md`** for a complete 90-second video demo walkthrough, including the verified test questions:
1. **Product Recommendation**: *"I need something to make smoothies in a small kitchen, under $70."* → Recommends **Whirl 1.5L Blender ($64)** with 700W motor & compact dimensions.
2. **Comparison**: *"Should I get the earbuds or the over-ear headphones for travel?"* → Compares **Studio Over-Ear Headphones ($89)** vs. **Pulse Earbuds ($59)**.
3. **Return Policy**: *"What's your return policy if I've already opened the product?"* → Cites 14-day window for opened items, 15% restocking fee, and hygiene exceptions.
4. **Warranty Coverage**: *"What does the warranty on the air fryer cover?"* → Explains the 2-year warranty covering electrical and heating defects.
5. **Troubleshooting**: *"My earbuds won't pair with my phone. What should I try?"* → Lists 5-step reset and pairing sequence.
6. **Graceful Out-of-Scope Fallback**: *"Where is my order #48213?"* → Acknowledges inability to access live order records and provides support contact without inventing data.

---

## Design & Architecture Notes
- **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript. All device illustrations are rendered via clean inline SVGs for zero latency and instant offline stability.
- **Fixed Port 5501**: Matches CORS origin whitelist in the backend.
- **Clear Widget Clearance**: All UI elements (cart drawer, product modals, search dropdowns, back-to-top button) respect the launcher zone and stay usable at 390px mobile viewport.
- **Full Interactivity**: Category filters, real-time keyword search, specs modal, shopping cart drawer with a live $75 free-delivery progress calculator, and interactive FAQ accordions.
