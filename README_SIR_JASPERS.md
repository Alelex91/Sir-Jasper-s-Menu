# Sir Jasper's - Menu Digitale Elegante

Menu digitale multilingua per Sir Jasper's Ristorante Pizzeria con sistema di registrazione clienti e pannello amministratore.

## 🌟 Caratteristiche Principali

### Per i Clienti
- **Pagina di Benvenuto**: Registrazione con nome, cognome e telefono
- **Menu Digitale Interattivo**: Navigazione fluida tra 13 categorie
- **Multilingua**: Supporto per 6 lingue (Italiano, Inglese, Francese, Spagnolo, Tedesco, Cinese)
- **Design Elegante**: Palette oro e nero ispirata al logo del ristorante
- **Responsive**: Ottimizzato per desktop, tablet e mobile

### Per l'Amministratore
- **Area Riservata**: Accesso sicuro con credenziali
- **Database Clienti**: Visualizzazione di tutti i clienti registrati
- **Statistiche**: Clienti totali, oggi, questa settimana
- **Esportazione CSV**: Download del database clienti
- **Gestione**: Ricerca ed eliminazione clienti

## 🎨 Design System

### Colori
- **Oro Luxury**: hsl(43 96% 56%) - Accenti premium
- **Nero Elegante**: hsl(0 0% 8%) - Testo principale
- **Champagne**: hsl(45 60% 65%) - Elementi secondari

### Tipografia
- **Display**: Playfair Display (titoli)
- **Elegante**: Cormorant Garamond (sottotitoli)
- **Body**: Montserrat (testo)

## 📋 Struttura del Menu

1. **Antipasti Terra**: 7 piatti
2. **Antipasti Mare**: 6 piatti (incluso Percorso Mare 5 portate)
3. **Primi Terra**: 5 piatti
4. **Primi Mare**: 5 piatti
5. **Pizze Classiche**: 13 pizze tradizionali
6. **Pizze Speciali**: 10 pizze gourmet
7. **Le Novità**: 8 creazioni stagionali
8. **Insalate**: 2 insalatoni
9. **Contorni**: 6 accompagnamenti
10. **Bibite**: 8 bevande analcoliche
11. **Vini**: 7 vini al calice (bianchi, rossi, rosé)
12. **Birre**: 9 birre (alla spina e in bottiglia)
13. **Cocktails**: 11 cocktails classici e spritz

## 🔐 Credenziali Amministratore

**Email**: alelex91@gmail.com  
**Password**: Delpiero10

## 🚀 URL dell'Applicazione

- **Menu Clienti**: http://localhost:3000
- **Area Admin**: http://localhost:3000/admin

## 💾 Archiviazione Dati

I dati dei clienti sono salvati in **localStorage** del browser:
- Ogni cliente registrato viene aggiunto al database locale
- I dati persistono tra le sessioni
- L'amministratore può esportarli in formato CSV

## 🌍 Lingue Supportate

| Lingua | Codice | Flag |
|--------|--------|------|
| Italiano | it | 🇮🇹 |
| English | en | 🇬🇧 |
| Français | fr | 🇫🇷 |
| Español | es | 🇪🇸 |
| Deutsch | de | 🇩🇪 |
| 中文 | zh | 🇨🇳 |

## 📱 Funzionalità Mobile

### Menu Mobile (Bottom Navigation)
- **Menu**: Apre la sidebar delle categorie
- **Lingua**: Cambia lingua rapidamente
- **Esci**: Logout dal menu

### Design Responsive
- Layout adattivo per tutte le dimensioni schermo
- Touch-friendly per tablet e smartphone
- Navigazione ottimizzata per dispositivi mobili

## 🎯 Workflow Cliente

1. **Arrivo**: Cliente apre l'app
2. **Registrazione**: Inserisce nome, cognome e telefono
3. **Accesso Menu**: Viene reindirizzato al menu digitale
4. **Navigazione**: Sfoglia le categorie del menu
5. **Lingua**: Può cambiare lingua in qualsiasi momento
6. **Uscita**: Può fare logout quando ha finito

## 🔧 Workflow Amministratore

1. **Login**: Accesso con email e password
2. **Dashboard**: Visualizza statistiche clienti
3. **Database**: Vede l'elenco completo dei clienti
4. **Ricerca**: Filtra clienti per nome o telefono
5. **Esporta**: Scarica database in CSV
6. **Gestione**: Può eliminare singoli clienti
7. **Logout**: Esce dall'area amministratore

## 🎨 Componenti UI Utilizzati

### Shadcn/UI Components
- Button (con varianti custom oro)
- Card (stile elegante con ombre)
- Input (focus ring dorato)
- Label
- Select (per selector lingua)
- Table (per database clienti)
- Sheet (per menu mobile)
- ScrollArea (per liste lunghe)
- Badge (per prezzi)
- Toaster (Sonner per notifiche)

## 🌟 Punti di Forza del Design

1. **Luxury Feel**: Palette oro/nero trasmette eleganza
2. **Leggibilità**: Alto contrasto per facile lettura menu
3. **Micro-interazioni**: Hover effects su card e bottoni
4. **Animazioni Smooth**: Transizioni fluide tra sezioni
5. **Accessibilità**: Focus states chiari, contrasti WCAG AA
6. **Performance**: Design system token-based ottimizzato

## 📊 Statistiche Dashboard Admin

- **Clienti Totali**: Conteggio totale registrazioni
- **Oggi**: Clienti registrati oggi
- **Questa Settimana**: Clienti ultimi 7 giorni

## 🔒 Sicurezza

- Autenticazione client-side per demo
- Sessioni separate per clienti e admin
- Password nascosta durante l'input
- Logout sicuro con pulizia localStorage

## 🎨 Personalizzazione Futura

Il design system è completamente personalizzabile tramite:
- `/app/frontend/src/index.css` - Token colori e stili
- `/app/frontend/tailwind.config.js` - Configurazione Tailwind
- Tutti i token seguono la convenzione HSL per facile modifica

## 📝 Note Tecniche

- **React 18** con Hooks
- **React Router** per navigazione
- **Tailwind CSS** per styling
- **Shadcn/UI** per componenti
- **Sonner** per toast notifications
- **Lucide React** per icone
- **Google Fonts** per tipografia

---

**Creato con ❤️ per Sir Jasper's Ristorante Pizzeria**

*Design elegante, esperienza memorabile*
