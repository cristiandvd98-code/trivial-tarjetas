const storageKey = "trivial-card-dealer-v2";
const legacyStorageKey = "trivial-card-dealer-v1";

const colors = [
  { id: "yellow", name: "Amarillo", value: "#f6c945" },
  { id: "blue", name: "Azul", value: "#4a90e2" },
  { id: "pink", name: "Rosa", value: "#e4558f" },
  { id: "green", name: "Verde", value: "#33a46f" },
  { id: "orange", name: "Naranja", value: "#f07b3f" },
  { id: "purple", name: "Morado", value: "#8e6bdc" }
];

const demoBlocks = [
  { id: "block-sport", name: "Deporte", type: "Generica" },
  { id: "block-laura", name: "Laura", type: "Persona" },
  { id: "block-medicine", name: "Medicina", type: "Generica" },
  { id: "block-cinema", name: "Cine", type: "Generica" },
  { id: "block-motor", name: "Motor", type: "Generica" },
  { id: "block-culture", name: "Cultura", type: "Generica" }
];

const demoQuestions = [
  { id: createId(), blockId: "block-sport", question: "Que seleccion gano el Mundial de futbol de 2010?", answer: "Espana." },
  { id: createId(), blockId: "block-laura", question: "Que detalle pequeno suele delatar que Laura esta concentrada?", answer: "Personalizad esta respuesta con una broma del grupo." },
  { id: createId(), blockId: "block-medicine", question: "Que organo bombea la sangre por el cuerpo?", answer: "El corazon." },
  { id: createId(), blockId: "block-cinema", question: "Quien dirigio Jurassic Park?", answer: "Steven Spielberg." },
  { id: createId(), blockId: "block-motor", question: "Que pieza recarga la bateria mientras el motor esta en marcha?", answer: "El alternador." },
  { id: createId(), blockId: "block-culture", question: "Cual es la capital de Portugal?", answer: "Lisboa." }
];

