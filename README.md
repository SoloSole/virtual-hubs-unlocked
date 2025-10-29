# Bezproblem s.r.o. - Landing Page

## 📋 Přehled projektu

Landing page pro společnost **Bezproblem s.r.o.** poskytující služby virtuální adresy v České republice. Stránka je v ruštině zaměřená na rusky mluvící klienty.

**Adresa:** Dlouhá 7, Praha 1

---

## 🎨 Technologie

- **React 18** + **TypeScript**
- **Vite** - build tool
- **Tailwind CSS** - styling
- **shadcn/ui** - UI komponenty
- **Lucide React** - ikony

---

## 📦 Struktura sekcí (v pořadí)

### 1. **Hero** (`src/components/landing/Hero.tsx`)
- **Navigace:** Logo, menu (Цены, FAQ, Отзывы, Контакты), telefon, CTA tlačítko
- **Hlavní obsah:** Headline, popis služby, USP ikony, CTA tlačítka
- **Obrázek:** Stock foto business meeting (`hero-business.jpg`)
- **CTA akce:** Scroll na Quiz a Pricing sekce

### 2. **USP Strip** (`src/components/landing/USPStrip.tsx`)
- **5 hlavních výhod** v horizontální řadě
- Ikony: Ruská podpora, Fixní cena, 24h registrace, Souhlas majitele, Legalita
- Rychlý vizuální přehled benefitů

### 3. **Comparison** (`src/components/landing/Comparison.tsx`)
- **Srovnávací tabulka:** Bezproblem vs. Ostatní firmy
- Zobrazuje 10 funkcí s check/cross ikonami
- Zdůrazňuje výhody služby

### 4. **Pricing** (`src/components/landing/Pricing.tsx`)
- **4 lokace:** Praha 9, Praha 5, Most, Karlovy Vary
- **2 tarify:** BASIC (od 190-302 Kč) a PREMIUM (od 230-350 Kč)
- Roční ceny včetně DPH/bez DPH
- **Doplňkové služby:** Právní adresa pro e-shop, Změna adresy, Balíček OSVČ
- **CTA:** Scroll na Quiz

### 5. **Quiz** (`src/components/landing/Quiz.tsx`)
- **6 kroků:** 
  1. Typ subjektu (s.r.o., OSVČ, a.s., jiné)
  2. Lokace (Praha 9, Praha 5, Most, Karlovy Vary)
  3. Tarif (BASIC, PREMIUM)
  4. Doplňkové služby (multi-select)
  5. Kontaktní údaje (jméno + telefon)
  6. Potvrzení se slevovým kódem `ADRESA10`
- **Progress bar** pro UX
- **Benefit:** 10% sleva vázaná na tel. číslo
- **Toast notifikace** po odeslání

### 6. **FAQ** (`src/components/landing/FAQ.tsx`)
- **Accordion** s 10 nejčastějšími otázkami
- Témata: Virtuální adresa, registrace, legalita, souhlas majitele, změna adresy, ceny, pošta
- **CTA:** Telefon pro další dotazy

### 7. **Certificates** (`src/components/landing/Certificates.tsx`)
- **6 certifikátů/licencí** v grid layoutu
- Ikony: Shield, FileCheck, Award, CheckCircle, Building, Scale
- **Stock foto:** Dokumenty (`documents.jpg`)
- Zvyšuje důvěryhodnost

### 8. **Process** (`src/components/landing/Process.tsx`)
- **6 kroků procesu registrace**
- Timeline design s čísly, názvy, popisem a trváním
- **Stock foto:** Úspěšný handshake (`success-handshake.jpg`)
- Celková doba: 3-4 pracovní dny

### 9. **Reviews** (`src/components/landing/Reviews.tsx`)
- **6 recenzí klientů** (zatím fiktivní - nahradit reálnými!)
- Avatar, jméno, typ podnikání, hodnocení (5 hvězd), text
- Carousel/grid layout

### 10. **About** (`src/components/landing/About.tsx`)
- **Teamová fotka** (`team-photo.jpg`) - KLÍČOVÉ PRO DŮVĚRU!
- **Statistiky:** 500+ klientů, 8 let, 4 lokace, 99% spokojenost
- **Foto budovy** (`office-building.jpg`)
- **Úspěchy:** Od 2016, Pobočky v ČR, Legální služby
- Zvyšuje kredibilitu a důvěru

