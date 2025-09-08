import React, { useState, useEffect, useCallback } from "react";

// === Повна локалізація ===
const translations = {
  ua: {
    // Основні
    appTitle: "Статистика роботи",
    appDesc: "Збір даних по персоналу, транспорту та канцелярії",
    chooseTask: "Оберіть завдання:",
    personnel: "Персонал",
    bikes: "Велосипеди",
    office: "Канцелярія",
    history: "Історія",
    settings: "Налаштування",

    // Дії
    save: "Зберегти",
    edit: "Редагувати",
    send: "Надіслати",
    sending: "Надсилання...",
    copy: "Копіювати",
    copied: "Скопійовано!",
    delete: "Видалити",
    export: "Експорт",
    install: "Встановити",
    view: "Переглянути",

    // Статуси
    noData: "Немає збережених даних",
    noDataToSave: "Немає даних для збереження",
    dataEmpty: "Введіть хоча б одне значення",
    dataSaved: "Дані збережено в історію!",
    dataSavedToday: "Дані збережено на сьогодні",
    editMode: "Режим редагування активовано",
    successSent: "Успішно надіслано!",
    error: "Помилка",
    dataDeleted: "Дані видалено",
    dataExported: "Дані експортовано",

    // Форми
    units: "одиниць",
    add: "Додати",
    subtract: "Відняти",

    // Task 1
    personnelByZones: "Персонал по зонах",
    cars: "Автомобілі",
    totalCars: "Всього автомобілів",
    workersCount: "Кількість працівників в",
    carsCount: "Кількість автомобілів",

    // Task 2
    bikesAndTransport: "Велосипеди та транспорт",
    quantity: "Кількість",

    // Task 3
    officeSupplies: "Канцелярські товари",
    room: "Кімната",

    // Історія
    historyTitle: "Історія збережених даних",
    recordsFound: "Знайдено записів",
    historyEmpty: "Історія порожня",
    saveDataPrompt: "Збережіть дані в одному з завдань, щоб вони з'явились тут",
    detailedView: "Детальний перегляд даних",
    deleteConfirm: "Видалити всі дані за",

    // PWA
    pwaInstall: "Встановити додаток",
    pwaInstallDesc: "Для кращого досвіду роботи",
    pwaStatus: "PWA Статус",
    online: "Онлайн",
    offline: "Офлайн",
    installed: "Встановлено",
    inBrowser: "В браузері",
    vibration: "Вібрація",
    localStorage: "Локальне збереження",

    // Налаштування
    language: "Мова",
    ukrainian: "Українська",
    english: "English",
    dutch: "Nederlands",
  },

  en: {
    // Basic
    appTitle: "Work Statistics",
    appDesc: "Data collection for staff, transport and office supplies",
    chooseTask: "Choose a task:",
    personnel: "Personnel",
    bikes: "Bikes",
    office: "Office",
    history: "History",
    settings: "Settings",

    // Actions
    save: "Save",
    edit: "Edit",
    send: "Send",
    sending: "Sending...",
    copy: "Copy",
    copied: "Copied!",
    delete: "Delete",
    export: "Export",
    install: "Install",
    view: "View",

    // Statuses
    noData: "No saved data",
    noDataToSave: "No data to save",
    dataEmpty: "Enter at least one value",
    dataSaved: "Data saved to history!",
    dataSavedToday: "Data saved for today",
    editMode: "Edit mode activated",
    successSent: "Successfully sent!",
    error: "Error",
    dataDeleted: "Data deleted",
    dataExported: "Data exported",

    // Forms
    units: "units",
    add: "Add",
    subtract: "Subtract",

    // Task 1
    personnelByZones: "Personnel by zones",
    cars: "Cars",
    totalCars: "Total cars",
    workersCount: "Number of workers in",
    carsCount: "Number of cars",

    // Task 2
    bikesAndTransport: "Bikes and transport",
    quantity: "Quantity",

    // Task 3
    officeSupplies: "Office supplies",
    room: "Room",

    // History
    historyTitle: "Saved data history",
    recordsFound: "Records found",
    historyEmpty: "History is empty",
    saveDataPrompt: "Save data in one of the tasks to see it here",
    detailedView: "Detailed data view",
    deleteConfirm: "Delete all data for",

    // PWA
    pwaInstall: "Install app",
    pwaInstallDesc: "For better experience",
    pwaStatus: "PWA Status",
    online: "Online",
    offline: "Offline",
    installed: "Installed",
    inBrowser: "In browser",
    vibration: "Vibration",
    localStorage: "Local storage",

    // Settings
    language: "Language",
    ukrainian: "Українська",
    english: "English",
    dutch: "Nederlands",
  },

  nl: {
    // Basis
    appTitle: "Werkstatistieken",
    appDesc: "Gegevens verzamelen over personeel, vervoer en kantoorartikelen",
    chooseTask: "Kies een taak:",
    personnel: "Personeel",
    bikes: "Fietsen",
    office: "Kantoor",
    history: "Geschiedenis",
    settings: "Instellingen",

    // Acties
    save: "Opslaan",
    edit: "Bewerken",
    send: "Versturen",
    sending: "Versturen...",
    copy: "Kopiëren",
    copied: "Gekopieerd!",
    delete: "Verwijderen",
    export: "Exporteren",
    install: "Installeren",
    view: "Bekijken",

    // Statussen
    noData: "Geen opgeslagen gegevens",
    noDataToSave: "Geen gegevens om op te slaan",
    dataEmpty: "Voer minimaal één waarde in",
    dataSaved: "Gegevens opgeslagen in geschiedenis!",
    dataSavedToday: "Gegevens opgeslagen voor vandaag",
    editMode: "Bewerkingsmodus geactiveerd",
    successSent: "Succesvol verzonden!",
    error: "Fout",
    dataDeleted: "Gegevens verwijderd",
    dataExported: "Gegevens geëxporteerd",

    // Formulieren
    units: "eenheden",
    add: "Toevoegen",
    subtract: "Aftrekken",

    // Taak 1
    personnelByZones: "Personeel per zone",
    cars: "Auto's",
    totalCars: "Totaal auto's",
    workersCount: "Aantal werknemers in",
    carsCount: "Aantal auto's",

    // Taak 2
    bikesAndTransport: "Fietsen en vervoer",
    quantity: "Hoeveelheid",

    // Taak 3
    officeSupplies: "Kantoorartikelen",
    room: "Kamer",

    // Geschiedenis
    historyTitle: "Geschiedenis opgeslagen gegevens",
    recordsFound: "Records gevonden",
    historyEmpty: "Geschiedenis is leeg",
    saveDataPrompt: "Sla gegevens op in een van de taken om ze hier te zien",
    detailedView: "Gedetailleerde weergave",
    deleteConfirm: "Verwijder alle gegevens voor",

    // PWA
    pwaInstall: "App installeren",
    pwaInstallDesc: "Voor een betere ervaring",
    pwaStatus: "PWA Status",
    online: "Online",
    offline: "Offline",
    installed: "Geïnstalleerd",
    inBrowser: "In browser",
    vibration: "Trillen",
    localStorage: "Lokale opslag",

    // Instellingen
    language: "Taal",
    ukrainian: "Українська",
    english: "English",
    dutch: "Nederlands",
  },
};