const recommendedBoards = [
  {
    id: "preset-heterobasicos",
    name: "Heterobasicos",
    description: "Un tablero muy de pibes: gimnasio, futbol, coches, ligoteo torpe, planes de bar y cultura de grupo.",
    blockIds: ["hb-gym", "hb-futbol", "hb-coches", "hb-fiesta", "hb-series", "hb-bro"],
    blocks: [
      { id: "hb-gym", name: "Gym y espejo", type: "Generica" },
      { id: "hb-futbol", name: "Futbol de bar", type: "Generica" },
      { id: "hb-coches", name: "Coches", type: "Generica" },
      { id: "hb-fiesta", name: "Noche y ligoteo", type: "Generica" },
      { id: "hb-series", name: "Peliculas de pibes", type: "Generica" },
      { id: "hb-bro", name: "Codigos de grupo", type: "Generica" }
    ],
    questions: [
      ["hb-gym", "Que ejercicio se asocia mas al dia internacional de pecho?", "Press banca."],
      ["hb-gym", "Que suplemento se suele tomar para mejorar rendimiento en esfuerzos cortos e intensos?", "Creatina."],
      ["hb-futbol", "Que equipo gano la Champions League 2014 con gol de Sergio Ramos en el minuto 93?", "Real Madrid."],
      ["hb-futbol", "Que significa hacer una rabona?", "Golpear el balon cruzando una pierna por detras de la otra."],
      ["hb-coches", "Que parte del coche se encarga de cambiar la relacion entre motor y ruedas?", "La caja de cambios."],
      ["hb-coches", "Que suele indicar una luz roja de aceite en el cuadro?", "Problema de presion o nivel de aceite; conviene parar."],
      ["hb-fiesta", "Como se llama pedir una ultima copa cuando ya claramente no hacia falta?", "La penultima."],
      ["hb-fiesta", "Que bebida mezcla normalmente ron, cola y lima?", "Cuba libre."],
      ["hb-series", "En que saga aparece Dominic Toretto?", "Fast and Furious."],
      ["hb-series", "Que actor interpreta a Rocky Balboa?", "Sylvester Stallone."],
      ["hb-bro", "Que frase se usa para aprobar un plan sin pensar demasiado?", "Se hace."],
      ["hb-bro", "Que significa ghostear?", "Dejar de responder de repente."],
      ["hb-bro", "Que objeto se pierde misteriosamente en casi cualquier quedada?", "El mechero."],
      ["hb-futbol", "Cuantos jugadores por equipo hay en el campo al empezar un partido de futbol?", "Once."]
    ]
  },
  {
    id: "preset-deportes",
    name: "Full deportes",
    description: "Solo deporte: futbol, basket, tenis, motor, olimpicos y leyendas.",
    blockIds: ["sport-football", "sport-basket", "sport-tennis", "sport-motor", "sport-olympic", "sport-legends"],
    blocks: [
      { id: "sport-football", name: "Futbol", type: "Generica" },
      { id: "sport-basket", name: "Basket", type: "Generica" },
      { id: "sport-tennis", name: "Tenis", type: "Generica" },
      { id: "sport-motor", name: "Motor", type: "Generica" },
      { id: "sport-olympic", name: "Olimpicos", type: "Generica" },
      { id: "sport-legends", name: "Leyendas", type: "Generica" }
    ],
    questions: [
      ["sport-football", "Que pais gano el Mundial de futbol masculino de 2022?", "Argentina."],
      ["sport-football", "Que seleccion gano la Eurocopa de 2008?", "Espana."],
      ["sport-basket", "Cuantos puntos vale un tiro libre en baloncesto?", "Uno."],
      ["sport-basket", "En que liga juegan los Boston Celtics?", "NBA."],
      ["sport-tennis", "Como se llama ganar los cuatro grandes torneos en el mismo ano?", "Grand Slam."],
      ["sport-tennis", "En que superficie se juega Roland Garros?", "Tierra batida."],
      ["sport-motor", "Que significa hacer una pole position?", "Salir primero en la parrilla."],
      ["sport-motor", "Que competicion se asocia a Le Mans?", "Las 24 Horas de Le Mans."],
      ["sport-olympic", "Cada cuantos anos se celebran normalmente los Juegos Olimpicos de verano?", "Cada cuatro anos."],
      ["sport-olympic", "Que prueba combina natacion, ciclismo y carrera?", "Triatlon."],
      ["sport-legends", "Con que deporte se asocia Michael Jordan?", "Baloncesto."],
      ["sport-legends", "Con que deporte se asocia Usain Bolt?", "Atletismo."],
      ["sport-legends", "Que nadador gano 23 oros olimpicos?", "Michael Phelps."],
      ["sport-football", "Que club juega como local en Anfield?", "Liverpool."]
    ]
  },
  {
    id: "preset-ginius",
    name: "Ginius",
    description: "Preguntas duras para gente intensa: ciencia, historia, arte, logica, geografia y rarezas.",
    blockIds: ["gen-science", "gen-history", "gen-art", "gen-logic", "gen-geo", "gen-weird"],
    blocks: [
      { id: "gen-science", name: "Ciencia dura", type: "Generica" },
      { id: "gen-history", name: "Historia dificil", type: "Generica" },
      { id: "gen-art", name: "Arte y letras", type: "Generica" },
      { id: "gen-logic", name: "Logica", type: "Generica" },
      { id: "gen-geo", name: "Geografia fina", type: "Generica" },
      { id: "gen-weird", name: "Rarezas", type: "Generica" }
    ],
    questions: [
      ["gen-science", "Que particula subatomica tiene carga negativa?", "El electron."],
      ["gen-science", "Que ley relaciona presion y volumen de un gas a temperatura constante?", "Ley de Boyle."],
      ["gen-history", "En que ano cayo Constantinopla en manos otomanas?", "1453."],
      ["gen-history", "Que tratado puso fin a la Primera Guerra Mundial?", "Tratado de Versalles."],
      ["gen-art", "Quien escribio Cien anos de soledad?", "Gabriel Garcia Marquez."],
      ["gen-art", "Que pintor es conocido por Las meninas?", "Diego Velazquez."],
      ["gen-logic", "Si todos los bloops son razzies y todos los razzies son lazzies, que son todos los bloops?", "Lazzies."],
      ["gen-logic", "Que numero sigue: 2, 3, 5, 8, 13?", "21."],
      ["gen-geo", "Cual es la capital de Kazajistan?", "Astana."],
      ["gen-geo", "Que estrecho separa Europa y Africa en el extremo occidental del Mediterraneo?", "Estrecho de Gibraltar."],
      ["gen-weird", "Que metal es liquido a temperatura ambiente?", "Mercurio."],
      ["gen-weird", "Como se llama el miedo irracional a las palabras largas?", "Hipopotomonstrosesquipedaliofobia."],
      ["gen-science", "Que unidad mide la resistencia electrica?", "Ohmio."],
      ["gen-art", "Que movimiento artistico se asocia a Salvador Dali?", "Surrealismo."]
    ]
  }
];

