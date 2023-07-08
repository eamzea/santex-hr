import { useEffect, useState } from 'react';

const useStateWithStorage = (key: string) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem(key);

    if (storage) {
      setValue(JSON.parse(storage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const modifyValue = (newValue: any) => {
    const storage = localStorage.getItem(key)

    setValue(newValue + (storage ? JSON.parse(storage) : 0));
  };

  return { value, modifyValue };
};

export default useStateWithStorage;