// Helper function for translations
const t = (lang, key) => translations[lang]?.[key] || key;

// Constants
const PERSONNEL_ZONES = [
  "Zone 220",
  "Zone 230",
  "Zone 240",
  "Zone 250",
  "Zone 260",
  "Zone 440",
  "Zone 520",
];

const BIKE_TYPES = [
  "Kinderzitje",
  "Buitenformaat",
  "Op te hangen",
  "Op te laden",
  "Steps",
  "Standaardfietsen",
  "MPA",
  "MV",
  "6A",
];

const PRINT_ITEMS = [
  "EK 1",
  "EK 2",
  "EK 3",
  "EK 4",
  "EK 5",
  "EK 6",
  "EK 7A",
  "EK 7B",
  "EK 7C",
  "EK 8A",
  "EK 8B",
  "EK 8C",
  "EK 9A",
  "EK 9B",
  "EK 9C",
  "EK 10A",
  "EK 10B",
  "EK 11A",
  "EK 11B",
  "EK 12",
  "EK 13",
  "EK 14",
  "EK 15",
  "EK 16",
  "EK 17",
  "EK 18",
  "EK 19",
];

const PRINT_ROOMS = ["50", "140", "162", "220", "250", "340", "422", "463"];

// Vibration patterns
const VIBRATION_PATTERNS = {
  light: [25],
  medium: [50],
  strong: [100],
  double: [50, 50, 50],
  success: [100, 50, 100],
  error: [200, 100, 200],
  buttonPress: [30],
  counterIncrease: [50],
  counterDecrease: [25],
  save: [100, 50, 100, 50, 100],
  delete: [200, 100, 200],
};

// Vibration helper function
const vibrateDevice = (pattern) => {
  if ("vibrate" in navigator) {
    if (typeof pattern === "string" && VIBRATION_PATTERNS[pattern]) {
      navigator.vibrate(VIBRATION_PATTERNS[pattern]);
    } else if (Array.isArray(pattern) || typeof pattern === "number") {
      navigator.vibrate(pattern);
    }
  }
};

// Storage helpers
const loadFromStorage = (key, defaultValue) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    console.error("Error loading from storage:", e);
    return defaultValue;
  }
};

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving to storage:", e);
  }
};

const getTodayKey = () => {
  const today = new Date();
  return today.toISOString().slice(0, 10);
};

const formatDate = (dateStr, lang = "ua") => {
  const date = new Date(dateStr);
  const locale = lang === "ua" ? "uk-UA" : lang === "nl" ? "nl-NL" : "en-US";
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getAllSavedDates = () => {
  const dates = new Set();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.includes("-data-")) {
      const match = key.match(/-data-(\d{4}-\d{2}-\d{2})/);
      if (match) {
        dates.add(match[1]);
      }
    }
  }
  return Array.from(dates).sort().reverse();
};

const getDataForDate = (date, task) => {
  const data = {};

  if (task === "task1") {
    data.personnel = loadFromStorage(`task1-personnel-data-${date}`, {});
    data.cars = loadFromStorage(`task1-cars-data-${date}`, 0);
  } else if (task === "task2") {
    data.bikes = loadFromStorage(`task2-bikes-data-${date}`, {});
  } else if (task === "task3") {
    PRINT_ROOMS.forEach((room) => {
      data[room] = loadFromStorage(`task3-data-${date}-${room}`, {});
    });
  }

  return data;
};