let state = loadState();
let activeSlotIndex = null;
let activeQuestion = null;
let timerSeconds = 20;
let timerInterval = null;
let pendingPhotoBlockId = null;
let pendingNewBlockPhoto = "";
let selectedBankBlockId = state.blocks[0]?.id || "";

const screenCopy = {
  home: { title: "Tarjetas", eyebrow: "Trivial personal" },
  presets: { title: "Recomendados", eyebrow: "Tableros listos" },
  setup: { title: "Preparar", eyebrow: "Antes de jugar" },
  play: { title: "Juego", eyebrow: "Sacar tarjetas" },
  bank: { title: "Banco", eyebrow: "Bloques y preguntas" }
};

const views = {
  home: document.querySelector("#homeView"),
  presets: document.querySelector("#presetsView"),
  setup: document.querySelector("#setupView"),
  play: document.querySelector("#playView"),
  bank: document.querySelector("#bankView")
};

const screenTitle = document.querySelector("#screenTitle");
const screenEyebrow = document.querySelector("#screenEyebrow");
const backButton = document.querySelector("#backButton");
const themeButton = document.querySelector("#themeButton");
const startSetupButton = document.querySelector("#startSetupButton");
const openPresetsButton = document.querySelector("#openPresetsButton");
const openBankButton = document.querySelector("#openBankButton");
const setupBankButton = document.querySelector("#setupBankButton");
const startGameButton = document.querySelector("#startGameButton");
const presetList = document.querySelector("#presetList");
const slotForm = document.querySelector("#slotForm");
const playColorGrid = document.querySelector("#playColorGrid");
const questionPanel = document.querySelector("#questionPanel");
const questionPhoto = document.querySelector("#questionPhoto");
const activeColorDot = document.querySelector("#activeColorDot");
const activeBlockName = document.querySelector("#activeBlockName");
const timerPill = document.querySelector("#timerPill");
const questionText = document.querySelector("#questionText");
const answerBox = document.querySelector("#answerBox");
const showAnswerButton = document.querySelector("#showAnswerButton");
const nextQuestionButton = document.querySelector("#nextQuestionButton");
const resetUsedButton = document.querySelector("#resetUsedButton");
const restoreDemoButton = document.querySelector("#restoreDemoButton");
const bankBlockSelect = document.querySelector("#bankBlockSelect");
const newBlockFields = document.querySelector("#newBlockFields");
const selectedBlockTools = document.querySelector("#selectedBlockTools");
const selectedBlockPhoto = document.querySelector("#selectedBlockPhoto");
const selectedBlockPhotoButton = document.querySelector("#selectedBlockPhotoButton");
const newBlockPhotoButton = document.querySelector("#newBlockPhotoButton");
const createBlockButton = document.querySelector("#createBlockButton");
const blockNameInput = document.querySelector("#blockNameInput");
const blockTypeInput = document.querySelector("#blockTypeInput");
const questionForm = document.querySelector("#questionForm");
const activeBlockLine = document.querySelector("#activeBlockLine");
const questionInput = document.querySelector("#questionInput");
const answerInput = document.querySelector("#answerInput");
const questionList = document.querySelector("#questionList");
const questionCount = document.querySelector("#questionCount");
const templateButton = document.querySelector("#templateButton");
const exportBlockCsvButton = document.querySelector("#exportBlockCsvButton");
const exportQuestionsButton = document.querySelector("#exportQuestionsButton");
const importQuestionsButton = document.querySelector("#importQuestionsButton");
const exportPanel = document.querySelector("#exportPanel");
const exportTitle = document.querySelector("#exportTitle");
const exportHelp = document.querySelector("#exportHelp");
const exportText = document.querySelector("#exportText");
const closeExportButton = document.querySelector("#closeExportButton");
const copyExportButton = document.querySelector("#copyExportButton");
const importButton = document.querySelector("#importButton");
const exportButton = document.querySelector("#exportButton");
const importInput = document.querySelector("#importInput");
const importQuestionsInput = document.querySelector("#importQuestionsInput");
const photoInput = document.querySelector("#photoInput");

applyTheme();

themeButton.addEventListener("click", () => {
  state.darkMode = !state.darkMode;
  applyTheme();
  saveAndRender();
});

startSetupButton.addEventListener("click", () => setView("setup"));
openPresetsButton.addEventListener("click", () => setView("presets"));
openBankButton.addEventListener("click", () => setView("bank"));
setupBankButton.addEventListener("click", () => setView("bank"));
startGameButton.addEventListener("click", () => {
  state.used = {};
  clearQuestion("Toca un color para sacar una pregunta.");
  saveAndRender();
  setView("play");
});

