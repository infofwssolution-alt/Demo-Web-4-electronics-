# Nexora Home & Tech - 90-Second Demo Screen-Recording Script

This script guides you step-by-step through a crisp, realistic 90-second video demo of the Nexora Home & Tech e-commerce storefront and the integrated AI Chatbot widget.

---

## Recording Setup Checklist
- **URL**: `http://localhost:5501`
- **Browser Window**: 1920x1080 (or 16:9 ratio), 100% zoom level.
- **Backend Service**: Ensure the chatbot backend is running and `ALLOWED_ORIGINS` includes `http://localhost:5501`.
- **Knowledge Base Seed**: Verify `knowledge/electronics-demo.md` was ingested under client ID `electronics-demo`.
- **Widget Icon**: Located in the bottom-right corner of the browser viewport.

---

## 90-Second Timeline & Action Flow

### [0:00 - 0:15] Storefront Tour & Authenticity Check
1. **Show Header & Hero**:
   - Start at the top of `http://localhost:5501`.
   - Highlight the announcement bar (*"Free delivery over $75 • 30-day returns • 1-2 year warranty"*).
   - Point out the clean Nexora logo and navigation links (*Audio, Kitchen, Home, Smart Gadgets, Support*).
2. **Category Filter & Live Search**:
   - Click the **"Kitchen Appliances"** category tile to filter down to the 4 kitchen appliances.
   - Click **"All Products"** to reset.
   - In the search bar at the top, type `earbuds` to demonstrate live instant filtering, then clear the input.
3. **Cart Drawer Micro-Interaction**:
   - On the **Crisp 5L Air Fryer**, click **"Quick View"** or **"Add to Cart"**.
   - The Cart Drawer smoothly opens from the right.
   - Point out the **Free Delivery Progress Bar** (at $99 it shows *“You've unlocked Free Standard Delivery!”*).
   - Close the cart drawer (click the close icon or outside backdrop).

---

### [0:15 - 0:80] Interactive AI Chatbot Demonstration (6 Questions)
Click the electric-blue chat bubble in the bottom-right corner to open the widget. The initial greeting appears:
> *"Hi! I can help with product questions, shipping, returns, and warranty. How can I help?"*

Type the following 6 questions in order:

---

#### Question 1: Product-Choice Query (Kitchen & Budget)
- **What to type**:
  > `I need something to make smoothies in a small kitchen under $70`
- **Expected Bot Response Elements to Verify**:
  - Recommends the **Whirl 1.5L Countertop Blender**.
  - Cites the **$64** price (well under $70).
  - Mentions key specs: **700W motor**, **6 stainless steel blades**, and **compact countertop footprint**.

---

#### Question 2: Product Comparison Query (Audio & Travel)
- **What to type**:
  > `Should I get the earbuds or the over-ear headphones for travel?`
- **Expected Bot Response Elements to Verify**:
  - Mentions both products by name: **Studio Over-Ear Headphones ($89)** vs. **Pulse Wireless Earbuds ($59)**.
  - Highlights **Studio Over-Ear Headphones** for long-haul flights (40-hour battery, plush memory foam, foldable frame with protective pouch).
  - Highlights **Pulse Wireless Earbuds** for light travel, gym workouts, or compact commuting (Active Noise Cancellation, IPX4 splash resistance, 28-hour total case battery).

---

#### Question 3: Return Policy for Opened Product
- **What to type**:
  > `Can I return an air fryer if I already opened the box?`
- **Expected Bot Response Elements to Verify**:
  - Confirms opened items in working condition can be returned within **14 days** of delivery.
  - Mentions the **15% restocking fee** for opened non-defective items.
  - Explains how to start: email `support@nexora.example` with the order number for an RMA.
  - Notes that defective units have zero restocking fees and 30-day coverage.

---

#### Question 4: Warranty Coverage & Claims
- **What to type**:
  > `What does the 2-year warranty cover on appliances and how do I file a claim?`
- **Expected Bot Response Elements to Verify**:
  - Covers **manufacturing and craftsmanship defects** (motor, heating element, internal electronics) for 2 years on major appliances (Air Fryer, Blender, Robot Vacuum, Air Purifier).
  - Clarifies what is **NOT** covered: accidental drops, physical damage, unauthorized repairs, or water damage outside rated specs.
  - To claim: email `support@nexora.example` with proof of purchase and a description/photo of the defect.

---

#### Question 5: Troubleshooting Query
- **What to type**:
  > `My Pulse Earbuds won't pair with my phone. What should I do?`
- **Expected Bot Response Elements to Verify**:
  - Step 1: Put earbuds back into the case and close lid for 10 seconds.
  - Step 2: Confirm the case has battery power.
  - Step 3: Forget/delete "Pulse Earbuds" in the phone's Bluetooth settings.
  - Step 4: Take both earbuds out together, wait 5 seconds, then tap to connect.
  - Safe ending: *"If this doesn't fix it, contact support@nexora.example."*

---

#### Question 6: Graceful Out-of-Scope Fallback (Real-Time Order Tracking / Financing)
- **What to type**:
  > `Where is my order #48213? Can I pay for it with monthly installments?`
- **Expected Bot Response Elements to Verify**:
  - The bot acknowledges it does **not** have direct access to live order lookups or installment financing terms.
  - Delivers a polite, helpful fallback handoff: *"I don't have access to real-time order records or financing plans. Please email our team at support@nexora.example (Mon–Sat 9am–6pm EST) with your order number, and a representative will assist you."*

---

### [0:80 - 0:90] Outro & Storefront Wrap-Up
1. Minimize the chatbot widget window.
2. Scroll smoothly down past the **Support Cards** and **FAQ Accordion** to demonstrate how FAQ entries directly reflect the knowledge base policies.
3. Conclude on the clean footer showing brand trust, 256-bit encryption badge, and Nexora copyright.
