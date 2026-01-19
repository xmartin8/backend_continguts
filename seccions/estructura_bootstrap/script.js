//DADES
const icons = {
  folder: "📁",
  file: "📄",
  iframeFile: "📝",
  public: "🌐",
  config: "⚙️",
  uploads: "📤",
  docs: "📚",
  lib: "📦",
};

const iframeFiles = [
  "amazon.php",
  "google.php",
  "github.php",
  ".htaccess",
  "db-connection.php",
  "LogGenerator.php",
  "db-schema.sql",
  "README.md",
  "env.php",
  "routes.php",
  "error-404.html",
  "pdo-users.php",
];


const structure = {
  projecte: {
    app: {
      Controller: {
        oauth: {
          "amazon.php": "",
          "github.php": "",
          "google.php": "",
        },
      },
      Model: {
        "db-connection.php": "",
        "pdo-articles.php": "",
        "pdo-users.php": "",
        "pdo-productes.php": "",
        migrations: {
          "migration-data.sql": "",
          "migration-data2.sql": "",
        },
        DAO: {},
      },
      View: {
        layouts: {},
        "article.view.php": "",
        "login.view.php": "",
      },
      Exceptions: {},
      Logs: {
        auth: {
          "error-auth.log": "",
        },
        database: {
          "error-database.log": "",
          "success-database.log": "",
        },
        "LogGenerator.php": "",
      },
    },
    resources: {
      lang: {
        en: {},
        ca: {},
      },
      js: {},
      css: {},
    },
    public: {
      ".htaccess": "",
      "index.php": "",
      errors: {
        "error-404.html": "",
        "forbidden-403.html": "",
      },
      assets: {
        images: {},
        js: {},
        css: {},
        fonts: {},
        icons: {},
      },
      vendor: {
        bootstrap: {},
      },
      scripts: {},
      js: {},
      css: {},
      jquery: {},
    },
    config: {
      "routes.php": "",
      "env.php": "",
      "db-connection.php": "",
      "db-schema.sql": "",
    },
    uploads: {},
    docs: {},
    lib: {
      Hybridauth: {},
      PHPMailer: {},
      GithubOauth: {},
      RedditOauth: {},
    },
    test: {
      "examples_test.php": "",
    },
    "index.php": "",
    "README.md": "",
    ".htaccess": "",
    "composer.json": "",
  },
};

const explanations = {
  app: "Conté el codi central de l'aplicació:\nmodels, controladors, serveis, lògica de negoci.\n",
  Controller: "Controladors.\n",
  "amazon.php": "",
  "github.php": "",
  "google.php": "",
  Model: "Migracions, factories, getters, setters.\n",
  "db-connection.php": "",
  View: "Plantilles de visualització.\n",
  "article.view.php":
    "fitxer que mostra la vista del que hi ha al controlador >> article.php\n",
  "login.view.php":
    "fitxer que mostra la vista del que hi ha al controlador >> login.php\n",
  layouts:
    "organitzar les plantilles base de les vistes, és a dir,\nles estructures HTML comunes que comparteixen diverses pàgines.\nLa idea és no repetir el mateix codi HTML\n",
  Exceptions: "Excepcions personalitzades. Gestió d’errors específics\n",
  oauth: "Controladors OAuth.\n",
  migrations: "Migracions de base de dades.\n",
  "migration-data.sql": "Migració de dades.\n",
  "migration-data2.sql": "Segona migració de dades.\n",
  DAO: "Cal treballar amb aquesta estructura només en el cas de treballar amb classes\n",
  resources:
    "Fitxers no compilats: SCSS, TypeScript, Vue, etc. No accessibles directament des del navegador.\n",
  public: "Carpeta pública.\n",
  errors: "Carpeta amb pàgines d'error.\n",
  "error-404.html":
    "Error 404. Recomanable aqui si el cridem des de l'htaccess.\n",
  "forbidden-403.html":
    "Error 403. Recomanable aqui si el cridem des de l'htaccess.\n",
  assets:
    "Carpeta de recursos estàtics. Interessant agrupar dins CSS, fonts, js, icones, imatges...\n",
  images:
    "Carpeta d’imatges. No hauria d’estar dins Views/, perquè no són “vistes”, sinó recursos públics.\n",
  js: "Codi JavaScript accesible des de l'exterior. No hauria d’estar dins Views/, perquè no són “vistes”, sinó recursos públics.\n",
  css: "Codi CSS accesible des de l'exterior. No hauria d’estar dins Views/, perquè no són “vistes”, sinó recursos públics.\n",
  fonts:
    "Carpeta de fonts. No hauria d’estar dins Views/, perquè no són “vistes”, sinó recursos públics.\n",
  icons:
    "Carpeta d’icones.No hauria d’estar dins Views/, perquè no són “vistes”, sinó recursos públics.\n",
  scripts: "Carpeta de scripts.\n",
  jquery: "Carpeta amb jQuery.\n",
  vendor: "Carpeta de dependències.\n",
  bootstrap: "Framework CSS Bootstrap. Pinta y Colorea!!\n",
  test: "Carpeta de tests.\n",
  "examplestest.php": "Fitxer de test.\n",
  config: "Configuracions.\n",
  uploads: "Carpeta per pujar fitxers.\n",
  docs: "Carpeta de documentació.\n",
  lib: "Carpeta de llibreries.\n",
  hybridauth: "Llibreria HybridAuth.\n",
  PHPMailer: "Llibreria PHPMailer.\n",
  GithubOauth: "Llibreria Github OAuth.\n",
  redditOauth: "Llibreria Reddit OAuth.\n",
  "index.php": "Fitxer principal.\nCal decidir si va a l'arrel del projecte o a la carpeta Public\n",
  "README.md": "Fitxer de documentació.\n",
  ".htaccess": "Fitxer de configuració del servidor.\n",
  "composer.json":
    "Fitxer de configuració de Composer. No col·locar dins de /app/ o /public/.\nAixò trenca l’autoload i no és compatible amb cap estructura de framework o entorn PHP\n",
  Logs: "",
  auth: "",
  "error-auth.log": "mostra errors d'autenticació\n",
  database: "",
  "error-database.log": "mostra errors sobre la BDD\n",
  "success-database.log": "mostra exits sobre la BDD\n",
  ".htaccess": "",
};


