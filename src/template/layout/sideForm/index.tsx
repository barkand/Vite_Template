import { SideForm } from "@/core/components";

export default function SideFormComponent(props: any) {
  const { children, ...other } = props;

  return (
    <aside>
      <SideForm {...other}>{children}</SideForm>
    </aside>
  );
}
