import { Helmet, HelmetProvider } from "react-helmet-async";

export default function HTMLHeader({ children }: any) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{import.meta.env.VITE_COMPANY_NAME}</title>
        <meta
          name="description"
          content={import.meta.env.VITE_COMPANY_DESCRIPTION}
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
}
