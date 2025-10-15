// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { doc, onSnapshot } from "firebase/firestore";
// import { auth, db } from "../firebase";

// export function useUserDoc() {
//   const [user, setUser] = useState(null);    // objet Auth (uid, email…)
//   const [docData, setDocData] = useState(null); // { role, email, ... }
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubAuth = onAuthStateChanged(auth, (u) => {
//       setUser(u || null);
//       if (!u) { setDocData(null); setLoading(false); return; }

//       const ref = doc(db, "users", u.uid);
//       const unsubDoc = onSnapshot(ref, (snap) => {
//         setDocData(snap.exists() ? snap.data() : null);
//         setLoading(false);
//       });

//       return () => unsubDoc();
//     });
//     return () => unsubAuth();
//   }, []);

//   return { user, me: docData, loading };
// }

import { useEffect, useState } from "react";

/** Stub: pas de Firebase -> renvoie "non connecté" */
export function useUserDoc() {
  const [loading, setLoading] = useState(false);
  const user = null;   // change en {} si tu veux simuler connecté
  const me = null;     // ex: { role: "seller" } pour tester RequireRole
  useEffect(() => {}, []);
  return { user, me, loading };
}