//LOGICA
function getClassForItem(name, parentPath, isFolder) {
  if (name === "index.php") return "file-index";
  if (name === ".htaccess") return "file-htaccess";
  if (name === "db-connection.php") return "file-db-connection";
  return isFolder ? "folder" : "file";
}

function createTree(container, obj, parentPath = "") {
  const ul = document.createElement("ul");

  for (let key in obj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = key;
    const isFolder = typeof obj[key] === "object" && obj[key] !== null;

    const cls = getClassForItem(key, parentPath, isFolder);

    let icon;
    if (icons[key]) {
      icon = icons[key];
    } else if (isFolder) {
      icon = icons.folder;
    } else if (iframeFiles.includes(key)) {
      icon = icons.iframeFile;
    } else {
      icon = icons.file;
    }

    li.insertAdjacentText("afterbegin", icon + " ");
    li.classList.add(cls);

    span.addEventListener("click", (e) => {
      e.stopPropagation();
      showPopup(key);
    });

    if (isFolder) {
      const toggle = document.createElement("span");
      toggle.textContent = " [+] ";
      toggle.classList.add("toggle-btn");

      li.appendChild(toggle);
      li.appendChild(span);

      const childUl = document.createElement("ul");
      childUl.style.display = "none";
      li.appendChild(childUl);

      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        if (childUl.style.display === "none") {
          childUl.style.display = "block";
          toggle.textContent = " [-] ";
        } else {
          childUl.style.display = "none";
          toggle.textContent = " [+] ";
        }
      });

      createTree(childUl, obj[key], parentPath ? `${parentPath}/${key}` : key);
    } else {
      li.appendChild(span);
    }

    ul.appendChild(li);
  }

  container.appendChild(ul);
}

function showPopup(name) {

  if (name === "amazon.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "amazon.html";
    iframeContainer.classList.remove("hidden");
    return;
  }
  if (name === "google.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "google.html";
    iframeContainer.classList.remove("hidden");
    return;
  }
  if (name === "github.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "github.html";
    iframeContainer.classList.remove("hidden");
    return;
  }
  if (name === ".htaccess") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "htaccess.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "db-connection.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "dbconnection.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "LogGenerator.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "loggenerator.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "db-schema.sql") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "esquemasql.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "README.md") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "readme.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "env.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "env.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "routes.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "routes.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "error-404.html") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "error404.jpg";
    iframeContainer.classList.remove("hidden");
    return;
  }

  if (name === "pdo-users.php") {
    const iframeContainer = document.getElementById("iframe-container");
    const iframe = document.getElementById("code-frame");
    iframe.src = "pdousers.html";
    iframeContainer.classList.remove("hidden");
    return;
  }

  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  let explanation = explanations[name] || "Sense explicació disponible.";
  explanation = explanation.replace(/\n/g, "<br>");
  text.innerHTML = explanation;

  popup.classList.remove("hidden");
}

document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});

const container = document.getElementById("folder-structure");
createTree(container, structure["projecte"]);

document.getElementById("close-iframe").addEventListener("click", () => {
  document.getElementById("iframe-container").classList.add("hidden");
  document.getElementById("code-frame").src = "";
});

