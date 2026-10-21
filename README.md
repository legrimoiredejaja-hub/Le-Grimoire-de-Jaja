# Le Grimoire de Jaja — site web

## Fichiers à mettre à la racine du dépôt GitHub
- `index.html` : page d'accueil, galerie de 3 images, liens YouTube et contact.
- `telechargements.html` : page dédiée aux fiches téléchargeables en français et en anglais.
- `styles.css` : apparence du site et positionnement des images.
- `script.js` : menu mobile et année automatique.

## Installation sur GitHub Pages
1. Ouvre ton dépôt GitHub.
2. Ajoute ces quatre fichiers à la racine, au même niveau que `index.html`.
3. Dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`.
4. Ouvre l'adresse affichée dans **Visit site**.

## Remplacer les trois images
Dans `index.html`, cherche `IMAGE 1`, `IMAGE 2` et `IMAGE 3`.
Remplace la valeur de `src` par l'URL directe de l'image. Pour un fichier dans ton dépôt, utilise une adresse de ce type :
`https://raw.githubusercontent.com/TON-PSEUDO/TON-DEPOT/main/images/mon-image.jpg`
L'image doit exister dans le dépôt. Remplace les éléments en majuscules par les vraies informations de ton dépôt.

Pour déplacer ou redimensionner les images, ouvre `styles.css` et cherche `IMAGE 1`, `IMAGE 2` et `IMAGE 3`.
- `left` : déplacement horizontal depuis la gauche.
- `top` : déplacement vertical depuis le haut.
- `width` : largeur de l'image.
Les valeurs sont des pourcentages. Sur téléphone, des réglages séparés sont prévus plus bas dans la partie `Réglages pour les téléphones`.

## Ajouter un téléchargement
Ouvre `telechargements.html` et cherche `FICHE 1`.
Dans chaque bloc `<article class="download-item">` :
1. Remplace le titre de la fiche.
2. Remplace le descriptif.
3. Remplace le `href="#"` du lien FR par l'adresse du fichier français.
4. Remplace le `href="#"` du lien US par l'adresse du fichier anglais.
5. Pour ajouter une fiche, copie le bloc complet `<article class="download-item"> ... </article>`.
Un lien qui contient encore `#` est un exemple et ne fonctionne pas.

## Ajouter une vidéo YouTube
Dans `index.html`, cherche `VIDÉO 1`.
Remplace le titre et l'adresse `href="https://www.youtube.com/"` par le lien de ta vidéo. Copie le bloc `<a class="video-link"> ... </a>` pour ajouter une autre vidéo.

## Adresse e-mail
Le site utilise déjà `mailto:legrimoiredeJaja@gmail.com`. Le clic ouvre le logiciel de messagerie du visiteur.

## Modifier les textes et les couleurs
Les commentaires dans les fichiers indiquent le rôle des principales parties. Les couleurs principales se modifient au début de `styles.css`, dans `:root`.
