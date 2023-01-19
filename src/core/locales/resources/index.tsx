import publicFa from "./fa/public.json";
import publicEn from "./en/public.json";

import adminFa from "./fa/admin.json";
import adminEn from "./en/admin.json";

import marketFa from "./fa/market.json";
import marketEn from "./en/market.json";

import gameFa from "./fa/game.json";
import gameEn from "./en/game.json";

const resources = {
  fa: {
    public: publicFa,
    admin: adminFa,
    market: marketFa,
    game: gameFa,
  },
  en: {
    public: publicEn,
    admin: adminEn,
    market: marketEn,
    game: gameEn,
  },
};

export default resources;