backButton.addEventListener("click", () => {
  if (views.play.classList.contains("is-active")) {
    setView("setup");
    return;
  }
  setView("home");
});

restoreDemoButton.addEventListener("click", () => {
  state = createInitialState();
  clearQuestion("Ejemplo cargado. Toca un color para sacar una pregunta.");
  saveAndRender();
});

resetUsedButton.addEventListener("click", () => {
  state.used = {};
  clearQuestion("Mazos reiniciados. Toca un color para empezar.");
  saveAndRender();
});

showAnswerButton.addEventListener("click", () => {
  if (!activeQuestion) return;
  answerBox.hidden = false;
  showAnswerButton.disabled = true;
});

nextQuestionButton.addEventListener("click", () => {
  if (activeSlotIndex === null) return;
  drawQuestion(activeSlotIndex);
});

bankBlockSelect.addEventListener("change", () => {
  selectedBankBlockId = bankBlockSelect.value === "__new__" ? "" : bankBlockSelect.value;
  renderBankBlockSelect();
  renderQuestionList();
});

createBlockButton.addEventListener("click", () => {
  const name = blockNameInput.value.trim();
  if (!name) return;
  const block = { id: createId(), name, type: blockTypeInput.value, photo: pendingNewBlockPhoto };
  state.blocks.push(block);
  selectedBankBlockId = block.id;
  const emptySlot = state.slots.find((slot) => !slot.blockId);
  if (emptySlot) emptySlot.blockId = block.id;
  blockNameInput.value = "";
  pendingNewBlockPhoto = "";
  saveAndRender();
});

newBlockPhotoButton.addEventListener("click", () => {
  pendingPhotoBlockId = "__new__";
  photoInput.click();
});

selectedBlockPhotoButton.addEventListener("click", () => {
  pendingPhotoBlockId = selectedBankBlockId;
  photoInput.click();
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();
  const blockId = selectedBankBlockId;
  if (!question || !answer || !blockId) return;
  state.questions.unshift({ id: createId(), blockId, question, answer });
  questionInput.value = "";
  answerInput.value = "";
  saveAndRender();
});

exportButton.addEventListener("click", () => {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "trivial-tarjetas.json";
  link.click();
  URL.revokeObjectURL(url);
});

importButton.addEventListener("click", () => importInput.click());

templateButton.addEventListener("click", () => {
  const csv = [
    ["bloque", "tipo", "pregunta", "respuesta"],
    ["Laura", "Persona", "Que plato pediria Laura si solo pudiera elegir uno?", "Personalizad esta respuesta."],
    ["Deporte", "Generica", "Que seleccion gano el Mundial de futbol de 2010?", "Espana."]
  ].map((row) => row.map(formatCsvCell).join(";")).join("\n");
  downloadText("plantilla-preguntas-trivial.csv", csv, "text/csv;charset=utf-8", "Plantilla CSV");
});

importQuestionsButton.addEventListener("click", () => importQuestionsInput.click());
exportBlockCsvButton.addEventListener("click", exportSelectedBlockCsv);
exportQuestionsButton.addEventListener("click", exportAllBlocksCsv);
closeExportButton.addEventListener("click", () => {
  exportPanel.hidden = true;
});
copyExportButton.addEventListener("click", async () => {
  exportText.select();
  try {
    await navigator.clipboard.writeText(exportText.value);
    copyExportButton.textContent = "Copiado";
    setTimeout(() => {
      copyExportButton.textContent = "Copiar contenido";
    }, 1400);
  } catch {
    document.execCommand("copy");
  }
});

importInput.addEventListener("change", async () => {
  const file = importInput.files[0];
  if (!file) return;
  try {
    const imported = normalizeState(JSON.parse(await file.text()));
    state = imported;
    clearQuestion("Datos importados. Toca un color para empezar.");
    saveAndRender();
  } catch {
    alert("No se ha podido importar ese archivo.");
  }
  importInput.value = "";
});

importQuestionsInput.addEventListener("change", async () => {
  const file = importQuestionsInput.files[0];
  if (!file) return;
  try {
    const result = importQuestionRows(await file.text(), file.name);
    saveAndRender();
    alert(`Importadas ${result.questions} preguntas en ${result.blocks} bloque(s).`);
  } catch (error) {
    alert(error.message || "No se ha podido importar ese archivo.");
  }
  importQuestionsInput.value = "";
});

