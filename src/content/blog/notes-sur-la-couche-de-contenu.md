---
title: 'Notes sur la couche de contenu'
publishDate: 2026-10-15
tags:
  - astro
  - content
description: 'Remarques pratiques pour garder les collections de contenu Astro prévisibles.'
draft: false
---

## Traiter le contenu comme des données

Le « FrontMatter » au début d’un article permet aux modèles de rester calmes. Les listes peuvent être triées par dates, les détails peuvent être rendus avec des styles professionnels partagés et les balises deviennent des routes sans index maintenus à la main.

## Utiliser les identifiants pour les itinéraires

Avec l'API de la couche de contenu, l'identifiant d'entrée est le slug stable pour le contenu soutenu par un fichier. Cela permet de garder la génération d'itinéraire explicite et d'éviter de dépendre d'un champ distinct.