// Copy to clipboard function
const copyToClipboard = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
};

// PWA Install Banner Component
const PWAInstallBanner = ({ lang }) => {
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    const handleInstallPrompt = () => {
      setShowInstallBanner(true);
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      vibrateDevice("success");
    };

    window.addEventListener("pwa-install-available", handleInstallPrompt);
    window.addEventListener("pwa-installed", handleInstalled);

    return () => {
      window.removeEventListener("pwa-install-available", handleInstallPrompt);
      window.removeEventListener("pwa-installed", handleInstalled);
    };
  }, []);

  const handleInstall = () => {
    vibrateDevice("buttonPress");
    if (window.installPWA) {
      window.installPWA();
    }
    setShowInstallBanner(false);
  };

  const handleDismiss = () => {
    vibrateDevice("buttonPress");
    setShowInstallBanner(false);
  };

  if (!showInstallBanner || isInstalled) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📱</span>
          <div>
            <h3 className="font-semibold">{t(lang, "pwaInstall")}</h3>
            <p className="text-sm opacity-90">{t(lang, "pwaInstallDesc")}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleInstall}
            className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold text-sm hover:bg-gray-100 transition"
          >
            {t(lang, "install")}
          </button>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

// Toast Component
const Toast = ({ message, isVisible, onClose, type = "success" }) => {
  useEffect(() => {
    if (isVisible) {
      vibrateDevice(type === "success" ? "success" : "error");
    }
  }, [isVisible, type]);

  if (!isVisible) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const emoji = type === "success" ? "✅" : "❌";

  return (
    <div
      className={`fixed top-4 left-4 right-4 z-40 ${bgColor} text-white px-4 py-3 rounded-xl shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">
          {emoji} {message}
        </span>
        <button
          onClick={() => {
            vibrateDevice("buttonPress");
            onClose();
          }}
          className="ml-3 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// Bottom Sheet
const BottomSheet = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      vibrateDevice("light");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={() => {
          vibrateDevice("buttonPress");
          onClose();
        }}
      />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-center py-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>
        <div className="flex items-center justify-between px-6 pb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={() => {
              vibrateDevice("buttonPress");
              onClose();
            }}
            className="p-2 hover:bg-gray-100 rounded-xl transition text-2xl"
          >
            ✕
          </button>
        </div>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
};

// Counter Component
const Counter = ({ value, onChange, label, lang }) => {
  const handleIncrease = () => {
    if (value < 999) {
      vibrateDevice("counterIncrease");
      onChange(value + 1);
    }
  };

  const handleDecrease = () => {
    if (value > 0) {
      vibrateDevice("counterDecrease");
      onChange(value - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{label}</h2>
        <div className="rounded-xl shadow-md p-4 bg-white border">
          <span className="text-5xl font-bold text-blue-600">{value}</span>
          <p className="text-sm text-gray-500 italic mt-2">
            {t(lang, "units")}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <button
          onClick={handleIncrease}
          className="w-full h-20 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold text-lg flex items-center justify-center gap-2"
        >
          <span className="text-2xl">➕</span>
          {t(lang, "add")}
        </button>
        <button
          onClick={handleDecrease}
          className="w-full h-16 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-xl shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
        >
          <span className="text-xl">➖</span>
          {t(lang, "subtract")}
        </button>
      </div>
    </div>
  );
};

// Number Grid Component
const NumberGrid = ({ value, onChange, label, onClose, lang }) => {
  return (
    <div className="flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{label}</h2>
        <div className="rounded-xl shadow-md p-4 bg-white border">
          <span className="text-5xl font-bold text-purple-600">{value}</span>
          <p className="text-sm text-gray-500 italic mt-2">
            {t(lang, "units")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: 21 }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              vibrateDevice("buttonPress");
              onChange(i);
              onClose();
            }}
            className={`h-12 text-sm font-bold rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
              value === i
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-700 border hover:bg-purple-50 active:bg-purple-100"
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

// Task 1: Personnel & Cars
const Task1PersonnelCars = ({ onSubmit, isSubmitting, status, lang }) => {
  const [personnelData, setPersonnelData] = useState({});
  const [carsCount, setCarsCount] = useState(0);
  const [selectedZone, setSelectedZone] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const todayKey = getTodayKey();
    const savedPersonnel = loadFromStorage(
      `task1-personnel-data-${todayKey}`,
      {}
    );
    const savedCars = loadFromStorage(`task1-cars-data-${todayKey}`, 0);

    setPersonnelData(savedPersonnel);
    setCarsCount(savedCars);

    const hasData =
      Object.values(savedPersonnel).some((count) => count > 0) || savedCars > 0;
    setIsSaved(hasData);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const updatePersonnel = (zone, count) => {
    if (!isSaved) {
      setPersonnelData((prev) => ({ ...prev, [zone]: count }));
    }
  };

  const handleSave = () => {
    const hasData =
      Object.values(personnelData).some((count) => count > 0) || carsCount > 0;
    if (!hasData) {
      showToast(t(lang, "noDataToSave"), "error");
      return;
    }

    const todayKey = getTodayKey();
    saveToStorage(`task1-personnel-data-${todayKey}`, personnelData);
    saveToStorage(`task1-cars-data-${todayKey}`, carsCount);

    setIsSaved(true);
    vibrateDevice("save");
    showToast(t(lang, "dataSaved"));
  };

  const handleEdit = () => {
    setIsSaved(false);
    vibrateDevice("light");
    showToast(t(lang, "editMode"));
  };

  const handleSubmit = () => {
    const entries = [];
    Object.entries(personnelData).forEach(([zone, count]) => {
      if (count > 0) {
        entries.push({ zone: zone, type: "Personnel", count: count });
      }
    });
    if (carsCount > 0) {
      entries.push({ zone: "Parking", type: "Cars", count: carsCount });
    }
    if (entries.length === 0) {
      showToast(t(lang, "dataEmpty"), "error");
      return;
    }
    vibrateDevice("medium");
    onSubmit({
      task: "Task 1",
      date: new Date().toISOString().slice(0, 16),
      entries: entries,
    });
  };

  return (
    <div className="space-y-6">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "", type: "success" })}
        type={toast.type}
      />

      <div className="rounded-xl shadow-md p-4 bg-white space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <span className="text-xl">👥</span>
          {t(lang, "personnelByZones")}
        </h2>
        <div className="space-y-3">
          {PERSONNEL_ZONES.map((zone) => (
            <button
              key={zone}
              onClick={() => {
                if (!isSaved) {
                  vibrateDevice("buttonPress");
                  setSelectedZone(zone);
                }
              }}
              disabled={isSaved}
              className={`w-full rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-between ${
                isSaved
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-800"
              }`}
            >
              <span className="font-medium">{zone}</span>
              <span
                className={`px-3 py-1 rounded-lg text-sm font-bold ${
                  isSaved
                    ? "bg-gray-300 text-gray-500"
                    : "bg-blue-600 text-white"
                }`}
              >
                {personnelData[zone] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl shadow-md p-4 bg-white space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <span className="text-xl">🚗</span>
          {t(lang, "cars")}
        </h2>
        <button
          onClick={() => {
            if (!isSaved) {
              vibrateDevice("buttonPress");
              setSelectedZone("Parking");
            }
          }}
          disabled={isSaved}
          className={`w-full rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-between ${
            isSaved
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-green-50 hover:bg-green-100 active:bg-green-200 text-green-800"
          }`}
        >
          <span className="font-medium">{t(lang, "totalCars")}</span>
          <span
            className={`px-3 py-1 rounded-lg text-sm font-bold ${
              isSaved ? "bg-gray-300 text-gray-500" : "bg-green-600 text-white"
            }`}
          >
            {carsCount}
          </span>
        </button>
      </div>

      <div className="space-y-4">
        {!isSaved ? (
          <button
            onClick={handleSave}
            className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
          >
            <span className="text-xl">💾</span>
            {t(lang, "save")}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 bg-green-50 border-l-4 border-green-400 rounded-lg">
              <span className="text-xl">✅</span>
              <span className="text-green-800 font-medium">
                {t(lang, "dataSavedToday")}
              </span>
            </div>
            <button
              onClick={handleEdit}
              className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
            >
              <span className="text-xl">✏️</span>
              {t(lang, "edit")}
            </button>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span className="text-xl">📤</span>
          {isSubmitting ? t(lang, "sending") : t(lang, "send")}
        </button>
      </div>

      {status && (
        <div
          className={`p-4 rounded-xl shadow-md border ${
            status.success
              ? "bg-green-50 text-green-800 border-green-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <span className="font-medium">
            {status.success
              ? `✅ ${t(lang, "successSent")}`
              : `❌ ${t(lang, "error")}: ${status.error}`}
          </span>
        </div>
      )}

      <BottomSheet
        isOpen={!!selectedZone}
        onClose={() => setSelectedZone(null)}
        title={selectedZone || ""}
      >
        {selectedZone && selectedZone !== "Parking" ? (
          <Counter
            value={personnelData[selectedZone] || 0}
            onChange={(count) => updatePersonnel(selectedZone, count)}
            label={`${t(lang, "workersCount")} ${selectedZone}`}
            lang={lang}
          />
        ) : selectedZone === "Parking" ? (
          <Counter
            value={carsCount}
            onChange={(count) => !isSaved && setCarsCount(count)}
            label={t(lang, "carsCount")}
            lang={lang}
          />
        ) : null}
      </BottomSheet>
    </div>
  );
};

// Task 2: Bike Parking
const Task2BikeParking = ({ onSubmit, isSubmitting, status, lang }) => {
  const [bikeData, setBikeData] = useState({});
  const [selectedBikeType, setSelectedBikeType] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const todayKey = getTodayKey();
    const savedBikes = loadFromStorage(`task2-bikes-data-${todayKey}`, {});

    setBikeData(savedBikes);

    const hasData = Object.values(savedBikes).some((count) => count > 0);
    setIsSaved(hasData);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const updateBike = (type, count) => {
    if (!isSaved) {
      setBikeData((prev) => ({ ...prev, [type]: count }));
    }
  };

  const handleSave = () => {
    const hasData = Object.values(bikeData).some((count) => count > 0);
    if (!hasData) {
      showToast(t(lang, "noDataToSave"), "error");
      return;
    }

    const todayKey = getTodayKey();
    saveToStorage(`task2-bikes-data-${todayKey}`, bikeData);

    setIsSaved(true);
    vibrateDevice("save");
    showToast(t(lang, "dataSaved"));
  };

  const handleEdit = () => {
    setIsSaved(false);
    vibrateDevice("light");
    showToast(t(lang, "editMode"));
  };

  const handleSubmit = () => {
    const entries = [];
    Object.entries(bikeData).forEach(([type, count]) => {
      if (count > 0) {
        entries.push({ type: type, count: count });
      }
    });
    if (entries.length === 0) {
      showToast(t(lang, "dataEmpty"), "error");
      return;
    }
    vibrateDevice("medium");
    onSubmit({
      task: "Task 2",
      date: new Date().toISOString().slice(0, 16),
      entries: entries,
    });
  };

  return (
    <div className="space-y-6">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "", type: "success" })}
        type={toast.type}
      />

      <div className="rounded-xl shadow-md p-4 bg-white space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <span className="text-xl">🚴</span>
          {t(lang, "bikesAndTransport")}
        </h2>
        <div className="space-y-3">
          {BIKE_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => {
                if (!isSaved) {
                  vibrateDevice("buttonPress");
                  setSelectedBikeType(type);
                }
              }}
              disabled={isSaved}
              className={`w-full rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-between ${
                isSaved
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-orange-50 hover:bg-orange-100 active:bg-orange-200 text-orange-800"
              }`}
            >
              <span className="font-medium text-left">{type}</span>
              <span
                className={`px-3 py-1 rounded-lg text-sm font-bold ${
                  isSaved
                    ? "bg-gray-300 text-gray-500"
                    : "bg-orange-600 text-white"
                }`}
              >
                {bikeData[type] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {!isSaved ? (
          <button
            onClick={handleSave}
            className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
          >
            <span className="text-xl">💾</span>
            {t(lang, "save")}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 bg-green-50 border-l-4 border-green-400 rounded-lg">
              <span className="text-xl">✅</span>
              <span className="text-green-800 font-medium">
                {t(lang, "dataSavedToday")}
              </span>
            </div>
            <button
              onClick={handleEdit}
              className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
            >
              <span className="text-xl">✏️</span>
              {t(lang, "edit")}
            </button>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span className="text-xl">📤</span>
          {isSubmitting ? t(lang, "sending") : t(lang, "send")}
        </button>
      </div>

      {status && (
        <div
          className={`p-4 rounded-xl shadow-md border ${
            status.success
              ? "bg-green-50 text-green-800 border-green-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <span className="font-medium">
            {status.success
              ? `✅ ${t(lang, "successSent")}`
              : `❌ ${t(lang, "error")}: ${status.error}`}
          </span>
        </div>
      )}

      <BottomSheet
        isOpen={!!selectedBikeType}
        onClose={() => setSelectedBikeType(null)}
        title={selectedBikeType || ""}
      >
        {selectedBikeType && (
          <Counter
            value={bikeData[selectedBikeType] || 0}
            onChange={(count) => updateBike(selectedBikeType, count)}
            label={`${t(lang, "quantity")}: ${selectedBikeType}`}
            lang={lang}
          />
        )}
      </BottomSheet>
    </div>
  );
};

// Task 3: Print Rooms
const Task3PrintRooms = ({ onSubmit, isSubmitting, status, lang }) => {
  const [selectedRoom, setSelectedRoom] = useState(PRINT_ROOMS[0]);
  const [printData, setPrintData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const todayKey = getTodayKey();
    const currentData = loadFromStorage(
      `task3-data-${todayKey}-${selectedRoom}`,
      {}
    );
    const hasRoomData = Object.values(currentData).some((count) => count > 0);

    setPrintData(currentData);
    setIsSaved(hasRoomData);
  }, [selectedRoom]);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const updateItem = (item, count) => {
    if (!isSaved) {
      setPrintData((prev) => ({ ...prev, [item]: count }));
    }
  };

  const handleSave = () => {
    const hasData = Object.values(printData).some((count) => count > 0);
    if (!hasData) {
      showToast(t(lang, "noDataToSave"), "error");
      return;
    }

    const todayKey = getTodayKey();
    saveToStorage(`task3-data-${todayKey}-${selectedRoom}`, printData);
    setIsSaved(true);
    vibrateDevice("save");
    showToast(t(lang, "dataSaved"));
  };

  const handleEdit = () => {
    setIsSaved(false);
    vibrateDevice("light");
    showToast(t(lang, "editMode"));
  };

  const handleSubmit = () => {
    const entries = [];
    Object.entries(printData).forEach(([item, count]) => {
      if (count > 0) {
        entries.push({ type: item, count: count });
      }
    });
    if (entries.length === 0) {
      showToast(t(lang, "dataEmpty"), "error");
      return;
    }
    vibrateDevice("medium");
    onSubmit({
      task: "Task 3",
      zone: selectedRoom,
      date: new Date().toISOString().slice(0, 16),
      entries: entries,
    });
  };

  return (
    <div className="space-y-6">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "", type: "success" })}
        type={toast.type}
      />

      <div className="rounded-xl shadow-md p-4 bg-white space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
          <span className="text-xl">🖨️</span>
          {t(lang, "officeSupplies")}
        </h2>

        <div className="grid grid-cols-4 gap-2">
          {PRINT_ROOMS.map((room) => (
            <button
              key={room}
              onClick={() => {
                vibrateDevice("buttonPress");
                setSelectedRoom(room);
              }}
              className={`py-2 px-3 text-sm font-bold rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                selectedRoom === room
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-purple-50 active:bg-purple-100"
              }`}
            >
              {room}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {PRINT_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                if (!isSaved) {
                  vibrateDevice("buttonPress");
                  setSelectedItem(item);
                }
              }}
              disabled={isSaved}
              className={`w-full rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-between ${
                isSaved
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-purple-50 hover:bg-purple-100 active:bg-purple-200 text-purple-800"
              }`}
            >
              <span className="font-medium text-left">{item}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-bold ${
                    isSaved
                      ? "bg-gray-300 text-gray-500"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {printData[item] || 0}
                </span>
                <span className="text-gray-400">▶</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {!isSaved ? (
          <button
            onClick={handleSave}
            className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
          >
            <span className="text-xl">💾</span>
            {t(lang, "save")}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 bg-green-50 border-l-4 border-green-400 rounded-lg">
              <span className="text-xl">✅</span>
              <span className="text-green-800 font-medium">
                {t(lang, "dataSavedToday")}
              </span>
            </div>
            <button
              onClick={handleEdit}
              className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold flex items-center justify-center gap-2"
            >
              <span className="text-xl">✏️</span>
              {t(lang, "edit")}
            </button>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg shadow transition px-4 py-2 hover:scale-[1.02] active:scale-[0.98] transition-transform font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <span className="text-xl">📤</span>
          {isSubmitting ? t(lang, "sending") : t(lang, "send")}
        </button>
      </div>

      {status && (
        <div
          className={`p-4 rounded-xl shadow-md border ${
            status.success
              ? "bg-green-50 text-green-800 border-green-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <span className="font-medium">
            {status.success
              ? `✅ ${t(lang, "successSent")}`
              : `❌ ${t(lang, "error")}: ${status.error}`}
          </span>
        </div>
      )}

      <BottomSheet
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem || ""}
      >
        {selectedItem && (
          <NumberGrid
            value={printData[selectedItem] || 0}
            onChange={(count) => updateItem(selectedItem, count)}
            label={`${t(lang, "quantity")}: ${selectedItem}`}
            onClose={() => setSelectedItem(null)}
            lang={lang}
          />
        )}
      </BottomSheet>
    </div>
  );
};

// History Detail View
const HistoryDetailView = ({ date, onBack, lang }) => {
  const [selectedTask, setSelectedTask] = useState("task1");

  const task1Data = getDataForDate(date, "task1");
  const task2Data = getDataForDate(date, "task2");
  const task3Data = getDataForDate(date, "task3");

  const renderTask1Data = () => {
    const hasPersonnelData = Object.values(task1Data.personnel || {}).some(
      (count) => count > 0
    );
    const hasCarsData = task1Data.cars > 0;

    if (!hasPersonnelData && !hasCarsData) {
      return <div className="text-gray-500 italic">{t(lang, "noData")}</div>;
    }

    return (
      <div className="space-y-4">
        {hasPersonnelData && (
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">
              {t(lang, "personnelByZones")}:
            </h4>
            <div className="space-y-2">
              {Object.entries(task1Data.personnel).map(
                ([zone, count]) =>
                  count > 0 && (
                    <div
                      key={zone}
                      className="flex justify-between items-center p-2 bg-blue-50 rounded-lg"
                    >
                      <span>{zone}</span>
                      <span className="font-bold text-blue-600">{count}</span>
                    </div>
                  )
              )}
            </div>
          </div>
        )}

        {hasCarsData && (
          <div>
            <h4 className="font-semibold text-green-700 mb-2">
              {t(lang, "cars")}:
            </h4>
            <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
              <span>{t(lang, "totalCars")}</span>
              <span className="font-bold text-green-600">{task1Data.cars}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderTask2Data = () => {
    const entries = Object.entries(task2Data.bikes || {}).filter(
      ([_, c]) => c > 0
    );
    if (entries.length === 0)
      return <div className="text-gray-500 italic">{t(lang, "noData")}</div>;

    return (
      <div className="space-y-2">
        <h4 className="font-semibold text-orange-700 mb-2">
          {t(lang, "bikesAndTransport")}:
        </h4>
        {entries.map(([type, count]) => (
          <div
            key={type}
            className="flex justify-between items-center p-2 bg-orange-50 rounded-lg"
          >
            <span>{type}</span>
            <span className="font-bold text-orange-600">{count}</span>
          </div>
        ))}
        <button
          onClick={() => {
            vibrateDevice("buttonPress");
            const text = `${new Date(date).toLocaleDateString("uk-UA", {
              day: "2-digit",
              month: "2-digit",
            })}\n${t(lang, "bikes")}:`;
            const formatted = entries.reduce(
              (acc, [label, val]) => acc + `\n${label}: ${val}`,
              text
            );
            copyToClipboard(formatted);
            alert(t(lang, "copied"));
          }}
          className="mt-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg"
        >
          📋 {t(lang, "copy")}
        </button>
      </div>
    );
  };

  const renderTask3Data = () => {
    const hasData = Object.values(task3Data).some((roomData) =>
      Object.values(roomData || {}).some((count) => count > 0)
    );

    if (!hasData) {
      return <div className="text-gray-500 italic">{t(lang, "noData")}</div>;
    }

    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-purple-700 mb-2">
          {t(lang, "officeSupplies")}:
        </h4>
        {Object.entries(task3Data).map(([room, roomData]) => {
          const hasRoomData = Object.values(roomData || {}).some(
            (count) => count > 0
          );
          if (!hasRoomData) return null;

          return (
            <div key={room} className="space-y-2">
              <h5 className="font-medium text-purple-600">
                {t(lang, "room")} {room}:
              </h5>
              <div className="space-y-1 ml-4">
                {Object.entries(roomData).map(
                  ([item, count]) =>
                    count > 0 && (
                      <div
                        key={item}
                        className="flex justify-between items-center p-2 bg-purple-50 rounded-lg"
                      >
                        <span>{item}</span>
                        <span className="font-bold text-purple-600">
                          {count}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            vibrateDevice("buttonPress");
            onBack();
          }}
          className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition text-2xl"
        >
          ◀
        </button>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {formatDate(date, lang)}
          </h2>
          <p className="text-sm text-gray-500">{t(lang, "detailedView")}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => {
            vibrateDevice("buttonPress");
            setSelectedTask("task1");
          }}
          className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
            selectedTask === "task1"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border hover:bg-blue-50 active:bg-blue-100"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl">👥</span>
            <span className="text-xs font-medium">{t(lang, "personnel")}</span>
          </div>
        </button>
        <button
          onClick={() => {
            vibrateDevice("buttonPress");
            setSelectedTask("task2");
          }}
          className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
            selectedTask === "task2"
              ? "bg-orange-600 text-white"
              : "bg-white text-gray-700 border hover:bg-orange-50 active:bg-orange-100"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl">🚴</span>
            <span className="text-xs font-medium">{t(lang, "bikes")}</span>
          </div>
        </button>
        <button
          onClick={() => {
            vibrateDevice("buttonPress");
            setSelectedTask("task3");
          }}
          className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
            selectedTask === "task3"
              ? "bg-purple-600 text-white"
              : "bg-white text-gray-700 border hover:bg-purple-50 active:bg-purple-100"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl">🖨️</span>
            <span className="text-xs font-medium">{t(lang, "office")}</span>
          </div>
        </button>
      </div>

      <div className="rounded-xl shadow-md p-4 bg-white">
        {selectedTask === "task1" && renderTask1Data()}
        {selectedTask === "task2" && renderTask2Data()}
        {selectedTask === "task3" && renderTask3Data()}
      </div>
    </div>
  );
};

// History View
const HistoryView = ({ lang }) => {
  const [savedDates, setSavedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    const dates = getAllSavedDates();
    setSavedDates(dates);
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const handleDeleteDate = (date) => {
    vibrateDevice("buttonPress");
    if (
      window.confirm(`${t(lang, "deleteConfirm")} ${formatDate(date, lang)}?`)
    ) {
      vibrateDevice("delete");
      const keysToDelete = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.includes(`-data-${date}`)) {
          keysToDelete.push(key);
        }
      }

      keysToDelete.forEach((key) => localStorage.removeItem(key));

      const updatedDates = getAllSavedDates();
      setSavedDates(updatedDates);
      showToast(t(lang, "dataDeleted"));
    }
  };

  const exportData = () => {
    vibrateDevice("medium");
    const allData = {};
    savedDates.forEach((date) => {
      allData[date] = {
        task1: getDataForDate(date, "task1"),
        task2: getDataForDate(date, "task2"),
        task3: getDataForDate(date, "task3"),
      };
    });

    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `work-statistics-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    vibrateDevice("success");
    showToast(t(lang, "dataExported"));
  };

  if (selectedDate) {
    return (
      <HistoryDetailView
        date={selectedDate}
        onBack={() => setSelectedDate(null)}
        lang={lang}
      />
    );
  }

  return (
    <div className="space-y-6">
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "", type: "success" })}
        type={toast.type}
      />

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <span className="text-xl">📚</span>
            {t(lang, "historyTitle")}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {t(lang, "recordsFound")}: {savedDates.length}
          </p>
        </div>

        {savedDates.length > 0 && (
          <button
            onClick={exportData}
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform font-medium flex items-center gap-2"
          >
            <span className="text-lg">📄</span>
            {t(lang, "export")}
          </button>
        )}
      </div>

      {savedDates.length === 0 ? (
        <div className="text-center py-12">
          <span className="text-6xl text-gray-300 mb-4 block">📚</span>
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            {t(lang, "historyEmpty")}
          </h3>
          <p className="text-gray-500">{t(lang, "saveDataPrompt")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {savedDates.map((date) => (
            <div
              key={date}
              className="rounded-xl shadow-md p-4 bg-white border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {formatDate(date, lang)}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{date}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      vibrateDevice("buttonPress");
                      setSelectedDate(date);
                    }}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform font-medium flex items-center gap-2"
                  >
                    <span className="text-lg">👁️</span>
                    {t(lang, "view")}
                  </button>

                  <button
                    onClick={() => handleDeleteDate(date)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  >
                    <span className="text-lg">🗑️</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// PWA Status Component
const PWAStatus = ({ lang }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    setIsInstalled(isStandalone);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl shadow-md p-4 mx-4 mb-4">
      <h3 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
        📱 {t(lang, "pwaStatus")}:
      </h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              isOnline ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
          <span className="text-gray-700">
            {isOnline ? t(lang, "online") : t(lang, "offline")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              isInstalled ? "bg-green-500" : "bg-orange-500"
            }`}
          ></span>
          <span className="text-gray-700">
            {isInstalled ? t(lang, "installed") : t(lang, "inBrowser")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-gray-700">{t(lang, "vibration")}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="text-gray-700">{t(lang, "localStorage")}</span>
        </div>
      </div>
    </div>
  );
};

// Settings View
const SettingsView = ({ lang, setLang }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">⚙️ {t(lang, "settings")}</h2>
    <label className="block text-sm text-gray-600 mb-2">
      {t(lang, "language")}:
    </label>
    <select
      value={lang}
      onChange={(e) => {
        vibrateDevice("buttonPress");
        setLang(e.target.value);
        saveToStorage("app-language", e.target.value);
      }}
      className="w-full p-2 border rounded-lg"
    >
      <option value="ua">{t(lang, "ukrainian")}</option>
      <option value="en">{t(lang, "english")}</option>
      <option value="nl">{t(lang, "dutch")}</option>
    </select>
  </div>
);

// Main App Component
export default function App() {
  const [currentTask, setCurrentTask] = useState("task3");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [lang, setLang] = useState(() => {
    return loadFromStorage("app-language", "ua");
  });

  // Parse URL params for shortcuts
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const taskParam = urlParams.get("task");
    if (taskParam && ["task1", "task2", "task3"].includes(taskParam)) {
      setCurrentTask(taskParam);
    }
  }, []);

  // Request wake lock when app starts
  useEffect(() => {
    if (window.requestWakeLock) {
      window.requestWakeLock();
    }

    return () => {
      if (window.releaseWakeLock) {
        window.releaseWakeLock();
      }
    };
  }, []);

  const handleSubmit = useCallback(async (data) => {
    setIsSubmitting(true);
    setStatus(null);
    vibrateDevice("medium");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus({ success: true });
    vibrateDevice("success");
    setIsSubmitting(false);

    setTimeout(() => setStatus(null), 5000);
  }, []);

  const handleTaskChange = (task) => {
    vibrateDevice("buttonPress");
    setCurrentTask(task);

    // Update URL for shortcuts
    const url = new URL(window.location);
    if (task !== "history" && task !== "settings") {
      url.searchParams.set("task", task);
    } else {
      url.searchParams.delete("task");
    }
    window.history.replaceState({}, "", url);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      <PWAInstallBanner lang={lang} />

      <div className="max-w-lg mx-auto">
        <header className="rounded-xl shadow-md p-4 bg-white mb-4 mx-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-3">
              <span className="text-2xl">📊</span>
              {t(lang, "appTitle")} 1.16V
            </h1>
            <p className="text-sm text-gray-500 italic mt-2">
              {t(lang, "appDesc")}
            </p>
          </div>
        </header>

        <div className="rounded-xl shadow-md p-4 bg-white mx-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {t(lang, "chooseTask")}
          </h2>
          <div className="grid grid-cols-5 gap-3">
            <button
              onClick={() => handleTaskChange("task1")}
              className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                currentTask === "task1"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-blue-50 active:bg-blue-100"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">👥</span>
                <span className="text-xs font-medium">
                  {t(lang, "personnel")}
                </span>
              </div>
            </button>
            <button
              onClick={() => handleTaskChange("task2")}
              className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                currentTask === "task2"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-orange-50 active:bg-orange-100"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🚴</span>
                <span className="text-xs font-medium">{t(lang, "bikes")}</span>
              </div>
            </button>
            <button
              onClick={() => handleTaskChange("task3")}
              className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                currentTask === "task3"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-purple-50 active:bg-purple-100"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🖨️</span>
                <span className="text-xs font-medium">{t(lang, "office")}</span>
              </div>
            </button>
            <button
              onClick={() => handleTaskChange("history")}
              className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                currentTask === "history"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border hover:bg-indigo-50 active:bg-indigo-100"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">📚</span>
                <span className="text-xs font-medium">
                  {t(lang, "history")}
                </span>
              </div>
            </button>
            <button
              onClick={() => handleTaskChange("settings")}
              className={`p-3 rounded-lg shadow transition hover:scale-[1.02] active:scale-[0.98] transition-transform ${
                currentTask === "settings"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-700 border hover:bg-gray-50 active:bg-gray-100"
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">⚙️</span>
                <span className="text-xs font-medium">
                  {t(lang, "settings")}
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="rounded-xl shadow-md p-4 bg-white mx-4 mb-4">
          {currentTask === "task1" && (
            <Task1PersonnelCars
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              status={status}
              lang={lang}
            />
          )}
          {currentTask === "task2" && (
            <Task2BikeParking
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              status={status}
              lang={lang}
            />
          )}
          {currentTask === "task3" && (
            <Task3PrintRooms
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              status={status}
              lang={lang}
            />
          )}
          {currentTask === "history" && <HistoryView lang={lang} />}
          {currentTask === "settings" && (
            <SettingsView lang={lang} setLang={setLang} />
          )}
        </div>

        <PWAStatus lang={lang} />

        <div className="text-center mt-6 mx-4">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-gray-400">
              Work Statistics PWA v4.1.0 🚀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