photoInput.addEventListener("change", async () => {
  const file = photoInput.files[0];
  if (!file || !pendingPhotoBlockId) return;
  const photo = await readImageAsDataUrl(file);
  if (pendingPhotoBlockId === "__new__") {
    pendingNewBlockPhoto = photo;
  } else {
    const block = getBlock(pendingPhotoBlockId);
    block.photo = photo;
  }
  pendingPhotoBlockId = null;
  photoInput.value = "";
  saveAndRender();
});

function loadState() {
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      return normalizeState(JSON.parse(stored));
    } catch {
      return createInitialState();
    }
  }
  const legacy = localStorage.getItem(legacyStorageKey);
  if (legacy) {
    try {
      return migrateLegacyState(JSON.parse(legacy));
    } catch {
      return createInitialState();
    }
  }
  return createInitialState();
}

function createInitialState() {
  return {
    blocks: demoBlocks.map((block) => ({ ...block })),
    slots: colors.map((color, index) => ({ colorId: color.id, blockId: demoBlocks[index]?.id || "" })),
    questions: demoQuestions.map((question) => ({ ...question })),
    used: {},
    darkMode: false
  };
}

function migrateLegacyState(legacy) {
  const categories = Array.isArray(legacy.categories) ? legacy.categories : [];
  const blocks = categories.map((category, index) => ({
    id: category.id || `legacy-block-${index}`,
    name: category.category || category.name || `Bloque ${index + 1}`,
    type: category.type || "Generica"
  }));
  const fallback = createInitialState();
  const nextBlocks = blocks.length ? blocks : fallback.blocks;
  return normalizeState({
    blocks: nextBlocks,
    slots: colors.map((color, index) => ({ colorId: color.id, blockId: nextBlocks[index]?.id || "" })),
    questions: Array.isArray(legacy.questions)
      ? legacy.questions.map((question) => ({
          id: question.id || createId(),
          blockId: nextBlocks[question.categoryIndex]?.id || nextBlocks[0]?.id || "",
          question: question.question || "",
          answer: question.answer || ""
        }))
      : fallback.questions,
    used: {}
  });
}

function normalizeState(value) {
  const fallback = createInitialState();
  const blocks = Array.isArray(value.blocks) && value.blocks.length ? value.blocks : fallback.blocks;
  const slots = Array.isArray(value.slots) && value.slots.length
    ? colors.map((color, index) => ({
        colorId: color.id,
        blockId: value.slots[index]?.blockId || blocks[index]?.id || blocks[0]?.id || ""
      }))
    : fallback.slots;
  return {
    blocks: blocks.map((block) => ({
      id: block.id || createId(),
      name: block.name || "Sin nombre",
      type: block.type || "Generica",
      photo: block.photo || ""
    })),
    slots,
    questions: Array.isArray(value.questions)
      ? value.questions.filter((item) => item.question && item.answer).map((item) => ({
          id: item.id || createId(),
          blockId: item.blockId || blocks[0]?.id || "",
          question: item.question,
          answer: item.answer
        }))
      : fallback.questions,
    used: value.used && typeof value.used === "object" ? value.used : {},
    darkMode: Boolean(value.darkMode)
  };
}

function saveAndRender() {
  localStorage.setItem(storageKey, JSON.stringify(state));
  render();
}

function setView(viewName) {
  Object.entries(views).forEach(([name, view]) => {
    view.classList.toggle("is-active", name === viewName);
  });
  screenTitle.textContent = screenCopy[viewName].title;
  screenEyebrow.textContent = screenCopy[viewName].eyebrow;
  backButton.hidden = viewName === "home";
}

function render() {
  renderRecommendedBoards();
  renderSlots();
  renderPlayColors();
  renderBankBlockSelect();
  renderQuestionList();
}

function renderRecommendedBoards() {
  presetList.innerHTML = "";
  recommendedBoards.forEach((board) => {
    const card = document.createElement("button");
    card.className = "preset-card";
    card.type = "button";
    card.innerHTML = `
      <header>
        <h3>${escapeHtml(board.name)}</h3>
        <span class="count-pill">${board.questions.length}</span>
      </header>
      <p>${escapeHtml(board.description)}</p>
      <div class="preset-tags">
        ${board.blocks.map((block) => `<span class="preset-tag">${escapeHtml(block.name)}</span>`).join("")}
      </div>`;
    card.addEventListener("click", () => applyRecommendedBoard(board.id));
    presetList.append(card);
  });
}

