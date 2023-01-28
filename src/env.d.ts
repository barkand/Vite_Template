/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEFAULT_COPY_RIGHT: string;
  readonly VITE_DEFAULT_MODE: string;
  readonly VITE_DEFAULT_COLOR: string;
  readonly VITE_DEFAULT_LANGUAGE: string;
  readonly VITE_Background_light_primary: string;
  readonly VITE_Background_light_secondary: string;
  readonly VITE_Background_light_tertiary: string;
  readonly VITE_Background_dark_primary: string;
  readonly VITE_Background_dark_secondary: string;
  readonly VITE_Background_dark_tertiary: string;
  readonly VITE_COMPANY_NAME: string;
  readonly VITE_COMPANY_DESCRIPTION: string;
  readonly VITE_CLIENT_PATH: string;
  readonly VITE_SERVER_PATH: string;
  readonly VITE_UPLOAD_PATH: string;
  readonly VITE_UPLOAD_FOLDER: string;
  readonly VITE_REFRESH_SECRET_KEY: number;
  readonly VITE_GAS_LIMIT: string;
  readonly VITE_INFURA_ID: string;
  readonly VITE_WELCOME_FORM: string;
  readonly VITE_AUTH_TYPE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
