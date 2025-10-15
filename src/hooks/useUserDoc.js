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


// src/hooks/useUserDoc.js
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase";

export function useUserDoc() {
  const [user, setUser] = useState(null);   // user Firebase Auth
  const [me, setMe] = useState(null);       // doc Firestore (name, role, ...)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      if (!u) { setMe(null); setLoading(false); return; }

      const ref = doc(db, "users", u.uid);
      const unsubDoc = onSnapshot(ref, (snap) => {
        setMe(snap.exists() ? snap.data() : null);
        setLoading(false);
      });

      return () => unsubDoc();
    });

    return () => unsubAuth();
  }, []);

  return { user, me, loading };
}