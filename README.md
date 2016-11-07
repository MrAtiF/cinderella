# TradeGecko stylesheets for Marketing Website

### styles-legacy
This folder contains styles for pages designed using the **old** TradeGecko style guide.

#### How to compile:
1. In Hubspot Design Manager, create a new working template for your design.
2. Create a temporary CSS file in hubspot and link it to the new template.
3. When done styling, clone the CSS file locally in the `styles-legacy` folder.
4. Run `gulp` to compile into `tg-compiled-css` folder.
5. Open `tg-compiled-legacy.css`, copy the code and paste into `Primary CSS File` in Hubspot.

--

### styles-new
This folder contains styles for pages designed using the **2016** TradeGecko style guide. All CSS files within this folder should be compiled and uploaded in Hubspot's Design Manager as `..custom/page/css/tg-compiled-new.css`

#### How to compile:

1. In Hubspot Design Manager, create a new working template for your design.
2. Create a temporary CSS file in hubspot and link it to the new template.
2. When done styling, clone the CSS file locally in the `styles-new` folder.
2. Run `gulp` to compile into `tg-compiled-css` folder.
3. Open `tg-compiled-new.css`, copy the code and paste into `..custom/page/css/tg-compiled-new.css` in Hubspot.
