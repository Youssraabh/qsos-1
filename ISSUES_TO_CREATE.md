# Issues à créer pour le projet QSOS

Ce document liste les issues identifiées lors de l'analyse du projet. Ces issues devraient être créées sur GitHub.

## 🐛 Bugs et Problèmes Identifiés

### 1. [Bug] Gestion des erreurs avec console.error au lieu d'un logger structuré
**Priorité:** Medium  
**Labels:** `bug`, `refactoring`, `backend`, `good first issue`

**Description:**  
Le projet utilise `console.error` dans plusieurs fichiers au lieu d'utiliser le logger `loglevel` qui est déjà configuré. Cela rend le débogage et le monitoring plus difficiles en production.

**Fichiers concernés:**
- `server/utils/auth.ts` (ligne 23)
- `server/routes/auth/gitlab.get.ts`
- `server/routes/auth/github.get.ts`
- `server/api/licenses.get.ts`
- `app/services/data-providers/file-based-provider.ts` (multiples occurrences)

**Solution proposée:**  
Remplacer `console.error` par `log.error` (le logger loglevel est déjà importé dans certains fichiers) pour une gestion cohérente des logs.

**Exemple de correction:**
```typescript
// Au lieu de
console.error(`Couldn't create admin file at ${ADMIN_PATH}`, err);

