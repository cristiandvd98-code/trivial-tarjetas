(function () {
  if (window.__trivialNativeSavedBoards) return;

  const storageKey = "trivial-card-dealer-v2";
  const colors = ["yellow", "blue", "pink", "green", "orange", "purple"];
  const setupView = document.querySelector("#setupView");
  const slotForm = document.querySelector("#slotForm");
  if (!setupView || !slotForm) return;
  preserveSavedBoardsAcrossAppSaves();

  let panel = document.querySelector(".saved-board-panel");
  if (!panel) {
    panel = document.createElement("div");
    panel.className = "saved-board-panel";
    panel.innerHTML = `
      <div class="section-heading">
        <h2>Mis partidas</h2>
        <button class="text-button" id="saveBoardButton" type="button">Guardar actual</button>
      </div>
      <div class="saved-board-list" id="savedBoardList"></div>
    `;
    setupView.insertBefore(panel, setupView.firstElementChild);
  }

  const saveButton = panel.querySelector("#saveBoardButton");
  const list = panel.querySelector("#savedBoardList");

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
      return {};
    }
  }

  function writeState(state) {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function preserveSavedBoardsAcrossAppSaves() {
    const originalSetItem = localStorage.setItem.bind(localStorage);
    localStorage.setItem = (key, value) => {
      if (key === storageKey) {
        try {
          const previous = JSON.parse(localStorage.getItem(storageKey)) || {};
          const next = JSON.parse(value) || {};
          if (!Array.isArray(next.savedBoards) && Array.isArray(previous.savedBoards)) {
            next.savedBoards = previous.savedBoards;
            value = JSON.stringify(next);
          }
        } catch {}
      }
      originalSetItem(key, value);
    };
  }

  function getBlockName(state, blockId) {
    return (state.blocks || []).find((block) => block.id === blockId)?.name || "Sin bloque";
  }

  function renderSavedBoards() {
    const state = readState();
    const boards = Array.isArray(state.savedBoards) ? state.savedBoards : [];
    list.innerHTML = "";

    if (!boards.length) {
      list.innerHTML = `<p class="empty-state">Todavia no tienes partidas guardadas.</p>`;
      return;
    }

    boards.forEach((board) => {
      const names = (board.slots || []).map((slot) => getBlockName(state, slot.blockId)).join(", ");
      const card = document.createElement("article");
      card.className = "saved-board-card";
      card.innerHTML = `
        <header><h3>${escapeHtml(board.name)}</h3></header>
        <p>${escapeHtml(names || "Sin bloques asignados")}</p>
        <div class="saved-board-actions">
          <button class="primary-button" type="button" data-load-board="${board.id}">Cargar</button>
          <button class="delete-button" type="button" title="Borrar partida" data-delete-board="${board.id}">x</button>
        </div>
      `;
      list.append(card);
    });
  }

  function saveCurrentBoard() {
    const state = readState();
    const name = prompt("Nombre para esta partida", "Partida con amigos");
    if (!name || !name.trim()) return;

    const slots = Array.from(slotForm.querySelectorAll("select")).map((select, index) => ({
      colorId: colors[index],
      blockId: select.value
    }));
    state.savedBoards = Array.isArray(state.savedBoards) ? state.savedBoards : [];
    state.savedBoards.unshift({ id: createId(), name: name.trim(), slots });
    writeState(state);
    renderSavedBoards();
  }

  function loadSavedBoard(boardId) {
    const state = readState();
    const board = (state.savedBoards || []).find((item) => item.id === boardId);
    if (!board) return;
    state.slots = colors.map((colorId, index) => ({
      colorId,
      blockId: board.slots[index]?.blockId || state.blocks?.[index]?.id || state.blocks?.[0]?.id || ""
    }));
    state.used = {};
    writeState(state);
    location.reload();
  }

  function deleteSavedBoard(boardId) {
    const state = readState();
    state.savedBoards = (state.savedBoards || []).filter((board) => board.id !== boardId);
    writeState(state);
    renderSavedBoards();
  }

  saveButton.addEventListener("click", saveCurrentBoard);
  list.addEventListener("click", (event) => {
    const loadButton = event.target.closest("[data-load-board]");
    const deleteButton = event.target.closest("[data-delete-board]");
    if (loadButton) loadSavedBoard(loadButton.dataset.loadBoard);
    if (deleteButton) deleteSavedBoard(deleteButton.dataset.deleteBoard);
  });

  function createId() {
    if (crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  renderSavedBoards();
})();
