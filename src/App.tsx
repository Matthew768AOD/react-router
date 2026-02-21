import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom"; // použíté importy z react routeru
// Link vytváří navigační odkazy (skrytě vytváří <a> tag), které mění URL stránky bez refreshe
// Routes funguje jako "switch", kouká se na aktuální URL a rozhoduje, která trasa se má vykreslit
// Route deklarují jednotlivé cesty a říkají, co se má přesně vykreslit
// Navigate ihned přesměrovává při renderu
// useNavigate funguje podobně jak Link, ale místo vytváření <a> tagu se volá
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function SecretPage() {
  return (<>
    <Navigate to="/about" replace /> {/* <Navigate to="URL_STRÁNKY_KAM_CHCEME_PŘESMĚROVAT" replace />*/}
    {/* replace maže z historie stránku, ze které jsme byly přesmerovány
     bez replace by vznikla otravná smyčka: home -> secrets --> about -> (uživatel pak např zmáčkne Back) -> secrets --> about
     Back vrací uživatele na stránku, která ho hned přesměruje zpátky na stránku, kde právě byl, což je matoucí */}
    <h2>SUPER SECRET INFO YOU CANNOT SEE</h2>
  </>)
}

export default function App() {
  const navigate = useNavigate(); // získáme funkci pro navigaci z kódu

  return (
    <div style={{ padding: 16 }}>
      <h1>React Router Learning</h1>

      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link> {/* <Link to="URL_STRÁNKY">NĚJAKÝ_TEXT</Link> */}
        <Link to="/about">About</Link>
        <Link to="/secrets">Secrets you cannot know</Link>
        <button onClick={() => navigate("/about")}>About button</button> {/* při kliknutí zavoláme funkci navigate a přesměrujeme na /about 
        JMÉNO_NAŠÍ_FUNKCE("URL_STRÁNKY") */}
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} /> {/* <Route path="URL_STRÁNKY" element ={<NĚJAKÁ_KOMPONENTA />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/secrets" element={<SecretPage />} />
      </Routes>
    </div>
  );
}