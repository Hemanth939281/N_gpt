import Login from "./Login";


const Header = () => {
 
  
  

  return (
    <div>
      <div className="relative w-screen h-screen">
        {/* Netflix logo */}
        <img
          className="z-50 absolute w-44 bg-gradient-to-b from-black"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix logo"
        />
        {/* Background image */}
        <div className="absolute w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg')] bg-center bg-cover"></div>
        {/* Background overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-black/70"></div>
        <Login />
      </div>
    </div>
  );
};

export default Header;
