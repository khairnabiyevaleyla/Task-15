import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.scss";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./i18n";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000,
    },
  },
});

const ShowDevToolsInDevelopment = import.meta.env.MODE === "development" && (
  <ReactQueryDevtools initialIsOpen={false} />
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        {" "}
        <App />
      </CookiesProvider>
      {ShowDevToolsInDevelopment}
    </QueryClientProvider>
  </StrictMode>
);
