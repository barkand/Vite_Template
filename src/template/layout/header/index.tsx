import { AppToolbar } from "../../../core/components";

export default function HeaderComponent({ children }: { children: any }) {
  return (
    <header>
      <AppToolbar style={{ height: "50px", backgroundColor: "transparent" }}>
        {children}
      </AppToolbar>
    </header>
  );
}