function applyRecommendedBoard(boardId) {
  const board = recommendedBoards.find((item) => item.id === boardId);
  if (!board) return;
  board.blocks.forEach((block) => {
    if (!state.blocks.some((item) => item.id === block.id)) {
      state.blocks.push({ ...block, photo: "" });
    }
  });
  board.questions.forEach(([blockId, question, answer], index) => {
    const id = `${board.id}-q-${index}`;
    if (!state.questions.some((item) => item.id === id)) {
      state.questions.push({ id, blockId, question, answer });
    }
  });
  state.slots = colors.map((color, index) => ({
    colorId: color.id,
    blockId: board.blockIds[index] || board.blockIds[0]
  }));
  state.used = {};
  clearQuestion(`${board.name} preparado. Pulsa Empezar cuando este listo.`);
  saveAndRender();
  setView("setup");
}

function renderSlots() {
  slotForm.innerHTML = "";
  state.slots.forEach((slot, index) => {
    const color = getColor(slot.colorId);
    const row = document.createElement("div");
    row.className = "slot-row";
    row.style.setProperty("--category-color", color.value);
    row.innerHTML = `
      <span class="swatch" aria-hidden="true"></span>
      <div class="slot-fields">
        <span class="slot-title">${escapeHtml(color.name)}</span>
        <select data-slot-index="${index}">
          ${state.blocks.map((optionBlock) => `
          <option value="${escapeAttribute(optionBlock.id)}" ${optionBlock.id === slot.blockId ? "selected" : ""}>
            ${escapeHtml(optionBlock.name)} - ${escapeHtml(optionBlock.type)}
          </option>`).join("")}
        </select>
      </div>`;
    slotForm.append(row);
  });
  slotForm.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      state.slots[Number(select.dataset.slotIndex)].blockId = select.value;
      state.used = {};
      clearQuestion("Toca un color para sacar una pregunta.");
      saveAndRender();
    });
  });
}

function renderPlayColors() {
  playColorGrid.innerHTML = "";
  state.slots.forEach((slot, index) => {
    const color = getColor(slot.colorId);
    const block = getBlock(slot.blockId);
    const button = document.createElement("button");
    button.className = "color-button";
    button.type = "button";
    button.style.setProperty("--category-color", color.value);
    button.innerHTML = `<span>${getQuestionStats(slot.blockId)}</span><strong>${escapeHtml(block.name)}</strong>`;
    button.addEventListener("click", () => drawQuestion(index));
    playColorGrid.append(button);
  });
}

function renderBankBlockSelect() {
  if (!state.blocks.some((block) => block.id === selectedBankBlockId)) {
    selectedBankBlockId = state.blocks[0]?.id || "";
  }
  const selectedValue = selectedBankBlockId || "__new__";
  bankBlockSelect.innerHTML = `
    ${state.blocks.map((block) => `
      <option value="${escapeAttribute(block.id)}" ${block.id === selectedValue ? "selected" : ""}>
        ${escapeHtml(block.name)} - ${escapeHtml(block.type)}
      </option>`).join("")}
    <option value="__new__" ${selectedValue === "__new__" ? "selected" : ""}>Nuevo bloque</option>`;
  newBlockFields.hidden = selectedValue !== "__new__";
  selectedBlockTools.hidden = selectedValue === "__new__";
  const block = getBlock(selectedBankBlockId);
  activeBlockLine.textContent = selectedBankBlockId ? `Guardando en: ${block.name}` : "Crea un bloque para empezar a guardar preguntas.";
  const photo = selectedValue === "__new__" ? pendingNewBlockPhoto : block.photo;
  selectedBlockPhoto.style.backgroundImage = photo ? `url("${photo}")` : "";
  newBlockPhotoButton.textContent = pendingNewBlockPhoto ? "Foto lista" : "Anadir foto";
  selectedBlockPhotoButton.textContent = block.photo ? "Cambiar foto" : "Anadir foto";
}

function renderQuestionList() {
  const visibleQuestions = selectedBankBlockId ? state.questions.filter((item) => item.blockId === selectedBankBlockId) : [];
  questionCount.textContent = visibleQuestions.length;
  questionList.innerHTML = "";
  if (!visibleQuestions.length) {
    questionList.innerHTML = `<p class="empty-state">Todavia no hay preguntas guardadas en este bloque.</p>`;
    return;
  }
  visibleQuestions.forEach((item) => {
    const block = getBlock(item.blockId);
    const card = document.createElement("article");
    card.className = "saved-question";
    card.innerHTML = `
      <header>
        <h3>${escapeHtml(block.name)}</h3>
        <button class="delete-button" type="button" title="Borrar pregunta" data-id="${escapeAttribute(item.id)}">x</button>
      </header>
      <p><strong>${escapeHtml(item.question)}</strong></p>
      <p>${escapeHtml(item.answer)}</p>`;
    questionList.append(card);
  });
  questionList.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.questions = state.questions.filter((item) => item.id !== button.dataset.id);
      Object.keys(state.used).forEach((key) => {
        state.used[key] = state.used[key].filter((id) => id !== button.dataset.id);
      });
      saveAndRender();
    });
  });
}

