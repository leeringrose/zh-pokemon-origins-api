import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const useReference = (url: string | undefined) => {

  const [referenceData, setReferenceData] = useState(null);

  const fetchReference = useCallback(async (url: string | undefined) => {
    if (url) {
      const referenceResult = (await axios.get(url)).data;
      setReferenceData(referenceResult);
    }
  }, []);

  useEffect(() => {
    fetchReference(url)
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  }, [url]);

  return referenceData;
};

export default useReference;