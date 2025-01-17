export const LOGO_URL = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "/assets/user1.png";

export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg')] bg-center bg-cover"
export const API_OPTIONS = {
  api_key: import.meta.env.VITE_TMDB_API_KEY,
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_READ
    }
  };

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w300";

export const SUPPORTED_LANGUAGES = [
  {identifier: 'en', language: 'English'},
  {identifier:'hindi', language: 'Hindi'},
  {identifier:'tel', language: 'Telugu'},
  {identifier:'es', language: 'Spanish'}
]

export const OPENAI_API_KEY = "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";