function exportSelectedBlockCsv() {
  if (!selectedBankBlockId) {
    alert("Elige un bloque antes de exportar.");
    return;
  }
  const block = getBlock(selectedBankBlockId);
  const questions = state.questions.filter((item) => item.blockId === block.id);
  if (!questions.length) {
    alert("Este bloque todavia no tiene preguntas.");
    return;
  }
  downloadBlockCsv(block, questions);
}

function exportAllBlocksCsv() {
  const blocksWithQuestions = state.blocks
    .map((block) => ({ block, questions: state.questions.filter((item) => item.blockId === block.id) }))
    .filter((item) => item.questions.length);
  if (!blocksWithQuestions.length) {
    alert("Todavia no hay preguntas para exportar.");
    return;
  }
  blocksWithQuestions.forEach(({ block, questions }, index) => {
    setTimeout(() => downloadBlockCsv(block, questions, false), index * 250);
  });
  showExportFallback(
    "Exportacion por bloques",
    `${blocksWithQuestions.length} archivos CSV`,
    blocksWithQuestions.map(({ block, questions }) => `Archivo: ${getBlockCsvFileName(block)}\n${buildBlockCsv(block, questions)}`).join("\n\n")
  );
}

function downloadBlockCsv(block, questions, showFallback = true) {
  const csv = buildBlockCsv(block, questions);
  downloadText(getBlockCsvFileName(block), csv, "text/csv;charset=utf-8", `Bloque ${block.name}`, showFallback);
}

function buildBlockCsv(block, questions) {
  const rows = [["bloque", "tipo", "pregunta", "respuesta"]];
  questions.forEach((item) => {
    rows.push([block.name, block.type, item.question, item.answer]);
  });
  return rows.map((row) => row.map(formatCsvCell).join(";")).join("\n");
}

function getBlockCsvFileName(block) {
  return `bloque-${slugify(block.name)}.csv`;
}

function importQuestionRows(text, fileName) {
  const delimiter = detectDelimiter(text, fileName);
  const rows = parseSeparatedValues(text, delimiter).filter((row) => row.some((cell) => cell.trim()));
  if (rows.length < 2) throw new Error("El archivo esta vacio o no tiene preguntas.");
  const headers = rows[0].map(normalizeHeader);
  const blockIndex = headers.indexOf("bloque");
  const typeIndex = headers.indexOf("tipo");
  const questionIndex = headers.indexOf("pregunta");
  const answerIndex = headers.indexOf("respuesta");
  if (blockIndex === -1 || questionIndex === -1 || answerIndex === -1) {
    throw new Error("Faltan columnas. Usa: bloque, tipo, pregunta, respuesta.");
  }
  let createdBlocks = 0;
  let importedQuestions = 0;
  rows.slice(1).forEach((row) => {
    const blockName = (row[blockIndex] || "").trim();
    const question = (row[questionIndex] || "").trim();
    const answer = (row[answerIndex] || "").trim();
    const type = ((typeIndex >= 0 ? row[typeIndex] : "") || "Generica").trim();
    if (!blockName || !question || !answer) return;
    let block = state.blocks.find((item) => item.name.toLowerCase() === blockName.toLowerCase());
    if (!block) {
      block = { id: createId(), name: blockName, type: normalizeBlockType(type), photo: "" };
      state.blocks.push(block);
      createdBlocks += 1;
    }
    state.questions.push({ id: createId(), blockId: block.id, question, answer });
    importedQuestions += 1;
  });
  if (!importedQuestions) throw new Error("No he encontrado preguntas validas para importar.");
  state.used = {};
  assignEmptySlots();
  return { blocks: createdBlocks, questions: importedQuestions };
}

function detectDelimiter(text, fileName) {
  if (fileName.toLowerCase().endsWith(".tsv")) return "\t";
  const firstLine = text.split(/\r?\n/).find((line) => line.trim()) || "";
  const options = [",", ";", "\t"];
  return options.reduce((best, candidate) => firstLine.split(candidate).length > firstLine.split(best).length ? candidate : best, ",");
}

