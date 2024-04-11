import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';

function UuidPage() {
  const params = useParams();


  useEffect(() => {
    async function fetchUrl () {
      const res = await fetch(`http://localhost:8080/${params.id}`);
      const data = await res.json();
      window.location.href = data.userLongUrl;
    }
    fetchUrl();
  }, [params.id])


  return (
    <></>
  );
}

export default UuidPage;
