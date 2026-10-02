// French  UI dictionary — shipped as a reference translation alongside `en`.
// Copy this file to add your own locale; `UIStrings` makes a missing key a
// type error, so nothing can silently fall back to English.
//
// Scope is UI chrome only — see the note at the top of `en.ts`.
import type { UIStrings } from './en';

export const fr: UIStrings = {
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