function assignEmptySlots() {
  state.slots.forEach((slot, index) => {
    if (!slot.blockId && state.blocks[index]) slot.blockId = state.blocks[index].id;
  });
}

function parseSeparatedValues(text, delimiter) {
  const rows = [];
  let row = [];
  let cell = "";
  let insideQuotes = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && insideQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === delimiter && !insideQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell);
  rows.push(row);
  return rows;
}

function normalizeHeader(value) {
  return String(value).trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function normalizeBlockType(value) {
  return value.toLowerCase().startsWith("persona") ? "Persona" : "Generica";
}

function drawQuestion(slotIndex) {
  const slot = state.slots[slotIndex];
  const color = getColor(slot.colorId);
  const block = getBlock(slot.blockId);
  const blockQuestions = state.questions.filter((item) => item.blockId === block.id);
  activeSlotIndex = slotIndex;
  activeColorDot.style.background = color.value;
  activeBlockName.textContent = block.name;
  setQuestionPhoto(block.photo);
  if (!blockQuestions.length) {
    activeQuestion = null;
    clearQuestion("No hay preguntas guardadas en este bloque.");
    questionPanel.style.borderColor = color.value;
    return;
  }
  const usedIds = new Set(state.used[block.id] || []);
  let available = blockQuestions.filter((item) => !usedIds.has(item.id));
  if (!available.length) {
    state.used[block.id] = [];
    available = blockQuestions;
  }
  activeQuestion = available[Math.floor(Math.random() * available.length)];
  state.used[block.id] = [...(state.used[block.id] || []), activeQuestion.id];
  questionText.textContent = activeQuestion.question;
  answerBox.textContent = activeQuestion.answer;
  answerBox.hidden = true;
  showAnswerButton.disabled = false;
  nextQuestionButton.disabled = false;
  questionPanel.style.borderColor = color.value;
  startTimer();
  saveAndRender();
}

function clearQuestion(message) {
  activeSlotIndex = null;
  activeQuestion = null;
  stopTimer();
  activeColorDot.style.background = "#aab2c0";
  activeBlockName.textContent = "Sin tarjeta";
  setQuestionPhoto("");
  questionText.textContent = message;
  answerBox.hidden = true;
  showAnswerButton.disabled = true;
  nextQuestionButton.disabled = true;
  questionPanel.style.borderColor = "";
}

function setQuestionPhoto(photo) {
  if (!photo) {
    questionPhoto.hidden = true;
    questionPhoto.style.backgroundImage = "";
    return;
  }
  questionPhoto.hidden = false;
  questionPhoto.style.backgroundImage = `url("${photo}")`;
}

function startTimer() {
  stopTimer();
  timerSeconds = 20;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timerSeconds = Math.max(0, timerSeconds - 1);
    updateTimerDisplay();
    if (timerSeconds === 0) stopTimer(false);
  }, 1000);
}

function stopTimer(reset = true) {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  if (reset) {
    timerSeconds = 20;
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  timerPill.textContent = `${timerSeconds}s`;
  timerPill.classList.toggle("is-low", timerSeconds > 0 && timerSeconds <= 5);
  timerPill.classList.toggle("is-done", timerSeconds === 0);
}

function getQuestionStats(blockId) {
  const total = state.questions.filter((item) => item.blockId === blockId).length;
  const used = (state.used[blockId] || []).length;
  return `${Math.min(used, total)} / ${total}`;
}

function getColor(colorId) {
  return colors.find((color) => color.id === colorId) || colors[0];
}

function getBlock(blockId) {
  return state.blocks.find((block) => block.id === blockId) || { id: "", name: "Sin bloque", type: "Generica" };
}

function applyTheme() {
  document.body.classList.toggle("dark-mode", Boolean(state.darkMode));
  themeButton.textContent = state.darkMode ? "L" : "M";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function downloadText(fileName, text, type, title = "Exportacion lista", showFallback = true) {
  const content = type.includes("text/csv") ? `\uFEFF${text}` : text;
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.style.display = "none";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  if (showFallback) showExportFallback(title, fileName, text);
}

function showExportFallback(title, fileName, text) {
  exportTitle.textContent = title;
  exportHelp.textContent = `He intentado descargar ${fileName}. Si no aparece la descarga, copia este contenido.`;
  exportText.value = text;
  exportPanel.hidden = false;
}

function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("load", () => {
        const maxSize = 900;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", .82));
      });
      image.addEventListener("error", reject);
      image.src = reader.result;
    });
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function formatCsvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "bloque";
}

function createId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

render();
