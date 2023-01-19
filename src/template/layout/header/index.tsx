import { AppToolbar } from "../../../core/components";

export default function HeaderComponent({ children }: { children: any }) {
  return (
    <header>
      <AppToolbar sx={{ height: "50px", backgroundColor: "transparent" }}>
        {children}
      </AppToolbar>
    </header>
  );
}