### 11. **Social Proof** (`src/components/landing/SocialProof.tsx`)
- Logo partnerů a klientů (placeholder)
- Další důkaz spolehlivosti

### 12. **Map Section** (`src/components/landing/MapSection.tsx`)
- **Google Maps** embed - Dlouhá 7, Praha 1
- **Kontakty:** Adresa, telefon, email, otevírací doba
- **Doprava:** MHD info (metro Náměstí Republiky, tram)
- **Parkování:** Info o možnostech

### 13. **Final CTA** (`src/components/landing/FinalCTA.tsx`)
- **Kontaktní formulář:** Jméno, telefon, email
- **Alternativní kontakty:** Telefon, WhatsApp, Email
- **Trust badges:** Rychlá registrace, Ruská podpora, Fixní ceny
- Toast po odeslání

### 14. **Footer** (`src/components/landing/Footer.tsx`)
- **4 sloupce:** O firmě, Odkazy, Služby, Kontakty
- **Social media:** Facebook, Instagram, LinkedIn
- **Právní info:** Copyright, Ochrana dat, Podmínky, IČO

---

## 🎨 Design System

### Barvy (HSL)
```css
/* index.css */
--primary: 220 13% 13%;        /* Tmavě šedá/černá */
--primary-foreground: 60 5% 96%;
--accent: 45 100% 51%;         /* Žlutá (T-Bank inspired) */
--accent-foreground: 220 13% 13%;
```

### Fonty
- **Nadpisy:** Playfair Display (serif, elegantní)
- **Text:** Lato (sans-serif, čitelný)

### Komponenty
- Všechny UI komponenty z **shadcn/ui** v `src/components/ui/`
- Tailwind semantic tokeny - NEPOUŽÍVAT přímé barvy!

---

## 📸 Obrázky

### Stock fotky (AI generované)
- `hero-business.jpg` - Profesionální business meeting (Hero)
- `team-photo.jpg` - **Tým firmy** (About) - **NAHRADIT REÁLNOU!**
- `office-building.jpg` - Budova kanceláře (About)
- `documents.jpg` - Dokumenty/certifikáty (Certificates)
- `success-handshake.jpg` - Handshake (Process)

### Kde přidat vlastní fotky týmu?
1. **Primárně:** About sekce - největší dopad na důvěru
2. **Sekundárně:** Reviews sekce - avatary u recenzí (volitelné)

---

## 🔧 Jak upravovat

### Změna textu
Všechny texty jsou přímo v komponentách. Edituj `.tsx` soubory v `src/components/landing/`.

### Změna cen
Edituj `src/components/landing/Pricing.tsx` - array `locations`.

### Změna Quiz otázek
Edituj `src/components/landing/Quiz.tsx` - states a conditionals.

### Změna FAQ
Edituj `src/components/landing/FAQ.tsx` - array `faqs`.

### Změna recenzí
Edituj `src/components/landing/Reviews.tsx` - array `reviews` - **NAHRADIT FIKTIVNÍ REÁLNÝMI!**

### Přidání nové sekce
1. Vytvoř komponentu v `src/components/landing/NewSection.tsx`
2. Importuj a přidej do `src/pages/Index.tsx`
3. Zachovej strukturu (section > container > obsah)

---

## 🚀 Spuštění lokálně

```bash
# Naklonuj repo (přes GitHub integraci)
git clone <your-repo-url>
cd <project-name>

# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev
```

Otevře se na `http://localhost:5173`

---

## ✅ TODO / Budoucí úpravy

- [ ] **Nahradit stock fotku týmu reálnou** (team-photo.jpg)
- [ ] **Nahradit fiktivní recenze reálnými** (Reviews.tsx)
- [ ] **Přidat reálná loga partnerů** (SocialProof.tsx)
- [ ] **Nastavit Google Analytics** (optional)
- [ ] **Propojit formuláře s backend API** (Quiz, FinalCTA)
- [ ] **Optimalizovat obrázky** (WebP format)
- [ ] **Přidat strukturovaná data (Schema.org)** pro SEO

---

## 📞 Kontakt

**Bezproblem s.r.o.**  
Dlouhá 7, 110 00 Praha 1  
Tel: +420 776 668 321  
Email: info@bezproblem.cz

---

## 📄 Licence

Projekt je vlastnictvím Bezproblem s.r.o.
