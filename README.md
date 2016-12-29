# Cinderella
This repo aims to provide a more efficient, clean and collaborative way of writing and editing CSS for **TradeGecko's Marketing Website**.

## Using the repo:

###  styles-legacy
This folder contains styles for pages designed using the **old** TradeGecko style guide.

#### How to compile:
1. In Hubspot, create a new template or page like you normally would.
2. Create a temporary CSS file in Hubspot Design Manager and link it to the new template/page.
3. When done styling, clone the CSS file locally into the `styles-legacy` folder.
4. Save and run `gulp` in iTerm to compile into `tg-compiled-css` folder.
5. Open `tg-compiled-legacy.css`, copy the code and paste into `Primary CSS File` in Hubspot.

--

###  styles-new
This folder contains styles for pages designed using the **2016** TradeGecko style guide.

#### How to compile:

1. In Hubspot, create a new template or page like you normally would.
2. Create a temporary CSS file in Hubspot Design Manager and link it to the new template/page.
3. When done styling, clone the CSS file locally into the `styles-new` folder.
4. Save and run `gulp` in iTerm to compile into `tg-compiled-css` folder.
3. Open `tg-compiled-new.css`, copy the code and paste into `..custom/page/css/tg-compiled-new.css` in Hubspot.

_Note: Remember to link the template/page to the latest `main.css` and disable the `Primary CSS File`._
