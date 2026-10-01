// English UI dictionary — the reference translation.
//
// **Scope: UI chrome only.** Navigation, pagination, section labels, button and
// link labels, aria labels, generated strings, and the theme-owned 404 page.
// Placeholder prose on the home and about pages is *not* here: it lives in the
// `.astro` files, where you would edit it anyway. Keeping the split means a new
// locale is ~60 short strings rather than a rewrite of the demo copy.
//
// This file also defines the *shape* every other dictionary must match, so add
// a key here first, then to each locale under `src/i18n/`. Keys are flat and
// dotted; `{name}` placeholders are filled in by `t()`.
//
// Two values carry inline `<code>` markup and are rendered with `set:html`.
// They are theme-authored, never user input.
//
// Note: values are deliberately *not* `as const` — widening them to `string`
// is what lets other locales satisfy `UIStrings`.

export const en = {
  // Header, footer, and other chrome
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
  'nav.works': 'Travaux',
  'nav.blog': 'Blog',
  'nav.search': 'Recherche',
  'nav.label': 'Navigation principale',
  'nav.brandHome': '{site} accueil',
  'theme.toggle': 'Baculer de clair/sombre',
  'footer.notes': 'Notes',
  'social.label': 'Liens sociaux',

  // Pagination
  'pagination.label': 'Pagination',
  'pagination.newer': '← Plus récent',
  'pagination.older': 'Plus ancien →',
  'pagination.status': 'Page {current} de {total}',

  // Home — labels and links only; the page's own copy lives in index.astro
  'home.primaryLinks': 'Liens principaux',
  'home.viewWorks': 'Voir les travaux',
  'home.readNotes': 'Lire les notes',
  'home.overviewLabel': 'Aperçu du thème',
  'home.latestWorksEyebrow': 'Derniers travaux',
  'home.allWorks': 'Tous les travaux',
  'home.workTech': '{title}',
  'home.worksEmpty':
    'Ajoutez des œuvres sous <code>src/content/works</code> pour faire apparaître les derniers projets ici.',
  'home.latestBlogEyebrow': 'Article récent',
  'home.allPosts': 'Tous les articles',
  'home.postsEmpty':
    'Ajoutez des entrées de blog sous <code>src/content/blog</code> pour faire apparaître les dernières notes ici.',

  // Blog index
  'blog.title': 'Blog',
  'blog.titlePaged': 'Blog · Page {page}',
  'blog.eyebrow': 'Blog',
  'blog.listLabel': 'Articles du Blog',
  'blog.tagsEyebrow': 'Sujets',
  'blog.tagsNavLabel': 'Sujets d’articles',

  // Tag archive — every string here is generated from the tag, so it stays
  // in the dictionary even though it reads like page copy.
  'tag.title': 'Posts tagged “{tag}”',
  'tag.titlePaged': 'Posts tagged “{tag}” · Page {page}',
  'tag.description': 'Blog posts tagged {tag} on {site}.',
  'tag.eyebrow': 'Tag',
  'tag.lead': 'Notes collected under the {tag} tag.',
  'tag.listLabel': '{tag} posts',
  'tag.moreTagsEyebrow': 'More tags',
  'tag.otherTagsNavLabel': 'Other blog tags',
  'tag.allPosts': 'All posts',

  // Blog post
  'post.eyebrow': 'Blog',
  'post.readingTime': '{minutes} min à lire',
  'post.tocLabel': 'Sommaire',
  'post.contentsEyebrow': 'Contents',
  'post.adjacentLabel': 'Articles adjacent',
  'post.previous': 'Précédent',
  'post.next': 'Suivant',
  'post.relatedEyebrow': 'Articles connexes',
  'post.breadcrumbHome': 'Accueil',
  'post.breadcrumbBlog': 'Blog',

  // Comments (rendered only when GISCUS.enabled)
  'comments.eyebrow': 'Commentaires',
  // `{link}` is a whole anchor element, built in Comments.astro — a translation
  // decides where in the sentence it lands, and the URL never has to be
  // interpolated into the dictionary value.
  'comments.failed': 'Les commentaires n’ont pas pu être chargés. Lisez le fil de discussion sur {link}.',
  'comments.failedLink': 'GitHub Discussions ↗',
  'comments.noscript': 'Les commentaires nécessitent JavaScript. Ils sont hébergés sur GitHub Discussions.',

  // Works
  'works.title': 'Travaux',
  'works.eyebrow': 'Travaux',
  'works.listLabel': 'Travaux sélectionnés',
  'work.eyebrow': 'Travail',
  'work.visit': 'Visiter le projet',
  'work.repository': 'Voir le référentiel',
  'work.stackEyebrow': 'Pile',

  // About — section labels only; the biography copy lives in about/index.astro
  'about.title': 'À propos',
  'about.eyebrow': 'À propos',
  'about.ledgerLabel': 'Expérience',

  // Search
  'search.title': 'Recherche',
  'search.eyebrow': 'Recherche',
  'search.sectionLabel': 'Recherche sur le site',
  'search.fallback':
    'L’index de recherche est généré au moment de la construction. Exécutez <code>npm run build</code> et prévisualisez le site pour l’essayer - il n’est pas disponible sur le serveur de dev.',

  // 404 — a theme-owned page, so its copy belongs here
  'notFound.title': 'Page introuvable',
  'notFound.description': 'La page que vous recherchiez n’existe pas.',
  'notFound.eyebrow': '404 — Introuvable',
  'notFound.heading': 'This page drifted off course.',
  'notFound.lead':
    'L’adresse a peut-être changé ou n’a jamais existé. Les lignes d’étrave ci-dessous mènent à une eau stable.',
  'notFound.linksLabel': 'Liens de récupération',
  'notFound.home': 'Retour à l’acceuil',
  'notFound.blog': 'Lire le B;og',
  'notFound.works': 'Parcourir les travaux',
};

/** The shape every dictionary must implement. */
export type UIStrings = typeof en;

/** Every valid translation key. */
export type UIKey = keyof UIStrings;

