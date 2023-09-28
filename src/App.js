import { Suspense } from "react";
import "./i18n";
import "./App.css";
import Tabs from "./components/Tabs";
import All from "./components/All";
import Active from "./components/Active";
import Completed from "./components/Completed";
import LanguageSwitcher from "./components/LanguageSwitcher";
import useTasks from "./context/useTasks";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const tasksData = useTasks();
  const [activeTab] = tasksData.activeTabProvider;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const withDone = searchParams.get("withDone");

  if (withDone === "1") {
    return (
      <div className="App">
        <Suspense fallback={null}>
          <h2 className="AppTitle">#todo ({t("all.label")})</h2>
          <All t={t} />
          <LanguageSwitcher />
        </Suspense>
      </div>
    );
  }

  if (withDone === "0") {
    return (
      <div className="App">
        <Suspense fallback={null}>
          <h2 className="AppTitle">#todo ({t("active.label")})</h2>
          <Active t={t} />
          <LanguageSwitcher />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="App">
      <Suspense fallback={null}>
        <h2 className="AppTitle">#todo</h2>
        <Tabs t={t} />
        {activeTab.all && <All t={t} />}
        {activeTab.active && <Active t={t} />}
        {activeTab.completed && <Completed t={t} />}
        <LanguageSwitcher />
      </Suspense>
    </div>
  );
}

export default App;