// Utiliser
log.error(`Couldn't create admin file at ${ADMIN_PATH}`, err);
```

---

### 2. [Bug] Secrets OAuth potentiellement exposés dans nuxt.config.ts
**Priorité:** High  
**Labels:** `security`, `backend`, `needs-investigation`

**Description:**  
Dans `nuxt.config.ts`, les secrets OAuth sont référencés dans `runtimeConfig.public`, ce qui les rend accessibles côté client. Bien qu'ils soient chargés depuis des variables d'environnement, cette configuration pourrait être dangereuse.

**Fichier:** `nuxt.config.ts` (lignes 56-64)

**Code actuel:**
```typescript
runtimeConfig: {
  public: {
    github: {
      clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET  // ⚠️ Ne devrait pas être public
    },
```

**Solution proposée:**  
Déplacer les `clientSecret` hors de la section `public` pour qu'ils restent côté serveur uniquement.

---

### 3. [Testing] Absence de tests unitaires
**Priorité:** High  
**Labels:** `testing`, `enhancement`, `help wanted`

**Description:**  
Bien que Vitest soit configuré (`vitest.config.ts`), aucun fichier de test n'existe dans le projet. Les scripts `test:node` et `test:bun` sont définis mais ne peuvent pas s'exécuter correctement.

**Impact:**
- Pas de validation automatique du code
- Risque de régressions
- Difficulté à maintenir la qualité du code

**Solution proposée:**  
Créer une suite de tests complète :
1. Tests unitaires pour les services (data providers, auth, etc.)
2. Tests d'intégration pour les API routes
3. Tests composants Vue
4. Tests E2E avec Playwright/Cypress

**Fichiers à tester en priorité:**
- `app/services/data-providers/file-based-provider.ts`
- `server/utils/auth.ts`
- `utils/semver.ts`
- Toutes les routes API

---

## 📚 Documentation Manquante

### 4. [Docs] Guide de déploiement Docker manquant
**Priorité:** Medium  
**Labels:** `documentation`, `devops`, `good first issue`

**Description:**  
Il n'existe pas de documentation pour déployer QSOS avec Docker, ce qui est pourtant une méthode très courante.

**Solution proposée:**  
Créer `docs/content/deployment/docker.md` avec :
- Dockerfile optimisé (multi-stage build)
- docker-compose.yml
- Configuration des variables d'environnement
- Instructions de déploiement

---

### 5. [Docs] Documentation API manquante
**Priorité:** Medium  
**Labels:** `documentation`, `backend`

**Description:**  
Aucune documentation n'existe pour les endpoints API du serveur.

**Solution proposée:**  
Documenter toutes les routes API dans `docs/content/api/`:
- Authentication endpoints
- Software types endpoints
- Software endpoints
- Evaluation endpoints
- User endpoints

Format suggéré : OpenAPI/Swagger ou documentation Markdown détaillée

---

## ✨ Améliorations et Nouvelles Fonctionnalités

### 6. [Enhancement] Ajouter un fichier .env.example
**Priorité:** High  
**Labels:** `enhancement`, `documentation`, `good first issue`

**Description:**  
Le projet nécessite un fichier `.env` mais aucun exemple n'est fourni dans le repository.

**Solution proposée:**  
Créer `.env.example` avec toutes les variables nécessaires et des valeurs d'exemple :
```env
# Session
NUXT_SESSION_PASSWORD=your-password-with-at-least-32-characters

# OAuth GitHub
NUXT_OAUTH_GITHUB_CLIENT_ID=your-github-client-id
NUXT_OAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret

# OAuth GitLab
NUXT_OAUTH_GITLAB_CLIENT_ID=your-gitlab-client-id
NUXT_OAUTH_GITLAB_CLIENT_SECRET=your-gitlab-client-secret

# Documentation Server
DOCS_SERVER_PORT=3001
```

---

### 7. [Enhancement] Ajouter EditorConfig pour la cohérence du code
**Priorité:** Low  
**Labels:** `enhancement`, `devops`, `good first issue`

**Description:**  
Ajouter un fichier `.editorconfig` pour assurer la cohérence du formatage du code entre différents éditeurs.

**Solution proposée:**  
Créer `.editorconfig`:
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{js,ts,vue,json}]
indent_style = tab
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

---

### 8. [Enhancement] Ajouter Prettier/ESLint configuration
**Priorité:** Medium  
**Labels:** `enhancement`, `devops`

**Description:**  
Le projet n'a pas de configuration ESLint ou Prettier définie, ce qui peut entraîner des incohérences de style de code.

**Solution proposée:**  
1. Ajouter `.eslintrc.js` avec configuration TypeScript et Vue
2. Ajouter `.prettierrc` avec les règles de formatage
3. Ajouter script `lint` et `format` dans package.json
4. Configurer pre-commit hooks avec husky

---

## 🔧 DevOps et CI/CD

### 9. [DevOps] Pas de GitHub Actions configuré
**Priorité:** High  
**Labels:** `devops`, `enhancement`

**Description:**  
Le projet n'a actuellement aucun workflow GitHub Actions configuré.

**Solution proposée:**  
✅ **RÉSOLU** - Les workflows suivants ont été créés :
- `.github/workflows/ci.yml` - Tests et build
- `.github/workflows/codeql.yml` - Analyse de sécurité

---

### 10. [Enhancement] Ajouter un workflow de release automatique
**Priorité:** Low  
**Labels:** `devops`, `enhancement`

**Description:**  
Automatiser la création de releases GitHub avec changelog automatique.

**Solution proposée:**  
Créer `.github/workflows/release.yml` qui :
1. Se déclenche sur tag (v*)
2. Génère un changelog depuis les commits/PR
3. Crée une release GitHub
4. Build et attache les artifacts

---

## ♿ Accessibilité

### 11. [Enhancement] Audit d'accessibilité nécessaire
**Priorité:** Medium  
**Labels:** `accessibility`, `frontend`, `help wanted`

**Description:**  
Aucun audit d'accessibilité n'a été réalisé sur l'application.

**Solution proposée:**  
1. Installer et configurer @nuxt/a11y ou axe-core
2. Effectuer un audit complet
3. Corriger les problèmes identifiés
4. Ajouter tests d'accessibilité automatisés

---

## 🌐 Internationalisation

### 12. [i18n] Compléter les traductions françaises
**Priorité:** Low  
**Labels:** `i18n`, `good first issue`

**Description:**  
Vérifier que toutes les chaînes de l'application ont une traduction française complète.

**Solution proposée:**  
1. Audit des fichiers i18n
2. Identifier les traductions manquantes
3. Compléter les fichiers de traduction
4. Ajouter un script pour détecter les traductions manquantes

---

## 📦 Dépendances

### 13. [Dependencies] jspdf version obsolète (v4.2.0)
**Priorité:** Low  
**Labels:** `dependencies`, `good first issue`

**Description:**  
La version de jspdf utilisée (4.2.0) est très ancienne. La version actuelle est v2.x (nouvelle API).

**Solution proposée:**  
1. Vérifier la compatibilité avec jspdf v2.x
2. Mettre à jour si possible
3. Tester l'export PDF

---

## 🔒 Sécurité

### 14. [Security] Ajouter SECURITY.md avec politique de divulgation
**Priorité:** High  
**Labels:** `security`, `documentation`

**Description:**  
✅ **DÉJÀ PRÉSENT** - Le fichier `SECURITY.md` existe déjà dans le projet.

---

## ⚠️ IMPORTANT - Avant de créer une issue

**Les labels existent déjà sur GitHub** - Pas besoin de les recréer.

Avant de créer une issue, **vérifiez qu'elle n'existe pas déjà** :
- Consultez https://github.com/eclipse-qsos/qsos/issues
- Recherchez dans les issues ouvertes ET fermées
- Utilisez la recherche GitHub ou `gh issue list --repo eclipse-qsos/qsos --state all`

## Instructions pour créer les issues

1. **Vérifier** que l'issue n'existe pas déjà sur GitHub
2. **Aller sur** https://github.com/eclipse-qsos/qsos/issues/new/choose
3. **Choisir le template approprié** (Bug Report, Feature Request, Documentation)
4. **Copier le contenu** de l'issue correspondante ci-dessus
5. **Soumettre l'issue** (les labels seront ajoutés automatiquement par les templates)

## Ordre de priorité recommandé

### Critique (à faire en premier)
1. Issue #2 - Secrets OAuth exposés
2. Issue #6 - Fichier .env.example manquant

### Haute priorité
1. Issue #3 - Absence de tests
2. Issue #9 - ✅ GitHub Actions (déjà fait)
3. Issue #14 - ✅ SECURITY.md (déjà présent)

### Priorité moyenne
1. Issue #1 - console.error vs logger
2. Issue #4 - Documentation Docker
3. Issue #5 - Documentation API
4. Issue #8 - ESLint/Prettier
5. Issue #11 - Accessibilité

### Basse priorité
1. Issue #7 - EditorConfig
2. Issue #10 - Release workflow
3. Issue #12 - Traductions
4. Issue #13 - Mise à jour jspdf

## Notes

- Certaines issues peuvent être regroupées dans des PRs
- Les issues marquées `good first issue` sont idéales pour les nouveaux contributeurs
- Privilégier les issues avec `help wanted` si vous souhaitez contribuer