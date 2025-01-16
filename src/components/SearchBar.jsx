import { useSelector } from "react-redux"
import lang from "../utils/language"

const SearchBar = () => {
    const languageIdentifier = useSelector(store => store.config.lang);
    const language = lang[languageIdentifier];
  return (
    <div className="relative z-40 bg-black py-4 rounded-lg mt-20">
        <form action="" className="flex justify-center gap-6">
              <input
               type="text"
               placeholder={`${language.searchPlaceholder}`}
               className="w-96 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            <button type="submit" className="py-2 px-4 bg-red-500 text-white rounded-lg">{language.search}</button>
        </form>
    </div>
  )
}

export default SearchBar